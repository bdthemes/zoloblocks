<?php

use Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-author-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$topclass .= ' zolo-' . $settings['preset'];
}
$wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $topclass );
// get parent classes.
$parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$parentClasses = implode( ' ', $parentClasses );
// add parent classes to wrapper class.
$wrapper_class .= ' ' . $parentClasses;
$wrapperId      = $settings['zoloId'] ?? '';

?>

<div class="<?php echo esc_attr( $wrapper_class ); ?>" <?php if ( ! empty( $wrapperId ) ) { ?>
	id="<?php echo esc_attr( $wrapperId ); ?>" <?php } ?>>

	<?php
	if ( ! empty( $authors ) ) :
		foreach ( $authors as $index => $author ) :
			?>
			<div class="zolo-item">
				<?php
				if ( ! empty( $settings['showAvatar'] ) ) :
					?>
					<div class="zolo-image">
						<a href="<?php echo esc_url( $author->link ); ?>"><?php echo wp_kses( $author->avatar, ZoloHelpers::wp_kses_allowed_svg() ); ?></a>
					</div>
					<?php
				endif;
				?>
				<div class="zolo-content">
					<?php if ( ! empty( $settings['showName'] ) ) : ?>
						<div class="zolo-name">
							<a href="<?php echo esc_url( $author->link ); ?>"><?php echo esc_html( $author->name ); ?></a>
						</div>
					<?php endif; ?>

					<?php if ( ! empty( $settings['showRole'] ) ) : ?>
						<div class="zolo-role"><?php echo esc_html( $author->role ); ?></div>
					<?php endif; ?>

					<?php if ( ! empty( $settings['showDescription'] ) ) : ?>
						<div class="zolo-description"><?php echo esc_html( $author->description ); ?></div>
					<?php endif; ?>

					<?php if ( ! empty( $settings['showSocialLink'] ) ) : ?>
						<div class="zolo-link">
							<?php
							$socialLinks = ! empty( $settings['socialLinks'] ) ? wp_list_pluck( $settings['socialLinks'], 'value' ) : [];
							foreach ( $socialLinks as $s_link ) {
								if ( get_the_author_meta( $s_link, $author->ID ) ) :
									$final_url = get_the_author_meta( $s_link, $author->ID );
									$alt_title = esc_html__( 'Click here to go ', 'zoloblocks' ) . ucwords( $s_link );
									if ( 'email' == $s_link ) {
										$final_url = 'mailto:' . get_the_author_meta( $s_link, $author->ID );
										$alt_title = esc_html__( 'Click here to ', 'zoloblocks' ) . ucwords( $s_link );
									}
									$icon = ZoloHelpers::get_social_icon_svg( $s_link );
									?>
										<a href="<?php echo esc_url( $final_url ); ?>" title="<?php echo esc_attr( $alt_title ); ?>"> <?php echo wp_kses( $icon, ZoloHelpers::wp_kses_allowed_svg() ); ?></a>
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
						$total_count = sprintf( _n( 'Post: %s', 'Posts: %s', $author->postCount, 'zoloblocks' ), $author->postCount );
						echo esc_html( $total_count );
						?>
					</div>
				<?php endif; ?>

			</div>
			<?php
		endforeach;
	endif;
	?>
</div>
