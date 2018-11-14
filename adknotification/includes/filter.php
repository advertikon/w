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
				'title' 		=> __( 'Add template', Advertikon_Notifications::LNS ),
				'caption'		=> __( 'Add', Advertikon_Notifications::LNS ),
				'class'         => 'button-secondary',
			),
			array(
				'type'			=> 'adk_pass',
				'content'       => $this->render_template(),
				'hidden'        => true,
			),
			array(
				'type' => 'sectionend',
				'sort' => 1000,
			),
		);
	}

	public function filter( array $data ) {
		if ( !$data ) {
			return true;
		}

		foreach ( $data as $name => $set ) {
			switch( $name ) {
				case 'page':
					if ( $this->filter_page( $set ) ) {
						return true;
					}
				break;
			}
		}

		return false;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////

	protected function render_template() {
		$data = array(
			'title'        => '',
			'tooltip_html' => '',
			'description'  => '',
			'id'           => '',
			'type'         => '',
		);

		$elemetn = array();

		$element[] = '<div class="filter-line template">';

		$element[] = '<select class="filter-name">';

		foreach( $this->get_available_filters() as $k => $v ) {
			$element[] = sprintf(
				'<option data-input="%s" data-restrict="%s" value="%s">%s</option>',
				esc_attr( $v['input'] ),
				esc_attr( wp_json_encode( $v['restrict'] ) ),
				$k,
				$v['name']
			);
		}

		$element[] = '</select>';

		$element[] = '<select class="filter-restrict">';

		foreach( array() as $k => $v ) {
			$element[] = '<option>' . $k . '</option>';
		}

		$element[] = '</select>';

		$element[] = '<div class="filter-value-wrapper">';
		$element[] = '<input class="filter-value" placeholder="' . __( 'Filter value', Advertikon_Notifications::LNS ) . '">';
		$element[] = '</div>';

		$element[] = Advertikon_Library_Renderer_Admin::button( array(
			'type'       => 'adk_button',
			'class'      => 'filter-delete',
			'caption'    => __( 'Delete', Advertikon_Notifications::LNS ),
			'standalone' => true,
		) );

		$element[] = '</div>';

		return implode( PHP_EOL, $element );
	}

	protected function get_available_filters() {
		return array(
			'page' => array(
				'name'       => __( 'Page', Advertikon_Notifications::LNS ),
				'input'      => $this->get_page_input(),
				'standalone' => true,
				'restrict'   => array(
					self::RESTRICT_EQUAL    => __( 'is', Advertikon_Notifications::LNS ),
					self::RESTRICT_NO_EQUAL => __( 'not is', Advertikon_Notifications::LNS ),
				),
			),
			'customer' => array(
				'name'       => __( 'Customer', Advertikon_Notifications::LNS ),
				'input'      => $this->get_customer_input(),
				'standalone' => true,
				'restrict'   => array(
					self::RESTRICT_EQUAL    => __( 'is', Advertikon_Notifications::LNS ),
					self::RESTRICT_NO_EQUAL => __( 'not is', Advertikon_Notifications::LNS ),
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
		) );
	}

	protected function get_customer_input() {
		return Advertikon_Library_Renderer_Admin::select( array(
			'standalone' => true,
			'options'    => array(
				'loggedin' => __( 'Logged in', Advertikon_Notifications::LNS ),
				'guest'    => __( 'Guest', Advertikon_Notifications::LNS ),
			),
		) );
	}

	protected function filter_page( array $data ) {
		foreach( $data as $restrict => $values ) {
			foreach( $values as $value ) {
				$match = false;

				switch( $value ) {
					case 'shop':
						$match = is_shop();
						break;
					case 'product':
						$match = is_product();
						break;
					case 'cart':
						$match = is_cart();
						break;
					case 'account':
						$match = is_account_page();
						break;
					case 'category':
						$match = is_product_category();
						break;
					case 'checkout':
						$match = is_checkout();
						break;
					case 'payment_page':
						$match = is_checkout_pay_page();
						break;
					case 'view_order_page':
						$match = is_view_order_page();
						break;
					case 'edit_account':
						$match = is_edit_account_page();
						break;
				}

				if ( $restrict == self::RESTRICT_EQUAL ) {
					if ( $match ) {
						return true;
					}

				} else if ( $restrict == self::RESTRICT_NOT_EQUAL ) {
					if ( !$match ) {
						return true;
					}

				} else {
					Advertikon::error( 'Page filter: unsupported restriction: ' . $restrict );
				}

				return false;
			}
		}
	}
    
}