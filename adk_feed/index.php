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
$mList = $feed->getMasterList();

var_dump( count( $mList ) );