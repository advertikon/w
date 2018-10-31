<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Template {
	public function get_controls() {
		return array(
			array(
				'type' => 'title',
				'title' => __( 'Common appearance', Advertikon_Notifications::LNS ),
				'sort'  => 0,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'template' ),
				'type' 			=> 'select',
				'title' 		=> __( 'Template', Advertikon_Notifications::LNS ),
				'options'       => $this->get_available_templates(),
				'default'		=> '',
				'desc'			=> __( 'Defines widget structure', Advertikon_Notifications::LNS ),
				'desc_tip'		=> true,
				'sort'          => 20,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'width' ),
				'type'			=> 'number',
				'title' 		=> __( 'Width', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> '800',
				'sort'          => 30,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'border_width' ),
				'type'			=> 'number',
				'title' 		=> __( 'Border width', 'advertikon' ),
				'class'			=> 'adk-slider',
				'default'		=> 1,
				'sort'          => 40,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'border_color' ),
				'type'			=> 'color',
				'title' 		=> __( 'Border color', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-color',
				'default'		=> '#000',
				'sort'          => 50,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'border_radius' ),
				'type'			=> 'number',
				'title' 		=> __( 'Border radius', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> 1,
				'sort'          => 60,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'shadow_vertical' ),
				'type'			=> 'number',
				'title' 		=> __( 'Vertical shadow', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> 0,
				'sort'          => 70,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'shadow_horizontal' ),
				'type'			=> 'number',
				'title' 		=> __( 'Horizontal shadow', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> 0,
				'sort'          => 80,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'shadow_dispersion' ),
				'type'			=> 'number',
				'title' 		=> __( 'Shadow dispersion', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-slider',
				'default'		=> 0,
				'sort'          => 90,
			),
			array(
				'id'			=> Advertikon_Notifications::prefix( 'shadow color' ),
				'type'			=> 'color',
				'title' 		=> __( 'Shadow color', Advertikon_Notifications::LNS ),
				'class'			=> 'adk-color',
				'default'		=> '#000',
				'sort'          => 100,
			),
			array(
				'type' => 'sectionend',
				'sort' => 1000,
			),
		);
	}

	protected function get_available_templates() {
		return array(
			'simple' => __( 'Simple', Advertikon_Notifications::LNS ),
		);
	}
}