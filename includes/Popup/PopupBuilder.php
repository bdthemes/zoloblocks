<?php
/**
 * Zolo Popup Builder 
 */

namespace Zolo\Popup;

use Zolo\Traits\SingletonTrait;

class Zolo_PopupBuilder {

    use SingletonTrait;

    /**
     * Constructor 
     * 
     * @return void
     */
    public function __construct() {
        add_action('init', [$this, 'register_post_type']);
        add_filter( 'manage_zolo-popup_posts_columns', [$this, 'set_custom_edit_zolo_popup_columns'] );
        add_action( 'manage_zolo-popup_posts_custom_column' , [$this, 'custom_zolo_popup_column'], 10, 2 );

        // sortable columns
        add_filter( 'manage_edit-zolo-popup_sortable_columns', [$this, 'set_custom_edit_zolo_popup_columns'] );

        // wp_ajax_zolo_update_popup_status 
        add_action('wp_ajax_zolo_update_popup_status', [$this, 'update_popup_status']);
        add_action('wp_ajax_nopriv_zolo_update_popup_status', [$this, 'update_popup_status']);

        // enqueue block editor assets 
        add_action('admin_enqueue_scripts', [$this, 'editor_enqueue_scripts']);

        // load popup builder
        add_action('wp_footer', [$this, 'load_popup_builder']);

    }

    /**
     * Register Zolo Popup post type
     * 
     * @return void
     */
    public function register_post_type() {
        $labels = [
            'name'               => __('Popup Buider', 'zoloblocks'),
            'singular_name'      => __('Popup Builder', 'zoloblocks'),
            'menu_name'          => __('Popup Builder', 'zoloblocks'),
            'name_admin_bar'     => __('Popup Builder', 'zoloblocks'),
            'add_new'            => __('Create Popup', 'zoloblocks'),
            'add_new_item'       => __('Create Popup', 'zoloblocks'),
            'new_item'           => __('Create Popup', 'zoloblocks'),
            'edit_item'          => __('Edit Popup', 'zoloblocks'),
            'view_item'          => __('View Popup', 'zoloblocks'),
            'all_items'          => __('All Popups', 'zoloblocks'),
            'search_items'       => __('Search Popups', 'zoloblocks'),
            'parent_item_colon'  => __('Parent Popups:', 'zoloblocks'),
            'not_found'          => __('No popups found.', 'zoloblocks'),
            'not_found_in_trash' => __('No popups found in Trash.', 'zoloblocks'),
        ];

        $args = [
            'labels'             => $labels,
            'description'        => __('Description.', 'zoloblocks'),
            'public'             => false,
            'publicly_queryable' => false,
            'show_ui'            => true,
            'show_in_menu'       => false,
            'query_var'          => true,
            'rewrite'            => ['slug' => 'zolo-popup'],
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_position'      => 20,
            'show_in_rest'       => true,
            // 'template'           => [
            //     [
            //         'core/paragraph'
            //     ],
            // ],
            // 'template_lock'      => 'all',
            'supports'           => [
                'title',
                'editor',
                'author',
                'custom-fields',
            ],
            'menu_icon'          => 'dashicons-admin-page',
        ];

        register_post_type('zolo-popup', $args); 

        // Register Popup meta fields
        register_post_meta('zolo-popup', 'zolo_popup_id', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_type', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'default'      => 'info_bar'
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_push_content', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'boolean',
            'default'      => true
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_position', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'default'      => 'popup_top'
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_trigger', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'default'      => 'onload'
        ]); 

