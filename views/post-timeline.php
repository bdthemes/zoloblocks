<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-post-timeline-wrap';
if (! empty($settings['preset'])) {
	$zolo_topclass .= ' zolo-post-' . $settings['preset'];
}

if (! empty($settings['postTitleAnimation'])) {
	$zolo_topclass .= ' ' . $settings['postTitleAnimation']; // Add space before concatenating
}


$zolo_wrapper_class = ZoloHelpers::get_wrapper_class($settings, $zolo_topclass);

// get parent classes.
$zolo_parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$zolo_parentClasses = implode(' ', $zolo_parentClasses);
// add parent classes to wrapper class.
$zolo_wrapper_class .= ' ' . $zolo_parentClasses;
$zolo_metaSeparator  = ! empty($settings['metaSeparator']) ? $settings['metaSeparator'] : '|';
$zolo_html           = '';
$zolo_paginationType = $settings['paginationType'] ?? 'normal';
$zolo_wrapperId      = $settings['zoloId'] ?? '';
$zolo_data_settings  = ! empty($parentWrap) ? ZoloHelpers::extract_settings_keys($settings, array_keys($class_object->get_default_attributes())) : $settings;
?>
<?php if (! empty($parentWrap)) : ?>
	<div <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>
		<?php if ('normal' !== $zolo_paginationType) { ?>
		data-attributes="<?php echo esc_attr(wp_json_encode($zolo_data_settings)); ?>"
		<?php } ?>>
	<?php endif; ?>
	<div class="<?php echo esc_attr($zolo_wrapper_class); ?>"
		<?php
		if (! empty($zolo_wrapperId)) {
		?>
		id="<?php echo esc_attr($zolo_wrapperId); ?>" <?php } ?>>

		<div class="zolo-post-start-end-wrap">

			<?php if (! empty($settings['showStartEnd'])) : ?>
				<div class="zolo-se-text zolo-top-start"><?php esc_html_e('start', 'zoloblocks'); ?></div>
				<div class="zolo-se-text zolo-bottom-end"><?php esc_html_e('end', 'zoloblocks'); ?></div>
			<?php endif; ?>

			<div class="zolo-post-timeline-grid">
				<?php
				foreach ($post_results['posts'] as $zolo_result) {
					$zolo_result = (object) $zolo_result;
					$zolo_html  .= '<div class="zolo-item">';
					$zolo_html  .= ' <div class="zolo-content-wrap">';
					$zolo_html  .= ' <div class="zolo-counter"></div>';
					$zolo_html  .= '<div class="zolo-content">';

					if (! empty($settings['showThumbnail'])) {
						$zolo_html .= '<div class="zolo-post-image">';
						$zolo_html .= require __DIR__ . '/post-partials/thumbnail.php';
						$zolo_html .= '</div>';
					}

					if (! empty($settings['showDate'])) {
						$zolo_html .= require __DIR__ . '/post-partials/meta/date.php';
					}

					$zolo_html .= require __DIR__ . '/post-partials/title.php';

					if (! empty($settings['showExcerpt'])) {
						$zolo_html .= require __DIR__ . '/post-partials/content.php';
					}

					if (! empty($settings['showMeta'])) {
						$zolo_html .= '<div class="zolo-post-meta">';
						$zolo_html .= require __DIR__ . '/post-partials/meta/categories.php';

						if (! empty($settings['showComment'])) {
							$zolo_html .= '<div data-separator="' . $zolo_metaSeparator . '">';
							$zolo_html .= require __DIR__ . '/post-partials/meta/comment-number.php';
							$zolo_html .= '</div>';
						}
						if (! empty($settings['showReadingTime'])) {
							$zolo_html .= '<div data-separator="' . $zolo_metaSeparator . '">';
							$zolo_html .= require __DIR__ . '/post-partials/meta/reading-time.php';
							$zolo_html .= '</div>';
						}
						$zolo_html .= '</div>';
					}

					$zolo_html .= '</div>';
					$zolo_html .= '</div>';
					$zolo_html .= '</div>';
				}
				?>

				<?php echo wp_kses($zolo_html, ZoloHelpers::wp_kses_allowed_svg()); ?>

			</div>
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
	<?php if (! empty($parentWrap)) : ?>
	</div>
<?php endif; ?>