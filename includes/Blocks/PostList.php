<?php

namespace Zolo\Blocks;

use Zolo\Blocks\PostBlock;
use Zolo\API\GetPostsV1;
use Zolo\Helpers\ZoloHelpers;

class PostList extends PostBlock {

    protected $default_block_attributes = [
        'name'             => 'post-list',
        'preset'           => 'style-1',
        'thumbnailSize'    => '',
        'showExcerpt'      => false,
        'excerptindicator' => '...',
        'excerptWords'     => 15,
        'showCount'        => false,
        'showFeatureimg'   => true,
    ];

    public function get_default_attributes() {
        return array_merge(parent::$default_attributes, $this->default_block_attributes);
    }

    public function render($attributes) {
        $attributes   = wp_parse_args($attributes, $this->get_default_attributes());
        $postQuery    = $attributes['postQuery'] ?? [];
        $post_results = apply_filters('zolo_post_grid_results', GetPostsV1::zolo_posts_query($postQuery));

        ob_start();
        ZoloHelpers::views('post-list', [
            'settings'     => $attributes,
            'className'    => '',
            'post_results' => $post_results,
            'class_object' => $this
        ]);
        return ob_get_clean();
    }
}
