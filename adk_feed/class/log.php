<?php

class Log {
	protected $name = '';

	public function __construct( $name = '' ) {
		$this->name = $name ? '[' . $name . '] ' : '';
	}

	public function write( $msg ) {
		echo $this->name . $msg . "\n";
	}
}