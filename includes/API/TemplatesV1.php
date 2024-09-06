<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

/**
 * Zolo Templates API
 */
class TemplatesV1 {

	use SingletonTrait;

	/**
	 * Construct method
	 */
	public function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_templates_route' ] );
	}

	/**
	 * Register post route
	 *
	 * @return void
	 */
	public function register_templates_route() {
        register_rest_route('zolo/v1', '/templates', [
            'methods'             => 'GET',
            'callback'            => [$this, 'get_templates'],
            'permission_callback' => '__return_true',
        ]);
	}

    /**
     * Retrieves the templates from the specified file path.
     *
     * @return array An array of templates.
     */
    public function get_templates() {
        $transient_key = 'zolo_templates';
        $templates = get_transient($transient_key);

        if (empty($templates)) {
            $response = wp_remote_get('https://templates.zoloblocks.com/wp-json/bdthemes/v1/template-manager?per_page=-1');
            $body     = wp_remote_retrieve_body($response);
            $data     = json_decode($body, true);

            if (!empty($data)) {
                $templates = $data ?? [];
                set_transient($transient_key, $templates, 7 * DAY_IN_SECONDS);
            }
        }
        wp_send_json_success($templates);
    }
}
