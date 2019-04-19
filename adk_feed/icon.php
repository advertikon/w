<?php
header('Content-type: image/png');
putenv( 'GDFONTPATH=' . realpath('.') );

$image_path = 'images/sign1-70.png';
list( $width, $height, $type ) = getimagesize( $image_path );
$text = isset( $_GET['text'] ) ? $_GET['text'] : 'undefined';
$lines = [];

if ( strlen( $text ) > 15 ) {
	$pos_slash = strpos( $text, '/' ) ?: PHP_INT_MAX;
	$pos_amp = strpos( $text, '&' ) ?: PHP_INT_MAX;
	$pos_white = strpos( $text, ' ' ) ?: PHP_INT_MAX;
	$pos = min( $pos_slash, $pos_amp, $pos_white );

	$lines[] = substr( $text, 0, $pos +1 );
	$lines[] = trim( substr( $text, $pos + 1 ) );

} else {
	$text = str_pad( $text, 15, ' ', STR_PAD_BOTH );
}

$out_width = 150;
$out_height = $out_width * ( $height / $width );
$text_x_one_line = 33;
$text_y_one_line = 57;

$image = imagecreatefrompng( $image_path );

$result = imagecreatetruecolor( $out_width, $out_height );   
imagealphablending( $result, false );
imagesavealpha( $result, true );

imagecopyresampled( $result, $image, 
                    0, 0, 
                    0, 0, 
                    $out_width, $out_height, 
                    $width, $height );

$color = imagecolorallocate( $result, 0, 0, 0 );
$font_path = 'fonts/OpenSans-Bold.ttf';

if ( !$lines ) {
	imagettftext( $result, $out_width / 15, 23, 33, 57, $color, $font_path, $text );

} else {
	imagettftext( $result, $out_width / 15, 23, 20, 55, $color, $font_path, $lines[ 0 ] );
	imagettftext( $result, $out_width / 15, 23, 25, 65, $color, $font_path, $lines[ 1 ] );
}

imagepng( $result );
imagedestroy( $result );
imagedestroy( $image );