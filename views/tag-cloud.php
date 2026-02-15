<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_skin     = $settings['skin'] ?? 'default';
$zolo_topclass = 'zolo-tag-cloud zolo-tag-skin-' . $zolo_skin;
if ( ! empty( $settings['preset'] ) ) {
	$zolo_topclass .= ' zolo-tag-' . $settings['preset'];
}
$zolo_wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $zolo_topclass );
// get parent classes.
$zolo_parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$zolo_parentClasses = implode( ' ', $zolo_parentClasses );
// add parent classes to wrapper class.
$zolo_wrapper_class .= ' zolo-block ' . $zolo_parentClasses;
$zolo_wrapperId      = $settings['zoloId'] ?? '';
$zolo_unique_id      = ! empty( $settings['uniqueId'] ) ? sanitize_html_class( $settings['uniqueId'] ) : wp_unique_id( 'zolo-tag-cloud-' );
$zolo_wrap_id        = $zolo_unique_id . '-wrap';
$zolo_canvas_id      = $zolo_unique_id . '-canvas';
$zolo_canvas_size    = ! empty( $settings['canvasSize'] ) ? absint( $settings['canvasSize'] ) : 400;
$zolo_is_animated    = 'animated' === $zolo_skin;
$zolo_open_new_tab   = ! empty( $settings['openInNewTab'] );

$zolo_tag_canvas_settings = [
	'textColour'         => $settings['animatedColor'] ?? '',
	'outlineColour'      => $settings['animatedOutlineColor'] ?? '',
	'reverse'            => true,
	'initial'            => 'hover' === ( $settings['triggerOn'] ?? 'always' ) ? false : [ 0.2, 0.1 ],
	'depth'              => ! empty( $settings['depth'] ) ? (float) $settings['depth'] / 100 : 0.5,
	'maxSpeed'           => ! empty( $settings['speed'] ) ? (float) $settings['speed'] / 1000 : 0.05,
	'activeCursor'       => $settings['activeCursor'] ?? 'pointer',
	'bgColour'           => $settings['animatedBackgroundColor'] ?? null,
	'bgOutlineThickness' => isset( $settings['animatedOutlineThickness'] ) ? (float) $settings['animatedOutlineThickness'] : null,
	'bgRadius'           => isset( $settings['animatedBackgroundRadius'] ) ? (float) $settings['animatedBackgroundRadius'] : null,
	'dragControl'        => 'hover' === ( $settings['triggerOn'] ?? 'always' ) && ! empty( $settings['dragControl'] ),
	'fadeIn'             => isset( $settings['visibleTime'] ) ? (float) $settings['visibleTime'] : null,
	'freezeActive'       => false,
	'outlineDash'        => isset( $settings['animatedOutlineDash'] ) ? (float) $settings['animatedOutlineDash'] : null,
	'outlineDashSpace'   => isset( $settings['animatedOutlineDashSpace'] ) ? (float) $settings['animatedOutlineDashSpace'] : null,
	'outlineDashSpeed'   => isset( $settings['animatedOutlineDashSpeed'] ) ? (float) $settings['animatedOutlineDashSpeed'] : null,
	'outlineIncrease'    => isset( $settings['animatedIncrease'] ) ? (float) $settings['animatedIncrease'] : null,
	'outlineMethod'      => 'outline',
	'outlineRadius'      => isset( $settings['animatedBorderRadius'] ) ? (float) $settings['animatedBorderRadius'] : null,
	'outlineThickness'   => isset( $settings['animatedOutlineThickness'] ) ? (float) $settings['animatedOutlineThickness'] : null,
	'shadow'             => $settings['animatedTextShadowColor'] ?? null,
	'shadowBlur'         => isset( $settings['animatedTextShadowBlur'] ) ? (float) $settings['animatedTextShadowBlur'] : null,
	'wheelZoom'          => ! empty( $settings['wheelZoom'] ),
	'textHeight'         => isset( $settings['animatedTextSize'] ) ? (float) $settings['animatedTextSize'] : 15,
	'shape'              => $settings['cloudShape'] ?? 'sphere',
	'lock'		 	 	 => $settings['rotationLock'] ?? null,
];
?>

<div class="<?php echo esc_attr( $zolo_wrapper_class ); ?>" <?php if ( ! empty( $zolo_wrapperId ) ) { ?>
	id="<?php echo esc_attr( $zolo_wrapperId ); ?>" <?php } ?>>
	<?php if ( $zolo_is_animated ) : ?>
		<canvas class="zolo-tag-cloud-canvas" id="<?php echo esc_attr( $zolo_canvas_id ); ?>" width="<?php echo esc_attr( $zolo_canvas_size ); ?>" height="<?php echo esc_attr( $zolo_canvas_size ); ?>" data-tag-canvas-settings="<?php echo esc_attr( wp_json_encode( $zolo_tag_canvas_settings ) ); ?>">
			<?php esc_html_e( 'Your browser does not support the canvas element.', 'zoloblocks' ); ?>
		</canvas>
	<?php endif; ?>

	<div class="zolo-tag-cloud-wrap" id="<?php echo esc_attr( $zolo_wrap_id ); ?>">
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
				<a class="zolo-item" href="<?php echo esc_url( $zolo_category->link ); ?>" <?php if ( $zolo_open_new_tab ) : ?>target="_blank" rel="noopener noreferrer"<?php endif; ?>
					style="<?php echo ! empty( $settings['tagCloudPro']['enableMultipleBG'] ) ? 'background-color:' . esc_attr( $zolo_bg_color ) . ';' : ''; ?>">
					<span class="zolo-name"><?php echo esc_html( $zolo_category->name ); ?></span>
				<?php if ( ! empty( $settings['showCount'] ) && 'default' === $zolo_skin ) : ?>
					<span class="zolo-count"><?php echo esc_html( $zolo_category->count ); ?></span>
					<?php endif; ?>
				</a>
				<?php
			endforeach;
		endif;
		?>
	</div>
</div>
