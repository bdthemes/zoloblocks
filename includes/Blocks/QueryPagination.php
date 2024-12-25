<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * QueryPagination block
 */
class QueryPagination
{

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'paginationType'                   => 'number-previous-next',
		'paginationNextPrevType'           => 'icon',
		'truncatePaginationNumbers'        => false,
		'PaginationNumberAmountBothSides'  => 2,
		'paginationPreviousText'           => 'Previous',
		'paginationNextText'               => 'Next',
		'prevIcon'                         => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></svg>',
		'nextIcon'                         => '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="512" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'
	];

	private function zolo_display_icon($icon)
	{
		return '<div class="zolo__display-icon">' . $icon . '</div>';
	}

	private function prev_next_items($type = 'text', $prev_text = 'Previous', $next_text = 'Next', $prev_icon = '', $next_icon = '')
	{
		$prev_next_args = [];
		switch ($type) {
			case 'text':
				$prev_next_args['prev_text'] = $prev_text;
				$prev_next_args['next_text'] = $next_text;
				break;
			case 'icon':
				$prev_next_args['prev_text'] = !empty($prev_icon) ? $prev_icon : '';
				$prev_next_args['next_text'] = !empty($next_icon) ? $next_icon : '';
				break;
			case 'icon-text':
				$prev_next_args['prev_text'] = !empty($prev_icon) ? $prev_icon . $prev_text : '';
				$prev_next_args['next_text'] = !empty($next_icon) ? $next_text . $next_icon : '';
				break;
		}
		return $prev_next_args;
	}

	public function render($attributes, $content, $block)
	{
		if (!isset($block->context['loopContext']['query'])) {
			return '';
		}

		$settings = wp_parse_args($attributes, $this->default_block_attributes);
		$paginationType = $settings['paginationType'];
		$paginationNextPrevType = $settings['paginationNextPrevType'];
		$truncatePaginationNumbers = $settings['truncatePaginationNumbers'];
		$mid_size = $settings['PaginationNumberAmountBothSides'];
		$prev_text = $settings['paginationPreviousText'];
		$next_text = $settings['paginationNextText'];
		$prev_icon = $settings['prevIcon'];
		$next_icon = $settings['nextIcon'];
		$query = $block->context['loopContext']['query'];
		$pagination_content = '';

		// Ensure $query is an instance of WP_Query and has max_num_pages property
		if ($query instanceof \WP_Query && isset($query->max_num_pages)) {
			$big = 99999999999;

			// Check if 'paged' exists, otherwise fallback to 'paginationPage'
			$paged = (get_query_var('paged')) ? get_query_var('paged') : (isset($_GET['zolo-qp']) ? $_GET['zolo-qp'] : 1);

			$args = array(
				'current' => max(1, $paged), // Use the adjusted $paged value
				'total' => $query->max_num_pages,
				'show_all' => isset($truncatePaginationNumbers) ? !$truncatePaginationNumbers : false,
				'mid_size' => $mid_size ? $mid_size : 2,
			);

			// Check if this is a single post.
			if (is_single()) {
				$args['base'] = str_replace($big, '%#%', esc_url(add_query_arg('zolo-qp', $big)));
				$args['format'] = '?zolo-qp=%#%';
			} else {
				$args['base'] = str_replace($big, '%#%', esc_url(get_pagenum_link($big)));
				$args['format'] = '?paged=%#%';
			}


			switch ($paginationType) {
				case 'number':
					$args['prev_next'] = false;
					break;
				case 'previous-next':
					$args['prev_next'] = true;
					$args = array_merge($args, $this->prev_next_items($paginationNextPrevType, $prev_text, $next_text, $this->zolo_display_icon($prev_icon), $this->zolo_display_icon($next_icon)));
					break;
				case 'number-previous-next':
					$args['prev_next'] = true;
					$args = array_merge($args, $this->prev_next_items($paginationNextPrevType, $prev_text, $next_text, $this->zolo_display_icon($prev_icon), $this->zolo_display_icon($next_icon)));
					break;
				default:
					$args['prev_next'] = false;
					break;
			}

			if ($paginationType === 'previous-next') {
				$filter_link_attributes_next = static function () {
					return "class='next page-numbers'";
				};
				$filter_link_attributes_prev = static function () {
					return "class='prev page-numbers'";
				};
				add_filter('next_posts_link_attributes', $filter_link_attributes_next);
				add_filter('previous_posts_link_attributes', $filter_link_attributes_prev);
				$pagination_content = get_previous_posts_link($args['prev_text'], $args['total']) . get_next_posts_link($args['next_text'], $args['total']);
				remove_filter('next_posts_link_attributes', $filter_link_attributes_next);
				remove_filter('previous_posts_link_attributes', $filter_link_attributes_prev);
			} else {
				$pagination_content = paginate_links($args) ?: '';
			}

			return sprintf(
				'<div %1s>%2s%3s%4s</div>',
				get_block_wrapper_attributes(),
				'<div class="zolo-query-pagination-wrapper">',
				$pagination_content,
				'</div>',
			);
		}

		return '';
	}
}
