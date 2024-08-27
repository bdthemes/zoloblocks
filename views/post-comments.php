<?php
use Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-comments-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$topclass .= ' zolo-comments-' . $settings['preset'];
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
	if ( ! empty( $comments ) ) :
		foreach ( $comments as $index => $comment ) :
			?>
			<div class="zolo-item">
				<div class="zolo-meta">
					<?php if ( ! empty( $settings['showAuthor'] ) ) : ?>
					<div class="zolo-avatar">
						<?php echo wp_kses( $comment->avatar, ZoloHelpers::wp_kses_allowed_svg() ); ?>
					</div>
					<?php endif; ?>
					<div class="zolo-author-info">
						<?php if ( ! empty( $settings['showAuthor'] ) ) : ?>
						<a class="zolo-author-name" href="<?php echo esc_attr( $comment->link ); ?>" target="_blank">
							<?php echo esc_html( $comment->author ); ?>
							<?php if ( ! empty( $settings['showTitle'] ) ) : ?>
								<?php
								echo esc_html( $settings['authorMiddleText'] );
								echo esc_html( $comment->title );
								?>
							<?php endif; ?>
							 </a>
						<?php endif; ?>

						<?php if ( ! empty( $settings['showDate'] ) ) : ?>
						<div class="zolo-date"><?php echo esc_html( $comment->date ); ?></div>
						<?php endif; ?>
					</div>
				</div>
				<?php if ( ! empty( $settings['showText'] ) ) : ?>
					<p class="zolo-text"><?php echo esc_html( $comment->content ); ?></p>
				<?php endif; ?>
			</div>
			<?php
		endforeach;
	endif;
	?>
</div>
