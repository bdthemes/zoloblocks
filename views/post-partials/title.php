<?php
defined( 'ABSPATH' ) || exit;

use Zolo\Helpers\ZoloHelpers;

$zolo_titleHTML = '';

if (!function_exists('zolo_read_more_markup')) {

	if(!function_exists('zolo_read_more_text_markup')){
		function zolo_read_more_text_markup($text){
			return sprintf(
				'<span>%s</span>',
				$text
			);
		}
	}

	if(!function_exists('zolo_read_more_icon_markup')){
		function zolo_read_more_icon_markup($icon){
			return sprintf(
				'<div class="zolo__display-icon">%s</div>',
				$icon
			);
		}
	}
	function zolo_read_more_markup($icon, $text, $url) {
		return sprintf(
			'<a href="%1$s" class="zolo-post-readmore">%2$s %3$s</a>',
			esc_url($url),
			!empty($text) ? zolo_read_more_text_markup($text) : '',
			!empty($icon) ? zolo_read_more_icon_markup($icon) : ''
		);
	}
}

if (! empty($settings['showTitle'])) {
	$zolo_post_title = wp_kses($zolo_result->title, 'post');
	$zolo_title_tag  = ZoloHelpers::sanitize_html_tag($settings['titleTag'] ?? 'h2');
	$zolo_post_title = ! empty($settings['titleWords']) ? ZoloHelpers::wordcount($zolo_post_title, $settings['titleWords']) : $zolo_post_title;
	$zolo_url        = esc_url(get_permalink($zolo_result->ID));
	$zolo_show_read_more  = $settings['showReadmore'] ?? false;
	$zolo_readmore_text   = $settings['readMoreText'] ?? '';
	$zolo_readmore_icon   = $settings['readMoreIcon'] ?? '';
	$zolo_titleHTML .= sprintf(
		'<%1$s class="zolo-post-title %5$s">
            <a href="%2$s" title="%3$s">%3$s</a>
			%4$s
        </%1$s>',
		$zolo_title_tag,
		$zolo_url,
		$zolo_post_title,
		$zolo_show_read_more && ($zolo_readmore_text || $zolo_readmore_icon) ? zolo_read_more_markup($zolo_readmore_icon, $zolo_readmore_text, $zolo_url) : '',
		$zolo_show_read_more && ($zolo_readmore_text || $zolo_readmore_icon) ? 'zolo-post-has-readmore' : ''
	);
}

return $zolo_titleHTML;
