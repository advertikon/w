<?php
/**
 * @package Advertikon
 * @author Advertikon
 */

class Advertikon_Library_Shortcode {
	protected $list = array();
	private $prefix = 'adk_';

	public function __construct() {
		$this->list = array(
			'customer_name' => array(
				'description'  => __( 'Name of the current customer', Advertikon::LNS ),
			),
		);

		$this->register_shortcodes( $this->list );
	}

	public function get_list() {
		$ret = array();

		foreach( $this->list as $code => $data ) {
			if ( empty( $data['content'] ) ) {
				$ret[] = "[{$this->prefix}${code}] - " . $data['description'];
				
			} else {
				$ret[] = "[{$this->prefix}${code}]{$data['content']}[/{$this->prefix}${code}] - " . $data['description'];
			}
		}

		return $ret;
	}

	public function customer_name() {
		$customer = new WC_Customer();

		return $customer->get_display_name();
	}

	////////////////////////////////////////////////////////////////////////////////////////////////

	protected function register_shortcodes( array $list ) {
		foreach( $list as $k => $v ) {
			add_shortcode( $this->prefix . $k, array( $this, $k ) );
		}
	} 
}