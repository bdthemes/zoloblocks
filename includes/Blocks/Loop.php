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
		$innerBlocks = get_post($ref);
		$parsed_blocks = [];
		foreach (parse_blocks($innerBlocks->post_content) as $block) {
			if (!empty($block['blockName'])) {
				$parsed_blocks[] = $block;
			}
		}

		$content = '';
		if (!empty($parsed_blocks)) {
			if (!empty($loop_context['query'])) {
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
					wp_reset_postdata();
				}
			}

			$data = [];
			if (!empty($loop_context['data']) && is_array($loop_context['data'])) {
				$data = $loop_context['data'];
			}

			if (!empty($attributes['data']) && is_array($attributes['data'])) {
				$data = $attributes['data'];
			}

			if (!empty($data) && empty($loop_context['query'])) {
				foreach ($data as $item) {
					$block_content = '';
					$item_attributes = $item['attributes'] ?? '';
					foreach ($parsed_blocks as $parsed_block) {
						$filter_block_context = static function ($context) use ($item) {
							$context['loopItem'] = $item;
							return $context;
						};

						add_filter('render_block_context', $filter_block_context, 1);
						$block_content .= (new \WP_Block($parsed_block))->render(array('dynamic' => false));
						remove_filter('render_block_context', $filter_block_context, 1);
					}
					$content .= '<li ' . esc_attr($item_attributes) . '>' . $block_content . '</li>';
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
}
