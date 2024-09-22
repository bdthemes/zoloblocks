<?php

namespace Zolo\Blocks;

use Zolo\API\GetPostsV1;
use Zolo\Helpers\ZoloHelpers;

/**
 * Post video slider block
 */
class PostVideoSlider extends PostBlock {

	protected $default_block_attributes = [
		'preset'           => 'style-1',
		'thumbnailSize'    => '',
		'showExcerpt'      => true,
		'excerptindicator' => '...',
		'excerptWords'     => 15,
		'showDate'         => true,
		'showNavigation'   => true,
		'customNavIcon'    => true,
		'contentPosition'  => 'zolo-center-center',

	];

	/**
	 * Marge default attributes & block attributes
	 *
	 * @return array|mixed
	 */
	public function get_default_attributes() {
		return array_merge( parent::$default_attributes, $this->default_block_attributes );
	}

	/**
	 * Video link render
	 *
	 * @param string $video .
	 * @return false|string
	 */
	public function video_link_render( $video ) {
		$youtube_id = ( preg_match( '%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $video, $match ) ) ? $match[1] : false;

		$vimeo_id = ( preg_match( '%^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)(?:[?]?.*)$%im', $video, $match ) ) ? $match[3] : false;

		if ( $youtube_id ) {
			$video_source = 'https://www.youtube.com/embed/' . $youtube_id;
		} elseif ( $vimeo_id ) {
			$video_source = 'https://vimeo.com/' . $vimeo_id;
		} else {
			$video_source = false;
		}
		return $video_source;
	}

	/**
	 * Render block
	 *
	 * @param array $attributes .
	 * @return false|string
	 */
	public function render( $attributes ) {

		$attributes = wp_parse_args( $attributes, $this->get_default_attributes() );

		$postQuery = $attributes['postQuery'] ?? [];

		$post_results = apply_filters( 'zolo_post_video_slider_results', GetPostsV1::zolo_posts_query( $postQuery ) );

		ob_start();
		ZoloHelpers::views(
			'post-video-slider',
			[
				'settings'     => $attributes,
				'className'    => '',
				'post_results' => $post_results,
				'class_object' => $this,
			]
		);
		return ob_get_clean();
	}
}
