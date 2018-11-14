<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Control_Text_Multiline_Content extends Advertikon_Notification_Includes_Control_Text_Multiline {
	protected $id = 'advertikon_notifications_text';

	public function get_title() {
		return __( 'Widget contents', Advertikon_Notifications::LNS );
	}
}