<?php

/**
 * ZoloHelpers
 *
 * AJAX Event Handler
 *
 * @class    ZoloHelpers
 * @version  0.0.1
 * @package  zolo-helpers
 * @category Class
 */

namespace Zolo\Helpers;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
	exit;
}

/**
 * Zolo helper main helper function
 */
class ZoloHelpers {
	use SingletonTrait;

	/**
	 * Filter Blocks
	 */
	public static function filter_blocks($block) {
		return isset($block['visibility']) ? $block['visibility'] : false;
	}

	/**
	 * array of object to string
	 */
	public static function array_column_from_json($arr, $handle, $json = true) {
		$arr = $json ? json_decode($arr, true) : $arr;
		$arr = array_column($arr, $handle);

		return $arr;
	}

	/**
	 * Isset Check
	 */
	// public static function zolo_isset_check($value, $default = '') {
	// if (isset($_POST[$value])) {
	// return $_POST[$value];
	// } else {
	// return $default;
	// }
	// }

	/**
	 * check isset & not empty and return data
	 */
	public static function get_data($arr, $key, $default = null) {
		return isset($arr[$key]) && ! empty($arr[$key]) ? $arr[$key] : $default;
	}

	/**
	 * Is Gutenberg Editor
	 */
	public static function zolo_is_gutenberg_editor($pagenow, $param) {
		if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php') {
			return true;
		}

		if ($pagenow == 'themes.php' && ! empty($param) && str_contains($param, 'gutenberg-edit-site')) {
			return true;
		}

