var ADK = {};

+ function( $ ) {
"use strict";

	function toggleSection() {
		$( this ).next( "table" ).fadeToggle();
	}

	function select2TemplatePreview( data, element ) {
		var
			ret = $( element ),
			html = '',
			w;

		if ( !data.id ) {
			return;
		}

		switch( data.id ) {
			case 'simple':
				w = 100;
				html = '<div class="adk-template-preview-wrapper">' +
							'<div class="adk-template-preview-item" ' + calc_width( w ) + '></div>' +
						'</div>';
				break;
			case 'two_columns':
				w = 50;
				html = '<div class="adk-template-preview-wrapper">' +
							'<div class="adk-template-preview-item" ' + calc_width( w ) + '></div>' +
							'<div class="adk-template-preview-item" ' + calc_width( w ) + '></div>' +
						'</div>';
				break;
			case 'three_columns':
				w = 33;
				html = '<div class="adk-template-preview-wrapper">' +
							'<div class="adk-template-preview-item" ' + calc_width( w ) + '></div>' +
							'<div class="adk-template-preview-item" ' + calc_width( w ) + '></div>' +
							'<div class="adk-template-preview-item" ' + calc_width( w ) + '></div>' +
						'</div>';
				break
		}


		ret.attr( "value", data.id );
		ret.html( html );

		return ret;
	}

	function calc_width( width ) {
		return 'style="width: calc(' + width + '% - 4px);"';
	}

	function showTemplateSections() {
		var
			show = [],
			hide = [];

		switch( $( this ).val() ) {
			case 'simple':
				show = [ "content" ];
				hide = [ "top", "bottom", "left", "right" ];
				break;
			case 'two_columns':
				show = [ "content", "right" ];
				hide = [ "top", "bottom", "left" ];
				break;
			case 'three_columns':
				show = [ "content", "left", "right" ];
				hide = [ "top", "bottom" ];
				break;
		}

		$.each( show, function() {
			$( "#section_" + this ).hide();
			$( "#label-section_" + this ).show();
		} );

		$.each( hide, function() {
			$( "#section_" + this ).hide();
			$( "#label-section_" + this ).hide();
		} );
	}

	function initColor() {
		$( this ).spectrum( {
			showAlpha:       true,
			showInput:       true,
			showPalette:     true,
			preferredFormat: "hex3",
			palette:         [],
			localStorageKey: "spectrum.adk",
			showInitial:     true,
			showInput:       true,
			showButtons:     false
		} );
	}

	function saveWidget() {
		var data = {};

		$( ".adk-widget-control" ).each( function() {
			var
				name = this.name,
				parts,
				pointer,
				value = $( this ).hasClass( "adk-color" ) ? $( this ).spectrum( "get" ).toRgbString() : $( this ).val();

			if ( name.match( "]" ) ) {
				parts = name.replace( "]", "" ).split( "[" );
				pointer = data;

				for( var i = 0; i < parts.length; i++ ) {
					if ( i + 1 === parts.length ) {
						pointer[ parts[ i ] ] = value;
						break;
					}

					if ( typeof pointer[ parts[ i ] ] === "undefined" ) {
						pointer[ parts[ i ] ] = {};
					}

					pointer = pointer[ parts[ i ] ];
				}

			} else {
				data[ name ] = value;
			}
		} );

		console.log( data );
		ADK.buttonClick.call( this, data );
	}

	ADK.buttonClick = function( data ) {
		var
			url = $( this ).attr( "data-url" ),
			def = $.Deferred();

		if ( !url ) {
			ADK.showError( adkLang.missUrl );
		}

		$.post( url, data )

		.done( function( ret ) {
			if ( ret.success ) {
				def.resolveWith( ret );
				ADK.showSuccess( ret.success );
			}

			if ( ret.error ) {
				def.rejectWith( ret );
				ADK.showError( ret.error );
			}
		} )

		.fail( function( ret ) {
			var message;

			def.reject();

			if ( typeof ret === "string" ) {
				message = ret;

			} else if( ret.statusText ) {
				message = ret.statusText;
			}

			if ( message ) {
				ADK.showError( message );
			}
		} );

		return def.promise();
	}

	ADK.showError = function( message ) {
		alert( message );
	}

	ADK.showSuccess = function( message ) {
		alert( message );
	}

	$( document ).ready( function() {
		$( "h2" ).on( "click", toggleSection );
		$( "#" + adkLang.prefix + "template" ).on( "change", showTemplateSections );
		$( "#" + adkLang.prefix + "template" ).select2( { templateResult: select2TemplatePreview } );
		$( ".adk-color" ).each( initColor );
		$( ".adk-save-widget" ).on( "click", saveWidget );
		
	} );

}( jQuery );
