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
		$separatorIcon = $attributes['separatorIcon'] ?? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>';

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
