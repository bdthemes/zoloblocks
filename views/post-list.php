<?php

use  Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-featured-list-wrap';
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

$html = '';
$i = 0;

$metaSeparator = !empty($settings['metaSeparator']) ? $settings['metaSeparator'] : '//';

$wrapperId = $settings['zoloId'] ?? '';

?>

<div class="<?php echo esc_attr($wrapper_class); ?>" <?php if (!empty($wrapperId)) { ?> id="<?php echo esc_attr($wrapperId); ?>" <?php } ?>>
    <?php foreach ($post_results['posts'] as $result) {
        $i++;
        $featuredPostClass = $i === 1 ? 'featured-post' : '';

        $result = (object)$result;

        $html .= '<div class="zolo-post-item ' . $featuredPostClass . '">';

        $html .= '<div class="zolo-post-image">';
        $html .= require __DIR__ . '/post-partials/thumbnail.php';
        $html .= '</div>';

        $html .= '<div class="zolo-post-content">';

        if (!empty($settings['showCount'])) {
            $html .= '<div class="zolo-post-count-number"></div>';
        }

        $html .= '<div class="zolo-post-inner-content">';

        $html .= require __DIR__ . '/post-partials/meta/categories.php';
        $html .= require __DIR__ . '/post-partials/title.php';

        if (!empty($settings['showMeta'])) {
            $html .= '<div class="zolo-post-meta">';
            $html .= require __DIR__ . '/post-partials/meta/author.php';
            $html .= '<span class="meta-separator">' . $metaSeparator . '</span>';
            $html .= require __DIR__ . '/post-partials/meta/date.php';
            if (!empty($settings['showReadingTime'])) {
                $html .= '<span class="meta-separator">' . $metaSeparator . '</span>';
                $html .= require __DIR__ . '/post-partials/meta/reading-time.php';
            }
            $html .= '</div>';
        }

        $html .= require __DIR__ . '/post-partials/content.php';

        $html .= '</div>';
        $html .= '</div>';


        $html .= '</div>';
    } ?>

    <?php echo wp_kses($html, 'post'); ?>
</div>

<?php if (!empty($settings['postQuery']['showPagination']) && !empty($post_results['total_page'])) { ?>
    <div class="zolo-pagination-wrap <?php echo esc_attr($settings['uniqueId'] ?? '') ?>">
        <div class="zolo-pagination-nav">
            <?php echo wp_kses(ZoloHelpers::pagination($post_results['total_page']), ZoloHelpers::wp_kses_allowed_svg()); ?>
        </div>
    </div>
<?php } ?>