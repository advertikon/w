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

	$user_value = get_option( ADK_FEED_CODE . 'user' );
	$pwd_value = get_option( ADK_FEED_CODE . 'pwd' );

	$user_text = __( 'User name', ADK_FEED_CODE );
	$pwd_text = __( 'Password', ADK_FEED_CODE );

	$action = add_query_arg( 'page', isset( $_GET['page'] ) ? $_GET['page'] : '',  admin_url( 'admin.php' ) );

	echo <<<HTML
<form action="$action" method="POST">
	<table>
		<tr>
			<th>
				<label>$user_text
					<input type="text" value="$user_value" name="user">
				</label>
			</th>
			<td>
			
			</td>
		</tr>
		<tr>
			<th>
				<label>$pwd_text
					<input type="text" value="$pwd_value" name="pwd">
				</label>
			</th>
			<td>
			
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
	foreach( [ 'user', 'pwd' ] as $name ) {
		if ( isset( $_POST[ $name ] ) ) {
			update_option( ADK_FEED_CODE . $name, $_POST[ $name ] );
		}
	}
}