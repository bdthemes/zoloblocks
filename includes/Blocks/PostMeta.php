<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * PostMeta block
 */
class PostMeta {

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'separatorStyle'  => 'separator-dot',
		'customSeparator' => '/',
	];

	/**
	 * PostMeta block frontend.
	 *
	 * @param array  $attributes .
	 * @param string $content .
	 * @param array  $block .
	 * @return false|string
	 */
	public function render($attributes, $content, $block) {
		if (! isset($block->context['postId'])) {
			return '';
		}

		$post_ID            = $block->context['postId'];
		$settings           = wp_parse_args($attributes, $this->default_block_attributes);
		$wrapper_class      = trim(ZoloHelpers::get_wrapper_class($settings, ($settings['separatorStyle'] ?? '')) . ' ' . implode(' ', $settings['parentClasses'] ?? []));
		$wrapper_attributes = get_block_wrapper_attributes(['class' => esc_attr($wrapper_class)]);

		$output    = '<div ' . wp_kses_data($wrapper_attributes) . ' >';
		if (isset($settings['metaData']) && is_array($settings['metaData']) && count($settings['metaData']) > 0) {
			$renderedItems = array_filter(array_map([$this, 'render_item'], $settings['metaData']));
			foreach ($renderedItems as $index => $renderedItem) {
				$output .= $renderedItem;
				if ($index < count($renderedItems) - 1) {
					$customSeparator = !empty($settings['separatorStyle']) && 'separator-custom' == $settings['separatorStyle']
						? ($settings['customSeparator'] ?? '')
						: '';
					$output .= '<span class="zolo-separator">' . $customSeparator . '</span>';
				}
			}
		}
		$output .= '</div>';

		return $output;
	}

	/**
	 * Render Repeater item.
	 *
	 * @param array $meta .
	 * @return string
	 */
	private function render_item($meta) {
		$item_data = $this->get_meta_data($meta);

		if (empty($item_data['text'])) {
			return '';
		}

		ob_start();
?>
		<div class="zolo-meta-info <?php echo esc_attr($meta['type']); ?>">
			<?php if (! empty($item_data['url'])) : ?>
				<a href="<?php echo esc_url($item_data['url']); ?>">
				<?php endif; ?>
				<span class="zolo-icon"><?php echo wp_kses(($item_data['icon'] ?? ''), ZoloHelpers::wp_kses_allowed_svg()); ?></span>
				<span class="zolo-text"><?php echo wp_kses($item_data['text'], ZoloHelpers::wp_kses_allowed_svg()); ?></span>
				<?php if (! empty($item_data['url'])) : ?>
				</a>
			<?php endif; ?>
		</div>
<?php
		return ob_get_clean();
	}

	/**
	 * Get meta data.
	 *
	 * @param array $meta .
	 * @return array $item_data.
	 */
	private function get_meta_data($meta) {
		$item_data = [];
		switch ($meta['type']) {
			case 'author':

				$item_data['text'] = get_the_author_meta('display_name');
				$item_data['icon'] = 'none' !== $meta['showIcon'] ? ($meta['icon'] ?? '') : '';
				if (! empty($meta['link'])) {
					$item_data['url'] = get_author_posts_url(get_the_author_meta('ID'));
				}
				break;

			case 'date':
				if (! empty($meta['dateType']) && 'post_modified' === $meta['dateType']) {
					$item_data['text'] = get_the_modified_date('F j, Y');
				} else {
					$item_data['text'] = get_the_date('F j, Y');
				}
				$item_data['icon'] = 'none' !== $meta['showIcon'] ? ($meta['icon'] ?? '') : '';
				if (! empty($meta['link'])) {
					$item_data['url'] = get_day_link(get_post_time('Y'), get_post_time('m'), get_post_time('j'));
				}
				break;

			case 'time':
				$item_data['text'] = get_the_time('h:i A');
				$item_data['icon'] = 'none' !== $meta['showIcon'] ? ($meta['icon'] ?? '') : '';
				break;

			case 'terms':
				$post_id  = get_the_ID();
				$taxonomy = $meta['taxonomy'] ?? 'category';
				$terms    = wp_get_post_terms($post_id, $taxonomy);

				if (! is_wp_error($terms) && ! empty($terms)) {
					$terms_count = count($terms);
					$terms_list  = '';

					foreach ($terms as $index => $term) {
						$term_name = esc_html($term->name);

						if (! empty($meta['link'])) {
							$terms_list .= sprintf(
								'<a href="%1$s" class="term-name">%2$s</a>',
								esc_url(get_term_link($term)),
								$term_name
							);
						} else {
							$terms_list .= sprintf(
								'<span class="term-name">%1$s</span>',
								$term_name
							);
						}

						if ($index < $terms_count - 1) {
							$terms_list .= '<span class="separator">, </span>';
						}
					}

					$item_data['icon'] = 'none' !== $meta['showIcon'] ? ($meta['icon'] ?? '') : '';

					$item_data['text'] = $terms_list;
				}
				break;

			case 'comments':
				$num_comments    = (int) get_comments_number();
				$default_strings = [
					'string_no_comments' => esc_html__('No Comments', 'zoloblocks'),
					'string_one_comment' => esc_html__('%s Comment', 'zoloblocks'),
					'string_comments'    => esc_html__('%s Comments', 'zoloblocks'),
				];

				if (0 === $num_comments) {
					$item_data['text'] = $default_strings['string_no_comments'];
				} else {
					$item_data['text'] = sprintf(_n($default_strings['string_one_comment'], $default_strings['string_comments'], $num_comments, 'zoloblocks'), $num_comments);
				}

				$item_data['icon'] = 'none' !== $meta['showIcon'] ? ($meta['icon'] ?? '') : '';

				if (! empty($meta['link'])) {
					$item_data['url'] = get_comments_link();
				}
				break;
			case 'readingTime':
				$reading_speed     = 200;
				$content           = get_the_content();
				$word_count        = str_word_count(wp_strip_all_tags($content));
				$reading_time      = round($word_count / $reading_speed);
				$item_data['text'] = sprintf(__('%d Min Read', 'zoloblocks'), max($reading_time, 1));
				$item_data['icon'] = 'none' !== $meta['showIcon'] ? ($meta['icon'] ?? '') : '';
				break;
		}

		return $item_data;
	}
}
