<?php
$attributes = $attributes;
$content = $content;
$block = $block;

error_log(print_r( $attributes,true ));

$query_id = isset($attributes['queryId']) ? $attributes['queryId'] : false;
$query_args = isset($attributes['query']) ? $attributes['query'] : [];
$inherit = isset($query['inherit']) ? $query['inherit'] : false;

if ($inherit) {
    global $wp_query;

    if (in_the_loop()) {
        $query = clone $wp_query;
        $query->rewind_posts();
    } else {
        $query = $wp_query;
    }
}

$query_content = '';

/* if ($query->have_posts()) {
    $block_instance = $block->parsed_block;
    $block_instance['blockName'] = 'core/null';

    $filter_block_context = static function ($context) use ($query, $query_id) {
        $context['queryLoopContext'] = [
            'posts' => $query->get_posts(),
            'queryId' => $query_id,
        ];
        return $context;
    };
    // Use an early priority to so that other 'render_block_context' filters have access to the values.
    add_filter('render_block_context', $filter_block_context, 1);

    // `render_callback` and ensure that no wrapper markup is included.
    $block_content = (new WP_Block($block_instance))->render(array('dynamic' => false));
    remove_filter('render_block_context', $filter_block_context, 1);

    $query_content .= $block_content;
} */

printf(
    '<div %1s>%2s</div>',
    get_block_wrapper_attributes(),
    $query_content
);
