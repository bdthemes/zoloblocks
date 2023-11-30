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
        add_action('wp_ajax_zolo_select2_search', [$this, 'zolo_select2_response']);
    }

    public function zolo_select2_response()
    {
        $source_type    = sanitize_text_field($_POST['source_type'] ?? 'post');
        $source_name    = sanitize_text_field($_POST['source_name'] ?? 'post_type');
        $search_text    = sanitize_text_field($_POST['search'] ?? '');
        $query_per_page = intval($_POST['per_page'] ?? 10);
        $paged          = intval($_POST['page'] ?? 1);

        $results = [];
        $post_list = [];

        switch ($source_name) {
            case 'taxonomy':
                $args = [
                    'hide_empty' => false,
                    'orderby' => 'name',
                    'order' => 'ASC',
                    'search' => $search_text,
                    'number' => '5',
                ];

                if ($source_type !== 'all') {
                    $args['taxonomy'] = $source_type;
                }

                $post_list = wp_list_pluck(get_terms($args), 'name', 'term_id');
                break;
            case 'user':
                $users = get_users(['search' => "*{$search_text}*"]);
                $post_list = wp_list_pluck($users, 'display_name', 'ID');
                break;
            default:
                $post_list = $this->get_query_data($source_type, $query_per_page, $search_text, $paged);
        }

        foreach ($post_list as $key => $item) {
            $results[] = [
                'text' => $item,
                'id' => $key,
            ];
        }

        wp_send_json(
            ['results' => $results]
        );
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

    /**
     * Get query data for select2 ajax
     */
    public function get_query_data($post_type = 'any', $limit = 10, $search = '', $paged = 1)
    {
        global $wpdb;
        $where = '';
        $data  = [];

        if (-1 == $limit) {
            $limit = '';
        } elseif (0 == $limit) {
            $limit = 'limit 0,1';
        } else {
            $offset = 0;
            if ($paged) {
                $offset = ($paged - 1) * $limit;
            }
            $limit = $wpdb->prepare(' limit %d, %d', esc_sql($offset), esc_sql($limit));
        }

        if ('any' === $post_type) {
            $in_search_post_types = get_post_types(['exclude_from_search' => false]);
            if (empty($in_search_post_types)) {
                $where .= ' AND 1=0 ';
            } else {
                $where .= " AND {$wpdb->posts}.post_type IN ('" . join(
                    "', '",
                    array_map('esc_sql', $in_search_post_types)
                ) . "')";
            }
        } elseif (!empty($post_type)) {
            $where .= $wpdb->prepare(" AND {$wpdb->posts}.post_type = %s", esc_sql($post_type));
        }

        if (!empty($search)) {
            $where .= $wpdb->prepare(" AND {$wpdb->posts}.post_title LIKE %s", '%' . esc_sql($search) . '%');
        }

        $query   = "select post_title,ID  from $wpdb->posts where post_status = 'publish' {$where} {$limit}";
        $results = $wpdb->get_results($query);

        if (!empty($results)) {
            foreach ($results as $row) {
                $data[$row->ID] = $row->post_title . ' [#' . $row->ID . ']';
            }
        }

        return $data;
    }
}

Zolo_AJAX::get_instance();
