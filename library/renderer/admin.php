<?php
/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Library_Renderer_Admin {
	static protected $types = array(
			'adk_title',
	);

	static public function init() {
		foreach( self::$types as $type ) {
			add_action( 'woocommerce_admin_field_' . $type, array( 'Advertikon_Library_Renderer_Admin' ,'render' ) );	
		}
	}

	static public function render( array $element ) {
		switch( $element['type'] ) {
			case 'adk_title':
				echo self::title( $element );
				break;
		}
	}

	static protected function title( array $value ) {
		$id = isset( $value['id'] ) ? $value['id'] : uniqid();

		if ( ! empty( $value['title'] ) ) {
			echo '<h2 id="label-' . $id . '" class="adk-title-label" data-target="#' . $id . '">' . esc_html( $value['title'] ) . '</h2>';
		}

		if ( ! empty( $value['desc'] ) ) {
			echo wp_kses_post( wpautop( wptexturize( $value['desc'] ) ) );
		}

		echo '<table class="form-table" id="' . $id . '">' . "\n\n";

		if ( ! empty( $value['id'] ) ) {
			do_action( 'woocommerce_settings_' . sanitize_title( $value['id'] ) );
		}
	}
}