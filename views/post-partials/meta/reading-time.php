<?php

$time = '';
$readingTime = $result->reading_time ?? '';

if (!empty($settings['showMeta'])) {

    $time .= '<div class="zolo-post-estimate">';
        if (!empty($settings['showReadingTime'])) {
            $time .= $readingTime . ' ' . __('Min Read', 'zolo-blocks');
        }
    $time .= '</div>';
}

return $time;
