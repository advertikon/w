<?php
/**
	Plugin Name: Notification
	Plugin URI:
	Version: 1.0.0
	Description: Woocommerce plug-in to create a highly customizable notifications at the store side
	Author: Advertikon
	Author URI:
	Text Domain: advertikon
	Domain Path: /languages
	Network :
	License:
*/

// Make sure we don't expose any info if called directly
// if ( ! function_exists( 'add_action' ) ) {
// 	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
// 	exit;
// }

require_once( plugin_dir_path( __FILE__ ) . '../library/advertikon.php' );

//if( true || ! class_exists( 'Advertikon_Notifications' ) ) :
class Advertikon_Notifications extends Advertikon {

	protected $FILE          = __FILE__;
	protected $name          = 'Smart Notification';
	protected $class_prefix  = 'Advertikon_Notification';   // autoloader class prefix (base)
	static protected $prefix = 'advertikon_notifications_'; // module prefix

	const LNS = 'advertikon_notification';

	/**
	 * @var String ID Module name
	 */
	const ID = 'adk_notification';

	static public $ajax_endpoints = array(
		'save_widget'   => 'save_widget',
		'save_button'   => 'save_button',
		'delete_widget' => 'delete_widget',
		'load_widget'   => 'load_widget',
	);

	/**
	 * @var Object $shipping_method Free shipping method instance
	 */
	protected $shipping_method = null;

	/**
	 * @var Object $message Admin area notice handler
	 */
	static $message = null;

	/**
	 * @var String $save_notification_hook AJAX request save notification hook
	 */
	protected $save_notification_hook = 'adk_save_notification';

	/**
	 * @var String $delete_notification_hook AJAX request delete notification hook
	 */
	protected $delete_notification_hook = 'adk_delete_notification';

	/**
	 * @var String $nonce_action Nonce action name for edit notification
	 */
	protected $nonce_action = 'adk_edit_notification';

	protected $widget;

	/**
	 * Class constructor
	 */
	public function __construct() {
		parent::__construct();
		load_plugin_textdomain( self::LNS, false,  dirname( __FILE__ ) . '/languages' );
		$this->init();

		// require_once( dirname( __FILE__ ) . '/includes/error.php' );

		// load_plugin_textdomain( 'advertikon', false,  dirname( __FILE__ ) . '.languages' );

		// if( is_admin() ) {
		// 	if( isset( $_GET['tab'] ) && $_GET['tab'] == Advertikon_Notifications::ID ) {

		// 		// Add admin scripts
		// 		add_action( 'admin_enqueue_scripts', array( $this, 'add_admin_scripts' ) );

		// 		// Add notification preview renderer
		// 		// add_action(
		// 		// 	'woocommerce_admin_field_adk-notification-preview',
		// 		// 	array( $this, 'render_notification_preview' )
		// 		// );
		// 	}

		// 	// Add Notifications setting page
		// 	add_action( 'woocommerce_get_settings_pages', array( $this, 'add_setting_tab' ) );
		// } else {

		// 	// Hook on page render events
		// 	$pos = array();
		// 	foreach( get_option( 'adk_notification', array() ) as $name => $config ) {
		// 		$pos = array_merge( $pos, array_values( $config['advertikon_notifications_position'] ) );
		// 	}

		// 	foreach( array_unique( $pos ) as $p ) {
		// 		add_action( $p, array( $this, 'render_notification' ) );
		// 	}

		// 	add_action( 'wp_enqueue_scripts', array( $this, 'add_scripts' ) );
		// }

		// // Add ajax template redirect to save notification hook
		// add_action( 'wc_ajax_' . $this->save_notification_hook, array( $this, 'save_notification' ) );

		// // Add ajax template redirect to delete notification hook
		// add_action( 'wc_ajax_' . $this->delete_notification_hook, array( $this, 'delete_notification' ) );

		// // Add ajax template redirect to products list fetcher
		// add_action( 'wc_ajax_adk_products_list', array( $this, 'get_products_list' ) );

		// // Add ajax template redirect to products list fetcher
		// add_action( 'wc_ajax_adk_coupons_list', array( $this, 'get_coupons_list' ) );
	}

