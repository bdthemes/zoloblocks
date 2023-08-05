<?php

namespace Zolo\Blocks;

use Zolo\API\GetPostsV1;
use Zolo\Helpers\ZoloHelpers;

class PostGrid
{

    public static function render($attributes)
    {

        $default_attributes = [
            'showExcerpt' => true
        ];

        $attributes = wp_parse_args($attributes, $default_attributes);

        $post_results = apply_filters('zolo_post_grid_results', GetPostsV1::zolo_posts_query($attributes['postQuery']));

        ob_start();
        ZoloHelpers::views('post-grid', [
            'settings'  => $attributes,
            'className' => '',
            'posts'     => $post_results
        ]);
        return ob_get_clean();
    }
}
