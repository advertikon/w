<?php

/**
 * @package notifications
 * @author Advertikon
 */

abstract class Advertikon_Notification_Includes_Control {
	protected $type = '';
	protected $custom_type = false; // defines if custom rendered needs to be registered
	protected $id = '';
	protected $desc_tip = false;
	protected $suffix = '';

	static protected $regitered_types = array(); // list to track already registered custom renderers

	public function register_renderer() {
		if ( !$this->custom_type ) {
			return;
		}

		if ( !$this->type ) {
			throw new Exception( 'Type needs to be defined' );
		}

		if ( !in_array( $this->type, self::$registered_types ) ) {
			add_action( 'woocommerce_admin_field_' . $this->type, array( $this, 'render' ) );
			self::$registered_types[] = $this->type;
		}
	}

	public function render() {
		throw new Exception( 'Not implemented' );
	}

	public function get() {
		return array(
			'id'                => $this->id,
			'type'              => $this->type,
			'title'             => $this->get_title(),
			'class'             => $this->get_class(),
			'css'               => $this->get_css(),
			'default'           => $this->get_default(),
			'desc'              => $this->get_description(),
			'desc_tip'          => $this->desc_tip,
			'placeholder'       => $this->get_placeholder(),
			'suffix'            => $this->suffix,
			'custom_attributes' => $this->get_custom_attributes(),
		);
	}

	public function get_title() {
		throw new Exception( 'Not implemented' );
	}

	public function get_description() {
		return '';
	}

	public function get_class() {
		return '';
	}

	public function get_default() {
		return '';
	}

	public function get_placeholder() {
		return '';
	}

	public function get_custom_attributes() {
		return array();
	}

	public function get_css() {
		return '';
	}
}