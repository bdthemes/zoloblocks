<?php

require_once ZOLO_DIR_PATH . 'includes/Blocks/PostGrid.php';

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
    'advanced-image-gallery' => [
        'name'             => 'advanced-image-gallery',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/advanced-image-gallery/block.json',
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
    'social-icon' => [
        'name'             => 'social-icon',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/social-icon/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => true
    ],
    'team-member' => [
        'name'             => 'team-member',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/team-member/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
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
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],

]);
