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
	protected $ln = 'advertikon';

	public function __construct() {
		load_plugin_textdomain( $this->ln, false,  dirname( __FILE__ ) . '/languages' );
		

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
		if ( 0 === strpos( $class_name, 'Advertikon' ) ) {
			$classes_dir = realpath( plugin_dir_path( $this->FILE ) );
			$class_file = str_replace( '_', DIRECTORY_SEPARATOR, substr( $class_name, 11 ) ) . '.php';
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