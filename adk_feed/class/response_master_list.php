<?php

require_once( __DIR__ . '/response.php' );

class ResponseMasterList extends Response {

	/**
	 * @param array|null $list
	 * @return array In a form od [ID] => LastUpdated
	 */
	public function getData( array &$list = null ) {
		if ( is_null( $list ) ) {
			$list = [];
		}

		foreach ( $this->xml->DATA as $line ) {
			list( $k, $v ) = explode( $this->delimiter, trim( $line ) );
			$list[ $k ] = $v;
		}

		return $list;
	}

	///////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * @throws Exception
	 */
	protected function init() {
		parent::init();
		$this->delimiter = chr( intval( $this->attr( $this->xml->DELIMITER[ 0 ]->attributes(), 'value' ), 16 ) );
	}
	
}