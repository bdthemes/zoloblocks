<?php

namespace Zolo\Extensions;

use WP_HTML_Tag_Processor;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
	exit;
}

class ClassManager
{

	use SingletonTrait;
	private $classes = [];

	public function __construct()
	{
		add_action('init', [$this, 'register_post_type']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_class_manager_editor_assets']);
		add_filter('render_block', [$this, 'render_block'], 10, 2);
		add_filter('zolo_dynamic_styles', [$this, 'output_dynamic_styles']);
		add_action( 'before_delete_post', [$this, 'delete_child_classes_on_parent_delete'] );

	}

	/**
	 * Register zolo-class-manager post type
	 */
	public function register_post_type()
	{

		register_post_type(
			'zolo-class-manager',
			[
				'label'           => __('Class Manager', 'zoloblocks'),
				'public'          => false,          // Not publicly accessible
				'show_ui'         => false,          // No admin UI
				'show_in_menu'    => false,
				'show_in_admin_bar' => false,
				'show_in_nav_menus' => false,
				'exclude_from_search' => true,
				'publicly_queryable' => false,
				'menu_icon'       => 'dashicons-admin-generic',
				'hierarchical'    => true,

				// REST API support
				'show_in_rest'    => true,
				'rest_base'       => 'zolo-class-manager',
				'rest_controller_class' => 'WP_REST_Posts_Controller',

				// Capabilities & behavior
				'supports'        => ['title', 'editor', 'page-attributes', 'custom-fields'],
				'capability_type' => 'post',
				'map_meta_cap'    => true,

				// Internal usage only
				'rewrite'         => false,
				'query_var'       => false,
			]
		);

		register_post_meta(
			'zolo-class-manager',
			'zoloClassManagerStyles',
			[
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => '',
				'show_in_rest'      => true,
				'single'            => true,
			]
		);
	}

	/**
	 * Enqueue editor assets
	 */
	public function enqueue_class_manager_editor_assets()
	{
		$assets_path = ZOLO_DIR_PATH . 'build/extensions/class-manager/index.asset.php';

		if (file_exists($assets_path)) {
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

	public function is_class_already_added($class) {
		return in_array($class, $this->classes);
	}

	public function render_block($block_content, $block)
	{
		if (isset($block['blockName']) && str_contains($block['blockName'], 'zolo/')) {
			if (isset($block['attrs']['classManager'])) {
				if (!$this->is_class_already_added($block['attrs']['classManager'])) {
					$this->classes[] = $block['attrs']['classManager'];
				}

				$tag_processor = new WP_HTML_Tag_Processor($block_content);
				$tag_processor->next_tag();
				$class_ids = [];
				foreach ($block['attrs']['classManager'] as $class) {
					$class_ids[] = $class['id'];
				}

				$posts = get_posts([
					'post_type' => 'zolo-class-manager',
					'post__in' => $class_ids,
				]);
				foreach ($posts as $post) {
					$tag_processor->add_class($post->post_title);
				}
				$block_content = $tag_processor->get_updated_html();
			}

			if (isset($block['attrs']['classManagerSubselector'])) {
				if (!$this->is_class_already_added($block['attrs']['classManagerSubselector'])) {
					$this->classes[] = $block['attrs']['classManagerSubselector'];
				}

				$tag_processor = new WP_HTML_Tag_Processor($block_content);
				$tag_processor->next_tag();
				foreach ($block['attrs']['classManagerSubselector'] as $class) {
					$tag_processor->add_class('zbcm-' . $class['id']);
				}
				$block_content = $tag_processor->get_updated_html();
			}
		}
		return $block_content;
	}

	public function output_dynamic_styles($dynamic_styles) {
		if (!empty($this->classes)) {
			foreach ($this->classes as $block_classes) {
				foreach ($block_classes as $class) {
					$post = get_post($class['id']);
					if( !empty($post) ) {
						$styles = get_post_meta($post->ID, 'zoloClassManagerStyles', true);
						$dynamic_styles .= $styles;
					}
				}
			}
		}
		return $dynamic_styles;
	}
	

	public function delete_child_classes_on_parent_delete($post_id) {
		if (get_post_type($post_id) !== 'zolo-class-manager') {
			return;
		}

		$children = get_posts([
			'post_type' => 'zolo-class-manager',
			'post_parent' => $post_id,
		]);
		foreach ($children as $child) {
			wp_delete_post($child->ID, true);
		}
	}
}