	protected function init() {
		parent::init();
		$this->widget = class_exists( 'Advertikon_Notification_Includes_Widget_Extended' ) ?
			new Advertikon_Notification_Includes_Widget_Extended() : new Advertikon_Notification_Includes_Widget();

		if( is_admin() ) {
			if( isset( $_GET['tab'] ) && $_GET['tab'] == Advertikon_Notifications::ID ) {
				add_action( 'admin_enqueue_scripts', array( $this, 'add_admin_scripts' ) );
			}

			add_action( 'woocommerce_get_settings_pages', function(){ new Advertikon_Notification_Includes_Setting( $this->widget ); } );

			foreach( self::$ajax_endpoints as $a ) {
				add_action( 'wp_ajax_' . $a, [ $this, $a ] );
			}

		} else {

			// Hook on page render events
			// $pos = array();
			// foreach( get_option( 'adk_notification', array() ) as $name => $config ) {
			// 	$pos = array_merge( $pos, array_values( $config['advertikon_notifications_position'] ) );
			// }

			// foreach( array_unique( $pos ) as $p ) {
			// 	add_action( $p, array( $this, 'render_notification' ) );
			// }

			add_action( 'wp_enqueue_scripts', array( $this, 'add_scripts' ) );
		}

		// Add ajax template redirect to save notification hook
		// add_action( 'wc_ajax_' . $this->save_notification_hook, array( $this, 'save_notification' ) );

		// Add ajax template redirect to delete notification hook
		// add_action( 'wc_ajax_' . $this->delete_notification_hook, array( $this, 'delete_notification' ) );

		// Add ajax template redirect to products list fetcher
		add_action( 'wc_ajax_adk_products_list', array( $this, 'get_products_list' ) );

		// Add ajax template redirect to products list fetcher
		add_action( 'wc_ajax_adk_coupons_list', array( $this, 'get_coupons_list' ) );
	}

	/**
	 * Saves widget
	 * AJAX endpoint
	 */
	public function save_widget() {
		$ret = array();

		try {
			if( !current_user_can( 'manage_woocommerce' ) ) {
				throw new Exception( __( 'You must have permission to manage WooCommerce store' ) );
			}

			$this->widget->save( $_POST );
			$ret['success'] = __( 'The wigdet has been saved', self::LNS );

		} catch ( Exception $e ) {
			$ret['error'] = $e->getMessage();
			Advertikon::log( $e );
		}

		wp_send_json( $ret );
	}

	/**
	 * Loads specific widget
	 * AJAX endpoint
	 */
	public function load_widget() {
		$ret = array();

		try {
			if( !current_user_can( 'manage_woocommerce' ) ) {
				throw new Exception( __( 'You must have permission to manage WooCommerce store', self::LNS ) );
			}

			$name = Advertikon::request( 'name' );

			if ( !$name ) {
				throw new Exception( __( 'Name is missing', self::LNS ) );
			}

			$data = $this->widget->load( $name );
			$ret['success'] = true;
			$ret['data'] = $data;

		} catch ( Exception $e ) {
			$ret['error'] = $e->getMessage();
			Advertikon::log( $e );
		}

		wp_send_json( $ret );
	}

	/**
	 * Gets free shipping method instance
	 *
	 * @return Object
	 */
	protected function get_free_shipping() {
		if( ! $this->shipping_method ) {
			$shipping_methods = WC()->shipping->get_shipping_methods();
			if( ! $shipping_methods ) {
				WC()->shipping->load_shipping_methods();
				$shipping_methods = WC()->shipping->get_shipping_methods();
			}

			if( isset( $shipping_methods['free_shipping'] ) ) {
				$this->shipping_method = $shipping_methods['free_shipping'];
			}
		}

		return $this->shipping_method;
	}

