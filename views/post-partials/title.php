<?php
use Zolo\Helpers\ZoloHelpers;
$titleHTML = '';

if ( ! empty( $settings['showTitle'] ) ) {
	$post_title = wp_kses( $result->title, 'post' );
	$post_title = ! empty( $settings['titleWords'] ) ?
		ZoloHelpers::wordcount( $post_title, $settings['titleWords'] ) : $post_title;

	$titleHTML .= sprintf(
		'<%1$s class="zolo-post-title">
            <a href="%2$s" title="%3$s">%4$s</a>
        </%1$s>',
		$settings['titleTag'],
		get_permalink( $result->ID ),
		esc_attr( $post_title ),
		$post_title
	);
}

return $titleHTML;
