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

?>

<div class="<?php echo esc_attr($wrapper_class); ?>">
    <?php foreach ($post_results['posts'] as $result) {
        $result = (object)$result;
        $html .= '<div class="zolo-post-item">';

        $html .= '<div class="zolo-post-image">';
        $html .= require __DIR__ . '/post-partials/thumbnail.php';
        $html .= '</div>';

        $html .= '<div class="zolo-post-content">';
        $html .= '<div class="zolo-post-count-number"></div>';
        $html .= '<div class="zolo-post-inner-content">';

        $html .= require __DIR__ . '/post-partials/meta/categories.php';
        $html .= require __DIR__ . '/post-partials/title.php';

        $html .= '<div class="zolo-post-meta">';
        $html .= require __DIR__ . '/post-partials/meta/author.php';
        $html .= require __DIR__ . '/post-partials/meta/date.php';
        $html .= '</div>';

        $html .= require __DIR__ . '/post-partials/content.php';


        $html .= '</div>';
        $html .= '</div>';


        $html .= '</div>';
    } ?>

    <?php echo wp_kses($html, 'post'); ?>
</div>

<?php if (!empty($settings['postQuery']['showPagination']) && !empty($post_results['total_page'])) { ?>
    <div class="zolo-pagination-nav">
        <?php echo ZoloHelpers::pagination($post_results['total_page']); ?>
    </div>
<?php } ?>