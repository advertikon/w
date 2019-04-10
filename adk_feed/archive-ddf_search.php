<?php get_header(); ?>
<?php
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
?>

<style>
.page-item {
	display: inline-block;
	padding: 10px 0;
	width: 35px;
	text-align: center;
	cursor: pointer;
	background-color: #ecb53e;
	color: white;
	border: solid 2px #e1c07;
	font-size: 16px;
	font-weight: bold;
	border-radius: 3px;
}

.page-item.active {
	cursor: default;
	background-color: #815800;
	border-color: #926c34;
}

.page-item.disabled {
	cursor: default;
	background-color: #f2f2f2;
	border: solid 2px #e1e1e1;
	color: #ecb53e;
}

.pagination-wrapper{
	margin: 0 auto;
	max-width: 100%;
}

.pagination {
	display: flex;
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
	//$file = __DIR__ . '/../../plugins/adk_feed/adk_feed.php';

	ADKCache::flush();

	$user = get_option( 'adk_feeduser' );
	$pwd = get_option( 'adk_feedpwd' );
	$feed = new Feed( $user, $pwd );

	$list = $feed->query();
	?>

	<script>var $ = jQuery;</script>

	<link type="text/css"rel="stylesheet" href="<?php echo plugins_url( 'adk_feed/assets/stylesheets/desktop.css' ); ?>"/>
	<link type="text/css"rel="stylesheet" href="<?php echo plugins_url( 'adk_feed/assets/stylesheets/wp-listings.css' ); ?>"/>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

	<script src="<?php echo plugins_url( 'adk_feed/assets/javascripts/desktop.js' ); ?>"></script>
	<script src="<?php echo plugins_url( 'adk_feed/assets/javascripts/routing.js' ); ?>"></script>
	<script src="<?php echo plugins_url( 'adk_feed/assets/javascripts/translation.js' ); ?>"></script>
	<script src="<?php echo plugins_url( 'adk_feed/assets/javascripts/config.js' ); ?>"></script>
	<script src="<?php echo plugins_url( 'adk_feed/assets/javascripts/desktopExt.js' ); ?>"></script>

	<!-- <script src="https://www.realtor.ca/scripts/foresee/foresee-ACS-Live.js"></script> -->
	<!-- <script src="https://www.realtor.ca/cndnrlsttdstl.js"></script> -->

	<style>

	#realtorValueCarousel {
		margin: 25px 0 25px 0;
	}

	.select2-container--default .select2-search--inline .select2-search__field {
		min-width: 100% !important;
	}

	.homeFilterCon .select2-container .select2-search--inline .select2-search__field {
		margin-top: 0px !important;
		width: auto !important;
	}

	.homeFilterCon .itemsSelectedLbl {
		color: #444 !important;
	}

	.homeFilterCon ::placeholder {
		color: #999 !important;
	}

	.homeFilterCon :-ms-input-placeholder {
		color: #999 !important;
	}

	.homeFilterCon ::-ms-input-placeholder {
		color: #999 !important;
	}

	.select2-container--default .select2-selection--multiple .select2-selection__rendered {
		vertical-align: middle;
	}

	.homeFilterCon .select2-selection__arrow {
		width: 15px !important;
	}

	.homeFilterCon .select2-container {
		box-sizing: content-box;
		padding: 10px 5px 10px 5px;
	}

		.homeFilterCon .select2-container .select2-selection--multiple {
			min-height: initial !important;
		}

	.homeFilterCon .select2-selection--multiple .select2-selection__rendered li {
		line-height: 28px !important;
	}

	#MinRentTop .select2-container,
	#MaxRentTop .select2-container,
	#MinPriceTop .select2-container,
	#MaxPriceTop .select2-container {
		width: 135px !important;
	}

	#BathsTop .select2-container {
		width: 105px !important;
	}

	#BedsTop .select2-container {
		width: 120px !important;
	}

	#ZoningTypeTop .select2-container {
		width: 150px !important;
	}


	#NumberOfUnitsTop .select2-container {
		width: 160px !important;
	}

	#LandSizeTop .select2-container {
		width: 185px !important;
	}


	#BuildingSpaceTop .select2-container {
		width: 180px !important;
	}

	#FarmTypeTop .select2-container {
		width: 180px !important;
	}

	#TransactionTypeTopCom .select2-container,
	#TransactionTypeTopRes .select2-container,
	#ParkingTypeTop .select2-container {
		width: 195px !important;
	}

	#homeMoreFiltersNum {
		font-size: 12px;
		position: absolute;
		top: -6px;
		right: -4px;
		background: #7b7b7b;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		text-align: center;
		padding: 2px;
		box-sizing: border-box;
		color: #fff;
		z-index: 1;
	}
