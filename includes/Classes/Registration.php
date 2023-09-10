<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

class Registration
{
    use SingletonTrait;

    public function __construct()
    {
        //Register Block Category
        add_filter('block_categories_all', [$this, 'register_block_category'], 99999, 2);

        //Register Block
        add_filter('init', [$this, 'block_register']);
    }

    /**
     * Register Block
     *
     * @since 0.0.1
     *
     * @return void
     */
    public function block_register()
    {
        $blocks = $this::block_list();
        if (is_array($blocks) && count($blocks) > 0) {
            foreach ($blocks as $key => $block) {
                if (!isset($block['name'])) {
                    continue;
                }

                $run_render_callback = false;
                $render_method       = false;
                $frontend_styles     = false;
                $frontend_scripts    = false;

                $blockname = 'zolo/' . $block['name'];

                if (isset($block['metadata']) && file_exists($block['metadata'])) {
                    $blockname = $block['metadata'];
                }

                //Register Frontend Scripts
                $frontend_script_path = trailingslashit(ZOLO_DIR_PATH) . 'blocks/' . $block['name'] . '/frontend/index.js';
                $frontend_script_deps = trailingslashit(ZOLO_DIR_PATH) . 'blocks/' . $block['name'] . '/frontend/index.asset.php';
                if (file_exists($frontend_script_path)) {
                    $args = file_exists($frontend_script_deps) ? include $frontend_script_deps : [
                        'dependencies' => [],
                        'version'      => ZOLO_VERSION
                    ];

                    wp_register_script(
                        'zolo-' . $block['name'] . '-frontend',
                        ZOLO_ADMIN_URL . 'blocks/' . $block['name'] . '/frontend/index.js',
                        $args['dependencies'],
                        $args['version'],
                        true
                    );
                }

                //Check Render Class
                if (isset($block['class'])) {
                    $class = new $block['class'];
                    if (method_exists($class, 'render')) {
                        $run_render_callback = true;
                        $render_method       = $class;
                    } else {
                        $render_method = false;
                    }
                }

                //Check frontend style
                if (isset($block['frontend-styles'])) {
                    $run_render_callback = true;
                    $frontend_styles     = $block['frontend-styles'];
                }

                //Check frontend script
                if (isset($block['frontend-scripts'])) {
                    $run_render_callback = true;
                    $frontend_scripts    = $block['frontend-scripts'];
                }

                //Register Block
                if ($run_render_callback) {
                    register_block_type($blockname, [
                        // 'render_callback' => [$this, 'render_callback', 10, 2]
                        'render_callback' => function ($attributes, $content) use ($render_method, $frontend_scripts, $frontend_styles) {
                            return $this->render_callback($attributes, $content, $render_method, $frontend_scripts, $frontend_styles);
                        }
                    ]);
                } else {
                    register_block_type($blockname);
                }
            }
        }
    }

    /**
     * render callback function
     *
     * @since 0.0.1
     *
     * @return string
     */
    public function render_callback($attributes, $content, $render, $scripts, $styles)
    {
        if ($scripts !== false && is_array($scripts) && count($scripts) > 0) {
            foreach ($scripts as $script) {
                if (is_string($script)) {
                    wp_enqueue_script($script);
                }
            }
        }
        if ($styles !== false && is_array($styles) && count($styles) > 0) {
            foreach ($styles as $style) {
                if (is_string($style)) {
                    wp_enqueue_style($style);
                }
            }
        }

        if ($render !== false) {
            // $render->abc();
            return $render->render($attributes);
        }

        return $content;
    }

    /**
     * Block List Function
     *
     * @since 0.0.1
     *
     * @return array
     */
    public static function block_list()
    {
        $blocks = require_once ZOLO_DIR_PATH . 'includes/Blocks/Blocks.php';
        return $blocks;
    }

    /**
     * Register Block Category
     *
     * @since 0.0.1
     *
     * @return array
     */
    public function register_block_category($categories, $post)
    {
        $updatedCat  = [];
        $eb_category = [
            'slug'  => 'zolo-blocks',
            'title' => __('Zolo Blocks', 'zolo-blocks')
        ];
        $updatedCat[0] = $eb_category;
        $updatedCat    = array_merge($updatedCat, $categories);
        return $updatedCat;
    }
}
