<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

class Registration {
    use SingletonTrait;

    public function __construct() {
        //Register Block Category
        add_filter('block_categories_all', [$this, 'register_block_category'], 99999999, 2);

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
    public function block_register() {
        $blocks = $this::block_list();
        if (is_array($blocks) && count($blocks) > 0) {
            foreach ($blocks as $block) {
                $block_path = trailingslashit(ZOLO_DIR_PATH);
                $admin_path = trailingslashit(ZOLO_ADMIN_URL);
                $version    = ZOLO_VERSION;

                if (isset($block['pro']) && $block['pro'] === true) {
                    $block_path = trailingslashit(ZOLO_PRO_DIR_PATH);
                    $admin_path = trailingslashit(ZOLO_PRO_ADMIN_URL);
                    $version    = ZOLO_PRO_VERSION;
                }

                //Check Render Class
                if (isset($block['class'])) {
                    $class = new $block['class'];
                    // register block with render callback
                    register_block_type($block_path . '/build/blocks/' . $block['name'], [
                        'render_callback' => fn($attributes, $content) => $this->render_callback($attributes, $content, $class),
                    ]);
                } else {
                    // register block without render callback
                    register_block_type($block_path . '/build/blocks/' . $block['name']);
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
    public function render_callback($attributes, $content, $render) {
        if ($render !== false) {
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
    public static function block_list() {
        return require trailingslashit(ZOLO_DIR_PATH) . 'includes/Blocks/Blocks.php';
    }

    /**
     * Register Block Category
     *
     * @since 0.0.1
     *
     * @return array
     */
    public function register_block_category($categories, $post) {
        $zb_category = [
            'slug'  => 'zoloblocks',
            'title' => __('Zolo Blocks', 'zoloblocks')
        ];
        array_unshift($categories, $zb_category);
        return $categories;
    }
}
