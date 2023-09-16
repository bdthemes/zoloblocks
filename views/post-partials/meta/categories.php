<?php

$categories = '';
if (!empty($settings['showCategory'])) {
    $cats = wp_get_post_categories($result->ID, array('fields' => 'all'));
    if (is_array($cats) && count($cats) > 0) {
        $categories .= '<ul class="zolo-post-category">';
        foreach ($cats as $cat) {
            $categories .= sprintf(
                '<li><a href="%1$s" title="%2$s">%2$s</a></li>',
                esc_attr(esc_url(get_category_link($cat->term_id))),
                esc_html($cat->name)
            );
        }
        $categories .= '</ul>';
    }
}

return $categories;
