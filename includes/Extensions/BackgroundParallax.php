<?php

/**
 * ZoloBlocks Pro Enqueues.
 */

namespace Zolo\Extensions;

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class BackgroundParallax {

    use SingletonTrait;

    public function __construct() {
        if (ZoloHelpers::is_extension_enabled('background-parallax')) {
            add_action("init", [$this, "register_background_parallax_assets"]);
            add_action("enqueue_block_editor_assets", [$this, "enqueue_background_parallax_editor_assets"]);
            if (!is_admin()) {
                add_filter("render_block_data", [$this, "modify_render_block_data"]);
            }
        }
    }

    public function register_background_parallax_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/background-parallax/index.asset.php";
        $frontend_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/background-parallax/frontend.asset.php";
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-particles-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/background-parallax/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );
        }

        if (file_exists($frontend_asset)) {
            $frontend_assets = include $frontend_asset;
            wp_register_script(
                'zolo-particles-frontend',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/background-parallax/frontend.js",
                $frontend_assets['dependencies'],
                $frontend_assets['version'],
                true
            );
        }
    }

    public function enqueue_background_parallax_editor_assets() {
    }

    public function modify_render_block_data($parsed_block) {
        if (isset($parsed_block['blockName']) && str_contains($parsed_block['blockName'], 'zolo/container') && !empty($parsed_block['attrs']['zoloParticles']['active'])) {
            // wp_enqueue_script('particles-js');
        }
        return $parsed_block;
    }
}
