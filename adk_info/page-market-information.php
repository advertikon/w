<?php
get_header(); ?>
<!-- <script src="http://kulnijjar.ca/wp-content/plugins/wp-lightbox-bank/assets/css/wp-lightbox-bank.css?ver=4.7.13"></script>
 --><script src="http://kulnijjar.ca/wp-content/plugins/wp-lightbox-bank/assets/js/wp-lightbox-bank.js?ver=4.7.13"></script>

<?php
	$list  = require_once __DIR__ . '/../../plugins/adk_info/data.php';
	$lats = [];
	$lngs = [];

	foreach( $list as $l ) {
		if ( !empty( $l['lat'] ) ) {
			$lats[] = $l['lat'];
		}

		if ( !empty( $l['lng'] ) ) {
			$lngs[] = $l['lng'];
		}
	}

	$lat_center = ( ( max( $lats ) - min( $lats ) ) / 2 ) + min( $lats );  
	$lng_center = ( ( max( $lngs ) - min( $lngs ) ) / 2 ) + min( $lngs );
	$news = getPdf( 'BC Real Estate News' );
	$url = site_url( 'wp-content/plugins/adk_info/download.php' );

	foreach( $list as &$data ) {
		$data['pdfs'] = getPdf( $data['name'] );
	}


	function getPdf( $name ) {
		$n = preg_replace( '/[^a-zA-Z0-9]/', '_', $name );
		$adkDataFolder = __DIR__ . '/../../plugins/adk_info/data/';

		if ( !is_dir( $adkDataFolder . $n ) ) {
			return [];
		}

		$ret = [];

		foreach ( scandir( $adkDataFolder . $n ) as $f ) {
		    if ( $f[ 0 ] === '.' ) {
		        continue;
	        }

		    $ret[ $f ] = filemtime( $adkDataFolder . $n . '/' . $f );
	    }

		return $ret;
	} 
?>

<!-- Bg Image Hero Slide -->
<div id="slide-market-info" class="slide"></div>
<div class="photo-credit right">Meadow Creek Photo: Wild Air Photography</div>
<div class="grid_spacer omega" style="margin-bottom: 2%;"></div>
<div class="grid_2"></div>
<div class="grid_8">

<a href="http://www.kulnijjar.ca#slide-Resources">← Go Back</a>

<?php
if( $news ) {
	echo
	'<h3>BC Real Estate News</h3>' .
	'<ul>';

	foreach( $news as $file => $time ) {
		$u = $url . '?city=' . urlencode( 'BC_Real_Estate_News' ) . '&file=' . urlencode( $file );
		$target = strtolower( substr( $file, -3 ) ) === 'pdf' ? '_blank' : '_self';
		echo '<li><a href="' . $u . '" target="' . $target . '">' . $file . '</a></li>';
	}

	echo '</ul>';
}
?>

<style>
#map {
	height: 500px;
}
</style>

<div id="map"></div>
<script>
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: <?php echo $lat_center; ?>,
			lng: <?php echo $lng_center; ?>
		},
		zoom:              8,
		zoomControl:       true,
		mapTypeControl:    false,
		scaleControl:      true,
		streetViewControl: false,
		rotateControl:     true,
		fullscreenControl: true
	} );

	setMarkers();
}

function setMarkers() {
	var list = <?php echo json_encode( $list ); ?>;

	for( var i = 0; i < list.length; i++ ) {
		if ( !list[ i ].lat || !list[ i ].lng  ) {
			continue;
		}

		var contentString = 'No information to show';
console.log( list[ i ].pdfs );
		if ( typeof list[ i ].pdfs.length === "undefined" ) {
			contentString =
				'<div>' +
					'<h3>Latest market information</h3>' +
					'<ul>';

			for( var y in list[ i ].pdfs ) {
				var url = '<?php echo $url; ?>?city=' + encodeURIComponent( list[ i ].name.replace(/[^a-zA-Z0-9]/g,'_') ) + '&file=' + encodeURIComponent( y );
				var target = y.substr( -3 ).toLowerCase() === 'pdf' ? '_blank' : '_self';
				contentString += '<li><a href="' + url + '" target="' + target + '">' + y + '</a></li>';
			}

			contentString += '</ul></div>';
		}

		var image = '<?php echo get_theme_file_uri( "icon.php" ); ?>' + '?text=' + encodeURIComponent( list[ i ].name );
		var infowindow = new google.maps.InfoWindow( {
			content: contentString
		} );

		marker = new google.maps.Marker({
			position: {lat: list[ i ].lat, lng: list[ i ].lng },
			map: map,
			icon: image,
		} );

		marker.info = infowindow;

		marker.addListener( 'click', function() {
			this.info.open( this.map, this );
		});

		// marker.addListener( 'mouseover', function() {
		// 	console.log( this );
		// 	this.oldZIndex = this.get( "zINdex" );
		// 	this.set( "zIndex",  100 );
		// } );

		// marker.addListener( 'mouseout', function() {
		// 	console.log( "leave" );
		// 	this.set( "zIndex",  this.oldZIndex );
		// } );
	}
}
</script>
<!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1Nyt3733Bgyd1KiZIiF8ypMsX2BkokMQY&callback=initMap" async defer></script> -->

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1Nyt3733Bgyd1KiZIiF8ypMsX2BkokMQ&callback=initMap"></script>