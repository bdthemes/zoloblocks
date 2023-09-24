<?php

$thumbnailHTML = '';

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
        $thumbnailHTML .= '<a href="' . $permalink . '">
        <img src="https://via.placeholder.com/380x440.png" alt="No Image Available" />
      </a>';
    }
}

return $thumbnailHTML;
