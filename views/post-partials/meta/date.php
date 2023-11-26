<?php

$date = '';
$postDate = $result->date ?? '';
$readingTime = $result->reading_time ?? '';

if (!empty($settings['showMeta'])) {

    $date .= '<div class="zolo-post-date">';
    $date .= '<div class="zolo-post-dateTime">';
    $date .= $postDate;

    if (!empty($settings['showReadingTime'])) {
        $date .= '<span>//</span>';
        $date .= $readingTime . ' ' . __('Min Read', 'zolo-blocks');
    }

    $date .= '</div>';
    $date .= '</div>';
}

return $date;
