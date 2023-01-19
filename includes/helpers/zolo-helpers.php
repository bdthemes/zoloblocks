<?php
/**
 * Zolo_Helpers
 *
 * AJAX Event Handler
 *
 * @class    Zolo_Helpers
 * @version  0.0.1
 * @package  zolo-helpers
 * @category Class
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Zolo_Helpers
{
    /**
     * Filter Blocks
     */
    public static function filter_blocks($block)
    {
        return isset($block['visibility']) ? $block['visibility'] : false;
    }

    /**
     * array of object to string
     */
    public static function array_column_from_json($arr, $handle, $json = true)
    {
        $arr = $json ? json_decode($arr, true) : $arr;
        $arr = array_column($arr, $handle);

        return $arr;
    }

    /**
     * Isset Check
     */
    public static function zolo_isset_check($value, $default = '')
    {
        if (isset($_POST[$value])) {
            return $_POST[$value];
        } else {
            return $default;
        }
    }

    /**
     * check isset & not empty and return data
     */
    public static function get_data($arr, $key, $default = null)
    {
        return isset($arr[$key]) && !empty($arr[$key]) ? $arr[$key] : $default;
    }

    /**
     * Is Gutenberg Editor
     */
    public static function zolo_is_gutenberg_editor($pagenow, $param)
    {
        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php') {
            return true;
        }

        if ($pagenow == 'themes.php' && !empty($param) && str_contains($param, 'gutenberg-edit-site')) {
            return true;
        }

        return false;
    }

    /**
     * Generate Style String
     */
    public static function zolo_generate_style($style)
    {
        // var_dump($style);
        $css = "";
        if (isset($style['desktop']) && strlen($style['desktop']) > 0) {
            $css .= $style['desktop'];
        }
        if (isset($style['tablet']) && strlen($style['tablet']) > 0) {
            $css .= sprintf(
                '@media all and (max-width: 1024px) {%1$s}',
                $style['tablet']
            );
        }
        if (isset($style['mobile']) && strlen($style['mobile']) > 0) {
            $css .= sprintf(
                '@media all and (max-width: 767px) {%1$s}',
                $style['mobile']
            );
        }

        return $css;
    }
}