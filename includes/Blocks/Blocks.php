<?php
require_once ZOLO_DIR_PATH . 'includes/Blocks/PostGrid.php';
require_once ZOLO_DIR_PATH . 'includes/Blocks/PostList.php';

return apply_filters(
    'zolo_blocks_list_data',
    [
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
        'advanced-search' => [
            'name'             => 'advanced-search',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/advanced-search/block.json',
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
        'charts' => [
            'name'             => 'charts',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/charts/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => ['zolo-charts-frontend', 'zolo-block-editor-dependency']
        ],
        'form' => [
            'name'             => 'form',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/form/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => ['zolo-form-frontend', 'zolo-block-editor-dependency']
        ],
        'newsletter' => [
            'name'             => 'newsletter',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/newsletter/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => ['zolo-newsletter-frontend', 'zolo-block-editor-dependency'],
        ],
        'post-carousel' => [
            'name'             => 'post-carousel',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/post-carousel/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => ['zolo-post-carousel-frontend'],
            'class' => '\Zolo\Blocks\PostCarousel'
        ],
        'post-category'      => [
            'name'             => 'post-category',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/post-category/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => false,
            'class'            => '\Zolo\Blocks\PostCategory',
        ],
        'tag-cloud'          => [
            'name'             => 'tag-cloud',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/tag-cloud/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => false,
            'class'            => '\Zolo\Blocks\TagCloud',
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
            'frontend-stylpostTaxonomyes'  => ['zolo-fontawesome', 'zolo-block-common-style'],
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
        'qrcode' => [
            'name'             => 'qrcode',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/qrcode/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => ['zolo-qrcode-frontend']
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
        'social-share' => [
            'name'             => 'social-share',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/social-share/block.json',
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
        'lightbox' => [
            'name'             => 'lightbox',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/lightbox/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            // 'frontend-scripts' => ['zolo-lightbox-frontend']
        ],
        'progress-bar-child' => [
            'name'             => 'progress-bar-child',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/progress-bar-child/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => false
        ],
        'progress-pie' => [
            'name'             => 'progress-pie',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/progress-pie/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => ['zolo-progress-pie-frontend']
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
        'image-compare' => [
            'name'             => 'image-compare',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/image-compare/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => ['zolo-image-compare-frontend', 'zolo-block-editor-dependency']
        ],
        'text-field' => [
            'name'             => 'text-field',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/text-field/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => false
        ],
        'business-hour' => [
            'name'             => 'business-hour',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/business-hour/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => false
        ],

        'email'               => [
            'name'             => 'email',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/email/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => false,
        ],
        'textarea'            => [
            'name'             => 'textarea',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/textarea/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => false,
        ],
        'icon'                => [
            'name'             => 'icon',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/icon/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => false,
        ],
        'popup-builder' => [
        'name'             => 'popup-builder',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/popup-builder/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => false
    ],
    'text-path' => [
        'name'             => 'text-path',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/text-path/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-text-path-frontend']
    ],
    'notice"' => [
        'name'             => 'notice',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/notice/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-notice-frontend']
    ],
    'navmenu' => [
        'name'             => 'navmenu',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/navmenu/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        'frontend-scripts' => ['zolo-navmenu-frontend']
    ],
    'navmenu-item' => [
        'name'             => 'navmenu-item',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/navmenu-item/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        // 'frontend-scripts' => ['zolo-notice-frontend']
    ],
    'navmenu-submenu' => [
        'name'             => 'zolo/navmenu-submenu',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/navmenu-submenu/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        // 'frontend-scripts' => ['zolo-notice-frontend']
    ],
    'megamenu' => [
        'name'             => 'zolo/megamenu',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/megamenu/block.json',
        'frontend-styles'  => ['zolo-block-common-style'],
        // 'frontend-scripts' => ['zolo-notice-frontend']
    ],
    'text-path'           => [
            'name'             => 'text-path',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/text-path/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => ['zolo-text-path-frontend'],
        ],
        'notice"'             => [
            'name'             => 'notice',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/notice/block.json',
            'frontend-styles'  => ['zolo-block-common-style'],
            'frontend-scripts' => ['zolo-notice-frontend'],
        ],
        'post-category'       => [
            'name'             => 'post-category',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/post-category/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => false,
            'class'            => '\Zolo\Blocks\PostCategory',
        ],
        'tag-cloud'           => [
            'name'             => 'tag-cloud',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/tag-cloud/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => false,
            'class'            => '\Zolo\Blocks\TagCloud',
        ],
        'author'              => [
            'name'             => 'author',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/author/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => false,
            'class'            => '\Zolo\Blocks\Author',
        ],
        'static-social-count' => [
            'name'             => 'static-social-count',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/static-social-count/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => ['zolo-static-social-count-frontend'],
        ],
        'recent-comments'     => [
            'name'             => 'recent-comments',
            'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'blocks/recent-comments/block.json',
            'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
            'frontend-scripts' => false,
            'class'            => '\Zolo\Blocks\RecentComments',
        ],
]);
