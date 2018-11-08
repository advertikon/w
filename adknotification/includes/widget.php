<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Widget {
	protected $template;
	protected $defaults = array();
	protected $section_defaults = array(
		'bg_color'    => '#ff0000',
		'font_height' => '14',
		'padding'     => 10,
		'text_color'  => '#000000',
		'text'        => '',
	);

	protected $storage_dir;
	protected $data = array();
	protected $is_simple = false;

	public function __construct() {
		$this->defaults = array(
			'name'              => 'default',
			'border_color'      => '#00ff00',
			'border_radius'     => 5,
			'border_width'      => 1,
			'shadow_color'      => '#000000',
			'shadow_dispersion' => 0,
			'shadow_horizontal' => 0,
			'shadow_vertical'   => 0,
			'template'          => 'simple',
			'width'             => 800,
			'section' => array(
				'content' => $this->section_defaults,
			),
		);

		$this->storage_dir  = plugin_dir_path( __DIR__ ) . 'storage/widgets/';
		$this->tempalte_dir = plugin_dir_path( __DIR__ ) . 'storage/templates/';

		if ( !is_a( $this, 'Advertikon_Notification_Includes_Widget_Extended' ) ) {
			$this->is_simple = true;

			try{
				$this->data = $this->load( 'default' );

			} catch ( Exception $e ) {}
		}

		add_action( 'wp_footer', [ $this, 'render' ] );
	}

	public function is_simple() {
		return $this->is_simple;
	}

	public function save( array $data ) {
		$params = array();

		foreach( $this->defaults as $k => $v ) {
			if ( isset( $data[ $k ] ) ) {
				$params[ $k ] = $data[ $k ];

			} else {
				$params[ $k ] = $v;
			}
		}

		if ( !$params['name'] ) {
			throw new Exception( __( 'Widget\'s name is missing', Advertikon_Notifications::LNS ) );
		}

		if ( !is_dir( $this->storage_dir ) ) {
			Advertikon::log( 'Creating widget storage dir...' );

			if( false === mkdir( $this->storage_dir, 0777, true ) ) {
				throw new Exception( __( 'Failed to create widget\'s storage folder', Advertikon_Notifications::LNS ) );
			}
		}

		file_put_contents( $this->storage_dir . $params['name'], wp_json_encode( $params ) );
	}

	public function load( $name ) {
		if ( !is_file( $this->storage_dir . $name ) ) {
			throw new Exception( __( 'Widget doesn\'t exist', Advertikon_Notifications::LNS ) );
		}

		$content = json_decode( file_get_contents( $this->storage_dir . $name ), true );

		if ( is_null( $content ) ) {
			throw new Exception( __( 'Failed to read widget\'s data', Advertikon_Notifications::LNS ) );
		}

		return $content;
	}

	public function get_controls() {
		return array(
			array(
				'type' => 'title',
				'title' => __( 'Common appearance', Advertikon_Notifications::LNS ),
				'sort'  => 0,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'template' ),
				'name'          => 'template',
				'type' 			=> 'adk_select',
				'title' 		=> __( 'Template', Advertikon_Notifications::LNS ),
				'options'       => $this->get_available_templates(),
				'default'		=> $this->get_default( 'template' ),
				'desc'			=> __( 'Defines widget structure', Advertikon_Notifications::LNS ),
				'desc_tip'		=> true,
				'sort'          => 20,
				'class'         => 'adk-widget-control',
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'width' ),
				'name'          => 'width',
				'type'			=> 'adk_number',
				'title' 		=> __( 'Width', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> $this->get_default( 'width' ),
				'sort'          => 30,
				'class'         => 'adk-widget-control',
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'border_width' ),
				'name'          => 'border_width',
				'type'			=> 'adk_number',
				'title' 		=> __( 'Border width', 'advertikon' ),
				'class'			=> 'adk-slider',
				'default'		=> $this->get_default( 'border_width' ),
				'sort'          => 40,
				'class'         => 'adk-widget-control',
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'border_color' ),
				'name'          => 'border_color',
				'type'			=> 'adk_color',
				'title' 		=> __( 'Border color', Advertikon_Notifications::LNS ),
				'default'		=> $this->get_default( 'border_color' ),
				'sort'          => 50,
				'class'         => 'adk-widget-control',
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'border_radius' ),
				'name'          => 'border_radius',
				'type'			=> 'adk_number',
				'title' 		=> __( 'Border radius', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> $this->get_default( 'border_radius' ),
				'sort'          => 60,
				'class'         => 'adk-widget-control',
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'shadow_vertical' ),
				'name'          => 'shadow_vertical',
				'type'			=> 'adk_number',
				'title' 		=> __( 'Vertical shadow', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> $this->get_default( 'shadow_vertical' ),
				'sort'          => 70,
				'class'         => 'adk-widget-control',
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'shadow_horizontal' ),
				'name'          => 'shadow_horizontal',
				'type'			=> 'adk_number',
				'title' 		=> __( 'Horizontal shadow', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> $this->get_default( 'shadow_horizontal' ),
				'sort'          => 80,
				'class'         => 'adk-widget-control',
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'shadow_dispersion' ),
				'name'          => 'shadow_dispersion',
				'type'			=> 'adk_number',
				'title' 		=> __( 'Shadow dispersion', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> $this->get_default( 'shadow_dispersion' ),
				'sort'          => 90,
				'class'         => 'adk-widget-control',
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'shadow color' ),
				'name'          => 'shadow_color',
				'type'			=> 'adk_color',
				'title' 		=> __( 'Shadow color', Advertikon_Notifications::LNS ),
				'default'		=> $this->get_default( 'shadow_color' ),
				'sort'          => 100,
				'class'         => 'adk-widget-control',
			),
			array(
				'type' => 'sectionend',
				'sort' => 1000,
			),
		);
	}

	public function get_default( $name ) {
		$parts = explode( '/', $name );
		$pointer = $this->data ?: $this->defaults; // use "default" widget as defaults in simple mode 

		while( $parts ) {
			$current = array_shift( $parts );

			if ( !isset( $pointer[ $current ] ) ) {
				Advertikon::error( 'Missing default widget value: ' . $name );
				return '';
			}

			$pointer = $pointer[ $current ];
		}

		return is_array( $pointer ) ? 'Array' : $pointer;
	}

	public function render() {
		if ( !is_woocommerce() ) {
			return;
		}

		if ( is_shop() ) {
			echo 'shop';
		}

		foreach( $this->load_all() as $widget ) {
			if ( $this->filter( $widget ) ) {
				$this->render_widget( $widget );
			}
		}

		// is_product()
		// is_cart()
		// is_checkout()
		// is_account_page()
	}

	////////////////////////////////////////////////////////////////////////////////////////////////

	protected function render_widget( array $widget ) {

	}

	protected function filter( array $widget ) {
		$template = isset( $widget['template'] ) ? $widget['template'] : 'simple';

		if ( !file_exists( $this->template_dir . $template ) ) {
			Advertikon::error( 'Template ' . $template . ' doesn\'t exist' );
			return;
		}

		extract( $widget );
		require( $this->template_dir . $template );
	}

	protected function get_available_templates() {
		return array(
			'simple' => __( 'Simple', Advertikon_Notifications::LNS ),
		);
	}

	protected function get_list() {
		$ret = array();

		if ( !is_dir( $this->storage_dir ) ) {
			return $ret;
		}

		foreach( scandir( $this->storage_dir ) as $item ) {
			if ( '.' === $item[ 0 ] || !is_file( $this->storage_dir . $item ) ) {
				continue;
			}

			$widget = $this->load( $item );
			$ret[ $item ] = $widget['name'];
		}

		if ( $ret ) {
			array_unshift( $ret, __( 'Select a widget', Advertikon_Notifications::LNS ) );
		}

		return $ret;
	}

	protected function sanitaze_name( $name ) {
		return strtolower( preg_replace( '/[^a-zA-Z0-9_.-]/', '', $name ) );
	}

	protected function load_all() {
		$ret = array();

		if ( !is_dir( $this->storage_dir ) ) {
			return $ret;
		}

		foreach( scandir( $this->storage_dir ) as $item ) {
			if ( '.' === $item[ 0 ] || !is_file( $this->storage_dir . $item ) ) {
				continue;
			}

			$widget = $this->load( $item );
			$ret[ $item ] = $widget;
		}

		return $ret;
	}
	
}