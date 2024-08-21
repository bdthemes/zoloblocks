<?php

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

/**
 * Post categories taxonomy in image field
 */
class PostCategoryImage {

    use SingletonTrait;

    /**
     * Construct
     */
    public function __construct() {
        // manage field option.
        add_action('category_add_form_fields', [$this, 'add_new_category_image']);
        add_action('created_category', [$this, 'save_category_image']);
        add_action('category_edit_form_fields', [$this, 'edit_category_image']);
        add_action('edited_category', [$this, 'updated_category_image']);
        add_action('admin_enqueue_scripts', [$this, 'load_media_files']);
        add_action('admin_footer', [$this, 'load_category_media_scripts']);
        // manage columns.
        add_filter('manage_edit-category_columns', [$this, 'add_category_image_column']);
        add_filter('manage_category_custom_column', [$this, 'display_category_image_column'], 10, 3);
    }

    /**
     * Add columns name.
     *
     * @param array $columns .
     * @return mixed
     */
    public function add_category_image_column($columns) {
        $columns['zolo_category_image'] = esc_html__('Image', 'zoloblocks');
        return $columns;
    }

    /**
     * Display columns value.
     *
     * @param string $content .
     * @param string $column_name .
     * @param number $term_id .
     * @return mixed|string
     */
    public function display_category_image_column($content, $column_name, $term_id) {
        if ('zolo_category_image' === $column_name) {
            $image_id = get_term_meta($term_id, 'zolo-category-image-id', true);
            if ($image_id) {
                $image_url = wp_get_attachment_image_url($image_id, 'thumbnail');
                $content   = '<img src="' . esc_url($image_url) . '" style="max-width: 50px; max-height: 50px;" />';
            } else {
                $content = __('No Image', 'zoloblocks');
            }
        }
        return $content;
    }

    /**
     * Add new category image
     *
     * @return void
     */
    public function add_new_category_image() {
?>
        <div class="form-field term-group-wrap">
            <label for="zolo-category-image-id"><?php esc_html_e('Image', 'zoloblocks'); ?></label>
            <input type="hidden" id="zolo-category-image-id" name="zolo-category-image-id" class="zolo-hidden-media-url"
                value="">
            <div id="zolo-category-image-wrapper">
            </div>
            <p>
                <input type="button" class="button button-secondary zolo-category-image-add"
                    id="zolo-category-image-add" name="zolo-category-image-add"
                    value="<?php esc_html_e('Add Image', 'zoloblocks'); ?>" />
                <input type="button" class="button button-secondary zolo-category-image-remove"
                    id="zolo-category-image-remove" name="zolo-category-image-remove"
                    value="<?php esc_html_e('Remove Image', 'zoloblocks'); ?>" />
            </p>

            <!-- Nonce Field for Security -->
            <?php wp_nonce_field('zolo_save_category_image', 'zolo_category_image_nonce'); ?>
        </div>
    <?php
    }

    /**
     * Save category image
     *
     * @param number $term_id .
     * @return void
     */
    public function save_category_image($term_id) {
        // Verify nonce before saving the data
        if (!isset($_POST['zolo_category_image_nonce']) || !wp_verify_nonce($_POST['zolo_category_image_nonce'], 'zolo_save_category_image')) {
            return;
        }

        if (isset($_POST['zolo-category-image-id']) && '' !== $_POST['zolo-category-image-id']) {
            $image = sanitize_key($_POST['zolo-category-image-id']);
            add_term_meta($term_id, 'zolo-category-image-id', $image, true);
        }
    }

    /**
     * Edit category image.
     *
     * @param object $term .
     * @return void
     */
    public function edit_category_image($term) {
    ?>
        <tr class="form-field term-group-wrap">
            <th scope="row">
                <label for="zolo-category-image-id"><?php esc_html_e('Image', 'zoloblocks'); ?></label>
            </th>
            <td>
                <?php $image_id = get_term_meta($term->term_id, 'zolo-category-image-id', true); ?>
                <input type="hidden" id="zolo-category-image-id" name="zolo-category-image-id"
                    value="<?php echo esc_attr($image_id); ?>">
                <div id="zolo-category-image-wrapper">
                    <?php if ($image_id) { ?>
                        <?php echo wp_get_attachment_image($image_id, 'thumbnail'); ?>
                    <?php } ?>
                </div>
                <p>
                    <input type="button" class="button button-secondary zolo-category-image-add"
                        id="zolo-category-image-add" name="zolo-category-image-add"
                        value="<?php esc_html_e('Add Image', 'zoloblocks'); ?>" />
                    <input type="button" class="button button-secondary zolo-category-image-remove"
                        id="zolo-category-image-remove" name="zolo-category-image-remove"
                        value="<?php esc_html_e('Remove Image', 'zoloblocks'); ?>" />
                </p>

                <!-- Nonce Field for Security -->
                <?php wp_nonce_field('zolo_save_category_image', 'zolo_category_image_nonce'); ?>
            </td>
        </tr>
    <?php
    }

    /**
     * Update category image
     *
     * @param number $term_id .
     * @return void
     */
    public function updated_category_image($term_id) {
        // Verify nonce before saving the data
        if (!isset($_POST['zolo_category_image_nonce']) || !wp_verify_nonce($_POST['zolo_category_image_nonce'], 'zolo_save_category_image')) {
            return;
        }

        if (isset($_POST['zolo-category-image-id']) && '' !== $_POST['zolo-category-image-id']) {
            $image = sanitize_key($_POST['zolo-category-image-id']);
            update_term_meta($term_id, 'zolo-category-image-id', $image);
        } else {
            update_term_meta($term_id, 'zolo-category-image-id', '');
        }
    }

    /**
     * Enqueue media file
     *
     * @return void
     */
    public function load_media_files() {
        wp_enqueue_media();
    }

    /**
     * Enqueue category image script
     *
     * @return void
     */
    public function load_category_media_scripts() {
    ?>
        <script>
            (function($) {
                $(document).ready(function() {
                    $(".zolo-category-image-add.button").on("click", function() {
                        let zoloMedia = wp.media({
                            multiple: false
                        });
                        zoloMedia.on('select', function() {
                            let attachment = zoloMedia.state().get('selection').first().toJSON();
                            $("#zolo-category-image-id").val(attachment.id);
                            $("#zolo-category-image-url").val(attachment.url);
                            $("#zolo-category-image-wrapper").html(`<img width="150" height="150" src='${attachment.url}' />`);
                        });
                        zoloMedia.open();
                        return false;
                    });
                    $('.zolo-category-image-remove.button').on("click", function() {
                        $('#zolo-category-image-id').val('');
                        $('#zolo-category-image-wrapper').html('<img width=150; height=150; class="zolo-media-hidden-image" src="" style="margin:0; max-height:100px; padding:0;float:none;" />');
                    })
                });
            })(jQuery);
        </script>
<?php
    }
}
