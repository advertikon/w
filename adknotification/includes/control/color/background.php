<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Control_Color_Background extends Advertikon_Notification_Includes_Control_Color {
	protected $id = 'advertikon_notifications_bg_color';

	public function get_title() {
		return __( 'Background color', Advertikon_Notifications::LNS );
	}
}