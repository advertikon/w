<?php

class Log {
	protected $name = '';
	protected $log = null;
	const MAX_SIZE = 10000000; // ~10 MB

	public function __construct( $name = '' ) {
		$this->name = $name ? '[' . $name . '] ' : '';
		$this->log = fopen( dirname( __DIR__ ) . '/log', 'a' );
		$this->rotate();
	}

	public function write( $msg ) {
		$text = date( 'H:i:s' ) . ' ' . $this->name . $msg . "\n";
		fwrite( $this->log, $text );
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	protected function rotate() {
		if ( fstat( $this->log )['size'] > Log::MAX_SIZE ) {
			fseek( $this->log, 1024 );
			ftruncate( $this->log, ftell( $this->log ) );
		}
	}
}