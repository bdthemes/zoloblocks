<?php
defined('ABSPATH') || exit;

/**
 * ZoloBlocks Pro Extensions — marketing metadata only.
 *
 * Returned to the admin dashboard's dedicated "Upgrade" tab to describe
 * features available in the separate ZoloBlocks Pro add-on plugin.
 *
 * No implementation code for these extensions exists in this plugin.
 * Nothing is rendered as a toggle or "locked" control inside the active
 * Extensions or Blocks lists.
 */
return apply_filters('zolo_pro_extensions', [
    [
        'name'  => 'cursors',
        'title' => __('Cursors Animation', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/cursors-animation',
    ],
    [
        'name'  => 'floating',
        'title' => __('Floating Animation', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/floating-animation',
    ],
    [
        'name'  => 'entrance',
        'title' => __('Entrance Animation', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/entrance-animation',
    ],
    [
        'name'  => 'sticky',
        'title' => __('Sticky Position', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/sticky-position',
    ],
    [
        'name'  => 'parallax',
        'title' => __('Parallax Effect', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/scroll-parallax-animation',
    ],
    [
        'name'  => 'tilt',
        'title' => __('Mouse Tilt', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/tilt-effects',
    ],
    [
        'name'  => 'smooth-scroller',
        'title' => __('Smooth Scroller', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/smooth-scroller',
    ],
    [
        'name'  => 'css-filters',
        'title' => __('CSS Filters', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/css-filters',
    ],
    [
        'name'  => 'backdrop-filters',
        'title' => __('Backdrop Filters', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/backdrop-filters',
    ],
    [
        'name'  => 'background-parallax',
        'title' => __('Background Parallax', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/background-parallax',
    ],
    [
        'name'  => 'dynamic-content',
        'title' => __('Dynamic Content', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/dynamic-content',
    ],
    [
        'name'  => 'interactions',
        'title' => __('Interactions', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/interactions',
    ],
    [
        'name'  => 'text-animation',
        'title' => __('Text Animation', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/text-animation',
    ],
    [
        'name'  => 'display-condition',
        'title' => __('Display Condition', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/display-condition',
    ],
    [
        'name'  => 'tooltip',
        'title' => __('Zolo Tooltip', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/tooltip',
    ],
    [
        'name'  => 'highlight',
        'title' => __('Zolo Highlight', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/highlight',
    ],
    [
        'name'  => 'image-parallax',
        'title' => __('Image Parallax', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/image-parallax',
    ],
]);