	/**
	 * Render notification on catalog side
	 */
	public function render_notification() {

		foreach( get_option( self::ID ) as $name => $config ) {

			// Filter notifications base on position webhook
			if( ! in_array( current_filter(), $config['advertikon_notifications_position'] ) ) {
				continue;
			}

			// Filter notification base on triggers
			if( ! $this->is_triggered( $config ) ) {
				continue;
			}

			$container_css = 'style="'
						. 'height:'           . $config['advertikon_notifications_height'] . ';'
						. 'width:'            . '100%;'
						. '"';

			$border_css = 'style="'
						. 'background-color:' . $config['advertikon_notifications_bg_color'] . ';'
						. 'border-radius:'    . $config['advertikon_notifications_border_radius'] . ';'
						. 'box-shadow:'       . $config['advertikon_notifications_box_shadow'] . ';'
						. 'border-width:'     . $config['advertikon_notifications_border_width'] . ';'
						. 'border-color:'     . $config['advertikon_notifications_border_color'] . ';'
						. 'border-style:'     . $config['advertikon_notifications_border_style'] . ';'
						. 'height:'           . $config['advertikon_notifications_height'] . ';'
						. 'width:'            . $config['advertikon_notifications_width'] . ';'
						. 'left:'             . $config['advertikon_notifications_left'] . ';'
						. 'bottom:'           . $config['advertikon_notifications_bottom'] . ';'
						. '"';

			$text_css = 'style="'
						. 'color:'            . $config['advertikon_notifications_text_color'] . ';'
						. 'font-size:'        . $config['advertikon_notifications_font_height'] . ';'
						. '"';

			$button_css = 'style="'
						. ( $config['advertikon_notifications_button'] == 'no' ? 'display:none;' : '' )
						. '"';

			$button_action = 'onclick="';
			if( $config['advertikon_notifications_button_url'] ) {
				if( $config['advertikon_notifications_button_url_samepage'] == 'yes' ) {
					$button_action .= "window.location.assign('{$config['advertikon_notifications_button_url']}')";
				}
				else {
					$button_action .= "window.open('{$config['advertikon_notifications_button_url']}', 'adkPopUp' )";
				}
			}
			$button_action .= '"';

			$this->notification( '', $container_css, $border_css, $text_css, $config['advertikon_notifications_text'], $config['advertikon_notifications_button_text'], $button_css, $button_action );
		}
?>
<script>
/*
	global

	jQuery:false
	ADKFunctionParser: false
	adkParserData: false,
	window: false,
	adkFixTextHeight: false
*/
jQuery( function documentOnReady( $ ) {

	var
		adkParser = null,
		fixHeightDilay = 500;

	if ( typeof ADKFunctionParser === 'function' && adkParserData ) {
		adkParser = new ADKFunctionParser( adkParserData );
		$( '.adk-teaser-text' ).each(function iterateOverNotifications() {
			$( this ).html(
				adkParser.parse( $( this ).html() )

					// NlToBr
					.replace( /\n\r*/g, '<br>' )

					// StripSlashes
					.replace( /\\(.)/g, '$1' )
			);
		});
	}

	window.setTimeout( function fixNotificationActionDelay() {
		$( '.adk-teaser-body' ).each(function iterateOverNotifications() {
			adkFixTextHeight( $( this ) );
		});

	}, fixHeightDilay );
} );
</script>
<?php
	}

	/**
	 * Checks whether value is true
	 *
	 * @param Mixed $val
	 * @return Boolean
	 */
	protected function is_true( $val ) {
		return $val === true || strtolower( $val ) === 'true' || strtolower( $val ) === 'yes';
	}

