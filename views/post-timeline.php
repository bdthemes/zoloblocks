<?php

use Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-timeline-wrap';
if (! empty($settings['preset'])) {
	$topclass .= ' zolo-post-' . $settings['preset'];
}

if (! empty($settings['postTitleAnimation'])) {
	$topclass .= ' ' . $settings['postTitleAnimation']; // Add space before concatenating
}


$wrapper_class = ZoloHelpers::get_wrapper_class($settings, $topclass);

// get parent classes.
$parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$parentClasses = implode(' ', $parentClasses);
// add parent classes to wrapper class.
$wrapper_class .= ' ' . $parentClasses;
$metaSeparator  = ! empty($settings['metaSeparator']) ? $settings['metaSeparator'] : '|';
$html           = '';
$paginationType = $settings['paginationType'] ?? 'normal';
$wrapperId      = $settings['zoloId'] ?? '';
$data_settings  = ! empty($parentWrap) ? ZoloHelpers::extract_settings_keys($settings, array_keys($class_object->get_default_attributes())) : $settings;
?>
<?php if (! empty($parentWrap)) : ?>
	<div <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>
		<?php if ('normal' !== $paginationType) { ?>
		data-attributes="<?php echo esc_attr(wp_json_encode($data_settings)); ?>"
		<?php } ?>>
	<?php endif; ?>
	<div class="<?php echo esc_attr($wrapper_class); ?>"
		<?php
		if (! empty($wrapperId)) {
		?>
		id="<?php echo esc_attr($wrapperId); ?>" <?php } ?>>

		<div class="zolo-post-start-end-wrap">

			<?php if (! empty($settings['showStartEnd'])) : ?>
				<div class="zolo-se-text zolo-top-start"><?php esc_html_e('start', 'zoloblocks'); ?></div>
				<div class="zolo-se-text zolo-bottom-end"><?php esc_html_e('end', 'zoloblocks'); ?></div>
			<?php endif; ?>

			<div class="zolo-post-timeline-grid">
				<?php
				foreach ($post_results['posts'] as $result) {
					$result = (object) $result;
					$html  .= '<div class="zolo-item">';
					$html  .= ' <div class="zolo-content-wrap">';
					$html  .= ' <div class="zolo-counter"></div>';
					$html  .= '<div class="zolo-content">';

					if (! empty($settings['showThumbnail'])) {
						$html .= '<div class="zolo-post-image">';
						$html .= require __DIR__ . '/post-partials/thumbnail.php';
						$html .= '</div>';
					}

					if (! empty($settings['showDate'])) {
						$html .= require __DIR__ . '/post-partials/meta/date.php';
					}

					$html .= require __DIR__ . '/post-partials/title.php';

					if (! empty($settings['showExcerpt'])) {
						$html .= require __DIR__ . '/post-partials/content.php';
					}

					if (! empty($settings['showMeta'])) {
						$html .= '<div class="zolo-post-meta">';
						$html .= require __DIR__ . '/post-partials/meta/categories.php';

						if (! empty($settings['showComment'])) {
							$html .= '<div data-separator="' . $metaSeparator . '">';
							$html .= require __DIR__ . '/post-partials/meta/comment-number.php';
							$html .= '</div>';
						}
						if (! empty($settings['showReadingTime'])) {
							$html .= '<div data-separator="' . $metaSeparator . '">';
							$html .= require __DIR__ . '/post-partials/meta/reading-time.php';
							$html .= '</div>';
						}
						$html .= '</div>';
					}

					$html .= '</div>';
					$html .= '</div>';
					$html .= '</div>';
				}
				?>

				<?php echo wp_kses($html, ZoloHelpers::wp_kses_allowed_svg()); ?>

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