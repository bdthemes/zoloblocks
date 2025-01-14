<?php
namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

if( ! class_exists( 'PostMeta' ) ) {

	/**
	 * PostMeta class.
	 *
	 * This class is responsible for handling the meta for the PostMeta class.
	 *
	 * @since 1.0.0
	 */
	class PostMeta {

		use SingletonTrait;

		/**
		 * Class constructor for the PostMeta class.
		 *
		 * This method is called when a new instance of the PostMeta class is created.
		 * It initializes the object and sets up any necessary properties.
		 */
		public function __construct() {
			add_filter('init', [ $this, 'register_meta']);
		}

		/**
		 * Registers the meta for the PostMeta class.
		 *
		 * This method is responsible for registering the meta for the PostMeta class.
		 * It should be called during the plugin initialization to ensure that the meta is properly set up.
		 *
		 * @since 1.0.0
		 */
		public function register_meta() {
			register_meta(
				'post',
				'_zb_attr',
				array(
					'show_in_rest'  => true,
					'single'        => true,
					'auth_callback' => [$this, 'auth_callback'],
				)
			);

            // for post format video link.
            $post_types = apply_filters( 'zolo_post_video_link_post_types', [ 'post', 'page' ] );

            foreach ( $post_types as $post_type ) {
                register_post_meta(
                    $post_type,
                    'zolo_post_video_link',
                    [
                        'show_in_rest' => true,
                        'single'       => true,
                        'type'         => 'string',
                    ]
                );
            }
		}


		/**
		 * Callback function for authentication.
		 *
		 * This function is used as a callback for authentication purposes.
		 * It is called within the "PostMeta" class.
		 *
		 * @return void
		 */
		public function auth_callback() {
			return current_user_can('edit_posts');
		}
	}
}



