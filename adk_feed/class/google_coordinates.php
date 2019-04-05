<?php

class GoogleCoordinates {
	protected $lat = 0;
	protected $lng = 0;
	protected $address = '';

	static public function get( stdClass $listing ) {
		global $wpdb;

		$coordinates = $wpdb->get_var( $wpdb->prepare(
			"select coordinates from {$wpdb->prefix}adk_feed_coordinates where listing_id = %s", $listing->listing_id
		) );

		if ( $coordinates ) {
			return new GoogleCoordinates( self::decode_data( $coordinates ) );
		}

		return self::get_from_google( $listing->listing_id, self::get_address_string( $listing ) );
	}

	static public function get_from_google( $listing_id, $address ) { var_dump( $address );
		global $wpdb;
		$wpdb->show_errors();
		$key = get_option( 'adk_feed_google' );

		if ( !$key ) {
			trigger_error( 'Google key is missing' );
			return new GoogleCoordinates;
		}

		$url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' . urlencode( $address ) . '&key=' . $key;
		$data = file_get_contents( $url );

		if ( !$data ) {
			trigger_error( 'Google geolocation failed' );
			return new GoogleCoordinates;
		}
		$json = self::decode_data( $data );

		if ( $json ) {
			$wpdb->query( $wpdb->prepare(
				"insert into {$wpdb->prefix}adk_feed_coordinates (listing_id, coordinates) values(%s,%s)", $listing_id, $data )
			);
		}

		return new GoogleCoordinates( $json);
	}

	public function __construct( stdClass $data = null ) {
		if ( $data ) {
			$this->init( $data );
		}
	}

	public function get_lat() {
		return $this->lat;
	}

	public function get_lng() {
		return $this->lng;
	}

	public function get_address() {
		return $this->address;
	}

	//////////////////////////////////////////////////////////////////////////////////////

	static protected function get_address_string( stdClass $listing ) {
		return $listing->address . ' ' . $listing->address2 . ' ' . $listing->province . ' ' . $listing->city;
	}

	protected function init( stdClass $data ) { //var_dump( $data );
		$result = $data->results ? current( $data->results ) : false;

		if ( $result ) {
			$this->lat     = $result->geometry->location->lat;
			$this->lng     = $result->geometry->location->lng;
			$this->address = $result->formatted_address;
		}
	}

	static protected function decode_data( $data ) {
		$data = json_decode( $data );

		if ( !$data ) {
			trigger_error( 'Malformed data' );
			return null;
		}

		if ( $data->status !== 'OK' ) {
			trigger_error( 'Google Maps Error' );
			return null;
		}

		return $data;
	}
}