<?php
require_once( __DIR__ . '/log.php' );
require_once( __DIR__ . '/requestor.php' );

class Feed {

	protected $log;

	/** @var Requestor */
	protected $requestor;
	protected $debug = false;
	protected $user;
	protected $pwd;
	protected $totalRows = 0;

	const IMAGE_DIR = __DIR__ . '/../images/';
	const PAGE_SIZE = 18;

	/**
	 * Feed constructor.
	 * @param $user
	 * @param $pwd
	 * @param bool $debug
	 * @throws Exception
	 */
	public function __construct( $user, $pwd, $debug = false ) {
		$this->log = new Log( 'Feed' );
		$this->debug = $debug;
		$this->user = $user;
		$this->pwd = $pwd;
	}

	/**
	 * @param callable $cb
	 * @param $date_since
	 * @throws Exception
	 */
	public function search(callable $cb, $date_since ) {
		$pointer = 1;
		$count = 100;

		$this->log->write( sprintf( 'Fetching all the updated listings since %s...', $date_since ) );
		$this->loadRequstor();

		do {
			$memory = memory_get_usage( true );
			$time = microtime( true );
			$data = $this->requestor->request( 'search', array( $date_since, $count, $pointer ) );

			if ( (int)$data->ReplyCode !== 0 ) {
				throw new \Exception( 'Error: ' . $data->ReplyText );
			}

			$total = $data->getTotal();
			$this->log->write( sprintf( "Fetched records %s-%s out of %s. Memory: %s MB, Time: %.2f\n",
				$pointer,
				$pointer + $count,
				$total,
				round( ( memory_get_usage( true ) - $memory ) / ( 1024 * 1024 ), 2 ),
				microtime( true ) - $time
			) );

			$cb( $data );
			$pointer += $count;
			$data = null;

		} while( $pointer < $total );
	}

	/**
	 * @return array
	 * @throws Exception
	 */
	public function getMasterList() {
		$pointer = 1;
		$count = 100;
		$ret = [];
		$time1 = microtime( true );
		$mem1 = memory_get_usage( true );

		$this->log->write( 'Fetching master list...' );
		$this->loadRequstor();

		do {
			/** @var ResponseMasterList $list */
			try {
				$list = $this->requestor->request( 'getMasterList' );

			} catch( \Exception $e ) {
				$this->log->write( $e->getMessage() );
				throw $e;
			}

			$this->log->write( sprintf( 'Fetched %s master records', $list->getTotal() ) );
			$pointer += $count;

			$list->getData( $ret );
			
		} while( false );

		$this->log->write( sprintf(
			'Time: %.2f sec, Memory: %.2f MB',
			microtime( true ) - $time1,
			( memory_get_usage( true ) - $mem1 ) / ( 1024 * 1024 )
		) );

		return $ret;
	}

	/**
	 * @throws Exception
	 */
	public function process() {
		$time1 = microtime( true );
		$this->loadRequstor();

		try {
			set_time_limit( 300 );
			ignore_user_abort( true );
			$this->fillMasterTable();
			$this->removeDeleted();
			$this->updateListings();

		} catch ( \Exception $e ) {
			$this->log->write( $e->getMessage() );
		}

		$this->log->write( sprintf( 'Total time spent: %.2f sec', microtime( true ) - $time1 ) );
	}

