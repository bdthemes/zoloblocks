<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

class PostMeta {
	use SingletonTrait;
	private function __construct() {
		add_action('init', [$this, 'register_meta']);
	}

	public function register_meta() {
		register_meta('post', '_zb_attr', [
			'show_in_rest' => true,
			'single' => true,
			'auth_callback' => [$this, 'auth_callback'],
		]);
	}

	public function auth_callback() {
		return current_user_can('edit_posts');
	}
}
