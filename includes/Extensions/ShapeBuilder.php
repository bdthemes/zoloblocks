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
            add_action("enqueue_block_editor_assets", [$this, "enqueue_shape_builder_editor_assets"]);
        }
    }

    public function enqueue_shape_builder_editor_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/shape-builder/index.asset.php";
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-shape-builder-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/shape-builder/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );
            wp_enqueue_script('zolo-shape-builder-editor-script');
        }
    }
}
