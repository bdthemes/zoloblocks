<?php

namespace Zolo\Blocks;

use Zolo\Blocks\PostBlock;
use Zolo\API\GetPostsV1;
use Zolo\Helpers\ZoloHelpers;

class PostCarousel extends PostBlock {

    protected $default_block_attributes = [
        'preset'                => 'style-1',
        'postTitleAnimation'    => '',
        'showExcerpt'           => false,
        'thumbnailSize'         => '',
        'metaSeparator'         => '//',
        'excerptindicator'      => '...',
        'excerptWords'          => 15,
        'showReadMore'          => false,
        'customNavIcon'         => true,
        'readMoreBtnText'       => 'Read More',
        'slideItems'            => 3,
        'sliderType'            => 'slider',
        'autoplay'              => false,
        'autoplayDelay'         => 30,
        'pauseOnMouseEnter'     => false,
        'infiniteLoop'          => true,
        'showNavigation'        => false,
        'showPagination'        => true,
        'paginationType'        => 'bullets',
        'dynamicBullets'        => false,
        'speed'                 => 8,
        'carouselEffect'        => 'slide',
        'coverFlowEffect'       => [
            'rotate' => 50,
            'stretch' => 0,
            'depth' => 100,
            'modifier' => 1,
            'slideShadows' => false
        ],
        'customNavIcon'         => true,
        'prevNavIcon'           => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"></path></svg>',
        'nextNavIcon'        => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>'
    ];

    public function get_default_attributes() {
        return array_merge(parent::$default_attributes, $this->default_block_attributes);
    }

    public function render($attributes) {

        $attributes = wp_parse_args($attributes, $this->get_default_attributes());

        $postQuery = !empty($attributes['postQuery']) ? $attributes['postQuery'] : [
            'postType'       => 'post',
            'postInclude'    => '',
            'postExclude'    => '',
            'postAuthors'    => [],
            'postTaxonomies' => [],
            'postPerPage'    => 7,
            'postOffset'     => 0,
            'postOrderby'    => 'date',
            'postOrder'      => 'desc',
            'postThumbnail'  => '',
        ];

        
        $post_results = apply_filters('zolo_post_carousel_results', GetPostsV1::zolo_posts_query($postQuery));
        
        ob_start();
        ZoloHelpers::views('post-carousel', [
            'settings'     => $attributes,
            'className'    => '',
            'post_results' => $post_results,
            'class_object' => $this
        ]);
        return ob_get_clean();
    }
}
