<?php
$author   = '';
$authorName = $result->author_link;
$avatar = $result->avatar;
if (!empty($settings['showAuthor']) && 'post-grid' == $settings['name']) {
    $author .= sprintf(
        '<div class="zolo-post-meta-box">
            %2$s
            <div class="zolo-post-meta-content">
                <span>posted by</span>
                %1$s
            </div>
        </div>',
        $authorName,
        $avatar,
    );
} elseif (!empty($settings['showAuthor']) && 'post-list' == $settings['name']) {
    $author .= sprintf(
        '<div class="zolo-post-author-name">
            <span>by</span>
            %1$s
        </div>',
        $authorName,
    );
}

return $author;
