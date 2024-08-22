<?php

use Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-category-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$topclass .= ' zolo-category-' . $settings['preset'];
}
$wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $topclass );
// get parent classes.
$parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$parentClasses = implode( ' ', $parentClasses );
// add parent classes to wrapper class.
$wrapper_class .= ' ' . $parentClasses;
$wrapperId      = $settings['zoloId'] ?? '';
// view all button icon.
$viewAllBtnIcon = $settings['viewAllBtnIcon'] ?? '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>';
$viewAllBtnIcon = '<div class="zolo__display-icon">' . $viewAllBtnIcon . '</div>';
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
			<a class="zolo-category-item" href="<?php echo esc_url( $category->link ); ?>"
				style="<?php echo ! empty( $settings['postCategoryPro']['enableMultipleBG'] ) ? 'background-color:' . esc_attr( $bg_color ) . ';' : ''; ?>">
				<?php if ( ! empty( $settings['showImage'] ) && ! empty( $category->image ) && 'style-2' === $settings['preset'] ) : ?>
					<div class="zolo-category-img"><img src="<?php echo esc_url( $category->image ); ?>"
							alt="<?php echo esc_html( $category->name ); ?>"></div>
				<?php endif; ?>
				<div class="zolo-content">
					<span class="zolo-category-name"><?php echo esc_html( $category->name ); ?></span>
					<?php if ( ! empty( $settings['showCount'] ) ) : ?>
						<span class="zolo-category-count"><?php echo esc_html( $category->count ); ?></span>
					<?php endif; ?>
				</div>
				<div class="zolo-category-bottom-content">
					<?php if ( ! empty( $settings['showText'] ) && ! empty( $category->description ) ) : ?>
						<p class="zolo-category-text">
							<?php
							$text = ! empty( $settings['itemTextLimit'] ) ? ZoloHelpers::wordcount( $category->description, $settings['itemTextLimit'] ) : $category->description;
							echo wp_kses( $text, ZoloHelpers::wp_kses_allowed_svg() )
							?>
						</p>
					<?php endif; ?>
					<?php if ( ! empty( $settings['viewAllBtn'] ) && ! empty( $settings['viewAllBtnText'] ) ) : ?>
						<span class="zolo-category-link">
							<?php
							echo esc_html( $settings['viewAllBtnText'] );
							echo wp_kses( $viewAllBtnIcon, ZoloHelpers::wp_kses_allowed_svg() );
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
