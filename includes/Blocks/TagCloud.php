<?php

namespace Zolo\Blocks;

use Zolo\Classes\ZoloAJAX;
use Zolo\Helpers\ZoloHelpers;

/**
 * Post Category block
 */
class TagCloud extends PostBlock {

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'preset'           => 'style-1',
		'showCount'        => true,
		'openInNewTab'     => false,
		'itemHoverOpacity' => 1,
		'canvasSize'       => 400,
		'activeCursor'     => 'pointer',
		'depth'			   => 80,
		'speed'           => 50,
		'triggerOn' => 'always',
		'dragControl' => false,
		'wheelZoom' => false,
		'visibleTime' => 1,
		'animatedTextShadowColor' => '#fff',
		'animatedTextShadowBlur' => 10,
		'animatedBackgroundRadius' => 0,
		'animatedOutlineColor' => '#ddd',
		'animatedOutlineThickness' => 2,
		'animatedOutlineDash' => 0,
		'animatedOutlineDashSpace' => 2,
		'animatedOutlineDashSpeed' => 3,
		'animatedIncrease' => 5,
		'animatedBorderRadius' => 2
	];

	/**
	 * Marge attributes
	 *
	 * @return array|mixed|string[]
	 */
	public function get_default_attributes() {
		if (class_exists('Zolo_Blocks_Pro')) {
			$this->default_block_attributes['tagCloudPro'] = [
				'enableMultipleBG' => false,
				'multipleBG'       => '',
			];
		}
		return array_merge(parent::$default_attributes, $this->default_block_attributes);
	}

	/**
	 * Post category block frontend.
	 *
	 * @param array $attributes .
	 * @return false|string
	 */
	public function render($attributes) {

		$attributes = wp_parse_args($attributes, $this->get_default_attributes());
		$categories = ZoloAJAX::zolo_post_category_query($attributes['catQuery']);
		$cat_json   = wp_json_encode($categories);
		$cat_object = json_decode($cat_json);

		$multiple_bg_create = [];

		if (!empty($attributes['tagCloudPro']['enableMultipleBG']) && ! empty($attributes['tagCloudPro']['multipleBG'])) {
			$multi_bg       = $attributes['tagCloudPro']['multipleBG'];
			$multiple_bg    = explode(',', rtrim($multi_bg, ','));
			$total_category = count($categories);

			// re-creating array for the multiple colors.
			$jCount = count($multiple_bg);
			$j      = 0;
			for ($i = 0; $i < $total_category; $i++) {
				if ($j == $jCount) {
					$j = 0;
				}
				$multiple_bg_create[$i] = $multiple_bg[$j];
				$j++;
			}
		}

		ob_start();
		ZoloHelpers::views(
			'tag-cloud',
			[
				'settings'     => $attributes,
				'className'    => '',
				'class_object' => $this,
				'categories'   => $cat_object,
				'multiple_bg'  => $multiple_bg_create,
			]
		);
		return ob_get_clean();
	}
}
