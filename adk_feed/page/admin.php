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
	adkFeedSaveSettings();

	$user_text        = __( 'User name (DDF)', ADK_FEED_CODE );
	$pwd_text         = __( 'Password (DDF)', ADK_FEED_CODE );
	$google_text      = __( 'Google token', ADK_FEED_CODE );
	$locallogic_text  = __( 'Local Logic token', ADK_FEED_CODE );

	$user_value       = get_option( 'adk_feed_user' ); // it;s intentionally
	$pwd_value        = get_option( 'adk_feed_pwd' );  // the same shit
	$google_token     = get_option( 'adk_feed_google' );
	$locallogic_token = get_option( 'adk_feed_locallogic' );

	$action = add_query_arg( 'page', isset( $_GET['page'] ) ? $_GET['page'] : '',  admin_url( 'admin.php' ) );

	echo <<<HTML
<form action="$action" method="POST">
	<table>
		<tr>
			<th>
				<label for="user">$user_text</label>
			</th>
			<td>
				<input type="text" value="$user_value" name="user">
			</td>
		</tr>
		<tr>
			<th>
				<label for="pwd">$pwd_text</label>
			</th>
			<td>
				<input type="text" value="$pwd_value" name="pwd">
			</td>
		</tr>
		<tr>
			<th>
				<label for="google">$google_text</label>
			</th>
			<td>
				<input type="text" value="$google_token" name="google">
			</td>
		</tr>
		<tr>
			<th>
				<label for="locallogic">$locallogic_text</label>
			</th>
			<td>
				<input type="text" value="$locallogic_token" name="locallogic">
			</td>
		</tr>
		<tr>
			<td>
				<button type="submit">Save</button>
			</td>
		</tr>
	</table>
	
</form>
HTML;

}

function adkFeedSaveSettings() {
	foreach( [ 'user', 'pwd', 'google', 'locallogic' ] as $name ) {
		if ( isset( $_POST[ $name ] ) ) {
			update_option( 'adk_feed_' . $name, $_POST[ $name ] );
		}
	}
}