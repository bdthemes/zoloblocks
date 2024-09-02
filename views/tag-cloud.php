<?php

use Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-tag-cloud-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$topclass .= ' zolo-tag-' . $settings['preset'];
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
	if ( ! empty( $categories ) ) :
		foreach ( $categories as $index => $category ) :
			// multiple background color.
			$bg_color = ZoloHelpers::strToHex( $category->name );
			if ( ! empty( $multiple_bg ) ) {
				$bg_color = $multiple_bg[ $index ];
				if ( ! preg_match( '/#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/', $multiple_bg[ $index ] ) ) {
					$bg_color = ZoloHelpers::strToHex( $category->name );
				}
			}
			?>
			<a class="zolo-item" href="<?php echo esc_url( $category->link ); ?>"
				style="<?php echo ! empty( $settings['tagCloudPro']['enableMultipleBG'] ) ? 'background-color:' . esc_attr( $bg_color ) . ';' : ''; ?>">
				<span class="zolo-name"><?php echo esc_html( $category->name ); ?></span>
				<?php if ( ! empty( $settings['showCount'] ) ) : ?>
					<span class="zolo-count"><?php echo esc_html( $category->count ); ?></span>
				<?php endif; ?>
			</a>
			<?php
		endforeach;
	endif;
	?>
</div>
