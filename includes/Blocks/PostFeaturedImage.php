<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * Post Navigation block
 */
class PostFeaturedImage {

	/**
	 * @var array $settings .
	 */
	protected $settings;

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'isLink'        => false,
		'thumbnailSize' => 'full',
	];

	/**
	 * Post navigation block frontend.
	 *
	 * @param array  $attributes .
	 * @param string $content .
	 * @param object $block .
	 * @return false|string
	 */
	public function render( $attributes, $content, $block ) {
		$post_id            = ! empty( $block->context['postId'] ) ? esc_html( $block->context['postId'] ) : get_the_ID();
		$this->settings     = wp_parse_args( $attributes, $this->default_block_attributes );
		$wrapper_class      = trim( ZoloHelpers::get_wrapper_class( $this->settings, '' ) . ' ' . implode( ' ', $this->settings['parentClasses'] ?? [] ) );
		$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => esc_attr( $wrapper_class ) ] );

		$output  = '<div ' . wp_kses_data( $wrapper_attributes ) . ' >';
		$output .= $this->render_content( $post_id );
		$output .= '</div>';
		return $output;
	}

	/**
	 * Render content
	 *
	 * @param int $post_id .
	 * @return string
	 */
	private function render_content( $post_id ) {
		$thumbnailSize         = $this->settings['thumbnailSize'] ?? 'full';
		$featuredImage         = get_the_post_thumbnail( $post_id, $thumbnailSize );
		$placeholderImage      = trailingslashit( ZOLO_ADMIN_URL ) . 'assets/images/placeholder.svg';
		$postLink              = get_post_permalink( $post_id );
		$altText               = get_the_title( $post_id );
		$content               = '<img src="' . $placeholderImage . '" alt="' . $altText . '">';
		$isLink                = $this->settings['isLink'] ?? false;
		$linkTarget            = $this->settings['linkTarget'] ?? '_self';
		$linkRel               = $this->settings['linkRel'] ?? 'noopener noreferrer';
		$useFirstImageFromPost = $this->settings['useFirstImageFromPost'] ?? false;

		// Get the first image from the post.
		if ( $useFirstImageFromPost && ! $featuredImage ) {
			$post        = get_post( $post_id );
			$postContent = $post->post_content;
			$processor   = new \WP_HTML_Tag_Processor( $postContent );

			if ( $processor->next_tag( 'img' ) ) {
				$tag_html = new \WP_HTML_Tag_Processor( '<img>' );
				$tag_html->next_tag();
				foreach ( $processor->get_attribute_names_with_prefix( '' ) as $name ) {
					$tag_html->set_attribute( $name, $processor->get_attribute( $name ) );
				}
				$featuredImage = $tag_html->get_updated_html();
			}
		}

		if ( ! empty( $featuredImage ) ) {
			$content = $featuredImage;
		}

		if ( $isLink ) {
			$content = '<a href="' . $postLink . '" target="' . $linkTarget . '" rel="' . $linkRel . '">' . $content . '</a>';
		}

		return $content;
	}
}
