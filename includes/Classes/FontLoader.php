<?php
namespace Zolo\Classes;
use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if ( ! defined('ABSPATH') ) {
	exit;
}

if( ! class_exists( 'FontLoader' ) ) {

	/**
	 * FontLoader Class
	 */
	class FontLoader {

		use SingletonTrait;

		/**
		 * All fonts.
		 *
		 * @var array
		 */
		private static $all_fonts = [];
	
		/**
		 * The Constructor.
		 */
		public function __construct() {
			add_action( 'wp_enqueue_scripts', array( $this, 'fonts_loader' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'fonts_loader' ), 9999 );
			add_action( 'zolo_block_render_block', array( $this, 'font_generator' ) );
		}
	
		/**
		 * Generates a font for the given block.
		 *
		 * @param mixed $block The block for which the font is generated.
		 * @return void
		 */
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
		 * This method is responsible for loading fonts in the Zoloblocks plugin.
		 * It is called from the `fonts_loader` method in the `FontLoader` class.
		 * 
		 * @since 1.0.0
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
		
					$theme_fonts = ZoloHelpers::zolo_get_theme_fonts();
		
					$system = array_merge($system, $theme_fonts);
					$system = array_unique($system);
		
					$gfonts = [];
		
					$gfonts_attr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';
		
					foreach ($fonts as $font) {
		
						// Check if font is Default
						if (strpos($font, 'Default') !== false) {
							continue;
						}
		
						if (!in_array($font, $system, true) && !empty($font)) {
							$gfonts[] = str_replace(' ', '+', trim($font)) . $gfonts_attr;
						}
					}
		
					if (!empty($gfonts)) {
						$gfonts_string = implode('|', $gfonts);
		
						$query_args = ['family' => $gfonts_string];
						$font_handle = 'zolo-block-fonts';
		
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
			}
		}
	}
}