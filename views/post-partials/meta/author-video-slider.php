<?php
$author           = '';
$author_posts_url = get_author_posts_url( get_the_author_meta( 'ID' ) );
$author_name      = $result->author ?? '';

$authorLink = sprintf(
    '<a href="%1$s" class="zolo-post-author-link">%2$s</a>',
    esc_url( $author_posts_url ),
    esc_html( $author_name ),
);

$author_prefix = ! empty( $settings['authorPrefix'] ) ? $settings['authorPrefix'] : 'By';

if ( ! empty( $settings['showAuthor'] ) ) {
    $author .= sprintf(
        '<div class="zolo-post-author-name">
            <span>%2$s</span>
            %1$s
        </div>',
        $authorLink,
        $author_prefix
    );
}

return $author;
