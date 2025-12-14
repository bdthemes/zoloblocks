<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-post-featured-list-wrap';
if ( ! empty( $settings['preset'] ) ) {
	$zolo_topclass .= ' zolo-post-' . $settings['preset'];
}
if ( isset( $settings['showfeatureimg'] ) ) {
	$zolo_topclass .= $settings['showfeatureimg'] ? '' : ' list-grid';
}
$zolo_wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $zolo_topclass );

// get parent classes.
$zolo_parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$zolo_parentClasses = implode( ' ', $zolo_parentClasses );
// add parent classes to wrapper class.
$zolo_wrapper_class  .= ' ' . $zolo_parentClasses;
$zolo_html            = '';
$zolo_i               = 0;
$zolo_metaSeparator   = ! empty( $settings['metaSeparator'] ) ? $settings['metaSeparator'] : '//';
$zolo_wrapperId       = $settings['zoloId'] ?? '';
$zolo_showFeaturedImg = $settings['showfeatureimg'] ?? true;
$zolo_pagedNumber     = $post_results['paged'] ?? 1;
$zolo_paginationType  = $settings['paginationType'] ?? 'normal';
$zolo_data_settings   = ! empty( $parentWrap ) ? ZoloHelpers::extract_settings_keys( $settings, array_keys( $class_object->get_default_attributes() ) ) : $settings;

?>
<?php if ( ! empty( $parentWrap ) ) : ?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	<?php if ( 'normal' !== $zolo_paginationType ) { ?>
	  data-attributes="<?php echo esc_attr( wp_json_encode( $zolo_data_settings ) ); ?>"
	<?php } ?>
>
	<?php endif; ?>

	<div class="<?php echo esc_attr( $zolo_wrapper_class ); ?>"
		<?php
		if ( ! empty( $zolo_wrapperId ) ) {
			?>
		 id="<?php echo esc_attr( $zolo_wrapperId ); ?>" <?php } ?>>
		<?php
		foreach ( $post_results['posts'] as $zolo_result ) {
			$zolo_i++;
			if ( 1 === $zolo_i && ( 1 == $zolo_pagedNumber || 'normal' == $zolo_paginationType || 'number' == $zolo_paginationType ) && 1 == $zolo_showFeaturedImg ) {
				$zolo_featuredPostClass = 'featured-post';
			} else {
				$zolo_featuredPostClass = '';
			}

			$zolo_result = (object) $zolo_result;

			$zolo_html .= '<div class="zolo-post-item ' . $zolo_featuredPostClass . '">';

			$zolo_html .= '<div class="zolo-post-image">';
			$zolo_html .= require __DIR__ . '/post-partials/thumbnail.php';
			$zolo_html .= '</div>';

			$zolo_html .= '<div class="zolo-post-content">';

			if ( ! empty( $settings['showCount'] ) ) {
				$zolo_html .= '<div class="zolo-post-count-number"></div>';
			}

			$zolo_html .= '<div class="zolo-post-inner-content">';

			$zolo_html .= require __DIR__ . '/post-partials/meta/categories.php';
			$zolo_html .= require __DIR__ . '/post-partials/title.php';
			$zolo_html .= require __DIR__ . '/post-partials/content.php';
			if ( ! empty( $settings['showMeta'] ) ) {
				$zolo_html .= '<div class="zolo-post-meta">';
				$zolo_html .= require __DIR__ . '/post-partials/meta/author.php';
				$zolo_html .= '<span class="meta-separator">' . $zolo_metaSeparator . '</span>';
				$zolo_html .= require __DIR__ . '/post-partials/meta/date.php';
				if ( ! empty( $settings['showReadingTime'] ) ) {
					$zolo_html .= '<span class="meta-separator">' . $zolo_metaSeparator . '</span>';
					$zolo_html .= require __DIR__ . '/post-partials/meta/reading-time.php';
				}
				$zolo_html .= '</div>';
			}

			

			$zolo_html .= '</div>';
			$zolo_html .= '</div>';


			$zolo_html .= '</div>';
		}
		?>

		<?php echo wp_kses( $zolo_html, 'post' ); ?>
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
