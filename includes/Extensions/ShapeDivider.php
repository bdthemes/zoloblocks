<?php

/**
 * ZoloBlocks Pro Enqueues.
 */

namespace Zolo\Extensions;

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class ShapeDivider {

    use SingletonTrait;

    public function __construct() {
        if (ZoloHelpers::is_extension_enabled('shape-divider')) {
            add_action("enqueue_block_editor_assets", [$this, "enqueue_shape_divider_editor_assets"]);
        }
    }

    public function enqueue_shape_divider_editor_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/shape-divider/index.asset.php";
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-shape-divider-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/shape-divider/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );

            wp_enqueue_script('zolo-shape-divider-editor-script');
        }
    }
}
