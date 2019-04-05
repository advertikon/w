<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

global $wp;

if ( !isset( $wp->query_vars['listing_id'] ) ) {
	die( 'Listing ID is missing' );
}

$id = $wp->query_vars['listing_id'];

require_once __DIR__ . '/../../plugins/adk_feed/class/feed.php';
require_once __DIR__ . '/../../plugins/adk_feed/class/cache.php';
require_once __DIR__ . '/../../plugins/adk_feed/class/google_coordinates.php';

ADKCache::flush();

$user = get_option( 'adk_feeduser' );
$pwd = get_option( 'adk_feedpwd' );
$feed = new Feed( $user, $pwd );

$l = $feed->fetch( $id );

if ( is_null( $l->id ) ) {
	die( 'Listing with ID ' . $id . ' has been removed' );
}

$address = trim( $l->address . ' ' . $l->address2 );
$address .= ', ' . $l->city . ' ' . $l->province . ' ' . $l->zip_code;

$utilities = [];

if ( $l->building_appliances ) {
	$utilities[] = $l->building_appliances;
} 

if ( $l->land_appliances ) {
	$utilities[] = $l->land_appliances;
}

$utilities = implode( ',', $utilities );

get_header();

$coordinates = GoogleCoordinates::get( $l );

// $ch = curl_init( 'https://api.locallogic.co/v1/demographics?lat=45.5017&lng=-73.5656' );
// curl_setopt( $ch, CURLOPT_HTTPHEADER, [ 'X-API-KEY' => '907c3d69b4d0018a652664e82605d3c2d6d0184b487ab1764723facea049f9f73f1a57d10dd33d4b' ] );
// curl_exec( $ch );

// $ch = curl_init( 'https://api.locallogic.co/v1/scores/bG9jYWxsb2dpYweyJ0b2tlbiI6IjkwN2MzZDY5YjRkMDAxOGE2NTI2NjRlODI2MDVkM2MyZDZkMDE4NGI0ODdhYjE3NjQ3MjNmYWNlYTA0OWY5ZjczZjFhNTdkMTBkZDMzZDRiIiwibGF0Ijo0NS41MDE3MzQsImxuZyI6LTczLjU2NTQyfQ==?locale=en&fields=value%2Ctext%2Cname' );
// curl_setopt( $ch, CURLOPT_HEADER, true );


?>

<link type="text/css"rel="stylesheet" href="<?php echo plugins_url( 'adk_feed/assets/stylesheets/wp-listings-single.css' ); ?>"/>


<script src="//cdnjs.cloudflare.com/ajax/libs/fitvids/1.1.0/jquery.fitvids.min.js"></script>
<script src="<?php echo plugins_url( 'adk_feed/assets/javascripts/jquery.validate.min.js' ); ?>"></script>
<script src="<?php echo plugins_url( 'adk_feed/assets/javascripts/single-listing.min.js' ); ?>"></script>

