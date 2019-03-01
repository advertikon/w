<?php /* Template Name: Serach */ ?>

<?php get_header(); ?>
<?php error_reporting(E_ALL);
ini_set('display_errors', 1); ?>

<style>
.page-item {
	display: inline-block;
    padding: 10px 0;
    width: 35px;
    text-align: center;
    cursor: pointer;
    background-color: #ecb53e;
    color: white;
    border: solid 2px #bf973f;
    font-size: 16px;
    font-weight: bold;
}

.page-item.active {
	cursor: default;
	background-color: #c58907;
}

.page-item.disabled {
	cursor: default;
	background-color: #bbbbbb;
    border: solid 2px #777777;
}

.pagination-wrapper{
    width: 440px;
    margin: 0 auto;
    max-width: 100%;
}
</style>

<div style="width:90%;max-width:1200px; margin:90px auto 0 auto">
	<div style="padding:40px 0px 0 0"></div>
	<div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
		<?php if( function_exists( 'bcn_display' ) ){ bcn_display();	} ?>
	</div>

	<?php
	require_once __DIR__ . '/../../plugins/adk_feed/class/feed.php';
	require_once __DIR__ . '/../../plugins/adk_feed/class/cache.php';

	//ADKCache::flush();

	$user = get_option( 'adk_feeduser' );
	$pwd = get_option( 'adk_feedpwd' );
	$feed = new Feed( $user, $pwd );

	$list = $feed->query();

	$propertyTypes    = $feed->propertyTypesAsSelect();
	$transactionTypes = $feed->transactionTypesAsSelect();
	$buildingTypes    = $feed->buildingTypesAsSelect();
	$bedrooms         = $feed->bedroomsAsSelect();
	$bathrooms        = $feed->bathroomsAsSelect();
	$squareFeet       = $feed->squareFeetAsSelect();
	$price            = $feed->priceAsSelect();
	// var_dump( $propertyTypes );
	?>

	<form id="search-form" action="" method="POST">
		<div class="search-row">
			<?php
				echo $propertyTypes;
				echo $transactionTypes;
				echo $buildingTypes;
				echo $bedrooms;
				echo $bathrooms;
				echo $squareFeet;
				echo $price;
			?>
			<input id="page" type="hidden" name="page" value="1">
		</div>
		<div class="search-row">
			<button type="submit"><?php _e( 'Search', 'adk_feed' ); ?></button>
		</div>
	</form>


	<section id="wplistings-featured-listings-11" class="widget wplistings-featured-listings clearfix amr_widget">
		<h2 class="widget-title">Search results</h2>
		<?php
		$i = 0;
		
		foreach( $list as $l ):
			$is_first = 0 === $i % 3 ? 'first' : '';
			$photo = isset( $l->photos[ 0 ] ) ? $l->photos[ 0 ] : [ '', '' ]; // 607 x 480
			$price = number_format( $l->price );

			echo <<<HTML
		<div class="listing one-third $is_first">
			<div class="listing-wrap">
				<div class="listing-widget-thumb">
					<a href="http://kulnijjar.ca/listings/for-sale-8957-jacobs-subdivision-rd/" class="listing-image-link">
						<img src="{$photo[ 0 ]}" class="attachment-listings size-listings wp-post-image" alt="{$photo[ 1 ]}" />
					</a>
					<span class="listing-status for-sale">{$l->transaction_type}</span>
					<div class="listing-thumb-meta">
						<span class="listing-property-type">{$l->property_type}</span>
						<span class="listing-price"><span class="currency-symbol">$</span>$price </span>
					</div><!-- .listing-thumb-meta -->
				</div><!-- .listing-widget-thumb -->
				<div class="listing-widget-details">
					<h3 class="listing-title">
						<a href="http://kulnijjar.ca/listings/for-sale-8957-jacobs-subdivision-rd/">{$l->transaction_type}: {$l->address}</a>
					</h3>
					<p class="listing-address">
						<span class="listing-address">{$l->address}</span><br />
						<span class="listing-city-state-zip">{$l->city}, BC {$l->zip_code}</span>
					</p>
					<ul class="listing-beds-baths-sqft">
						<li class="beds">{$l->bedrooms}<span>Beds</span></li> 
						<li class="baths">{$l->bathrooms}<span>Baths</span></li> 
						<li class="sqft">{$l->square_feet}<span>Sq ft</span></li>
					</ul>
				</div><!-- .listing-widget-details -->
				<a href="http://kulnijjar.ca/listings/for-sale-8957-jacobs-subdivision-rd/" class="button btn-primary more-link">View Listing</a>
			</div>
		</div>
HTML;
		$i++;
	endforeach;
	?>
	</section>

	<?php echo $feed->pagination(); ?>

	<script>
		+function( $ ) {
			$( ".page-item" ).not( ".active" ).not( ".disabled" ).on( "click", paginate );


			function paginate() {
				$( "#page" ).val( $( this ).attr( "data-page" ) );
				$( "#search-form" ).submit();
			}
		}( jQuery );
	</script>


	

	<?php  echo "<a href='http://www.kulnijjar.ca#slide-Listings'>&#8592; Go Back</a>"; ?>
</div>
<div style="padding:40px 0 0 0"></div>

<?php get_footer(); ?>
