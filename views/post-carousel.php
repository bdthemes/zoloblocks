<?php

use  Zolo\Helpers\ZoloHelpers;

$zolo_topclass = 'zolo-post-carousel wp-block-zolo-post-carousel';
if (!empty($settings['preset'])) {
    $zolo_topclass .= ' zolo-post-' . $settings['preset'];
}
if (! empty($settings['postTitleAnimation'])) {
    $zolo_topclass .= ' ' . $settings['postTitleAnimation']; // Add space before concatenating
}

$zolo_wrapper_class = ZoloHelpers::get_wrapper_class($settings, $zolo_topclass);
$zolo_uniqueId      = $settings['uniqueId'];
$zolo_breakpoints = array(
    1024 => array(
        'slidesPerView' => isset($settings['zolo_sliderColumnsRange']) ? $settings['zolo_sliderColumnsRange'] : 2,
        'spaceBetween'  => isset($settings['zolo_columnsGapRange']) ? $settings['zolo_columnsGapRange'] : 30,
    ),
    768 => array(
        'slidesPerView' => isset($settings['zolo_TABsliderColumnsRange']) ? $settings['zolo_TABsliderColumnsRange'] : 2,
        'spaceBetween'  => isset($settings['zolo_TABcolumnsGapRange']) ? $settings['zolo_TABcolumnsGapRange'] : 30,
    ),
    640 => array(
        'slidesPerView' => isset($settings['zolo_MOBsliderColumnsRange']) ? $settings['zolo_MOBsliderColumnsRange'] : 1,
        'spaceBetween'  => isset($settings['zolo_MOBcolumnsGapRange']) ? $settings['zolo_MOBcolumnsGapRange'] : 0,
    ),
);
$zolo_show_navigation = $settings['showNavigation'] ?? false;
$zolo_show_pagination = $settings['showPagination'] ?? true;

// Navigation selectors
$zolo_next_selector = $settings['customNavIcon']
    ? ".{$zolo_uniqueId} .swiper-zolo-next"
    : ".{$zolo_uniqueId} .swiper-button-next";

$zolo_prev_selector = $settings['customNavIcon']
    ? ".{$zolo_uniqueId} .swiper-zolo-prev"
    : ".{$zolo_uniqueId} .swiper-button-prev";


$zolo_options = array(
    'loop'        => $settings['infiniteLoop'] ?? false,
    'speed'       => !empty($settings['speed']) ? $settings['speed'] * 100 : 300,
    'effect'      => $settings['carouselEffect'] ?? 'slide',
    'autoplay'    => $settings['autoplay']
        ? array(
            'delay'             => !empty($settings['autoplayDelay']) ? $settings['autoplayDelay'] * 100 : 3000,
            'pauseOnMouseEnter' => $settings['pauseOnMouseEnter'] ?? false,
        )
        : false,
    'navigation'  => $zolo_show_navigation
        ? array(
            'nextEl' => $zolo_next_selector,
            'prevEl' => $zolo_prev_selector,
        )
        : false,
    'pagination'  => $zolo_show_pagination
        ? array(
            'el'            => ".{$zolo_uniqueId} .swiper-pagination",
            'clickable'     => true,
            'type'          => $settings['paginationType'] ?? 'bullets',
            'dynamicBullets' => $settings['dynamicBullets'] ?? false,
        )
        : false,
    'breakpoints' => $zolo_breakpoints,
);
$zolo_carousel_effect = $settings['carouselEffect'] ?? 'slide';
// Conditionally add coverflow effect settings
if ($zolo_carousel_effect === 'coverflow') {
    $zolo_options['coverflowEffect'] = $settings['coverflowEffect'] ?? array(
        'rotate' => 50,
        'stretch' => 0,
        'depth' => 100,
        'modifier' => 1,
        'slideShadows' => true
    );
}


// get parent classes
$zolo_parentClasses = $settings['parentClasses'] ?? [];
// convert to string
$zolo_parentClasses = implode(' ', $zolo_parentClasses);
// add parent classes to wrapper class
$zolo_wrapper_class .= ' ' . $zolo_parentClasses;

$zolo_metaSeparator = !empty($settings['metaSeparator']) ? $settings['metaSeparator'] : '//';

$zolo_html = '';

$zolo_wrapperId = $settings['zoloId'] ?? '';

$zolo_swiperOptions = !empty($settings['sliderOptions']) ? wp_json_encode($settings['sliderOptions']) : wp_json_encode($zolo_options);
$zolo_prevNavIcon = !empty($settings['prevNavIcon']) ? $settings['prevNavIcon'] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"></path></svg>';
$zolo_nextNavIcon = !empty($settings['nextNavIcon']) ? $settings['nextNavIcon'] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>';

