<?php

require_once __DIR__ . '/feed.php';
require_once __DIR__ . '/log.php';

class DDFImage {
	protected $id;
	protected $data;
	protected $log;

	/**
	 * DDFImage constructor.
	 * @param $data
	 * @param array $headers
	 * @throws ErrorException
	 */
	public function __construct( $id, $data, $list ) {
		if ( !$data ) {
			throw new \ErrorException( 'Failed to create image - data is empty' );
		}

		$this->data = $data;
		$this->log  = new Log( 'DDFImage' );
		$this->id   = $id;

		$signature = $this->getSignatire();
		$pointer   = strpos( $data, $signature, 0 );
		$start     = $pointer;

		if ( false === $pointer ) {
			throw new \ErrorException( 'Unknown file signature' );
		}

		while( ( $pointer = strpos( $data, $signature, $start + strlen( $signature ) ) ) !== false ) {
			if ( !$list ) {
				throw new \ErrorException( 'File ID is missing' );
			}

			$imageId = array_shift( $list );
			$this->save( $imageId, $start, $pointer );
			$start = $pointer;
		}

		if ( $pointer !== strlen( $data ) ) {
			if ( !$list ) {
				throw new \ErrorException( 'File ID is missing' );
			}

			$imageId = array_shift( $list );
			$this->save( $imageId, $start, strlen( $data ) );
		}

	}

	static public function getBoundary( array $headers ) {
		$boundary = '';

		foreach( $headers as $line ) {
			if ( preg_match( '/Content-Type.+boundary=(.+?)(\s|$)/i', $line, $m ) ) {
				$boundary = $m[ 1 ];
				break;
			}
		}

		if ( !$boundary ) {
			throw new \ErrorException( 'Image boundary is missing' );
		}

		return $boundary;
	}

	static public function getObjectsList( array $headers ) {
		$list = '';
		$ret = [];

		foreach( $headers as $line ) {
			if ( preg_match( '/ObjectID:\s*(.+)$/i', $line, $m ) ) {
				$list = $m[ 1 ];
				break;
			}
		}

		if ( !$list ) {
			throw new \ErrorException( 'Image list is missing' );
		}

		foreach( explode( ',', $list ) as $l ) {
			$ret[] = trim( $l );
		}

		return $ret;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * @param $data
	 * @throws ErrorException
	 */
	protected function save( $id, $start, $end ) {
		$fileName = Feed::IMAGE_DIR . $this->id . '/' . $id  . '.jpeg';
		$dirName = dirname( $fileName );

		if ( !is_dir( $dirName ) && !mkdir( $dirName, 0775, true ) && !is_dir( $dirName ) ) {
			throw new \ErrorException( 'Failed to create folder ' . $dirName );
		}

		if ( !file_put_contents( $fileName, substr( $this->data, $start, $end ) ) ) {
			throw new ErrorException( 'Failed to save file ' . $fileName );
		}

		chmod( $fileName, 0664 );
		$this->log->write( sprintf( 'File %s is saved', $fileName ) );

	}

	protected function getSignatire() {
		return "\xFF\xD8\xFF\xE0"; // JPEG
	}
}