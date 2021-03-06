<?php
require_once( __DIR__ . '/log.php' );
require_once __DIR__ . '/unlogged.php';
require_once __DIR__ . '/unauthorized.php';

class Requestor {
	protected $name = '';
	protected $pwd = '';
	protected $log;

	// protected $loginUrl     = 'http://sample.data.crea.ca/Login.svc/Login';
	// protected $metadataUrl  = 'http://sample.data.crea.ca/Metadata.svc/GetMetadata';
	// protected $searchUrl    = 'http://sample.data.crea.ca/Search.svc/Search';
	// protected $getObjectUrl = 'http://sample.data.crea.ca/GetObject.svc/GetObject';
	// protected $logoutUrl    = 'http://sample.data.crea.ca/Logout.svc/Logout';

	protected $loginUrl     = 'http://data.crea.ca/Login.svc/Login';
	protected $metadataUrl  = 'http://data.crea.ca/Metadata.svc/GetMetadata';
	protected $searchUrl    = 'http://data.crea.ca/Search.svc/Search';
	protected $getObjectUrl = 'http://data.crea.ca/GetObject.svc/GetObject';
	protected $logoutUrl    = 'http://data.crea.ca/Logout.svc/Logout';

	protected $isPost = false;
	protected $data = [];
	protected $headersIn = '';
	protected $headersOut = [];
	protected $persistent_headers = [
		'RETS-Version' => "RETS/1.7.2",
		'User-Agent'   => 'CURL',
	];
	protected $headers = [];
	protected $responseCode;
	protected $response;
	protected $rawResponse = '';

	protected $auth_realm = '';
	protected $auth_nonce = '';
	protected $auth_qop = '';
	protected $auth_url = 'Login.svc/Login';
	protected $auth_cnonce = '';
	protected $auth_request_count = 0;
	protected $auth_response = '';

	protected $url = '';
	protected $debug = false;
	protected $session_id = '';
	protected $request_id = '';
	protected $auth_uri = '';

	protected $loginAttempts = 0;

	const MUTEX = __DIR__ . '/../mutex';
	const NONCE = __DIR__ . '/../nonce';
	const LOGIN_ATTEMPTS = 2;
	const MUTEX_LIFETIME = 120;

	/**
	 * Requestor constructor.
	 * @param $name
	 * @param $pwd
	 * @param $debug
	 * @throws Exception
	 */
	public function __construct($name, $pwd, $debug ) {
		$this->name  = $name;
		$this->pwd   = $pwd;
		$this->log   = new Log( 'Requester#' . uniqid() );
		$this->debug = $debug;
		$this->initAuthData();

		if ( file_exists( Requestor::MUTEX ) ) {
			if ( filemtime( Requestor::MUTEX ) + Requestor::MUTEX_LIFETIME < time() ) {
				file_put_contents( Requestor::MUTEX, '1' );
				$this->log->write( 'Mutex is stale - reset it' );

			} else {
				file_put_contents( Requestor::MUTEX, (int)file_get_contents( Requestor::MUTEX ) + 1 );
				$this->log->write( 'Incrementing open sessions count' );
			}

		} else {
			file_put_contents( Requestor::MUTEX, '1' );
			$this->log->write( 'Mutex is missing, initialize it' );
		}

		if ( !$this->auth_nonce ) {
			$this->log->write( 'No saved session' );
			$this->login();

		} else {
			$this->log->write( 'Using saved session data' );
			$this->calculateDigestResponseCode();
		}
	}

	/**
	 *
	 * @throws Exception
	 */
	protected function login() {
		try {
			$this->loginAttempts++;

			if ( file_exists( Requestor::NONCE ) ) {
				unlink( Requestor::NONCE );
			}

			if ( $this->loginAttempts > Requestor::LOGIN_ATTEMPTS ) {
				$this->log->write( 'Login attempts exceeded' );
				throw new \ErrorException( 'Login attempts exceeded' );
			}

			$this->log->write( 'Trying to open new session...' );

			$this->url = $this->loginUrl;
			$this->data = [];

			try {
				$this->curl();
				
			} catch ( Unauthorized $e ) {}

			$this->setAuthData();
			$this->calculateDigestResponseCode();
			$this->setAuthHeaders();
			$this->curl();

			if ( 200 != $this->responseCode ) {
				throw new \ErrorException( 'Failed to login' );
			}

		} catch ( \Exception $e ) {
			$this->logout();
			throw $e;
		}
	}

