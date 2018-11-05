<?php

/**
 * 
 * 
 * 
 */

class Advertikon_Library_Log {
	protected $fd;
	protected $log;

	protected $first_log_line = true;

	protected $IBlack="\e[0;90m";      # Black
	protected $IRed="\e[0;91m";        # Red
	protected $IGreen="\e[0;92m";      # Green
	protected $IYellow="\e[0;93m";     # Yellow
	protected $IBlue="\e[0;94m";       # Blue
	protected $IPurple="\e[0;95m";     # Purple
	protected $ICyan="\e[0;96m";       # Cyan
	protected $IWhite="\e[0;97m";      # White
	protected $off = "\e[0m";

	const LOG_MAX_SIZE = 10000000;
	const LOG_MIN_SIZE = 5000000;

	const LEVEL_CRITICAL = 30;
	const LEVEL_ERROR    = 20;
	const LEVEL_NORMAL   = 10;
	const LEVEL_PROFILER = 5;
	const LEVEL_DEBUG    = 0;

	public function __construct() {
		// var_dump( get_defined_constants() );
		$file = defined( WC_LOG_DIR ) ? WC_LOG_DIR : ABSPATH . 'wp-content/uploads/wc-logs/adk.log';

		if ( !is_dir( dirname( $file ) ) ) {
			mkdir( dirname( $file, 0777, true ) );
		}

		$this->log = $file;
		$this->trim_log();
		$this->open();
		$this->set_handlers();
	}

	protected function trim_log() {
		$size = filesize( $this->log );
		
		if ( $size > self::LOG_MAX_SIZE ) {
			try {
				$f = fopen( $this->log, 'r+' );
				$offset = self::LOG_MIN_SIZE;
				$offset_top = $offset;
				$time = microtime( 1 );

				if ( !$f ) {
					throw new Exception( 'Failed to open log file' );
				}

				while( $offset > 0 ) {
					if ( -1 == fseek( $f, $offset * -1, SEEK_END ) ) {
						throw new Exception( 'Failed to set bottom offset' );
					}

					if ( false === ( $data = fread( $f, 4096 ) ) ) {
						throw new Exception( 'Failed to read from the file' );
					}

					if ( -1 == fseek( $f, $offset_top - $offset, SEEK_SET ) ) {
						throw new Exception( 'Failed to set top offset' );
					}

					if ( false === ( fwrite( $f, $data ) ) ) {
						throw new Exception( 'Failed to write to the file' );
					}

					$offset -= strlen( $data );
				}

				ftruncate( $f, self::LOG_MIN_SIZE );
				fclose( $f );

			} catch ( Exception $e ) {
				fclose( $f );
				error_log( $this->log( 'Log file trimming operation failed: ' . $e->getMessage(), '', self::LEVEL_ERROR ) );
			}
		}
	}

	protected function open() {
		$this->fd = fopen( $this->log, 'a' );

		if ( is_null( $this->fd ) ) {
			error_log( 'Advertikon: Failed to open file ' . $this->log );
		}
	}

	protected function color( $text, $color = 'red' ) {
		$color = 'I' . ucfirst( $color );
		$text = $this->{$color} . $text . $this->off;

		return $text;
	}

	protected function bg_color( $text, $color = 'red' ) {
		$color = 'B' . ucfirst( $color );
		$text = $this->{$color} . $text . $this->off;

		return $text;
	}

	protected function set_handlers() {
		$this->system_error_handler = set_error_handler( [ $this, 'error' ] );
		$this->system_exception_handler = set_exception_handler( [ $this, 'log' ] );
	}

	public function log( $msg, $line = '', $urgency = self::LEVEL_NORMAL ) {
		if ( is_null( $this->fd ) ) {
			return;
		}

		if ( is_a( $msg, 'Exception' ) || is_a( $msg, 'Error' ) ) {
			$msg = $msg->getMessage() . "\n" . $msg->getTraceAsString();
			$urgency = self::LEVEL_ERROR;

		} else if ( is_bool( $msg ) ) {
			$msg = '(boolean) ' . ( $msg ? 'true' : 'false' ); 

		} elseif ( is_null( $msg ) ) {
			$msg = 'NULL';

		} else {
			$msg = print_r( $msg, 1 );
		}

		$msg = rtrim( $msg, PHP_EOL ) . $line . "\n";

		if ( $this->first_log_line ) {
			$prefix = $this->color( $this->get_log_prefix( $urgency ), 'blue' );
			$this->first_log_line = false;

		} else {
			$prefix = $this->get_log_prefix( $urgency );
		}

		if ( $urgency >= self::LEVEL_ERROR ) {
			$msg = $this->color( $msg, 'red' );
		}

		fwrite( $this->fd, $prefix . $msg );
	}

	public function error( $errno, $errstr, $errfile, $errline ) {
		$this->log( sprintf( "%s in %s:%s", $errstr, $errfile, $errline ), '', self::LEVEL_ERROR );
	}

	protected function get_log_prefix( $level_code ) {
		return sprintf( "%s.%s\t[%s]\t", date( 'd M H:i:s' ), substr( microtime(), 2, 4 ), $this->level_name( $level_code ) );
	}

	private function level_name( $code ) {
		$ret = '';

		switch ( $code ) {
			case  self::LEVEL_DEBUG:
				$ret = 'debug';
			break;
			case self::LEVEL_NORMAL:
				$ret = 'info';
			break;
			case self::LEVEL_PROFILER:
				$ret = 'profiler';
			break;
			case self::LEVEL_CRITICAL:
				$ret = 'critical';
			break;
			case self::LEVEL_ERROR:
				$ret = 'error';
			break;
		}

		return $ret;
	}

}