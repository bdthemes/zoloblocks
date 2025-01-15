<?php

$thumbnailHTML    = '';
$placeholderImage = trailingslashit( ZOLO_ADMIN_URL ) . 'assets/images/placeholder.svg';
$showLink         = isset( $showThumbLink ) ? (bool) $showThumbLink : true;


if ( ! empty( $settings['showThumbnail'] ) ) {
	$thumbnail = $result->thumbnail ?? '';
	$permalink = $result->permalink ?? '#';
	$title     = $result->title ?? '';

	if ( $showLink ) {
		if ( ! empty( $thumbnail ) ) {
			$thumbnailHTML .= sprintf(
				'<a href="%1$s">%2$s</a>',
				esc_url( $permalink ),
				$thumbnail
			);
		} else {
			$thumbnailHTML .= sprintf(
				'<a href="%1$s"><img src="%2$s" alt="%3$s"></a>',
				esc_url( $permalink ),
				esc_url( $placeholderImage ),
				esc_attr( $title )
			);
		}
	} else {
		if ( ! empty( $thumbnail ) ) {
			$thumbnailHTML .= $thumbnail;
		} else {
			$thumbnailHTML .= sprintf(
				'<img src="%1$s" alt="%2$s">',
				esc_url( $placeholderImage ),
				esc_attr( $title )
			);
		}
	}
}

return $thumbnailHTML;
