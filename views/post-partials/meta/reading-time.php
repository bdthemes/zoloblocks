<?php

$time = '';
$readingTime = $result->reading_time ?? '';

if (!empty($settings['showMeta'])) {

    $time .= '<div class="zolo-post-estimate">';
    if (!empty($settings['showReadingTime'])) {
        $time .= $readingTime . ' ' . __('Min Read', 'zoloblocks');
    }
    $time .= '</div>';
}

return $time;
