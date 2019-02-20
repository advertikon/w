<?php
require_once( __DIR__ . '/log.php' );
require_once( __DIR__ . '/requestor.php' );

class Feed {

	protected $log;
	protected $requestor;

	public function __construct( $user, $pwd, $debug = false ) {
		$this->log = new Log( 'Feed' );
		$this->requestor = new Requestor( $user, $pwd, $debug );
		//$this->login();
	}

	public function search( $days_since = 30 ) {
		$pointer = 1;
		$count = 10;
		$total = 0;
		$memory = memory_get_usage( true );
		$time = microtime( true );

		do {
			$data = $this->requestor->search( $days_since, $count, $pointer );
			if ( $data->ReplyCode != 0 ) {
				throw new \Exception( 'Error: ' . $data->ReplyText );
			}

			$total = $data->getTotal();
			echo sprintf( "Fetched records %s-%s out of %s. Memory: %s MB, Time: %.2f\n",
				$pointer,
				$pointer + $count,
				$total,
				round( ( memory_get_usage( true ) - $memory ) / ( 1024 * 1024 ), 2 ),
				microtime( true ) - $time
			);

			$pointer += $count;
			$data = null;

			// foreach( $data->getData() as $item ) {
			// 	echo sprintf( "%s\t%s\t%s\n", $item->ID, $item->Building->BathroomTotal, $item->Price );
			// }
			
		} while( $pointer < 100 );
	}

	public function getMetadata( $id = '*' ) {
		$this->requestor->getMetadata( $id );
	}

	public function getMasterList( $start = 1, $count = 10 ) {
		$pointer = $start;

		do {
			$list = $this->requestor->getMasterList( $pointer, $count );
			$pointer += $count;
			echo 'Total count: ' . $list->getTotal() . "\n";

			foreach( $list->getData() as $data ) {
				echo implode( "\t", $data ) . "\n";
			}
			
		} while( $pointer < 20 );
	}

	///////////////////////////////////////////////////////////////////////////////////////////////

}