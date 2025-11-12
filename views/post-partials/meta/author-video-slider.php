<?php
$zolo_author           = '';
$zolo_author_posts_url = get_author_posts_url( get_the_author_meta( 'ID' ) );
$zolo_author_name      = $zolo_result->author ?? '';

$zolo_authorLink = sprintf(
    '<a href="%1$s" class="zolo-post-author-link">%2$s</a>',
    esc_url( $zolo_author_posts_url ),
    esc_html( $zolo_author_name ),
);

$zolo_author_prefix = ! empty( $settings['authorPrefix'] ) ? $settings['authorPrefix'] : 'By';

if ( ! empty( $settings['showAuthor'] ) ) {
    $zolo_author .= sprintf(
        '<div class="zolo-post-author-name">
            <span>%2$s</span>
            %1$s
        </div>',
        $zolo_authorLink,
        $zolo_author_prefix
    );
}

return $zolo_author;
