<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

/**
 * Zolo Templates API
 */
class BlocksV1 {

	use SingletonTrait;

	/**
	 * Construct method
	 */
	public function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_blocks_route' ] );
        add_action( 'init', [ $this, 'save_default_blocks' ] ); 
	}

	/**
	 * Register post route
	 *
	 * @return void
	 */
	public function register_blocks_route() {
        register_rest_route('zolo/v1', '/blocks', [
            'methods'             => ['GET', 'POST'],
            'callback'            => [$this, 'handle_blocks_request'],
            'permission_callback' => '__return_true',
        ]);
	}

    /**
     * Handle blocks request
     * 
     * @return void
     */
    public function handle_blocks_request( $request ) {
        if( $request->get_method() === 'GET' ) {
            return $this->get_blocks();
        } else {
            return $this->save_blocks( $request->get_json_params() );
        } 
    }

    /**
     * Get blocks
     * 
     * @return void
     */
    public function get_blocks() {
        $blocks = get_option('zolo_blocks', []);
        wp_send_json_success( $blocks ); 
    }

    /**
     * Save blocks
     * 
     * @param array $blocks
     * 
     * @return void
     */
    public function save_blocks( $request ) {
        $nonce = $request->get_param('zolo_nonce');

        if( ! wp_verify_nonce( $nonce, 'zolo-nonce' ) ) {
            wp_send_json_error( 'Invalid nonce' );
        }

        $block_names = $request->get_param('names');
        $single_block_name = $request->get_param('name');
        $status = filter_var( $request->get_param('status'), FILTER_VALIDATE_BOOLEAN );

        // fetch existing blocks
        $blocks = get_option('zolo_blocks', []);

        // determine if it's a single block or multiple blocks 
        if( ! empty( $single_block_name ) ) {
            // Handle single block update 
            $block_names = [ sanitize_text_field( $single_block_name ) ];

        } elseif ( is_array( $block_names ) ) {
            // Handle multiple blocks update
            $block_names = array_map( 'sanitize_text_field', $block_names );
        } else {
            // Invalid request
            wp_send_json_error( 'Invalid block name' );
        }

        // update block status
        foreach ( $blocks as $key => $block ) {
            if( in_array( $block['name'], $block_names ) ) {
                $blocks[$key]['status'] = $status;
            }
        }

        // save the blocks
        update_option('zolo_blocks', $blocks);

        // return success response
        return rest_ensure_response( $blocks );

    }

    /**
     * Save default blocks
     * 
     * @return void
     */
    public function save_default_blocks() {
        $existing_blocks = get_option('zolo_blocks', []);
        $new_blocks = ZoloHelpers::zolo_blocks();

        // tempoarary array to store merged blocks
        $blocks = [];

        // merge existing and new blocks
        foreach ( $new_blocks as $new_block ) {
            $found = false;
            foreach ( $existing_blocks as $existing_block ) {
                if( $existing_block['name'] == $new_block['name'] ) {
                    // merge existing block with new block data, but retain the status 
                    $blocks[] = array_merge( $new_block, [ 'status' => $existing_block['status'] ] );
                    $found = true;
                    break;
                }
            }
            // if block not found in existing blocks, add it
            if( !$found ) {
                $blocks[] = $new_block; 
            } 

        }

        // Remove blocks that are no longer in the new blocks list
        foreach ( $existing_blocks as $existing_block ) {
            $found = false;

            foreach ( $new_blocks as $new_block ) {
                if( $existing_block['name'] == $new_block['name'] ) {
                    $found = true;
                    break;
                }
            }

            if( !$found ) {

                // if the block exists in the existing blocks but not in the new blocks list, remove it 
                $key = array_search( $existing_block['name'], array_column( $blocks, 'name' ) ); 

                if( $key !== false ) {
                    unset( $blocks[$key] );
                } 

            }
        }

        // re-index the array to avoid missing keys
        $blocks = array_values( $blocks );

        // save the blocks
        update_option('zolo_blocks', $blocks);

    }

}
