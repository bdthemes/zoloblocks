<?php

$zolo_time = '';
$zolo_readingTime = $zolo_result->reading_time ?? '';

if (!empty($settings['showMeta'])) {

    $zolo_time .= '<div class="zolo-post-estimate">';
    if (!empty($settings['showReadingTime'])) {
        $zolo_time .= $zolo_readingTime . ' ' . __('Min Read', 'zoloblocks');
    }
    $zolo_time .= '</div>';
}

return $zolo_time;
