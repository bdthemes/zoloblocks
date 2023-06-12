<?php

namespace Zolo\Classes;
use Zolo\Traits\SingletonTrait;

class Registration {
    use SingletonTrait;

    public function __construct() {
        //Register Block Category
        add_filter( 'block_categories_all', [$this, 'register_block_category'], 99999, 2 );

        //Register Block
        add_filter( 'init', [$this, 'block_register'] );
    }

    public function block_register() {
        $blocks = $this::block_list();
        if ( is_array( $blocks ) && count( $blocks ) > 0 ) {
            foreach ( $blocks as $key => $block ) {
                if ( ! isset( $block['name'] ) ) {
                    continue;
                }

                $blockname = 'zolo/' . $block['name'];

                if ( isset( $block['metadata'] ) && file_exists( $block['metadata'] ) ) {
                    $blockname = $block['metadata'];
                }

                register_block_type( $blockname, [
                    'render_callback' => [$this, 'render_callback']
                ] );
            }
        }
    }

    public function render_callback($attributes, $content) {
        return $content;
    }

    public static function block_list() {
        $blocks = require_once ZOLO_DIR_PATH . 'includes/Blocks/Blocks.php';
        return $blocks;
        // echo "<pre>", print_r($blocks, 1), "</pre>";
    }

    /**
     * Register Block Category
     *
     * @since 0.0.1
     *
     * @return array
     */
    public function register_block_category( $categories, $post ) {
        $updatedCat  = [];
        $eb_category = [
            'slug'  => 'zolo-blocks',
            'title' => __( 'Zolo Blocks', 'zolo-blocks' )
        ];
        $updatedCat[0] = $eb_category;
        $updatedCat    = array_merge( $updatedCat, $categories );
        return $updatedCat;
    }
}
