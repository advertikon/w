<?php
require_once __DIR__ . '/log.php';

/**
 * Class Response
 * @property string ReplyCode
 * @property string ReplyText
 *
 */
class Response {
	/** @var \SimpleXMLElement */
	protected $xml;
	public $ReplyCode = 0;
	public $ReplyText = '';
	protected $total = 0;
	protected $delimiter = '';
	protected $data = [];
	protected $log;

	protected $dumpXML = false;

	/**
	 * Response constructor.
	 * @param $data
	 * @throws Exception
	 */
	public function __construct($data ) {
		if ( is_a( $data, 'SimpleXmlElement' ) ) {
			$xml = $data;

		} else {
			$xml = new \SimpleXmlElement( $data );
		}

		$this->log = new Log( get_class( $this ) );
		$this->setXml( $xml );

		if ( !is_a( $this, 'ResponseMasterList' ) ) {
			$this->xml = null;
		}

		if ( $this->dumpXML ) {
			var_dump( $xml );
			die;
		}
	}

	public function __get( $name ) {
		if ( isset( $this->data[ $name ] ) ) {
			return $this->data[ $name ];
		}

//		$this->log->write( sprintf( 'Object %s does not have property %s', get_class( $this ), $name ) );
//		$this->log->write( print_r( array_keys( $this->data ), 1 ) );

		return '';
	}

	public function getData() {
		return $this->data;
	}

	public function getReplyCode() {
		return $this->ReplyCode;
	}

	public function getReplyText() {
		return $this->ReplyText;
	}

	public function getTotal() {
		return $this->total;
	}

	/**
	 * @param SimpleXmlElement $xml
	 * @throws Exception
	 */
	public function setXml(\SimpleXmlElement $xml ) {
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

		return '';
	}

	/**
	 * @throws Exception
	 */
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

	/**
	 * @throws Exception
	 */
	protected function runfillData() {
		$this->fillData();
	}

	/**
	 * @throws Exception
	 */
	protected function fillData() {
		foreach( $this->xml as $k => $v ) {
			if ( is_a( $v, 'SimpleXmlElement' ) && $v->count() > 1 ) {
				if ( !file_exists( __DIR__ . '/response_' . strtolower( $k ) . '.php' ) ) {
					throw new \Exception(
						'File ' . __DIR__ . '/response_' . strtolower( $k ) . '.php' . ' does not exist' );
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