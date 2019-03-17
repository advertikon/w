<?php get_header(); ?>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
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

/*#search-form label {
	width: 33%;
	display: inline-block;
	margin-top: 15px;
}

#search-form label .selectboxit-container,
#search-form label .selectboxit {
	width: 98%!important;
	background-image: none!important;
	background-color: white;
}

#search-form label .selectboxit-options {
	width: 98%;
}

.search-row {
	margin-bottom: 10px;
}

#search-form {
	margin: 15px 0;
}

#search-form button {
	background-color: #e0b13c;
	font-weight: bold;
	color: white;
	border-radius: 5px;
	position: relative;
	left: calc(100% - 160px);
	width: 160px;
	height: 50px;
	font-size: 20px;
}*/

/*@media ( max-width: 600px ) {
	#search-form label {
		width: 100%;
	}
}*/
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

	// $propertyTypes    = $feed->propertyTypesAsSelect();
	// $transactionTypes = $feed->transactionTypesAsSelect();
	// $buildingTypes    = $feed->buildingTypesAsSelect();
	// $bedrooms         = $feed->bedroomsAsSelect();
	// $bathrooms        = $feed->bathroomsAsSelect();
	// $squareFeet       = $feed->squareFeetAsSelect();
	// $price            = $feed->priceAsSelect();
	// var_dump( $propertyTypes );
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
<form id="search-form" action="" method="POST">
<div id="homeHeaderCon" class="fullWidth" style="background-image: url( '<?php echo plugins_url( 'adk_feed/assets/images/residential-banner-1.jpg'); ?>' );">
	<div id="homeHeaderInnerCon">
		<h1 id="homeHeaderTitle" class="headerImageText" style="color: white;"> Search <span style="font-size:larger;">283,726</span> listings from trusted REALTORS<sup>®</sup></h1>
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
									<input id="homeSearchTxt" type="text" autocomplete="new-password" spellcheck="false" placeholder="<?php _e( 'City, Neighbourhood or MLS® number', 'adk_ffed' ); ?>" />
								</div>
								<div id="homePrimaryFilterOuterCon">
									<div id="homePrimaryFilterCon">
										<div class="homeFilterCon" id="TransactionTypeTopRes" style="display: none;">
										   <?php echo $feed->transactionTypesAsSelect( 'ddlTransactionTypeTopRes' ); ?>
										</div>
										<!-- <div class="homeFilterCon" id="TransactionTypeTopCom" style="display: none;">
										   <?php echo $feed->transactionTypesAsSelect( 'ddlTransactionTypeTopCom' ); ?>
										</div> -->
									   <!--  <div class="homeFilterCon" id="TransactionTypeCom" style="display: none;">
											<label for="ddlTransactionTypeTop">Transaction Type</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlTransactionTypeTopCom$ctl00" data-default="2" data-hashkey="TransactionTypeId" data-placeholder="Transaction Type" id="ddlTransactionTypeTopCom">
	<option value="2">For sale</option>
	<option value="3">For rent</option>

</select>
										</div> -->
										<div class="homeFilterCon" id="MinRentTop" style="display: none;">
											<?php echo $feed->minRentAsSelect( 'ddlMinRentTop' ); ?>
										  <!--   <label for="ddlMinRentTop">Min Rent</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlMinRentTop$ctl00" data-hashkey="RentMin" data-placeholder="Min Rent" id="ddlMinRentTop">
	<option value="0">0</option>
	<option value="100">100</option>
	<option value="200">200</option>
	<option value="300">300</option>
	<option value="400">400</option>
	<option value="500">500</option>
	<option value="600">600</option>
	<option value="700">700</option>
	<option value="800">800</option>
	<option value="900">900</option>
	<option value="1000">1,000</option>
	<option value="1200">1,200</option>
	<option value="1400">1,400</option>
	<option value="1600">1,600</option>
	<option value="1800">1,800</option>
	<option value="2000">2,000</option>
	<option value="2500">2,500</option>
	<option value="3000">3,000</option>
	<option value="3500">3,500</option>
	<option value="4000">4,000</option>
	<option value="4500">4,500</option>
	<option value="5000">5,000</option>
	<option value="6000">6,000</option>
	<option value="7000">7,000</option>
	<option value="8000">8,000</option>
	<option value="9000">9,000</option>
	<option value="10000">10,000</option>

