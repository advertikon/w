<?php
/**
 * Advertikon admin.php Class
 * @author Advertikon
 * @package
 * @version 0.00.000
 */

define( 'adkDataFolder', __DIR__ . '/../data/' );

function adk_render_admin_page() {
//	error_reporting(E_ALL);
//	ini_set('display_errors', 1);
	adkSavePDF();

	$action = add_query_arg( 'page', isset( $_GET['page'] ) ? $_GET['page'] : '',  admin_url( 'admin.php' ) );
	$list = require_once __DIR__ . '/../data.php';

?>
<style>
	table {
		border-collapse: collapse;
	}

    caption {
        font-weight: bold;
        font-size: 1.2em;
        margin-top: 40px;
        margin-bottom: 10px;
    }

    td {
        padding: 5px;
    }

    button {
        padding: 7px;
        min-width: 120px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }

    button[type=submit] {
        background-color: #43803a;
        color: white;
    }

    button.remove-pdf {
        background-color: #ff2d3e;
        color: black;
    }

    button[type=submit]:hover {
        background-color: #204c07;
        color: black;
    }

    button.remove-pdf:hover {
        background-color: #c6333c;
        color: white;
    }
</style>
<script>
    jQuery( function( $ ) {
        $( document ).on( "click", ".remove-pdf", function( e ) {
            e.preventDefault();

            if ( confirm( "Are you sure?" ) ) {
                $.getJSON(
                    ajaxurl,
                    {
                        name:   $( this ).attr( "data-pdf" ),
                        city:   $( this ).attr( "data-city" ),
                        action: 'adk_remove_pdf'
                    },
                    function( resp ) {
                        console.log( resp );

                        if ( resp.error ) {
                            alert( resp.error );

                        } else {
                            location.reload();
                        }
                    } );
            }
        } );
    } );
</script>
<form action="<?php echo $action; ?>" method="POST" enctype="multipart/form-data">
<?php

    array_unshift( $list, [ 'name' => 'BC Real Estate News' ] );

	foreach( $list as $l ) {
		$n = preg_replace( '/[^a-zA-Z0-9]/', '_', $l['name'] );
		echo "<table border='1'><caption>${l['name']}</caption>";

		foreach( getPdf( $l['name'] ) as $pdf => $time ) {
			echo "<tr>
                    <td>" . $pdf . "</td>
                    <td>" . date( "Y-m-d", $time ) . "</td>
                    <td><button class='remove-pdf' data-pdf='$pdf' data-city='$n'>Delete</button></td>
                   </tr>";
		}

		echo "<tr><td colspan='2'><input type='file' name='$n'/></td><td><button type='submit' class='add-pdf'>Add new</button></td></tr>";
		echo '</table>';
	}

	echo '</form>';
}

function getPdf( $name ) {
	$n = preg_replace( '/[^a-zA-Z0-9]/', '_', $name );

	if ( !is_dir( adkDataFolder . $n ) ) {
		return [];
	}

	$ret = [];

	foreach ( scandir( adkDataFolder . $n ) as $f ) {
	    if ( $f[ 0 ] === '.' ) {
	        continue;
        }

	    $ret[ $f ] = filemtime( adkDataFolder . $n . '/' . $f );
    }

	return $ret;
}

function adkSavePDF() {
	foreach( $_FILES as $k => $f ) {
	    if ( 0 === $f['error'] ) {
		    try {
			    adkSaveFile( $k, $f['tmp_name'], $f['name'] );

		    } catch ( Exception $e ) {
		        echo <<<HTML
			    <div class="error notice">
                    <p>{$e->getMessage()}</p>
                </div>
HTML;
		    }
	    }
    }
}

/**
 * @param $dir
 * @param $path
 * @param $name
 * @throws Exception
 */
function adkSaveFile( $dir, $path, $name ) {
    if ( !is_dir( adkDataFolder . $dir ) ) {
        if( ! mkdir( adkDataFolder . $dir, 0775, true ) ) {
            throw new Exception( 'Failed to create data folder' );
        }
    }

    if( ! move_uploaded_file( $path, adkDataFolder . "$dir/$name" ) ) {
        throw new Exception( 'Failed to save file' );
    }
}