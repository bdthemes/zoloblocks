<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * Breadcrumb block
 */
class BreadcrumbsBlock {

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'preset'        => 'style-1',
		'showSeparator' => true,
		'showHome'      => true,
		'showCurrent'   => true,
		'homeIcon'      => '',
		'homeText'      => 'Home',
	];

	/**
	 * Breadcrumbs block frontend.
	 *
	 * @param array $attributes .
	 * @return false|string
	 */
	public function render( $attributes ) {
		$attributes    = wp_parse_args( $attributes, $this->default_block_attributes );
		$separatorIcon = $attributes['separatorIcon'] ?? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m9 5 7 7-7 7"/>
          </svg';

		$content = Breadcrumbs::getInstance()->get_breadcrumb(
			[
				'separator'     => $separatorIcon,
				'labels'        => [
					'homeText' => $attributes['homeText'] ?? '',
					'homeIcon' => $attributes['homeIcon'] ?? '',
				],
				'showSeparator' => $attributes['showSeparator'] ?? '',
			]
		);
		ob_start();
		ZoloHelpers::views(
			'breadcrumbs',
			[
				'settings' => $attributes,
				'content'  => $content,

			]
		);
		return ob_get_clean();
	}
}
