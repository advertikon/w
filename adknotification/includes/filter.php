<?php

/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Notification_Includes_Filter {
	const RESTRICT_EQUAL    = 1;
	const RESTRICT_NO_EQUAL = 2;
	const RESTRICT_LESSER   = 3;
	const RESTRICT_GREATER  = 4;

	public function get_controls() {
		return array(
			array(
				'type' => 'title',
				'title' => __( 'Filters', Advertikon_Notifications::LNS ),
				'sort'  => 0,
			),
			array(
				'id'			=> 'add-filter',
				'type' 			=> 'adk_button',
				'title' 		=> __( 'Template', Advertikon_Notifications::LNS ),
				'caption'		=> __( 'Add', Advertikon_Notifications::LNS ),
				'class'         => 'button-secondary',
			),
			array(
				'type'			=> 'adk_pass',
				'content'       => $this->render_template(),
			),
			array(
				'type' => 'sectionend',
				'sort' => 1000,
			),
		);
	}

	protected function render_template() {
		$data = array(
			'title'        => '',
			'tooltip_html' => '',
			'description'  => '',
			'id'           => '',
			'type'         => '',
		);

		$elemetn = array();

		$element[] = '<div class="template">';

		$element[] = '<select class="filter-name" style="width: 38%;">';

		foreach( $this->get_available_filters() as $k => $v ) {
			$element[] = sprintf(
				'<option data-input="%s" data-restrict="%s" value="%s">%s</option>',
				esc_attr( $v['input'] ),
				esc_attr( $v['restrict'] ),
				$k,
				$v['name']
			);
		}

		$element[] = '</select>';

		$element[] = '<select class="filter-restrict" style="width: 20%;">';

		foreach( array() as $k => $v ) {
			$element[] = '<option>' . $k . '</option>';
		}

		$element[] = '</select>';

		$element[] = '<input style="width: 38%; padding: 5px;" placeholder="' . __( 'Filter value', Advertikon_Notifications::LNS ) . '">';

		$element[] = '</div>';

		return Advertikon_Library_Renderer_Admin::table_row( $data, implode( PHP_EOL, $element ) );
	}

	protected function get_available_filters() {
		return array(
			'page' => array(
				'name'       => __( 'Page', Advertikon_Notifications::LNS ),
				'input'      => $this->get_page_input(),
				'standalone' => true,
				'restrict'   => array(
					self::RESTRICT_EQUAL    => __( 'Equal', Advertikon_Notifications::LNS ),
					self::RESTRICT_NO_EQUAL => __( 'Not equal', Advertikon_Notifications::LNS ),
				),
			),
		);
	}

	protected function get_page_input() {
		return Advertikon_Library_Renderer_Admin::select( array(
			'standalone' => true,
			'options'    => array(
				'cart'     => __( 'Cart', Advertikon_Notifications::LNS ),
				'checkout' => __( 'Checkout', Advertikon_Notifications::LNS ),
			),
			'css'        => array( 'width', '20%' ),
			'class'      => 'filter-value',
		) );
	}
    
}