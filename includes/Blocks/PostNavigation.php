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
		'postTitleAnimation' => '',
		'selectedTaxonomy'  => '',
		'showImage'         => false,
		'showTitle'         => true,
		'showBtn'           => true,
		'previousPost'      => 'Previous Post',
		'nextPost'          => 'Next Post',
	];

	/**
	 * Post navigation block frontend.
	 *
	 * @param array $attributes .
	 * @return false|string
	 */
	public function render( $attributes ) {
		if ( ! is_singular() ) {
			return '';
		}
		$this->settings     = wp_parse_args( $attributes, $this->default_block_attributes );
		$wrapper_class      = trim( ZoloHelpers::get_wrapper_class( $this->settings, '' ) . ' ' . implode( ' ', $this->settings['parentClasses'] ?? [] ) . ' ' . $this->settings['postTitleAnimation'] );

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
		$text             = 'next' === $type ? ( $this->settings['nextPost'] ?? '' ) : ( $this->settings['previousPost'] ?? '' );
		$wrapClass        = 'next' === $type ? 'zolo-post-next' : 'zolo-post-prev';
		$placeholderImage = trailingslashit( ZOLO_ADMIN_URL ) . 'assets/images/placeholder.svg';
		$previousIcon     = $this->settings['previousPostIcon'] ?? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg>';
		$nextIcon         = $this->settings['nextPostIcon'] ?? ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>';
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
					<div class="zolo-nav-wrap">
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
					</div>
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
