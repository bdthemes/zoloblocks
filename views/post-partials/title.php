<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_titleHTML = '';

if (! empty($settings['showTitle'])) {
	$zolo_post_title = wp_kses($zolo_result->title, 'post');
	$zolo_title_tag  = ZoloHelpers::sanitize_html_tag($settings['titleTag'] ?? 'h2');
	$zolo_post_title = ! empty($settings['titleWords']) ? ZoloHelpers::wordcount($zolo_post_title, $settings['titleWords']) : $zolo_post_title;
	$zolo_url        = esc_url(get_permalink($zolo_result->ID));
	$zolo_titleHTML .= sprintf(
		'<%1$s class="zolo-post-title">
            <a href="%2$s" title="%3$s">%3$s</a>
        </%1$s>',
		$zolo_title_tag,
		$zolo_url,
		$zolo_post_title
	);
}

return $zolo_titleHTML;
