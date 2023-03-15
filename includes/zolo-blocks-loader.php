<?php

/**
 * Zolo Blocks Loader.
 *
 * @package Zolo
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class Zolo_Blocks_Loader
{

	/**
	 * Constructor
	 */
	public function __construct()
	{

		// Activation hook.
		register_activation_hook(ZOLO_FILE, array($this, 'activation_reset'));

		// deActivation hook.
		register_deactivation_hook(ZOLO_FILE, array($this, 'deactivation_reset'));

		$this->loader();

		add_action('plugins_loaded', array($this, 'load_plugin'));

		add_action('init', array($this, 'init_actions'));

		//Generate Style on block render
		add_filter('render_block', array($this, 'generate_style_on_render_block'), 10, 2);

		//Register Block Category
		if (version_compare(ZOLO_WP_VERSION, '5.8', '>=')) {
			add_filter('block_categories_all', array($this, 'register_block_category'), 99999, 2);
		} else {
			add_filter('block_categories', array($this, 'register_block_category'), 99999, 2);
		}
	}

	/**
	 * Loads Other files.
	 *
	 * @since 0.0.1
	 *
	 * @return void
	 */
	public function loader()
	{
		require_once ZOLO_DIR_PATH . 'includes/classes/zolo-ajax.php';
		require_once ZOLO_DIR_PATH . 'includes/classes/zolo-enqueues.php';
		require_once ZOLO_DIR_PATH . '/includes/classes/font-loader.php';
		require_once ZOLO_DIR_PATH . '/includes/classes/post-meta.php';
	}

	/**
	 * Loads plugin files.
	 *
	 * @since 0.0.1
	 *
	 * @return void
	 */
	public function load_plugin()
	{
		require_once ZOLO_DIR_PATH . 'includes/helpers/zolo-helpers.php';

		if (is_admin()) {
			//Load Admin required files
		}
	}

	/**
	 * Activation Reset
	 *
	 * @since 0.0.1
	 */
	public function activation_reset()
	{
	}

	/**
	 * Deactivation Reset
	 *
	 * @since 0.0.1
	 */
	public function deactivation_reset()
	{
	}

	/**
	 * Init actions
	 *
	 * @since 0.0.1
	 *
	 * @return void
	 */
	public function init_actions()
	{

		$theme_folder = get_template();

		if (function_exists('wp_is_block_theme') && wp_is_block_theme()) {
			if ('twentytwentytwo' === $theme_folder) {
				require_once ZOLO_DIR_PATH . 'compatibility/class-uagb-twenty-twenty-two-compatibility.php';
			}
		}

		if ('astra' === $theme_folder) {
			require_once ZOLO_DIR_PATH . 'compatibility/class-uagb-astra-compatibility.php';
		}
	}

	/**
	 * Register Block Category
	 *
	 * @since 0.0.1
	 *
	 * @return array
	 */
	public function register_block_category($categories, $post)
	{
		$updatedCat = [];
		$eb_category = array(
			'slug' => 'zolo-blocks',
			'title' => __('Zolo Blocks', 'zolo-blocks'),
		);
		$updatedCat[0] = $eb_category;
		$updatedCat = array_merge($updatedCat, $categories);
		return $updatedCat;
	}

	/**
	 * Hanlde Block Style
	 *
	 * @since 0.0.1
	 *
	 * @return array
	 */
	public function generate_style_on_render_block($block_content, $block)
	{
		if (str_contains($block['blockName'], 'zolo/')) {
			if (isset($block['attrs']['blockStyle'])) {
				$style = Zolo_Helpers::zolo_generate_style($block['attrs']['blockStyle']);
				$block_content = sprintf(
					'<style>%1$s</style>%2$s',
					$style,
					$block_content
				);
			}
		}

		return $block_content;
	}
}
  
// Zolo_Blocks_Loader Instance
if (class_exists('Zolo_Blocks_Loader')) {
	new Zolo_Blocks_Loader();
}