	/**
	 * @param int $id Property ID
	 * @param ResponsePhoto[] $data
	 * @param string $size
	 * @return array
	 * @throws Exception
	 */
	public function getImage( $id, array $data, $size = 'LargePhoto' ) {
		$dirName = Feed::IMAGE_DIR  . $id . '/';
		$list = [];
		$ret = [];

		if ( !is_dir( $dirName ) ) {
			$this->log->write( 'Property ' . $id . ' does not have files. Fetch them' );
			$list[] = '*';

		} else {
			$files = scandir( $dirName, SCANDIR_SORT_ASCENDING );

			foreach( $data as $photoInfo ) {
				$fileName = $dirName  . $photoInfo->SequenceId . '.jpeg';

				if ( !in_array( $photoInfo->SequenceId . '.jpeg', $files, false ) ) {
					$list[] = $photoInfo->SequenceId;
					$this->log->write( 'File ' . $fileName . ' does not exist' );

				} else {
					$this->log->write( 'File ' . $fileName . ' exists' );
					$date = new \DateTime( $photoInfo->PhotoLastUpdated );

					if ( $date->getTimestamp() > filemtime( $fileName ) ) {
						$this->log->write( sprintf( 'File %s is stale - fetch anew', $fileName ) );
						$list[] = $photoInfo->SequenceId;

					} else {
						$this->log->write( sprintf( 'File %s is fresh. Serve cached copy', $fileName ) );
					}
				}
			} 
		}

		if ( $list ) {
			$this->loadRequstor();
			$this->requestor->request( 'getImage', array( $id, $list, $size ) );
		}

		foreach( $data as $photoInfo ) {
			$fileName = $dirName . $photoInfo->SequenceId . '.jpeg';
			$ret[] = [ plugin_dir_url( realpath( $fileName ) ) . basename( $fileName ),	$photoInfo->Description ];
		}

		return $ret;
	}

	/**
	 * @return array|object|null
	 * @throws Exception
	 */
	public function query() {
		$where = [];

		foreach( [
			'property_type'    => [ '%s', '=',  'property_type' ],
			'building_type'    => [ '%s', '=',  'building_type', ],
			'transaction_type' => [ '%s', '=',  'transaction_type', ],
			'bedrooms'         => [ '%d', '>=', 'bedrooms' ],
			'bathrooms'        => [ '%d', '>=', 'bathrooms' ],
			'is_open'          => [ '%d', '=',  'is_open' ],
			'price'            => [ '%f', '=',  'price' ],
			'min_price'        => [ '%f', '>=', 'price' ],
			'max_price'        => [ '%f', '<=', 'price' ],
			'land_size'        => [ '%f', '>=', 'lot_size' ],
		] as $k => $type ) {
			if ( !empty( $_POST[ $k ] ) ) {
				$val = $_POST[ $k ];

				if ( false !== strpos( $val, '-' ) ) {
					$vals = explode( '-' , $val );
					$min = str_replace( [ ' ', ',' ], '', $vals[ 0 ] );
					$max = str_replace( [ ' ', ',' ], '', $vals[ 1 ] );
					$where["{$type[ 2 ]} >= {$type[ 0 ]}"] = $min;
					$where["{$type[ 2 ]} <= {$type[ 0 ]}"] = $max;

				} else {
					$where["{$type[ 2 ]} {$type[ 1 ]} {$type[ 0 ]}"] = $_POST[ $k ];
				}
			}
		}

		$limit = Feed::PAGE_SIZE;

		if ( isset( $_POST['page'] ) ) {
			$offset = ( (int)$_POST['page'] - 1 ) * Feed::PAGE_SIZE;

		} else {
			$offset = 0;
		}

		return $this->doQuery( $where, $offset, $limit );
	}

	/**
	 * @param array $where
	 * @param int $offset
	 * @param int $limit
	 * @return array|object|null
	 * @throws Exception
	 */
	public function doQuery( array $where = [], $offset = 1, $limit = 1 ) {
		global $wpdb;

		$q = $wpdb->prepare(
			"SELECT SQL_CALC_FOUND_ROWS * FROM {$wpdb->prefix}adk_feed_data " .
			( $where ? ' WHERE ' . implode( ' AND ', array_keys( $where ) ) : '' ) .
			" LIMIT $limit OFFSET $offset",
			array_values( $where )
		);

		//echo $q . "<br>";

		$results = $wpdb->get_results( $q );
		$this->totalRows = $wpdb->get_var( " SELECT FOUND_ROWS()" );

		foreach( $results as &$listing ) {
			if ( $listing->photo ) {
				$listing->photos = $this->getImage( $listing->id, json_decode( $listing->photo ) );

			} else {
				$listing->photos = [ [ plugin_dir_url( realpath( __DIR__  ) ) . 'images/no-image.jpg', '' ] ];
			}
		}

		return $results;
	}

	public function propertyTypesAsSelect( $id ) {
		$name = 'property_type';

		return $this->getSearchSelect( $this->getSearchDataSet( $name ), $name, __( 'Property Type', 'adk_feed' ), $id );
	}

