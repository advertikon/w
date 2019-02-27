<?php
require_once( __DIR__ . '/log.php' );
require_once( __DIR__ . '/requestor.php' );

class Feed {

	protected $log;
	protected $requestor;
	protected $debug = false;
	protected $user;
	protected $pwd;

	const IMAGE_DIR = __DIR__ . '/../images/';
	const PAGE_SIZE = 10;

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

	public function query() {
		$where = [];

		$_POST['min_price'] = '100000';

		foreach( [
			'property_type'    => [ '%s', '=' .'property_type' ],
			'building_type'    => [ '%s', '=', 'building_type', ],
			'transaction_type' => [ '%s', '=', 'transaction_type', ],
			'beds'             => [ '%d', '>=', 'bedrooms' ],
			'bathrooms'        => [ '%d', '>=', 'bathrooms' ],
			'is_open'          => [ '%d', '=', 'is_open' ],
			'min_price'        => [ '%f', '>=', 'price' ],
			'max_price'        => [ '%f', '<=', 'price' ],
			'land_size'        => [ '%f', '>=', 'lot_size' ],
		] as $k => $type ) {
			if ( isset( $_POST[ $k ] ) ) {
				$where["{$type[ 2 ]} {$type[ 1 ]} {$type[ 0 ]}"] = $_POST[ $k ];
			}
		}

		$limit = Feed::PAGE_SIZE;

		if ( isset( $_POST['page'] ) ) {
			$offset = ( (int)$$_POST['page'] - 1 ) * Feed::PAGE_SIZE;

		} else {
			$offset = 0;
		}

		return $this->doQuery( $where, $offset, $limit );
	}

	public function doQuery( array $where = [], $offset, $limit ) {
		global $wpdb;

		$q = $wpdb->prepare(
			"SELECT * FROM {$wpdb->prefix}adk_feed_data " .
			( $where ? ' WHERE ' . implode( ' AND ', array_keys( $where ) ) : '' ) .
			" LIMIT $limit OFFSET $offset",
			array_values( $where )
		);

		$results = $wpdb->get_results( $q );

		foreach( $results as &$listing ) {
			if ( $listing->photo ) {
				$listing->photos = $this->getImage( $listing->id, json_decode( $listing->photo ) );

			} else {
				$listing->photos = [ [ plugin_dir_url( realpath( __DIR__  ) ) . 'images/no-image.jpg', '' ] ];
			}
		}

		return $results;
	}

	///////////////////////////////////////////////////////////////////////////////////////////////

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

	/**
	 * @param ResponsePropertyDetails $properties
	 * @throws Exception
	 */
	protected function doUpdate( ResponsePropertyDetails $properties ) {
		/** @var ResponsePropertyDetail $p */
		global $wpdb;

		$time1 = microtime( true );
		$mem1 = memory_get_usage( true );

		foreach( $properties->getData() as $p ) {
			$q = $wpdb->prepare( "INSERT INTO {$wpdb->prefix}adk_feed_data 
  				(
  					id,
			        listing_id,
			        bedrooms,
			        bathrooms,
			        floors,
			        square_feet,
			        lot_size,
			        price,
			        address,
			        city,
			        // TODO: get state
			        zip_code,
			        property_type,
			        building_type,
			        transaction_type,
			        year_built,
			        is_open,
			        photo,
			        last_update,
  				 	notes
                ) 
                  VALUES
                  (
                  	%d, -- id
                    %s, -- listing_id
                    %d, -- bedrooms
                    %d, -- bathrooms
                    %d, -- floors
                    %f, -- square_feet
                    %f, -- lot_size
                    %f, -- price
                    %s, -- address
                    %s, -- city
                    %s, -- zip_code
                    %s, -- property_type
                    %s, -- building_type
                    %s, -- transaction_type,
                    %d, -- year_built
                    %d, -- is_open
                    %s, -- photo
                    NOW(),-- last_update
                    %s  -- notes
                  ) ON DUPLICATE KEY UPDATE
			        listing_id       = %s,
			        bedrooms         = %d,
			        bathrooms        = %d,
			        floors           = %d,
			        square_feet      = %f,
			        lot_size         = %f,
			        price            = %f,
			        address          = %s,
			        city             = %s,
			        zip_code         = %s,
			        property_type    = %s,
			        building_type    = %s,
			        transaction_type = %s,
			        year_built       = %d,
			        is_open          = %d,
			        photo            = %s,
			        last_update      = NOW(),
                    notes            = %s
					",
				[
					$p->ID,
					$p->ListingID,
					$p->Building->BedroomsTotal,
					$p->Building->BathroomTotal,
					$p->Building->StoriesTotal,
					$p->Building->SizeExterior,
					$p->Land->SizeTotal,
					$p->Price,
					trim($p->Address->AddressLine1 . ' ' . $p->Address->AddressLine2 ),
					$p->Address->City,
					$p->Address->PostalCode,
					$p->PropertyType,
					$p->Building->ArchitecturalStyle,
					$p->TransactionType,
					$p->Building->ConstructedDate,
					$p->OpenHouse && $p->OpenHouse->Event && $p->OpenHouse->Event->StartDateTime,
					$this->getPhotoInfo( $p->Photo ),
					$p->PublicRemarks,

					$p->ListingID,
					$p->Building->BedroomsTotal,
					$p->Building->BathroomTotal,
					$p->Building->StoriesTotal,
					$p->Building->SizeExterior,
					$p->Land->SizeTotal,
					$p->Price,
					trim( $p->Address->AddressLine1 . ' ' . $p->Address->AddressLine2 ),
					$p->Address->City,
					$p->Address->PostalCode,
					$p->PropertyType,
					$p->Building->ArchitecturalStyle,
					$p->TransactionType,
					$p->Building->ConstructedDate,
					$p->OpenHouse && $p->OpenHouse->Event && $p->OpenHouse->Event->StartDateTime,
					$this->getPhotoInfo( $p->Photo ),
					$p->PublicRemarks,
				]
			);

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
}