<div id="primary" class="content-area container inner">
	<div id="content" class="site-content" role="main">
		<article id="post-6829" class="post-6829 listing type-listing status-publish has-post-thumbnail hentry status-featured status-for-sale property-types-residential">
			<div id="content" class="grid_1"></div>
			<div id="content" class="grid_10">
				<header class="entry-header">
					<div style="margin-top:60px"></div>
					<a href='http://kulnijjar.ca/ddf-search'>&#8592; Go Back</a>            
					<h2 class="entry-title" itemprop="name"><?php echo $l->transaction_type . ' ' . $l->address; ?></h2>			
				</header><!-- .entry-header -->
				<div itemscope itemtype="http://schema.org/SingleFamilyResidence" class="entry-content wplistings-single-listing">
					<div class="listing-image-wrap">
						<div itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
							<img width="1000" height="749" src="<?php echo $l->photos[ 0 ][ 0 ]; ?>" class="single-listing-image wp-post-image" alt="" itemprop="contentUrl" sizes="(max-width: 1000px) 100vw, 1000px" />
						</div>
						<span class="listing-status for-sale"><?php echo $l->transaction_type; ?></span>
					</div><!-- .listing-image-wrap -->
					<ul class="listing-meta">
						<li class="listing-price"><span class="currency-symbol">$</span> <?php echo number_format( $l->price ); ?> </li>
						<li class="listing-bedrooms"><span class="label">Beds: </span><?php echo $l->bedrooms; ?></li>
						<li class="listing-bathrooms"><span class="label">Baths: </span><?php echo $l->bathrooms; ?></li>
						<li class="listing-sqft"><span class="label">Sq Ft: </span><?php echo number_format( $l->square_feet_inner ); ?></li>
						<li class="listing-lot-sqft"><span class="label">Lot Size: </span><?php echo number_format( $l->lot_size, 2 ); ?> acres</li>
					</ul>
					<div id="listing-tabs" class="listing-data">
						<ul>
							<li><a href="#listing-description">Description</a></li>
							<li><a href="#listing-details">Details</a></li>
							<li><a href="#listing-gallery">Photos</a></li>
						</ul>
						<div id="listing-description" itemprop="description">
							<span class="formula">
								<span class="wrapped-field"><?php echo $l->notes; ?></span>
							</span>
						</div><!-- #listing-description -->
						<div id="listing-details">
							<table class="listing-details">
								<tbody class="left">
									<tr class="wp_listings_listing_price">
										<td class="label">Price:</td>
										<td><span class="currency-symbol">$</span><?php echo number_format( $l->price ); ?> </td>
									</tr>
									<!-- <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"> -->
										<tr class="wp_listings_listing_address">
											<td class="label">Address:</td>
											<td itemprop="streetAddress"><?php echo $l->address; ?></td>
										</tr>
										<tr class="wp_listings_listing_city">
											<td class="label">City:</td>
											<td itemprop="addressLocality"><?php echo $l->city; ?></td>
										</tr>
										<tr class="wp_listings_listing_state">
											<td class="label">State:</td>
											<td itemprop="addressRegion"><?php echo $l->province; ?></td>
										</tr>
										<tr class="wp_listings_listing_zip">
											<td class="label">Zip Code:</td>
											<td itemprop="postalCode"><?php echo $l->zip_code; ?></td>
										</tr>
									<!-- </div> -->
									<tr class="wp_listings_listing_mls">
										<td class="label">MLS:</td>
										<td>What does it mean?</td>
									</tr>
								</tbody>
								<tbody class="right">
									<tr class="wp_listings_listing_year_built">
										<td class="label">Year Built:</td><td><?php echo $l->year_built ?: ''; ?></td>
									</tr>
									<tr class="wp_listings_listing_floors">
										<td class="label">Floors:</td>
										<td><?php echo $l->floors; ?></td>
									</tr>
									<tr class="wp_listings_listing_sqft">
										<td class="label">Square Feet:</td>
										<td><?php echo number_format( $l->square_feet_inner ); ?></td>
									</tr>
									<tr class="wp_listings_listing_lot_sqft">
										<td class="label">Lot Size:</td>
										<td><?php echo number_format( $l->lot_size, 2 ); ?> acres</td>
									</tr>
									<tr class="wp_listings_listing_bedrooms">
										<td class="label">Bedrooms:</td>
										<td><?php echo $l->bedrooms; ?></td>
									</tr>
									<tr class="wp_listings_listing_bathrooms">
										<td class="label">Bathrooms:</td>
										<td><?php echo $l->bathrooms; ?></td>
									</tr>
									<tr class="wp_listings_listing_garage">
										<td class="label">Garage:</td>
										<td><?php echo $l->parking; ?></td>
									</tr>
								</tbody>
							</table>
							<table class="listing-details extended">
								<tbody class="left">
									<tr class="wp_listings_listing_proptype">
										<td class="label">Property Type:</td>
										<td><?php echo $l->property_type; ?></td>
									</tr>
								</tbody>
								<tbody class="right">
									<tr class="wp_listings_listing_lotsize">
										<td class="label">Lot size:</td>
										<td><?php echo number_format( $l->lot_size, 2 ); ?> acres</td>
									</tr>
									<tr class="wp_listings_listing_scenery">
										<td class="label">Scenery:</td>
										<td><?php echo $l->scenery; ?></td>
									</tr>
									<tr class="wp_listings_listing_utilities">
										<td class="label">Utilities:</td>
										<td><?php echo $utilities; ?></td>
									</tr>
								</tbody>
							</table>
						</div><!-- #listing-details -->
						<div id="listing-gallery">
							<p>
								<div id='gallery-1' class='gallery galleryid-6829 gallery-columns-3 gallery-size-medium'>
									<?php for( $i = 1; $i < count( $l->photos ); $i++ ): ?>
									<figure class='gallery-item'>
										<div class='gallery-icon landscape'>
											<a href='<?php echo $l->photos[ $i ][ 0 ]; ?>'>
												<img width="300" height="225" src="<?php echo $l->photos[ $i ][ 0 ]; ?>" alt="" sizes="(max-width: 300px) 100vw, 300px" />
											</a>
										</div>
										<?php if ( $l->photos[ $i ][ 1 ] ) : ?>
										<figcaption class='wp-caption-text gallery-caption' id='gallery-1-6848'><?php echo $l->photos[ $i ][ 1 ]; ?></figcaption>
										<?php endif; ?>
									</figure>
									<?php endfor; ?>
								</div>
							</p>
						</div><!-- #listing-gallery -->
					</div><!-- #listing-tabs.listing-data -->
					<!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1Nyt3733Bgyd1KiZIiF8ypMsX2BkokMQ"></script> -->
					<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlp0cpB-E_2ua_ugYIp1NsO4TmNCqDIg8"></script>
					<script>
						var
							geocoder,
							mapOptions,
							map,
							address = '<?php echo $address; ?>',
							infowindow;

						function initialize() {
							var mapCanvas = document.getElementById( 'map-canvas' );
							var myLatLng = new google.maps.LatLng(49.9503759, -116.9150368)
							var mapOptions = {
								center: myLatLng,
								zoom: 14,
								mapTypeId: google.maps.MapTypeId.ROADMAP
							}

							// var marker = new google.maps.Marker({
							// 	position: myLatLng,
							// 	icon: '//s3.amazonaws.com/ae-plugins/wp-listings/images/active.png'
							// });

							var infoContent = ' <p style="font-size: 14px; margin-bottom: 0;">' + address + '</p> ';
							infowindow = new google.maps.InfoWindow({
								content: infoContent
							});

							map = new google.maps.Map( mapCanvas, mapOptions );

							// marker.setMap(map);

							// infowindow.open( map, marker );
							setMap();
						}

						function setMap() {
							var
								geocoder = new google.maps.Geocoder();

							geocoder.geocode( { 'address': address }, function( results, status ) {
								if (status == 'OK') {
									map.setCenter( results[ 0 ].geometry.location );

									var marker = new google.maps.Marker( {
										map: map,
										position: results[ 0 ].geometry.location,
										icon: '//s3.amazonaws.com/ae-plugins/wp-listings/images/active.png'
									} );

									infowindow.open( map, marker );

								} else {
									console.error( 'Geocode was not successful for the following reason: ' + status );
								}
							} );
						}

						//google.maps.event.addDomListener( window, 'load', initialize );

						function initLocallogic() {            
							var contentWidget = new locallogic.LocalContent('local-content', {
								lat: <?php echo $coordinates->get_lat(); ?>,
								lng: <?php echo $coordinates->get_lng(); ?>,
								basemap: "google",
							} );
						}

					</script>
					<script async defer src="https://cdn.locallogic.co/sdk/?token=<?php echo get_option( 'adk_feed_locallogic' ); ?>&callback=initLocallogic"></script>
					<div id="listing-map">
						<h3>Location Map</h3>
						<!-- <div id="map-canvas" style="width: 100%; height: 350px;"></div> -->
						<div id="local-content"></div>
					</div><!-- .listing-map -->

					<a href='http://kulnijjar.ca/ddf-search'>&#8592; Go Back</a>

					<div id="listing-contact">
						<?php the_widget( 'WPForms_Widget', [
							'form_id' => 3282,
							'show_title' => false,
							'title'      => '',
							'show_desc'  => false,
						] ); ?> 
					</div><!-- .listing-contact -->
				</div><!-- .entry-content -->
			</div>
		</article><!-- #post-ID -->
		<div id="content" class="grid_1 omega"></div>
	</div><!-- #content -->
</div>



<?php get_footer(); ?>