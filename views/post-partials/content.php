<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_contentHTML  = '';
$zolo_contentHTML .= '<div class="zolo-post-desc">';
if ( ! empty( $settings['showExcerpt'] ) ) {
	$zolo_content = ! empty( $zolo_result->excerpt ) ? $zolo_result->excerpt : $zolo_result->content;
	$zolo_content = ZoloHelpers::removeHtmlTagContents( $zolo_content, [ 'figure' ] );

	$zolo_content = ! empty( $settings['excerptWords'] ) ? ZoloHelpers::wordcount( wp_kses_post( wp_strip_all_tags( $zolo_content ) ), $settings['excerptWords'] )
		: $zolo_content;

	$zolo_contentHTML .= sprintf(
		' <p>%1$s%2$s</p>',
		$zolo_content,
		$settings['excerptindicator'],
	);
}

$zolo_contentHTML .= '</div>';

return $zolo_contentHTML;
