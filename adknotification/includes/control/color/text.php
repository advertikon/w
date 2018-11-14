<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Control_Color_Text extends Advertikon_Notification_Includes_Control_Color {
	protected $id = 'advertikon_notifications_text_color';

	public function get_title() {
		return __( 'Text color', Advertikon_Notifications::LNS );
	}
}