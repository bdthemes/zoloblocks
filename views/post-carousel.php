<?php

use  Zolo\Helpers\ZoloHelpers;

$topclass = 'zolo-post-carousel wp-block-zolo-post-carousel';
if (!empty($settings['preset'])) {
    $topclass .= ' zolo-post-' . $settings['preset'];
}
if ( ! empty( $settings['postTitleAnimation'] ) ) {
    $topclass .= ' ' . $settings['postTitleAnimation']; // Add space before concatenating
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

$swiperOptions = !empty($settings['sliderOptions']) ? wp_json_encode($settings['sliderOptions']) : [];
$prevNavIcon = !empty($settings['prevNavIcon']) ? $settings['prevNavIcon'] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"></path></svg>';
$nextNavIcon = !empty($settings['nextNavIcon']) ? $settings['nextNavIcon'] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>';

?>

<div class="<?php echo esc_attr($wrapper_class); ?>" data-settings="<?php echo esc_attr($swiperOptions); ?>" <?php if (!empty($wrapperId)) { ?> id="<?php echo esc_attr($wrapperId); ?>" <?php } ?>>
    <?php
    $html .= '<div class="swiper">';
    $html .= '<div class="swiper-wrapper">';
    ?>
    <?php foreach ($post_results['posts'] as $result) {
        $result = (object)$result;
        $html .= '<div class="zolo-post-item swiper-slide">';
        $html .= '<div class="zolo-post-image">';

        if (!empty($settings['preset']) && $settings['preset'] !== 'style-4') {
            $html .= require __DIR__ . '/post-partials/thumbnail.php';
        }

        if (!empty($settings['preset']) && $settings['preset'] === 'style-4') {
            $html .= '<div class="zolo-post-img-category">';
            $html .= require __DIR__ . '/post-partials/thumbnail.php';
            $html .= require __DIR__ . '/post-partials/meta/categories.php';
            $html .= '</div>';
        }

        if (!empty($settings['preset'] === 'style-4') && ($settings['showMeta'] === true)) {
            $html .= '<div class="zolo-post-meta-wrap">';
            $html .= '<div class="zolo-post-dateTime">';
            $html .= require __DIR__ . '/post-partials/meta/date.php';
            if (!empty($settings['showReadingTime'])) {
                $html .= $metaSeparator;
                $html .= require __DIR__ . '/post-partials/meta/reading-time.php';
            }
            $html .= '</div>';

            $html .= require __DIR__ . '/post-partials/meta/author-carousel.php';
            $html .= '</div>';
        }
        if (!empty($settings['preset']) && $settings['preset'] !== 'style-4') {
            $html .= require __DIR__ . '/post-partials/meta/author-carousel.php';
        }

        $html .= '</div>';

        $html .= '<div class="zolo-post-content">';
        $html .= '<div class="zolo-post-inner-content">';
        if (!empty($settings['preset']) && $settings['preset'] !== 'style-4') {
            $html .= require __DIR__ . '/post-partials/meta/categories.php';
        }
        $html .= require __DIR__ . '/post-partials/title.php';
        $html .= require __DIR__ . '/post-partials/content.php';
        if (!empty($settings['preset'] !== 'style-4')) {
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

    <?php $html .= '</div></div>'; ?>

    <?php echo wp_kses($html, ZoloHelpers::wp_kses_allowed_svg()); ?>

    <?php if (!empty($settings['sliderOptions']['pagination'])) : ?>
        <div class="swiper-pagination swiper-pagination-position-bottom"></div>
    <?php endif; ?>

    <?php if (!empty($settings['sliderOptions']['navigation'])) : ?>
        <div class="swiper-navigation-wrap swiper-navigation-position-center">
            <?php if (!empty($settings['customNavIcon'])) : ?>
                <div class="swiper-nav-button swiper-zolo-prev">
                    <?php echo wp_kses($prevNavIcon, ZoloHelpers::wp_kses_allowed_svg()); ?>
                </div>
                <div class="swiper-nav-button swiper-zolo-next">
                    <?php echo wp_kses($nextNavIcon, ZoloHelpers::wp_kses_allowed_svg()); ?>
                </div>
            <?php else : ?>
                <div class="swiper-nav-button swiper-button-prev"></div>
                <div class="swiper-nav-button swiper-button-next"></div>
            <?php endif; ?>
        </div>
    <?php endif; ?>
</div>