<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * Post Navigation block
 */
class PostNavigation {

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
		'showRelatedPost'  => false,
		'selectedTaxonomy' => '',
		'previousPost'     => 'Previous Post',
		'nextPost'         => 'Next Post',
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
		if ( empty( $block->context['postId'] ) ) {
			return '';
		}
		$post_id            = $block->context['postId'];
		$this->settings     = wp_parse_args( $attributes, $this->default_block_attributes );
		$wrapper_class      = trim( ZoloHelpers::get_wrapper_class( $this->settings, '' ) . ' ' . implode( ' ', $this->settings['parentClasses'] ?? [] ) );
		$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => esc_attr( $wrapper_class ) ] );
		$prev_post          = get_previous_post();
		$next_post          = get_next_post();

		$showRelatedPost = $this->settings['showRelatedPost'] ?? false;
		if ( $showRelatedPost ) {
			$taxonomy = $this->settings['selectedTaxonomy'] ?? '';
			if ( ! empty( $taxonomy ) ) {
				$prev_post = get_previous_post( true, '', $taxonomy );
				$next_post = get_next_post( true, '', $taxonomy );
			}
		}

		$output  = '<div ' . wp_kses_data( $wrapper_attributes ) . ' >';
		$output .= $this->render_content( $prev_post, 'previous' );
		$output .= $this->render_content( $next_post, 'next' );
		$output .= '</div>';
		return $output;
	}


	/**
	 * Render Content.
	 *
	 * @param object $post .
	 * @param string $type .
	 * @return string|void|null
	 */
	public function render_content( $post, $type ) {
		$text             = 'next' == $type ? ( $this->settings['nextPost'] ?? '' ) : ( $this->settings['previousPost'] ?? '' );
		$wrapClass        = 'next' == $type ? 'zolo-post-next' : 'zolo-post-prev';
		$placeholderImage = trailingslashit( ZOLO_ADMIN_URL ) . 'assets/images/placeholder.svg';
		ob_start();
		?>
		<a href="<?php echo esc_url( get_permalink( $post->ID ) ); ?>"
		   class="zolo-item <?php echo esc_attr( $wrapClass ); ?>">
			<div class="zolo-image-wrap">
				<?php if ( has_post_thumbnail( $post->ID ) ) { ?>
					<?php echo get_the_post_thumbnail( $post->ID, 'thumbnail' ); ?>
				<?php } else { ?>
					<img src="<?php echo esc_url( $placeholderImage ); ?>"
						 alt="<?php echo esc_html( $post->post_title ); ?>">
				<?php } ?>
			</div>
			<div class="zolo-content-wrap">
				<span class="zolo-nav-text">
				<span><?php echo esc_html( $text ); ?></span>
				<?php if ( 'next' == $type ) { ?>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M5 12l14 0"></path>
						<path d="M13 18l6 -6"></path>
						<path d="M13 6l6 6"></path>
					</svg>
				<?php } else { ?>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M5 12l14 0"></path>
					<path d="M5 12l6 6"></path>
					<path d="M5 12l6 -6"></path>
				  </svg>
				<?php } ?>
				</span>
				<h2 class="zolo-pos-nav-title"><?php echo esc_html( $post->post_title ); ?></h2>
			</div>
		</a>
		<?php
		return ob_get_clean();
	}
}