</style>
<!-- <form id="search-form" action="" method="POST"> -->
<div id="homeHeaderCon" class="fullWidth" style="background-image: url( '<?php echo plugins_url( 'adk_feed/assets/images/residential-banner-1.jpg'); ?>' );">
	<div id="homeHeaderInnerCon">
		<h1 id="homeHeaderTitle" class="headerImageText" style="color: white;"> Search <span style="font-size:larger;"><?php echo number_format( $feed->totalRecords() ); ?></span> listings from trusted realtors</h1>
		<div id="homeHeaderSearchCon">

			<div id="homeSearchCon">

				<div id="homeSearchInnerCon">
					<!-- <div id="homeSearchTabCon" data-hashkey="PropertyTypeGroupId" data-valueclass="active">
						<div id="homeResidentialTab" class="homeSearchTab active">
							<img id="homeResidentialTabIcon" src='<?php echo plugins_url( 'adk_feed/assets/images/house-white.svg' ); ?>' data-value="1" style="height: 16px; width: 16px; margin-right: 5px;" / alt="" /><?php _e( 'Residential', 'adk_feed' ); ?>
						</div>
						<div id="homeCommercialTab" class="homeSearchTab ">
							<img id="homeCommercialTabIcon" src='<?php echo plugins_url( 'adk_feed/assets/images/commercial-white.svg' ); ?>' data-value="2" style="height: 16px; width: 16px; margin-right: 5px;" / alt="" /><?php _e( 'Commercial' ,'adk_feed' ); ?>
						</div>
					</div> -->

					<div style="display: table; width: 100%; table-layout: fixed;">
						<div id="homeSearchInputCon">
							<div id="homeSearchInputInnerCon">
								<div id="homeSearchTxtCon" style="width: 100%;">
									<input type="text" autocomplete="city" placeholder="city" style="display: none">
									<input id="homeSearchTxt" type="text" autocomplete="new-password" spellcheck="false" placeholder="<?php _e( 'City or address', 'adk_feed' ); ?>"
									<?php if(isset($_POST['mls']) && !empty(trim($_POST['mls'])))echo 'value="' . $_POST['mls'] . '"'; ?> />
								</div>
								<div id="homePrimaryFilterOuterCon">
									<div id="homePrimaryFilterCon">
										<div class="homeFilterCon" id="TransactionTypeTopRes" style="display: none;">
										   <?php echo $feed->transactionTypesAsSelect( 'ddlTransactionTypeTopRes' ); ?>
										</div>
										<!-- <div class="homeFilterCon" id="TransactionTypeTopCom" style="display: none;">
										   <?php echo $feed->transactionTypesAsSelect( 'ddlTransactionTypeTopCom' ); ?>
										</div> -->
										<div class="homeFilterCon" id="MinRentTop" style="display: none;">
											<?php echo $feed->minRentAsSelect( 'ddlMinRentTop' ); ?>
										</div>
										<div class="homeFilterCon" id="MaxRentTop" style="display: none;">
											<?php echo $feed->maxRentAsSelect( 'ddlMaxRentTop' ); ?>
										  
										</div>
										<div class="homeFilterCon" id="MinPriceTop">
											<?php echo $feed->minPriceAsSelect( 'ddlMinPriceTop' ); ?>
										</div>
										<div class="homeFilterCon" id="MaxPriceTop">
											<?php echo $feed->maxPriceAsSelect( 'ddlMaxPriceTop' ); ?>
										</div>
										<div class="homeFilterCon" id="BedsTop">
											<?php echo $feed->bedroomsAsSelect( 'ddlBedsTop' ); ?>
										</div>
										<div class="homeFilterCon" id="BathsTop">
											<?php echo $feed->bathroomsAsSelect( 'ddlBathsTop' ); ?>
										</div>
										<div class="homeFilterCon" id="NumberOfUnitsTop" style="display: none;">
											<label for="ddlNumberOfUnitsTop">Number of Units</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlNumberOfUnitsTop$ctl00" data-hashkey="UnitRange" data-placeholder="Number of Units" id="ddlNumberOfUnitsTop">
	<option value="0-0">Any </option>
	<option value="1-1">One</option>
	<option value="1-0">One or more</option>
	<option value="2-2">Two</option>
	<option value="2-0">Two or more</option>
	<option value="3-3">Three</option>
	<option value="3-0">Three or more</option>
	<option value="4-4">Four</option>
	<option value="4-0">Four or more</option>
	<option value="1-4">Less than five</option>
	<option value="5-5">Five</option>
	<option value="5-0">Five or more</option>
	<option value="6-6">Six</option>
	<option value="6-0">Six or more</option>
	<option value="7-7">Seven</option>
	<option value="7-0">Seven or more</option>
	<option value="8-8">Eight</option>
	<option value="8-0">Eight or more</option>
	<option value="9-9">Nine</option>
	<option value="9-0">Nine or more</option>