</select> -->
										</div>
										<div class="homeFilterCon" id="MaxRentTop" style="display: none;">
											<?php echo $feed->maxRentAsSelect( 'ddlMaxRentTop' ); ?>
										   <!--  <label for="ddlMaxRentTop">Max Rent</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlMaxRentTop$ctl00" data-hashkey="RentMax" data-placeholder="Max Rent" id="ddlMaxRentTop">
	<option value="0">Unlimited</option>
	<option value="100">100</option>
	<option value="200">200</option>
	<option value="300">300</option>
	<option value="400">400</option>
	<option value="500">500</option>
	<option value="600">600</option>
	<option value="700">700</option>
	<option value="800">800</option>
	<option value="900">900</option>
	<option value="1000">1,000</option>
	<option value="1200">1,200</option>
	<option value="1400">1,400</option>
	<option value="1600">1,600</option>
	<option value="1800">1,800</option>
	<option value="2000">2,000</option>
	<option value="2500">2,500</option>
	<option value="3000">3,000</option>
	<option value="3500">3,500</option>
	<option value="4000">4,000</option>
	<option value="4500">4,500</option>
	<option value="5000">5,000</option>
	<option value="6000">6,000</option>
	<option value="7000">7,000</option>
	<option value="8000">8,000</option>
	<option value="9000">9,000</option>
	<option value="10000">10,000</option>

</select> -->
										</div>
										<div class="homeFilterCon" id="MinPriceTop">
											<?php echo $feed->minPriceAsSelect( 'ddlMinPriceTop' ); ?>
										   <!--  <label for="ddlMinPriceTop">Min Price</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlMinPriceTop$ctl00" data-hashkey="PriceMin" data-default="0" data-placeholder="Min Price" id="ddlMinPriceTop">
	<option value="0">0</option>
	<option value="25000">25,000</option>
	<option value="50000">50,000</option>
	<option value="75000">75,000</option>
	<option value="100000">100,000</option>
	<option value="125000">125,000</option>
	<option value="150000">150,000</option>
	<option value="175000">175,000</option>
	<option value="200000">200,000</option>
	<option value="225000">225,000</option>
	<option value="250000">250,000</option>
	<option value="275000">275,000</option>
	<option value="300000">300,000</option>
	<option value="325000">325,000</option>
	<option value="350000">350,000</option>
	<option value="375000">375,000</option>
	<option value="400000">400,000</option>
	<option value="425000">425,000</option>
	<option value="450000">450,000</option>
	<option value="475000">475,000</option>
	<option value="500000">500,000</option>
	<option value="550000">550,000</option>
	<option value="600000">600,000</option>
	<option value="650000">650,000</option>
	<option value="700000">700,000</option>
	<option value="750000">750,000</option>
	<option value="800000">800,000</option>
	<option value="850000">850,000</option>
	<option value="900000">900,000</option>
	<option value="950000">950,000</option>
	<option value="1000000">1,000,000</option>
	<option value="1100000">1,100,000</option>
	<option value="1200000">1,200,000</option>
	<option value="1300000">1,300,000</option>
	<option value="1400000">1,400,000</option>
	<option value="1500000">1,500,000</option>
	<option value="1600000">1,600,000</option>
	<option value="1700000">1,700,000</option>
	<option value="1800000">1,800,000</option>
	<option value="1900000">1,900,000</option>
	<option value="2000000">2,000,000</option>
	<option value="2500000">2,500,000</option>
	<option value="3000000">3,000,000</option>
	<option value="3500000">3,500,000</option>
	<option value="4000000">4,000,000</option>
	<option value="4500000">4,500,000</option>
	<option value="5000000">5,000,000</option>
	<option value="5500000">5,500,000</option>
	<option value="6000000">6,000,000</option>
	<option value="6500000">6,500,000</option>
	<option value="7000000">7,000,000</option>
	<option value="7500000">7,500,000</option>
	<option value="10000000">10,000,000</option>
	<option value="15000000">15,000,000</option>
	<option value="20000000">20,000,000</option>

