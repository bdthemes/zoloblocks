<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-breadcrumbs-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$zolo_topclass .= ' zolo-breadcrumbs-' . $settings['preset'];
}
if ( empty( $settings['showHome'] ) ) {
	$zolo_topclass .= ' hide-home';
}
if ( empty( $settings['showCurrent'] ) ) {
	$zolo_topclass .= ' hide-current';
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
	<?php echo wp_kses( $content, ZoloHelpers::wp_kses_allowed_svg() ); ?>
</div>
