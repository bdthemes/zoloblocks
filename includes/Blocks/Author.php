<?php

namespace Zolo\Blocks;

use Zolo\Classes\ZoloAJAX;
use Zolo\Helpers\ZoloHelpers;

/**
 * Post Category block
 */
class Author extends PostBlock {

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'preset'           => 'style-1',
		'showCount'        => true,
		'itemHoverOpacity' => 1,
	];

	/**
	 * Marge attributes
	 *
	 * @return array|mixed|string[]
	 */
	public function get_default_attributes() {
		return array_merge( parent::$default_attributes, $this->default_block_attributes );
	}

	/**
	 * Post category block frontend.
	 *
	 * @param array $attributes .
	 * @return false|string
	 */
	public function render( $attributes ) {

		$attributes = wp_parse_args( $attributes, $this->get_default_attributes() );
		$categories = ZoloAJAX::author_query( $attributes['authorQuery'] );
		$cat_json   = wp_json_encode( $categories );
		$cat_object = json_decode( $cat_json );

		ob_start();
		ZoloHelpers::views(
			'author',
			[
				'settings'     => $attributes,
				'className'    => '',
				'class_object' => $this,
				'categories'   => $cat_object,
			]
		);
		return ob_get_clean();
	}
}
