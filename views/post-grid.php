<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-post-grid-wrap';

if ( ! empty( $settings['preset'] ) ) {
    $zolo_topclass .= ' zolo-post-' . $settings['preset'];
}

if ( ! empty( $settings['postTitleAnimation'] ) ) {
    $zolo_topclass .= ' ' . $settings['postTitleAnimation']; // Add space before concatenating
}

$zolo_wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $zolo_topclass);

// get parent classes.
$zolo_parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$zolo_parentClasses = implode( ' ', $zolo_parentClasses );
// add parent classes to wrapper class.
$zolo_wrapper_class .= ' ' . $zolo_parentClasses;
$zolo_wrapperId      = $settings['zoloId'] ?? '';
$zolo_metaSeparator  = ! empty( $settings['metaSeparator'] ) ? $settings['metaSeparator'] : '//';
$zolo_filterTermId   = ! empty( $filterTermId ) ? $filterTermId : '';
$zolo_html           = '';
$zolo_paginationType = $settings['paginationType'] ?? 'normal';
$zolo_data_settings  = ! empty( $parentWrap ) ? ZoloHelpers::extract_settings_keys( $settings, array_keys( $class_object->get_default_attributes() ) ) : $settings;

?>
<?php if ( ! empty( $parentWrap ) ) : ?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	<?php if ( 'normal' !== $zolo_paginationType || ! empty( $settings['showFilterTaxonomy'] ) ) { ?>
		data-attributes="<?php echo esc_attr( wp_json_encode( $zolo_data_settings ) ); ?>"
	<?php } ?>
>
	<?php endif; ?>

	<div class="<?php echo esc_attr( $zolo_wrapper_class ); ?>"
		<?php
		if ( ! empty( $zolo_wrapperId ) ) {
			?>
			id="<?php echo esc_attr( $zolo_wrapperId ); ?>" <?php } ?>>

		<?php if ( ! empty( $settings['showFilterTaxonomy'] ) ) { ?>
			<div class="zolo-post-filter-taxonomy">
				<a href="#" data-id="all" class="
					<?php
					if ( ! empty( $parentWrap ) || 'all' == $zolo_filterTermId ) {
						echo esc_attr( 'current' );}
					?>
				">
					<?php esc_html_e( 'All', 'zoloblocks' ); ?>
				</a>

				<?php
				$zolo_terms = get_terms(
					[
						'taxonomy' => $settings['postTaxonomy'] ?? 'category',
						'include'  => wp_list_pluck( $settings['postTerms'] ?? [], 'value' ),
						'orderby'  => 'include',
					]
				);
				foreach ( $zolo_terms as $zolo_key => $term ) :
					?>
					<a href="#" class="
					<?php
					if ( $zolo_filterTermId == $term->term_id ) {
						echo esc_attr( 'current' );
					}
					?>
					"
					   data-id="<?php echo esc_attr( $term->term_id ); ?>"><?php echo esc_html( $term->name ); ?></a>
				<?php endforeach; ?>
			</div>
		<?php } ?>

		<div class="zolo-post-content-wrap">
			<?php
			foreach ( $post_results['posts'] as $zolo_result ) {
				$zolo_result = (object) $zolo_result;
				$zolo_html  .= '<div class="zolo-post-item">';
				$zolo_html  .= '<div class="zolo-post-image">';

				if ( ! empty( $settings['preset'] ) && $settings['preset'] !== 'style-5' ) {
					$zolo_html .= require __DIR__ . '/post-partials/thumbnail.php';
				}

				if ( ! empty( $settings['preset'] ) && $settings['preset'] === 'style-5' ) {
					$zolo_html .= '<div class="zolo-post-img-category">';
					$zolo_html .= require __DIR__ . '/post-partials/thumbnail.php';
					$zolo_html .= require __DIR__ . '/post-partials/meta/categories.php';
					$zolo_html .= '</div>';
				}

				if ( ! empty( $settings['preset'] === 'style-5' ) && ( $settings['showMeta'] === true ) ) {
					$zolo_html .= '<div class="zolo-post-meta-wrap">';
					$zolo_html .= '<div class="zolo-post-dateTime">';
					$zolo_html .= require __DIR__ . '/post-partials/meta/date.php';
					if ( ! empty( $settings['showReadingTime'] ) ) {
						$zolo_html .= $zolo_metaSeparator;
						$zolo_html .= require __DIR__ . '/post-partials/meta/reading-time.php';
					}
					$zolo_html .= '</div>';

					$zolo_html .= require __DIR__ . '/post-partials/meta/author-grid.php';
					$zolo_html .= '</div>';
				}
				if ( ! empty( $settings['preset'] ) && $settings['preset'] !== 'style-5' && $settings['preset'] !== 'style-6' ) {
					$zolo_html .= require __DIR__ . '/post-partials/meta/author-grid.php';
				}
				

				$zolo_html .= '</div>';

				$zolo_html .= '<div class="zolo-post-content">';
				$zolo_html .= '<div class="zolo-post-inner-content">';
				if ( ! empty( $settings['preset'] ) && $settings['preset'] !== 'style-5' ) {
					$zolo_html .= require __DIR__ . '/post-partials/meta/categories.php';
				}
				$zolo_html .= require __DIR__ . '/post-partials/title.php';
				$zolo_html .= require __DIR__ . '/post-partials/content.php';
				
				// Normal meta display for non style-5 and non style-6
				if ( ! empty( $settings['preset'] !== 'style-5' ) && ! empty( $settings['preset'] !== 'style-6' ) && ( $settings['showMeta'] === true ) ) {
					$zolo_html .= '<div class="zolo-post-dateTime">';
					$zolo_html .= require __DIR__ . '/post-partials/meta/date.php';
					if ( ! empty( $settings['showReadingTime'] ) ) {
						$zolo_html .= $zolo_metaSeparator;
						$zolo_html .= require __DIR__ . '/post-partials/meta/reading-time.php';
					}
					$zolo_html .= '</div>';
				}
				$zolo_html .= '</div>';

				// Style 6 specific bottom content
				if ( ! empty( $settings['preset'] ) && $settings['preset'] === 'style-6' ) {
					$zolo_html .= '<div class="zolo-post-bottom-content">';
					if ( $settings['showMeta'] === true ) {
						$zolo_html .= '<div class="zolo-post-dateTime">';
						$zolo_html .= require __DIR__ . '/post-partials/meta/date.php';
						if ( ! empty( $settings['showReadingTime'] ) ) {
							$zolo_html .= $zolo_metaSeparator;
							$zolo_html .= require __DIR__ . '/post-partials/meta/reading-time.php';
						}
						$zolo_html .= '</div>';
					}
					$zolo_html .= require __DIR__ . '/post-partials/read-more.php';
					$zolo_html .= '</div>';
				} else {
					// Normal read more button for other styles
					$zolo_html .= require __DIR__ . '/post-partials/read-more.php';
				}
				
				$zolo_html .= '</div>';
				$zolo_html .= '</div>';
			}
			?>
			<?php echo wp_kses( $zolo_html, ZoloHelpers::wp_kses_allowed_svg() ); ?>
		</div>

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
