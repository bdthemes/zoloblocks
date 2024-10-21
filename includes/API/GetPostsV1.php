<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;
use \WP_Query;

/**
 * Post api main class
 */
class GetPostsV1 {

	use SingletonTrait;

	/**
	 * Construct method
	 */
	public function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_Posts_route' ] );
	}

	/**
	 * Register post route
	 *
	 * @return void
	 */
	public function register_Posts_route() {
		register_rest_route(
			'zolo/v1',
			'posts',
			[
				'methods'             => 'POST',
				'callback'            => [ $this, 'get_all_posts' ],
				'permission_callback' => function () {
					return true;
				},
			]
		);
	}

	/**
	 * Get all posts
	 *
	 * @param array $data .
	 * @return void
	 */
	public function get_all_posts( $data ) {
		if ( ! wp_verify_nonce( $data['zolo_nonce'], 'zolo-nonce' ) ) {
			wp_send_json_error( esc_html__( 'Session Expired!!', 'zoloblocks' ) );
		}

		$postQuery = $data['postQuery'];
		// Check if postTermId is not empty and update postQuery if it exists.
		if ( ! empty( $data['postTermId'] ) && isset( $data['postQuery'] ) ) {
			$postQuery['postTermId']   = $data['postTermId'];
			$postQuery['postTaxonomy'] = $data['postTaxonomy'] ?? 'category';
		}

		$results = self::zolo_posts_query( $postQuery );

		if ( ! empty( $results['posts'] ) ) {
			wp_send_json_success( $results );
		} else {
			wp_send_json_error( 'no post found' );
		}
	}

	/**
	 * Get post arguments
	 *
	 * @param array $data .
	 * @return mixed|null
	 */
	public static function zolo_get_post_args( $data ) {
		$showPagination    = ! empty( $data['showPagination'] ) && $data['showPagination'] == 'true' ? true : false;
		$postType          = $data['postType'] ?? 'post';
		$args              = [
			'post_status'    => 'publish',
			'orderby'        => $data['postOrderby'] ?? 'date',
			'order'          => $data['postOrder'] ?? 'desc',
			'posts_per_page' => (int) isset( $data['postPerPage'] ) ? $data['postPerPage'] : 6,
		];
		$args['post_type'] = $postType;

		// for related posts.
		if ( 'related_posts' === $postType ) {
			$queriedPostId     = get_queried_object_id();
			$args['post_type'] = ! empty( $queriedPostId ) ? get_post_type( $queriedPostId ) : ( $data['currentPostType'] ?? '' );
		}

		// Set Exclude Post.
		$current_post = [];
		$exclude_by   = wp_list_pluck( $data['postExcludeBy'] ?? [], 'value' );

		if ( in_array( 'current_post', $exclude_by, true ) ) {
			$currentPostId = ! empty( get_the_ID() ) ? get_the_ID() : ( $data['currentPostId'] ?? '' );
			$current_post  = [ $currentPostId ];
		}

		if ( in_array( 'manual_selection', $exclude_by, true ) ) {
			$exclude_ids          = $data['postExclude'] ?? [];
			$args['post__not_in'] = array_merge( $current_post, wp_list_pluck( $exclude_ids, 'value' ) );
		} else {
			$args['post__not_in'] = $current_post;
		}

		// Set Authors.
		$args = self::get_author_args( $args, $data );

		$args = self::get_terms_args( $args, $data );

		// only for post tab.
		if ( isset( $data['postTermId'] ) && 'all' !== $data['postTermId'] ) {
			$args['tax_query'][] = [
				'taxonomy' => $data['postTaxonomy'],
				'field'    => 'term_id',
				'terms'    => [ $data['postTermId'] ],
			];
		}

		// Handle pagination.
		if ( $showPagination ) {
			$_paged = is_front_page() ? 'page' : 'paged';
			if ( get_query_var( $_paged ) ) {
				$paged = absint( get_query_var( $_paged ) );
			} else {
				$paged = $data['pageNumber'] ?? 1;
			}

			$args['paged'] = $paged;

			// Adjust offset if necessary.
			if ( ! empty( $data['postOffset'] ) && $data['postOffset'] > 0 ) {
				$args['offset'] = $data['postOffset'] + ( ( $paged - 1 ) * $args['posts_per_page'] );
			}
		} else {
			// Just apply offset if pagination is not used.
			if ( ! empty( $data['postOffset'] ) && $data['postOffset'] > 0 ) {
				$args['offset'] = $data['postOffset'];
			}
		}
		return apply_filters( 'zolo_post_args', $args );
	}

	/**
	 * Post Query
	 *
	 * @param array $data .
	 * @return array
	 */
	public static function zolo_posts_query( $data ) {

		$results = [];
		$args    = self::zolo_get_post_args( $data );

		if ( ! empty( $data['postType'] ) && 'current_post' === $data['postType'] ) {
			$loop = new \WP_Query(
				[
					'post_type' => $data['currentPostType'] ?? '',
					'p'         => $data['currentPostId'] ?? '',
				]
			);
		} else {
			$loop = new \WP_Query( $args );
		}

		$paged         = ZoloHelpers::get_paged( $loop );
		$postThumbnail = ! empty( $data['postThumbnail'] ) ? $data['postThumbnail'] : '';
		if ( $loop->have_posts() ) {
			while ( $loop->have_posts() ) {
				$loop->the_post();
				$post_id = get_the_ID();

				$content                = get_post_field( 'post_content', get_the_ID() );
				$post                   = [];
				$post['ID']             = $post_id;
				$post['title']          = get_the_title();
				$post['thumbnail']      = get_the_post_thumbnail( $post_id, $postThumbnail );
				$post['permalink']      = get_permalink();
				$post['excerpt']        = wp_strip_all_tags( get_the_excerpt() );
				$post['content']        = wp_strip_all_tags( get_the_content() );
				$post['date']           = get_the_date();
				$post['reading_time']   = self::content_reading_time( $content );
				$post['categories']     = self::zolo_get_terms( $post_id, ZoloHelpers::get_taxonomy_name( $data['postType'] ?? 'post', 'category' ) );
				$post['tags']           = self::zolo_get_terms( $post_id, ZoloHelpers::get_taxonomy_name( $data['postType'] ?? 'post', 'tag' ) );
				$post['author']         = get_the_author();
				$post['author_link']    = get_the_author_link();
				$post['avatar']         = get_avatar( get_the_author_meta( 'ID' ), 50 );
				$post['comment_number'] = get_comments_number();
				$results[]              = $post;
			}

			wp_reset_postdata();
		}
		return [
			'total_page' => $loop->max_num_pages,
			'posts'      => $results,
			'paged'      => $paged,
		];
	}

	/**
	 * Get terms
	 *
	 * @param number $post_id .
	 * @param string $taxnomy_name .
	 * @return array
	 */
	public static function zolo_get_terms( $post_id, $taxnomy_name ) {
		$terms    = [];
		$taxTerms = wp_get_object_terms( $post_id, $taxnomy_name );
		if ( ! empty( $taxTerms ) ) {
			foreach ( $taxTerms as $taxTerm ) {
				$terms[] = sprintf( '<a  href="%s">%s</a>', get_term_link( $taxTerm ), $taxTerm->name );
			}
		}
		return $terms;
	}

	/**
	 * Content reading time
	 *
	 * @param string $content .
	 * @return float|int
	 */
	public static function content_reading_time( $content ) {
		// Set the average reading speed in words per minute.
		$reading_speed = 200;
		// Calculate the word count of the content.
		$word_count = str_word_count( wp_strip_all_tags( $content ) );
		// Calculate the reading time in minutes.
		$reading_time = round( $word_count / $reading_speed );
		// Set a minimum reading time of 1 minute.
		if ( $reading_time < 1 ) {
			$reading_time = 1;
		}

		return $reading_time;
	}

	/**
	 * Get authors arguments
	 *
	 * @param array $args .
	 * @param array $data .
	 * @return mixed
	 */
	private static function get_author_args( $args, $data ) {
		$include_by    = wp_list_pluck( $data['postIncludeBy'] ?? [], 'value' );
		$exclude_by    = wp_list_pluck( $data['postExcludeBy'] ?? [], 'value' );
		$include_users = [];
		$exclude_users = [];

		if ( in_array( 'authors', $include_by, true ) ) {
			$include_users = wp_list_pluck( $data['postIncludeAuthors'] ?? [], 'value' );
		}

		if ( in_array( 'authors', $exclude_by, true ) ) {
			$exclude_users = wp_list_pluck( $data['postExcludeAuthors'] ?? [], 'value' );
			$include_users = array_diff( $include_users, $exclude_users );
		}

		if ( ! empty( $include_users ) ) {
			$args['author__in'] = $include_users;
		}

		if ( ! empty( $exclude_users ) ) {
			$args['author__not_in'] = $exclude_users;
		}

		return $args;
	}

	/**
	 * Get terms arguments
	 *
	 * @param array $args .
	 * @param array $data .
	 * @return mixed
	 */
	private static function get_terms_args( $args, $data ) {

		$included_terms = [];
		$excluded_terms = [];

		if ( ! empty( $data['postIncludeTaxonomies'] ) ) {
			foreach ( $data['postIncludeTaxonomies'] as $taxonomy ) {
				if ( ! empty( $taxonomy['options'] ) ) {
					$included_terms[ $taxonomy['name'] ] = wp_list_pluck( $taxonomy['options'], 'value' );
				}
			}
		}

		if ( ! empty( $data['postExcludeTaxonomies'] ) ) {
			foreach ( $data['postExcludeTaxonomies'] as $taxonomy ) {
				if ( ! empty( $taxonomy['options'] ) ) {
					$excluded_terms[ $taxonomy['name'] ] = wp_list_pluck( $taxonomy['options'], 'value' );
				}
			}
		}

		$args['tax_query'] = [];

		foreach ( $included_terms as $taxonomy_name => $terms ) {
			if ( isset( $excluded_terms[ $taxonomy_name ] ) ) {
				// Apply array_diff to remove excluded terms from the included terms.
				$terms = array_diff( $terms, $excluded_terms[ $taxonomy_name ] );
			}

			if ( ! empty( $terms ) ) {
				$args['tax_query'][] = [
					'taxonomy' => $taxonomy_name,
					'field'    => 'term_id',
					'terms'    => $terms,
					'operator' => 'IN',
				];
			}
		}

		foreach ( $excluded_terms as $taxonomy_name => $terms ) {
			if ( ! empty( $terms ) ) {
				$args['tax_query'][] = [
					'taxonomy' => $taxonomy_name,
					'field'    => 'term_id',
					'terms'    => $terms,
					'operator' => 'NOT IN',
				];
			}
		}

		// If both include and exclude are set, you might want to specify the relation.
		if ( count( $args['tax_query'] ) > 1 ) {
			$args['tax_query']['relation'] = 'AND';
		}

		return $args;
	}
}
