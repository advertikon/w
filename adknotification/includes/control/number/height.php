<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Control_Number_Height extends Advertikon_Notification_Includes_Control_Color {
	protected $id = 'advertikon_notifications_height';

	public function get_title() {
		return __( 'Height', Advertikon_Notifications::LNS );
	}
}