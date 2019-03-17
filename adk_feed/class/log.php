<?php

class Log {
	protected $name = '';
	protected static $log = null;
	const MAX_SIZE = 10000000; // ~10 MB

	public function __construct( $name = '' ) {
		$this->name = $name ? '[' . $name . '] ' : '';

		if ( !self::$log ) {
			self::$log = fopen( dirname( __DIR__ ) . '/log', 'ab' );
			self::rotate();
		}
	}

	public function write( $msg ) {
		$text = date( 'H:i:s' ) . ' ' . $this->name . $msg . "\n";
		fwrite( self::$log, $text );
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	protected static function rotate() {
		if ( fstat( self::$log )['size'] > Log::MAX_SIZE ) {
			fseek( self::$log, 1024 );
			ftruncate( self::$log, ftell( self::$log ) );
		}
	}
}