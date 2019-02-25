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

// $id = '18231247';
//global $wpdb;
//$wpdb->show_errors();
//$data = $wpdb->get_row( "SELECT id, photo FROM {$wpdb->prefix}adk_feed_data WHERE length(photo) > 300 limit 1" );
//echo $feed->getImage( $data->id, json_decode( $data->photo )  );
// echo $feed->getImage( $id  );

$feed->search( function(){}, '1970-01-10');

// $feed->process();

