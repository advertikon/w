<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Widget_Extended extends Advertikon_Notification_Includes_Widget {
	public function __construct( Advertikon_Notification_Includes_Filter $filter ) {
		parent::__construct( $filter );

		$section = array();

		foreach( array( 'top', 'bottom', 'left', 'right', ) as $s ) {
			$section[ $s ] = $this->section_defaults;
		}

		$this->defaults = array_merge_recursive( $this->defaults, array(
			'section' => $section,
		) );
	}

	public function get_controls() {
		$controls = array_merge( parent::get_controls(), array(
			array(
				'id'			    => 'name',
				'type' 			    => 'adk_text',
				'title' 		    => __( 'Widget name', Advertikon_Notifications::LNS ),
				'value' 		    => '',
				'default'		    => 'default',
				'desc'			    => __( 'Widget\'s name for your reference', Advertikon_Notifications::LNS ),
				'desc_tip'		    => true,
				'sort'              => 10,
				'class'             => 'adk-widget-control',
			),
			array(
				'id'			    => 'load-widget',
				'type' 			    => 'adk_select',
				'title' 		    => __( 'Load widget', Advertikon_Notifications::LNS ),
				'value' 		    => '',
				'options'           => $this->get_list(),
				'default'		    => 'default',
				'desc'			    => __( 'Select a widget to modify', Advertikon_Notifications::LNS ),
				'desc_tip'		    => true,
				'sort'              => 1,
				'custom_attributes' => array(
					'data-url' => Advertikon::ajax_url( array(
						'action' => Advertikon_Notifications::$ajax_endpoints['load_widget']
					) )
				),
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