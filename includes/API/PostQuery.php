<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;

/**
 * Post api main class
 */
class PostQuery {

	use SingletonTrait;

	/**
	 * Construct method
	 */
	public function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_Post_query_route' ] );
	}

	/**
	 * Register post route
	 *
	 * @return void
	 */
	public function register_Post_query_route() {
		register_rest_route(
			'zolo/v1',
			'post-query',
			[
				'methods'             => 'GET',
				'callback'            => [ $this, 'post_query_callback' ],
				'permission_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
			]
		);
	}

    /**
     * Post query callback
     *
     * @param \WP_REST_Request $request
     * @return void
     */
    public function post_query_callback( $request ) {
        $params = $request->get_params();
        error_log(print_r( $params,true ));
    }
}
