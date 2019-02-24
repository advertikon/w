<?php

require_once __DIR__ . '/feed.php';

class DDFImage {
	protected $id;

	/**
	 * DDFImage constructor.
	 * @param $data
	 * @param array $headers
	 * @throws ErrorException
	 */
	public function __construct( $id, $data ) {
		if ( !$data ) {
			throw new \ErrorException( 'Failed to create image - data is empty' );
		}

		$this->id = $id;
		$this->save( $data );
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * @param $data
	 * @throws ErrorException
	 */
	protected function save( $data ) {
		$fileName = Feed::IMAGE_DIR . $this->id . '.jpeg';
		$dirName = dirname( $fileName );

		if ( !is_dir( $dirName ) && !mkdir( $dirName, 2775, true ) && !is_dir( $dirName ) ) {
			throw new \ErrorException( 'Failed to create folder ' . $dirName );
		}

		if ( !file_put_contents( $fileName, $data  ) ) {
			throw new ErrorException( 'Failed to save file ' . $fileName );
		}

		chmod( $fileName, 0664 );
	}

//	protected function parseHeaders( $header ) {
//		$ret = [];
//
//		foreach( explode( "\r\n", $header ) as $line ) {
//			list( $k ,$v ) = explode( ":", $line );
//			$ret[ trim( $k ) ] = trim( $v );
//		}
//
//		return $ret;
//	}
}