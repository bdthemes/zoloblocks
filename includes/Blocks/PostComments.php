<?php

namespace Zolo\Blocks;

use Zolo\Classes\ZoloAJAX;
use Zolo\Helpers\ZoloHelpers;

/**
 * Post Category block
 */
class PostComments extends PostBlock {

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'preset'           => 'style-1',
		'showTitle'        => true,
		'showText'         => true,
		'textLimit'        => 30,
		'showAuthor'       => true,
		'authorMiddleText' => '@',
		'showDate'         => true,
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

		$attributes                 = wp_parse_args( $attributes, $this->get_default_attributes() );
		$textLimit                  = $attributes['textLimit'] ?? 30;
		$avatarSize                 = $attributes['avatarSize'] ?? '80';
		$commentQuery               = $attributes['commentQuery'] ?? [];
		$commentQuery['textLimit']  = $textLimit;
		$commentQuery['avatarSize'] = $avatarSize;

		$comments = ZoloAJAX::comments_query( $commentQuery );
		// array to object convert.
		$comments_json   = wp_json_encode( $comments );
		$comments_object = json_decode( $comments_json );

		ob_start();
		ZoloHelpers::views(
			'post-comments',
			[
				'settings'     => $attributes,
				'className'    => '',
				'class_object' => $this,
				'comments'     => $comments_object,
			]
		);
		return ob_get_clean();
	}
}
