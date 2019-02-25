<?php

require_once( __DIR__ . '/response.php' );
require_once __DIR__ . '/response_propertyphoto.php';

class ResponsePhoto extends Response {
	protected function runfillData() {
		foreach( $this->xml->{'PropertyPhoto'} as $p ) {
			$this->data[] = new ResponsePropertyPhoto( $p );
		}
	}
}