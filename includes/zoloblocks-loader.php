<?php
/**
 * Zolo Blocks Loader.
 *
 * @package Zolo
 */

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;
use Zolo\Classes\StyleGenerator;
use Zolo\Classes\Registration;
use Zolo\API\GetPostsV1;
use Zolo\Admin\PostCategoryImage;
use Zolo\Classes\ZoloAJAX;
use Zolo\Admin\Author;
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Zolo all file loader
 */
class ZoloBlocks_Loader {
    use SingletonTrait;

    /**
     * Constructor
     */
    public function __construct() {
        add_action('plugins_loaded', [$this, 'plugins_loaded']);
        add_action('init', [$this, 'init_actions']);
    }

    /**
     * Loads plugin files.
     *
     * @since 0.0.1
     *
     * @return void
     */
    public function plugins_loaded() {
        GetPostsV1::getInstance();
        ZoloHelpers::getInstance();
        StyleGenerator::getInstance();
        Registration::getInstance();
        ZoloAJAX::getInstance();
        // require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/ZoloAjax.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/ZoloEnqueues.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/FontLoader.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/PostMeta.php';

        // Load Admin files
        PostCategoryImage::getInstance();
		Author::getInstance();
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Dashboard.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Assets.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Settings.php';

        // form
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/Form.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/FormAjax.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/Recaptcha.php';

        //mailchimp
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Mailchimp/Mailchimp.php';

        // notice block
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Blocks/NoticeBlock.php';

        // popup
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Popup/PopupBuilder.php';

        //templates
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Templates/Templates.php';

        if (is_admin()) {
            // zolo blocks settings
            $zoloSupportSVG = get_option('zolo_support_svg', false);
            if ($zoloSupportSVG === '1') {
                require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/SupportSVG.php';
            }
        }
    }

    /**
     * Init actions
     * @since 0.0.1
     * @return void
     */
    public function init_actions() {
        $theme_folder = get_template();

        if (function_exists('wp_is_block_theme') && wp_is_block_theme()) {
            if ('twentytwentytwo' === $theme_folder) {
                // require_once ZOLO_DIR_PATH . 'compatibility/class-uagb-twenty-twenty-two-compatibility.php';
            }
        }

        if ('astra' === $theme_folder) {
            // require_once ZOLO_DIR_PATH . 'compatibility/class-uagb-astra-compatibility.php';
        }
    }
}

// ZoloBlocks_Loader Instance.
if ( class_exists( 'ZoloBlocks_Loader' ) ) {
	new ZoloBlocks_Loader();
}
