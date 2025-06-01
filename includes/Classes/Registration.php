<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

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
        $default_blocks = ZoloHelpers::get_zolo_blocks();
        $blocks = get_option('zolo_blocks_settings', $default_blocks);

        if (is_array($blocks) && count($blocks) > 0) {
            foreach ($blocks as $block) {
                $block_path = trailingslashit(ZOLO_DIR_PATH);
                $version = ZOLO_VERSION;

                if (isset($block['is_pro']) && $block['is_pro'] === true) {
                    // Check if Zoloblocks Pro is activated
                    if (!class_exists('Zolo_Blocks_Pro')) {
                        continue; // Skip pro blocks if pro version is not activated
                    }
                    $block_path = trailingslashit(ZOLO_PRO_DIR_PATH);
                    $version = ZOLO_PRO_VERSION;
                }

                $block_file = $block_path . '/build/blocks/' . $block['name'];

                if (file_exists($block_file)) {
                    if (isset($block['status']) && $block['status'] !== false) {
                        $render_callback = null;
                        if (isset($block['class']) && class_exists($block['class'])) {
                            $class = new $block['class'];
                            $render_callback = fn($attributes, $content, $block) => $this->render_callback($attributes, $content, $block, $class);
                        }
                        register_block_type($block_file, ['render_callback' => $render_callback]);
                    }
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
    public function render_callback($attributes, $content, $block, $render) {
        if ($render !== false) {
            return $render->render($attributes, $content, $block);
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
            'title' => __('ZoloBlocks', 'zoloblocks')
        ];
        $zb_cat_single = [
            'slug'  => 'zoloblocks-single',
            'title' => 'ZoloBlocks Single',
        ];
        array_unshift($categories, $zb_cat_single, $zb_category);
        return $categories;
    }
}
