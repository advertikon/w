jQuery( document).ready( function onDocumentLoad( $ ) {

	/*
		global

		adkLang: false,
		jQuery: false,
		window: false,
		document: false,
		ADKFunctionParser: false,
		adkFixTextHeight: false,
		adkNotificationsList: false,
		adkTriggersTemplate: false,
		adkTriggers: false
	*/

	'use strict';

	var
		controls = null,
		listProto = null,
		notification = null;

	/**
	 * Inputs controls manager
	 * @class
	 * @param {object} view - jQuery part of DOM tree to get controls from
	 * @param {object} preview - notification preview jQuery element
	 * @returns {void}
	 */
	function Controls( view, preview ) {

		var

			/**
			 * @type {string}
			 * @description Notification text input description with the
			 * list of all replacement functions (stringified JSON).
			 */
			description = '',

			/**
			 * @type {object}
			 * @description Regular expression to match against fields ID's
			 * so they can be excluded.
			 */
			excludeRE = new RegExp(
				'(' +
				[ 'adk-notification-preview', 'adk-list' ]
				.join( ')|(' ) +
				')'
			),

			/**
			 * @type {string}
			 * @description Description of notification text input
			 */
			inputFieldDescription = '',

			/**
			* @type {object}
			* @description Object parsed from description JSON string
			*/
			jsonData = null,

			/**
			 * @type {object}
			 * @description Alias for this
			 */
			klass = this,

			/**
			 * @type {object}
			 * @description Notification text input field object
			 */
			textInput = '';


		/**
		 * Adds setting control to controls collection
		 * @param {object} field - Control field
		 * @returns {Object} - Self
		 */
		this.add = function add( field ) {
			this.fields[ field.id ] = field;
			field.add( this );

			return this;
		};

		/**
		 * Remove settings control from controls collection
		 * @param {number} itemId - Control ID
		 * @returns {object} - Self
		 */
		this.remove = function remove( itemId ) {
			delete this.fields[ itemId ];

			return this;
		};

		/**
		 * Adds preview object
		 * @param {object} previewObject - Preview object
		 * @returns {void}
		 */
		this.setPreview = function setPrewiev( previewObject ) {
			this.preview = previewObject;
			preview.add( this );
		};

		/**
		 * Sets list object
		 * @param {object} list - List object with all the notification
		 * @returns {void}
		 */
		this.setList = function setList( list ) {
			this.list = list;
			list.add( this );
		};

		/**
		 * Sets triggers object
		 * @param {object} list - List object with all the notification
		 * @returns {void}
		 */
		this.setTriggers = function setTriggers( list ) {
			this.triggers = list;
			list.add( this );
		};

		/**
		 * Fills in inputs with data
		 * @param {object} data - Notification data
		 * @fires Element#change
		 * @fires Notification#notification_changed
		 * @returns {void}
		 */
		this.setData = function setData( data ) {

			$.each( this.fields, function iterateOverFields( i, v ) {
				if ( typeof data[ v.id ] !== 'undefined' ) {
					v.$input.val( data[ v.id ] );
					v.$input.trigger( 'change' );
				}
			} );
			notification.send(
				'notification_changed',
				data.advertikon_notifications_name
			);
		};

		/**
		 * Returns currently active notification
		 * @returns {object} - Currently active notification
		 */
		this.getCurrentNotification = function getCurrentNotification() {
			return this.preview.currentNotification[ this.preview.nameField ];
		};

		/**
		 * Returns select's label/text for corresponding value
		 * @param {string} id - Select ID
		 * @param {string} value - Select value
		 * @returns {string} - Select option text/label
		 */
		this.getSelectLabel = function getSelectedLabel( id, value ) {
			if ( this.fields[ id ] &&
				$.inArray(
					this.fields[ id ].$input[ 0 ].type,
					[ 'select', 'select-multiple' ] ) !== -1 ) {

				return this.fields[ id ].$input
					.find( 'option[value=' + value + ']' )
					.text();
			}

			return '';
		};

		/**
		 * @type {object}
		 * @description List of all the input fields
		 */
		this.fields = {};

		/**
		 * Initialize controls
		 * Parse DOM and fetch each <TR>
		 */
		this.setPreview( preview );

		// Reset preview object
		this.preview[ 'new' ]();

		// Parse table and fill in preview
		view.find( 'tr' ).each( function iterateOverTableRows( i, v ) {

			/**
			 * @type {string}
			 * @description Table cell class name
			 */
			var className = $( v ).find( 'td' )[ 0 ].className;

			if ( ! ( /forminp/ ).test( className ) ) {
				return;
			}

			// Skip non-controls
			if ( excludeRE.test( className ) ) {
				return;
			}

			klass.add( new Input( $( v ) ) );
		} );

		// Add description with list of supported function to
		// notification name input

		textInput = this.fields[ this.preview.textField ].$input;
		description = textInput.attr( 'data-desc' );
		jsonData = parseJson( textInput.attr( 'data-func' ) );

		// Add function parser to input element
		if ( jsonData ) {
			this.fields[ this.preview.textField ].addParser( new ADKFunctionParser( jsonData ) );

			// Run newly added parser
			this.fields[ this.preview.textField ].$input.trigger( 'change' );
		}

		// Add description to name input
		if ( description && jsonData ) {

			inputFieldDescription +=
			'<div style="font-weight:normal;font-size:95%;font-style:italic">' +
				'<div>' +
					description +
				'</div>';

			$.each( jsonData, function iterateOverReplacementFunctions( i, v ) {

				inputFieldDescription +=
				'<div style="font-weight:normal;font-size:90%;' +
				'font-style:italic;padding-top:5px">' +
					i +
					'<span class="woocommerce-help-tip" title="' +
						v.description.replace( /"/g, '&quot;' ) + '">' +
					'</span>' +
				'</div>';
			} );

			inputFieldDescription += '</div>';

			inputFieldDescription = $( inputFieldDescription );
			inputFieldDescription.find( '.woocommerce-help-tip' ).tipTip();
			textInput.parents( 'tr' ).find( 'th label' )
				.after( inputFieldDescription );
		}
	}

	/**
	 * Control input element class
	 * @class
	 * @param {object} row - Table row object (jQuery)
	 * @returns {void}
	 */
	function Input( row ) {

		var

			/**
			 * @type {number}
			 * @description Minimum width for color input
			 * @default
			 */
			colorInpMinWidth = 400,

			/**
			 * @type {object}
			 * @description Alias for this
			 */
			klass = this,

			/**
			 * @description Slider default step value
			 * @type {number}
			 * @default
			 */
			sliderDefaultStep = 1,

			/**
			 * @description Slider default minimum value
			 * @type {number}
			 * @default
			 */
			sliderMaxDefault = 100,

			/**
			 * @description Slider default maximum value
			 * @type {number}
			 * @default
			 */
			sliderMinDefault = 0;

		/**
		 * @type {object}
		 * @description Parent object (Controls)
		 */
		this.parent = null;

		/**
		 * @type {array}
		 * @description Text parsers list
		 */
		this.parsers = [];

		/**
		 * @type {boolean}
		 * @description Flag, whether control is input color
		 */
		this.isColor = false;

		/**
		 * @type {boolean}
		 * @description Flag, whether control is slider color
		 */
		this.isSlider = false;

		/**
		 * @type {boolean}
		 * @description Flag, whether control is check box
		 */
		this.isCheckbox = false;

		/**
		 * @type {object}
		 * @description Table row view element (jQuery)
		 */
		this.$view = row;

		/**
		 * @type {object}
		 * @description Control input
		 */
		this.$input = null;

		if ( row.find( 'td.forminp-adk-color' ).length ) {
			this.isColor = true;
		} else if ( row.find( 'td.forminp-adk-slider' ).length ) {
			this.isSlider = true;
		} else if ( row.find( 'input[type=checkbox]' ).length ) {
			this.isCheckbox = true;
		}

		if ( this.isSlider ) {
			this.$input = this.$view.find( '.adk-slider' );

			/**
			 * @type {object}
			 * @description Slider value view element (jQuery)
			 */
			this.$sliderValue = this.$view.find( '.adk-slider-value' );
		} else {

			this.$input = this.$view.find( 'input,select,multiselect,textarea' );
		}

		/**
		 * Adds control to parent control manager (Controls)
		 * @param {object} parent - Parent control object to add control to
		 * @returns {void}
		 */
		this.add = function add( parent ) {
			if ( this.parent && this.parent !== parent ) {
				this.parent.remove( this.id );
			}

			this.parent = parent;

			if ( this.isColor ) {
				this.$input.iris(
					'option',
					'width',
					Math.min(
						parseInt( this.$input.css( 'width' ), 10 ),
						colorInpMinWidth
					)
				);
			}

			// Initialize teaser preview
			if ( this.$input.attr( 'data-callback' ) ) {
				if ( 'button' === this.$input[ 0 ].type ) {
					this.$input.on(
						'click',
						function buttonClickHandler( evt ) {
							klass.parent
								.preview[
									klass.$input.attr( 'data-callback' )
								](
									klass.$input.val(),
									klass.$input,
									klass,
									evt
								);
						}
					);
				} else {
					this.$input.on(
						'change input adk-change',
						function inputChangeHandler( evt ) {
							klass.parent.preview[ klass.$input.attr( 'data-callback' ) ](
								klass.$input.val(),
								klass.$input,
								klass,
								evt
							);
						}
					);

					// Run callback function to initialize input preview element
					// linked with input element.
					this.parent.preview[ this.$input.attr( 'data-callback' ) ](
						this.$input.val(),
						this.$input,
						this
					);
				}
			}
		};

		if ( this.isColor ) {

			// Initialize Iris color input
			this.$input.iris({
				change: function irisCangeHandler( event, ui ) {
					klass.$input.parent()
						.css( 'backgroundColor', ui.color.toString() );
					klass.$input.trigger( 'adk-change' );
				}
			})
			.on( 'focus', function irisOnFousHandler() {
				$( this ).iris( 'show' );
			} )

			// Seems Iris has bug: On click it hides all color pickers even if
			// click was on color picker's input.
			.on( 'click', function irisClickHandler( evt ) {
				evt.stopPropagation();
			} );

			// Make colored square be color-selectable
			this.$input.parent().on( 'click', function irisParentClickHandl() {
				window.setTimeout( function irisSetFocusWithDelay() {
					klass.$input.focus();
				}, 0 );
			} );

			// Set color color input
			this.$input
			.parent()
			.css( 'backgroundColor', this.$input.iris( 'color' ) );

		} else if ( this.isSlider ) {
			this.$input.slider({
				value:  parseInt( this.$input.attr( 'value' ), 10 ),
				min:    parseInt( this.$input.attr( 'data-min' ), 10 ) || sliderMinDefault,
				max:    parseInt( this.$input.attr( 'data-max' ), 10 ) || sliderMaxDefault,
				step:   parseInt( this.$input.attr( 'data-step' ), 10 ) || sliderDefaultStep,
				change: function sliderChangeHandler() {
					klass.$input.trigger( 'adk-change' );
				},
				slide: function sliderSlideHandler( event, ui ) {
					klass.$input.val( ui.value );
				},
				start: function sliderStartSlideHandler() {
					klass.sliding = true;
					klass.$sliderValue.addClass( 'adk-slider-value-active' );
				},
				stop: function sliderStopSlideHandler() {
					klass.sliding = false;
					klass.$sliderValue.removeClass( 'adk-slider-value-active' );
				}
			});

			// Emulate .val() functionality
			this.$input.val = function val( param ) {

				var p = null;

				if ( typeof param === 'undefined' ) {
					return this.value + this.attr( 'data-unit' );
				}

				p = parseInt( param, 10 );
				if ( ! klass.sliding ) {
					this.slider( 'value', p );
				}

				this.value = p;
				klass.$sliderValue.text( this.val() );

				return this;
			};
			this.$input.val( this.$input.slider( 'value' ) );
			this.$sliderValue.text( this.$input.val() );

		} else if ( this.isCheckbox ) {

			// Emulate val() functionality
			this.$input.val = function val( param ) {

				// Getter
				if ( typeof param === 'undefined' ) {
					return this.is( ':checked' ) ? 'yes' : 'no';
				}

				if ( klass.isTrue( param ) ) {
					this.attr( 'checked', 'checked' );
				} else {
					this.removeAttr( 'checked' );
				}

				return this;
			};
		}

		/**
		 * Checks whether value can be evaluated to true
		 * @param {*} value Value to be checked
		 * @returns {boolean} Result
		 */
		this.isTrue = function checkForTruth( value ) {
			return value === true ||
				value.toLowerCase() === 'true' ||
				value.toLowerCase() === 'yes';
		};

		/**
		 * @type {number}
		 * @description Control's ID
		 */
		this.id = this.$input[ 0 ].id;

		/**
		 * Default text parser
		 * @returns {string} Parsed string
		 */
		this.parse = function parse() {

			var text = this.$input.val();

			$.each( this.parsers, function iterateOverParsers() {
				if ( typeof this === 'function' ) {
					text = this( text );
				} else if ( typeof this.parse === 'function' ) {
					text = this.parse( text );
				}
			} );

			return text;
		};

		/**
		 * Add parser to queue
		 * @param {function} parser - Parser callback to be added
		 * @returns {void}
		 */
		this.addParser = function addParser( parser ) {
			this.parsers.push( parser );
		};

	}

	/**
	 * Teaser preview class
	 * @class
	 * @param {object} view - Dom element, represented preview
	 * @returns {void}
	 */
	function Preview( view ) {

		/**
		 * @type {object}
		 * @description Alias for this
		 */
		var klass = this;

		/**
		 * @type {object}
		 * @description Preview view element (jQuery)
		 */
		this.$view = view;

		/**
		 * @type {object}
		 * @description Parent object
		 */
		this.parent = null;

		/**
		 * @type {object}
		 * @description Preview text holder (jQuery)
		 */
		this.$text = this.$view.find( '.adk-teaser-text' );

		/**
		 * @type {object}
		 * @description Preview text holder (jQuery)
		 */
		this.$body = this.$view.find( '.adk-teaser-body' );

		/**
		 * @type {object}
		 * @description Call to action button (jQuery)
		 */
		this.$button = this.$view.find( '.adk-teaser-button-wrapper' );

		/**
		 * Adds preview to parent container
		 *
		 * @param {object} parent - Parent object to add to
		 * @returns {object} - Self
		 */
		this.add = function add( parent ) {
			this.parent = parent;

			return this;

		};

		/**
		 * @type {object}
		 * @description Notifications data
		 */
		this.data = {};

		/**
		 * @type {object}
		 * @description Current notification data
		 * Used to accumulate settings for current notification.
		 */
		this.currentNotification = {};

		/**
		 * Sets notification name
		 * @param {string} name - Notification name
		 * @param {object} input - Name input jQuery element
		 * @param {object} model - Input model object
		 * @returns {void}
		 */
		this.setName = function setName( name, input, model ) {

			var n = '';

			this.nameField = model.id;
			n = name.replace(/[^a-zA-z0-9_-]/, '' );
			input.val( n );
			this.currentNotification[ model.id ] = n;

		};

		/**
		 * Sets preview text
		 * @param {string} text - Text to be set
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setText = function setText( text, input, object ) {
			this.currentNotification[ object.id ] = text;
			this.textField = object.id;

			// Replace default parser
			if ( ! this.isParserInitalized ) {

				// Add the "new line to <br>" parser
				object.addParser(function nlTobr( inputString ) {
					return inputString.replace( /\n\r?/g, '<br>' );
				});
				this.isParserInitalized = true;
			}

			klass.$text.html( object.parse( text ) );
			this.fixTextHeight();

		};

		/**
		 * Sets notification text color
		 * @param {string} color - Element color value
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setTextColor = function setTextColor( color, input, object ) {
			this.$text.css( 'color', color );
			this.currentNotification[ object.id ] = color;
		};

		/**
		 * Sets notification background color
		 * @param {string} color - Background color value
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setBgColor = function setBgColor( color, input, object ) {
			this.currentNotification[ object.id ] = color;
			this.$body.css( 'backgroundColor', color );
		};

		/**
		 * Sets notification height
		 * @param {string} height - Height in pixels
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setHeight = function setHeight( height, input, object ) {
			this.currentNotification[ object.id ] = height;
			this.$body.css( 'height', height );
			this.fixTextHeight();
		};

		/**
		 * Sets notification width
		 * @param {string} width - Width in %
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setWidth = function setWidth( width, input, object ) {
			this.currentNotification[ object.id ] = width;
			this.$body.css( 'width', width );
			this.fixTextHeight();
		};

		/**
		 * Sets notification border radius
		 * @param {string} radius - Border radius in pixels
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setBorderRadius = function setBodrRadius( radius, input, object ) {
			this.currentNotification[ object.id ] = radius;
			this.$body.css({
				'-webkit-border-radius': radius,
				'-moz-border-radius':    radius,
				'border-radius':         radius
			});
		};

		/**
		 * Sets notification text font height
		 * @param {string} height - Font height in pixels
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setFontHeight = function setFontHeight( height, input, object ) {
			this.currentNotification[ object.id ] = height;
			this.$text.css( 'fontSize', height );
			this.fixTextHeight();
		};

		/**
		 * Sets notification shadow vertical
		 * @param {string} offset - Vertical shadow offset in pixels
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setShadowVertical = function setVShadow( offset, input, object ) {
			this.currentNotification[ object.id ] = offset;
			this.shadowVertical = offset;
			this.setShadow( object );
		};

		/**
		 * Sets notification shadow horizontal
		 * @param {string} offset - Horizontal shadow offset in pixels
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setShadowHorizontal = function setHShdow( offset, input, object ) {
			this.currentNotification[ object.id ] = offset;
			this.shadowHorizontal = offset;
			this.setShadow( object );
		};

		/**
		 * Sets notification shadow dispersion
		 * @param {string} dispersion - Shadow dispersion in pixels
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setShadowDispersion = function setSD( dispersion, input, object ) {
			this.currentNotification[ object.id ] = dispersion;
			this.shadowDispersion = dispersion;
			this.setShadow( object );
		};

		/**
		 * Sets notification shadow color
		 * @param {string} color - Shadow color value
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setShadowColor = function setShadowColor( color, input, object ) {
			this.currentNotification[ object.id ] = color;
			this.shadowColor = color;
			this.setShadow( object );
		};

		/**
		 * Sets notification shadow in whole
		 *
		 * @returns {void}
		 */
		this.setShadow = function setShadow() {

			var id = 'advertikon_notifications_box_shadow',
				shadow = this.shadowHorizontal + ' ' +
					this.shadowVertical + ' ' + this.shadowDispersion + ' ' +
					this.shadowColor;

			this.currentNotification[ id ] = shadow;
			this.$body.css( {
				'-moz-box-shadow':    shadow,
				'-webkit-box-shadow': shadow,
				'box-shadow':         shadow
			} );
		};

		/**
		 * Sets notification border width
		 * @param {string} width - Border width
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setBorderWidth = function setBorderWidth( width, input, object ) {
			this.currentNotification[ object.id ] = width;
			this.$body.css( 'borderWidth', width );
			this.fixTextHeight();
		};

		/**
		 * Sets notification border color
		 * @param {string} color - Border color
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setBorderColor = function setBorderColor( color, input, object ) {
			this.currentNotification[ object.id ] = color;
			this.$body.css( 'borderColor', color );
		};

		/**
		 * Set preview border style
		 * @param {string} style - Preview border style
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setBorderStyle = function setBorderStyle( style, input, object ) {
			this.currentNotification[ object.id ] = style;
			this.$body.css( 'borderStyle', style );
		};

		/**
		 * Sets notification left side offset
		 * @param {string} offset - Width in pixels
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setLeft = function setLeft( offset, input, object ) {
			this.currentNotification[ object.id ] = offset;
			this.$body.css( 'left', offset );
		};

		/**
		 * Sets notification bottom side offset
		 * @param {string} offset - Width in pixels
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setBottom = function setBottom( offset, input, object ) {
			this.currentNotification[ object.id ] = offset;
			this.$body.css( 'bottom', offset );
		};

		/**
		 * Sets position of notification no page
		 * @param {array} position - Positions list
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setPosition = function setPosition( position, input, object ) {
			this.positionField = object.id;
			this.positionInput = input;
			this.currentNotification[ object.id ] = position;
		};

		/**
		 * Sets triggers, which define when to show/hide notification
		 * @param {object} triggers - Triggers hash data
		 * @returns {void}
		 */
		this.setTriggers = function setTriggers( triggers ) {
			this.triggersField = 'advertikon_notifications_triggers';
			this.currentNotification[ this.triggersField ] = $.extend( true, {}, triggers );
		};

		/**
		 * Sets call to action button text
		 * @param {string} text - Button text
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setButtonText = function setButtonText( text, input, object ) {
			this.buttonTextField = object.id;
			this.buttonTextInput = input;
			this.currentNotification[ object.id ] = text;
			this.$button.find( 'button' ).text( text );
			this.fixTextHeight();
		};

		/**
		 * Sets call to action button URL
		 * @param {string} url - Action URL
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setButtonURL = function setButtonURL( url, input, object ) {
			this.buttonURLField = object.id;
			this.buttonURLInput = input;
			this.currentNotification[ object.id ] = url;
		};

		/**
		 * Sets call to action button URL Target
		 * @param {string} target - URL target
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @returns {void}
		 */
		this.setButtonURLTarget = function setBtnTrgt( target, input, object ) {
			this.buttonURLTargetField = object.id;
			this.buttonURLTargetInput = input;
			this.currentNotification[ object.id ] = input.is( ':checked' ) ? 'yes' : 'no';
		};

		/**
		 * Enables/disables call to action button
		 * @param {string} status - Check box status
		 * @param {object} input - Input element {jQuery}
		 * @param {object} object - Control element instance
		 * @param {object} event - Event, related to control change/click
		 * @returns {void}
		 */
		this.setButton = function setButton( status, input, object, event ) {

			var
				stat = status,
				visualDelay = 500;

			this.buttonField = object.id;
			this.buttonInput = input;

			if ( event && event.originalEvent ) {
				if ( input.is( ':checked' ) ) {
					stat = 'yes';
				} else {
					stat = 'no';
				}
			} else if ( 'yes' === stat ) {
				input.attr( 'checked', 'checked' );
			} else if ( 'no' === stat ) {
				input.removeAttr( 'checked' );
			} else {
				return;
			}

			this.currentNotification[ object.id ] = stat;

			if ( 'yes' === stat ) {
				this.$button.fadeIn( visualDelay, function ctaFadeInDelay() {
					klass.fixTextHeight();
				} );

			} else {
				this.$button.fadeOut( visualDelay, function ctaFadeOutDelay() {
					klass.fixTextHeight();
				} );
			}
		};


		/**
		 * Saves current notification
		 * @param {string} val - Current button value
		 * @param {object} button - Save button element (jQuery)
		 * @fires Notification#filter_notification_before_save
		 * @returns {void}
		 */
		this.save = function save( val, button ) {

			var
				filtered = $.extend( true, {}, this.currentNotification ),
				notifData = $.extend( true, {}, this.currentNotification );

			notification.send( 'filter_notification_before_save', filtered );
			button.oldVal = val;
			button.val( adkLang.saving + '...' )
			.attr( 'disabled', 'disabled' );

			filtered._wpnonce = adkLang.wpnonce;

			$.post( adkLang.ajax_save_notification, filtered )
			.always(function saveCallbackAlways() {
				button.val( button.oldVal )
				.removeAttr( 'disabled' );
			})
			.fail(function saveCallbackFail() {
				window.alert( adkLang.network_error );
			})
			.done(function saveCallbackDone( resp ) {

				var
					data = null;

				try {
					data = JSON.parse( resp );
				} catch ( e ) {
					window.alert( adkLang.parse_error );

					return;
				}

				if ( data.error ) {
					window.alert( data.error );

					return;
				} else if ( data.success ) {
					klass.parent.list.updated( notifData );
				}
			});
		};

		this.timeout = null;

		/**
		 * Sets real height for text container
		 * @returns {void}
		 */
		this.fixTextHeight = function fitTextHeight() {

			var
				fixDelay = 200;

			if ( this.timeout ) {
				window.clearTimeout( this.timeout );
			}
			this.timeout = window.setTimeout( function fixTextHeightSetDelay() {
				adkFixTextHeight( klass.$body );
			}, fixDelay );

		};

		/**
		 * Initialize new notification
		 * @returns {void}
		 */
		this[ 'new' ] = function newNotification() {
			this.currentNotification = {};
		};

		// Make notification preview fixed to the page top on scroll
		$( '#adk-fix-preview' ).on( 'click', function fixNotificClickHandle() {

			var
				offset = null;

			if ( $( this ).is( ':checked' ) ) {
				offset = klass.$view.offset();

				klass.$view.css({
					top:   offset.top - window.scrollY | 0,
					left:  offset.left - window.scrollX | 0,
					width: klass.$view.css( 'width' )
				});

				klass.$view.addClass( 'adk-preview-fixed' );
				klass.$view.draggable({ disable: false });

			} else {
				klass.$view.css( 'width', 'auto' );
				klass.$view.removeClass( 'adk-preview-fixed' );
				klass.$view.css({
					top:  0,
					left: 0
				});
				klass.$view.draggable({ disable: true });
			}

		} );

		// Make save notification button scrollable
		$( document ).on( 'scroll', function documentScrollHandler() {

			var
				buttonScrollDelay = 50;


			if ( klass.scrollButtonTimeout ) {

				return;
			}

			klass.scrollButtonTimeout = window.setTimeout( function scrollBtnDelay() {

				var
					buttonTopOffset = 5,
					top = null;

				klass.scrollButtonTimeout = null;

				if ( ! klass.saveButton ) {
					klass.saveButton = $( '#advertikon_notifications_save' );
					klass.wpaH = $( '#wpadminbar' ).height();
					klass.wpaH |= 0;
					klass.bT = klass.saveButton.offset().top;
					klass.bR = klass.saveButton.offset().left -
						klass.saveButton.width();
					klass.saveButton.css({ right: klass.bR });
				}
				top = $( this ).scrollTop();
				if ( top + klass.wpaH > klass.bT ) {
					if ( klass.saveButton[ 0 ].fixed ) {

						return;
					}
					klass.saveButton.css( 'top', top - klass.bT );
					klass.saveButton.addClass( 'adk-preview-fixed' )
					.css({
						top:   klass.wpaH + buttonTopOffset,
						right: 20
					});
					klass.saveButton[ 0 ].fixed = true;

				} else {
					if ( ! klass.saveButton[ 0 ].fixed ) {

						return;
					}
					klass.saveButton.removeClass( 'adk-preview-fixed' )
					.css({
						top:   klass.bT - top,
						right: klass.bR
					});
					klass.saveButton[ 0 ].fixed = false;

				}
			}, buttonScrollDelay );

		} );

	}

	/**
	 * List prototype
	 * @class
	 * @returns {void}
	 */
	function ListProto() {

		/**
		 * @constant {boolean}
		 * @description Short circuit flag to stop all the subsequent iterations
		 */
		this.STOP_ITERATION = false;

		/**
		 * @constant {boolean}
		 * @description Short circuit flag to start next iteration
		 */
		this.NEXT_ITERATION = true;

		/**
		 * @constant {undefined}
		 * @description Short circuit flag to run default action for current iteration
		 */
		this.CONTINUE_ITERATION = undefined;

		/**
		 * Update list item callback
		 * @param {string} name - List name
		 * @param {object} item - Updated item data
		 * @returns {void}
		 */
		this.update = function update( name, item ) {
			this.data[ name ] = item;
			this.initPrioritizedList();
			this.render();
			this.highlightActive();
		};

		/**
		 * Delete list item callback
		 * @param {string} name - List item name
		 * @returns {void}
		 */
		this[ 'delete' ] = function deleteListItem( name ) {
			this.childDelete( name, this.deleteItemPromise );
		};

		/**
		 * Delete list item in response on promise resolving
		 * @callback deleteItemPromise
		 * @param {boolean} result - Flag, that indicates deletion result
		 * @param {string} name - List item name
		 * @returns {void}
		 */
		this.deleteItemPromise = function deletePromiseCallback( result, name ) {
			if ( result ) {
				delete this.data[ name ];
				this.initPrioritizedList();
				this.render();
				if ( this.getCurrent() === name ) {
					this.selectFirst();
				}
				this.highlightActive();
			}
		};

		/**
		 * Render all the list items
		 * @fires Notification#list_rendered
		 * @returns {void}
		 */
		this.render = function renderListItems() {

			var
				cell = null,
				cellRenderInChildResult = null,
				clone = null,
				cloneRowInChildResult = null,
				klass = this,
				rowData = null;

			this.$table.find( 'tr' ).not( '.adk-list-header, .adk-list-template' )
			.remove();
			this.initPrioritizedList();

			// Traverse over prioritized list
			while ( ( rowData = this.forward() ) ) {

				clone = this.$template.clone().appendTo( this.$table );
				clone.css( 'display', 'table-row' )
				.attr( 'data-name', rowData.name )
				.removeClass( 'adk-list-template' );

				cloneRowInChildResult = this.childClone( clone );

				// Shortcut hook
				if ( cloneRowInChildResult === this.NEXT_ITERATION ) {

					continue;
				} else if ( cloneRowInChildResult === this.STOP_ITERATION ) {

					return;
				}

				$.each( clone.find( 'td' ), function iterateOverRowCells() {

					cell = $( this );
					cellRenderInChildResult = klass.childRenderCell( cell, rowData );

					// Shortcut to exit forEach
					if ( cellRenderInChildResult === klass.NEXT_ITERATION ||
						cellRenderInChildResult === klass.STOP_ITERATION ) {

						return cellRenderInChildResult;
					}

					cell.html( rowData[ cell.attr( 'data-id' ) ] );

					return true;
				} );
			}
			this.initButtons();
			notification.send( 'list_rendered', this );
		};

		/**
		 * Child specific cloned row handling
		 * @abstract
		 * @param {object} clonedRow - Cloned row jQuery element
		 * @returns {(boolean|undefined)} - Shortcut status
		 */
		this.childClone = function childClone( clonedRow ) {

			// Abstract;

			return void clonedRow;
		};

		/**
		 * Child specific cloned row's cell rendering
		 * @abstract
		 * @param {object} cell - Cell element (jQuery)
		 * @param {object} data - Row data
		 * @returns {(boolean|undefined)} - Shortcut status
		 */
		this.childRenderCell = function childRenderCell( cell, data ) {

			// Abstract

			return void data;
		};

		/**
		 * Adds list object to parent object
		 * @param {object} parent - Parent object
		 * @fires Notification#list_added
		 * @returns {void}
		 */
		this.add = function addListToParent( parent ) {
			this.parent = parent;
			this.childAdd();
			this.highlightActive();
			notification.send( 'list_added', this );
		};

		/**
		 * Child adding specific logic
		 * @abstract
		 * @returns {void}
		 */
		this.childAdd = function childAdd() {
			// Abstract
		};

		/**
		* Activates first list item
		* @returns {void}
		*/
		this.selectFirst = function selectFirst() {

			var
				first = null,
				item = null;

			this.rewind();
			first = this.current();

			while ( ( item = this.forward() ) ) {
				if ( item.priority < first.priority ) {
					first = item;
				}
			}

			if ( first ) {
				this.parent.setData( first );
			}
		};

		/**
		 * Highlights currently active list item
		 * @returns {void}
		 */
		this.highlightActive = function highlightActive() {

			var current = this.getCurrent();

			if ( current ) {
				this.$table.find( 'tr' ).removeClass( 'active-list-item' );
				this.$table
				.find( 'tr[data-name=' + current + ']' )
				.addClass( 'active-list-item' );
			}

		};

		/**
		 * Remove element button click callback
		 * @abstract
		 * @param {string} name - List item name
		 * @param {deleteItemPromise} deletePromise Promise-like callback, which do the work
		 * @returns {boolean} - Delete item status
		 */
		this.childDelete = function childDelete( name, deletePromise ) {

			// Abstract

			return void deletePromise;
		};

		/**
		 * Activates list item
		 * @param {string} name - List item name
		 * @returns {void}
		 */
		this.active = function active( name ) {
			if ( true === this.childActive( name ) ) {
				this.highlightActive();
			}
		};

		/**
		 * Returns current active list item
		 * @abstract
		 * @returns {string} - Active list item name
		 */
		this.getCurrent = function getCurrent() {

			return '';
		};

		/**
		 * Runs activation item tasks on child element
		 * @abstract
		 * @param {string} name - List item name
		 * @returns {boolean} - child element activation status
		 */
		this.childActive = function childActive( name ) {

			return void name || true;
		};

		/**
		 * Initializes buttons
		 * @returns {void}
		 */
		this.initButtons = function initButtons() {

			var klass = this;

			this.$table.find( '[type=button]' ).each(function iterateOverBtn() {

				var self = $( this );

				self.button({
					icons: { primary: self.attr( 'data-icon' ) },
					text:  false
				} );

				// Remove button initialization
				if ( self.hasClass( 'button_remove' ) ) {
					self.on( 'click', function removeButtonClickHandler( evt ) {
						evt.stopPropagation();
						klass[ 'delete' ](
							self.parents( 'tr' ).attr( 'data-name' )
						);
					} );
				}
			});
		};

		/* Sortable functionality */

		/**
		 * Gets the next item from prioritized list
		 * @returns {(object|undefined)} - Next element in the list
		 */
		this.next = function nextElement() {
			this.currentPriorityItem++;

			return this.prioritizedList[ this.currentPriorityItem ];
		};

		/**
		 * Gets previous item from prioritized list
		 * @returns {(object|undefined)} - Previous list element
		 */
		this.prev = function previousElement() {
			this.currentPriorityItem--;

			return this.prioritizedList[ this.currentPriorityItem ];
		};

		/**
		 * Gets current item from prioritized list
		 * @returns {(object|undefined)} - Current list element
		 */
		this.current = function current() {

			return this.prioritizedList[ this.currentPriorityItem ];
		};

		/**
		 * Rewinds prioritized list
		 * @returns {void}
		 */
		this.rewind = function rewindList() {

			this.currentPriorityItem = 0;
		};

		/**
		 * Makes one step forward along the prioritized list
		 * @returns {(object|undefined)} - Current element in the list
		 */
		this.forward = function stepForward() {

			var elem = this.current();

			this.next();

			return elem;

		};

		/**
		 * Builds prioritized list
		 * @param {(object|undefined)} data List items to be prioritized
		 * @returns {(array|undefined)} Prioritized list, if 'data' was supplied to method
		 */
		this.buildPriority = function buildPriority( data ) {

			var
				dataToProc = data,
				list = [],
				ret = true;

			if ( typeof data === 'undefined' ) {
				dataToProc = this.data;
				ret = false;
			}

			$.each( dataToProc, function iterateOverListItems( itemName, v ) {

				var
					i = 0,
					itemData = $.extend( true, {}, v ),
					p = parseInt( v.priority, 10 );

				if ( isNaN( p ) ) {
					itemData.priority = 10;
				} else {
					itemData.priority = p;
				}
				itemData.name = itemName;

				for ( i = list.length - 1; i >= 0; i-- ) {
					if ( itemData.priority < list[ i ].priority ) {

						continue;
					} else {
						list.splice( ++i, 0, itemData );

						return;
					}
				}
				list.unshift( itemData );
			} );

			if ( ret ) {

				return list;
			}

			this.prioritizedList = list;

			return list;
		};

		/**
		 * Initializes prioritized list
		 * @returns {void}
		 */
		this.initPrioritizedList = function initPrioritizedList() {
			this.buildPriority();
			this.rewind();
		};

		/**
		 * Sets list data
		 * @param {object} data - Data hash
		 * @returns {void}
		 */
		this.setData = function setData( data ) {
			this.data = $.extend( true, {}, data );
		};

		/**
		 * Filters data fields
		 * @param {object} data - Data hash
		 * @returns {object} - Filtered data hash
		 */
		this.filter = function filter( data ) {

			return $.extend( true, {}, data );
		};

		/**
		 * Initializes class
		 * @param {object} table - Table element, associated with
		 * the current list (jQuery).
		 * @param {object} data - List of items
		 * @param {(object|undefined)} template - Additional data
		 * @returns {void}
		 */
		this.init = function init( table, data, template ) {

			var
				klass = this,
				sortableContainer = null,
				sortableData = null;

			/**
			 * @type {object}
			 * @description Notifications data
			 */
			this.data = {};

			/**
			 * @type {object}
			 * @description List table element {jQuery}
			 */
			this.$table = table;

			/**
			 * @type {object}
			 * @description Row template element (jQuery)
			 */
			this.$template = this.$table.find( '.adk-list-template' );

			/**
			 * @type {string}
			 * @description Item/row name
			 */
			this.rowField = table.attr( 'data-row-name' );

			// Activate list item on table row click
			this.$table.delegate(
				'tr:not(.adk-list-header,.active-list-item)',
				'click',
				function tableRowClickHandler() {
					klass.active( $( this ).attr( 'data-name' ) );
				}
			);

			this.setData( data, template );

			// Sortable functionality
			if ( this.sortable ) {
				sortableData = {
					axis:        'y',
					containment: this.$table,
					cursor:      'move',
					delay:       5,
					update:      this.sortItems.bind( this ),
					cancel:      '.adk-list-header,input,button,select'
				};

				sortableContainer = this.$table.find( 'tbody' );

				// Fall back
				if ( ! sortableContainer.length ) {
					sortableContainer = this.$table;
				}
				sortableContainer.sortable( sortableData );
			}

			this.childInit();
		};

		/**
		 * Child class specific initializations (default)
		 * @returns {void}
		 */
		this.childInit = function childInit() {
			this.initPrioritizedList();
		};

		/**
		 * Re-arranges class data storage in response to list sort
		 * @fires Notification#table_sorted
		 * @returns {void}
		 */
		this.sortItems = function sortItems() {

			var
				klass = this,
				priority = 0;

			this.$table.find( 'tr' ).each( function iterateOverTableRows() {

				var name = $( this ).attr( 'data-name' );

				if ( name && klass.data[ name ] ) {
					klass.data[ name ].priority = priority++;
				}
			} );

			this.parent.preview.setTriggers( this.data );
			this.initPrioritizedList();
			notification.send( 'table_sorted', this );
			this.childSortItem();
		};

		/**
		 * Child specific sort item action
		 * @abstract
		 * @returns {void}
		 */
		this.childSortItem = function childSortItem() {
			// Abstract
		};

	}

	/**
	 * Notifications list
	 * @class
	 * @extends ListProto
	 * @param {object} table - Table element, associated with
	 * the current list (jQuery).
	 * @param {object} data - List of items
	 * @param {(object|undefined)} template - Additional data
	 * @listens Notification#triggers_table_added
	 * @listens Notification#list_rendered
	 * @listens Notification#trigger_changed
	 * @listens Notification#trigger_data_set
	 * @returns {void}
	 */
	function List( table, data, template ) {

		/**
		 * @type {object}
		 * @description Alias for this
		 */
		var klass = this;

		/**
		 * Update list item callback
		 *
		 * @param {object} item - Updated item data
		 * @returns {void}
		 */
		this.updated = function updated( item ) {
			this.update( item[ this.rowField ], item );
		};

		/**
		 * Child adding specific logic
		 * @returns {void}
		 * @fires Notification#notification_table_added
		 */
		this.childAdd = function childAdd() {

			this.render();
			this.selectFirst();
			notification.send( 'notifications_table_added', this );
			notification.subscribe(
				'triggers_table_added',
				this.render,
				this
			);
			notification.subscribe(
				'list_rendered',
				this.highlightActive,
				this
			);
			notification.subscribe( 'trigger_changed',
				this.updateTrigger,
				this
			);
			notification.subscribe( 'trigger_data_set',
				this.render,
				this
			);
		};

		/**
		 * Update triggers callback
		 * @description Puts in sync notification with triggers list
		 * @param {string} name - Notification name
		 * @param {object} triggers - Triggers list
		 * @returns {void}
		 */
		this.updateTrigger = function updateTrigger( name, triggers ) {

			if ( this.data && this.data[ name ] ) {
				this.data[ name ]
				.advertikon_notifications_triggers = $.extend( true, {}, triggers );
			}
		};


		/**
		 * @override
		 */
		this.childRenderCell = function childRenderCell( cell, rowData ) {

			var
				id = cell.attr( 'data-id' ),
				list = [];

			// Notification position select
			if ( id === this.parent.preview.positionField ) {

				$.each( rowData[ id ], function iterateOverRowData() {
					list.push( klass.parent.getSelectLabel( id, this ) );
				} );
				cell.html( list.join( '<br>' ) );

				return this.NEXT_ITERATION;

			// Notification triggers list

			} else if ( id === this.parent.preview.triggersField ) {

				$.each(
					this.buildPriority( rowData[ id ] ),
					function iterateOverPrioritizedList( i, itemData ) {

						var
							actionText = '',
							value = '';

						if ( itemData.adk_event &&
							( itemData.checkbox_enable === true ||
								itemData.checkbox_enable === 'true' ) ) {

							if ( typeof itemData.value === 'string' ||
								typeof itemData.value === 'number' ) {
								value = String( itemData.value );
							}

							actionText = itemData.radio_show === true ||
										itemData.radio_show === 'true' ?
										adkLang.show_if : adkLang.hide_if;
							list.push(
								actionText + ': ' + itemData.adk_event

									// Strip tags
									.replace( /<.+>.*<\/.+>|<.+>/g, '' )

									// Remove control element
									.replace(
										/%/,
										value.replace( /\w+:/g, '' )
									)
							);
						}
					}
				);

				if ( list.length ) {
					cell.html( list.join( '<br>' ) );
				} else {
					cell.html( adkLang.disabled );
				}

				return this.NEXT_ITERATION;
			}

			return this.CONTINUE_ITERATION;
		};

		/**
		 * @override
		 */
		this.childDelete = function childDelete( name, deleteLater ) {

			$.get( adkLang.ajax_delete_notification, {
				name:       name,
				'_wpnonce': adkLang.wpnonce
			} )
			.fail(function childDeleteOnNetworkError() {
				deleteLater( false );
			})
			.done(function chileDeleteOnSuccess( resp ) {

				var
					deleteRes = null,
					result = false;

				try {
					deleteRes = JSON.parse( resp );
					if ( deleteRes.error ) {
						window.alert( deleteRes.error );
					} else if ( deleteRes.success ) {
						result = true;
					}
				} catch ( e ) {
					window.alert( adkLang.parse_error );
				}

				deleteLater.call( klass, result, name );
			} );
		};

		/**
		 * @override
		 */
		this.childActive = function childActice( name ) {
			klass.parent.setData( klass.data[ name ] );
			notification.send( 'list_activated' );

			return true;
		};

		/**
		 * @override
		 */
		this.getCurrent = function getCurrent() {

			return this.parent.getCurrentNotification();
		};

		this.init.call( this, table, data, template );
	}

	/**
	 * Triggers list
	 * @class
	 * @extends ListProto
	 * @param {object} table - Table element, associated with
	 * the current list (jQuery).
	 * @param {object} data - List of items
	 * @param {(object|undefined)} template - Additional data
	 * @listens Notification#notification_changed
	 * @listens Notification#filter_notification_before_save
	 * @returns {void}
	 */
	function Triggers( table, data, template ) {

		var

			/**
			 * @type {object}
			 * @description Alias for this
			 */
			klass = this;

		/**
		 * @type {boolean}
		 * @description Flag, which shows, whether list items are sortable via dragging
		 */
		this.sortable = true;

		/**
		 * Child adding specific logic
		 * @returns {void}
		 * @fires Notification#triggers_table_added
		 */
		this.childAdd = function childAdd() {
			this.active( this.getCurrent() );
			klass.parent.preview.setTriggers( klass.data );

			// Event listeners
			notification.subscribe( 'notification_changed', this.active, this );
			notification.subscribe(
				'filter_notification_before_save',
				this.filterBeforeSave,
				this
			);

			notification.send( 'triggers_table_added', this );
		};


		/**
		 * @override
		 */
		this.childRender = function childRender() {

			return false;
		};

		/**
		 * @override
		 */
		this.childActive = function childActive( name ) {

			// Ignore click on table row
			if ( ! ( name in this.allData ) ) {

				return;
			}

			this.data = $.extend( true, {}, this.allData[ name ] );
			this.initPrioritizedList();
			this.render();
			this.$table.find( '.woocommerce-help-tip' ).tipTip();
		};

		/**
		 * @override
		 */
		this.getCurrent = function getCurrent() {

			return this.parent.getCurrentNotification();
		};

		/**
		 * Child class specific initializations
		 * @fires Notification#trigger_changed
		 * @returns {void}
		 */
		this.childInit = function childInit() {

			// Radio, checkbox changed
			this.$table.delegate( '[type=radio],[type=checkbox]', 'change', function changeHndl() {

				var
					name = $( this ).parents( 'tr' )
						.attr( 'data-name' ),
					unlinkedData = null;

				$( this ).parents( 'tr' )
				.find( '[type=radio],[type=checkbox]' )
				.each(function iterateOverCheckboxesAndRadios() {

					var
						id = null,
						self = $( this );

					id = self.parents( 'td' ).attr( 'data-id' );

					if ( id in klass.data[ name ] ) {
						klass.data[ name ][ id ] = self.is( ':checked' );
					}

				});

				klass.parent.preview.setTriggers( klass.data );
				unlinkedData = $.extend( true, {}, klass.data );
				klass.allData[ klass.getCurrent() ] = unlinkedData;
				notification.send( 'trigger_changed', klass.getCurrent(), unlinkedData );
			} );

			// Input change functionality
			this.$table.delegate(
				'[type=number],[type=text],[type=hidden],select',
				'change',
				function inputElementChange() {

					var
						name = $( this ).parents( 'tr' )
							.attr( 'data-name' ),
						unlinkedData = $.extend( true, {}, klass.data );

					klass.data[ name ].value = $( this ).val();
					klass.allData[ klass.getCurrent() ] = unlinkedData;
					klass.parent.preview.setTriggers( klass.data );
					notification.send( 'trigger_changed', klass.getCurrent(), unlinkedData );
				}
			);
		};

		/**
		 * @override
		 */
		this.childClone = function childClone( row ) {
			this.rowCount = typeof this.rowCount === 'undefined' ? 1 : ++this.rowCount;
			row.find( '[type=radio]' ).each( function iterateOverRadiosInTheRow() {

				var radio = $( this );

				radio.attr( 'name', radio.attr( 'name' ).replace( /\d+$/, klass.rowCount ) );
			} );
		};

		/**
		 * @override
		 */
		this.childRenderCell = function childRender( cell, rowData ) {

			var
				$elem = null,
				id = cell.attr( 'data-id' ),
				resultSet = null,
				select = null,
				select2Data = null,
				value = null;

			if ( /^(radio_|checkbox_)/.test( id ) ) {
				cell.css( 'width', '30px' );
				if ( 'null' === rowData[ id ] || rowData[ id ] === null || '' === rowData[ id ] ) {
					cell.empty();

					return true;
				} else if ( true === rowData[ id ] || 'true' === rowData[ id ] ) {
					cell.find( '[type=radio],[type=checkbox]' ).attr( 'checked', 'checked' );
				}

				// Continue rendering next cell
				return this.NEXT_ITERATION;
			} else if ( 'adk_event' === id && rowData.input ) {

				/* Initialize HTML structure */

				// Text, Number
				if ( $.inArray( rowData.input, [ 'text', 'number', 'hidden' ] ) >= 0 ) {
					value = rowData.value || '';
					cell.html(
						rowData[ id ]

						// Insert input element
						.replace(
							/%/,
							' <input type="' + rowData.input + '" value="' + value + '">'
						)
					);

				// Select
				} else if ( rowData.input === 'multiselect' || rowData.input === 'select' ) {
					select = $( '<select></select>' );
					if ( rowData.input === 'multiselect' ) {
						select.attr( 'multiple', 'multiple' );
					}

					$.each( rowData.options, function iterateOverItemData( itemName, itemValue ) {

						var selected = $.inArray(
							itemName,
							rowData.value
						) >= 0 ? ' selected="selected" ' : '';

						select.append(
							'<option value="' + itemName + '" ' + selected + '>' +
								itemValue +
							'</option>'
						);
					} );

					cell.html( rowData[ id ].replace( /%/, select[ 0 ].outerHTML ) );
				}

				// Select2 initialization
				if ( rowData.select2 ) {
					$elem = cell.find( 'input,select' );
					$elem.addClass( 'adk-select2' ).css( 'width', '100%' );

					select2Data = {
						placeholder:         adkLang.search,
						formatSearching:     adkLang.searching + '...',
						formatAjaxError:     adkLang.network_error,
						formatInputTooShort: function s2FormatTooShort( term, minLength ) {

							return adkLang.query_min_length.replace( /%/, minLength );
						},
						formatInputTooLong: function s2FormatToLong( term, maxLength ) {

							return adkLang.query_max_length.replace( /%/, maxLength );
						},
						formatNoMatches: adkLang.no_matches,

						// Element values consist of ID:VALUE pairs
						// extract VALUE and put to TEXT label
						initSelection: function s2InitSelection( element, callback ) {

							var s2ElemeDataset = [];

							$( element.val().split( ',' ) ).each( function iterateOverS2Values() {

								var parts = this.split( ':' );

								s2ElemeDataset.push({
									id:   this,
									text: parts[ 1 ] || this
								});
							} );
							callback( s2ElemeDataset );
						},
						escapeMarkup: function s2EscapeMarkup( m ) {

							// Do nothing
							return m;
						},
						minimumInputLength: 0
					};

					if ( rowData.data ) {

						// Prepare result set
						if ( rowData.data.results ) {
							select2Data.data = rowData.data;
						} else {
							resultSet = { results: [] };
							$.each( rowData.data, function goOverS2Data( dataId, dataText ) {

								// Merge ID and TEXT to ID:TEXT and set as S2 VALUE
								resultSet.results.push({
									id:   dataId + ':' + dataText,
									text: dataText
								});
							} );
							select2Data.data = resultSet;
						}

						select2Data.query = function s2Query( query ) {

							var
								curResultSet = query.element[ 0 ].select2.data,
								regExpEscapedTermQuery = '',
								returnResultSet = { results: [] },
								termQueryRegExp = null;

							// Search all the data set on empty term
							if ( '' === query.term ) {
								query.callback( curResultSet );

								return;
							}

							// Search for result
							regExpEscapedTermQuery = query.term
							.replace( /[\\/+?.}{)(\[\]]/g, '\\$1' );

							// Case insensitive filter
							termQueryRegExp = new RegExp(
								'.*' + regExpEscapedTermQuery + '.*', 'i'
							);

							$.each( curResultSet.results, function iterateOverS2DataSet() {
								if ( termQueryRegExp.test( this.text ) ) {
									returnResultSet.results.push( this );
								}
							} );

							query.callback( returnResultSet );
						};

					} else if ( rowData.ajax ) {
						select2Data.ajax = {
							url:         rowData.ajax,
							dataType:    'json',
							quietMillis: 250,
							data:        function s2AJAXParseData( term, page ) {
								return {
									q: term,
									p: page
								};
							},
							results: function s2AJAXParseResult( dataFromAJAX, page ) {

								var parsedResult = null;

								if ( dataFromAJAX.error ) {
									window.alert( dataFromAJAX.error );

									return { results: {} };
								}

								parsedResult = { results: [] };
								$.each( dataFromAJAX.items, function iterateOverItemsFromS2AJAX() {
									parsedResult.results.push({
										id:   this.id + ':' + this.text,
										text: this.text
									});
								} );
								parsedResult.page = page;

								return parsedResult;
							},
							cache: true
						};
						select2Data.minimumInputLength = 0;
					}

					if ( rowData.multiple ) {
						select2Data.multiple = true;
					}

					$elem[ 0 ].select2 = select2Data;
					$elem.select2( select2Data );
				}

				// Continue to render next cell
				return this.NEXT_ITERATION;
			}

			return this.CONTINUE_ITERATION;
		};

		/**
		 * @override
		 */
		this.childSortItem = function childSortItem() {

			var unlinkedData = $.extend( true, {}, this.data );

			this.parent.preview.setTriggers( unlinkedData );
			this.allData[ this.getCurrent() ] = unlinkedData;
		};

		/**
		 * Sets list data, respect template if applicable
		 * @param {object} triggerData Triggers data hash
		 * @param {object} triggerTemplate Template hash
		 * @fires Notification#trigger_changed
		 * @returns {void}
		 */
		this.setData = function setData( triggerData, triggerTemplate ) {
			this.allData = triggerData;
			if ( typeof triggerTemplate === 'object' ) {
				this.mandatory = triggerTemplate.mandatory || [];
				$.each( this.allData, function iterateOvertriggerData( triggerName ) {
					klass.merge( this, triggerTemplate.data );
					notification.send( 'trigger_changed', triggerName, this );
				} );
			}
			notification.send( 'trigger_data_set' );
		};

		/**
		 * Merges configuration with template
		 * @param {object} obj Configuration hash
		 * @param {object} mergeWith Template configuration to be merged with
		 * @returns {void}
		 */
		this.merge = function configMerge( obj, mergeWith ) {
			if ( typeof mergeWith !== 'object' ) {
				return;
			}

			$.each( mergeWith, function iterateOverMergingConfig( i, v ) {
				if ( typeof v !== 'object' || v === null ) {
					if ( typeof obj[ i ] === 'undefined' ||
						$.inArray( i, klass.mandatory ) === -1 ) {
						obj[ i ] = v;
					}
				} else {
					if ( typeof obj[ i ] !== typeof v ) {
						if ( v.toString().indexOf( '[object' ) === 0 ) {
							obj[ i ] = {};
						} else {
							obj[ i ] = [];
						}
					}
					klass.merge( obj[ i ], v );
				}
			} );
		};

		/**
		 * Filters mandatory data fields
		 * @param {object} inputData Data hash
		 * @returns {object} Filtered data
		 */
		this.filter = function filterTriggersData( inputData ) {

			var outputData = {};

			if ( this.mandatory ) {
				$.each( inputData, function iterateOverTriggerData( i, v ) {
					outputData[ i ] = {};
					$.each( v, function iterateOverTriggerInnerData( ii, vv ) {
						if ( $.inArray( ii, klass.mandatory ) >= 0 ) {
							outputData[ i ][ ii ] = vv;
						}
					} );
				} );
			} else {
				outputData = $.extend( true, {}, data );
			}

			return outputData;
		};

		/**
		 * Filters notification data prior to save
		 * @param {object} inputData Notification data (by reference)
		 * @returns {void}
		 */
		this.filterBeforeSave = function filterBeforeSave( inputData ) {
			$.each( inputData, function iterateOverInputData( i, v ) {
				if ( 'advertikon_notifications_triggers' === i ) {
					inputData[ i ] = klass.filter( v );
				}
			} );
		};

		this.init.call( this, table, data, template );
	}

	/**
	 * JSON parser wrapper
	 * @param {string} string JSON string representation
	 * @returns {object} Object from JSON string
	 */
	function parseJson( string ) {

		var
			after,
			before,
			debug = false,
			index,
			j,
			json = string,
			message,
			replacements = {
				0: {
					regExp:      new RegExp( '(\\+)', 'g' ),
					replacement: '\\'
				}
			},
			showChars;

		if ( debug ) {
			window.console.error( 'parse JSON strart' );
			window.console.error( 'Input string: ' + string );
		}


		$.each( replacements, function iterateOverJSONReolacements() {
			json = json.replace( this.regexp, this.replacement );
			if ( debug ) {
				window.console.error(
					'Filter: regExp - ' +
					this.regExp.toString() +
					', replacement: ' +
					this.replacement
				);
				window.console.error( 'Output string: ' + string );
			}
		} );

		try {
			j = JSON.parse( json );
		} catch ( e ) {
			window.console.error( e.message );
			message = e.message.match( /JSON at position (\d+)/ );
			if ( message.length && message[ 1 ] ) {
				showChars = 100;
				index = parseInt( message[ 1 ], 10 );
				before = string.substring( index - showChars, index ).replace( /\n\r*/g, ' ' );
				after = string.substring( index + 1, index + showChars ).replace( /\n\r*/g, ' ' );

				window.console.error(
					'Error near: ' +
					before + '>>>>' + string.charCodeAt( message[ 1 ] ) + '<<<<' + after
				);
			}

			window.console.error( 'Initial string: ' + string );

			return {};
		}

		if ( debug ) {
			window.console.error( 'Output hash: ', j );
		}

		return stripSlashes( j );
	}

	/**
	 * Recursively strips slashes
	 * @param {*} string Input element from which slashes to be stripped
	 * @return {*} Element without slashes
	 */
	function stripSlashes( string ) {
		if ( typeof string === 'object' && string !== null ) {
			$.each( string, function iterateOverElements( i, v ) {
				string[ i ] = stripSlashes( v );
			} );
		} else if ( typeof string === 'string' ) {

			return string.replace( /\\(.)/g, '$1' );
		}

		return string;
	}

	/**
	 * Notification class
	 * @class
	 * @returns {void}
	 */
	function Notification() {

		var klass = this;

		/**
		* @type {object}
		* @description Notifications queue
		*/
		this.notificationsQueue = {};

		/**
		 * Sends notification
		 * @param {string} name Notification name
		 * @returns {void}
		 */
		this.send = function notificationSend( name ) {

			var
				args = Array.prototype.slice.call( arguments, 1 );

			if ( klass.notificationsQueue[ name ] ) {
				$.each( klass.notificationsQueue[ name ], function iterateOverNotificationsQueue() {
					if ( typeof this.callback === 'function' ) {
						this.callback.apply( this.caller, args );
					}
				} );
			}
		};

		/**
		 * Subscribes to specific notification
		 * @param {string} name NotificatioN name
		 * @param {function} callback Notification callback
		 * @param {object} caller Object to which THIS will point. Optional
		 * @returns {void}
		 */
		this.subscribe = function subscribeToNotification( name, callback, caller ) {
			if ( ! klass.notificationsQueue[ name ] ) {
				klass.notificationsQueue[ name ] = [];
			}

			if ( typeof caller === 'undefined' ) {
				caller = this;
			}

			klass.notificationsQueue[ name ].push({
				callback: callback,
				caller:   caller
			});
		};
	}

	listProto = new ListProto();
	List.prototype = listProto;
	Triggers.prototype = listProto;

	notification = new Notification();
	controls = new Controls( $( 'table.form-table' ), new Preview( $( '.adk-teaser' ) ) );

	controls.setList( new List( $( '#advertikon_notifications_list' ), adkNotificationsList ) );
	controls.setTriggers(
		new Triggers(
			$( '#advertikon_notifications_triggers' ),
			adkTriggers,
			adkTriggersTemplate
		)
	);

} );

+ function( $ ) {
"use strict";

	function toggleSection() {
		$( this ).next( "table" ).fadeToggle();
	}

	function select2TemplatePreview( data, element ) {
		console.log( data );
		var
						ret = $( element );

					if( data.image ) {
						ret.html( "<img src='" + ADK.locale.imageBase + data.image +
								"' style='height:" + imageHeight + "px' />&nbsp;" + data.text );
					} else {
						ret.text( data.text );
					}

					ret.attr( "value", data.id );

					return ret;
	}

	function showTemplateSections() {

	}

	$( "h2" ).on( "click", toggleSection );
	$( "#" + adkLang.prefix + "template" ).on( "change", showTemplateSections );
	$( "#" + adkLang.prefix + "template" ).select2( { templateResult: select2TemplatePreview } );
}( jQuery );
