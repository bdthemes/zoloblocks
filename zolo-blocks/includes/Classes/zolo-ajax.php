<?php

/**
 * Zolo_AJAX
 *
 * AJAX Event Handler
 *
 * @class    Zolo_AJAX
 * @version  0.0.1
 * @package  zolo-ajax
 * @category Class
 */

if (!defined('ABSPATH')) {
    exit;
}

class Zolo_AJAX
{
    private static $instance;

    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        self::zolo_ajax_action_init();
    }

    public static function zolo_ajax_action_init()
    {
        $ajax_events = array(
            'zolo_example_ajax_function'   => array(
                'callback' => 'zolo_example_ajax_function_callback',
                'nopriv' => true
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
     * Example Function
     */
    public static function zolo_example_ajax_function_callback()
    {
        if (!wp_verify_nonce($_POST['nonce'], 'nonce')) {
            die(__('Nonce did not match', 'zolo-blocks'));
        }

        //Write your code here

        exit;
    }
}

Zolo_AJAX::get_instance();
