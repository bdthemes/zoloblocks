<?php

$thumbnailHTML = '';

$placeholderImage = trailingslashit( ZOLO_ADMIN_URL ) . 'assets/images/placeholder.svg';

if (!empty($settings['showThumbnail'])) {
    $thumbnail = $result->thumbnail;
    if (!empty($thumbnail)) {
        $thumbnailHTML .= sprintf(
            '<a href="%1$s">
                %2$s
            </a>',
            $result->permalink,
            $thumbnail
        );
    } else {
        $permalink = $result->permalink ?? '#';
        $thumbnailHTML .= '<a href="' . $permalink . '">';
        $thumbnailHTML .= '<img src="' . $placeholderImage . '" alt="' . $result->title . '">';
        $thumbnailHTML .= '</a>';
    }
}

return $thumbnailHTML;
