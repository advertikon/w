<?php

require_once( __DIR__ . '/response.php' );
require_once( __DIR__ . '/response_propertydetail.php' );

class ResponsePropertyDetails extends Response {
	protected function runFillData() {
		foreach( $this->xml->{'RETS-RESPONSE'}[ 0 ]->PropertyDetails as $d ) {
			$this->data[] = new ResponsePropertyDetail( $d );
		}
	}
}