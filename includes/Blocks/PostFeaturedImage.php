<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * Post Navigation block
 */
class PostFeaturedImage {


	/**
	 * @var array $settings .
	 */
	protected $settings;

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'showCategoryBased' => false,
	];

	/**
	 * Post navigation block frontend.
	 *
	 * @param array $attributes .
	 * @return false|string
	 */
	public function render( $attributes ) {
		return '<h1>post featured image </h1>';
	}
}