	public function transactionTypesAsSelect( $id ) {
		$name = 'transaction_type';

		return $this->getSearchSelect( $this->getSearchDataSet( $name ), $name, __( 'Transaction Type', 'adk_feed' ), $id );
	}

	public function buildingTypesAsSelect( $id ) {
		$name = 'building_type';
		$list = $this->getSearchDataSet( $name );
		array_unshift( $list, __( 'Any', 'adk_feed' ) );

		return $this->getSearchSelect( $list, $name, __( 'Building Type', 'adk_feed' ), $id );
	}

	public function parkingTypeAsSelect( $id ) {
		$name = 'parking';

		return $this->getSearchSelect( $this->getSearchDataSet( $name ), $name, __( 'Parking Type', 'adk_feed' ), $id );
	}

	public function bedroomsAsSelect( $id ) {
		$name = 'bedrooms';
		$rooms = $this->getSearchRange( $name );
		$list = $this->rangeToStep( $rooms );
		array_unshift( $list, __( 'Any', 'adk_feed' ) );

		return $this->getSearchSelect( $list, $name, __( 'Beds', 'adk_feed' ), $id );
	}

	public function bathroomsAsSelect( $id ) {
		$name = 'bathrooms';
		$rooms = $this->getSearchRange( $name );
		$list = $this->rangeToStep( $rooms );
		array_unshift( $list, __( 'Any', 'adk_feed' ) );

		return $this->getSearchSelect( $list, $name, __( 'Baths', 'adk_feed' ), $id );
	}

	public function buildingSizeAsSelect( $id ) {
		$name = 'square_feet_inner';
		$rooms = $this->getSearchRange( $name );
		$list = $this->rangeToDataSet( $rooms );
		array_unshift( $list, __( 'Any', 'adk_feed' ) );

		return $this->getSearchSelect( $list, $name, __( 'Building Size', 'adk_feed' ), $id );
	}

	public function squareFeetAsSelect( $id ) {
		$name = 'lot_size';
		$rooms = $this->getSearchRange( $name );

		return $this->getSearchSelect( $this->rangeToDataSet( $rooms ), $name, __( 'Lot Size', 'adk_feed' ), $id );
	}

	public function priceAsSelect( $id ) {
		$name = 'price';
		$rooms = $this->getSearchRange( $name );

		return $this->getSearchSelect( $this->rangeToDataSet( $rooms ), $name, __( 'Price', 'adk_feed' ), $id );
	}

	public function minRentAsSelect( $id ) {
		$name = 'rent-min';
		$range = $this->getSearchRange( $name );

		return $this->getSearchSelect( $this->rangeToSet( $range ), $name, __( 'Min Rent', 'adk_feed' ), $id );
	}

	public function maxRentAsSelect( $id ) {
		$name = 'rent-max';
		$range = $this->getSearchRange( $name );
		$list = $this->rangeToSet( $range );
		$list[0] = __( 'No limit', 'adk_feed' );
		ksort( $list );

		return $this->getSearchSelect( $list, $name, __( 'Max Rent', 'adk_feed' ), $id );
	}


	public function minPriceAsSelect( $id ) {
		$name = 'price-min';
		$range = $this->getSearchRange( $name );

		return $this->getSearchSelect( $this->rangeToSet( $range ), $name, __( 'Min Price', 'adk_feed' ), $id );
	}

	public function maxPriceAsSelect( $id ) {
		$name = 'price-max';
		$range = $this->getSearchRange( $name );
		$list = $this->rangeToSet( $range );
		$list[0] = __( 'No limit', 'adk_feed' );
		ksort( $list );

		return $this->getSearchSelect( $list, $name, __( 'Max Price', 'adk_feed' ), $id );
	}

