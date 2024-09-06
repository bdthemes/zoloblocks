<?php

$commentNumber       = '';
$post_comment_number = $result->comment_number ?? '';

if (! empty($settings['showComment'])) {

    $commentNumber .= '<div class="zolo-post-comment">';
    $commentNumber .= $post_comment_number . ' ' . __('Comments', 'zoloblocks');
    $commentNumber .= '</div>';
}

return $commentNumber;
