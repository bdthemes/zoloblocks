<?php

$zolo_categories = '';
if (! empty($settings['showCategory'])) {
	$zolo_postType = $settings['postQuery']['postType'] ?? 'post';
	$zolo_taxonomy = \Zolo\Helpers\ZoloHelpers::get_taxonomy_name($zolo_postType, 'category');
	$zolo_cats     = get_the_terms($zolo_result->ID, $zolo_taxonomy);
	if (is_array($zolo_cats) && count($zolo_cats) > 0) {
		$zolo_categories .= '<ul class="zolo-post-category">';
		foreach ($zolo_cats as $cat) {
			$zolo_categories .= sprintf(
				'<li><a href="%1$s" title="%2$s">%2$s</a></li>',
				esc_attr(esc_url(get_category_link($cat->term_id))),
				esc_html($cat->name)
			);
		}
		$zolo_categories .= '</ul>';
	}
}

return $zolo_categories;
