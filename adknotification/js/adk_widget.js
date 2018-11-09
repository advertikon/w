+function( $ ) {

	function hideWidget() {
		$( $( this ).attr( "data-for" ) ).fadeOut();
	}

	$( document ).ready( function() {
		$( ".adk-widget-close" ).on( "click", hideWidget );
	} );
}( jQuery )