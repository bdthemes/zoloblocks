<?php

$titleHTML = '';

if (!empty($settings['showTitle'])) {
    $post_title = wp_kses($result->title, 'post');

    $titleHTML .= sprintf(
        '<%1$s class="zolo-post-title">
            <a href="%2$s" title="%3$s">%4$s</a>
        </%1$s>',
        $settings['titleTag'],
        get_permalink($result->ID),
        esc_attr($post_title),
        $post_title
    );
}

return $titleHTML;