	/**
	 * @param string $date_since
	 * @param int $limit
	 * @param int $offset
	 * @return ResponsePropertyDetails
	 * @throws Exception
	 */
	public function search( $date_since, $limit = 1, $offset = 1 ) {
//		$d = new \DateTime( sprintf( "now, -%s days", $days_since ) );
		$this->url = $this->searchUrl;

		$this->data = [
			'SearchType' => 'Property',
			'Class'      => 'Property',
			'QueryType'  => 'DMQL2',
			'Query'      => sprintf( '(LastUpdated=%s)', $date_since ),
			'Limit'      => $limit,
			'offset'     => $offset,
		];

		$this->setAuthHeaders();
		$this->curl();

		require_once( __DIR__ . '/response_propertydetails.php' );

		return new ResponsePropertyDetails( $this->response );
	}

	public function request( $name, $args = [] ) {
		$result = null;
		$count = 0;

		while( !$result ) {
			try {
				if ( $count > 10 ) {
					throw new \ErrorException( 'Count limit' );
				}

				$result = call_user_func_array( [ $this, $name ], $args );

			} catch ( Unlogged $e ) {
				$this->log->write( 'Session is stale' );
				$this->login();
				call_user_func_array( [ $this, $name ], $args );

			} catch ( Unauthorized $e ) {
				$this->log->write( 'Session is invalid' );
				$this->login();
				call_user_func_array( [ $this, $name ], $args );

			} catch ( \Exception $e ) {
				$this->logout();
				throw $e;
			}

			$count++;
		}

		return $result;
	}

	/**
	 * @param int $limit
	 * @param int $offset
	 * @return ResponseMasterList
	 * @throws Exception
	 */
	public function getMasterList() {
		$this->url = $this->searchUrl;
		$this->data = [
			'SearchType' => 'Property',
			'Class'      => 'Property',
			'QueryType'  => 'DMQL2',
			'Query'      =>  '(ID=*)',
			'Format'     => 'COMPACT',
		];

		$this->setAuthHeaders();
		$this->curl();

		if ( 200 != $this->responseCode ) {
			throw new \Exception( 'Failed to fetch data' );
		}

		require_once( __DIR__ . '/response_master_list.php' );

		return new ResponseMasterList( $this->response );
	}

	/**
	 * @param $id
	 * @param string $size
	 * @return DDFImage
	 * @throws Exception
	 */
	public function getImage( $id, $list = ['*'], $size = 'LargePhoto' ) {
		try {
			$this->url = $this->getObjectUrl;
			$this->data = [
				'Resource' => 'Property',
				'Type'     => $size,
				'ID'       => $id . ':' . implode( ',', $list ),
			];

			$this->setAuthHeaders();
			$this->headers['Accept'] = 'Image/jpeg';
			$this->log->write( 'Fetching images...' );
			$this->curl();

			if ( 200 !== (int)$this->responseCode ) {
				throw new \ErrorException( 'Failed to fetch image' );
			}

			require_once __DIR__ . '/ddf_image.php';
			$image = new DDFImage( $id, $this->response, DDFImage::getObjectsList( $this->headersOut) );

		} catch ( \Exception $e ) {
			$this->logout();
			throw $e;
		}

		return $image;
	}

	public function getResponse() {
		return $this->response;
	}

	public function getHeaders() {
		$ret = [];

		foreach( $this->headersOut as $line ) {
			if ( !$line ) {
				continue;
			}

			$data = explode( ':', $line, 2 );

			if ( count( $data ) === 1 ) {
				continue;
			}

			$k = trim( $data[ 0 ] );

			switch( $k ) {
				case 'Date':
					$ret[ $k ] = $data[ 1 ];
					break;
				case 'WWW-Authenticate':
					$ret[ $k ] = $this->parseAuthHeader( $data[ 1 ] );
					break;
				default:
					$ret[ $k ] = trim( $data[ 1 ] );
			}
		}

		return $ret;
	}

