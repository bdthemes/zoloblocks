<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * Post Comments Form block
 */
class PostCommentsForm {

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
		'showForm' => true,
	];

	/**
	 * Post category block frontend.
	 *
	 * @param array  $attributes .
	 * @param string $content .
	 * @param object $block .
	 * @return false|string
	 */
	public function render( $attributes, $content, $block ) {
		if ( empty( $block->context['postId'] ) ) {
			return '';
		}

		$post_id            = $block->context['postId'];
		$settings           = wp_parse_args( $attributes, $this->default_block_attributes );
		$this->settings     = $settings;
		$wrapper_class      = trim( ZoloHelpers::get_wrapper_class( $settings, '' ) . ' ' . implode( ' ', $settings['parentClasses'] ?? [] ) );
		$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => esc_attr( $wrapper_class ) ] );

		$output = '<div ' . wp_kses_data( $wrapper_attributes ) . ' >';
		if ( get_comments_number( $post_id ) > 0 ) {
			$comments_number = get_comments_number( $post_id );
			$comments_text   = sprintf( _n( '%s comment', '%s comments', $comments_number, 'zoloblocks' ), esc_html( $comments_number ) );
			$output         .= '<div class="zolo-comment-count"><span>' . esc_html( $comments_text ) . '</span></div>';
		}
		$output .= $this->render_content( $post_id );
		$output .= '</div>';

		return $output;
	}


	/**
	 * Render Content.
	 *
	 * @param number $post_id .
	 * @return string|void|null
	 */
	public function render_content( $post_id ) {

		$comments = get_comments(
			[
				'post_id' => $post_id,
				'status'  => 'approve',
			]
		);

		$comment_list = wp_list_comments(
			[
				'per_page'          => 10,
				'reverse_top_level' => false,
				'echo'              => false,
			],
			$comments
		);

		if ( ! empty( $comment_list ) ) {
			$comment_list = '<ul class="commentlist">' . $comment_list . '</ul>';
		}

		if ( ! empty( $this->settings['showForm'] ) ) {
			ob_start();
			comment_form( [], $post_id );
			$content = ob_get_clean();
			return $comment_list . '<div class="zolo-comment-form">' . $content . '</div>';
		}

		return $comment_list;
	}
}
