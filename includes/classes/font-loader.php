<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if ( ! defined('ABSPATH') ) {
	exit;
}

class ZB_Font_Loader {

	private static $instance;

	/**
	 * Registers the plugin
	 */
	public static function register() {
		if (null === self::$instance) {
			self::$instance = new ZB_Font_Loader();
		}
	}

    private static $all_fonts = [];

	/**
	 * The Constructor.
	 */
	public function __construct() {
		add_action('wp_enqueue_scripts', array($this, 'fonts_loader'));
		add_action('admin_enqueue_scripts', array($this, 'fonts_loader'));
		add_action('zolo_block_render_block', array($this, 'font_generator'));
	}

    public function font_generator($block) {
        if (isset($block['attrs']) && is_array($block['attrs'])) {
            $attributes = $block['attrs'];
            foreach ($attributes as $key => $value) {
                if (!empty($value) && strpos($key, 'zolo_') === 0 && strpos($key, 'FontFamily') !== false) {
                    self::$all_fonts[] = $value;
                }
            }
			$this->fonts_loader();
        }
    }

	/**
	 * Load fonts.
	 *
	 * @access public
	 */
	public function fonts_loader() {

		if (is_array(self::$all_fonts) && count(self::$all_fonts) > 0) {

			$fonts = array_filter(array_unique(self::$all_fonts));

			if (!empty($fonts)) {

				$system = array(
					'Arial',
					'Tahoma',
					'Verdana',
					'Helvetica',
					'Times New Roman',
					'Trebuchet MS',
					'Georgia',
				);

				$gfonts = '';

				$gfonts_attr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';

				foreach ($fonts as $font) {
					if (!in_array($font, $system, true) && !empty($font)) {
						$gfonts .= str_replace(' ', '+', trim($font)) . $gfonts_attr . '|';
					}
				}

				if (!empty($gfonts)) {
					$font_array = explode('|', $gfonts);
					
					foreach ($font_array as $font) {
						if (empty($font)) {
							continue;
						}

						$query_args = ['family' => $font];
						$font_handle = 'zolo-block-fonts-' . sanitize_title($font);
				
						wp_register_style(
							$font_handle,
							add_query_arg($query_args, '//fonts.googleapis.com/css'),
							[],
							ZOLO_VERSION,
							'all'
						);
				
						wp_enqueue_style($font_handle);
					}
				}  

				// if (!empty($gfonts)) {
				// 	$font_array = explode('|', $gfonts);
					
				// 	foreach ($font_array as $font) {
				// 		if (empty($font)) {
				// 			continue;
				// 		}

				// 		$query_args = ['family' => $font];
				// 		$font_handle = 'zolo-block-fonts';
				
				// 		wp_register_style(
				// 			$font_handle,
				// 			add_query_arg($query_args, '//fonts.googleapis.com/css'),
				// 			[],
				// 			ZOLO_VERSION,
				// 			'all'
				// 		);
				
				// 		wp_enqueue_style($font_handle);
				// 	}
				// }  

				// Reset.
				$gfonts = '';
			}
		}
	}
}

ZB_Font_Loader::register();
