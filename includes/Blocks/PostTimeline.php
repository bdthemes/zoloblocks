<?php

namespace Zolo\Blocks;

use Zolo\API\GetPostsV1;
use Zolo\Helpers\ZoloHelpers;

/**
 * PostTimeline block
 */
class PostTimeline extends PostBlock {

	/**
	 * Block default attributes
	 *
	 * @var array
	 */
	protected $default_block_attributes = [
		'preset'             => 'style-1',
		'postTitleAnimation' => '',
		'thumbnailSize'      => '',
		'showExcerpt'        => true,
		'excerptindicator'   => '...',
		'excerptWords'       => 15,
		'showComment'        => true,
		'showReadingTime'    => true,
		'showDate'           => true,
		'showStartEnd'       => true,
		'showThumbnail'      => true,
		'blockName'          => 'post-timeline',
		'metaSeparator'      => '//',
		'loadMoreText'       => 'Load More',
		'paginationType'     => 'normal',
	];

	/**
	 * Marge block default attributes
	 *
	 * @return array|mixed
	 */
	public function get_default_attributes() {
		return array_merge(parent::$default_attributes, $this->default_block_attributes);
	}

	/**
	 * Block Render
	 *
	 * @param array $attributes .
	 * @return false|string
	 */
	public function render($attributes) {

		$attributes   = wp_parse_args($attributes, $this->get_default_attributes());
		$postQuery    = $attributes['postQuery'] ?? [];
		$post_results = apply_filters('zolo_post_grid_results', GetPostsV1::zolo_posts_query($postQuery));

		ob_start();
		ZoloHelpers::views(
			'post-timeline',
			[
				'settings'     => $attributes,
				'className'    => '',
				'post_results' => $post_results,
				'class_object' => $this,
				'parentWrap'   => true,
			]
		);
		return ob_get_clean();
	}
}