</select>
										</div>
										<div class="homeFilterCon" id="BuildingSpaceTop" style="display: none;">
											<?php echo $feed->buildingSizeAsSelect( 'ddlBuildingSpaceTop' ); ?>
										</div>
										<div class="homeFilterCon" id="FarmTypeTop" style="display: none;">
											<label for="ddlFarmTypeTop">Farm Type</label>
											<select size="3" name="ctl00$MainContent$ctl00$ctl00$ddlFarmTypeTop$ctl00" multiple="multiple" data-hashkey="FarmTypeId" data-placeholder="Farm Type" id="ddlFarmTypeTop">
	<option value="1">Animal</option>
	<option value="3">Cash Crop</option>
	<option value="7">Hobby Farm</option>
	<option value="6">Market Gardening</option>
	<option value="5">Nursery</option>
	<option value="10">Greenhouse</option>
	<option value="9">Orchard</option>
	<option value="8">Vineyard</option>
	<option value="4">Feed Lot</option>
	<option value="2">Boarding</option>
	<option value="12">Mixed</option>

</select>
										</div>
										<div class="homeFilterCon" id="ParkingTypeTop" style="display: none;">
											<label for="ddlParkingTypeTop">Parking Type</label>
											<select size="3" name="ctl00$MainContent$ctl00$ctl00$ddlParkingTypeTop$ctl00" multiple="multiple" data-hashkey="ParkingTypeId" data-placeholder="Parking Type" id="ddlParkingTypeTop">
	<option value="35">Boat House</option>
	<option value="36">Concrete</option>
	<option value="37">Heated Garage</option>
	<option value="1">Attached garage</option>
	<option value="2">Integrated garage</option>
	<option value="3">Detached garage</option>
	<option value="4">Garage</option>
	<option value="5">Carport</option>
	<option value="6">Underground</option>
	<option value="7">Indoor</option>
	<option value="8">Open</option>
	<option value="9">Covered</option>
	<option value="10">Parking pad</option>
	<option value="11">Paved Yard</option>

