<?php

class Log {
	protected $name = '';
	protected $log = null;

	public function __construct( $name = '' ) {
		$this->name = $name ? '[' . $name . '] ' : '';
		$this->log = fopen( dirname( __DIR__ ) . '/log', 'w' );
	}

	public function write( $msg ) {
		$text = date( 'H:i:s' ) . ' ' . $this->name . $msg . "\n";
		fwrite( $this->log, $text );
	}
}