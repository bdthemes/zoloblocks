<?php

/**
 * Main File
 */

if (! defined('ABSPATH')) {
	exit;
}

if (! function_exists('zolo_dci_dynamic_init')) {
	function zolo_dci_dynamic_init($params) {

		if (! is_admin()) {
			return;
		}

		$menu_slug    = isset($params['menu']['slug']) ? $params['menu']['slug'] : false;
		$current_page = isset($_GET['page']) ? $_GET['page'] : false; // phpcs:ignore
		$text_domain  = isset($params['text_domain']) && !empty($params['text_domain']) ? $params['text_domain'] : $params['slug'];

		/**
		 * For Attach SDK to current page
		 */
		$params['current_page'] = $current_page;
		$params['menu_slug']    = $menu_slug;
		$params['text_domain']  = $text_domain;

		/**
		 * Include SDK
		 */
		require_once dirname(__FILE__) . '/insights.php';
		if (function_exists('zolo_dci_sdk_insights')) {
			zolo_dci_sdk_insights($params);
		}
	}
}
