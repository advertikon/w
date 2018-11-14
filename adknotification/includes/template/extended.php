<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Template_Extended extends Advertikon_Notification_Includes_Template {
	public function get_controls() {
		$controls = array_merge( parent::get_controls(), array(
			array(
				'id'			=> 'name',
				'type' 			=> 'adk_text',
				'title' 		=> __( 'Widget name', Advertikon_Notifications::LNS ),
				'value' 		=> '',
				'default'		=> 'default',
				'desc'			=> __( 'Description to show at backend', Advertikon_Notifications::LNS ),
				'desc_tip'		=> true,
				'sort'          => 10,
				'class'         => 'adk-widget-control',
			),
		) );

		usort( $controls, function( array $a, array $b ) { return $a['sort'] - $b['sort']; } );

		return $controls;
	}

	protected function get_available_templates() {
		return array_merge( parent::get_available_templates(), array(
			'two_columns'   => __( 'Two columns', Advertikon_Notifications::LNS ),
			'three_columns' => __( 'Three columns', Advertikon_Notifications::LNS ),
		) );
	}
}