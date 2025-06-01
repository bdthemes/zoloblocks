<?php

use Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-grid-wrap';

if ( ! empty( $settings['preset'] ) ) {
    $topclass .= ' zolo-post-' . $settings['preset'];
}

if ( ! empty( $settings['postTitleAnimation'] ) ) {
    $topclass .= ' ' . $settings['postTitleAnimation']; // Add space before concatenating
}

$wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $topclass);

// get parent classes.
$parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$parentClasses = implode( ' ', $parentClasses );
// add parent classes to wrapper class.
$wrapper_class .= ' ' . $parentClasses;
$wrapperId      = $settings['zoloId'] ?? '';
$metaSeparator  = ! empty( $settings['metaSeparator'] ) ? $settings['metaSeparator'] : '//';
$filterTermId   = ! empty( $filterTermId ) ? $filterTermId : '';
$html           = '';
$paginationType = $settings['paginationType'] ?? 'normal';
$data_settings  = ! empty( $parentWrap ) ? ZoloHelpers::extract_settings_keys( $settings, array_keys( $class_object->get_default_attributes() ) ) : $settings;

?>
<?php if ( ! empty( $parentWrap ) ) : ?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	<?php if ( 'normal' !== $paginationType || ! empty( $settings['showFilterTaxonomy'] ) ) { ?>
		data-attributes="<?php echo esc_attr( wp_json_encode( $data_settings ) ); ?>"
	<?php } ?>
>
	<?php endif; ?>

	<div class="<?php echo esc_attr( $wrapper_class ); ?>"
		<?php
		if ( ! empty( $wrapperId ) ) {
			?>
			id="<?php echo esc_attr( $wrapperId ); ?>" <?php } ?>>

		<?php if ( ! empty( $settings['showFilterTaxonomy'] ) ) { ?>
			<div class="zolo-post-filter-taxonomy">
				<a href="#" data-id="all" class="
					<?php
					if ( ! empty( $parentWrap ) || 'all' == $filterTermId ) {
						echo esc_attr( 'current' );}
					?>
				">
					<?php esc_html_e( 'All', 'zoloblocks-pro' ); ?>
				</a>

				<?php
				$terms = get_terms(
					[
						'taxonomy' => $settings['postTaxonomy'] ?? 'category',
						'include'  => wp_list_pluck( $settings['postTerms'] ?? [], 'value' ),
						'orderby'  => 'include',
					]
				);
				foreach ( $terms as $key => $term ) :
					?>
					<a href="#" class="
					<?php
					if ( $filterTermId == $term->term_id ) {
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
			foreach ( $post_results['posts'] as $result ) {
				$result = (object) $result;
				$html  .= '<div class="zolo-post-item">';
				$html  .= '<div class="zolo-post-image">';

				if ( ! empty( $settings['preset'] ) && $settings['preset'] !== 'style-5' ) {
					$html .= require __DIR__ . '/post-partials/thumbnail.php';
				}

				if ( ! empty( $settings['preset'] ) && $settings['preset'] === 'style-5' ) {
					$html .= '<div class="zolo-post-img-category">';
					$html .= require __DIR__ . '/post-partials/thumbnail.php';
					$html .= require __DIR__ . '/post-partials/meta/categories.php';
					$html .= '</div>';
				}

				if ( ! empty( $settings['preset'] === 'style-5' ) && ( $settings['showMeta'] === true ) ) {
					$html .= '<div class="zolo-post-meta-wrap">';
					$html .= '<div class="zolo-post-dateTime">';
					$html .= require __DIR__ . '/post-partials/meta/date.php';
					if ( ! empty( $settings['showReadingTime'] ) ) {
						$html .= $metaSeparator;
						$html .= require __DIR__ . '/post-partials/meta/reading-time.php';
					}
					$html .= '</div>';

					$html .= require __DIR__ . '/post-partials/meta/author-grid.php';
					$html .= '</div>';
				}
				if ( ! empty( $settings['preset'] ) && $settings['preset'] !== 'style-5' && $settings['preset'] !== 'style-6' ) {
					$html .= require __DIR__ . '/post-partials/meta/author-grid.php';
				}
				

				$html .= '</div>';

				$html .= '<div class="zolo-post-content">';
				$html .= '<div class="zolo-post-inner-content">';
				if ( ! empty( $settings['preset'] ) && $settings['preset'] !== 'style-5' ) {
					$html .= require __DIR__ . '/post-partials/meta/categories.php';
				}
				$html .= require __DIR__ . '/post-partials/title.php';
				$html .= require __DIR__ . '/post-partials/content.php';
				
				// Normal meta display for non style-5 and non style-6
				if ( ! empty( $settings['preset'] !== 'style-5' ) && ! empty( $settings['preset'] !== 'style-6' ) && ( $settings['showMeta'] === true ) ) {
					$html .= '<div class="zolo-post-dateTime">';
					$html .= require __DIR__ . '/post-partials/meta/date.php';
					if ( ! empty( $settings['showReadingTime'] ) ) {
						$html .= $metaSeparator;
						$html .= require __DIR__ . '/post-partials/meta/reading-time.php';
					}
					$html .= '</div>';
				}
				$html .= '</div>';

				// Style 6 specific bottom content
				if ( ! empty( $settings['preset'] ) && $settings['preset'] === 'style-6' ) {
					$html .= '<div class="zolo-post-bottom-content">';
					if ( $settings['showMeta'] === true ) {
						$html .= '<div class="zolo-post-dateTime">';
						$html .= require __DIR__ . '/post-partials/meta/date.php';
						if ( ! empty( $settings['showReadingTime'] ) ) {
							$html .= $metaSeparator;
							$html .= require __DIR__ . '/post-partials/meta/reading-time.php';
						}
						$html .= '</div>';
					}
					$html .= require __DIR__ . '/post-partials/read-more.php';
					$html .= '</div>';
				} else {
					// Normal read more button for other styles
					$html .= require __DIR__ . '/post-partials/read-more.php';
				}
				
				$html .= '</div>';
				$html .= '</div>';
			}
			?>
			<?php echo wp_kses( $html, ZoloHelpers::wp_kses_allowed_svg() ); ?>
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