</select> -->
										</div>
										<div class="homeFilterCon" id="MaxPriceTop">
											<?php echo $feed->maxPriceAsSelect( 'ddlMaxPriceTop' ); ?>
											<!-- <label for="ddlMaxPriceTop">Max Price</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlMaxPriceTop$ctl00" data-hashkey="PriceMax" data-default="0" data-placeholder="Max Price" id="ddlMaxPriceTop">
	<option value="0">Unlimited</option>
	<option value="25000">25,000</option>
	<option value="50000">50,000</option>
	<option value="75000">75,000</option>
	<option value="100000">100,000</option>
	<option value="125000">125,000</option>
	<option value="150000">150,000</option>
	<option value="175000">175,000</option>
	<option value="200000">200,000</option>
	<option value="225000">225,000</option>
	<option value="250000">250,000</option>
	<option value="275000">275,000</option>
	<option value="300000">300,000</option>
	<option value="325000">325,000</option>
	<option value="350000">350,000</option>
	<option value="375000">375,000</option>
	<option value="400000">400,000</option>
	<option value="425000">425,000</option>
	<option value="450000">450,000</option>
	<option value="475000">475,000</option>
	<option value="500000">500,000</option>
	<option value="550000">550,000</option>
	<option value="600000">600,000</option>
	<option value="650000">650,000</option>
	<option value="700000">700,000</option>
	<option value="750000">750,000</option>
	<option value="800000">800,000</option>
	<option value="850000">850,000</option>
	<option value="900000">900,000</option>
	<option value="950000">950,000</option>
	<option value="1000000">1,000,000</option>
	<option value="1100000">1,100,000</option>
	<option value="1200000">1,200,000</option>
	<option value="1300000">1,300,000</option>
	<option value="1400000">1,400,000</option>
	<option value="1500000">1,500,000</option>
	<option value="1600000">1,600,000</option>
	<option value="1700000">1,700,000</option>
	<option value="1800000">1,800,000</option>
	<option value="1900000">1,900,000</option>
	<option value="2000000">2,000,000</option>
	<option value="2500000">2,500,000</option>
	<option value="3000000">3,000,000</option>
	<option value="3500000">3,500,000</option>
	<option value="4000000">4,000,000</option>
	<option value="4500000">4,500,000</option>
	<option value="5000000">5,000,000</option>
	<option value="5500000">5,500,000</option>
	<option value="6000000">6,000,000</option>
	<option value="6500000">6,500,000</option>
	<option value="7000000">7,000,000</option>
	<option value="7500000">7,500,000</option>
	<option value="10000000">10,000,000</option>
	<option value="15000000">15,000,000</option>
	<option value="20000000">20,000,000</option>

</select> -->
										</div>
										<div class="homeFilterCon" id="BedsTop">
											<?php echo $feed->bedroomsAsSelect( 'ddlBedsTop' ); ?>
										   <!--  <label for="ddlBedsTop">Beds</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlBedsTop$ctl00" data-hashkey="BedRange" data-default="0-0" data-placeholder="Beds" id="ddlBedsTop">
	<option value="0-0">Any</option>
	<option value="1-1">1</option>
	<option value="1-0">1+</option>
	<option value="2-2">2</option>
	<option value="2-0">2+</option>
	<option value="3-3">3</option>
	<option value="3-0">3+</option>
	<option value="4-4">4</option>
	<option value="4-0">4+</option>
	<option value="5-5">5</option>
	<option value="5-0">5+</option>

</select> -->
										</div>
										<div class="homeFilterCon" id="BathsTop">
											<?php echo $feed->bathroomsAsSelect( 'ddlBathsTop' ); ?>
										   <!--  <label for="ddlMinPriceTop">Baths</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlBathsTop$ctl00" data-hashkey="BathRange" data-placeholder="Baths" id="ddlBathsTop">
	<option value="0-0">Any</option>
	<option value="1-1">1</option>
	<option value="1-0">1+</option>
	<option value="2-2">2</option>
	<option value="2-0">2+</option>
	<option value="3-3">3</option>
	<option value="3-0">3+</option>
	<option value="4-4">4</option>
	<option value="4-0">4+</option>
	<option value="5-5">5</option>
	<option value="5-0">5+</option>

</select> -->
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
										   <!--  <label for="ddlBuildingSpaceTop">Building Size</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlBuildingSpaceTop$ctl00" data-hashkey="BuildingSizeRange" data-default="" data-placeholder="Building Size" id="ddlBuildingSpaceTop">
	<option value=" ">Any</option>
	<option value="0-5000">0-5,000 sqft</option>
	<option value="5001-10000">5,001 - 10,000 sqft</option>
	<option value="10001-15000">10,001 - 15,000 sqft</option>
	<option value="15001-20000">15,001 - 20,000 sqft</option>
	<option value="20001-25000">20,001 - 25,000 sqft</option>
	<option value="25001-30000">25,001 - 30,000 sqft</option>
	<option value="30001-35000">30,001 - 35,000 sqft</option>
	<option value="35001-40000">35,001 - 40,000 sqft</option>
	<option value="40001-45000">40,001 - 45,000 sqft</option>
	<option value="45001-50000">45,001 - 50,000 sqft</option>
	<option value="50001-75000">50,001 - 75,000 sqft</option>
	<option value="75001-100000">75,001 - 100,000 sqft</option>
	<option value="100001-150000">100,001 - 150,000 sqft</option>
	<option value="150001-200000">150,001 - 200,000 sqft</option>
	<option value="200001-250000">200,001 - 250,000 sqft</option>
	<option value="250001-0">Over 250,000 sqft</option>

