<?php

$zolo_date = '';
$zolo_postDate = $zolo_result->date ?? '';
$zolo_readingTime = $zolo_result->reading_time ?? '';

if (!empty($settings['showMeta'])) {

    $zolo_date .= '<div class="zolo-post-date">';
        $zolo_date .= $zolo_postDate;
    $zolo_date .= '</div>';
}

return $zolo_date;
