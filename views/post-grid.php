<?php

use  Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-grid-wrap';
if (!empty($settings['preset'])) {
    $topclass .= ' zolo-post-' . $settings['preset'];
}
$wrapper_class = ZoloHelpers::get_wrapper_class($settings, $topclass);
$html = '';
?>

<div class="<?php echo esc_attr($wrapper_class); ?>">
    <?php foreach ($post_results['posts'] as $result) {
        $result = (object)$result;
        $html .= '<div class="zolo-post-item">';

        $html .= '<div class="zolo-post-image">';
        $html .= require __DIR__ . '/post-partials/thumbnail.php';
        if (!empty($settings['preset'] === 'style-5')) {
            $html .= require __DIR__ . '/post-partials/meta/date.php';
        }
        $html .= require __DIR__ . '/post-partials/meta/author.php';
        $html .= '</div>';

        $html .= '<div class="zolo-post-content">';
        if (!empty($settings['preset'] !== 'style-5')) {
            $html .= require __DIR__ . '/post-partials/meta/date.php';
        }
        $html .= require __DIR__ . '/post-partials/title.php';
        $html .= require __DIR__ . '/post-partials/content.php';
        $html .= require __DIR__ . '/post-partials/meta/categories.php';
        $html .= '</div>';

        $html .= require __DIR__ . '/post-partials/read-more.php';

        $html .= '</div>';
    } ?>

    <?php echo wp_kses($html, 'post'); ?>
</div>

<?php if (!empty($settings['postQuery']['showPagination']) && !empty($post_results['total_page'])) { ?>
    <div class="zolo-pagination-nav">
        <?php echo ZoloHelpers::pagination($post_results['total_page']); ?>
    </div>
<?php } ?>