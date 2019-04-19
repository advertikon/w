<?php
/**
 * Advertikon admin.php Class
 * @author Advertikon
 * @package
 * @version 0.00.000
 */

function adk_render_admin_page() {
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	adkSavePDF();

	$user_text            = __( 'User name (DDF)', ADK_FEED_CODE );
	$pwd_text             = __( 'Password (DDF)', ADK_FEED_CODE );
	$google_text          = __( 'Google token', ADK_FEED_CODE );
	$locallogic_text      = __( 'Local Logic token', ADK_FEED_CODE );
	$locallogic_api_text  = __( 'Local Logic API token', ADK_FEED_CODE );

	$user_value           = get_option( 'adk_feed_user' ); // it;s intentionally
	$pwd_value            = get_option( 'adk_feed_pwd' );  // the same shit
	$google_token         = get_option( 'adk_feed_google' );
	$locallogic_token     = get_option( 'adk_feed_locallogic' );
	$locallogic_api_token = get_option( 'adk_feed_locallogic_api' );

	$action = add_query_arg( 'page', isset( $_GET['page'] ) ? $_GET['page'] : '',  admin_url( 'admin.php' ) );
	$list = require_once __DIR__ . '/../data.php';

?>
<style>
	table {
		border-collapse: collapse;
	}
</style>
<form action="<?php echo $action; ?>" method="POST" enctype="multipart/form-data">
<?php

	foreach( $list as $l ) {
		$n = preg_replace( '/[^a-zA-Z0-9]/', '_', $l['name'] );
		echo "<table border='1'><caption>${l['name']}</caption>";

		foreach( get_pdf( $l['name'] ) as $pdf ) {
			echo "<tr><td>" . $pdf . "</td></td><button class='remove-pdf' data-pdf='" . $pdf . "'>Delete</button></td></tr>";
		}

		echo "<tr><td><input type='file' name='$n'></td><td><button type='submit' class='add-pdf'>Add new</td></tr>";
		echo '</table>';
	}

	echo '</form>';
}

function get_pdf( $name ) {
	$n = preg_replace( '/[^a-zA-Z0-9]/', '_', $name );

	if ( !is_dir( 'data/' . $n ) ) {
		return [];
	}

	return scandir( 'data/' . $n );
}

function adkSavePDF() {
	foreach( $_POST as $k => $v ) {
		if ( $v ) {
			echo "$k = $v<br>";
		} 
	}

	var_dump( $_FILES );
}