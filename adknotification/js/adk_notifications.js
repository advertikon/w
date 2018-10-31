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

	$( "h2" ).on( "click", toggleSection );
	$( "#" + adkLang.prefix + "template" ).on( "change", showTemplateSections );
	$( "#" + adkLang.prefix + "template" ).select2( { templateResult: select2TemplatePreview } );
}( jQuery );
