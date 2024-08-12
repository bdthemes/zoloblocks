<?php
namespace Zolo\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;

/**
 * ZoloAJAX
 *
 * AJAX Event Handler
 *
 * @class    ZoloAJAX
 * @version  0.0.1
 * @package  zolo-ajax
 * @category Class
 */
class ZoloAJAX {

	use SingletonTrait;

	/**
	 * The Constructor.
	 */
	public function __construct() {
		self::zolo_ajax_action_init();
		add_action( 'wp_ajax_zolo_select2_search', [ $this, 'zolo_select2_response' ] );
		add_action( 'wp_ajax_zolo_post_category', [ $this, 'get_post_categories' ] );
		add_action( 'wp_ajax_zolo_author_ajax', [ $this,'get_authors' ] );
	}

	/**
	 * Get authors list
	 *
	 * @return void
	 */
	public function get_authors() {
		if ( ! wp_verify_nonce( ZoloHelpers::ge_nonce_id(), ZoloHelpers::get_nonce_text() ) ) {
			wp_send_json_error( 'Invalid nonce' );
		}
		$authorQuery_json = sanitize_text_field( wp_unslash( $_POST['authorQuery'] ?? [] ) );
		$authorQuery      = json_decode( $authorQuery_json, true );
		if ( ! is_array( $authorQuery ) ) {
			wp_send_json_error( 'Invalid Author query' );
		}
		$results = self::author_query( $authorQuery );
		wp_send_json_success(
			[ 'results' => $results ]
		);
	}

	/**
	 * Author query
	 *
	 * @param array $data .
	 * @return array
	 */
	public static function author_query( $data ) {
		$avatarSize = ! empty( $data['avatarSize'] ) ? sanitize_text_field( $data['avatarSize'] ) : '250';
		$args       = [
			'orderby'  => ! empty( $data['orderby'] ) ? sanitize_text_field( $data['orderby'] ) : 'display_name',
			'order'    => ! empty( $data['order'] ) ? sanitize_text_field( $data['order'] ) : 'desc',
			'role__in' => ! empty( $data['role'] ) && is_array( $data['role'] ) ? wp_list_pluck( $data['role'], 'value' ) : [],
			'number'   => ! empty( $data['itemLimit'] ) ? sanitize_text_field( $data['itemLimit'] ) : 6,
			'exclude'  => ! empty( $data['exclude'] ) && is_array( $data['exclude'] ) ? wp_list_pluck( $data['exclude'], 'value' ) : [],
		];
		$users      = get_users( $args );
		$results    = [];
		foreach ( $users as $author ) {
			$user                = [];
			$user['ID']          = $author->ID;
			$user['name']        = get_the_author_meta( 'display_name', $author->ID );
			$user['link']        = get_bloginfo( 'url' ) . '/?author=' . $author->ID;
			$user['avatar']      = get_avatar( $author->ID, $avatarSize );
			$user['postCount']   = count_user_posts( $author->ID );
			$user['role']        = ucwords( ZoloHelpers::get_user_role( $author->ID ) );
			$user['description'] = get_the_author_meta( 'description', $author->ID );
			$results[]           = $user;
		}
		return $results;
	}

	/**
	 * Get post categories
	 *
	 * @return void
	 */
	public function get_post_categories() {
		if ( ! wp_verify_nonce( ZoloHelpers::ge_nonce_id(), ZoloHelpers::get_nonce_text() ) ) {
			wp_send_json_error( 'Invalid nonce' );
		}
		$catQuery_json = sanitize_text_field( wp_unslash( $_POST['catQuery'] ?? [] ) );
		$catQuery      = json_decode( $catQuery_json, true );
		if ( ! is_array( $catQuery ) ) {
			wp_send_json_error( 'Invalid category query' );
		}
		$results = self::zolo_post_category_query( $catQuery );
		wp_send_json_success(
			[ 'results' => $results ]
		);
	}

	/**
	 * Post category query
	 *
	 * @param array $data .
	 * @return array
	 */
	public static function zolo_post_category_query( $data ) {
		$catExclude = ! empty( $data['catExclude'] ) && is_array( $data['catExclude'] ) ? wp_list_pluck( $data['catExclude'], 'value' ) : [];
		$imageSize  = ! empty( $data['catThumbnail'] ) ? sanitize_text_field( $data['catThumbnail'] ) : 'thumbnail';
		$args       = [
			'taxonomy'   => ! empty( $data['catTaxonomy'] ) ? sanitize_text_field( $data['catTaxonomy'] ) : 'category',
			'orderby'    => ! empty( $data['catOrderby'] ) ? sanitize_text_field( $data['catOrderby'] ) : 'name',
			'order'      => ! empty( $data['catOrder'] ) ? sanitize_text_field( $data['catOrder'] ) : 'desc',
			'hide_empty' => 0,
			'exclude'    => $catExclude,
			'parent'     => isset( $data['catParent'] ) ? intval( $data['catParent'] ) : '',
		];
		$categories = get_categories( $args );
		$results    = [];
		foreach ( $categories as $index => $cat ) {
			$category_image_id = get_term_meta( $cat->cat_ID, 'zolo-category-image-id', true );
			$category_url      = '';
			if ( ! empty( $category_image_id ) ) {
				$category_url = wp_get_attachment_image_url( $category_image_id, $imageSize );
			}
			$category                = [];
			$category['name']        = $cat->cat_name;
			$category['description'] = $cat->category_description;
			$category['count']       = $cat->category_count;
			$category['image']       = $category_url;
			$category['link']        = get_category_link( $cat->cat_ID );
			$results[]               = $category;
			if ( ! empty( $data['catItemLimit'] ) ) {
				if ( ( $data['catItemLimit'] - 1 ) == $index ) {
					break;
				}
			}
		}
		return $results;
	}