</select> -->
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
											<label for="ddlLandSizeTop">Land Size</label>
											<select name="ctl00$MainContent$ctl00$ctl00$ddlLandSizeTop$ctl00" data-hashkey="LandSizeRange" data-placeholder="Land Size" id="ddlLandSizeTop">
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
<!--                                 <label for="ddlPropertyTypeRes" class="dropdownLabel">Property Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlPropertyTypeRes$ctl00" class="moreFilterDropdown" data-hashkey="PropertySearchTypeId" data-default="1" id="ddlPropertyTypeRes">
	<option value="0">No Preference</option>
	<option value="1">Residential</option>
	<option value="2">Recreational</option>
	<option value="3">Condo/Strata</option>
	<option value="8">Multi Family</option>
	<option value="4">Agriculture</option>
	<option value="5">Parking</option>
	<option value="6">Vacant Land</option>

</select> -->
							</div>
							<div class="homeMoreFilterCon" id="propertyTypeCom">
								<?php echo $feed->propertyTypesAsSelect( 'ddlPropertyTypeCom' ); ?>
							   <!--  <label for="ddlPropertyTypeCom" class="dropdownLabel">Property Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlPropertyTypeCom$ctl00" class="moreFilterDropdown" data-hashkey="PropertySearchTypeId" data-default="0" id="ddlPropertyTypeCom">
	<option value="0">All Commercial</option>
	<option value="7">Business</option>
	<option value="8">Multi Family</option>
	<option value="9">Retail</option>
	<option value="10">Industrial</option>
	<option value="11">Office</option>
	<option value="6">Vacant Land</option>
	<option value="4">Agriculture</option>
	<option value="12">Hospitality</option>
	<option value="13">Institutional</option>

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="transactionTypeRes">
								 <?php echo $feed->transactionTypesAsSelect( 'ddlTransactionTypeRes' ); ?>
							   <!--  <label for="ddlTransactionTypeRes" class="dropdownLabel">Transaction Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlTransactionTypeRes$ctl00" data-default="2" data-hashkey="TransactionTypeId" id="ddlTransactionTypeRes">
	<option value="2">For sale</option>
	<option value="3">For rent</option>

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="transactionTypeCom">
								<?php echo $feed->transactionTypesAsSelect( 'ddlTransactionTypeCom' ); ?>
							   <!--  <label for="ddlTransactionTypeCom" class="dropdownLabel">Transaction Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlTransactionTypeCom$ctl00" data-default="2" data-hashkey="TransactionTypeId" id="ddlTransactionTypeCom">
	<option value="2">For sale</option>
	<option value="3">For lease</option>

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="rentMin">
								<?php echo $feed->minRentAsSelect( 'ddlMinRent' ); ?>
								<!-- <label for="ddlMinRent" class="dropdownLabel">Min Rent</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlMinRent$ctl00" data-hashkey="RentMin" data-default="0" id="ddlMinRent">
	<option value="0">0</option>
	<option value="100">100</option>
	<option value="200">200</option>
	<option value="300">300</option>
	<option value="400">400</option>
	<option value="500">500</option>
	<option value="600">600</option>
	<option value="700">700</option>
	<option value="800">800</option>
	<option value="900">900</option>
	<option value="1000">1,000</option>
	<option value="1200">1,200</option>
	<option value="1400">1,400</option>
	<option value="1600">1,600</option>
	<option value="1800">1,800</option>
	<option value="2000">2,000</option>
	<option value="2500">2,500</option>
	<option value="3000">3,000</option>
	<option value="3500">3,500</option>
	<option value="4000">4,000</option>
	<option value="4500">4,500</option>
	<option value="5000">5,000</option>
	<option value="6000">6,000</option>
	<option value="7000">7,000</option>
	<option value="8000">8,000</option>
	<option value="9000">9,000</option>
	<option value="10000">10,000</option>

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="rentMax">
								<?php echo $feed->maxRentAsSelect( 'ddlMaxRent' ); ?>
								<!-- <label for="ddlMaxRent" class="dropdownLabel">Max Rent</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlMaxRent$ctl00" data-hashkey="RentMax" data-default="0" id="ddlMaxRent">
	<option value="0">Unlimited</option>
	<option value="100">100</option>
	<option value="200">200</option>
	<option value="300">300</option>
	<option value="400">400</option>
	<option value="500">500</option>
	<option value="600">600</option>
	<option value="700">700</option>
	<option value="800">800</option>
	<option value="900">900</option>
	<option value="1000">1,000</option>
	<option value="1200">1,200</option>
	<option value="1400">1,400</option>
	<option value="1600">1,600</option>
	<option value="1800">1,800</option>
	<option value="2000">2,000</option>
	<option value="2500">2,500</option>
	<option value="3000">3,000</option>
	<option value="3500">3,500</option>
	<option value="4000">4,000</option>
	<option value="4500">4,500</option>
	<option value="5000">5,000</option>
	<option value="6000">6,000</option>
	<option value="7000">7,000</option>
	<option value="8000">8,000</option>
	<option value="9000">9,000</option>
	<option value="10000">10,000</option>

