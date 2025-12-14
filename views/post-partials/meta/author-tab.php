<?php
$zolo_author = '';

$zolo_author_posts_url = get_author_posts_url(get_the_author_meta('ID'));
$zolo_author_name = $zolo_result->author ?? '';

$zolo_authorLink = sprintf(
    '<a href="%1$s" class="zolo-author-name">%2$s</a>',
    esc_url($zolo_author_posts_url),
    esc_html($zolo_author_name)
);

if (!empty($settings['showAuthor'])) {
    $zolo_author .= sprintf(
        '<div class="zolo-blog-author">%s</div>',
        $zolo_authorLink
    );
}

return $zolo_author;
