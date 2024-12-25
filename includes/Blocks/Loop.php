<?php

namespace Zolo\Blocks;

/**
 * Loop block
 */
class Loop
{

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [];

	/**
	 * Loop block frontend.
	 *
	 * @param array  $attributes .
	 * @param string $content .
	 * @param array  $block .
	 * @return false|string
	 */
	public function render($attributes, $content, $block)
	{
		$attributes = wp_parse_args($attributes, $this->default_block_attributes);
		$loop_context = $block->context['loopContext'] ?? null;
		$ref = $attributes['ref'] ?? null;
		if (!empty($ref)) {
			$innerBlocks = get_post($ref);
			$parsed_blocks = [];
			foreach (parse_blocks($innerBlocks->post_content) as $reusable_block) {
				if (!empty($reusable_block['blockName'])) {
					$parsed_blocks[] = $reusable_block;
				}
			}

			$content = '';
			if (!empty($parsed_blocks)) {
				if (!empty($loop_context['query']) && !is_admin()) {
					$query = $loop_context['query'];
					if ($query->have_posts()) {
						while ($query->have_posts()) {
							$query->the_post();
							$block_content = '';
							foreach ($parsed_blocks as $parsed_block) {
								$block_content .= render_block($parsed_block);
							}
							$post_classes = implode(' ', get_post_class('wp-block-post'));
							$content .= '<li class="' . esc_attr($post_classes) . '">' . $block_content . '</li>';
						}
						wp_reset_query();
					}
				}
			}

			$wrapper_attributes = get_block_wrapper_attributes();

			return sprintf(
				'<ul %1$s>%2$s</ul>',
				$wrapper_attributes,
				$content
			);
		}

		return '';
	}
}
