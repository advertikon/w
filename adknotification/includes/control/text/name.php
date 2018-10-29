<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Control_Text_Name extends Advertikon_Notification_Includes_Control_Text {
	protected $id = 'advertikon_notifications_name';

	public function get_title() {
		return __( 'Widget name', Advertikon_Notifications::LNS );
	}
}