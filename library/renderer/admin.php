<?php
/**
 * @package notifications
 * @author Advertikon
 */

class Advertikon_Library_Renderer_Admin {
	static protected $types = array(
		'adk_title',
		'adk_button',
		'adk_color',
		'adk_text',
		'adk_password',
		'adk_datetime',
		'adk_datetime-local',
		'adk_date',
		'adk_month',
		'adk_time',
		'adk_week',
		'adk_number',
		'adk_email',
		'adk_url',
		'adk_tel',
		'adk_select',
	);

	static public function init() {
		foreach( self::$types as $type ) {
			add_action( 'woocommerce_admin_field_' . $type, array( 'Advertikon_Library_Renderer_Admin' ,'render' ) );	
		}
	}

	static public function render( array $element ) {
		$data = self::prepare( $element );

		switch( $element['type'] ) {
			case 'adk_title':
				self::title( $data );
				break;
			case 'adk_button':
				echo self::button( $data );
				break;
			case 'adk_color':
				echo self::color( $data );
				break;
			case 'adk_text':
			case 'adk_password':
			case 'adk_datetime':
			case 'adk_datetime-local':
			case 'adk_date':
			case 'adk_month':
			case 'adk_time':
			case 'adk_week':
			case 'adk_number':
			case 'adk_email':
			case 'adk_url':
			case 'adk_tel':
				echo self::input( $data );
				break;
			case 'adk_select':
				echo self::select( $data );
				break;
		}
	}

	static function prepare( array $data ) {
		if ( !isset( $data['value'] ) ) {
			$data['value'] = isset( $data['default'] ) ? esc_attr( $data['default'] ) : '';
		}

		$description       = '';
		$tooltip_html      = '';
		$custom_attributes = array();
		self::get_field_description( $data, $description, $tooltip_html );

		$data['description']  = esc_html( $description );
		$data['tooltip_html'] = $tooltip_html;

		if ( !empty( $data['custom_attributes'] ) && is_array( $data['custom_attributes'] ) ) {
			foreach ( $data['custom_attributes'] as $attribute => $attribute_value ) {
				$custom_attributes[] = esc_attr( $attribute ) . '="' . esc_attr( $attribute_value ) . '"';
			}
		}

		$css = array();

		if ( !empty( $data['css'] ) && is_array( $data['css'] ) ) {
			foreach ( $data['css'] as $k => $v ) {
				$css[] = esc_attr( $k ) . ': ' . esc_attr( $v ) . ';';
			}
		}

		$data['custom_attributes'] = implode( $custom_attributes );
		$data['css']               = implode( $css );
		$data['id']                = isset( $data['id'] ) ? esc_attr( $data['id'] ) : uniqid();
		$data['name']              = isset( $data['name'] ) ? esc_attr( $data['name'] ) : $data['id'];
		$data['type']              = esc_attr( substr( $data['type'], 4 ) ); //remove adk_ prefix

		foreach( array( 'class', 'placeholder' ) as $i ) {
			if ( $data[ $i ] ) {
				$data[ $i ] = esc_attr( $data[ $i ] );
			}
		}

		return $data;
	}

	public static function get_field_description( $value, &$description, &$tooltip_html ) {
		$description  = '';
		$tooltip_html = '';

		if ( true === $value['desc_tip'] ) {
			$tooltip_html = $value['desc'];

		} elseif ( ! empty( $value['desc_tip'] ) ) {
			$description  = $value['desc'];
			$tooltip_html = $value['desc_tip'];

		} elseif ( ! empty( $value['desc'] ) ) {
			$description = $value['desc'];
		}

		if ( $description && in_array( $value['type'], array( 'textarea', 'radio' ), true ) ) {
			$description = '<p style="margin-top:0">' . wp_kses_post( $description ) . '</p>';

		} elseif ( $description && in_array( $value['type'], array( 'checkbox' ), true ) ) {
			$description = wp_kses_post( $description );

		} elseif ( $description ) {
			$description = '<span class="description">' . wp_kses_post( $description ) . '</span>';
		}

		if ( $tooltip_html && in_array( $value['type'], array( 'checkbox' ), true ) ) {
			$tooltip_html = '<p class="description">' . $tooltip_html . '</p>';

		} elseif ( $tooltip_html ) {
			$tooltip_html = wc_help_tip( $tooltip_html );
		}
	}

	static protected function title( array $value ) {
		$id = isset( $value['id'] ) ? $value['id'] : uniqid();

		if ( ! empty( $value['title'] ) ) {
			echo '<h2 id="label-' . $id . '" class="adk-title-label" data-target="#' . $id . '">' . esc_html( $value['title'] ) . '</h2>';
		}

		if ( ! empty( $value['desc'] ) ) {
			echo wp_kses_post( wpautop( wptexturize( $value['desc'] ) ) );
		}

		echo '<table class="form-table" id="' . $id . '">' . "\n\n";

		if ( ! empty( $value['id'] ) ) {
			do_action( 'woocommerce_settings_' . sanitize_title( $value['id'] ) );
		}
	}

	static protected function button( array $data ) {
		extract( $data );

		return sprintf(
			'<button id="%s" class="%s" %s type="%s">%s</button>',
			esc_attr( $id ),
			esc_attr( $class ),
			isset( $custom_attributes ) ? $custom_attributes : '',
			isset( $button_type )       ? esc_attr( $button_type ) : 'button',
			isset( $caption )           ? esc_html( $caption ) : __( 'Button', Advertikon::LNS )
		);
	}

	static protected function color( array $data ) {
		extract( $data );

		extract( $data );

		$element = sprintf(
			'<input name="%s" id="%s" type="text" style="%s" value="%s" class="%s adk-color" placeholder="%s" %s />',
			$name,
			$id,
			$css,
			$value,
			$class,
			$placeholder,
			$custom_attributes
		);

		return self::table_row( $data, $element );
	}

	static protected function input( array $data ) {
		extract( $data );

		$element = sprintf(
			'<input name="%s" id="%s" type="%s" style="%s" value="%s" class="%s" placeholder="%s" %s />',
			$name,
			$id,
			$type,
			$css,
			$value,
			$class,
			$placeholder,
			$custom_attributes
		);

		return self::table_row( $data, $element );
	}

	static protected function textarea( array $data ) {
		extract( $data );

		$element = sprintf(
			'<textarea name="%s" id="%s" style="%s" class="%s" placeholder="%s" %s >%s</textarea>',
			$name,
			$id,
			$css,
			$class,
			$placeholder,
			$custom_attributes,
			$value
		);

		return self::table_row( $data, $element );
	}

	static protected function select( array $data ) {
		extract( $data );

		$element = sprintf(
			'<select name="%s" id="%s" style="%s" class="%s" %s %s >' . PHP_EOL,
			$name . ( 'multiselect' === $type ? '[]' : '' ),
			$id,
			$css,
			$class,
			$custom_attributes,
			'multiselect' === $type ? 'multiple="multiple"' : ''
		);

		foreach ( $options as $key => $val ) {
			$element .= '<option value="' . $key . '">' . $val . '</option>'  . PHP_EOL;
		}
			
		$element .= '</select>';

		return self::table_row( $data, $element );
	}

	static protected function table_row( array $data, $element ) {
		extract( $data );

		$ret = <<<HTML
		<tr valign="top">
			<th scope="row" class="titledesc">
				<label for="$id">$title $tooltip_html</label>
			</th>
			<td class="forminp forminp-$type">
				$element $description
			</td>
		</tr>
HTML;
		return $ret;
	}
}