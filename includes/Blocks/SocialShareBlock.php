<?php

namespace Zolo\Blocks;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
	exit;
}

if (! class_exists('SocialShareBlock')) {

	/**
	 * Class SocialShareBlock
	 *
	 * @since 2.2.6
	 */
	class SocialShareBlock {

		use SingletonTrait;

		/**
		 * Constructor
		 *
		 * @since 2.2.6
		 *
		 * @return void
		 */
		public function __construct() {
			add_filter('render_block_zolo/social-share', [$this, 'render_social_share_block'], 10, 2);
		}

		/**
		 * Render social-share block
		 *
		 * @since 2.2.6
		 *
		 * @return string
		 */
		public function render_social_share_block($block_content, $block) {
			$attrs = $block['attrs'] ?? [];

			if (! empty($attrs['dynamicLink'])) {
				$tags = new \WP_HTML_Tag_Processor($block_content);

				while ($tags->next_tag()) {
					if ($tags->get_attribute('data-url') !== null) {
						$tags->set_attribute('data-url', esc_url(get_the_permalink()));
					}
				}
				$block_content = $tags->get_updated_html();
			}

			return $block_content;
		}
	}
}
