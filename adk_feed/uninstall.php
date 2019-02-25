<?php

// If uninstall is not called from WordPress, exit
function adk_rm( $item ) {
	if ( is_dir( $item ) ) {
		foreach( scandir( $item, SCANDIR_SORT_ASCENDING ) as $i ) {
			if ( '.' !== $i[ 0 ] ) {
				adk_rm( $item . $i );
			}
		}

		rmdir( $item );

	} else {
		unlink( $item );
	}
}

if ( !defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit();
}

global $wpdb;

delete_option( 'adk_feed_last_update' );

$wpdb->query( "DROP TABLE {$wpdb->prefix}adk_feed_data" );

adk_rm( __DIR__ . '/images/' );
