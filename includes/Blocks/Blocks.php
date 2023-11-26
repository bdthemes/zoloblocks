<?php

require_once ZOLO_DIR_PATH . 'includes/Blocks/PostGrid.php';
require_once ZOLO_DIR_PATH . 'includes/Blocks/PostList.php';

return apply_filters( 'zolo_blocks_list_data', [
    'container' => [
        'name'             => 'container',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/container/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'advanced-button' => [
        'name'             => 'advanced-button',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/advanced-button/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => ['zolo-advanced-button-frontend']
    ],
    'advanced-heading' => [
        'name'             => 'advanced-heading',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/advanced-heading/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'advanced-icon-box' => [
        'name'             => 'advanced-icon-box',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/advanced-icon-box/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'image-gallery' => [
        'name'             => 'image-gallery',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/image-gallery/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'brand-child' => [
        'name'             => 'brand-child',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/brand-child/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'brand-grid' => [
        'name'             => 'brand-grid',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/brand-grid/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'post-grid' => [
        'name'             => 'post-grid',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/post-grid/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false,
        'class' => '\Zolo\Blocks\PostGrid'
    ],
    'post-list' => [
        'name'             => 'post-list',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/post-list/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false,
        'class' => '\Zolo\Blocks\PostList'
    ],
    'pricing-table' => [
        'name'             => 'pricing-table',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/pricing-table/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'profile-card' => [
        'name'             => 'profile-card',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/profile-card/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'review' => [
        'name'             => 'review',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/review/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-review-frontend']
    ],
    'review-child' => [
        'name'             => 'review-child',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/review-child/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-review-child-frontend']
    ],
    'review-grid' => [
        'name'             => 'review-grid',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/review-grid/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'social-links' => [
        'name'             => 'social-links',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/social-links/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => true
    ],
    'team-grid' => [
        'name'             => 'team-grid',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/team-grid/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'counter' => [
        'name'             => 'counter',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/counter/block.json',
        'frontend-styles'  => ['zolo-fontawesome','zolo-block-common-style'],
        'frontend-scripts' => ['zolo-counter-frontend', 'zolo-block-editor-dependency']
    ],
    'slide' => [
        'name'             => 'slide',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/slide/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'slider' => [
        'name'             => 'slider',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/slider/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-slider-frontend']
    ],
    'star-rating' => [
        'name'             => 'star-rating',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/star-rating/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-star-rating-frontend']
    ],
    'accordion-child' => [
        'name'             => 'accordion-child',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/accordion-child/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'accordion' => [
        'name'             => 'accordion',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/accordion/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-accordion-frontend']
    ],
    'cta' => [
        'name'             => 'cta',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/cta/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'fancy-list' => [
        'name'             => 'fancy-list',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/fancy-list/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'audio-player' => [
        'name'             => 'audio-player',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/audio-player/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
]);

