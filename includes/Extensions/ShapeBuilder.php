<?php

/**
 * ZoloBlocks Shape Builder Extension.
 */

namespace Zolo\Extensions;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class ShapeBuilder {

    use SingletonTrait;

    public function __construct() {
        if (ZoloHelpers::is_extension_enabled('shape-builder')) {
            add_action("init", [$this, "register_shape_builder_assets"]);
            add_action("enqueue_block_editor_assets", [$this, "enqueue_shape_builder_editor_assets"]);
            if (!is_admin()) {
                add_filter("render_block_data", [$this, "modify_render_block_data"]);
            }
        }
    }

    public function register_shape_builder_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/shape-builder/index.asset.php";
        $frontend_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/shape-builder/frontend.asset.php";
        
        // Register editor script
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-shape-builder-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/shape-builder/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );
        }

        // Register frontend script with GSAP dependency
        if (file_exists($frontend_asset)) {
            $frontend_assets = include $frontend_asset;
            wp_register_script(
                'zolo-shape-builder-frontend',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/shape-builder/frontend.js",
                array_merge($frontend_assets['dependencies'], ['gsap']), // Add GSAP as dependency
                $frontend_assets['version'],
                true
            );
        }
    }

    public function enqueue_shape_builder_editor_assets() {
        wp_enqueue_script('zolo-shape-builder-editor-script');
    }

    public function modify_render_block_data($parsed_block) {
        // Check if block has shape builder enabled
        if (isset($parsed_block['blockName']) && 
            isset($parsed_block['attrs']['shapeBuilder']['enabled']) && 
            $parsed_block['attrs']['shapeBuilder']['enabled'] === true) {
            // Enqueue GSAP and frontend script
            wp_enqueue_script('gsap');
            wp_enqueue_script('gsap-scroll-trigger');
            wp_enqueue_script('zolo-shape-builder-frontend');
        }
        return $parsed_block;
    }
}