</select>
										</div>
										<div class="homeFilterCon" id="LandSizeTop" style="display: none;">
											<?php echo $feed->squareFeetAsSelect( 'ddlLandSizeTop' ); ?>
										</div>
										<div class="homeFilterCon" id="ZoningTypeTop" style="display: none;">
											<label for="ddlZoningTypeTop">Zoning Type</label>
											<select size="3" name="ctl00$MainContent$ctl00$ctl00$ddlZoningTypeTop$ctl00" multiple="multiple" data-hashkey="ZoningTypeGroupId" data-placeholder="Zoning Type" id="ddlZoningTypeTop">
	<option value="4">Commercial Retail</option>
	<option value="3">Commercial Office</option>
	<option value="2">Commercial Mixed</option>
	<option value="5">Industrial</option>
	<option value="7">Industrial-Light</option>
	<option value="8">Industrial-Medium</option>
	<option value="6">Industrial-Heavy</option>
	<option value="13">Residential-Low Density</option>
	<option value="14">Residential - Medium Density</option>
	<option value="12">Residential-High Density</option>
	<option value="9">Institutional</option>
	<option value="1">Agricultural</option>
	<option value="11">Recreational</option>
	<option value="10">Other</option>

</select>
										</div>

									</div>
								</div>
							</div>
							<div id="homeSearchBtn" class="greenCircleBtn feed-btn circleBtn">
								<i id="homeSearchIcon" class="material-icons" style="color: white;">search</i>
							</div>
						</div>
						<div style="display: table-cell; vertical-align: middle; width: 145px;">
							<div id="homeSearchMoreBtn" class="btnWithIcon feed-btn" style="color: #23A1C0;">
								<div id="homeMoreFltersBtnText" class="btnWithIconText">
									Filters
								</div>
								<div class="materialIconCon" style="display: table-cell; background-color: #23A1C0;">
									
									<img id="homeFiltersIcon" src="<?php echo plugins_url( 'adk_feed/assets/images/filter.svg' ); ?>" style="height: 14px;" / alt="" />
								</div>
								<div id="homeMoreFiltersNum" style="display: none">0</div>
							</div>
						</div>
					</div>



					<div id="homeSearchMoreBtnCon" style="display: none;">
						<div style="display: table-cell; text-align: left; vertical-align: middle;">
							<div id="homeSearchMoreFiltersTitle">Search Filters</div>
						</div>
					</div>

					<div id="homeSearchMoreCon" class="hide">
						<div id="homeSearchMoreFiltersInnerCon">

							<div class="homeMoreFilterCon" id="propertyTypeRes">
								<?php echo $feed->propertyTypesAsSelect( 'ddlPropertyTypeRes' ); ?>
							</div>
							<div class="homeMoreFilterCon" id="propertyTypeCom">
								<?php echo $feed->propertyTypesAsSelect( 'ddlPropertyTypeCom' ); ?>
							</div>

							<div class="homeMoreFilterCon" id="transactionTypeRes">
								 <?php echo $feed->transactionTypesAsSelect( 'ddlTransactionTypeRes' ); ?>
							</div>

							<div class="homeMoreFilterCon" id="transactionTypeCom">
								<?php echo $feed->transactionTypesAsSelect( 'ddlTransactionTypeCom' ); ?>
							</div>

							<div class="homeMoreFilterCon" id="rentMin">
								<?php echo $feed->minRentAsSelect( 'ddlMinRent' ); ?>
							</div>

							<div class="homeMoreFilterCon" id="rentMax">
								<?php echo $feed->maxRentAsSelect( 'ddlMaxRent' ); ?>
							</div>
							<div class="homeMoreFilterCon" id="priceMin">
								<?php echo $feed->minPriceAsSelect( 'ddlMinPrice' ); ?>
							</div>
							<div class="homeMoreFilterCon" id="priceMax">
								<?php echo $feed->maxPriceAsSelect( 'ddlMaxPrice' ); ?>
							</div>


							<div class="homeMoreFilterCon" id="beds">
								<?php echo $feed->bedroomsAsSelect( 'ddlBeds' ); ?>
							</div>

							<div class="homeMoreFilterCon" id="baths">
								<?php echo $feed->bathroomsAsSelect( 'ddlBaths' ); ?>
							</div>

							<div class="homeMoreFilterCon" id="numberOfUnits">
								<label for="ddlNumberOfUnits" class="dropdownLabel">Number of Units</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlNumberOfUnits$ctl00" data-hashkey="UnitRange" data-default="0-0" id="ddlNumberOfUnits">
	<option value="0-0">Any </option>
	<option value="1-1">One</option>
	<option value="1-0">One or more</option>
	<option value="2-2">Two</option>
	<option value="2-0">Two or more</option>
	<option value="3-3">Three</option>
	<option value="3-0">Three or more</option>
	<option value="4-4">Four</option>
	<option value="4-0">Four or more</option>
	<option value="1-4">Less than five</option>
	<option value="5-5">Five</option>
	<option value="5-0">Five or more</option>
	<option value="6-6">Six</option>
	<option value="6-0">Six or more</option>
	<option value="7-7">Seven</option>
	<option value="7-0">Seven or more</option>
	<option value="8-8">Eight</option>
	<option value="8-0">Eight or more</option>
	<option value="9-9">Nine</option>
	<option value="9-0">Nine or more</option>

