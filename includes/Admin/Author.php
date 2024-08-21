<?php

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

/**
 * Author block admin
 */
class Author {
	use SingletonTrait;

	/**
	 * Construct method
	 */
	public function __construct() {
		add_filter('user_contactmethods', [$this, 'user_contact_social_link']);
		add_filter('rest_prepare_user', [$this, 'add_custom_meta_to_rest'], 10, 2);
	}

	/**
	 * Add custom meta to REST API response.
	 *
	 * @param object $data .
	 * @param object $user .
	 * @return mixed
	 */
	public function add_custom_meta_to_rest($data, $user) {
		$social_links = array_keys($this->user_contact_social_link([]));

		foreach ($social_links as $link) {
			$usermeta                    = get_user_meta($user->ID, $link, true);
			$data->data['meta'][$link] = $usermeta;
		}

		return $data;
	}


	/**
	 * User profile contact social link
	 *
	 * @param array   $methods .
	 * @param boolean $core .
	 * @return mixed
	 */
	public static function user_contact_social_link($methods, $core = false) {

		if ($core) {
			$methods['email'] = __('Email', 'zoloblocks');
			$methods['url']   = __('Website', 'zoloblocks');
		}

		$methods['facebook']  = __('Facebook', 'zoloblocks');
		$methods['twitter']   = __('Twitter', 'zoloblocks');
		$methods['linkedin']  = __('LinkedIn', 'zoloblocks');
		$methods['github']    = __('GitHub', 'zoloblocks');
		$methods['wordpress'] = __('WordPress', 'zoloblocks');
		$methods['dribbble']  = __('Dribbble', 'zoloblocks');

		return $methods;
	}
}
