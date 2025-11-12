<?php
use Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-post-comments-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$zolo_topclass .= ' zolo-comments-' . $settings['preset'];
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
	if ( ! empty( $comments ) ) :
		foreach ( $comments as $zolo_index => $zolo_comment ) :
			?>
			<div class="zolo-item">
				<div class="zolo-meta">
					<?php if ( ! empty( $settings['showAuthor'] ) ) : ?>
					<div class="zolo-avatar">
						<?php echo wp_kses( $zolo_comment->avatar, ZoloHelpers::wp_kses_allowed_svg() ); ?>
					</div>
					<?php endif; ?>
					<div class="zolo-author-info">
						<?php if ( ! empty( $settings['showAuthor'] ) ) : ?>
						<a class="zolo-author-name" href="<?php echo esc_attr( $zolo_comment->link ); ?>" target="_blank">
							<?php echo esc_html( $zolo_comment->author ); ?>
							<?php if ( ! empty( $settings['showTitle'] ) ) : ?>
								<?php
								echo esc_html( $settings['authorMiddleText'] );
								echo esc_html( $zolo_comment->title );
								?>
							<?php endif; ?>
							 </a>
						<?php endif; ?>

						<?php if ( ! empty( $settings['showDate'] ) ) : ?>
						<div class="zolo-date"><?php echo esc_html( $zolo_comment->date ); ?></div>
						<?php endif; ?>
					</div>
				</div>
				<?php if ( ! empty( $settings['showText'] ) ) : ?>
					<p class="zolo-text"><?php echo esc_html( $zolo_comment->content ); ?></p>
				<?php endif; ?>
			</div>
			<?php
		endforeach;
	endif;
	?>
</div>