	public function logout() {
		if ( file_exists( Requestor::MUTEX ) ) {
			$count = (int)file_get_contents( Requestor::MUTEX );
			$this->log->write( 'Open sessions count: ' . $count );
			$count--;
			$count = max( 0, $count );

			if ( $count && filemtime( Requestor::MUTEX ) + Requestor::MUTEX_LIFETIME < time() ) {
				$this->log->write( 'Mutex is stale. Force close the session' );
				$count = 0;
			}

		} else {
			$count = 0;	
		}
		
		file_put_contents( Requestor::MUTEX,  $count );

		if ( !$count ) {
			$this->log->write( 'Logging out...' );

			if ( file_exists( Requestor::NONCE ) ) {
				unlink( Requestor::NONCE );
			}

			$this->url = $this->logoutUrl;
			$this->data = [];
			$this->setAuthHeaders();

			try {
				$this->curl();
				
			} catch ( Unauthorized $e ) {}
		}
	}

	public function saveHeaders( $ch, $line ) {
		$this->headersOut[] = $line;

		return strlen( $line );
	}

	public function __destruct() {
		$this->logout();
	}

	///////////////////////////////////////////////////////////////////////////////////////////

	protected function init() {
		$this->headersOut = [];
		$this->responce = '';
	}

	protected function getUrl() {
		$url = $this->url;

		return $this->isPost ? $url : $this->addQuery( $url );
	}

	protected function curl() {
		if ( !file_exists( Requestor::MUTEX ) ) {
			throw new \ErrorException( 'Mutex is missing' );
		}

		touch( Requestor::MUTEX );
		$error = '';
		$ch = curl_init();
		$this->init();

		$options = [
			CURLOPT_URL            => $this->getUrl(),
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_COOKIEJAR      => __DIR__ . '/cookie',
			CURLOPT_COOKIEFILE     => __DIR__ . '/cookie',
			CURLINFO_HEADER_OUT    => true,
			CURLOPT_HEADER         => false,
			CURLOPT_ENCODING       => 'gzip',
			CURLOPT_HEADERFUNCTION => [ $this, 'saveHeaders' ],
			CURLOPT_HTTPHEADER     => $this->makeHeaders(),
		];

		if ( $this->isPost ) {
			$options[ CURLOPT_POST ]       = true;
			$options[ CURLOPT_POSTFIELDS ] = json_encode( $this->data );
		}

		if ( $this->debug ) {
			$this->log->write( 'Sending request to ' . $this->getUrl() );
		}

		curl_setopt_array( $ch, $options );
		$result = curl_exec( $ch );

		if ( false === $result ) {
			$error = curl_error( $ch );
		}

		$this->responseCode = curl_getinfo( $ch, CURLINFO_RESPONSE_CODE );
		$this->headersIn    = curl_getinfo( $ch, CURLINFO_HEADER_OUT );
		curl_close( $ch );
		$this->headers = [];

		if ( $error ) {
			throw new \Exception( $error );
		}

		$this->response = $result;

		if ( $this->debug ) {
			$this->log->write( $this->headersIn );
			$this->log->write( implode( "\n", array_map( function( $l ){ return '< ' . trim( $l ); }, $this->headersOut ) ) );
			// $this->log->write( $this->response );
		}

		if ( 401 == $this->responseCode ) {
			throw new Unauthorized( 'Unauthorized' );
		}
	}

	protected function addQuery( $url ) {
		$q = [];

		if ( $this->data ) {
			foreach( $this->data as $k => $v ) {
				$q[] = urlencode( $k ) . '=' . urlencode( $v );
			}
		}

		return $q ? $url . '?' . implode( '&', $q ) : $url;
	}