</select> -->
							</div>
							<div class="homeMoreFilterCon" id="priceMin">
								<?php echo $feed->minPriceAsSelect( 'ddlMinPrice' ); ?>
								<!-- <label for="ddlMinPrice" class="dropdownLabel">Min Price</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlMinPrice$ctl00" data-binding-constraint-read="visible" data-hashkey="PriceMin" data-default="0" id="ddlMinPrice">
	<option value="0">0</option>
	<option value="25000">25,000</option>
	<option value="50000">50,000</option>
	<option value="75000">75,000</option>
	<option value="100000">100,000</option>
	<option value="125000">125,000</option>
	<option value="150000">150,000</option>
	<option value="175000">175,000</option>
	<option value="200000">200,000</option>
	<option value="225000">225,000</option>
	<option value="250000">250,000</option>
	<option value="275000">275,000</option>
	<option value="300000">300,000</option>
	<option value="325000">325,000</option>
	<option value="350000">350,000</option>
	<option value="375000">375,000</option>
	<option value="400000">400,000</option>
	<option value="425000">425,000</option>
	<option value="450000">450,000</option>
	<option value="475000">475,000</option>
	<option value="500000">500,000</option>
	<option value="550000">550,000</option>
	<option value="600000">600,000</option>
	<option value="650000">650,000</option>
	<option value="700000">700,000</option>
	<option value="750000">750,000</option>
	<option value="800000">800,000</option>
	<option value="850000">850,000</option>
	<option value="900000">900,000</option>
	<option value="950000">950,000</option>
	<option value="1000000">1,000,000</option>
	<option value="1100000">1,100,000</option>
	<option value="1200000">1,200,000</option>
	<option value="1300000">1,300,000</option>
	<option value="1400000">1,400,000</option>
	<option value="1500000">1,500,000</option>
	<option value="1600000">1,600,000</option>
	<option value="1700000">1,700,000</option>
	<option value="1800000">1,800,000</option>
	<option value="1900000">1,900,000</option>
	<option value="2000000">2,000,000</option>
	<option value="2500000">2,500,000</option>
	<option value="3000000">3,000,000</option>
	<option value="3500000">3,500,000</option>
	<option value="4000000">4,000,000</option>
	<option value="4500000">4,500,000</option>
	<option value="5000000">5,000,000</option>
	<option value="5500000">5,500,000</option>
	<option value="6000000">6,000,000</option>
	<option value="6500000">6,500,000</option>
	<option value="7000000">7,000,000</option>
	<option value="7500000">7,500,000</option>
	<option value="10000000">10,000,000</option>
	<option value="15000000">15,000,000</option>
	<option value="20000000">20,000,000</option>

</select> -->
							</div>
							<div class="homeMoreFilterCon" id="priceMax">
								<?php echo $feed->maxPriceAsSelect( 'ddlMaxPrice' ); ?>
							   <!--  <label for="ddlMaxPrice" class="dropdownLabel">Max Price</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlMaxPrice$ctl00" data-binding-constraint-read="visible" data-hashkey="PriceMax" data-default="0" id="ddlMaxPrice">
	<option value="0">Unlimited</option>
	<option value="25000">25,000</option>
	<option value="50000">50,000</option>
	<option value="75000">75,000</option>
	<option value="100000">100,000</option>
	<option value="125000">125,000</option>
	<option value="150000">150,000</option>
	<option value="175000">175,000</option>
	<option value="200000">200,000</option>
	<option value="225000">225,000</option>
	<option value="250000">250,000</option>
	<option value="275000">275,000</option>
	<option value="300000">300,000</option>
	<option value="325000">325,000</option>
	<option value="350000">350,000</option>
	<option value="375000">375,000</option>
	<option value="400000">400,000</option>
	<option value="425000">425,000</option>
	<option value="450000">450,000</option>
	<option value="475000">475,000</option>
	<option value="500000">500,000</option>
	<option value="550000">550,000</option>
	<option value="600000">600,000</option>
	<option value="650000">650,000</option>
	<option value="700000">700,000</option>
	<option value="750000">750,000</option>
	<option value="800000">800,000</option>
	<option value="850000">850,000</option>
	<option value="900000">900,000</option>
	<option value="950000">950,000</option>
	<option value="1000000">1,000,000</option>
	<option value="1100000">1,100,000</option>
	<option value="1200000">1,200,000</option>
	<option value="1300000">1,300,000</option>
	<option value="1400000">1,400,000</option>
	<option value="1500000">1,500,000</option>
	<option value="1600000">1,600,000</option>
	<option value="1700000">1,700,000</option>
	<option value="1800000">1,800,000</option>
	<option value="1900000">1,900,000</option>
	<option value="2000000">2,000,000</option>
	<option value="2500000">2,500,000</option>
	<option value="3000000">3,000,000</option>
	<option value="3500000">3,500,000</option>
	<option value="4000000">4,000,000</option>
	<option value="4500000">4,500,000</option>
	<option value="5000000">5,000,000</option>
	<option value="5500000">5,500,000</option>
	<option value="6000000">6,000,000</option>
	<option value="6500000">6,500,000</option>
	<option value="7000000">7,000,000</option>
	<option value="7500000">7,500,000</option>
	<option value="10000000">10,000,000</option>
	<option value="15000000">15,000,000</option>
	<option value="20000000">20,000,000</option>