        register_post_meta('zolo-popup', 'zolo_popup_enable_disable', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'boolean',
            'default'      => true
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_infinite_repeat', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'boolean',
            'default'      => false
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_repeat_num', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'number',
            'default'      => 1
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_dismissible', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'boolean',
            'default'      => true
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_close_btn_position', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'default'      => 'cbp_top_right'
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_max_width', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'number',
            'default'      => 600
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_box_position', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'default'      => 'pbp_center_center'
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_box_overlay', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'boolean',
            'default'      => true
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_box_overlay_bg_fixed', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'boolean',
            'default'      => true
        ]);

        register_post_meta('zolo-popup', 'zolo_popup_box_overlay_color', [
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'default'      => 'rgba(0,0,0,0.8)' 
        ]);

        // generate popup unique id based on post id
        $current_id = get_the_ID();
        $popup_id = 'zolo-popup-' . $current_id;

        update_post_meta($current_id, 'zolo_popup_id', $popup_id);
    }

    /**
     * Set custom columns for Zolo Popup
     * 
     * @param array $columns
     * 
     * @return array
     */
    public function set_custom_edit_zolo_popup_columns($columns) {
        unset($columns['date']);
        $columns['zolo_popup_trigger'] = __('Trigger', 'zoloblocks');
        $columns['zolo_popup_enable_disable'] = __('Status', 'zoloblocks');
        $columns['date'] = __('Date', 'zoloblocks');

        return $columns; 
    }

    /**
     * Custom Zolo Popup column
     * 
     * @param string $column
     * @param int $post_id
     * 
     * @return void
     */
    public function custom_zolo_popup_column($column, $post_id) {
        if( 'zolo_popup_trigger' === $column ) {
            $trigger = get_post_meta($post_id, 'zolo_popup_trigger', true);
            echo esc_html($trigger);
        } 

        if( 'zolo_popup_enable_disable' === $column ) {
            $status = get_post_meta($post_id, 'zolo_popup_enable_disable', true) ? 'checked' : ''; 
            $checked = $status ? 'switch-on' : 'switch-off';
            echo '<div class="zolo-popup-btn" data-post-id="' . $post_id . '">';
            echo '<span class="switch ' . $checked . '"></span>';
            echo '</div>';
        }
    }

    // sortable columns
    public function zolo_popup_sortable_columns( $columns ) {
        $columns['zolo_popup_trigger'] = 'zolo_popup_trigger';
        $columns['zolo_popup_enable_disable'] = 'zolo_popup_enable_disable';
        return $columns;
    }

    /**
     * Update Popup Status
     * 
     * @return void
     */
    public function update_popup_status() {
        check_ajax_referer('zolo-nonce', 'nonce');

        if( empty($_POST['post_id']) ) {
            wp_send_json([
                'status'  => 'error',
                'message' => __('Post ID is missing!', 'zoloblocks'),
            ]);
        }

        $post_id = absint($_POST['post_id']);
        $status = get_post_meta($post_id, 'zolo_popup_enable_disable', true);

        $status = $status ? false : true; 

        update_post_meta($post_id, 'zolo_popup_enable_disable', $status);

        wp_send_json([
            'status'  => 'success',
            'message' => __('Popup status updated!', 'zoloblocks'),
            'new_value' => $status
        ]);
    }

    /**
     * Load Editor assets 
     */
    public function editor_enqueue_scripts( $screen ) { 

        $current_post_type = get_current_screen()->post_type;

        if( 'zolo-popup' !== $current_post_type ) {
            return;
        }

        wp_enqueue_script( 'zolo-popup-builder-ajax', 
            trailingslashit( ZOLO_ADMIN_URL ) . 'includes/Admin/assets/js/popup-builder.js', 
            ['jquery'], 
            ZOLO_VERSION,
            true
        );

        // wp localizing script
        wp_localize_script(
            'zolo-popup-builder-ajax',
            'zoloPopup',
            [
                'ajaxurl' => admin_url('admin-ajax.php'),
                'nonce'   => wp_create_nonce('zolo-nonce')
            ]
        ); 

        if( file_exists( trailingslashit( ZOLO_DIR_PATH ) . '/build/popup/index.asset.php' ) ) {
            $asset_file = include( trailingslashit( ZOLO_DIR_PATH ) . '/build/popup/index.asset.php' );

            wp_enqueue_script(
                'zolo-popup-builder',
                trailingslashit( ZOLO_ADMIN_URL ) . 'build/popup/index.js',
                $asset_file['dependencies'],
                $asset_file['version'],
                false
            );

            wp_enqueue_style( 'zolo-popup-builder', 
                trailingslashit( ZOLO_ADMIN_URL ) . 'build/popup/style.css', 
                [], 
                ZOLO_VERSION,
                'all'
            );

        } 

    }

    /**
     * Load Popup Builder
     * 
     * @return void
     */
    public function load_popup_builder() {
        $args = [
            'post_type'      => 'zolo-popup',
            'post_status'    => 'publish',
            'posts_per_page' => -1,
        ];

        $popups = new \WP_Query($args);

        if( $popups->have_posts() ) {
            while( $popups->have_posts() ) {
                $popups->the_post();
                $trigger = get_post_meta(get_the_ID(), 'zolo_popup_trigger', true);
                $status = get_post_meta(get_the_ID(), 'zolo_popup_enable_disable', true);

                var_dump(the_content());

                if( $status ) {
                    echo '<div class="zolo-popup-builder" data-trigger="' . $trigger . '">';
                    the_content();
                    echo '</div>';
                }
            }
        }

        wp_reset_postdata();
    }
}

Zolo_PopupBuilder::getInstance();
