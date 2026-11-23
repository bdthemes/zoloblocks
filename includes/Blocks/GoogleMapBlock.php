<?php
namespace Zolo\Blocks;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Zolo\Blocks\GoogleMapBlock' ) ) {

	/**
	 * Server-side output filtering for the Google Map block.
	 *
	 * The block saves its options, including the info-window HTML of every marker, as
	 * JSON in a data-options attribute, and the front-end script renders that HTML with
	 * innerHTML. core's KSES pass leaves a data-* attribute's value alone, so whatever the
	 * post's author typed reaches visitors unchanged. Run the HTML-bearing fields through
	 * wp_kses_post() on output so posts saved before this fix are covered too.
	 */
	class GoogleMapBlock {

		use SingletonTrait;

		public function __construct() {
			add_filter( 'render_block_zolo/google-map', [ $this, 'sanitize_options' ], 10, 2 );
		}

		/**
		 * Sanitize the info-window HTML inside the block's data-options attribute.
		 *
		 * @param string $block_content Rendered block markup.
		 * @param array  $block         Parsed block.
		 * @return string
		 */
		public function sanitize_options( $block_content, $block ) {
			if ( ! is_string( $block_content ) || false === strpos( $block_content, 'data-options' ) ) {
				return $block_content;
			}

			$processor = new \WP_HTML_Tag_Processor( $block_content );

			if ( ! $processor->next_tag( [ 'class_name' => 'wp-block-zolo-google-map' ] ) ) {
				return $block_content;
			}

			$raw = $processor->get_attribute( 'data-options' );

			if ( ! is_string( $raw ) || '' === $raw ) {
				return $block_content;
			}

			$options = json_decode( $raw, true );

			if ( ! is_array( $options ) ) {
				// The front-end script cannot parse it either, so nothing is rendered.
				return $block_content;
			}

			$original = $options;

			if ( array_key_exists( 'infoWindow', $options ) ) {
				$options['infoWindow'] = is_string( $options['infoWindow'] ) ? wp_kses_post( $options['infoWindow'] ) : '';
			}

			if ( array_key_exists( 'markers', $options ) ) {
				if ( is_array( $options['markers'] ) ) {
					$markers = [];

					foreach ( $options['markers'] as $marker ) {
						if ( ! is_array( $marker ) ) {
							continue;
						}

						if ( array_key_exists( 'info', $marker ) ) {
							$marker['info'] = is_string( $marker['info'] ) ? wp_kses_post( $marker['info'] ) : '';
						}

						$markers[] = $marker;
					}

					$options['markers'] = $markers;
				} else {
					unset( $options['markers'] );
				}
			}

			// Leave blocks that needed no cleaning byte for byte as saved: re-encoding
			// would also rewrite unrelated values (float precision, slashes).
			if ( $options === $original ) {
				return $block_content;
			}

			$processor->set_attribute( 'data-options', wp_json_encode( $options ) );

			return $processor->get_updated_html();
		}
	}
}
