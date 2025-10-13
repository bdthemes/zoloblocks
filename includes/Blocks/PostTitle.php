<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * PostTitle block
 */
class PostTitle {

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'isLink'     => false,
		'titleTag'   => 'h2',
		'linkTarget' => '_self',
		'linkRel'    => '',
		'titleWords' => '',
	];

	/**
	 * Allowed HTML tags for post title
	 *
	 * @var string[]
	 */
	protected $allowed_tags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span' ];

	/**
	 * PostTitle block frontend.
	 *
	 * @param array  $attributes .
	 * @param string $content .
	 * @param array  $block .
	 * @return false|string
	 */
	public function render( $attributes, $content, $block ) {
		if ( ! isset( $block->context['postId'] ) ) {
			return '';
		}

		$title = get_the_title();
		if ( ! $title ) {
			return '';
		}

		$settings           = wp_parse_args( $attributes, $this->default_block_attributes );
		$wrapper_class      = trim( ZoloHelpers::get_wrapper_class( $settings, '' ) . ' ' . implode( ' ', $settings['parentClasses'] ?? [] ) );
		$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => esc_attr( $wrapper_class ) ] );
		$title              = ! empty( $settings['titleWords'] ) ? ZoloHelpers::wordcount( $title, $settings['titleWords'] ) : $title;
		$tag_name           = $this->sanitize_tag_name( $settings['titleTag'] ?? 'h2' );

		if ( ! empty( $settings['isLink'] ) ) {
			$rel   = ! empty( $settings['linkRel'] ) ? 'rel="' . esc_attr( $settings['linkRel'] ) . '"' : '';
			$title = sprintf( '<a href="%1$s" target="%2$s" %3$s>%4$s</a>', esc_url( get_the_permalink( $block->context['postId'] ) ), esc_attr( $settings['linkTarget'] ), $rel, $title );
		}

		return sprintf(
			'<%1$s %2$s>%3$s</%1$s>',
			$tag_name,
			$wrapper_attributes,
			$title
		);
	}

	/**
	 * Sanitize HTML tag name to prevent XSS attacks.
	 *
	 * Only allows whitelisted HTML tags. Any invalid input defaults to 'h2'.
	 * Prevents malicious payloads like "h3 onmouseover=alert(1)".
	 *
	 * @param string $tag The tag name to sanitize.
	 * @return string Sanitized tag name.
	 * @since 1.0.1
	 */
	private function sanitize_tag_name( $tag ) {
		// Remove whitespace and convert to lowercase
		$tag = strtolower( trim( $tag ) );

		// Use tag_escape to remove any HTML/attributes
		$tag = tag_escape( $tag );

		// Whitelist validation - only allow specific tags
		if ( ! in_array( $tag, $this->allowed_tags, true ) ) {
			return 'h2'; // Default fallback
		}

		return $tag;
	}
}