</select> -->
							</div>


							<div class="homeMoreFilterCon" id="beds">
								<?php echo $feed->bedroomsAsSelect( 'ddlBeds' ); ?>
								<!-- <label for="ddlBeds" class="dropdownLabel">Beds</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlBeds$ctl00" data-hashkey="BedRange" data-default="0-0" id="ddlBeds">
	<option value="0-0">Any</option>
	<option value="1-1">1</option>
	<option value="1-0">1+</option>
	<option value="2-2">2</option>
	<option value="2-0">2+</option>
	<option value="3-3">3</option>
	<option value="3-0">3+</option>
	<option value="4-4">4</option>
	<option value="4-0">4+</option>
	<option value="5-5">5</option>
	<option value="5-0">5+</option>

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="baths">
								<?php echo $feed->bathroomsAsSelect( 'ddlBaths' ); ?>
							   <!--  <label for="ddlBaths" class="dropdownLabel">Baths</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlBaths$ctl00" Value="0-0" data-hashkey="BathRange" data-default="0-0" id="ddlBaths">
	<option value="0-0">Any</option>
	<option value="1-1">1</option>
	<option value="1-0">1+</option>
	<option value="2-2">2</option>
	<option value="2-0">2+</option>
	<option value="3-3">3</option>
	<option value="3-0">3+</option>
	<option value="4-4">4</option>
	<option value="4-0">4+</option>
	<option value="5-5">5</option>
	<option value="5-0">5+</option>

</select> -->
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
								<?php echo $feed->parkingTypeAsSelect( 'ddlParkingType' ); ?>
							  <!--   <label for="ddlParkingType" class="dropdownLabel">Parking Type</label>
								<select size="3" name="ctl00$MainContent$ctl00$ctl00$ddlParkingType$ctl00" multiple="multiple" data-hashkey="ParkingTypeId" data-default="" id="ddlParkingType">
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

</select> -->
							</div>

							<!-- <div class="homeMoreFilterCon" id="listedSince">
								<label for="dteListedSince" class="datePickerLabel">Listed Since</label>
								<div>
									<div style="position: relative;">
										<input readonly="readonly" placeholder="mm/dd/yyyy" type="text" id="dteListedSince" class="homeFilter" data-validation="date" data-hashkey="NumberOfDays" data-type="dayssince" min="2018-03-10" max="2019-03-08" />
										<img src="/images/common/icons/svg/calendar-black.svg" width="25" class="inputDateIcon" alt="" />
									</div>


								</div>
							</div> -->
							<div class="homeMoreFilterCon checkbox" id="openHouse">
								<div class="homeFilter">
									<input type="checkbox" id="chkOpenHouse" value="1" data-hashkey="open_house" />
									<label for="chkOpenHouse" class="checkboxLabel">Open Houses Only</label>
								</div>
							</div>
							<div class="homeMoreFilterCon" id="keywords">
								<label for="txtKeywords" class="textboxLabel">Keywords</label>
								<i style="display: none;" class="fa fa-question-circle inputHelperIcon" aria-hidden="true" id="KeywordToolTip" data-tooltipid="KeywordsTooltip"></i>
								<!-- <input type="text" id="txtKeywords" data-hashkey="Keywords" data-validation="keywords" placeholder="Waterfront, Garage, Pool…" />-->
								<select multiple="multiple" id="txtKeywords" data-hashkey="Keywords" data-validation="keywords"></select>
							</div>

							<div class="homeMoreFilterCon" id="hospitalityBuildingType">
								<?php //echo $feed->buildingTypesAsSelect( 'ddlHospitalityBuildingType' ); ?>
							   <!--  <label for="ddlHospitalityBuildingType" class="dropdownLabel">Building Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlHospitalityBuildingType$ctl00" data-default="none" data-hashkey="BuildingTypeId" id="ddlHospitalityBuildingType">
	<option value=" ">Any</option>
	<option value="1">House</option>
	<option value="16">Row / Townhouse</option>
	<option value="17">Apartment</option>
	<option value="2">Duplex</option>
	<option value="3">Triplex</option>
	<option value="19">Fourplex</option>
	<option value="20">Garden Home</option>
	<option value="6">Mobile Home</option>
	<option value="27">Manufactured Home/Mobile</option>
	<option value="12">Special Purpose</option>
	<option value="5">Residential Commercial Mix</option>
	<option value="29">Manufactured Home</option>
	<option value="28">Commercial Apartment</option>
	<option value="25">Two Apartment House</option>
	<option value="30">Park Model Mobile Home</option>

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="ddlInstitutionalBuildingType">
								<?php //echo $feed->buildingTypesAsSelect( 'ddlHospitalityBuildingType' ); ?>
							   <!--  <label for="ddlInstitutionalBuildingType" class="dropdownLabel">Building Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlInstitutionalBuildingType$ctl00" data-default="none" data-hashkey="BuildingTypeId" id="ddlInstitutionalBuildingType">
	<option value=" ">Any</option>
	<option value="12">Special Purpose</option>
	<option value="7">Offices</option>
	<option value="5">Residential Commercial Mix</option>
	<option value="4">Multi-Family</option>
	<option value="8">Retail</option>
	<option value="9">Warehouse</option>
	<option value="14">Other</option>
 -->
