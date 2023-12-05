<?php

$date = '';
$postDate = $result->date ?? '';
$readingTime = $result->reading_time ?? '';

if (!empty($settings['showMeta'])) {

    $date .= '<div class="zolo-post-date">';
        $date .= $postDate;
    $date .= '</div>';
}

return $date;