		return false;
	}

	/**
	 * Get file path
	 *
	 * @param string $name file name.
	 * @return false|string
	 */
	protected static function get_views_path($name) {
		// Define the base path.
		$paths = [
			trailingslashit(ZOLO_DIR_PATH) . 'views/' . $name . '.php',
		];

		// Check if ZOLO_PRO_DIR_PATH is defined and add it to the paths.
		if (defined('ZOLO_PRO_DIR_PATH')) {
			$paths[] = trailingslashit(ZOLO_PRO_DIR_PATH) . 'views/' . $name . '.php';
		}

		// Iterate through the paths and return the first existing file.
		foreach ($paths as $path) {
			if (file_exists($path)) {
				return $path;
			}
		}

		return false;
	}



	/**
	 * Get views for front-end display
	 *
	 * @param string $name  it will be file name only from the view's folder.
	 * @param array  $data
	 * @return void
	 */
	public static function views($name, $data = []) {
		$__file = self::get_views_path($name);

		extract($data);
		if (is_readable($__file)) {
			include $__file;
		}
	}

	public static function get_post_types() {
		$post_types     = get_post_types(
			[
				'public'            => true,
				'show_in_nav_menus' => true,
			],
			'objects'
		);
		$post_types     = wp_list_pluck($post_types, 'label', 'name');
		$excluded_types = apply_filters(
			'zolo_exclude_post_type',
			[
				'attachment'        => 'Attachment',
				'elementor_library' => 'Elementor Library',
				'e-landing-page'    => 'Landing Page',
			]
		);
		return array_diff_key($post_types, $excluded_types);
	}

	public static function get_all_users() {
		$users   = [];
		$authors = get_users(apply_filters('zolo_author_arg', []));
		if (! empty($authors)) {
			foreach ($authors as $user) {
				$users[] = [
					'value' => $user->ID,
					'label' => $user->display_name,
				];
			}
		}
		return $users;
	}

	public static function get_taxonomies() {
		$get_tax_object = get_taxonomies([], 'objects');
		$exclude_tax    = self::get_excluded_taxonomy();
		foreach ($exclude_tax as $_tax) {
			unset($get_tax_object[$_tax]);
		}
		return $get_tax_object;
	}

	public static function get_all_taxonomy() {
		$post_types     = self::get_post_types();
		$taxonomies     = get_taxonomies([], 'objects');
		$all_taxonomies = [];
		foreach ($taxonomies as $taxonomy => $object) {
			if (
				! isset($object->object_type[0]) || ! in_array($object->object_type[0], array_keys($post_types))
				|| in_array($taxonomy, self::get_excluded_taxonomy())
			) {
				continue;
			}
			$all_taxonomies[$taxonomy] = self::get_terms_by_texonomy($taxonomy);
		}

		return $all_taxonomies;
	}

	public static function get_excluded_taxonomy() {
		return apply_filters(
			'zolo_exclude_taxonomy',
			[
				'post_format',
				'nav_menu',
				'link_category',
				'wp_theme',
				'elementor_library_type',
				'elementor_library_type',
				'elementor_library_category',
				'product_visibility',
				'product_shipping_class',
				'product_type',
			]
		);
	}

	public static function get_terms_by_texonomy($cat = 'category') {
		$terms = get_terms(
			[
				'taxonomy'   => $cat,
				'hide_empty' => true,
			]
		);

		$options = [];
		if (! empty($terms) && ! is_wp_error($terms)) {
			foreach ($terms as $term) {
				$options[$term->term_id] = $term->name;
			}
		}

		return $options;
	}

	/**
	 * Get the post thumbnail URL
	 *
	 * @param int    $post_id
	 * @param string $size
	 * @return string
	 */
	public static function get_wrapper_class($settings = [], $class_name = '') {
		$wrap_class = '';

		if (isset($settings['uniqueId'])) {
			$wrap_class .= $settings['uniqueId'];
		}

		if (! empty($class_name)) {
			$wrap_class .= ' ' . $class_name;
		}

		return $wrap_class;
	}

	/**
	 * Get the post thumbnail URL
	 *
	 * @param int    $post_id
	 * @param string $size
	 * @return string
	 */
	public static function removeHtmlTagContents($contant, $tags) {
		if (is_array($tags)) {
			foreach ($tags as $tag) {
				$contant = preg_replace(
					sprintf(
						'/<%1$s\b[^>]*>(.*?)<\/%1$s>/is',
						$tag
					),
					'',
					$contant
				);
			}
		} else {
			$contant = preg_replace('/<figure\b[^>]*>(.*?)<\/figure>/is', '', $contant);
		}

		return $contant;
	}

	/**
	 * Get Pagination
	 *
	 * @param int $max_pages
	 * @return string
	 */
	public static function pagination($max_pages) {
		global $paged;

		if (! empty(get_query_var('page')) || ! empty(get_query_var('paged'))) {
			$paged = is_front_page() ? absint(get_query_var('page')) : absint(get_query_var('paged'));
		} else {
			$paged = 1;
		}

		if ($max_pages > 1) {
			$big = 9999999;
			return paginate_links(
				[
					'base'      => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
					'format'    => '?paged=%#%',
					'current'   => $paged,
					'total'     => $max_pages,
					'prev_text' => sprintf('<span>%1$s</span>', __('prev', 'zoloblocks')),
					'next_text' => sprintf('<span>%1$s</span>', __('next', 'zoloblocks')),
				]
			);
		}
	}

	/**
	 * Get SVG Icon
	 *
	 * @param string $icon
	 * @param string $class
	 * @return string
	 */
	public static function render_svg_html($viewBox, $path) {
		return sprintf(
			'<svg xmlns="https://www.w3.org/2000/svg" viewBox="%s" width="1em" height="1em" fill="currentColor"><path d="%s"></path></svg>',
			esc_attr($viewBox),
			esc_attr($path)
		);
	}

	/**
	 * Get Allowed SVG
	 *
	 * @return array
	 */
	public static function wp_kses_allowed_svg() {
		$defaults = wp_kses_allowed_html('post');
		$svg_args = [
			'svg'   => [
				'class'           => true,
				'aria-hidden'     => true,
				'aria-labelledby' => true,
				'role'            => true,
				'xmlns'           => true,
				'width'           => true,
				'height'          => true,
				'viewbox'         => true,
			],
			'g'     => ['fill' => true],
			'title' => ['title' => true],
			'path'  => [
				'd'    => true,
				'fill' => true,
			],
		];

		return array_merge($defaults, $svg_args);
	}

	/**
	 * Get Theme Fonts
	 *
	 * @return array
	 */
	public static function zolo_get_theme_fonts() {
		// Retrieve global settings
		$global_settings = wp_get_global_settings();
		$global_fonts    = $global_settings['typography']['fontFamilies'] ?? [];

		if (empty($global_fonts)) {
			return [];
		}

		$theme_fonts  = [];
		$custom_fonts = [];
		$final_fonts  = [];

		// Check if theme fonts exist and are not empty
		if (isset($global_fonts['theme']) && ! empty($global_fonts['theme'])) {
			foreach ($global_fonts['theme'] as $font) {
				if (isset($font['name'])) {
					$theme_fonts[] = $font['name'];
				}
			}
		}

		// Check if custom fonts exist and are not empty
		if (isset($global_fonts['custom']) && ! empty($global_fonts['custom'])) {
			foreach ($global_fonts['custom'] as $font) {
				if (isset($font['name'])) {
					$custom_fonts[] = $font['name'];
				}
			}
		}

		// Merge theme and custom fonts into the final array
		$final_fonts = array_merge($theme_fonts, $custom_fonts);

		// if any font in final_fonts array includes 'system' or 'System' keyword, then keep them at the top of the array
		$system_fonts = array_filter(
			$final_fonts,
			function ($font) {
				return strpos($font, 'system') !== false || strpos($font, 'System') !== false;
			}
		);

		// final fonts array including system fonts at the top
		$final_fonts = array_merge($system_fonts, array_diff($final_fonts, $system_fonts));

		// remove duplicate fonts
		$final_fonts = array_unique($final_fonts);

		return $final_fonts;
	}

	/**
	 * Generate Style String
	 */
	public static function zolo_generate_style($style) {
		$css = '';
		if (isset($style['desktop']) && strlen($style['desktop']) > 0) {
			$css .= $style['desktop'];
		}
		if (isset($style['tab']) && strlen($style['tab']) > 0) {
			$css .= sprintf(
				'@media all and (max-width: 1024px) {%1$s}',
				$style['tab']
			);
		}
		if (isset($style['mobile']) && strlen($style['mobile']) > 0) {
			$css .= sprintf(
				'@media all and (max-width: 767px) {%1$s}',
				$style['mobile']
			);
		}

		if (! empty($style['customCss']) && strlen($style['customCss']) > 0) {
			$css .= $style['customCss'];
		}

		return $css;
	}

	/**
	 * Get nonce id
	 *
	 * @return string|null
	 */
	public static function ge_nonce_id() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return isset($_REQUEST['zolo_nonce']) ? sanitize_text_field(wp_unslash($_REQUEST['zolo_nonce'])) : null;
	}

	/**
	 * Generate nonce text
	 *
	 * @return string
	 */
	public static function get_nonce_text() {
		return 'zolo-nonce';
	}

	/**
	 * WordCount function
	 *
	 * @param string $phrase .
	 * @param number $max_words .
	 * @return string
	 */
	public static function wordcount($phrase, $max_words) {
		$phrase_array = explode(' ', $phrase);
		if (count($phrase_array) > $max_words && $max_words >= 0) {
			$phrase = implode(' ', array_slice($phrase_array, 0, $max_words));
		}
		return strip_shortcodes($phrase);
	}

	/**
	 * Hex color
	 *
	 * @param string $string .
	 * @param number $steps .
	 * @return false|string
	 */
	public static function strToHex($string, $steps = -10) {

		if (empty($string)) {
			return false;
		}

		$hex_output = sprintf('%s', substr(md5($string), 0, 6));

		// Steps should be between -255 and 255. Negative = darker, positive = lighter.
		$steps = max(-255, min(255, $steps));

		// Split into three parts: R, G and B.
		$color_parts = str_split($hex_output, 2);
		$output      = '#';

		foreach ($color_parts as $color) {
			$color   = hexdec($color); // Convert to decimal.
			$color   = max(0, min(255, $color + $steps)); // Adjust color.
			$output .= str_pad(dechex($color), 2, '0', STR_PAD_LEFT); // Make two char hex code.
		}

		return strToUpper($output);
	}
}
