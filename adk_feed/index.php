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

$feed = new Feed( $user, $pwd, false);
$mList = $feed->getMasterList();

global $wpdb;

$i = 0;

$wpdb->query( "TRUNCATE TABLE {$wpdb->prefix}adk_feed_master" );
set_time_limit( 300 );

$time1 = microtime( true );
$mem1 = memory_get_usage( true );

foreach( $mList as $id => $upDate ) {
	if ( $i === 0 ) {
		$q = "INSERT INTO {$wpdb->prefix}adk_feed_master (id, last_update) VALUES";
		$values = [];
		$str = [];
	}

	$str[] = '(%d, %s)';
	$values[] = $id;
	$values[] = DateTime::createFromFormat( 'd/m/Y g:i:s A', $upDate )->format( 'Y-m-d H:i:s' );

	if ( $i === 10 ) {
		$q .= implode( ',', $str );
		$wpdb->query( $wpdb->prepare( $q, $values ) );
		$i = 0;

	} else {
		$i++;
	}
}

echo( sprintf(
	'DB insertion Time: %.2f sec, Memory: %.2f MB',
	microtime( true ) - $time1,
	( memory_get_usage( true ) - $mem1 ) / ( 1024 * 1024 )
) );