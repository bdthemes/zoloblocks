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
		'showCategoryBased' => false,
		'selectedTaxonomy'  => '',
		'showImage'         => true,
		'showTitle'         => true,
		'showBtn'           => true,
		'previousPost'      => 'Previous Post',
		'nextPost'          => 'Next Post',
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

		$showCategoryBased = $this->settings['showCategoryBased'] ?? false;
		if ( $showCategoryBased ) {
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
		if ( ! is_object( $post ) || empty( $post->ID ) ) {
			return;
		}
		$text             = 'next' == $type ? ( $this->settings['nextPost'] ?? '' ) : ( $this->settings['previousPost'] ?? '' );
		$wrapClass        = 'next' == $type ? 'zolo-post-next' : 'zolo-post-prev';
		$placeholderImage = trailingslashit( ZOLO_ADMIN_URL ) . 'assets/images/placeholder.svg';
		$previousIcon     = $this->settings['previousPostIcon'] ?? '<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 12l14 0"/>
                  <path d="M5 12l6 6"/>
                  <path d="M5 12l6 -6"/>
                </svg>';
		$nextIcon         = $this->settings['nextPostIcon'] ?? ' <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 12l14 0"/>
                  <path d="M13 18l6 -6"/>
                  <path d="M13 6l6 6"/>
                </svg>';
		ob_start();
		?>
		<a href="<?php echo esc_url( get_permalink( $post->ID ) ); ?>"
		   class="zolo-item <?php echo esc_attr( $wrapClass ); ?>">
			<?php if ( ! empty( $this->settings['showImage'] ) ) : ?>
				<div class="zolo-image-wrap">
					<?php if ( has_post_thumbnail( $post->ID ) ) { ?>
						<?php echo get_the_post_thumbnail( $post->ID, ( $this->settings['thumbnailSize'] ?? 'thumbnail' ) ); ?>
					<?php } else { ?>
						<img src="<?php echo esc_url( $placeholderImage ); ?>"
							 alt="<?php echo esc_html( $post->post_title ); ?>">
					<?php } ?>
				</div>
			<?php endif; ?>

			<div class="zolo-content-wrap">
				<?php if ( ! empty( $this->settings['showBtn'] ) ) : ?>
					<span class="zolo-nav-text">
						<span><?php echo esc_html( $text ); ?></span>
						<?php
						if ( 'next' == $type ) {
							echo wp_kses( $nextIcon, ZoloHelpers::wp_kses_allowed_svg() );
						} else {
							echo wp_kses( $previousIcon, ZoloHelpers::wp_kses_allowed_svg() );
						}
						?>
					</span>
				<?php endif; ?>
				<?php if ( ! empty( $this->settings['showTitle'] ) ) : ?>
					<h2 class="zolo-pos-nav-title"><?php echo esc_html( $post->post_title ); ?></h2>
				<?php endif; ?>
			</div>
		</a>
		<?php
		return ob_get_clean();
	}
}
