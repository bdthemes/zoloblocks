<?php

$zolo_commentNumber       = '';
$zolo_post_comment_number = $zolo_result->comment_number ?? '';

if (! empty($settings['showComment'])) {

    $zolo_commentNumber .= '<div class="zolo-post-comment">';
    $zolo_commentNumber .= $zolo_post_comment_number . ' ' . __('Comments', 'zoloblocks');
    $zolo_commentNumber .= '</div>';
}

return $zolo_commentNumber;