	public function pagination( $buttons = 10 ) {
		$page = isset( $_POST['page'] ) ? min( Feed::PAGE_SIZE, max( 1, (int)$_POST['page'] ) ) : 1;
		$total = ceil( $this->totalRows / Feed::PAGE_SIZE );
		$start = [];
		$end = [];
		$middle = [];

		if ( $total <= 1 ) {
			return '';
		}

		if ( 1 === $page) {
			$end[] = $this->renderPageItem( '>', $total - 1 );
			$end[] = $this->renderPageItem( '>>', $total );

		} else if ( 2 === $page ) {
			$end[] = $this->renderPageItem( '>', $total - 1 );
			$end[] = $this->renderPageItem( '>>', $total );
			$start[] = $this->renderPageItem( '<', 1 );

		} else if ( $page === $total - 1 ) {
			$start[] = $this->renderPageItem( '<<', 1 );
			$start[] = $this->renderPageItem( '<', $page - 1 );
			$end[] = $this->renderPageItem( '>', $total );

		} else if ( $page === $total ) {
			$start[] = $this->renderPageItem( '<<', 1 );
			$start[] = $this->renderPageItem( '<', $page - 1 );

		} else {
			$start[] = $this->renderPageItem( '<<', 1 );
			$start[] = $this->renderPageItem( '<', $page - 1 );
			$end[] = $this->renderPageItem( '>', $page + 1 );
			$end[] = $this->renderPageItem( '>>', $total );
		}

		$buttonsCount = $buttons - count( $start ) - count( $end );
		$isLeft = false;
		$isRight = false;

		if ( $buttonsCount < $total ) {
			$buttonsCount--;

			// Stick to the left
			if ( $page <= $buttonsCount ) {
				array_unshift( $end, $this->renderPageItem( '...' ) );
				$isLeft = true;

			// Stick to the right
			} else if ( $total - $buttonsCount <= $page ) {
				$start[] = $this->renderPageItem( '...' );
				$isRight = true;

			} else {
				$buttonsCount--;
				array_unshift( $end, $this->renderPageItem( '...' ) );
				$start[] = $this->renderPageItem( '...' );
			}
		}

		if ( $isLeft ) {
			$from = 1;
			$to   = $buttonsCount;

		} else if ( $isRight ) {
			$from = $total - $buttonsCount;
			$to   = $total;

		} else {
			$from = $page - round( $buttonsCount / 2 );
			$to   = $page + round( $buttonsCount / 2 );
		}

		for( $i = $from; $i <= $to; $i++ ) {
			$middle[] = $this->renderPageItem( $i, $i, $i === $page );
		}

		$ret = [];
		$ret[] = '<div class="pagination">';
		$ret[] = '	<div class="pagination-wrapper">';
		$ret = array_merge( $ret, $start, $middle, $end );
		$ret[] = '	</div>';
		$ret[] = '</div>';

		return implode( "\n", $ret );
	}

	/**
	 * @param $id
	 * @return stdClass
	 * @throws Exception
	 */
	public function fetch( $id ) {
		global $wpdb;

		$q = $wpdb->prepare(
			"SELECT * FROM {$wpdb->prefix}adk_feed_data WHERE id = %d",
			$id
		);

		//echo $q . "<br>";

		$listing = $wpdb->get_row( $q );

		if ( $listing->photo ) {
			$listing->photos = $this->getImage( $listing->id, json_decode( $listing->photo ) );

		} else {
			$listing->photos = [ [ plugin_dir_url( realpath( __DIR__  ) ) . 'images/no-image.jpg', '' ] ];
		}

		return $listing;
	}

	///////////////////////////////////////////////////////////////////////////////////////////////
	protected function renderPageItem( $page, $pageNumber = null, $isActive = false ) {
		$status = [];

		if ( $isActive ) {
			$status[] = 'active';
		}

		if ( is_null( $pageNumber ) ) {
			$status[] = 'disabled';
		}

		return '<div class="page-item ' . implode( ' ', $status ) . '" data-page="' . $pageNumber . '">' . $page . '</div>';
	}

	protected function getSearchDataSet( $name ) {
		require_once __DIR__ . '/cache.php';
		global $wpdb;

		$name = $this->getName( $name );
		$ret = ADKCache::get( $name );

		if ( $ret ) {
			return $ret;
		}

		$ret = $wpdb->get_col( "SELECT DISTINCT $name FROM {$wpdb->prefix}adk_feed_data where $name <> ''" );
		$r = [];

		foreach( $ret as $i ) {
			$r[ $i ] = $i;
		}

		ADKCache::add( $name, $r );

		return $r;
	}

