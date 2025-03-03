<?php

/**
 * ZoloBlocks Pro Enqueues.
 */

namespace Zolo\Extensions;

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class ImportPattern {

    use SingletonTrait;

    public function __construct() {
        if (ZoloHelpers::is_extension_enabled('import-pattern')) {
            add_action("enqueue_block_editor_assets", [$this, "enqueue_import_pattern_editor_assets"]);
        }
    }

    public function enqueue_import_pattern_editor_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/import-pattern/index.asset.php";
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-import-pattern-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/import-pattern/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );
            wp_register_style(
                'zolo-import-pattern-editor-style',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/import-pattern/index.css",
                [],
                $editor_assets['version']
            );

            wp_enqueue_script('zolo-import-pattern-editor-script');
            wp_enqueue_style('zolo-import-pattern-editor-style');
        }
    }
}