</select>
							</div>


							<div class="homeMoreFilterCon" id="parkingType">
								<?php echo $feed->parkingTypeAsSelect( 'ddlParkingTypee' ); ?>
							</div>
							<div class="homeMoreFilterCon checkbox" id="openHouse">
								<div class="homeFilter">
									<input type="checkbox" id="chkOpenHouse" value="1" data-hashkey="open_house" <?php echo empty( $_POST['open_house'] ) ? '' : "checked='checked'"; ?>/>
									<label for="chkOpenHouse" class="checkboxLabel">Open Houses Only</label>
								</div>
							</div>
							<div class="homeMoreFilterCon" id="keywords">
								<label for="txtKeywords" class="textboxLabel">Keywords</label>
								<i style="display: none;" class="fa fa-question-circle inputHelperIcon" aria-hidden="true" id="KeywordToolTip" data-tooltipid="KeywordsTooltip"></i>
								<select multiple="multiple" id="txtKeywords" data-hashkey="Keywords" data-validation="keywords">
									<?php echo $feed->get_keywords(); ?>
								</select>
							</div>

							<div class="homeMoreFilterCon" id="hospitalityBuildingType">
								
							</div>

							<div class="homeMoreFilterCon" id="ddlInstitutionalBuildingType">
								
							</div>

							<div class="homeMoreFilterCon" id="industrialBuildingType">
								
							</div>

							<div class="homeMoreFilterCon" id="retailBuildingType">
								
							</div>

							<div class="homeMoreFilterCon" id="buildingType">
								<?php $feed->buildingTypesAsSelect( 'ddlBuildingType' ); ?>
							   
							</div>

							<div class="homeMoreFilterCon" id="buildingSpace">
								<?php echo $feed->buildingSizeAsSelect( 'ddlBuildingSpace' ); ?>
							</div>

							<div class="homeMoreFilterCon" id="landSize">
								<?php echo $feed->squareFeetAsSelect( 'ddlLandSize' ); ?>
								<label for="ddlLandSize" class="dropdownLabel">Land Size</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlLandSize$ctl00" data-hashkey="LandSizeRange" id="ddlLandSize">
	<option value=" ">Any</option>
	<option value="1-0">1+ acres</option>
	<option value="2-0">2+ acres</option>
	<option value="5-0">5+ acres</option>
	<option value="10-0">10+ acres</option>
	<option value="50-0">50+ acres</option>
	<option value="100-0">100+ acres</option>
	<option value="200-0">200+ acres</option>
	<option value="300-0">300+ acres</option>
	<option value="400-0">400+ acres</option>
	<option value="500-0">500+ acres</option>
	<option value="1000-0">1000+ acres</option>

