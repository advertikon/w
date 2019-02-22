<?php

/*
Plugin Name: DDF Data Feed
Plugin URI:
Description: Maintains local copy of DDF Data Feed
Version: 1.0
Author: advertikon
Author URI: https://www.adveretikon.com.ua
License:
*/

if ( !defined( 'ADK_FEED_CODE' ) ) {
	define( 'ADK_FEED_CODE', 'adk_feed' );
}

add_action( 'admin_menu', 'adk_feed_menu' );
register_activation_hook( __FILE__, 'adk_feed_activate' );
register_deactivation_hook( __FILE__, 'adk_feed_deactivate' );

function adk_feed_activate() {
	if ( function_exists( 'ob_start' ) ) {
		ob_start();
	}

	$error = [];
	$out = '';

	try {
		wp_schedule_event( time(), 'hourly', 'adk_feed_sync' );
		create_table();

	} catch ( \Throwable $e ) {
		$error[] = $e->getMessage();
	}

	if ( function_exists( 'ob_get_clean' ) ) {
		$out = ob_get_clean();
	}

	if ( $out ) {
		$error[] = $out;
	}

	if ( $error ) {
		require_once( __DIR__ . '/class/log.php' );
		$log = new Log( 'Activator' );
		$log->write( implode( "\n", $error ) );
		echo 'Error';
	}
}

function adk_feed_deactivate() {
	wp_clear_scheduled_hook('adk_feed_sync' );
}

function adk_feed_menu(){
	add_menu_page( 'DDF Data Feed', 'DDF Data Feed', 'manage_options', 'adk-feed', 'adk_feed_menu_init' );
}

function adk_feed_menu_init(){
	require_once( plugin_dir_path( __FILE__ ) . 'page/admin.php' );
	adk_render_admin_page();
}

function adk_feed_sync() {
	echo 'hello';
}

function create_table() {
	global $wpdb;

	$charset_collate = $wpdb->get_charset_collate();
	$wpdb->show_errors();

//	$wpdb->query( "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}adk_feed_master (
//            id int(11) NOT NULL,
//            last_update datetime NOT NULL,
//            UNIQUE KEY id (id)
//        ) $charset_collate;"
//	);

	$wpdb->query( "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}adk_feed_data (
        id               int(11) NOT NULL,
        listing_id       varchar(20) NOT NULL,
        bedrooms         tinyint(2) NOT NULL,
        bathrooms        tinyint(2) NOT NULL,
        floors           tinyint(2) NOT NULL,
        square_feet      decimal(8,2) NOT NULL,
        lot_size         decimal(8,2) NOT NULL,
        price            decimal(12,2) NOT NULL,
        address          varchar(255) NOT NULL,
        city             varchar(60) NOT NULL,
        zip_code         varchar(10) NOT NULL,
        property_type    varchar(60) NOT NULL,
        building_type    varchar(60) NOT NULL,
        transaction_type varchar(60) NOT NULL,
        year_built       smallint(4) NOT NULL,
        is_open          tinyint(1) NOT NULL,
        photo            blob(1000) NOT NULL,
        last_update      datetime NOT NULL,
        UNIQUE KEY id (id)
    )" );
}