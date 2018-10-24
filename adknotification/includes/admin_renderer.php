<?php
if( ! class_exists( 'ADK_Admin_Input_Renderer' ) ) :
/**
 * Custom woocommerce admin area form inputs renderer
 */
class ADK_Admin_Input_Renderer extends WC_Admin_Settings {

	/**
	 * @var Array $types List of custom input types
	 */
	protected $types = array(
			'adk-color',
			'adk-slider',
			'adk-list',
			'adk-button',
			'hidden',
			'adk-script',
		);

	/**
	 * Class constructor
	 */
	public function __construct() {
		foreach( $this->types as $type ) {
			add_action( 'woocommerce_admin_field_' . $type, array( $this, 'render' ) );	
		}
	}

	/**
	 * Render custom form input
	 *
	 * @param Array $input Input data
	 */
	public function render( $input ) {

		$field_description = parent::get_field_description( $input );
		extract( $field_description );

		$option_value = parent::get_option( $input['id'], $input['default'] );

		// Custom attribute handling
		$custom_attributes = array();

		if ( ! empty( $input['custom_attributes'] ) && is_array( $input['custom_attributes'] ) ) {
			foreach ( $input['custom_attributes'] as $attribute => $attribute_value ) {
				$custom_attributes[] = esc_attr( $attribute ) . '="' . esc_attr( $attribute_value ) . '"';
			}
		}

		switch( $input['type'] ) :

			// Iris color picker
			case 'adk-color' :

?>
<tr valign="top">
	<th scope="row" class="titledesc">
		<label for="<?php echo esc_attr( $input['id'] ); ?>"><?php echo esc_html( $input['title'] ); ?></label>
		<?php echo $tooltip_html; ?>
	</th>
	<td class="forminp forminp-<?php echo sanitize_title( $input['type'] ) ?>">
		<div class="adk-color-wrapper">
			<input
				name="<?php echo esc_attr( $input['id'] ); ?>"
				id="<?php echo esc_attr( $input['id'] ); ?>"
				type="<?php echo esc_attr( $input['type'] ); ?>"
				style="<?php echo esc_attr( $input['css'] ); ?>"
				value="<?php echo esc_attr( $option_value ); ?>"
				class="<?php echo esc_attr( $input['class'] ); ?>"
				placeholder="<?php echo esc_attr( $input['placeholder'] ); ?>"
				<?php echo implode( ' ', $custom_attributes ); ?>
				>
		</div>
		<?php echo $description; ?>
	</td>
</tr>
<?php

			break;

		// Slider
		case 'adk-slider':

?>
<tr valign="top">
	<th scope="row" class="titledesc">
		<label for="<?php echo esc_attr( $input['id'] ); ?>"><?php echo esc_html( $input['title'] ); ?></label>
		<?php echo $tooltip_html; ?>
	</th>
	<td class="forminp forminp-<?php echo sanitize_title( $input['type'] ) ?>">
		<div class="adk-slider-wrapper">
			<div class="adk-slider-value"></div>
			<div class="adk-slider"
				name="<?php echo esc_attr( $input['id'] ); ?>"
				id="<?php echo esc_attr( $input['id'] ); ?>"
				type="<?php echo esc_attr( $input['type'] ); ?>"
				style="<?php echo esc_attr( $input['css'] ); ?>"
				value="<?php echo esc_attr( $option_value ); ?>"
				class="<?php echo esc_attr( $input['class'] ); ?>"
				<?php echo implode( ' ', $custom_attributes ); ?>
			></div>
		</div>
		<?php echo $description; ?>
	</td>
</tr>
<?php

			break;

		// List table
		// Renders empty table with only header and template row
		// Table contents will be created automatically from supplied data
		// using template row
		case 'adk-list':

			$input['fields'] = isset( $input['fields'] ) ? (array)$input['fields'] : array();

			// Table description.
			// If supplied string - it will be table caption
			// If supplied array, and 'caption' key exists - table caption,
			// if additional value with key 'desc' exists - it will appear
			// under table caption (as detailed description).
			if( isset( $input['desc'] ) ) {

				$descriptions = explode( '<->' , $input['desc'] );
				$c = $descriptions[0];
				$d = isset( $descriptions[1] ) ? $descriptions[1] : '';

				if( $c || $d ) {
					echo '<caption>';
					if( $c ) {
						echo "<p style='font-size:1.2em;font-weight:bold'>$c</p>";
					}

					if( $d ) {
						echo "<p>$d</p>";
					}

					echo '</caption>';
				}
			}

// Table body
?>
<table
	id="<?php echo esc_attr( $input['id'] ); ?>"
	class="<?php echo esc_attr( $input['class'] ); ?>"
	<?php echo implode( ' ', $custom_attributes ); ?> 
	<?php echo 'style="' . esc_attr( $input['css'] ) . '"';?>
>
	<tr class='adk-list-header' >
		<?php foreach( $input['fields'] as $title ) : ?>
		<th><?php echo $title; ?></th>
		<?php endforeach; ?>
	</tr>

<?php /*				Template row 									*/ ?>
	<tr class="adk-list-template" style="display:none">
		<?php foreach( $input['fields'] as $name => $title ) : ?>

<?php /* 				Cell with remove row button						*/ ?>
			<?php if( $name == 'button_remove' ) : ?>
				<td <?php echo 'data-id=' . $name; ?> >
					<button
						type="button"
						data-icon="ui-icon-closethick"
						style="height: 27px"
						class="<?php echo $name; ?>"
					></button>
				</td>

<?php /*				 Cell with check box 							*/ ?>
			<?php elseif( strstr( $name, '_', true ) == 'checkbox' ) : ?>
				<td <?php echo 'data-id=' . $name; ?> >
					<input type="checkbox" class="<?php echo $name; ?>" >
				</td>
	  
<?php /*				 Cell with radio button 						*/ ?>
			<?php elseif( strstr( $name, '_', true ) == 'radio' ) : ?>
				<td <?php echo 'data-id=' . $name; ?> >
					<input type="radio" class="<?php echo $name; ?>" name="adk-radio-list-0" >
				</td>

<?php /*				 Cell with textual data 						*/ ?>
			<?php else: ?>
				<td <?php echo 'data-id=' . $name; ?> ></td>
			<?php endif; ?>

		<?php endforeach; ?>
	</tr>

</table>
<?php

			break;

		// Form button
		case 'adk-button':

?>
<tr valign="top">
	<th scope="row" class="titledesc">
		<label for="<?php echo esc_attr( $input['id'] ); ?>"><?php echo esc_html( $input['title'] ); ?></label>
		<?php echo $tooltip_html; ?>
	</th>
	<td class="forminp forminp-<?php echo sanitize_title( $input['type'] ) ?>">
		<input
			name="<?php echo esc_attr( $input['id'] ); ?>"
			id="<?php echo esc_attr( $input['id'] ); ?>"
			type="button"
			style="<?php echo esc_attr( $input['css'] ); ?>"
			value="<?php echo esc_attr( $input['value'] ); ?>"
			class="<?php echo esc_attr( $input['class'] ); ?>"
			<?php echo implode( ' ', $custom_attributes ); ?>
			>
		<?php echo $description; ?>
	</td>
</tr>

<?php

		break;

	// Stand alone button
	case 'adk-button-standalone':

?>
<div>
	<input
		name="<?php echo esc_attr( $input['id'] ); ?>"
		id="<?php echo esc_attr( $input['id'] ); ?>"
		type="button"
		style="<?php echo esc_attr( $input['css'] ); ?>"
		value="<?php echo esc_attr( $input['value'] ); ?>"
		class="<?php echo esc_attr( $input['class'] ); ?>"
		<?php echo implode( ' ', $custom_attributes ); ?>
		>
	<?php echo $description; ?>
</div>
<?php

		break;

	// Hidden input field
	case 'hidden' :

?>
<tr>
	<td collspan="2" class="forminp">
		<input type="hidden"
			name="<?php echo esc_attr( $input['id'] ); ?>"
			id="<?php echo esc_attr( $input['id'] ); ?>"
			style="<?php echo esc_attr( $input['css'] ); ?>"
			value="<?php echo esc_attr( $option_value ); ?>"
			class="<?php echo esc_attr( $input['class'] ); ?>"
			<?php echo implode( ' ', $custom_attributes ); ?>
		>
	</td>
</tr>
<?php

		break;

	// Inline scripts
	case 'adk-script' :

echo "<script>{$input['body']}</script>";
		break;

	endswitch;

	}//<- method closing parenthesis
}

endif;