</select>
							</div>

							<div class="homeMoreFilterCon" id="industrialBuildingType">
								<?php //echo $feed->buildingTypesAsSelect( 'ddlIndustrialBuildingType' ); ?>
							   <!--  <label for="ddlIndustrialBuildingType" class="dropdownLabel">Building Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlIndustrialBuildingType$ctl00" data-default="none" data-hashkey="BuildingTypeId" id="ddlIndustrialBuildingType">
	<option value=" ">Any</option>
	<option value="12">Special Purpose</option>
	<option value="7">Offices</option>
	<option value="5">Residential Commercial Mix</option>
	<option value="4">Multi-Family</option>
	<option value="8">Retail</option>
	<option value="9">Warehouse</option>
	<option value="14">Other</option>

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="retailBuildingType">
								<?php //$feed->buildingTypesAsSelect( 'ddlRetailBuildingType' ); ?>
								<!-- <label for="ddlRetailBuildingType" class="dropdownLabel">Building Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlRetailBuildingType$ctl00" data-default="none" data-hashkey="BuildingTypeId" id="ddlRetailBuildingType">
	<option value=" ">Any</option>
	<option value="8">Retail</option>
	<option value="21">Flex Facility</option>
	<option value="5">Residential Commercial Mix</option>
	<option value="23">Multi-Tenant Industrial</option>
	<option value="24">Commercial Mix</option>
	<option value="7">Offices</option>
	<option value="9">Warehouse</option>
	<option value="19">Fourplex</option>
	<option value="4">Multi-Family</option>
	<option value="12">Special Purpose</option>
	<option value="14">Other</option>

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="buildingType">
								<?php $feed->buildingTypesAsSelect( 'ddlBuildingType' ); ?>
							   <!--  <label for="ddlBuildingType" class="dropdownLabel">Building Type</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlBuildingType$ctl00" data-hashkey="BuildingTypeId" id="ddlBuildingType">
	<option value=" ">Any</option>
	<option value="1">House</option>
	<option value="16">Row / Townhouse</option>
	<option value="17">Apartment</option>
	<option value="2">Duplex</option>
	<option value="3">Triplex</option>
	<option value="19">Fourplex</option>
	<option value="20">Garden Home</option>
	<option value="6">Mobile Home</option>
	<option value="27">Manufactured Home/Mobile</option>
	<option value="12">Special Purpose</option>
	<option value="5">Residential Commercial Mix</option>
	<option value="29">Manufactured Home</option>
	<option value="28">Commercial Apartment</option>
	<option value="25">Two Apartment House</option>
	<option value="30">Park Model Mobile Home</option>

</select> -->
							</div>

						   <!--  <div class="homeMoreFilterCon" id="buildingAttachmentStyle">
								<label for="ddlBuildingAttachmentStyle" class="dropdownLabel">Building Style</label>
								<select size="3" name="ctl00$MainContent$ctl00$ctl00$ddlBuildingAttachmentStyle$ctl00" multiple="multiple" data-hashkey="ConstructionStyleId" id="ddlBuildingAttachmentStyle">
	<option value="1" parentid="16">Attached</option>
	<option value="3" parentid="1">Detached</option>
	<option value="3" parentid="2">Detached</option>
	<option value="3" parentid="3">Detached</option>
	<option value="3" parentid="16">Detached</option>
	<option value="5" parentid="1">Semi-detached</option>
	<option value="5" parentid="2">Semi-detached</option>
	<option value="5" parentid="3">Semi-detached</option>
	<option value="5" parentid="16">Semi-detached</option>
	<option value="1" parentid="1">Attached</option>
	<option value="1" parentid="2">Attached</option>
	<option value="1" parentid="3">Attached</option>
	<option value="7" parentid="2">Stacked</option>
	<option value="7" parentid="16">Stacked</option>
	<option value="9" parentid="1">Link</option>

