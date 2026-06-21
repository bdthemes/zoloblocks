<?php
defined('ABSPATH') || exit;

/**
 * ZoloBlocks Extensions Registry (Free only).
 *
 * Every entry returned here is fully functional in this plugin.
 * Marketing metadata for Pro-only extensions lives in pro-extensions.php
 * and is rendered on a dedicated "Upgrade" tab in the admin dashboard,
 * separate from this list, with no toggles and no in-list "locked" state.
 */
return apply_filters('zolo_extensions', [
    'particles'          => [
        'name'   => 'particles',
        'title'  => __('Particles Animation', 'zoloblocks'),
        'status' => true,
        'demo'   => 'https://demo.zoloblocks.com/particles/',
        'video'  => 'https://youtu.be/HPEVm1xGT3I?list=PLFnvpmjcONzLJMQiRFpLAxHsz-RSmZstT',
    ],
    'export-pattern'          => [
        'name'   => 'export-pattern',
        'title'  => __('Export Pattern', 'zoloblocks'),
        'status' => true,
        'demo'   => 'https://demo.zoloblocks.com/export-pattern',
        'video'  => 'https://youtu.be/HPEVm1xGT3I?list=PLFnvpmjcONzLJMQiRFpLAxHsz-RSmZstT',
    ],
    'import-pattern'          => [
        'name'   => 'import-pattern',
        'title'  => __('Import Pattern', 'zoloblocks'),
        'status' => true,
        'demo'   => 'https://demo.zoloblocks.com/import-pattern',
        'video'  => 'https://youtu.be/HPEVm1xGT3I?list=PLFnvpmjcONzLJMQiRFpLAxHsz-RSmZstT',
    ],
    'shape-divider'          => [
        'name'   => 'shape-divider',
        'title'  => __('Shape Divider', 'zoloblocks'),
        'status' => true,
        'demo'   => 'https://demo.zoloblocks.com/shape-divider',
        'video'  => 'https://www.youtube.com/watch?v=OD3sI03RMDc&t',
    ],
    'ai-assistant'          => [
        'name'   => 'ai-assistant',
        'title'  => __('AI Assistant', 'zoloblocks'),
        'status' => true,
        'demo'   => 'https://demo.zoloblocks.com/ai-assistant',
        'video'  => 'https://www.youtube.com/watch?v=-RAtIns09V8',
    ],
    'transform' => [
        'name' => 'transform',
        'title' => __('Transform', 'zoloblocks'),
        'status' => true,
        'demo' => 'https://demo.zoloblocks.com/transform',
        'video' => 'https://www.youtube.com/watch?v=mMT88v_xQig&t',
    ],
    'class-manager' => [
        'name' => 'class-manager',
        'title' => __('Class Manager', 'zoloblocks'),
        'status' => true,
        'demo' => 'https://demo.zoloblocks.com/class-manager',
        'video' => 'https://www.youtube.com/watch?v=mMT88v_xQig&t',
    ],
]);
