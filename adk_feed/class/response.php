<?php
require_once( __DIR__ . '/log.php' );

class Response {
	protected $xml;
	public $ReplyCode = 0;
	public $ReplyText = '';
	protected $total = 0;
	protected $delimiter = '';
	protected $data = [];
	protected $log;

	public function __construct( $data ) {
		if ( is_a( $data, 'SimpleXmlElement' ) ) {
			$xml = $data;

		} else {
			$xml = new \SimpleXmlElement( $data );
			
		}

		$this->log = new Log( get_class( $this ) );
		$this->setXml( $xml );
		$this->xml = null;
	}

	public function __get( $name ) {
		if ( isset( $this->data[ $name ] ) ) {
			return $this->data[ $name ];
		}

		$this->log->write( sprintf( 'Object %s does not have property %s', get_class( $this ), $name ) );
		// var_dump( array_keys( $this->data ) );
	}

	public function getData() {
		return $this->data;
	}

	public function getReplyCode() {
		return $this->replyCode;
	}

	public function getReplyText() {
		return $this->replyText;
	}

	public function getTotal() {
		return $this->total;
	}

	public function setXml( \SimpleXmlElement $xml ) {
		$this->xml = $xml;
		$this->init();
		$this->runfillData();
	}

	///////////////////////////////////////////////////////////////////////////////////////////////

	protected function attr( \SimpleXmlElement $e, $name ) {
		foreach( $e as $k => $v ) {
			if ( $k === $name ) {
				return (string)$v;
			}
		}
	}

	protected function init() {
		foreach( $this->xml->attributes() as $k => $v ) {
			$this->$k = (string)$v;
		}

		if ( $this->ReplyCode ) {
			throw new \Exception( 'Error: ' . $this->ReplyText );
		}

		if ( $this->xml->COUNT ) {
			$this->total = $this->attr( $this->xml->COUNT->attributes(), 'Records' ); 
		}
	}

	protected function runfillData() {
		$this->fillData();
	}

	protected function fillData() {
		foreach( $this->xml as $k => $v ) {
			if ( is_a( $v, 'SimpleXmlElement' ) && $v->count() > 1 ) {
				if ( !file_exists( __DIR__ . '/response_' . strtolower( $k ) . '.php' ) ) {
					var_dump( $k );
					var_dump( $v->children() );
					die;
				}

				require_once( __DIR__ . '/response_' . strtolower( $k ) ) . '.php';
				$class = 'Response' . $k;
				$this->data[ $k ] = new $class( $v );

			} else {
				$this->data[ $k ] = (string)$v;
			}
		}
	}
}