	protected function calculateDigestResponseCode() {
		$ha1 = md5( $this->name . ':' . $this->auth_realm . ':' . $this->pwd );
		$ha2 = md5( ( $this->isPost ? 'POST' : 'GET' ) .  ':' . $this->auth_url );
		$this->auth_response = md5( $ha1 . ':' . $this->auth_nonce . ':' . $this->ncToString() .
			':' . $this->auth_cnonce . ':' . $this->auth_qop . ':' . $ha2 );
	}

	protected function setAuthData() {
		$h = $this->getHeaders();
		$url = parse_url( $this->auth_uri );

		if ( !isset( $h['WWW-Authenticate']['realm'] ) ) {
			throw new \Exception( 'Failed to login: digest realm header is missing' );
		}

		if ( !isset( $h['WWW-Authenticate']['nonce'] ) ) {
			throw new \Exception( 'Failed to login: header once is missing' );
		}

		if ( !isset( $h['WWW-Authenticate']['qop'] ) ) {
			throw new \Exception( 'Failed to login: header QOP value is missing' );
		}

		if ( !isset( $url['path'] ) ) {
			throw new \Exception( 'Failed to login: URL path part is missing' );
		}

		$this->auth_realm  = $h['WWW-Authenticate']['realm'];
		$this->auth_nonce  = $h['WWW-Authenticate']['nonce'];
		$this->auth_qop    = $h['WWW-Authenticate']['qop'];
		$this->auth_url    = $url['path'];
		$this->auth_cnonce = md5( time() );
		$this->auth_request_count++;

		file_put_contents( Requestor::NONCE, implode( "\n", [ $this->auth_realm, $this->auth_nonce, $this->auth_qop, ] ) );
	}

	protected function setAuthHeaders() {
		$this->headers['Authorization'] = sprintf(
			'Digest username="%s",realm="%s",nonce="%s",uri="%s",cnonce="%s",nc="%s",response="%s",qop="%s"',
			trim( $this->name ),
			trim( $this->auth_realm ),
			trim( $this->auth_nonce ),
			trim( $this->auth_url ),
			trim( $this->auth_cnonce ),
			trim( $this->ncToString() ),
			trim( $this->auth_response ),
			trim( $this->auth_qop )
		);
	}

	protected function ncToString() {
		return sprintf( '%08s', $this->auth_request_count );
	}

	protected function makeHeaders() {
		$ret = [];

		foreach( array_merge( $this->persistent_headers, $this->headers ) as $k => $v ) {
			$ret[] = $k . ': ' . $v;
		}

		return $ret;
	}

	protected function parseAuthHeader( $line ) {
		$ret = [];

		if ( !preg_match( '/^(\w+)\s+(.+)$/', trim( $line ), $m ) ) {
			throw new \Exception( 'Failed to parse Auth header: ' . $line );
		}

		$ret[] = $m[ 1 ]; //Auth method

		foreach( explode( ',', $m[ 2 ] ) as $i ) {
			list( $k, $v ) = explode( '=', $i, 2 );
			$ret[ trim( $k ) ] = trim( $v, " '\"" );
		}

		return $ret;
	}

	protected function initAuthData() {
		$this->auth_cnonce = md5( time() );

		if ( !file_exists( Requestor::NONCE ) ) {
			return;
		}
		
		$content = file_get_contents( Requestor::NONCE );

		if ( !$content ) {
			return;
		}

		$data = explode( "\n", $content );

		if ( count( $data ) !== 3 ) {
			return;
		}

		$this->auth_realm  = $data[ 0 ];
		$this->auth_nonce  = $data[ 1 ];
		$this->auth_qop    = $data[ 2 ];
	}

//	protected function setUAAuth() {
//		$headers = $this->persistent_headers;
//		$ua_a1 = md5( $headers['User-Agent'] .':'. $this->pwd );
//		$ua_dig_resp = md5(
//			trim( $ua_a1 ) .':'. trim( $this->request_id ) .':'. trim( $this->session_id ) .':'. trim( $headers['RETS-Version'] )
//		);
//
//		$this->headers['RETS-UA-Authorization'] = "Digest $ua_dig_resp";
//	}
}