</select>
							</div>

							<div class="homeMoreFilterCon" id="farmType">
								<?php echo $feed->farmTypeAsSelect( 'ddlFarmTypee' ); ?>
							</div>

							<div class="homeMoreFilterCon" id="zoningType">
								<?php echo $feed->zoningTypeAsSelect( 'ddlZoningTypee' ); ?>
							</div>

							<input type="text" id="txtPropertyTypeGroupID" value="1" class="hiddenSearchFilter" style="display: none" data-hashkey="PropertyTypeGroupID" />
						</div>
						<div id="homeSearchMoreFiltersFooterCon">



							<div id="homeMoreFiltersResetBtn" class="btnWithIcon onWhite feed-btn" style="color: #23A1C0;">
								<div id="homeMoreFltersResetBtnText" class="btnWithIconText">
									Reset
								</div>
								<div class="materialIconCon" style="background-color: #23A1C0;">
									<span style="font-size: 24px; color: white;" class="m_al fa fa-undo"></span>
								</div>
							</div>

							<div id="homeMoreFiltersSearchBtn" class="greenRoundedBtn wideButton feed-btn">Search</div>

							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

	<input id="page" type="hidden" name="page" value="1">


	<section id="wplistings-featured-listings-11" class="widget wplistings-featured-listings clearfix amr_widget">
		<h2 class="widget-title">Search results</h2>
		<?php
		$i = 0;
		
		foreach( $list as $l ):
			$is_first = 0 === $i % 3 ? 'first' : '';
			$photo = isset( $l->photos[ 0 ] ) ? $l->photos[ 0 ] : [ '', '' ]; // 607 x 480
			$price = number_format( $l->price );
			$lot_size = $l->lot_size ? number_format( $l->lot_size, 2 ) : 0;
			$seo_url = '/ddf-listing/' . str_replace( [ ' ' ], '_', $l->address ) . '-' . $l->id;

			echo <<<HTML
		<div class="listing one-third $is_first">
			<div class="listing-wrap">
				<div class="listing-widget-thumb">
					<a href="$seo_url" class="listing-image-link">
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
						<a href="$seo_url">{$l->transaction_type}: {$l->address}</a>
					</h3>
					<p class="listing-address">
						<span class="listing-address">{$l->address}</span><br />
						<span class="listing-city-state-zip">{$l->city}, BC {$l->zip_code}</span>
					</p>
					<ul class="listing-beds-baths-sqft">
						<li class="beds">{$l->bedrooms}<span>Beds</span></li> 
						<li class="baths">{$l->bathrooms}<span>Baths</span></li> 
						<li class="sqft">{$lot_size}<span>acres</span></li>
					</ul>
				</div><!-- .listing-widget-details -->
				<a href="/ddf-listing/foo-{$l->id}" class="button btn-primary more-link">View Listing</a>
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
				getFilters( $( this ).attr( "data-page" ) );
			}
		}( jQuery );
	</script>

	<?php  echo "<a href='http://www.kulnijjar.ca#slide-Listings'>&#8592; Go Back</a>"; ?>
</div>
<div style="padding:40px 0 0 0"></div>

