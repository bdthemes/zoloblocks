<?php

use Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-breadcrumbs-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$topclass .= ' zolo-breadcrumbs-' . $settings['preset'];
}
if ( empty( $settings['showHome'] ) ) {
	$topclass .= ' hide-home';
}
if ( empty( $settings['showCurrent'] ) ) {
	$topclass .= ' hide-current';
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
	<?php echo wp_kses( $content, ZoloHelpers::wp_kses_allowed_svg() ); ?>
</div>
