<?php
$author = '';

$author_posts_url = get_author_posts_url(get_the_author_meta('ID'));
$author_name = $result->author ?? '';

$authorLink = sprintf(
    '<a href="%1$s" class="zolo-author-name">%2$s</a>',
    esc_url($author_posts_url),
    esc_html($author_name)
);

if (!empty($settings['showAuthor'])) {
    $author .= sprintf(
        '<div class="zolo-blog-author">%s</div>',
        $authorLink
    );
}

return $author;
