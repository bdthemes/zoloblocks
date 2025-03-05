<?php

/**
 * ZoloBlocks Pro Enqueues.
 */

namespace Zolo\Extensions;

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class AI {

    use SingletonTrait;

    public function __construct() {
        if (ZoloHelpers::is_extension_enabled('ai-assistant')) {
            add_action("enqueue_block_editor_assets", [$this, "enqueue_ai_editor_assets"]);
        }
    }

    public function enqueue_ai_editor_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/AI/index.asset.php";
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-ai-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/AI/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );
            wp_register_style(
                'zolo-ai-editor-style',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/AI/index.css",
                [],
                $editor_assets['version']
            );

            wp_enqueue_script('zolo-ai-editor-script');
            wp_enqueue_style('zolo-ai-editor-style');
        }
    }
}
