<?php

class ADKCache {
	const TIME = 86400; // a day

	static protected $dir = __DIR__ . '/../cache/';

	static public function add( $k, $v ) {
		if ( !is_dir( self::$dir ) ) {
			mkdir( self::$dir, 0775, true );
		}

		file_put_contents( self::$dir . $k, serialize( $v ) );
	}

	static public function get( $k ) {
		if ( is_file( self::$dir . $k ) && filemtime( self::$dir . $k ) + self::TIME < time() ) {
			return unserialize( file_get_contents( self::$dir . $k ) );
		}

		return null;
	}

	static public function flush() {
		foreach( scandir( self::$dir ) as $i ) {
			if ( is_file( $i ) ) {
				unlink( self::$dir  . $i );
			}
		}
	}
}