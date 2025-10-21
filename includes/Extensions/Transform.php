<?php

/**
 * ZoloBlocks Pro Enqueues.
 */

namespace Zolo\Extensions;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class Transform {

    use SingletonTrait;

    public function __construct() {
        if (ZoloHelpers::is_extension_enabled('transform')) {
            add_action("enqueue_block_editor_assets", [$this, "enqueue_transform_editor_assets"]);
            add_action("enqueue_block_assets", [$this, "enqueue_transform_assets"]);
        }
    }

    public function enqueue_transform_assets() {
        wp_register_style(
            'zolo-transform-style',
            trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/transform/style-index.css",
            [],
            ZOLO_VERSION
        );
        wp_enqueue_style('zolo-transform-style');
    }

    public function enqueue_transform_editor_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/transform/index.asset.php";
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-transform-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/transform/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );
            wp_enqueue_script('zolo-transform-editor-script');
        }
    }
}
