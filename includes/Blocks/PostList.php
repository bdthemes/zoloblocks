<?php

namespace Zolo\Blocks;

use Zolo\API\GetPostsV1;
use Zolo\Helpers\ZoloHelpers;

class PostList extends PostBlock {

	protected $default_block_attributes = [
		'name'             => 'post-list',
		'preset'           => 'style-1',
		'thumbnailSize'    => '',
		'showExcerpt'      => false,
		'excerptindicator' => '...',
		'excerptWords'     => 15,
		'showCount'        => false,
		'showFeatureimg'   => true,
		'blockName'        => 'post-list',
		'metaSeparator'    => '//',
		'showReadingTime'  => false,
		'loadMoreText'     => 'Load More',
		'paginationType'   => 'normal',
		'authorPrefix'     => 'By',
		'readMoreText'     => 'Read More',
		'readMoreIcon'     => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>',
	];

	public function get_default_attributes() {
		return array_merge( parent::$default_attributes, $this->default_block_attributes );
	}

	public function render( $attributes ) {
		$attributes   = wp_parse_args( $attributes, $this->get_default_attributes() );
		$postQuery    = $attributes['postQuery'] ?? [];
		$post_results = apply_filters( 'zolo_post_grid_results', GetPostsV1::zolo_posts_query( $postQuery ) );

		ob_start();
		ZoloHelpers::views(
			'post-list',
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