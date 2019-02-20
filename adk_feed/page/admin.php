<?php
/**
 * Advertikon admin.php Class
 * @author Advertikon
 * @package
 * @version 0.00.000
 */

function adk_render_admin_page() {
	$user_value = get_option( ADK_FEED_CODE . 'user_name' );
	$pwd_value = get_option( ADK_FEED_CODE . 'user_name' );

	$user_text = __( 'User name', ADK_FEED_CODE );
	$pwd_text = __( 'Password', ADK_FEED_CODE );

	echo <<<HTML
<form action="">
	<table>
		<tr>
			<th>
				<label>$user_text
					<input type="text" value="$user_value">
				</label>
			</th>
			<td>
			
			</td>
		</tr>
		<tr>
			<th>
				<label>$pwd_text
					<input type="text" value="$pwd_value">
				</label>
			</th>
			<td>
			
			</td>
		</tr>
	</table>
	
</form>
HTML;

}