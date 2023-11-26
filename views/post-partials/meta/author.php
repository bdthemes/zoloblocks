<?php
$author   = '';

// get author posts archive link
// var_dump($result);
$author_posts_url = get_author_posts_url(get_the_author_meta('ID'));
$author_name     = $result->author ?? '';
$authorLink = sprintf(
    '<a href="%1$s" class="zolo-post-author-link">%2$s</a>',
    esc_url($author_posts_url),
    esc_html($author_name),
);

$avatar = $result->avatar;

if (!empty($settings['showAuthor'])) {
    $author .= sprintf(
        '<div class="zolo-post-meta-box">
            %2$s
            <div class="zolo-post-meta-content">
                <span>Posted By</span>
                %1$s
            </div>
        </div>',
        $authorLink,
        $avatar,
    );
}

return $author;