	/**
	 * Select2 ajax search response
	 *
	 * @return void
	 */
	public function zolo_select2_response() {

		if ( ! wp_verify_nonce( ZoloHelpers::ge_nonce_id(), ZoloHelpers::get_nonce_text() ) ) {
			wp_send_json_error( 'Invalid nonce' );
		}

		$source_type    = sanitize_text_field( wp_unslash( $_POST['source_type'] ?? 'post' ) );
		$source_name    = sanitize_text_field( wp_unslash( $_POST['source_name'] ?? 'post_type' ) );
		$search_text    = sanitize_text_field( wp_unslash( $_POST['search'] ?? '' ) );
		$query_per_page = intval( $_POST['per_page'] ?? 10 );
		$paged          = intval( $_POST['page'] ?? 1 );
		$results        = [];
		$post_list      = [];
		switch ( $source_name ) {
			case 'taxonomy':
				$args = [
					'hide_empty' => false,
					'orderby'    => 'name',
					'order'      => 'ASC',
					'search'     => $search_text,
					'number'     => '5',
				];

				if ( 'all' !== $source_type ) {
					$args['taxonomy'] = $source_type;
				}

				$post_list = wp_list_pluck( get_terms( $args ), 'name', 'term_id' );
				break;
			case 'user':
				$users     = get_users( [ 'search' => "*{$search_text}*" ] );
				$post_list = wp_list_pluck( $users, 'display_name', 'ID' );
				break;
			default:
				$post_list = $this->get_query_data( $source_type, $query_per_page, $search_text, $paged );
		}

		foreach ( $post_list as $key => $item ) {
			$results[] = [
				'text' => $item,
				'id'   => $key,
			];
		}

		wp_send_json(
			[ 'results' => $results ]
		);
	}

	/**
	 * Select2 ajax search query data.
	 *
	 * @param string $post_type .
	 * @param number $limit .
	 * @param string $search .
	 * @param number $paged .
	 * @return array
	 */
	public function get_query_data( $post_type = 'any', $limit = 10, $search = '', $paged = 1 ) {
		global $wpdb;
		$where = '';
		$data  = [];

		if ( -1 == $limit ) {
			$limit = '';
		} elseif ( 0 == $limit ) {
			$limit = 'limit 0,1';
		} else {
			$offset = 0;
			if ( $paged ) {
				$offset = ( $paged - 1 ) * $limit;
			}
			$limit = $wpdb->prepare( ' limit %d, %d', esc_sql( $offset ), esc_sql( $limit ) );
		}

		if ( 'any' === $post_type ) {
			$in_search_post_types = get_post_types( [ 'exclude_from_search' => false ] );
			if ( empty( $in_search_post_types ) ) {
				$where .= ' AND 1=0 ';
			} else {
				$where .= " AND {$wpdb->posts}.post_type IN ('" . join(
					"', '",
					array_map( 'esc_sql', $in_search_post_types )
				) . "')";
			}
		} elseif ( ! empty( $post_type ) ) {
			$where .= $wpdb->prepare( " AND {$wpdb->posts}.post_type = %s", esc_sql( $post_type ) );
		}

		if ( ! empty( $search ) ) {
			$where .= $wpdb->prepare( " AND {$wpdb->posts}.post_title LIKE %s", '%' . esc_sql( $search ) . '%' );
		}

		$query   = "select post_title,ID  from $wpdb->posts where post_status = 'publish' {$where} {$limit}";
		$results = $wpdb->get_results( $query );

		if ( ! empty( $results ) ) {
			foreach ( $results as $row ) {
				$data[ $row->ID ] = $row->post_title . ' [#' . $row->ID . ']';
			}
		}

		return $data;
	}

	/**
	 * Ajax action init
	 *
	 * @return void
	 */
	public static function zolo_ajax_action_init() {
		$ajax_events = [
			'zolo_example_ajax_function' => [
				'callback' => 'zolo_example_ajax_function_callback',
				'nopriv'   => true,
			],
		];

		foreach ( $ajax_events as $ajax_event_key => $ajax_event_func ) {
			add_action( 'wp_ajax_' . $ajax_event_key, [ __CLASS__, $ajax_event_func['callback'] ] );
			if ( $ajax_event_func['nopriv'] ) {
				add_action( 'wp_ajax_nopriv_' . $ajax_event_key, [ __CLASS__, $ajax_event_func['callback'] ] );
			}
		}
	}

	/**
	 * Example Function
	 */
	public static function zolo_example_ajax_function_callback() {
		if ( ! wp_verify_nonce( $_POST['nonce'], 'nonce' ) ) {
			wp_die( esc_html_e( 'Nonce did not match', 'zoloblocks' ) ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped.
		}
		// Write your code here.
		exit;
	}
}
