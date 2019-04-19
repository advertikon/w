<?php

/*
Plugin Name: Market Information
Plugin URI:
Description: Shows downloadable PDF with market reports
Version: 1.0
Author: advertikon
Author URI: https://www.adveretikon.com.ua
License:
*/


add_action( 'admin_menu', 'adk_info_menu' );
register_activation_hook( __FILE__, 'adk_info_activate' );
register_deactivation_hook( __FILE__, 'adk_info_deactivate' );
add_action ( 'wp_enqueue_scripts', 'adk_info_add_scripts' );
add_action ( 'wp_enqueue_scripts', 'adk_info_add_styles' );
// add_action( 'init', 'adk_create_posttype' );
// add_action( 'init', 'adk_rewrite_rule', 10, 0 );

function adk_info_activate() {
	
}

function adk_info_deactivate() {
	// wp_clear_scheduled_hook('adk_feed_sync' );
	//delete_option( 'adk_feed_last_update' );
}

function adk_info_menu(){
	add_menu_page( 'Market Reports', 'Market Reports', 'manage_options', 'adk-info', 'adk_info_menu_init' );
}

function adk_info_menu_init(){
	require_once plugin_dir_path( __FILE__ ) . 'pages/admin.php';
	adk_render_admin_page();
}

// function adk_feed_sync() {
// 	echo 'hello';
// }

// function create_table() {
// 	global $wpdb;

// 	$wpdb->show_errors();

// 	$wpdb->query( "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}adk_feed_data (
//         id                  int(11) NOT NULL UNIQUE,
//         listing_id          varchar(20) NOT NULL,
//         bedrooms            tinyint(2) NOT NULL,
//         bathrooms           tinyint(2) NOT NULL,
//         floors              tinyint(2) NOT NULL,
//         square_feet         int(11) NOT NULL,
// 		square_feet_inner   int(11) NOT NULL,
//         lot_size            decimal(12,2) NOT NULL,
//   		lot_size_text       varchar(20) NOT NULL,
//         price               decimal(12,2) NULL,
// 		price_per_time      decimal(12,2) NULL,
// 		price_per_unit      decimal(12,2) NULL,
// 		rent                decimal(12,2) NULL,
// 		rent_per_time       decimal(12,2) NULL,
// 		rent_per_unit       decimal(12,2) NULL,
//         address             varchar(255) NOT NULL,
// 		address2            varchar(255) NOT NULL,
//         city                varchar(60) NOT NULL,
//         zip_code            varchar(10) NOT NULL,
// 		county              varchar(50) NOT NULL,
// 		province            varchar(50) NOT NULL,
// 	  	street_number       varchar(20) NOT NULL,
// 		street_address      varchar(600) NOT NULL,
// 		neighbor            varchar(200) NOT NULL,
//         property_type       varchar(60) NOT NULL,
//         building_type       varchar(60) NOT NULL,
//         transaction_type    varchar(60) NOT NULL,
//         year_built          smallint(4) NULL,
//         is_open             tinyint(1) NOT NULL,
//         photo               blob(1000) NOT NULL,
//         last_update         timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
//   		notes               varchar(2000) NOT NULL,
// 		parking             varchar(40) NOT NULL,
// 		scenery             varchar(200) NOT NULL,
// 		building_appliances varchar(400) NOT NULL, 
// 		land_appliances     varchar(400) NOT NULL,
// 		farm_type           varchar(60) NOT NULL,
// 		zoning_type         varchar(60) NOT NULL,
//   		agent_name          varchar(60) NOT NULL,
//   		agent_phone         varchar(400) NOT NULL,
//   		agent_office_name   varchar(100) NOT NULL,
//   		agent_office_phone  varchar(400) NOT NULL,
//   		INDEX i1 (price,bedrooms,bathrooms)
//     )" );

//     $wpdb->query( "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}adk_feed_coordinates (
// 	        listing_id  varchar(20) NOT NULL UNIQUE,
// 	        coordinates blob NOT NULL
//     	)"
//     );
// }

function adk_info_add_scripts() {
	// wp_register_script(
	// 	'adk_feed', plugins_url( 'assets/javascripts/jquery.selectBoxIt.min.js', __FILE__ ),
	// 	[ 'jquery', 'jquery-ui-widget' ],
	// 	'1.1',
	// 	false
	// );

	// wp_enqueue_script('adk_feed' );

	// wp_register_script(
	// 	'adk_feed_1', plugins_url( 'assets/javascripts/jquery.validate.min.js', __FILE__ ),
	// 	[ 'jquery' ],
	// 	'1.1',
	// 	true
	// );

	// wp_enqueue_script('adk_feed_1' );

	// wp_register_script(
	// 	'adk_feed_2', plugins_url( 'assets/javascripts/single-listing.min.js', __FILE__ ),
	// 	[],
	// 	'1.1',
	// 	true
	// );

	// wp_enqueue_script('adk_feed_2' );

	// wp_register_script( 'fitvids', '//cdnjs.cloudflare.com/ajax/libs/fitvids/1.1.0/jquery.fitvids.min.js', array('jquery'), null, true );
	//wp_enqueue_script( 'jquery-ui-tabs', array('jquery') );
	// wp_enqueue_script('fitvids' );
}

function adk_info_add_styles() {
	// wp_register_style('adk_feed', plugins_url('assets/stylesheets/jquery.selectBoxIt.css', __FILE__ ) );
	// wp_enqueue_style('adk_feed');

	// wp_register_style('adk_feed_1', plugins_url('assets/stylesheets/wp-listings.css', __FILE__ ) );
	// wp_enqueue_style('adk_feed_1');

	// wp_register_style('adk_feed_2', plugins_url('assets/stylesheets/wp-listings-widget.css', __FILE__ ) );
	// wp_enqueue_style('adk_feed_2');

	// wp_register_style('adk_feed_3', plugins_url('assets/stylesheets/wp-listings-single.css', __FILE__ ) );
	// wp_enqueue_style('adk_feed_3');
}

// function adk_create_posttype() {
// 	register_post_type( 'ddf_search',
// 		array(
// 			'labels' => array(
// 				'name' => __( 'Search result', 'adk_feed' ),
// 				'singular_name' => __( 'Search results', 'adk_feed' )
// 			),
// 			'public'      => true,
// 			'has_archive' => true,
// 			'rewrite'     => array( 'slug' => 'ddf_search' ),
// 		)
// 	);

// 	register_post_type( 'ddf_listing',
// 		array(
// 			'labels' => array(
// 				'name' => __( 'DDF Listing', 'adk_feed' ),
// 				'singular_name' => __( 'DDF Listings', 'adk_feed' )
// 			),
// 			'public'      => true,
// 			'has_archive' => true,
// 			'rewrite'     => array( 'slug' => 'ddf_listing' ),
// 		)
// 	);
// }

// function adk_rewrite_rule() {
// 	add_rewrite_rule('^ddf-search/?$', 'index.php?post_type=ddf_search','top' );
// 	add_rewrite_rule('^ddf-listing/.+?-(\d+)/?','index.php?post_type=ddf_listing&listing_id=$matches[1]','top' );
// 	add_rewrite_tag('%listing_id%', '' );
// }