	protected function getSearchRange( $name ) {
		require_once __DIR__ . '/cache.php';
		global $wpdb;

		$name = $this->getName( $name );
		$ret = ADKCache::get( $name );

		if ( $ret ) {
			return $ret;
		}

		$ret = $wpdb->get_row( "SELECT MIN( $name ) min, MAX( $name ) max FROM {$wpdb->prefix}adk_feed_data where $name <> ''" );

		ADKCache::add( $name, $ret );

		return $ret;
	}

	protected function rangeToDataSet( \stdClass $range, $tiers = 6 ) {
		$ret = [];
		$min = (int)$range->min;
		$max = (int)$range->max;
		$range = $max - $min;
		$step = ceil( $range / $tiers );

		for( $i = $min; $i < $max; ) {
			$m = min( $max, $this->round( $i + $step ) );
			$v = sprintf( '%s - %s', number_format( $i ), number_format( $m ) );
			$ret[ $v ] = $v;
			$i = $m;
		}

		return $ret;
	}

	protected function rangeToSet( \stdClass $range ) {
		$ret = [];
		$min = (int)$range->min;
		$max = (int)$range->max;

		$current = $min;
		$ret[ $current ] = number_format( $current );
		$i = 0;

		while( $current <= $max ) {
			if ( $i > 100 ) die;

			$current += $this->getStep( $current );
			$current = $this->round( $current );
			$ret[ $current ] = number_format( $current );
			$i++;
		}

		return $ret;
	}

	protected function rangeToStep( \stdClass $range, $step = 1 ) {
		$ret = [];
		$min = (int)$range->min;
		$max = (int)$range->max;

		for( $i = $min; $i <= $max; $i += $step ) {
			$ret[ $i ] = number_format( $i );

			if ( $i < $max ) {
				$ret[ $i . '-0' ] = number_format( $i ) . '+';
			}
		}

		return $ret;
	}

	protected function round( $v ) {
		$log = (int)log10( $v );

		switch( $log ) {
			case 1:
			case 2;
				$newLog = $log;
				break;
			case 3:
			case 4:
				$newLog = 2;
				break;
			default:
				$newLog = 3;
		}

		$pow = pow( 10, $newLog );

		return (int)( $v / $pow ) * $pow;
	}

	protected function getStep( $val ) {
		foreach( [
			1000        => 100,
			2000        => 200,
			5000        => 500,
			10000       => 1000,
			20000       => 2000,
			50000       => 5000,
			100000      => 10000,
			500000      => 25000,
			1000000     => 50000,
			2000000     => 100000,
			10000000    => 500000,
			PHP_INT_MAX => 5000000
		] as $k => $v ) {
			if ( $val < $k ) {
				return $v;
			}
		}
	}

	protected function getSearchSelect( array $list, $name, $text, $id, $default = '' ) {
		$ret = [];
		$value = isset( $_POST[ $name ] ) ? $_POST[ $name ] : '';

		$ret[] = "<label for='$id' class='dropdownLabel'>$text</label>";
		$ret[] = "<select data-default='$default' data-hashkey='$name' name='ctl00\$MainContent\$ctl00\$ctl00\${$id}\$ctl00' data-placeholder='$text' id='$id'>";

		$y = 0;

		foreach( $list as $k => $i ) {
			$selected = '';

			if ( $value === $k ) {
				$selected = ' selected="selected" ';
			}

			$ret[] = '<option value="' . $k . '"' . $selected . '>' . $i . '</option>';
			$y++;
		}

		$ret[] = '</select>';

		return implode( "\n", $ret );
	}

	/**
	 * @throws Exception
	 */
	protected function loadRequstor() {
		if ( !$this->requestor ) {
			$this->requestor = new Requestor( $this->user, $this->pwd, $this->debug );
		}
	}

	/**
	 * @throws Exception
	 */
	protected function fillMasterTable() {
		global $wpdb;

		$q = '';
		$mList = $this->getMasterList();
		$i = 0;

		$time1 = microtime( true );
		$mem1 = memory_get_usage( true );

		$wpdb->query( "CREATE TEMPORARY TABLE {$wpdb->prefix}adk_feed_master (
	            id int(11) NOT NULL,
	            last_update datetime NOT NULL,
	            UNIQUE KEY id (id)
	        );"
		);

