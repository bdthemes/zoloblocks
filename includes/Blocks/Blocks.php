<?php

require_once ZOLO_DIR_PATH . 'includes/Blocks/PostGrid.php';
require_once ZOLO_DIR_PATH . 'includes/Blocks/PostList.php';

return apply_filters('zolo_blocks_list_data', [
    'container' => [
        'name'             => 'container',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/container/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'advanced-button' => [
        'name'             => 'advanced-button',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/advanced-button/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => ['zolo-advanced-button-frontend']
    ],
    'advanced-heading' => [
        'name'             => 'advanced-heading',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/advanced-heading/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'advanced-icon-box' => [
        'name'             => 'advanced-icon-box',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/advanced-icon-box/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'image-gallery' => [
        'name'             => 'image-gallery',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/image-gallery/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => ['zolo-image-gallery-frontend']
    ],
    'brand-child' => [
        'name'             => 'brand-child',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/brand-child/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'brand-grid' => [
        'name'             => 'brand-grid',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/brand-grid/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'form' => [
        'name'             => 'form',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/form/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'post-carousel' => [
        'name'             => 'post-carousel',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/post-carousel/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => ['zolo-post-carousel-frontend'],
        'class' => '\Zolo\Blocks\PostCarousel'
    ],
    'post-grid' => [
        'name'             => 'post-grid',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/post-grid/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false,
        'class' => '\Zolo\Blocks\PostGrid'
    ],
    'post-list' => [
        'name'             => 'post-list',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/post-list/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false,
        'class' => '\Zolo\Blocks\PostList'
    ],
    'pricing-table' => [
        'name'             => 'pricing-table',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/pricing-table/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'profile-card' => [
        'name'             => 'profile-card',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/profile-card/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'review' => [
        'name'             => 'review',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/review/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-review-frontend']
    ],
    'review-child' => [
        'name'             => 'review-child',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/review-child/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-review-child-frontend']
    ],
    'review-grid' => [
        'name'             => 'review-grid',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/review-grid/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'review-carousel' => [
        'name'             => 'review-carousel',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/review-carousel/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-review-carousel-frontend']
    ],
    'social-links' => [
        'name'             => 'social-links',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/social-links/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => true
    ],
    'team-grid' => [
        'name'             => 'team-grid',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/team-grid/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'counter' => [
        'name'             => 'counter',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/counter/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => ['zolo-counter-frontend', 'zolo-block-editor-dependency']
    ],
    'slide' => [
        'name'             => 'slide',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/slide/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'slider' => [
        'name'             => 'slider',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/slider/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-slider-frontend']
    ],
    'star-rating' => [
        'name'             => 'star-rating',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/star-rating/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-star-rating-frontend']
    ],
    'tab' => [
        'name'             => 'tab',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/tab/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-tab-frontend']
    ],
    'tabs' => [
        'name'             => 'tabs',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/tabs/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-tabs-frontend']
    ],
    'accordion-child' => [
        'name'             => 'accordion-child',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/accordion-child/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'accordion' => [
        'name'             => 'accordion',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/accordion/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-accordion-frontend']
    ],
    'cta' => [
        'name'             => 'cta',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/cta/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'fancy-list-child' => [
        'name'             => 'fancy-list-child',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/fancy-list-child/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'fancy-list' => [
        'name'             => 'fancy-list',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/fancy-list/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'progress-bar' => [
        'name'             => 'progress-bar',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/progress-bar/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-progress-bar-frontend']
    ],
    'progress-bar-child' => [
        'name'             => 'progress-bar-child',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/progress-bar-child/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'google-map' => [
        'name'             => 'google-map',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/google-map/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-google-map-frontend', 'zolo-block-editor-dependency']
    ],
    'flipbox' => [
        'name'             => 'flipbox',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/flipbox/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-flipbox-frontend']
    ],
    'countdown' => [
        'name'             => 'countdown',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/countdown/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-countdown-frontend']
    ],
    'advanced-image' => [
        'name'             => 'advanced-image',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/advanced-image/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'list' => [
        'name'             => 'list',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/list/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'text-field' => [
        'name'             => 'text-field',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/text-field/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],

]);
