<?php

// If uninstall is not called from WordPress, exit
if ( !defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit();
}

function adk_rm( $item ) {
	if ( is_dir( $item ) ) {
		foreach( scandir( $item ) as $i ) {
			if ( '.' !== $i[ 0 ] ) {
				adk_rm( $item . $i );
			}
		}

		rmdir( $item );

	} else {
		unlink( $item );
	}
}

//delete_option( 'adk_notification' );
global $wpdb;

$wpdb->query( "DROP TABLE {$wpdb->prefix}adk_feed_data" );

adk_rm( __DIR__ . '/images/' );
