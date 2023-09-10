<?php

use Zolo\Helpers\ZoloHelpers;

$contentHTML = '';
$contentHTML .= '<div class="zolo-post-desc">';
if (!empty($settings['showExcerpt'])) {
    $_content = !empty($result->excerpt) ? $result->excerpt : $result->content;
    $_content = ZoloHelpers::removeHtmlTagContents($_content, array('figure'));

    $content  = !empty($settings['excerptWords']) ? $class_object->truncate(wp_kses_post(strip_tags($_content)), $settings['excerptWords'])
        : $_content;

    $contentHTML .= sprintf(
        ' <p>%1$s%2$s</p>',
        $content,
        $settings['excerptindicator'],
    );
}

$contentHTML .= '</div>';

return $contentHTML;
