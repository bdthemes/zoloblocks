<?php
use Zolo\Helpers\ZoloHelpers;
$topclass = 'zolo-post-video-slider-wrap';
if ( ! empty( $settings['contentPosition'] ) ) {
	$topclass .= ' ' . $settings['contentPosition'];
}
$wrapper_class = ZoloHelpers::get_wrapper_class( $settings, $topclass );

// get parent classes.
$parentClasses = $settings['parentClasses'] ?? [];
// convert to string.
$parentClasses = implode( ' ', $parentClasses );
// add parent classes to wrapper class.
$wrapper_class .= ' ' . $parentClasses;
$wrapperId      = $settings['zoloId'] ?? 'zoloId';

$metaSeparator      = ! empty( $settings['metaSeparator'] ) ? $settings['metaSeparator'] : '//';
$swiperOptions      = ! empty( $settings['sliderOptions'] ) ? wp_json_encode( $settings['sliderOptions'] ) : [];
$prevNavIcon        = ! empty( $settings['prevNavIcon'] ) ? $settings['prevNavIcon'] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"></path></svg>';
$nextNavIcon        = ! empty( $settings['nextNavIcon'] ) ? $settings['nextNavIcon'] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>';
$showThumbLink      = false;
$html               = '';
$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class'         => $wrapper_class,
		'id'            => $wrapperId,
		'data-settings' => $swiperOptions,
	]
);
?>

<div <?php echo wp_kses_data( $wrapper_attributes ); ?>>

	<?php
	$html .= '<div class="swiper zolo-main-slider">';
	$html .= '<div class="swiper-wrapper">';
	?>
	<?php
	foreach ( $post_results['posts'] as $result ) {
		$result     = (object) $result;
		$video_link = get_post_meta( $result->ID, 'zolo_post_video_link', true );
		$video_link = ! empty( $video_link ) ? $video_link : false;

		$html .= '<div class="zolo-item swiper-slide">';

		$html .= '<div class="zolo-post-image-wrap">';
		$html .= require __DIR__ . '/post-partials/thumbnail.php';
		if ( $video_link && ! empty( $class_object ) ) {
			$video_link = $class_object->video_link_render( $video_link );
			$html      .= '
                <div class="zolo-video-wrap">
                    <iframe src="" class="zolo-video-iframe" allow="autoplay;"></iframe>
                </div>
            ';
		}
		$html .= '</div>';

		$html .= '<div class="zolo-post-content">';
		$html .= require __DIR__ . '/post-partials/meta/categories.php';
		$html .= require __DIR__ . '/post-partials/title.php';
		$html .= require __DIR__ . '/post-partials/content.php';

		$html .= '<div class="zolo-post-meta" >';
		$html .= require __DIR__ . '/post-partials/meta/author-video-slider.php';
		if ( ! empty( $settings['showAuthor'] ) && ! empty( $settings['showDate'] ) ) {
			$html .= '<div class="zolo-separator">' . esc_html( $metaSeparator ) . '</div>';
		}
		if ( ! empty( $settings['showDate'] ) ) {
			$html .= require __DIR__ . '/post-partials/meta/date.php';
		}
		$html .= '</div>';
		$html .= '</div>';

		$html .= '</div>';
	}
	?>

	<?php
	$html .= '</div>';

	if ( ! empty( $settings['sliderOptions']['navigation'] ) ) {
		$html .= '<div class="swiper-navigation-wrap">';
		if ( ! empty( $settings['customNavIcon'] ) ) {
			$html .= '<div class="swiper-nav-button swiper-zolo-prev">';
			$html .= wp_kses( $prevNavIcon, ZoloHelpers::wp_kses_allowed_svg() );
			$html .= '</div>';

			$html .= '<div class="swiper-nav-button swiper-zolo-next">';
			$html .= wp_kses( $nextNavIcon, ZoloHelpers::wp_kses_allowed_svg() );
			$html .= '</div>';
		} else {
			$html .= '<div class="swiper-nav-button swiper-button-prev"></div>';
			$html .= '<div class="swiper-nav-button swiper-button-next"></div>';
		}
		$html .= '</div>';
	}
	$html .= '</div>';
	?>

	<?php
	$html .= '<div class="swiper zolo-thumbs-slider">';
	$html .= '<div class="swiper-wrapper">';

	foreach ( $post_results['posts'] as $result ) {
		$result     = (object) $result;
		$video_link = get_post_meta( $result->ID, 'zolo_post_video_link', true );
		$video_link = ! empty( $video_link ) ? $video_link : false;

		$html .= '<div class="zolo-item swiper-slide">';

		$html .= '<div class="zolo-post-image-wrap">';
		$html .= require __DIR__ . '/post-partials/thumbnail.php';
		$html .= '</div>';
		if ( $video_link && ! empty( $class_object ) ) {
			$video_link = $class_object->video_link_render( $video_link );
			$html      .= '
            <div class="zolo-video-button">
                  <a class="zolo-post-video-trigger" data-src="' . esc_url( $video_link ) . '" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-play-fill" viewBox="0 0 16 16">
                      <path
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </a>
            </div>
        ';
		}
		$html .= '</div>';
	}

	$html .= '</div></div>';
	?>

	<?php echo wp_kses( $html, ZoloHelpers::wp_kses_allowed_svg() ); ?>

</div>
