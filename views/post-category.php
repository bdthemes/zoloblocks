<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-post-category-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$zolo_topclass .= ' zolo-category-' . $settings['preset'];
}
$zolo_wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $zolo_topclass );
// get parent classes.
$zolo_parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$zolo_parentClasses = implode( ' ', $zolo_parentClasses );
// add parent classes to wrapper class.
$zolo_wrapper_class .= ' ' . $zolo_parentClasses;
$zolo_wrapperId      = $settings['zoloId'] ?? '';
// view all button icon.
$zolo_viewAllBtnIcon = $settings['viewAllBtnIcon'] ?? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg>';
$zolo_viewAllBtnIcon = '<div class="zolo__display-icon">' . $zolo_viewAllBtnIcon . '</div>';
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
			<a class="zolo-category-item" href="<?php echo esc_url( $zolo_category->link ); ?>"
				style="<?php echo ! empty( $settings['postCategoryPro']['enableMultipleBG'] ) ? 'background-color:' . esc_attr( $zolo_bg_color ) . ';' : ''; ?>">
				<?php if ( ! empty( $settings['showImage'] ) && ! empty( $zolo_category->image ) && ( 'style-2' === $settings['preset'] || 'style-3' === $settings['preset'] ) ) : ?>
					<?php // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?>
					<div class="zolo-category-img"><img src="<?php echo esc_url( $zolo_category->image ); ?>"
							alt="<?php echo esc_html( $zolo_category->name ); ?>"></div>
				<?php endif; ?>
				<div class="zolo-content">
					<span class="zolo-category-name"><?php echo esc_html( $zolo_category->name ); ?></span>
					<?php if ( ! empty( $settings['showCount'] ) ) : ?>
						<span class="zolo-category-count"><?php echo esc_html( $zolo_category->count ); ?></span>
					<?php endif; ?>
				</div>
				
				<div class="zolo-category-bottom-content">
					<?php if ( ! empty( $settings['showText'] ) && ! empty( $zolo_category->description ) ) : ?>
						<p class="zolo-category-text">
							<?php
							$zolo_text = ! empty( $settings['itemTextLimit'] ) ? ZoloHelpers::wordcount( $zolo_category->description, $settings['itemTextLimit'] ) : $zolo_category->description;
							echo wp_kses( $zolo_text, ZoloHelpers::wp_kses_allowed_svg() )
							?>
						</p>
					<?php endif; ?>
					<?php if ( ! empty( $settings['viewAllBtn'] ) && ! empty( $settings['viewAllBtnText'] ) ) : ?>
						<span class="zolo-category-link">
							<?php
							echo esc_html( $settings['viewAllBtnText'] );
							echo wp_kses( $zolo_viewAllBtnIcon, ZoloHelpers::wp_kses_allowed_svg() );
							?>
						</span>
					<?php endif; ?>
				</div>
			</a>
			<?php
		endforeach;
	endif;
	?>
</div>
