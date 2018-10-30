<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Widget {
	protected $template;

	public function __costruct() {
		
	}

	public function get_template() {
		if ( $this->template ) {
			return $this->template;
		}

		$this->template = class_exists( 'Advertikon_Notification_Includes_Template_Extended', true ) ?
			new Advertikon_Notification_Includes_Template_Extended() : new Advertikon_Notification_Includes_Template();

		return $this->template;
	}
	
}