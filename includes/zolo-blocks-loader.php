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

if (!class_exists('Zolo_Blocks_Loader')) {

	/**
	 * Class Zolo_Blocks_Loader.
	 */
	final class Zolo_Blocks_Loader
	{

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 */
		public static function get_instance()
		{
			if (!isset(self::$instance)) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct()
		{

			// Activation hook.
			register_activation_hook(ZOLO_FILE, array($this, 'activation_reset'));

			// deActivation hook.
			register_deactivation_hook(ZOLO_FILE, array($this, 'deactivation_reset'));

			if (!$this->is_gutenberg_active()) {
				/* TO DO */
				add_action('admin_notices', array($this, 'zolo_gutenberg_unavailable_notice'));
				return;
			}

			$this->loader();

			add_action('plugins_loaded', array($this, 'load_plugin'));

			add_action('init', array($this, 'init_actions'));
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
			// require_once ZOLO_DIR_PATH . 'helpers/zolo-helpers.php';

			if (is_admin()) {
				//Load Admin required files
			}
		}

		/**
		 * Check if Gutenberg is active
		 *
		 * @since 0.0.1
		 *
		 * @return boolean
		 */
		public function is_gutenberg_active()
		{
			return function_exists('register_block_type');
		}

		/**
		 * Fires admin notice when Gutenberg is not installed and activated.
		 *
		 * @since 0.0.1
		 *
		 * @return void
		 */
		public function zolo_gutenberg_unavailable_notice()
		{

			if (!current_user_can('install_plugins')) {
				return;
			}

			$class = 'notice notice-error';
			/* translators: %s: html tags */
			$message = sprintf(
				__('The <%1$s>%2$s</%1$s> plugin requires <%1$s>Gutenberg</%1$s> plugin installed & activated.', 'zolo-blocks'), 
				$tag = 'strong',
				ZOLO_NAME
			);

			$action_url   = wp_nonce_url(self_admin_url('update.php?action=install-plugin&plugin=gutenberg'), 'install-plugin_gutenberg');
			$button_label = __('Install Gutenberg', 'zolo-blocks');

			$button = '<p><a href="' . $action_url . '" class="button-primary">' . $button_label . '</a></p><p></p>';

			printf('<div class="%1$s"><p>%2$s</p>%3$s</div>', esc_attr($class), wp_kses_post($message), wp_kses_post($button));
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
	}
}

Zolo_Blocks_Loader::get_instance();