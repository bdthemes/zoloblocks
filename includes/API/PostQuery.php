<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;

/**
 * Post API main class
 */
class PostQuery {

	use SingletonTrait;

	/**
	 * Construct method
	 */
	public function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_post_query_route' ] );
	}

	/**
	 * Register post route
	 *
	 * @return void
	 */
	public function register_post_query_route() {
		register_rest_route(
			'zolo/v1',
			'post-query',
			[
				'methods'             => 'POST', // Change GET to POST
				'callback'            => [ $this, 'post_query_callback' ],
				'permission_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					// Define your parameters here if you need validation
				],
			]
		);
	}

    /**
     * Post query callback
     *
     * @param \WP_REST_Request $request
     * @return \WP_REST_Response
     */
    public function post_query_callback( $request ) {
		$params = $request->get_json_params(); // Use get_json_params for POST data
	
		if ( ! empty( $params ) ) {
			// Use your custom function to build query args based on parameters
			$query_args = \Zolo\LoopBuilder\LoopBuilder::build_post_query_args( $params );
	
			$query = new \WP_Query( $query_args );
			$posts = $query->get_posts();
			$response = [];
	
			foreach ( $posts as $post ) {
				$response[] = [
					'id' => $post->ID,
					'date' => $post->post_date,
					'date_gmt' => $post->post_date_gmt,
					'guid' => [
						'rendered' => get_permalink( $post->ID ),
						'raw' => $post->guid,
					],
					'modified' => $post->post_modified,
					'modified_gmt' => $post->post_modified_gmt,
					'slug' => $post->post_name,
					'status' => $post->post_status,
					'type' => $post->post_type,
					'link' => get_permalink( $post->ID ),
					'title' => [
						'raw' => $post->post_title,
						'rendered' => apply_filters( 'the_title', $post->post_title ),
					],
					'content' => [
						'raw' => $post->post_content,
						'rendered' => apply_filters( 'the_content', $post->post_content ),
						'protected' => (bool) $post->post_password,
					],
					'excerpt' => [
						'raw' => $post->post_excerpt,
						'rendered' => apply_filters( 'the_excerpt', $post->post_excerpt ),
						'protected' => (bool) $post->post_password,
					],
					'author' => $post->post_author,
					'featured_media' => get_post_thumbnail_id( $post->ID ),
					'comment_status' => $post->comment_status,
					'ping_status' => $post->ping_status,
					'sticky' => is_sticky( $post->ID ),
					'template' => get_page_template_slug( $post->ID ),
					'format' => get_post_format( $post->ID ),
					'categories' => wp_get_post_categories( $post->ID, array( 'fields' => 'ids' ) ),
					'tags' => wp_get_post_tags( $post->ID, array( 'fields' => 'ids' ) ),
					'meta' => get_post_meta( $post->ID ),
				];
			}
	
			return \rest_ensure_response( $response );
		}
	
		return \rest_ensure_response( [] );
	}
	
}
