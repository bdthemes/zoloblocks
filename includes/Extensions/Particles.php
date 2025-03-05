<?php

/**
 * ZoloBlocks Pro Enqueues.
 */

namespace Zolo\Extensions;

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class Particles {

    use SingletonTrait;

    public function __construct() {
        if (ZoloHelpers::is_extension_enabled('particles')) {
            add_action("init", [$this, "register_particles_assets"]);
            add_action("enqueue_block_editor_assets", [$this, "enqueue_particles_editor_assets"]);
            if (!is_admin()) {
                add_filter("render_block_data", [$this, "modify_render_block_data"]);
            }else{
                add_filter("block_type_metadata", [$this, "block_type_metadata"], 10);
            }
        }
    }

    public function register_particles_assets() {
        $particles_editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/particles/index.asset.php";
        $particles_frontend_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/particles/frontend.asset.php";
        if (file_exists($particles_editor_asset)) {
            $particles_editor_assets = include $particles_editor_asset;
            wp_register_script(
                'zolo-particles-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/particles/index.js",
                $particles_editor_assets['dependencies'],
                $particles_editor_assets['version'],
                true
            );
        }

        if (file_exists($particles_frontend_asset)) {
            $particles_frontend_assets = include $particles_frontend_asset;
            wp_register_script(
                'zolo-particles-frontend',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/particles/frontend.js",
                $particles_frontend_assets['dependencies'],
                $particles_frontend_assets['version'],
                true
            );
        }
    }

    public function enqueue_particles_editor_assets()
    {
        wp_enqueue_script('zolo-particles-editor-script');
    }

    public function modify_render_block_data($parsed_block) {
        if (isset($parsed_block['blockName']) && str_contains($parsed_block['blockName'], 'zolo/container') && !empty($parsed_block['attrs']['zoloParticles']['active'])) {
            wp_enqueue_script('particles-js');
            wp_enqueue_script('zolo-particles-frontend');
        }
        return $parsed_block;
    }

    public function block_type_metadata($metadata)
    {
        if (isset($metadata['name']) && str_contains($metadata['name'], 'zolo/container')) {
            $metadata['script'] = array('particles-js');
        }
        return $metadata;
    }
}
