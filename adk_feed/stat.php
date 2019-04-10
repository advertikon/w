<?php
$url = 'https://api.locallogic.co/v1/demographics?lat=' . urlencode( $coordinates->get_lat() ) . '&lng=' . urlencode( $coordinates->get_lng() );
$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch, CURLOPT_HTTPHEADER, [ 'X-API-KEY: ' . get_option( 'adk_feed_locallogic_api', '' ) ] );
curl_setopt( $ch, CURLOPT_HEADER, false );

$result = json_decode( curl_exec( $ch ) );
curl_close( $ch );

if ( !$result ) {
	return;
}

$width = '500px';
$height = '400px';

$income      = $result->data->attributes->dc_income;
$composition = $result->data->attributes->dc_household_composition;
$household   = $result->data->attributes->dc_family_household;
$commute     = $result->data->attributes->dc_commute_mode;
$age         = $result->data->attributes->dc_population_age;
$house       = $result->data->attributes->dc_housing_type;
$tenancy     = $result->data->attributes->dc_housing_tenancy;
$education   = $result->data->attributes->dc_education;
$language    = $result->data->attributes->dc_official_language_knowledge;
$mother      = $result->data->attributes->dc_mother_tongue;
?>

<style>
.panel .content {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.panel .content p {
	align-self: flex-start;
}

.panel .heading {
	font-weight: bold!important;
}
</style>
<div class="accordion-container" style="width: 100%">

	<?php if( $income ) : ?>
	<div class="panel">
		<div class="heading"><?php echo $income->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $income->variables as $v ) : ?>
			<p><b><?php echo $v->name->en; ?></b>: $<?php echo number_format( $v->value ); ?></p>
			<?php endforeach; ?>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $composition ) : ?>
	<?php $data = [ [ 'Composition', 'Percentage', ], ]; ?>
	<div class="panel">
		<div class="heading"><?php echo $composition->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $composition->variables as $v ) : ?>
				<?php if ( 'average' === $v->type ) : ?>
				<p><b><?php echo $v->name->en; ?></b>: <?php echo round( $v->value, 2 ); ?></p>
				<?php else: ?>
					<?php $data[] = [ $v->name->en, $v->value, ]; ?>
				<?php endif;?>
			<?php endforeach; ?>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $household ) : ?>
	<?php
		$set1 = $household->variables->dv_families_without_children;
		$set2 = $household->variables->dv_families_with_children;
		$data1 = [
			[ 'Composition', 'Percentage', ],
			[ $set1->name->en, $set1->value ],
			[ $set2->name->en, $set2->value ],
		];

		$set3 = $household->variables->dv_families_with_one_child;
		$set4 = $household->variables->dv_families_with_two_children;
		$set5 = $household->variables->dv_families_with_three_plus_children;
		$data2 = [
			[ 'Composition', 'Percentage', ],
			[ $set3->name->en, $set1->value ],
			[ $set4->name->en, $set2->value ],
			[ $set5->name->en, $set2->value ],
		];
	?>

	<div class="panel">
		<div class="heading"><?php echo $household->category_name->en; ?></div>
		<div class="content">
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data1 ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data2 ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $commute ) : ?>
	<?php $data = [ [ 'Composition', 'Percentage', ], ]; ?>
	<div class="panel">
		<div class="heading"><?php echo $commute->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $commute->variables as $v ) : ?>
				<?php $data[] = [ $v->name->en, $v->value, ]; ?>
			<?php endforeach; ?>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $age ) : ?>
	<?php $data = [ [ 'Composition', 'Percentage', ], ]; ?>
	<div class="panel">
		<div class="heading"><?php echo $age->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $age->variables as $v ) : ?>
				<?php $data[] = [ $v->name->en, $v->value, ]; ?>
			<?php endforeach; ?>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $house ) : ?>
	<?php $data = [ [ 'Composition', 'Percentage', ], ]; ?>
	<div class="panel">
		<div class="heading"><?php echo $house->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $house->variables as $v ) : ?>
				<?php $data[] = [ $v->name->en, $v->value, ]; ?>
			<?php endforeach; ?>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $tenancy ) : ?>
	<?php $data = [ [ 'Composition', 'Percentage', ], ]; ?>
	<div class="panel">
		<div class="heading"><?php echo $tenancy->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $tenancy->variables as $v ) : ?>
				<?php $data[] = [ $v->name->en, $v->value, ]; ?>
			<?php endforeach; ?>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $education ) : ?>
	<?php $data = [ [ 'Composition', 'Percentage', ], ]; ?>
	<div class="panel">
		<div class="heading"><?php echo $education->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $education->variables as $v ) : ?>
				<?php $data[] = [ $v->name->en, $v->value, ]; ?>
			<?php endforeach; ?>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $language ) : ?>
	<?php $data = [ [ 'Composition', 'Percentage', ], ]; ?>
	<div class="panel">
		<div class="heading"><?php echo $language->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $language->variables as $v ) : ?>
				<?php $data[] = [ $v->name->en, $v->value, ]; ?>
			<?php endforeach; ?>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

	<?php if( $mother ) : ?>
	<?php $data = [ [ 'Composition', 'Percentage', ], ]; ?>
	<div class="panel">
		<div class="heading"><?php echo $mother->category_name->en; ?></div>
		<div class="content">
			<?php foreach( $mother->variables->dv_top_languages as $v ) : ?>
				<?php $data[] = [ $v->name->en, $v->value, ]; ?>
			<?php endforeach; ?>
			<div class="chart-container" data-data="<?php echo htmlentities( json_encode( $data ) ); ?>" style="width: <?php echo $width; ?>; height: <?php echo $height; ?>;"></div>
		</div>
	</div>
	<?php endif; ?>

</div>

<script>
jQuery( function( $ ) {
	new Accordion( ".accordion-container" );

	google.charts.load("current", {packages:["corechart"]});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {
		$( ".chart-container" ).each( function() {
			var data = $( this ).attr( "data-data" );
			var json = JSON.parse( data );
			var gData = google.visualization.arrayToDataTable( json );

			var options = {
				is3D: true,
				chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
				width: 500,
				height: 400,
				tooltip: {
					text: "percentage"
				}
			};

			var chart = new google.visualization.PieChart( this );
			chart.draw( gData, options );
		} );
	}
} ); 
</script>