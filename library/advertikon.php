<?php

/**
 * 
 * 
 * 
 */

abstract class Advertikon {

	/** @var $FILE string child's __FILE__ */
	protected $FILE = null;
	protected $name = '';
	protected $class_prefix = '';
	static protected $prefix = ''; // module prefix

	const LNS = 'advertikon'; // Language name space

	static public function prefix( $v ) {
		return static::$prefix . $v;
	}

	public function __construct() {
		load_plugin_textdomain( self::LNS, false,  dirname( __FILE__ ) . '/languages' );
	}

	protected function init() {
		if ( !$this->FILE ) {
			throw new Exception( 'FILE needs to be initialized' );
		}

		$this->register_autoloader();
		register_activation_hook( $this->FILE, [ $this, 'on_activate', ] );
	}

	protected function register_autoloader() {
		spl_autoload_register( [ $this, 'autoload', ] );
	}

	protected function autoload( $name ) {
		if ( !$this->class_prefix ) {
			throw new Exception( 'Class prefix needs to be defined' );
		}

		if ( 0 === strpos( $name, $this->class_prefix ) ) {
			$classes_dir = realpath( plugin_dir_path( $this->FILE ) );
			$class_file = strtolower( str_replace( '_', DIRECTORY_SEPARATOR, substr( $name, strlen( $this->class_prefix ) ) ) . '.php' );
			require_once $classes_dir . $class_file;
		}
	}

	public function on_activate() {
		if( !is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
			throw new Exception( sprintf(
				__( 'Plugin "%s" requires "WooCommerce" to be installed', $this->ln ),
				$this->name
			) );
		}
	}
}