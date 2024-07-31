<?php

use Zolo\Helpers\ZoloHelpers;

$contentHTML  = '';
$contentHTML .= '<div class="zolo-post-desc">';
if ( ! empty( $settings['showExcerpt'] ) ) {
	$_content = ! empty( $result->excerpt ) ? $result->excerpt : $result->content;
	$_content = ZoloHelpers::removeHtmlTagContents( $_content, [ 'figure' ] );

	$content = ! empty( $settings['excerptWords'] ) ? ZoloHelpers::wordcount( wp_kses_post( wp_strip_all_tags( $_content ) ), $settings['excerptWords'] )
		: $_content;

	$contentHTML .= sprintf(
		' <p>%1$s%2$s</p>',
		$content,
		$settings['excerptindicator'],
	);
}

$contentHTML .= '</div>';

return $contentHTML;
