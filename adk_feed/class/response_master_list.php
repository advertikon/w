<?php

require_once( __DIR__ . '/response.php' );

class ResponseMasterList extends Response {

	public function getData() {
		$ret = [];

		foreach ( $this->xml->DATA as $line ) {
			$ret[] = explode( $this->delimiter, trim( $line ) );
		}

		return $ret;
	}

	///////////////////////////////////////////////////////////////////////////////////////////////

	protected function init() {
		parent::init();
		$this->delimiter = chr( intval( $this->attr( $this->xml->DELIMITER[ 0 ]->attributes(), 'value' ), 16 ) );
	}
	
}