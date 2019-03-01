<?php
/**
 *
 */

if ( !defined('ABSPATH') ) {
	/** Set up WordPress environment */
	require_once( dirname( __DIR__ ) . '/../../wp-load.php' );
}

require_once( plugin_dir_path( __FILE__ ) . '/class/feed.php' );

// $user = 'CXLHfDVrziCfvwgCuL8nUahC';
$user = get_option( 'adk_feeduser' );
// $pwd = 'mFqMsCSPdnb5WO1gpEEtDCHH';
$pwd = get_option( 'adk_feedpwd' );

$feed = new Feed( $user, $pwd, false );


// global $wpdb;
// $wpdb->show_errors();
// $data = $wpdb->get_row( "SELECT id, photo FROM {$wpdb->prefix}adk_feed_data WHERE length(photo) > 300 limit 1" );
// $feed->getImage( $data->id, json_decode( $data->photo ) );

$feed->process();
// var_dump( $feed->query() );


// $feed->getMasterList();
