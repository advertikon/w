<?php
/**
 * @package Advertikon
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Shortcode extends Advertikon_Library_Shortcode {
	public function __construct() {
		parent::__construct();

		$list = array(
			'button' => array(
				'description'  => __( 'Call to action button', Advertikon_Notifications::LNS ),
				'content'      => __( 'Button name', Advertikon_Notifications::LNS ),
			),
		);

		$this->list = array_merge( $this->list, $list );
		$this->register_shortcodes( $list );
	}

	public function button( $attr, $content ) {
		$ret = '';

		try {
			$widget = ADK( 'notification' )->get_widget();
			$b = $widget->load_button( $content );
			$css = array();
			$style = array();

			$border_color = $this->get_button_value( 'border_color', $b );
			$border_width = $this->get_button_value( 'border_width', $b );

			$css['background-color'] = $this->get_button_value( 'bg_color', $b );
			$css['color']            = $this->get_button_value( 'text_color', $b );
			$css['padding']          = $this->get_button_value( 'padding', $b ) . 'px';
			$css['font-size']        = $this->get_button_value( 'font_height', $b ) . 'px';
			$css['border-radius']    = $this->get_button_value( 'border_radius', $b ) . 'px';
			$css['border']           = "solid ${border_width}px ${border_color}";

			foreach( $css as $k => $v ) {
				$style[] = $k . ': ' . esc_attr( $v );
			}

			$ret = sprintf(
				'<a href="%s" style="%s" target="_blank">%s</a>',
				isset( $b['url'] ) ? esc_attr( $b['url'] ) : '#',
				implode( ';', $style ),
				isset( $b['text'] ) ? esc_html( $b['text'] ) : ''
			);

		} catch ( Exception $e ) {
			Advertikon::log( $e );
		}

		return $ret;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////

	protected function get_button_value( $name, array $data ) {
		return isset( $data[ $name ] ) ? esc_html( $data[ $name ] ) : $this->button_defaults[ $name ];
	}
}