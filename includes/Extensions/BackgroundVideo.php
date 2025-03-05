<?php

/**
 * ZoloBlocks Pro Enqueues.
 */

namespace Zolo\Extensions;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class BackgroundVideo {

    use SingletonTrait;

    public function __construct() {
        add_action("enqueue_block_editor_assets", [$this, "enqueue_background_video_editor_assets"]);
    }

    public function enqueue_background_video_editor_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/background-video/index.asset.php";
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-background-video-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/background-video/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );
            wp_enqueue_script('zolo-background-video-editor-script');
        }
    }
}
