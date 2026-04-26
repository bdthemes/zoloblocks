<?php
defined('ABSPATH') || exit;

/**
 * ZoloBlocks Pro Blocks — marketing metadata only.
 *
 * Surfaced on the dashboard's dedicated "Upgrade" tab. None of these
 * blocks are registered, toggled or otherwise present in the active
 * Blocks list of the free plugin.
 */
return apply_filters('zolo_pro_blocks', [
    [
        'name'  => 'modal',
        'title' => __('Modal', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/modal',
    ],
    [
        'name'  => 'brand-carousel',
        'title' => __('Brand Carousel', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/brand-carousel',
    ],
    [
        'name'  => 'circle-info',
        'title' => __('Circle Info', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/circle-info',
    ],
    [
        'name'  => 'unfold',
        'title' => __('Unfold', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/unfold',
    ],
    [
        'name'  => 'data-table',
        'title' => __('Data Table', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/data-table',
    ],
    [
        'name'  => 'image-hotspot',
        'title' => __('Image Hotspot', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/image-hotspot',
    ],
    [
        'name'  => 'marquee',
        'title' => __('Marquee', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/marquee',
    ],
    [
        'name'  => 'post-tab',
        'title' => __('Post Tab', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/post-tab',
    ],
    [
        'name'  => 'loop-builder',
        'title' => __('Loop Builder', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/loop-builder',
    ],
    [
        'name'  => 'post-video-slider',
        'title' => __('Post Video Slider', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/post-video-slider',
    ],
    [
        'name'  => 'lottie-image',
        'title' => __('Lottie Image', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/lottie-image',
    ],
    [
        'name'  => 'phonenumber-field',
        'title' => __('Phone Number Field', 'zoloblocks'),
        'demo'  => '',
    ],
    [
        'name'  => 'country-field',
        'title' => __('Country Field', 'zoloblocks'),
        'demo'  => '',
    ],
    [
        'name'  => 'switcher',
        'title' => __('Switcher', 'zoloblocks'),
        'demo'  => 'https://demo.zoloblocks.com/switcher',
    ],
]);
