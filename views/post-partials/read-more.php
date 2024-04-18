<?php

use Zolo\Helpers\ZoloHelpers;

$read_more_html = '';
$read_more_text = $settings['readMoreBtnText'] ?? 'Read More';
$read_more_icon = '';

if (isset($settings['showReadmoreIcon']) && $settings['showReadmoreIcon'] === true) {
    $read_more_icon = $settings['readMoreIcon'] ?? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>';
}

if (!empty($settings['showReadMore'])) {
    $read_more_html .= '<div class="zolo-post-link-btn">';
    $read_more_html .= '<a href="' . get_permalink($result->ID) . '">';
    $read_more_html .= $read_more_text;
    if (!empty($read_more_icon)) {
        $read_more_html .= '<div class="zolo__display-icon">' . $read_more_icon . '</div>';
    }
    $read_more_html .= '</a>';
    $read_more_html .= '</div>';
}

return $read_more_html;
