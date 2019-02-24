<?php
/**
 *
 */

if ( !defined('ABSPATH') ) {
	/** Set up WordPress environment */
	require_once( dirname( __DIR__ ) . '/../../wp-load.php' );
}

require_once( plugin_dir_path( __FILE__ ) . '/class/feed.php' );

$user = 'CXLHfDVrziCfvwgCuL8nUahC';
$pwd = 'mFqMsCSPdnb5WO1gpEEtDCHH';

$feed = new Feed( $user, $pwd, false );

$id = '10831504';
global $wpdb;
$wpdb->show_errors();
$data = $wpdb->get_row( "SELECT id, photo FROM {$wpdb->prefix}adk_feed_data WHERE photo <> '' LIMIT 1" );
echo $feed->getImage( $data->id, json_decode( $data->photo )  );