?>

<div class="<?php echo esc_attr($zolo_wrapper_class); ?>" data-settings="<?php echo esc_attr($zolo_swiperOptions); ?>" <?php if (!empty($zolo_wrapperId)) { ?> id="<?php echo esc_attr($zolo_wrapperId); ?>" <?php } ?>>
    <?php
    $zolo_html .= '<div class="swiper">';
    $zolo_html .= '<div class="swiper-wrapper">';
    ?>
    <?php foreach ($post_results['posts'] as $zolo_result) {
        $zolo_result = (object)$zolo_result;
        $zolo_html .= '<div class="zolo-post-item swiper-slide">';
        $zolo_html .= '<div class="zolo-post-image">';

        if (!empty($settings['preset']) && $settings['preset'] !== 'style-4') {
            $zolo_html .= require __DIR__ . '/post-partials/thumbnail.php';
        }

        if (!empty($settings['preset']) && $settings['preset'] === 'style-4') {
            $zolo_html .= '<div class="zolo-post-img-category">';
            $zolo_html .= require __DIR__ . '/post-partials/thumbnail.php';
            $zolo_html .= require __DIR__ . '/post-partials/meta/categories.php';
            $zolo_html .= '</div>';
        }

        if (!empty($settings['preset'] === 'style-4') && ($settings['showMeta'] === true)) {
            $zolo_html .= '<div class="zolo-post-meta-wrap">';
            $zolo_html .= '<div class="zolo-post-dateTime">';
            $zolo_html .= require __DIR__ . '/post-partials/meta/date.php';
            if (!empty($settings['showReadingTime'])) {
                $zolo_html .= $zolo_metaSeparator;
                $zolo_html .= require __DIR__ . '/post-partials/meta/reading-time.php';
            }
            $zolo_html .= '</div>';

            $zolo_html .= require __DIR__ . '/post-partials/meta/author-carousel.php';
            $zolo_html .= '</div>';
        }
        if (!empty($settings['preset']) && $settings['preset'] !== 'style-4') {
            $zolo_html .= require __DIR__ . '/post-partials/meta/author-carousel.php';
        }

        $zolo_html .= '</div>';

        $zolo_html .= '<div class="zolo-post-content">';
        $zolo_html .= '<div class="zolo-post-inner-content">';
        if (!empty($settings['preset']) && $settings['preset'] !== 'style-4') {
            $zolo_html .= require __DIR__ . '/post-partials/meta/categories.php';
        }
        $zolo_html .= require __DIR__ . '/post-partials/title.php';
        $zolo_html .= require __DIR__ . '/post-partials/content.php';
        if (!empty($settings['preset'] !== 'style-4')) {
            $zolo_html .= '<div class="zolo-post-dateTime">';
            $zolo_html .= require __DIR__ . '/post-partials/meta/date.php';
            if (!empty($settings['showReadingTime'])) {
                $zolo_html .= $zolo_metaSeparator;
                $zolo_html .= require __DIR__ . '/post-partials/meta/reading-time.php';
            }
            $zolo_html .= '</div>';
        }
        $zolo_html .= '</div>';
        $zolo_html .= require __DIR__ . '/post-partials/read-more.php';
        $zolo_html .= '</div>';
        $zolo_html .= '</div>';
    } ?>

    <?php $zolo_html .= '</div></div>'; ?>

    <?php echo wp_kses($zolo_html, ZoloHelpers::wp_kses_allowed_svg()); ?>

    <?php if ($zolo_show_pagination) : ?>
        <div class="swiper-pagination swiper-pagination-position-bottom"></div>
    <?php endif; ?>

    <?php if ($zolo_show_navigation) : ?>
        <div class="swiper-navigation-wrap swiper-navigation-position-center">
            <?php if (!empty($settings['customNavIcon'])) : ?>
                <div class="swiper-nav-button swiper-zolo-prev">
                    <?php echo wp_kses($zolo_prevNavIcon, ZoloHelpers::wp_kses_allowed_svg()); ?>
                </div>
                <div class="swiper-nav-button swiper-zolo-next">
                    <?php echo wp_kses($zolo_nextNavIcon, ZoloHelpers::wp_kses_allowed_svg()); ?>
                </div>
            <?php else : ?>
                <div class="swiper-nav-button swiper-button-prev"></div>
                <div class="swiper-nav-button swiper-button-next"></div>
            <?php endif; ?>
        </div>
    <?php endif; ?>
</div>