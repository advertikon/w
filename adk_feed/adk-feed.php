<?php

/*
Plugin Name: Adk Feed
Plugin URI:
Description:
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
	wp_schedule_event( time(), 'hourly', 'adk_feed_sync' );
	create_table();
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

	$wpdb->query( "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}adk_feed_master (
            id int(11) NOT NULL,
            last_update datetime NOT NULL,
            UNIQUE KEY id (id)
        ) $charset_collate;"
	);
}