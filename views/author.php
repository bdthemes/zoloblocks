<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-author-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$zolo_topclass .= 'zolo-' . $settings['preset'];
}
$zolo_wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $zolo_topclass );
// get parent classes.
$zolo_parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$zolo_parentClasses = implode( ' ', $zolo_parentClasses );
// add parent classes to wrapper class.
$zolo_wrapper_class .= ' ' . $zolo_parentClasses;
$zolo_wrapperId      = $settings['zoloId'] ?? '';

?>

<div class="<?php echo esc_attr( $zolo_wrapper_class ); ?>" <?php if ( ! empty( $zolo_wrapperId ) ) { ?>
	id="<?php echo esc_attr( $zolo_wrapperId ); ?>" <?php } ?>>

	<?php
	if ( ! empty( $authors ) ) :
		foreach ( $authors as $zolo_index => $zolo_author ) :
			?>
			<div class="zolo-item">
				<?php
				if ( ! empty( $settings['showAvatar'] ) ) :
					?>
					<div class="zolo-image">
						<a href="<?php echo esc_url( $zolo_author->link ); ?>"><?php echo wp_kses( $zolo_author->avatar, ZoloHelpers::wp_kses_allowed_svg() ); ?></a>
					</div>
					<?php
				endif;
				?>
				<div class="zolo-content">
					<?php if ( ! empty( $settings['showName'] ) ) : ?>
						<div class="zolo-name">
							<a href="<?php echo esc_url( $zolo_author->link ); ?>"><?php echo esc_html( $zolo_author->name ); ?></a>
						</div>
					<?php endif; ?>

					<?php if ( ! empty( $settings['showRole'] ) ) : ?>
						<div class="zolo-role"><?php echo esc_html( $zolo_author->role ); ?></div>
					<?php endif; ?>

					<?php if ( ! empty( $settings['showDescription'] ) ) : ?>
						<div class="zolo-description"><?php echo esc_html( $zolo_author->description ); ?></div>
					<?php endif; ?>

					<?php if ( ! empty( $settings['showSocialLink'] ) ) : ?>
						<div class="zolo-link">
							<?php
							$zolo_socialLinks = ! empty( $settings['socialLinks'] ) ? wp_list_pluck( $settings['socialLinks'], 'value' ) : [];
							foreach ( $zolo_socialLinks as $zolo_s_link ) {
								if ( get_the_author_meta( $zolo_s_link, $zolo_author->ID ) ) :
									$zolo_final_url = get_the_author_meta( $zolo_s_link, $zolo_author->ID );
									$zolo_alt_title = esc_html__( 'Click here to go ', 'zoloblocks' ) . ucwords( $zolo_s_link );
									if ( 'email' == $zolo_s_link ) {
										$zolo_final_url = 'mailto:' . get_the_author_meta( $zolo_s_link, $zolo_author->ID );
										$zolo_alt_title = esc_html__( 'Click here to ', 'zoloblocks' ) . ucwords( $zolo_s_link );
									}
									$zolo_icon = ZoloHelpers::get_social_icon_svg( $zolo_s_link );
									?>
										<a href="<?php echo esc_url( $zolo_final_url ); ?>" title="<?php echo esc_attr( $zolo_alt_title ); ?>"> <?php echo wp_kses( $zolo_icon, ZoloHelpers::wp_kses_allowed_svg() ); ?></a>
									<?php
								endif;
							}
							?>
						</div>
					<?php endif; ?>
				</div>

				<?php if ( ! empty( $settings['showPostCount'] ) ) : ?>
					<div class="zolo-post-count">
						<?php
						/* translators: %s: number of posts */
						$zolo_total_count = sprintf( _n( 'Post: %s', 'Posts: %s', $zolo_author->postCount, 'zoloblocks' ), $zolo_author->postCount );
						echo esc_html( $zolo_total_count );
						?>
					</div>
				<?php endif; ?>

			</div>
			<?php
		endforeach;
	endif;
	?>
</div>