<script>
	var
		topItems = [ "MinPriceTop", "MaxPriceTop", "BedsTop", "BathsTop" ],
		bottomItems = [ "propertyTypeRes" , "transactionTypeRes", "priceMin", "priceMax", "baths", "beds", ];

	(function ($) {
		var
			model = new IndexPageModel(),
			IndexPage = new Desktop.Pages.Index(model, 'MainContent_ctl00_ctl00');

		$.each( topItems, function() {
			$( "#" + this ).show().find( "select" ).trigger( "change" );
		} );

		$.each( bottomItems, function() {
			$( "#" + this ).show().find( "select" ).trigger( "change" );
		} );

		$( "#homeHeaderCon select" ).on( "change", setValue );
	}(jQuery));

	$( document ).ready( function( $ ) {
		$( "#homeHeaderCon select" ).each( function() {
			var select = $( this );

			$( this ).find( "option" ).each( function() {
				if( $( this ).attr( "selected" ) ) {
					console.log( $( this ).attr( "value" ) );
					select.val( $( this ).attr( 'value' ) ).trigger( "change" );
				}
			} );
		} );
	} );

	function updateOrdering() {
		var
			transactionType = $( "[data-hashkey=transaction_type]" ).eq( 0 ).val().toLowerCase(),
			propertyType    = $( "[data-hashkey=property_type]" ).eq( 0 ).val();

		propertyType = propertyType ? propertyType.toLowerCase() : '';

		$( "#homeSearchMoreFiltersInnerCon > div " ).hide();
		$( "#homePrimaryFilterCon > div " ).hide();


		topItems    = [];
		bottomItems = [ "propertyTypeRes" , "transactionTypeRes" ];
		//console.log( transactionType );

		switch( transactionType ) {
			case 'for rent':
			case 'for lease':
				topItems.push( "MinRentTop" );
				topItems.push( "MaxRentTop" );
				bottomItems.push( "rentMin" );
				bottomItems.push( "rentMax" );
				//console.log( "Transaction: rent" );
			break;
			default:
				topItems.push( "MinPriceTop" );
				topItems.push( "MaxPriceTop" );
				bottomItems.push( "priceMin" );
				bottomItems.push( "priceMax" );
				//console.log( "Transaction: sale" );
		}

		switch( propertyType ) {
			case 'vacant land':
				topItems.push( "LandSizeTop" );
				// topItems.push( "ZoningTypeTop" );

				bottomItems.push( "landSize" );
				bottomItems.push( "zoningType" );
				break;
			case 'single family':
			case 'multi-family':
				topItems.push( "BathsTop" );
				topItems.push( "BedsTop" );

				bottomItems.push( "baths" );
				bottomItems.push( "beds" );
				bottomItems.push( "keywords" );
				bottomItems.push( "buildingSpace" );
				bottomItems.push( "openHouse" );
				bottomItems.push( "zoningType" );
				bottomItems.push( "parkingType" );
				break;
			case 'office':
			case 'business':
			case 'industrial':
			case 'retail':
				topItems.push( "BuildingSpaceTop" );

				bottomItems.push( "buildingSpace" );
				bottomItems.push( "keywords" );
				break;
			case 'recreational':
				topItems.push( "BathsTop" );
				topItems.push( "BedsTop" );

				bottomItems.push( "baths" );
				bottomItems.push( "beds" );
				bottomItems.push( "keywords" );
				bottomItems.push( "buildingType" );
				//bottomItems.push( "openHouse" );
				bottomItems.push( "landSize" );
				break;
			case 'agriculture':
				topItems.push( "BathsTop" );
				topItems.push( "BedsTop" );

				bottomItems.push( "baths" );
				bottomItems.push( "beds" );
				bottomItems.push( "keywords" );
				bottomItems.push( "buildingType" );
				bottomItems.push( "openHouse" );
				bottomItems.push( "landSize" );
				bottomItems.push( "farmType" );
				break;
			case 'hospitality':
				topItems.push( "BuildingSpaceTop" );
				topItems.push( "LandSizeTop" );

				bottomItems.push( "landSize" );
				bottomItems.push( "buildingSpace" );
				bottomItems.push( "keywords" );
				break;
			default:
				bottomItems.push( "keywords" );

		}

		$.each( topItems, function() {
			$( "#" + this ).show();
		} );

		$.each( bottomItems, function() {
			$( "#" + this ).show();
		} );
	}

	function setValue() {
		$( "[data-hashkey=" + $( this ).attr( "data-hashkey" ) + "]" ).not( this ).val( $( this ).val() );
	}

	function getFilters( page ) {
		var
			data = {},
			form, e;

		$.each( bottomItems, function() {
			var e = $( "#" + this ).find( "select,input" );

			if ( e.val() ) {
				if ( e.attr( 'type' ) && !e.is( ":checked" ) ) {
					return;
				}

				data[ e.attr( "data-hashkey" ) ] = e.val();
			}
		} );

		if ( $( "#homeSearchTxt" ).val() ) {
			data.mls = $( "#homeSearchTxt" ).val();
		}

		if ( page ) {
			data.page = page;

		} else {
			data.page = 1;
		}

		console.log( data );

		if( !$.isEmptyObject( data ) ) {
			form = $( "<form method='POST'>" );

			$.each( data, function( k ,v ) {
				e = $( "<input type='hidden' value='" + v + "' name='" +  k +"'>" );
				e.appendTo( form );
			} );
		}

		form.appendTo( $( 'body' ) ).submit();
	}

</script>

<?php get_footer(); ?>
