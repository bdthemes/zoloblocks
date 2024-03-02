<?php

use  Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-grid-wrap';
if (!empty($settings['preset'])) {
    $topclass .= ' zolo-post-' . $settings['preset'];
}
$wrapper_class = ZoloHelpers::get_wrapper_class($settings, $topclass);

// get parent classes
$parentClasses = $settings['parentClasses'] ?? [];
// convert to string
$parentClasses = implode(' ', $parentClasses);
// add parent classes to wrapper class
$wrapper_class .= ' ' . $parentClasses;

$metaSeparator = !empty($settings['metaSeparator']) ? $settings['metaSeparator'] : '//';

$html = '';

$wrapperId = $settings['zoloId'] ?? '';

// var_dump($settings);

?>

<div class="<?php echo esc_attr($wrapper_class); ?>" <?php if (!empty($wrapperId)) { ?> id="<?php echo esc_attr($wrapperId); ?>" <?php } ?>>
    <?php foreach ($post_results['posts'] as $result) {
        $result = (object)$result;
        $html .= '<div class="zolo-post-item">';
        $html .= '<div class="zolo-post-image">';
        // thumbnail ->meta[date]->author
        $html .= require __DIR__ . '/post-partials/thumbnail.php';
        if (!empty($settings['preset'] === 'style-5') && ($settings['showMeta'] === true)) {
            $html .= '<div class="zolo-post-dateTime">';
            $html .= require __DIR__ . '/post-partials/meta/date.php';
            if (!empty($settings['showReadingTime'])) {
                $html .= $metaSeparator;
                $html .= require __DIR__ . '/post-partials/meta/reading-time.php';
            }
            $html .= '</div>';
        }
        $html .= require __DIR__ . '/post-partials/meta/author.php';

        $html .= '</div>';

        $html .= '<div class="zolo-post-content">';
        $html .= '<div class="zolo-post-inner-content">';
        $html .= require __DIR__ . '/post-partials/meta/categories.php';
        $html .= require __DIR__ . '/post-partials/title.php';
        $html .= require __DIR__ . '/post-partials/content.php';
        if (!empty($settings['preset'] !== 'style-5') && ($settings['showMeta'] === true)) {
            $html .= '<div class="zolo-post-dateTime">';
            $html .= require __DIR__ . '/post-partials/meta/date.php';
            if (!empty($settings['showReadingTime'])) {
                $html .= $metaSeparator;
                $html .= require __DIR__ . '/post-partials/meta/reading-time.php';
            }
            $html .= '</div>';
        }
        $html .= '</div>';
        $html .= require __DIR__ . '/post-partials/read-more.php';
        $html .= '</div>';
        $html .= '</div>';
    } ?>

    <?php echo wp_kses($html, ZoloHelpers::wp_kses_allowed_svg()); ?>
</div>

<?php if (!empty($settings['postQuery']['showPagination']) && !empty($post_results['total_page'])) {
?>
    <div class="zolo-pagination-wrap <?php echo esc_attr($settings['uniqueId'] ?? '') ?>">
        <div class="zolo-pagination-nav">
            <?php echo wp_kses(ZoloHelpers::pagination($post_results['total_page']), ZoloHelpers::wp_kses_allowed_svg()); ?>
        </div>
    </div>
<?php } ?>