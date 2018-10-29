<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Widget {
	protected $controls_classes = array(
		'Advertikon_Notification_Includes_Control_Text_Name',
		'Advertikon_Notification_Includes_Control_Text_Multiline_Content',
		'Advertikon_Notification_Includes_Control_Color_Background',
	);

	protected $controls = array();

	public function init_admin() {
		// Add Notifications setting page
		add_action( 'woocommerce_get_settings_pages', array( $this, 'render_setting_tab' ) );
	}

	public function render_setting_tab() {
		$settings[] = new Advertikon_Notification_Includes_Setting( $this );
	}

	public function get_controls() {
		if ( $this->controls ) {
			return $this->controls;
		}

		foreach( $this->controls_classes as $class ) {
			$this->controls[] = new $class();
		}

		return $this->controls;
	}
	
}