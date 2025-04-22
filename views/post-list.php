<?php

use Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-featured-list-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$topclass .= ' zolo-post-' . $settings['preset'];
}
if ( isset( $settings['showfeatureimg'] ) ) {
	$topclass .= $settings['showfeatureimg'] ? '' : ' list-grid';
}
$wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $topclass );

// get parent classes.
$parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$parentClasses = implode( ' ', $parentClasses );
// add parent classes to wrapper class.
$wrapper_class  .= ' ' . $parentClasses;
$html            = '';
$i               = 0;
$metaSeparator   = ! empty( $settings['metaSeparator'] ) ? $settings['metaSeparator'] : '//';
$wrapperId       = $settings['zoloId'] ?? '';
$showFeaturedImg = $settings['showfeatureimg'] ?? true;
$pagedNumber     = $post_results['paged'] ?? 1;
$paginationType  = $settings['paginationType'] ?? 'normal';
$data_settings   = ! empty( $parentWrap ) ? ZoloHelpers::extract_settings_keys( $settings, array_keys( $class_object->get_default_attributes() ) ) : $settings;

?>
<?php if ( ! empty( $parentWrap ) ) : ?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	<?php if ( 'normal' !== $paginationType ) { ?>
	  data-attributes="<?php echo esc_attr( wp_json_encode( $data_settings ) ); ?>"
	<?php } ?>
>
	<?php endif; ?>

	<div class="<?php echo esc_attr( $wrapper_class ); ?>"
		<?php
		if ( ! empty( $wrapperId ) ) {
			?>
		 id="<?php echo esc_attr( $wrapperId ); ?>" <?php } ?>>
		<?php
		foreach ( $post_results['posts'] as $result ) {
			$i++;
			if ( 1 === $i && ( 1 == $pagedNumber || 'normal' == $paginationType || 'number' == $paginationType ) && 1 == $showFeaturedImg ) {
				$featuredPostClass = 'featured-post';
			} else {
				$featuredPostClass = '';
			}

			$result = (object) $result;

			$html .= '<div class="zolo-post-item ' . $featuredPostClass . '">';

			$html .= '<div class="zolo-post-image">';
			$html .= require __DIR__ . '/post-partials/thumbnail.php';
			$html .= '</div>';

			$html .= '<div class="zolo-post-content">';

			if ( ! empty( $settings['showCount'] ) ) {
				$html .= '<div class="zolo-post-count-number"></div>';
			}

			$html .= '<div class="zolo-post-inner-content">';

			$html .= require __DIR__ . '/post-partials/meta/categories.php';
			$html .= require __DIR__ . '/post-partials/title.php';
			$html .= require __DIR__ . '/post-partials/content.php';
			if ( ! empty( $settings['showMeta'] ) ) {
				$html .= '<div class="zolo-post-meta">';
				$html .= require __DIR__ . '/post-partials/meta/author.php';
				$html .= '<span class="meta-separator">' . $metaSeparator . '</span>';
				$html .= require __DIR__ . '/post-partials/meta/date.php';
				if ( ! empty( $settings['showReadingTime'] ) ) {
					$html .= '<span class="meta-separator">' . $metaSeparator . '</span>';
					$html .= require __DIR__ . '/post-partials/meta/reading-time.php';
				}
				$html .= '</div>';
			}

			

			$html .= '</div>';
			$html .= '</div>';


			$html .= '</div>';
		}
		?>

		<?php echo wp_kses( $html, 'post' ); ?>
	</div>


	<?php
	// pagination.
	ZoloHelpers::views(
		'post-partials/pagination',
		[
			'settings'     => $settings,
			'post_results' => $post_results,
		]
	);
	?>

	<?php if ( ! empty( $parentWrap ) ) : ?>
</div>
<?php endif; ?>