		$this->log->write( 'Temporary table created' );
		$total = count( $mList );

		foreach( $mList as $id => $upDate ) {
			if ( $i === 0 ) {
				$q = "INSERT INTO {$wpdb->prefix}adk_feed_master (id, last_update) VALUES";
				$values = [];
				$str = [];
			}

			$str[] = '(%d, %s)';
			$values[] = $id;
			$values[] = DateTime::createFromFormat( 'd/m/Y g:i:s A', $upDate )->format( 'Y-m-d H:i:s' );

			if ( $i === 50 || $total === 1 ) {
				$q .= implode( ',', $str );
				$wpdb->query( $wpdb->prepare( $q, $values ) );
				$i = 0;

			} else {
				$i++;
			}

			$total--;
		}

		$this->log->write( sprintf(
			'DB insertion Time: %.2f sec, Memory: %.2f MB',
			microtime( true ) - $time1,
			( memory_get_usage( true ) - $mem1 ) / ( 1024 * 1024 )
		) );

		$rowCount = $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->prefix}adk_feed_master" );
		$this->log->write( 'Total records in DB: ' . $rowCount );
	}

	protected function removeDeleted() {
		global $wpdb;

		$this->log->write( 'Removing obsolete records...' );
		$time1 = microtime( true );
		$mem1 = memory_get_usage( true );

		$wpdb->query(
			"DELETE fd FROM {$wpdb->prefix}adk_feed_data fd RIGHT JOIN {$wpdb->prefix}adk_feed_master am USING (id) 
				WHERE fd.id IS NULL"
		);

		$this->log->write( sprintf(
			'DB deletion Time: %.2f sec, Memory: %.2f MB',
			microtime( true ) - $time1,
			( memory_get_usage( true ) - $mem1 ) / ( 1024 * 1024 )
		) );

		$rowCount = $wpdb->rows_affected;
		$this->log->write( 'Total records removed: ' . $rowCount );
	}

	/**
	 * @throws Exception
	 */
	protected function updateListings() {
		$this->log->write( 'Updating listings...' );
		$from  = get_option( 'adk_feed_last_update', '1970-01-01 00:00:00' );
		// $from = '1970-01-01 00:00:00';

//		$d = new \DateTime( "today -1 day" );
//		$from = $d->format( 'c' );
		$this->search( [ $this, 'doUpdate' ], $from );

		update_option( 'adk_feed_last_update', date( 'Y-m-d H:i:s' ) );
	}


	protected function getFields( ResponsePropertyDetail $p ) {
		// Pattern, value, in insert, in update
		return [
			'id'                  => [ '%d', $p->ID, true, false ],
			'listing_id'          => [ '%s', $p->ListingID, true, true ],
			'bedrooms'            => [ '%d', $p->Building->BedroomsTotal, true, true ],
			'bathrooms'           => [ '%d', $p->Building->BathroomTotal, true, true ],
			'floors'              => [ '%d', $p->Building->StoriesTotal, true, true ],
			'square_feet'         => [ '%d', (int)$p->Building->SizeExterior, true, true ], // sqft
			'square_feet_inner'   => [ '%d', (int)$p->Building->SizeInterior, true, true ], // sqft
			'lot_size'            => [ '%f', (float)$p->Land->SizeTotal, true, true ], // acre
			'price'               => [ '%f', $p->Price, true, true ],
			'address'             => [ '%s', $p->Address->AddressLine1, true, true ],
			'city'                => [ '%s', $p->Address->City, true, true ],
			'zip_code'            => [ '%s', $p->Address->PostalCode, true, true ],
			'property_type'       => [ '%s', $p->PropertyType, true, true ],
			'building_type'       => [ '%s', $p->Building->Type, true, true ],
			'transaction_type'    => [ '%s', $p->TransactionType, true, true ],
			'year_built'          => [ '%d', $p->Building->ConstructedDate, true, true ],
			'is_open'             => [ '%d', $p->OpenHouse && $p->OpenHouse->Event && $p->OpenHouse->Event->StartDateTime, true, true ],
			'photo'               => [ '%s', $this->getPhotoInfo( $p->Photo ), true, true ],
			'notes'               => [ '%s', $p->PublicRemarks, true, true ],

			'lot_size_text'       => [ '%s', $p->Land->SizeTotalText, true, true ],
			'price_per_time'      => [ '%f', $p->PricePerTime, true, true ],
			'price_per_unit'      => [ '%f', $p->PricePerUnit, true, true ],
			'address2'            => [ '%s', $p->Address->AddressLine2, true, true ],
			'county'              => [ '%s', $p->Address->CommunityName, true, true ],
			'province'            => [ '%s', $p->Address->Province, true, true ],
			'street_number'       => [ '%s', $p->Address->StreetNumber, true, true ],
			'street_address'      => [ '%s', $p->Address->StreetAddress, true, true ],
			'neighbor'            => [ '%s', $p->Address->Neighbourhood, true, true ],
			'parking'             => [ '%s', $p->ParkingSpaces->Parking->Name, true, true ],
			'scenery'             => [ '%s', $p->ViewType, true, true ],
			'building_appliances' => [ '%s', $p->Building->Appliances ],
			'land_appliances'     => [ '%s', $p->Land->Amenities ],
			'farm_type'           => [ '%s', $p->FarmType ],
			'zoning_type'         => [ '%s', $p->ZoningType ],
			'rent'                => [ '%f', $p->Lease, true, true ],
			'rent_per_time'       => [ '%f', $p->LeasePerTime, true, true ],
			'rent_per_unit'       => [ '%f', $p->LeasePerUnit, true, true ],
			'agent_name'          => [ '%s', $p->AgentDetails->Name, true, true ],
			'agent_phone'         => [ '%s', implode( ',', (array)$p->AgentDetails->Phones->Phone ), true, true ],
			'agent_office_name'   => [ '%s', $p->AgentDetails->Office->Name, true, true ],
			'agent_office_phone'  => [ '%s', implode( ',', (array)$p->AgentDetails->Office->Phones->Phone ), true, true ],
		];
	}

	/**
	 * @param ResponsePropertyDetails $properties
	 * @throws Exception
	 */
	protected function doUpdate( ResponsePropertyDetails $properties ) {
		/** @var ResponsePropertyDetail $p */
		global $wpdb;

		$time1 = microtime( true );
		$mem1 = memory_get_usage( true );
		$placeholders = [];
		$values = [];

		foreach( $properties->getData() as $p ) {
			$fields = $this->getFields( $p );

//			var_dump( $p->AgentDetails );
//			throw new \Exception('gpp' );

			foreach( $fields as $k => $v ) {
				$placeholders[ $k ] = $v[ 0 ];
			}

			foreach( $fields as $k => $v ) {
				$values[ $k ] = $v[ 1 ];
			}

			$q = $wpdb->prepare( "INSERT INTO {$wpdb->prefix}adk_feed_data 
  				(" . implode( ',', array_keys( $placeholders ) ) . ") 
                VALUES(" . implode( ',', $placeholders ) . ")",
				$values
			);

			$wpdb->query( "DELETE FROM {$wpdb->prefix}adk_feed_data WHERE id = " . (int)$fields['id'][ 1 ] );
			$wpdb->query( $q );

			if ( !$wpdb->rows_affected ) {
				//echo $q . "\n";
				throw new \Exception( 'Failed to update record: ' . $wpdb->last_error );
			}
		}

		$this->log->write( sprintf(
			'DB insertion Time: %.2f sec, Memory: %.2f MB',
			microtime( true ) - $time1,
			( memory_get_usage( true ) - $mem1 ) / ( 1024 * 1024 )
		) );
	}

	protected function getPhotoInfo( $data ) {
		if ( !is_a( $data, 'ResponsePhoto' ) ) {
			return '';
		}

		$ret = [];

		/** @var ResponsePhoto $data */
		/** @var ResponsePropertyPhoto $info */

		foreach( $data->getData() as $info ) {
			$ret[] = [
				'SequenceId'       => $info->SequenceId,
				'Description'      => $info->Description,
				'PhotoLastUpdated' => $info->PhotoLastUpdated,
			];
		}

		return json_encode( $ret );
	}

	protected function getName( $name ) {
		return strstr( $name, '-', true ) ?: $name;
	}
}