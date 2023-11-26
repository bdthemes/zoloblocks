<?php

$read_more_html = '';
$read_more_text = '';  // Default value
$read_more_icon = 'fas fa-arrow-right';  // Default value

if (isset($settings['showReadmoreText']) && $settings['showReadmoreText'] === true) {
    $read_more_text = $settings['readMoreBtnText'] ?? '';
}

if (isset($settings['showReadmoreIcon']) && $settings['showReadmoreIcon'] === true) {
    $read_more_icon = $settings['readMoreIcon'] ?? 'fas fa-arrow-right';
}

if (!empty($settings['showReadMore'])) {
    $read_more_html .= sprintf(
        '<div class="zolo-post-link-btn">
            <a href="%1$s">
                %2$s
                <i class="%3$s"></i>
            </a>
        </div>',
        get_permalink($result->ID),
        $read_more_text,
        $read_more_icon
    );
}

return $read_more_html;
