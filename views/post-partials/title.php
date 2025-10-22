<?php

use Zolo\Helpers\ZoloHelpers;

$titleHTML = '';

if (! empty($settings['showTitle'])) {
	$post_title = wp_kses($result->title, 'post');
	$title_tag  = ZoloHelpers::sanitize_html_tag($settings['titleTag'] ?? 'h2');
	$post_title = ! empty($settings['titleWords']) ? ZoloHelpers::wordcount($post_title, $settings['titleWords']) : $post_title;
	$url        = esc_url(get_permalink($result->ID));
	$titleHTML .= sprintf(
		'<%1$s class="zolo-post-title">
            <a href="%2$s" title="%3$s">%3$s</a>
        </%1$s>',
		$title_tag,
		$url,
		$post_title
	);
}

return $titleHTML;
