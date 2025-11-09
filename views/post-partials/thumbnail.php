<?php

$zolo_thumbnailHTML    = '';
$zolo_placeholderImage = trailingslashit( ZOLO_ADMIN_URL ) . 'assets/images/placeholder.svg';
$zolo_showLink         = isset( $showThumbLink ) ? (bool) $showThumbLink : true;


if ( ! empty( $settings['showThumbnail'] ) ) {
	$zolo_thumbnail = $zolo_result->thumbnail ?? '';
	$zolo_permalink = $zolo_result->permalink ?? '#';
	$zolo_title     = $zolo_result->title ?? '';

	if ( $zolo_showLink ) {
		if ( ! empty( $zolo_thumbnail ) ) {
			$zolo_thumbnailHTML .= sprintf(
				'<a href="%1$s">%2$s</a>',
				esc_url( $zolo_permalink ),
				$zolo_thumbnail
			);
		} else {
			$zolo_thumbnailHTML .= sprintf(
				// phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage
				'<a href="%1$s"><img src="%2$s" alt="%3$s"></a>',
				esc_url( $zolo_permalink ),
				esc_url( $zolo_placeholderImage ),
				esc_attr( $zolo_title )
			);
		}
	} else {
		if ( ! empty( $zolo_thumbnail ) ) {
			$zolo_thumbnailHTML .= $zolo_thumbnail;
		} else {
			$zolo_thumbnailHTML .= sprintf(
				// phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage
				'<img src="%1$s" alt="%2$s">',
				esc_url( $zolo_placeholderImage ),
				esc_attr( $zolo_title )
			);
		}
	}
}

return $zolo_thumbnailHTML;
