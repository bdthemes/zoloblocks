<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-tag-cloud-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$zolo_topclass .= ' zolo-tag-' . $settings['preset'];
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
	if ( ! empty( $categories ) ) :
		foreach ( $categories as $zolo_index => $zolo_category ) :
			// multiple background color.
			$zolo_bg_color = ZoloHelpers::strToHex( $zolo_category->name );
			if ( ! empty( $multiple_bg ) ) {
				$zolo_bg_color = $multiple_bg[ $zolo_index ];
				if ( ! preg_match( '/#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/', $multiple_bg[ $zolo_index ] ) ) {
					$zolo_bg_color = ZoloHelpers::strToHex( $zolo_category->name );
				}
			}
			?>
			<a class="zolo-item" href="<?php echo esc_url( $zolo_category->link ); ?>"
				style="<?php echo ! empty( $settings['tagCloudPro']['enableMultipleBG'] ) ? 'background-color:' . esc_attr( $zolo_bg_color ) . ';' : ''; ?>">
				<span class="zolo-name"><?php echo esc_html( $zolo_category->name ); ?></span>
			<?php if ( ! empty( $settings['showCount'] ?? '' ) ) : ?>
				<span class="zolo-count"><?php echo esc_html( $zolo_category->count ); ?></span>
				<?php endif; ?>
			</a>
			<?php
		endforeach;
	endif;
	?>
</div>
