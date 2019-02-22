<?php
require_once( __DIR__ . '/log.php' );
require_once( __DIR__ . '/requestor.php' );

class Feed {

	protected $log;
	protected $requestor;

	/**
	 * Feed constructor.
	 * @param $user
	 * @param $pwd
	 * @param bool $debug
	 * @throws Exception
	 */
	public function __construct( $user, $pwd, $debug = false ) {
		$this->log = new Log( 'Feed' );
		$this->requestor = new Requestor( $user, $pwd, $debug );
	}

	/**
	 * @param callable $cb
	 * @param $date_since
	 * @throws Exception
	 */
	public function search(callable $cb, $date_since ) {
		$pointer = 1;
		$count = 100;
		$memory = memory_get_usage( true );
		$time = microtime( true );

		$this->log->write( sprintf( 'Fetching all the updated listings since %s...', $date_since ) );

		do {
			$data = $this->requestor->search( $date_since, $count, $pointer );
			if ( $data->ReplyCode != 0 ) {
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

	public function getMetadata( $id = '*' ) {
		$this->requestor->getMetadata( $id );
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

		do {
			/** @var ResponseMasterList $list */
			$list = $this->requestor->getMasterList( $count, $pointer );
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
		try {
			set_time_limit( 300 );
//		$this->fillMasterTable();
//		$this->removeDeleted();
			$this->updateListings();

		} catch ( \Exception $e ) {
			$this->log->write( $e->getMessage() );
		}
	}



	///////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * @throws Exception
	 */
	protected function fillMasterTable() {
		global $wpdb;

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
			"DELETE FROM {$wpdb->prefix}adk_feed_data WHERE id IN (
					SELECT ad.id FROM {$wpdb->prefix}adk_feed_data ad LEFT JOIN {$wpdb->prefix}adk_feed_master am USING (id) 
						WHERE am.id IS NULL  
				)"
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

		$d = new \DateTime( "today -1 day" );
		$from = $d->format( 'c' );
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
			        zip_code,
			        property_type,
			        building_type,
			        transaction_type,
			        year_built,
			        is_open,
			        photo,
			        last_update
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
                    NOW() -- last_update
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
			        last_update      = NOW()
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