</select>
							</div> -->

							<div class="homeMoreFilterCon" id="buildingSpace">
								<?php echo $feed->buildingSizeAsSelect( 'ddlBuildingSpace' ); ?>
							   <!--  <label for="ddlBuildingSpace" class="dropdownLabel">Building Size</label>
								<select name="ctl00$MainContent$ctl00$ctl00$ddlBuildingSpace$ctl00" data-hashkey="BuildingSizeRange" id="ddlBuildingSpace">
	<option value=" ">Any</option>
	<option value="0-5000">0-5,000 sqft</option>
	<option value="5001-10000">5,001 - 10,000 sqft</option>
	<option value="10001-15000">10,001 - 15,000 sqft</option>
	<option value="15001-20000">15,001 - 20,000 sqft</option>
	<option value="20001-25000">20,001 - 25,000 sqft</option>
	<option value="25001-30000">25,001 - 30,000 sqft</option>
	<option value="30001-35000">30,001 - 35,000 sqft</option>
	<option value="35001-40000">35,001 - 40,000 sqft</option>
	<option value="40001-45000">40,001 - 45,000 sqft</option>
	<option value="45001-50000">45,001 - 50,000 sqft</option>
	<option value="50001-75000">50,001 - 75,000 sqft</option>
	<option value="75001-100000">75,001 - 100,000 sqft</option>
	<option value="100001-150000">100,001 - 150,000 sqft</option>
	<option value="150001-200000">150,001 - 200,000 sqft</option>
	<option value="200001-250000">200,001 - 250,000 sqft</option>
	<option value="250001-0">Over 250,000 sqft</option>

</select> -->
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
								<?php echo $feed->farmTypeAsSelect( 'ddlFarmType' ); ?>
								<!-- <label for="ddlFarmType">Farm Type</label>
								<select size="3" name="ctl00$MainContent$ctl00$ctl00$ddlFarmType$ctl00" multiple="multiple" data-hashkey="FarmTypeId" id="ddlFarmType">
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

</select> -->
							</div>

							<div class="homeMoreFilterCon" id="zoningType">
								<?php echo $feed->zoningTypeAsSelect( 'ddlZoningType' ); ?>
								<!-- <label for="ddlZoningType" class="dropdownLabel">Zoning Type</label>
								<select size="3" name="ctl00$MainContent$ctl00$ctl00$ddlZoningType$ctl00" multiple="multiple" data-hashkey="ZoningTypeGroupId" id="ddlZoningType">
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

</select> -->
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

	
		<!-- <div class="search-row"> -->
			<?php
				// echo $propertyTypes;
				// echo $transactionTypes;
				// echo $buildingTypes;
				// echo $bedrooms;
				// echo $bathrooms;
				// echo $squareFeet;
				// echo $price;
			?>
			<input id="page" type="hidden" name="page" value="1">
		<!-- </div> -->
		<!-- <div class="search-row">
			<button type="submit"><?php _e( 'Search', 'adk_feed' ); ?></button>
		</div> -->
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
					<a href="/ddf-listing/foo-{$l->id}" class="listing-image-link">
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
						<a href="/ddf-listing/foo-{$l->id}">{$l->transaction_type}: {$l->address}</a>
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
			 // $( "#search-form select" ).selectBoxIt();


			function paginate() {
				$( "#page" ).val( $( this ).attr( "data-page" ) );
				$( "#search-form" ).submit();
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

		$( "#search-form select" ).on( "change", setValue );
	}(jQuery));

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
				topItems.push( "ZoningTypeTop" );

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
		//console.log( "update- value" );
		$( "[data-hashkey=" + $( this ).attr( "data-hashkey" ) + "]" ).not( this ).val( $( this ).val() );
	}

	function getFilters() {
		var data = {};

		$.each( bottomItems, function() {
			var e = $( "#" + this ).find( "select,input" );

			if ( e.val() ) {
				data[ e.attr( "data-hashkey" ) ] = e.val();
			}
		} );

		if ( $( "#homeSearchTxt" ).val() ) {
			data.mls = $( "#homeSearchTxt" ).val();
		}

		console.log( data );
	}

</script>

<?php get_footer(); ?>
