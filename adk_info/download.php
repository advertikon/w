<?php
$city = isset( $_GET['city'] ) ? $_GET['city'] : '';
$file = isset( $_GET['file'] ) ? $_GET['file'] : '';

if ( !$city || !$file ) {
	echo 'City or file is missing';
	http_response_code( 404 );
	die();
}

if ( strpos( $city, '..' ) !== false || strpos( $file , '..' ) !== false ) {
	echo 'Access denied';
	http_response_code( 403 );
	die();
}

$dir = __DIR__ . '/data/';

if ( !is_dir( $dir . $city ) || !is_file( $dir . $city . '/' . $file ) ) {
	echo 'File ' . $dir . $city . '/' . $file . ' is missing';
	http_response_code( 404 );
	die();
}

$mine = mime_content_type( $dir . $city . '/' . $file );

header( "Content-type: $mine" );

if ( substr( $mine, -3 ) === 'pdf' ) {
	header( "Content-Disposition: inline; filename='$file" );

} else {
	header( "Content-Disposition: attachment; filename='$file'" );
}

echo file_get_contents( $dir . $city . '/' . $file );
die();