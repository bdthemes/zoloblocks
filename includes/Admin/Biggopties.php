<?php

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

/**
 * Biggopties class
 */
class Biggopties {
	use SingletonTrait;

	private static $biggopties = [];


	public function __construct() {
		add_action('wp_ajax_bdt_admin_api_biggopti_dismiss', [$this, 'bdt_admin_api_biggopti_dismiss']);

		add_action('admin_enqueue_scripts', [$this, 'load_assets']);
	}

	/**
	 * Dismiss Admin API Biggopti.
	 */
	public function bdt_admin_api_biggopti_dismiss() {
		$nonce = (isset($_POST['_wpnonce'])) ? sanitize_text_field($_POST['_wpnonce']) : '';
		$display_id = (isset($_POST['display_id'])) ? sanitize_text_field($_POST['display_id']) : '';
		$id   = (isset($_POST['id'])) ? esc_attr($_POST['id']) : '';
		$meta = (isset($_POST['meta'])) ? esc_attr($_POST['meta']) : '';

		if (! wp_verify_nonce($nonce, 'zoloblocks')) {
			wp_send_json_error();
		}

		if (! current_user_can('manage_options')) {
			wp_send_json_error();
		}

		// Prefer display_id; fallback: extract from id (bdt-admin-api-biggopti-{display_id})
		if (empty($display_id) && !empty($id)) {
			$prefix = 'bdt-admin-api-biggopti-';
			if (strpos($id, $prefix) === 0) {
				$display_id = substr($id, strlen($prefix));
			} else {
				$display_id = $id;
			}
		}

		/**
		 * Valid inputs?
		 */
		if (!empty($display_id)) {
			if ('user' === $meta) {
				$user_key = 'bdt-admin-api-biggopti-' . $display_id;
				update_user_meta(get_current_user_id(), $user_key, true);
			} else {
				// Save to options table only - display_id based, no end-time expiration
				$dismissals_option = get_option('bdt_biggopti_dismissals', []);
				$dismissals_option[$display_id] = ['dismissed_at' => time()];
				update_option('bdt_biggopti_dismissals', $dismissals_option, false);
			}

			wp_send_json_success();
		}

		wp_send_json_error();
	}

	function load_assets() {
		wp_enqueue_style(
			'zolo-admin-api-biggopti',
			ZOLO_ADMIN_URL . 'includes/Admin/assets/css/biggopti.css',
			[],
			ZOLO_VERSION
		);
		// Enqueue biggopti JavaScript for admin
		wp_enqueue_script(
			'zolo-admin-api-biggopti',
			ZOLO_ADMIN_URL . 'includes/Admin/assets/js/biggopti.js',
			['jquery'],
			ZOLO_VERSION,
			true
		);
		$dismissals = get_option('bdt_biggopti_dismissals', []);
		$dismissed_display_ids = [];
		$prefix = 'bdt-admin-biggopti-api-biggopti-';
		foreach (array_keys($dismissals) as $key) {
			if (strpos($key, $prefix) === 0) {
				$dismissed_display_ids[] = substr($key, strlen($prefix));
			} else {
				$dismissed_display_ids[] = $key;
			}
		}

		$current_sector = '';
		if (isset($_GET['page']) && $_GET['page'] === 'zoloblocks') {
			$current_sector = 'plugin_dashboard';
		}

		// Localize script with necessary data
		wp_localize_script('zolo-admin-api-biggopti', 'ZoloBlocksAdminApiBiggoptiConfig', [
			'ajaxurl' => admin_url('admin-ajax.php'),
			'nonce'   => wp_create_nonce('zoloblocks'),
			'isPro'             	=> class_exists('Zolo_Blocks_Pro') ? true : false,
			'assetsUrl'         	=> ZOLO_ADMIN_URL . 'includes/Admin/images/zoloblocks.svg',
			'dismissedDisplayIds'	=> $dismissed_display_ids,
			'currentSector'      	=> $current_sector,
		]);
	}
}
