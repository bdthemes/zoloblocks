<?php
$author   = '';
$authorName = $result->author_link;
$avatar = $result->avatar;
if (!empty($settings['showAuthor'])) {
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
}

return $author;
