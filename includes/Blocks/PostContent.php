<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * PostContent block
 */
class PostContent {

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'inheritThemeLayout' => false,
	];

	/**
	 * PostContent block frontend.
	 *
	 * @param array  $attributes .
	 * @param string $content .
	 * @param array  $block .
	 * @return false|string
	 */
	public function render( $attributes, $content, $block ) {
		$post_id            = ! empty( $block->context['postId'] ) ? esc_html( $block->context['postId'] ) : get_the_ID();
		$settings           = wp_parse_args( $attributes, $this->default_block_attributes );
		$wrapper_class      = trim( ZoloHelpers::get_wrapper_class( $settings, '' ) . ' ' . implode( ' ', $settings['parentClasses'] ?? [] ) );
		$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => esc_attr( $wrapper_class ) ] );

		static $seen_ids = [];

		if ( isset( $seen_ids[ $post_id ] ) ) {
			$is_debug = WP_DEBUG && WP_DEBUG_DISPLAY;
			return $is_debug ? __( '[block rendering halted]', 'zoloblocks' ) : '';
		}

		$seen_ids[ $post_id ] = true;
		$content              = get_the_content();
		// Check for nextpage to display page links for paginated posts.
		if ( has_block( 'core/nextpage' ) ) {
			$content .= wp_link_pages( [ 'echo' => 0 ] );
		}

		/** This filter is documented in wp-includes/post-template.php */
		$content = apply_filters( 'the_content', str_replace( ']]>', ']]&gt;', $content ) );
		unset( $seen_ids[ $post_id ] );

		if ( empty( $content ) ) {
			return '';
		}

		return sprintf(
			'<div %1$s>%2$s</div>',
			$wrapper_attributes,
			$content
		);
	}
}
