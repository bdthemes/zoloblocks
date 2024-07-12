<?php

/**
 * ZoloAjax
 *
 * AJAX Event Handler
 *
 * @class    ZoloAjax
 * @version  0.0.1
 * @package  zolo-ajax
 * @category Class
 */

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ZoloAjax {
    use SingletonTrait;

    /**
     * ZoloAjax constructor.
     */
    public function __construct() {
        self::zolo_ajax_action_init();
    }

    /**
     * Initialize AJAX actions.
     */
    public static function zolo_ajax_action_init() {
        $ajax_events = array(
            'zolo_ajax_function' => array(
                'callback' => 'zolo_ajax_function_callback',
                'nopriv'   => true,
            ),
            
        );

        foreach ($ajax_events as $ajax_event_key => $ajax_event_func) {
            add_action('wp_ajax_' . $ajax_event_key, array(__CLASS__, $ajax_event_func['callback']));
            if ($ajax_event_func['nopriv']) {
                add_action('wp_ajax_nopriv_' . $ajax_event_key, array(__CLASS__, $ajax_event_func['callback']));
            }
        }
    }

    /**
     * Example AJAX callback function.
     */
    public static function zolo_ajax_function_callback() {
        // Check nonce for security
        if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'nonce')) {
            wp_die(esc_html__('Nonce did not match', 'zoloblocks')); // Output escaped error message
        }
        wp_die(); // Properly terminate the script
    }
}
