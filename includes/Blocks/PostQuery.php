<?php

namespace Zolo\Blocks;

use Zolo\LoopBuilder\LoopBuilder;

/**
 * PostQuery block
 */
class PostQuery
{

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'queryId' => '',
		'query'   => [],
	];

	/**
	 * PostQuery block frontend.
	 *
	 * @param array  $attributes .
	 * @param string $content .
	 * @param array  $block .
	 * @return false|string
	 */
	public function render($attributes, $content, $block)
	{
		$attributes = wp_parse_args($attributes, $this->default_block_attributes);
		$query_id = isset($attributes['queryId']) ? $attributes['queryId'] : false;
		$query_args = isset($attributes['query']) ? LoopBuilder::build_post_query_args($attributes['query']) : [];
		$inherit = isset($query['inherit']) ? $query['inherit'] : false;
		$query = null;

		if ($inherit) {
			global $wp_query;

			if (in_the_loop()) {
				$query = clone $wp_query;
				$query->rewind_posts();
			} else {
				$query = $wp_query;
			}
		}else {
			$query = new \WP_Query($query_args);
		}
		
		$query_content = '';
		if ($query->have_posts()) {
			$block_instance = $block->parsed_block;
			$block_instance['blockName'] = 'core/null';

			$filter_block_context = static function ($context) use ($query, $query_id, $block_instance) {
				$context['loopContext'] = [
					'data' => [],
					'queryId' => $query_id,
					'query' => $query,
				];
				return $context;
			};
			// Use an early priority to so that other 'render_block_context' filters have access to the values.
			add_filter('render_block_context', $filter_block_context, 1);
			$block_content = (new \WP_Block($block_instance))->render(['dynamic' => false]);
			remove_filter('render_block_context', $filter_block_context, 1);

			$query_content .= $block_content;
		}
		return sprintf(
			'<div %1s>%2s</div>',
			get_block_wrapper_attributes(),
			$query_content
		);
	}
}
