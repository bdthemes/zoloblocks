<?php

namespace Zolo\Extensions;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class ClassManager {

	use SingletonTrait;

	public function __construct() {
		add_action( 'init', [ $this, 'register_post_type' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_class_manager_editor_assets' ] );
	}

	/**
	 * Register zolo-class-manager post type
	 */
	public function register_post_type() {

		register_post_type(
			'zolo-class-manager',
			[
				'label'           => __( 'Class Manager', 'zoloblocks' ),
				'public'          => true,          // Not publicly accessible
				// 'show_ui'         => false,          // No admin UI
				// 'show_in_menu'    => false,
				// 'show_in_admin_bar' => false,
				// 'show_in_nav_menus' => false,
				// 'exclude_from_search' => true,
				// 'publicly_queryable' => false,
                'menu_icon'       => 'dashicons-admin-generic',

				// REST API support
				'show_in_rest'    => true,
				'rest_base'       => 'zolo-class-manager',
				'rest_controller_class' => 'WP_REST_Posts_Controller',

				// Capabilities & behavior
				'supports'        => [ 'title', 'editor' ],
				'capability_type' => 'post',
				'map_meta_cap'    => true,

				// Internal usage only
				'rewrite'         => false,
				'query_var'       => false,
			]
		);
	}

	/**
	 * Enqueue editor assets
	 */
	public function enqueue_class_manager_editor_assets() {
		$assets_path = ZOLO_DIR_PATH . 'build/extensions/class-manager/index.asset.php';

		if ( file_exists( $assets_path ) ) {
			$assets = include $assets_path;

			wp_enqueue_script(
				'zolo-class-manager-editor-script',
				ZOLO_ADMIN_URL . 'build/extensions/class-manager/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);

            wp_enqueue_style(
                'zolo-class-manager-editor-style',
                ZOLO_ADMIN_URL . 'build/extensions/class-manager/index.css',
                [],
                $assets['version']
            );
		}
	}
}