	/**
	 * Checks fired triggers
	 *
	 * @param Array $notification Notification data
	 * @return Boolean
	 */
	protected function is_triggered( $notification ) {

		// Default value
		$result = false;
		$this->use_priority = true;

		if( $this->use_priority ) {
			$triggers = $this->priority_sort( $notification['advertikon_notifications_triggers'] );
		} else {
			$triggers = $notification['advertikon_notifications_triggers'];
		}

		foreach( $triggers as $trigger ) {


			if( ! $this->is_true( $trigger['checkbox_enable'] ) ) {
				continue;
			}

			// Select2 doesn't provide default or empty value
			if ( empty( $trigger['value'] ) ){
				$trigger['value'] = '';
			}

			switch( $trigger['name'] ) {

				// Always show
				case 'allways' :
					return true;
					break;

				// Free shipping is enabled in store config
				case 'free_shipping_enabled' : 
					$set = get_option( 'woocommerce_free_shipping_settings', array() );
					if( isset( $set['enabled'] ) || $this->is_true( $set['enabled'] ) ) {
						return $this->is_true( $trigger['radio_show'] );
					}
					break;

				// Insufficient amount for free shipping
				case 'free_shipping_amount' :
					if( WC()->cart && $this->get_free_shipping() ) {
						foreach( WC()->cart->get_shipping_packages() as $package ) {
							if( $this->is_need_more_sum_free_shipping( $package ) ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Cart subtotal greater or equal to specific sum 
				case 'cart_sub_total' :
					if( WC()->cart && $trigger['value'] <= WC()->cart->subtotal ) {
						return $this->is_true( $trigger['radio_show'] );
					}
					break;

				// Cart subtotal excluding taxes greater or equal to specific sum 
				case 'cart_sub_total_ex_tax' :
					if( WC()->cart && $trigger['value'] <= WC()->cart->subtotal_ex_tax ) {
						return $this->is_true( $trigger['radio_show'] );
					}
					break;

				//Cart total greater or equal to specific sum 
				case 'cart_total' :
					if( WC()->cart && $trigger['value'] <= WC()->cart->total ) {
						return $this->is_true( $trigger['radio_show'] );
					}
					break;

				//Cart contents weight greater or equal to specific weight
				case 'cart_weight' :
					if( WC()->cart && $trigger['value'] <= WC()->cart->get_cart_contents_weight() ) {
						return $this->is_true( $trigger['radio_show'] );
					}
					break;

				// Cart product has length equal or greater then
				case 'cart_product_length' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							if( (float)$item['data']->get_length() <= (float)$trigger['value'] ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Cart product has width equal or greater then
				case 'cart_product_width' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							if( (float)$item['data']->get_width() <= (float)$trigger['value'] ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Cart product has height equal or greater then
				case 'cart_product_height' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							if( (float)$item['data']->get_height() <= (float)$trigger['value'] ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Product belongs to one of categories
				case 'category' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							foreach( get_the_terms( $item['data']->id, 'product_cat' ) as $cat ) {
								if( $this->match_select2( $cat->slug, $trigger['value'] ) ) {
									return $this->is_true( $trigger['radio_show'] );
								}
							}
						}
					}
					break;

				// Product has tag
				case 'tag' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							foreach( get_the_terms( $item['data']->id, 'product_tag' ) as $tag ) {
								if( $this->match_select2( $tag->slug, $trigger['value'] ) ) {
									return $this->is_true( $trigger['radio_show'] );
								}
							}
						}
					}
					break;

				// Customer has specific payment country
				case 'payment_country' :
					if( WC()->customer ) {
						if( $this->match_select2(
								WC()->customer->get_country(),
								$trigger['value'] )
							) {
							return $this->is_true( $trigger['radio_show'] );
						}
					}
					break;

				// Customer has specific payment country
				case 'shipping_country' :
					if( WC()->customer ) {
						if( $this->match_select2(
								WC()->customer->get_shipping_country(),
								$trigger['value']
							) ) {
							return $this->is_true( $trigger['radio_show'] );
						}
					}
					break;

				// Specific product in cart
				case 'cart_product' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							if( $this->match_select2( $item['product_id'], $trigger['value'] ) ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Related product in cart
				case 'cart_product_related' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							foreach( $item['data']->get_related() as $related ){
								if( $this->match_select2( $related, $trigger['value'] ) ) {
									return $this->is_true( $trigger['radio_show'] );
								}
							}
						}
					}
					break;

				// Product belongs to specific shipping class
				case 'shipping_class' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							$sc = $item['data']->get_shipping_class();
							if( $sc && $this->match_elect2( $sc, $trigger['value'] ) ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Product belongs to specific product type
				case 'product_type' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_cart() as $item ) {
							$type = $item['data']->get_type();
							if( $type && $this->match_select2( $type, $trigger['value'] ) ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Product belongs to specific product type
				case 'coupon' :
					if( WC()->cart ) {
						foreach( WC()->cart->get_coupons() as $coupon ) {
							if( $this->match_select2( $coupon->id, $trigger['value'] ) ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Certain product number in the cart
				case 'product_quantities' :
					if( WC()->cart ) {
						$q = 0;
						foreach( WC()->cart->get_cart_item_quantities() as $quantity ) {
							$q += $quantity;
						}
						if( $q >= $trigger['value'] ) {
							return $this->is_true( $trigger['radio_show'] );
						}
					}
					break;

				// Low stock status
				case 'low_stock' :
					if( WC()->cart ) {
						$low_threshold = get_option( 'woocommerce_notify_low_stock_amount' );
						foreach( WC()->cart->get_cart() as $item ) {
							$stock = $item['data']->get_stock_quantity();
							if( ! is_null( $stock ) && $stock <= $low_threshold ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Out of stock status
				case 'out_of_stock' :
					if( WC()->cart ) {
						$out_threshold = get_option( 'woocommerce_notify_no_stock_amount' );
						foreach( WC()->cart->get_cart() as $item ) {
							$stock = $item['data']->get_stock_quantity();
							if( ! is_null( $stock ) && $stock <= $out_threshold ) {
								return $this->is_true( $trigger['radio_show'] );
							}
						}
					}
					break;

				// Guest session
				case 'guest_session' :
					if( ! is_user_logged_in() ) {
						return $this->is_true( $trigger['radio_show'] );
					}
					break;

				// Vat_exempt
				case 'vat_exempt' :
					if( WC()->customer && WC()->customer->is_vat_exempt() ) {
						return $this->is_true( $trigger['radio_show'] );
					}
					break;
			}
		}
		return $result;
	}

	/**
	* Match value against dataset
	* Match made regard on data returned from select2 drop downs, e.g. id:text, we use id part
	*
	* @param String $value Needle
	* @param Array $values Haystack
	* @return Boolean
	*/
	protected function match_select2( $value, $values ) {
		if( gettype( $values ) === 'string' ) {
			$values = explode( ',', $values );
		}

 		foreach( (array)$values as $v ) {
			if( strpos( $v,  ':' ) !== false ) {
				$v = strstr( $v, ':', true );
			}

			// Value may be string or number
			if( $v == $value ) {
				return true;
			}
		}
		return false;
	}

	/**
	* Sorts array(like) list and return new one based on priority values
	* List need to have priority value
	*
	* @return Array
	*/
	protected function priority_sort( $data ) {
		$sorted = array();
		foreach( $data as $k => $v ) {

			if( ( ! isset( $v['priority'] ) ) || ! is_numeric( $v['priority'] ) ) {
				$v['priority'] = 10;
			}

			$v['name'] = $k;

			for( $i = count( $sorted ) - 1; $i >= 0; $i-- ) {
				if( $v['priority'] < $sorted[ $i ]['priority'] ) {
					continue;
				} else {
					array_splice( $sorted, ++$i, 0, array( $v ) );
					continue 2;
				}
			}

			array_unshift( $sorted, $v );
		}
		return $sorted;
	}

	/**
	 * Checks if free shipping is available.
	 *
	 * @param array $package
	 * @return bool
	 */
	protected function is_need_more_sum_free_shipping( $package ) {
		if ( 'no' === $this->shipping_method->enabled ) {
			return false;
		}

		if ( 'specific' === $this->shipping_method->availability ) {
			$ship_to_countries = $this->shipping_method->countries;
		} else {
			$ship_to_countries = array_keys( WC()->countries->get_shipping_countries() );
		}

		if ( is_array( $ship_to_countries ) && ! in_array( $package['destination']['country'], $ship_to_countries ) ) {
			return false;
		}

		// Enabled logic
		$is_available       = false;
		$has_coupon         = false;
		$has_met_min_amount = false;

		if ( in_array( $this->shipping_method->requires, array( 'coupon', 'either', 'both' ) ) ) {

			if ( $coupons = WC()->cart->get_coupons() ) {
				foreach ( $coupons as $code => $coupon ) {
					if ( $coupon->is_valid() && $coupon->enable_free_shipping() ) {
						$has_coupon = true;
					}
				}
			}
		}

		if ( in_array( $this->shipping_method->requires, array( 'min_amount', 'either', 'both' ) ) &&
			 isset( WC()->cart->cart_contents_total ) ) {

			if ( WC()->cart->prices_include_tax ) {
				$total = WC()->cart->cart_contents_total + array_sum( WC()->cart->taxes );
			} else {
				$total = WC()->cart->cart_contents_total;
			}

			if ( $total >= $this->shipping_method->min_amount ) {
				$has_met_min_amount = true;
			}
		}

		switch ( $this->shipping_method->requires ) {
			case 'min_amount' :
				if ( ! $has_met_min_amount ) {
					$is_available = true;
				}
				break;
			case 'coupon' :

				// Do not show in this case
				break;
			case 'both' :
				if ( ! $has_met_min_amount && $has_coupon ) {
					$is_available = true;
				}
				break;
			case 'either' :
				if ( ! $has_met_min_amount && ! $has_coupon ) {
					$is_available = true;
				}
				break;
			default :
				$is_available = true;
		}
		return $is_available;
	}

	/**
	 * Add scripts to admin area
	 */
	public function add_admin_scripts() {

		// Plugin main script - at footer
		wp_enqueue_script(
			'adk_notifications',
			plugins_url( 'js/adk_notifications.js', __FILE__ ),
			array(
				'jquery',
				'jquery-ui-core',
				'jquery-ui-widget',
				'jquery-ui-button',
				'jquery-ui-slider',
				'jquery-ui-draggable',
				'jquery-ui-sortable',
			),
			false,
			true
		);
		
		wp_enqueue_script(
			'select2',
			plugins_url( 'assets/js/select2/select2.js', 'woocommerce/woocommerce.php' ),
			array(
				'jquery',
			),
			false,
			true
		);
		
		wp_enqueue_script(
		    'spectrum',
		    plugins_url( 'js/spectrum.js', __FILE__ ),
		    array(
		        'jquery',
		        'tinycolor'
		    ),
		    false,
		    true
		);
		
        wp_enqueue_script(
            'tinycolor',
            plugins_url( 'js/tinycolor-min.js', __FILE__ ),
            array(
                'jquery',
            ),
            false,
            true
        );

		wp_scripts()->add_inline_script(
			'adk_notifications',
			// Localization and code injections
			"var adkLang=" . json_encode( array(
				'show_if'                  => __( 'Show if', 'advertikon' ),
				'hide_if'                  => __( 'Hide if', 'advertikon' ),
				'disabled'                 => __( 'Disabled', 'advertikon' ),
				'saving'                   => __( 'Saving', 'advertikon' ),
				'network_error'            => __( 'Network error', 'advertikon' ),
				'search'                   => __( 'Search for item', 'advertikon' ),
				'searching'                => __( 'Searching', 'advertikon' ),
				'query_min_length'         => __( 'Query should be at least % character(s) long', 'advertikon' ),
				'query_max_length'         => __( 'Query may be maximum % character(s) long', 'advertikon' ),
				'no_matches'               => __( 'No matches found', 'advertikon' ),
				'parse_error'              => __( 'Response parsing error', 'advertikon' ),
				'ajax_delete_notification' => site_url() . '?wc-ajax=' . $this->delete_notification_hook,
				'wpnonce'                  => wp_create_nonce( $this->nonce_action ),
				'prefix'                   => Advertikon_Notifications::prefix( '' ),
				'missUrl'                  => __( 'URL is missing', self::LNS ),
			) ) . ";",
			'before'
		);

		$this->add_styles();
	}

	/**
	 * Add front end scripts
	 */
	public function add_scripts() {

		// Plugin main script - at footer
		wp_enqueue_script(
			'adk_function_parser',
			plugins_url( 'js/adk_function_parser.js', __FILE__ ),
			array(),
			false,
			true
		);

		wp_script_add_data(
			'adk_function_parser',
			'data',
			$this->minify_script(

				// Notification text and call-to-action button responsive functionality
				$this->fix_banner_css_script() ) . ';' . PHP_EOL .

				// Notification's text parser functions templates
				// Such complication (the way to inject JavaScript to page) needed
				// so to decrease code support efforts - one code for front-end and back-end.
				'var adkParserData = ' . require( dirname( __FILE__ ) . '/includes/functions.json.php' )
			);

		$this->add_styles();
	}

	/**
	 * Returns javaScript function to fix notification contents layout
	 *
	 * @return String
	 */
	protected function fix_banner_css_script() {
		return <<<script

function adkFixTextHeight( p ) {

	var
		b = p.find( '.adk-teaser-button-wrapper' ),
		bH = parseInt( b.css( 'height' ), 10 ),
		bP = b.position(),
		pH = parseInt( p.css( 'height' ), 10 ),
		pW = parseInt( p.css( 'width' ), 10 ),
		t = p.find( '.adk-teaser-text' ),
		tH = null;

	t.css( 'width', ( bP.left ? bP.left: pW ) );
	b.css( 'margin-top', Math.max( 0, ( pH - bH ) / 2 ) );

	tH = parseInt( t.css( 'height' ), 10 );

	t.css( 'margin-top', Math.max( 0, ( pH - tH ) / 2 ) );
};

jQuery( window ).on( 'resize', function windowResizeHandle( evt ) {
	jQuery( '.adk-teaser-body' ).each(function iterateOverNotifications() {
		adkFixTextHeight( jQuery( this ) );
	});
} );

jQuery( '.adk-teaser-body' ).each(function iterateOverNotifications() {
	adkFixTextHeight( jQuery( this ) );
});

script;
	}

	/**
	 * Add styles
	 */
	public function add_styles() {
		wp_enqueue_style( 'adk_notifications', plugins_url( 'css/adk_notifications.css', __FILE__ ) );
		wp_enqueue_style( 'spectrum', plugins_url( 'css/spectrum.css', __FILE__ ) );
	}

	/**
	 * Minify script
	 *
	 * @param String $script Script string
	 * @param Boolean $ignore If set to true - will return script as is
	 * @return String
	 */
	protected function minify_script( $script, $ignore = false ) {
		if( $ignore ) {
			return $script;
		}

		$filters = array(
			array( '|//[^\n]*\n|', '' ),
			array( '|/\*.*?\*/|s', '' ),
			array( '|\s+|', ' ' ),
			);

		foreach( $filters as $filter ) {
			$script = preg_replace( $filter[ 0 ], $filter[ 1 ], $script ); 
		}

		return $script;
	}

	/**
	* Add Notifications settings tab to existing collection
	*
	* @param Array $settings Setting pages collection
	*/
	public function add_setting_tab( $settings ) {
		require_once( dirname( __FILE__ ) . '/includes/setting-page.php' );
		$settings[] = new ADK_Setting_Notifications;
	}

	/**
	* Render notification live preview at admin area
	*/
	public function render_notification_preview( $input ) {
		$field_description = WC_Admin_Settings::get_field_description( $input );
		extract( $field_description );

		// Custom attribute handling
		$custom_attributes = array();

		if ( ! empty( $input['custom_attributes'] ) && is_array( $input['custom_attributes'] ) ) {
			foreach ( $input['custom_attributes'] as $attribute => $attribute_value ) {
				$custom_attributes[] = esc_attr( $attribute ) . '="' . esc_attr( $attribute_value ) . '"';
			}
		}

		$height = '';
		if( isset( $input['custom_attributes']['data-max-height'] ) ) {
			$height = 'style="height:' . $input['custom_attributes']['data-max-height'] . 'px"';
		}
?>
<tr valign="top">
	<th scope="row" class="titledesc">
		<label for="<?php echo esc_attr( $input['id'] ); ?>"><?php echo esc_html( $input['title'] ); ?></label>
		<?php echo $tooltip_html; ?>
		<?php echo $description; ?>
	</th>
	<td class="forminp forminp-<?php echo sanitize_title( $input['type'] ) ?>" id="adk-put-there" <?php echo $height; ?> >
		<?php $this->notification( implode( ' ', $custom_attributes) ); ?>
	</td>
</tr>
<tr>
	<td colspan="2" style="padding:0">
		<label>
			<input id="adk-fix-preview" type="checkbox"><?php _e( 'For the convenience sake fix preview on the page/make draggable' ); ?>
		</label>
	</td>
</tr>
<?php
	}

	/**
	* Render notification itself
	*
	* @param String $custom_attributes Custom attributes
	* @param String $container_css Notification container css rules
	* @param String $css_body Notification body css rules
	* @param String $css_text Notification text css rules
	* @param String $text Notification text
	* @param String $button_text CTA button text
	* @param String $button_css CTA button css rules
	* @param String $button_function CTA button click handler
	*/
	protected function notification(
		$custom_attributes = '',
		$container_css = '',
		$css_body = '',
		$css_text = '',
		$text = ' ',
		$button_text = '',
		$button_css = '',
		$button_function = ''
	) {
?>
<div class="adk-teaser" <?php echo $custom_attributes; ?> <?php echo $container_css; ?> >
	<div class="adk-teaser-body" <?php echo $css_body; ?> >
		<div class="adk-teaser-text" <?php echo $css_text; ?> ><?php echo $text; ?></div>
		<div class="adk-teaser-button-wrapper" <?php echo $button_css; ?> >
			<button type="button" <?php echo $button_function; ?> ><?php echo $button_text; ?></button>
		</div>
	</div>
</div>
<?php
	}

	/**
	* Save notification data
	* AJAX endpoint
	*/
	// public function save_notification() {
	// 	check_ajax_referer( $this->nonce_action );

	// 	$resp = array();
	// 	try {

	// 		if( ! current_user_can( 'manage_woocommerce' ) ) {
	// 			throw new ADK_Error( __( 'You must have permission to manage WooCommerce store' ) );
	// 		}

	// 		$data = $_POST;

	// 		if( ! $data ) {
	// 			throw new ADK_Error( __( 'Empty request' ), 'advertikon' );
	// 		}

	// 		if( empty( $data['advertikon_notifications_name'] ) ) {
	// 			throw new ADK_Error( __( 'Notificaton need to have a name', 'advertikon' ) );
	// 		}

	// 		if( empty ( $data['advertikon_notifications_text'] ) ) {
	// 			throw new ADK_Error( __( 'Notification heed to have a text', 'advertikon' ) );
	// 		}

	// 		unset( $data['_wpnonce'] );

	// 		$option = get_option( self::ID, array() );

	// 		$option[ $data['advertikon_notifications_name'] ] = $data;

	// 		if( update_option( self::ID, $option, '', false ) ) {
	// 			$resp['success'] = true;
	// 		}

	// 	} catch( ADK_Error $e ) {
	// 		$resp['error'] = __( 'Error', 'advertikon' ) . ':' . $e->getMessage();
	// 	}

	// 	echo json_encode( $resp );
	// }

	/**
	* Delete notification data
	* AJAX endpoint
	*/
	public function delete_notification() {
		check_ajax_referer( $this->nonce_action );

		$resp = array();
		try {

			if( ! current_user_can( 'manage_woocommerce' ) ) {
				throw new ADK_Error( __( 'You must have permission to manage WooCommerce store' ) );
			}

			$name = isset( $_REQUEST['name'] ) ? $_REQUEST['name'] : '';

			if( ! $name ) {
				throw new ADK_Error( __( 'Empty request' ), 'advertikon' );
			}

			$option = get_option( self::ID );

			if( $option && isset( $option[ $name ] ) ) {

				unset( $option[ $name ] );

				if( update_option( self::ID, $option ) ) {
					$resp['success'] = true;
				}

			} else {
				$resp['success'] = true;
			}
		} catch( ADK_Error $e ) {
			$resp['error'] = __( 'Error', 'advertikon' ) . ':' . $e->getMessage();
		}

		echo json_encode( $resp );
	}

	/**
	* Fetch product list based on query string
	* AJAX endpoint
	*/
	public function get_products_list() {

		global $wpdb, $table_prefix;
		$resp = array();

		try {

			if( ! current_user_can( 'read' ) ) {
				throw new ADK_Error( __( 'You must have permission to read products' ) );
			}

			$name = ! empty( $_REQUEST['q'] ) ? esc_sql( $wpdb->esc_like( $_REQUEST['q'] ) ) : '_';

			$res = array();

			if( $name ) {
				$res = $wpdb->get_results(
					"SELECT `ID` as 'id', `post_title` as 'text' FROM `{$table_prefix}posts` WHERE `post_type` = 'product' AND `post_title` LIKE '%$name%' LIMIT 20"
					);
			}

			$resp['items'] = $res;
			
		} catch( ADK_Error $e ) {
			$resp['error'] = __( 'Error', 'advertikon' ) . ':' . $e->getMessage();
		}

		echo json_encode( $resp );
	}

	/**
	* Fetch coupons list based on query string
	* AJAX endpoint
	*/
	public function get_coupons_list() {

		global $wpdb, $table_prefix;
		$resp = array();

		try {

			if( ! current_user_can( 'read_shop_coupon' ) ) {
				throw new ADK_Error( __( 'You must have permission to read shop coupons' ) );
			}

			$name = ! empty( $_REQUEST['q'] ) ? esc_sql( $wpdb->esc_like( $_REQUEST['q'] ) ) : '_';

			$res = array();

			if( $name ) {
				$res = $wpdb->get_results(
					"SELECT `ID` as 'id', `post_title` as 'text' FROM `{$table_prefix}posts` WHERE `post_type` = 'shop_coupon' AND `post_title` LIKE '%$name%' LIMIT 20"
					);
			}

			$resp['items'] = $res;
			
		} catch( ADK_Error $e ) {
			$resp['error'] = __( 'Error', 'advertikon' ) . ':' . $e->getMessage();
		}

		echo json_encode( $resp );
	}
}

// require_once( dirname(__FILE__ ) . '/includes/admin_message.php' );
// Advertikon_Notifications::$message = new Advertikon_Admin_Message;

$advertikon_notifications = new Advertikon_Notifications();

// Activation hook
//register_activation_hook( __FILE__, 'Advertikon_Notifications::activate' );
//endif;
?>
