<?php

namespace Zolo\Blocks;

use Zolo\Blocks\BlockBase;
use Zolo_Helpers;
use Zolo\API\GetPostsV1;

class PostGrid extends BlockBase
{

    public function get_name()
    {
        return 'post-grid';
    }

    protected $default_attributes = [
        'showExcerpt'      => true,
    ];


    public function register_block()
    {
        register_block_type(
            $this->get_block_path($this->get_name()),
            [
                'render_callback' => [$this, 'render_block']
            ]
        );
    }

    public function render_block($attributes)
    {
        if (!is_admin()) {
            $this->load_scripts();
        }

        $attributes = wp_parse_args($attributes, $this->default_attributes);

        $post_results = apply_filters('zolo_post_grid_results', GetPostsV1::zolo_posts_query($attributes));

        ob_start();
        Zolo_Helpers::views('post-grid',  [
            'settings' => $attributes,
            'className'     => '',
            'posts'         => $post_results,
        ]);

        return ob_get_clean();
    }
}
