<?php

namespace Zolo\Blocks;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Facebook Feed block class
 */
class FacebookFeed extends PostBlock
{

    /**
     * Get default attributes
     *
     * @return array
     */
    public function get_default_attributes()
    {
        return array_merge(
            parent::$default_attributes,
            [
                'layoutType' => 'timeline',
                'postsPerPage' => 6,
                'showAvatar' => true,
                'showAuthor' => true,
                'showDate' => true,
                'showFacebookIcon' => true,
                'showContent' => true,
                'showImage' => true,
                'contentLength' => 150,
                'showReadMore' => true,
                'readMoreText' => 'Read more',
                'showReactions' => true,
                'showComments' => false,
                'showShares' => false,
                'galleryCardClickable' => false,
                'carouselAutoplay' => true,
                'carouselSpeed' => 3000,
                'carouselLoop' => true,
                'cacheExpiration' => 300, // 5 minutes - shorter cache for more frequent updates
                'zolo_fbColumnsRange' => 3,
                'zolo_TABfbColumnsRange' => 2,
                'zolo_MOBfbColumnsRange' => 1,
                'zolo_fbGapGap' => 20,
                'zolo_fbGapIsLinked' => true,
                'zolo_fbGapUnit' => 'px',
                'zolo_TABfbGapUnit' => 'px',
                'zolo_MOBfbGapUnit' => 'px',
            ]
        );
    }

    /**
     * Render the block
     *
     * @param array  $attributes Block attributes
     * @param string $content    Block content (optional)
     * @param object $block      Block object (optional)
     * @return string
     */
    public function render($attributes, $content = '', $block = null)
    {
        $attributes = \wp_parse_args($attributes, $this->get_default_attributes());

        // Extract attributes
        $unique_id = \esc_attr($attributes['uniqueId'] ?? 'zolo-fb-' . \uniqid());
        $layout_type = \esc_attr($attributes['layoutType'] ?? 'timeline');
        $posts_per_page = \absint($attributes['postsPerPage'] ?? 6);

        // Get Facebook credentials from WordPress options
        $facebook_page_id = get_option('zolo_facebook_page_id', '');
        $access_token = get_option('zolo_facebook_access_token', '');
        $facebook_url = $facebook_page_id ? 'https://www.facebook.com/' . \urlencode($facebook_page_id) : 'https://www.facebook.com';

        // Bypass cache in editor context (REST API requests or admin)
        $bypass_cache = \defined('REST_REQUEST') && REST_REQUEST;

        // Get posts from Facebook API or return empty if not configured
        if (!empty($facebook_page_id) && !empty($access_token)) {
            $posts = $this->get_facebook_posts_from_api($facebook_page_id, $access_token, $posts_per_page, $attributes['cacheExpiration'], $bypass_cache);
        } else {
            $posts = [];
        }

        // Return early if no posts
        if (empty($posts)) {
            return '';
        }

        // Start output buffering
        \ob_start();

        // Add responsive CSS
        echo $this->get_responsive_css($attributes, $unique_id);

?>
        <div class="parent-<?php echo $unique_id; ?> zolo-block <?php echo $unique_id; ?> zolo-facebook-feed zolo-facebook-feed-<?php echo $layout_type; ?>"
            data-unique-id="<?php echo $unique_id; ?>"
            data-layout="<?php echo $layout_type; ?>"
            data-columns="<?php echo \esc_attr($attributes['zolo_fbColumnsRange'] ?? 3); ?>"
            data-carousel-autoplay="<?php echo $attributes['carouselAutoplay'] ? 'true' : 'false'; ?>"
            data-carousel-speed="<?php echo \esc_attr($attributes['carouselSpeed'] ?? 3000); ?>"
            data-carousel-loop="<?php echo $attributes['carouselLoop'] ? 'true' : 'false'; ?>">

            <div class="zolo-fb-posts-container layout-<?php echo $layout_type; ?> zolo-facebook-feed-<?php echo $unique_id; ?>"
                style="<?php echo $this->get_container_style($attributes); ?>">

                <?php if ($layout_type === 'gallery') : ?>
                    <?php
                    // Filter posts to only show those with images for gallery layout
                    $posts_with_images = array_filter($posts, function ($post) {
                        return !empty($post['image']);
                    });
                    ?>
                    <?php foreach ($posts_with_images as $post) : ?>
                        <div class="zolo-fb-gallery-item">
                            <?php if ($attributes['galleryCardClickable']) : ?>
                                <a href="<?php echo \esc_url($facebook_url); ?>"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="zolo-fb-gallery-link">
                                    <img src="<?php echo \esc_url($post['image']); ?>"
                                        alt="<?php echo \esc_attr(!empty($post['content']) ? \substr($post['content'], 0, 50) : 'Facebook post'); ?>">
                                    <div class="zolo-fb-gallery-overlay">
                                        <?php if ($attributes['showAvatar']) : ?>
                                            <img src="<?php echo \esc_url($post['avatar']); ?>"
                                                alt="<?php echo \esc_attr($post['author']); ?>"
                                                class="zolo-fb-gallery-avatar">
                                        <?php endif; ?>
                                        <div class="zolo-fb-gallery-info">
                                            <?php if ($attributes['showAuthor']) : ?>
                                                <div class="zolo-fb-gallery-author"><?php echo \esc_html($post['author']); ?></div>
                                            <?php endif; ?>
                                            <?php if ($attributes['showDate']) : ?>
                                                <div class="zolo-fb-gallery-date"><?php echo \esc_html($post['date']); ?></div>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </a>
                            <?php else : ?>
                                <div class="zolo-fb-gallery-link">
                                    <img src="<?php echo \esc_url($post['image']); ?>"
                                        alt="<?php echo \esc_attr(!empty($post['content']) ? \substr($post['content'], 0, 50) : 'Facebook post'); ?>">
                                    <div class="zolo-fb-gallery-overlay">
                                        <?php if ($attributes['showAvatar']) : ?>
                                            <a href="<?php echo \esc_url($facebook_url); ?>"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="zolo-fb-gallery-avatar-link">
                                                <img src="<?php echo \esc_url($post['avatar']); ?>"
                                                    alt="<?php echo \esc_attr($post['author']); ?>"
                                                    class="zolo-fb-gallery-avatar">
                                            </a>
                                        <?php endif; ?>
                                        <div class="zolo-fb-gallery-info">
                                            <?php if ($attributes['showAuthor']) : ?>
                                                <a href="<?php echo \esc_url($facebook_url); ?>"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="zolo-fb-gallery-author-link">
                                                    <div class="zolo-fb-gallery-author"><?php echo \esc_html($post['author']); ?></div>
                                                </a>
                                            <?php endif; ?>
                                            <?php if ($attributes['showDate']) : ?>
                                                <div class="zolo-fb-gallery-date"><?php echo \esc_html($post['date']); ?></div>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                <?php else : ?>
                    <?php foreach ($posts as $post) : ?>
                        <div class="zolo-fb-post">
                            <div class="zolo-fb-post-header">
                                <?php if ($attributes['showAvatar']) : ?>
                                    <a href="<?php echo \esc_url($facebook_url); ?>"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="zolo-fb-avatar-link">
                                        <img src="<?php echo \esc_url($post['avatar']); ?>"
                                            alt="<?php echo \esc_attr($post['author']); ?>"
                                            class="zolo-fb-avatar">
                                    </a>
                                <?php endif; ?>

                                <div class="zolo-fb-meta">
                                    <?php if ($attributes['showAuthor']) : ?>
                                        <a href="<?php echo \esc_url($facebook_url); ?>"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="zolo-fb-author-link">
                                            <div class="zolo-fb-author"><?php echo \esc_html($post['author']); ?></div>
                                        </a>
                                    <?php endif; ?>

                                    <?php if ($attributes['showDate']) : ?>
                                        <div class="zolo-fb-date"><?php echo \esc_html($post['date']); ?></div>
                                    <?php endif; ?>
                                </div>

                                <?php if ($attributes['showFacebookIcon']) : ?>
                                    <a href="<?php echo \esc_url($facebook_url); ?>"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="zolo-fb-icon"
                                        title="<?php echo \esc_attr__('Visit Facebook Page', 'zoloblocks'); ?>">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877f2">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                <?php endif; ?>
                            </div>

                            <?php if ($attributes['showContent'] && !empty($post['content'])) : ?>
                                <div class="zolo-fb-content" data-full-text="<?php echo \esc_attr($post['content']); ?>">
                                    <p><?php echo \esc_html($this->truncate_content($post['content'], $attributes['contentLength'])); ?></p>

                                    <?php if (!empty($post['hashtags'])) : ?>
                                        <div class="zolo-fb-hashtags">
                                            <?php foreach ($post['hashtags'] as $tag) : ?>
                                                <span class="zolo-fb-hashtag"><?php echo \esc_html($tag); ?></span>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endif; ?>

                                    <?php if ($attributes['showReadMore'] && $attributes['contentLength'] > 0 && strlen($post['content']) > $attributes['contentLength']) : ?>
                                        <a href="#" class="zolo-fb-read-more"><?php echo \esc_html($attributes['readMoreText']); ?></a>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>

                            <?php if ($attributes['showImage'] && !empty($post['image'])) : ?>
                                <div class="zolo-fb-image">
                                    <img src="<?php echo \esc_url($post['image']); ?>" alt="<?php echo \esc_attr($post['author']); ?>">
                                </div>
                            <?php endif; ?>

                            <?php if (!empty($post['attachment']) && $post['attachment']['type'] === 'share') : ?>
                                <div class="zolo-fb-attachment">
                                    <a href="<?php echo \esc_url($post['attachment']['url']); ?>" target="_blank" rel="noopener noreferrer" class="zolo-fb-attachment-link">
                                        <?php if (!empty($post['attachment']['title'])) : ?>
                                            <div class="zolo-fb-attachment-domain"><?php echo \esc_html(parse_url($post['attachment']['url'], PHP_URL_HOST)); ?></div>
                                            <div class="zolo-fb-attachment-title"><?php echo \esc_html($post['attachment']['title']); ?></div>
                                        <?php endif; ?>
                                        <?php if (!empty($post['attachment']['description'])) : ?>
                                            <div class="zolo-fb-attachment-description"><?php echo \esc_html($post['attachment']['description']); ?></div>
                                        <?php endif; ?>
                                    </a>
                                </div>
                            <?php endif; ?>

                            <?php if ($attributes['showReactions'] || $attributes['showComments'] || $attributes['showShares']) : ?>
                                <div class="zolo-fb-reactions">
                                    <?php if ($attributes['showReactions'] && ($post['reactions'] ?? 0) > 0) : ?>
                                        <div class="zolo-fb-reaction-icons">
                                            <?php
                                            foreach (array_filter($post['reaction_types'] ?? []) as $type => $count) {
                                                echo $this->get_reaction_emoji($type);
                                            }
                                            ?>
                                            <span class="zolo-fb-reaction-count"><?php echo \esc_html($post['reactions']); ?></span>
                                        </div>
                                    <?php endif; ?>
                                    <div class="zolo-fb-engagement-stats">
                                        <?php if ($attributes['showComments'] && ($post['comments'] ?? 0) > 0) : ?>
                                            <span class="zolo-fb-stat-item"><?php echo \esc_html(\sprintf('%d Comments', $post['comments'])); ?></span>
                                        <?php endif; ?>
                                        <?php if ($attributes['showShares'] && ($post['shares'] ?? 0) > 0) : ?>
                                            <span class="zolo-fb-stat-item"><?php echo \esc_html(\sprintf('%d Shares', $post['shares'])); ?></span>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
<?php
        return \ob_get_clean();
    }

    /**
     * Get container style based on layout
     *
     * @param array $attributes Block attributes
     * @return string
     */
    private function get_container_style($attributes)
    {
        $layout = $attributes['layoutType'] ?? 'timeline';

        if (!in_array($layout, ['grid', 'masonry', 'gallery'], true)) {
            return '';
        }

        $cols = $attributes['zolo_fbColumnsRange'] ?? 3;
        $is_linked = $attributes['zolo_fbGapIsLinked'] ?? true;
        $unit = $attributes['zolo_fbGapUnit'] ?? 'px';
        $gap = $attributes['zolo_fbGapGap'] ?? 20;

        if ($layout === 'grid' || $layout === 'gallery') {
            $gap_style = $is_linked
                ? "gap: {$gap}{$unit};"
                : \sprintf(
                    'row-gap: %d%s; column-gap: %d%s;',
                    $attributes['zolo_fbGapRowGap'] ?? 20,
                    $unit,
                    $attributes['zolo_fbGapColGap'] ?? 20,
                    $unit
                );
            return "display: grid; grid-template-columns: repeat({$cols}, 1fr); {$gap_style}";
        }

        $col_gap = $is_linked ? $gap : ($attributes['zolo_fbGapColGap'] ?? 20);
        return "column-count: {$cols}; column-gap: {$col_gap}{$unit};";
    }

    /**
     * Get responsive CSS for columns and gap
     *
     * @param array  $attributes Block attributes
     * @param string $unique_id  Unique block ID
     * @return string
     */
    private function get_responsive_css($attributes, $unique_id)
    {
        $layout = $attributes['layoutType'] ?? 'timeline';

        if (!in_array($layout, ['grid', 'masonry', 'timeline', 'carousel', 'gallery'], true)) {
            return '';
        }

        $default_gap = $attributes['zolo_fbGapGap'] ?? 20;
        $desktop = [
            'cols' => $attributes['zolo_fbColumnsRange'] ?? 3,
            'is_linked' => $attributes['zolo_fbGapIsLinked'] ?? true,
            'gap' => $default_gap,
            'row_gap' => $attributes['zolo_fbGapRowGap'] ?? $default_gap,
            'col_gap' => $attributes['zolo_fbGapColGap'] ?? $default_gap,
            'unit' => $attributes['zolo_fbGapUnit'] ?? 'px',
        ];

        $tablet = [
            'cols' => $attributes['zolo_TABfbColumnsRange'] ?? $desktop['cols'],
            'is_linked' => $attributes['zolo_TABfbGapIsLinked'] ?? $desktop['is_linked'],
            'gap' => $attributes['zolo_TABfbGapGap'] ?? $desktop['gap'],
            'row_gap' => $attributes['zolo_TABfbGapRowGap'] ?? $desktop['row_gap'],
            'col_gap' => $attributes['zolo_TABfbGapColGap'] ?? $desktop['col_gap'],
            'unit' => $attributes['zolo_TABfbGapUnit'] ?? $desktop['unit'],
        ];

        $mobile = [
            'cols' => $attributes['zolo_MOBfbColumnsRange'] ?? $tablet['cols'],
            'is_linked' => $attributes['zolo_MOBfbGapIsLinked'] ?? $tablet['is_linked'],
            'gap' => $attributes['zolo_MOBfbGapGap'] ?? $tablet['gap'],
            'row_gap' => $attributes['zolo_MOBfbGapRowGap'] ?? $tablet['row_gap'],
            'col_gap' => $attributes['zolo_MOBfbGapColGap'] ?? $tablet['col_gap'],
            'unit' => $attributes['zolo_MOBfbGapUnit'] ?? $tablet['unit'],
        ];

        return \sprintf(
            '<style>%s@media (max-width: 1024px) {%s}@media (max-width: 767px) {%s}</style>',
            $this->generate_layout_css($layout, $unique_id, $desktop),
            $this->generate_layout_css($layout, $unique_id, $tablet, true),
            $this->generate_layout_css($layout, $unique_id, $mobile, true)
        );
    }

    /**
     * Generate layout-specific CSS
     *
     * @param string $layout Layout type
     * @param string $unique_id Unique block ID
     * @param array  $config Configuration array
     * @param bool   $responsive Whether this is for responsive breakpoint
     * @return string
     */
    private function generate_layout_css($layout, $unique_id, $config, $responsive = false)
    {
        $important = $responsive ? ' !important' : '';
        $unit = $config['unit'];
        $gap_css = $config['is_linked']
            ? "gap: {$config['gap']}{$unit};"
            : "row-gap: {$config['row_gap']}{$unit}; column-gap: {$config['col_gap']}{$unit};";

        switch ($layout) {
            case 'timeline':
                return ".zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-{$unique_id} { {$gap_css} }";

            case 'carousel':
                return ".zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-{$unique_id} .swiper { {$gap_css} }";

            case 'grid':
                return ".zolo-fb-posts-container.layout-grid.zolo-facebook-feed-{$unique_id} { grid-template-columns: repeat({$config['cols']}, 1fr){$important}; {$gap_css} }";

            case 'masonry':
                $col_gap = $config['is_linked'] ? $config['gap'] : $config['col_gap'];
                $row_gap = $config['is_linked'] ? $config['gap'] : $config['row_gap'];
                return \sprintf(
                    '.zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-%s { column-count: %d%s; column-gap: %d%s; } .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-%s .zolo-fb-post { margin-bottom: %d%s; }',
                    $unique_id,
                    $config['cols'],
                    $important,
                    $col_gap,
                    $unit,
                    $unique_id,
                    $row_gap,
                    $unit
                );

            case 'gallery':
                return ".zolo-fb-posts-container.layout-gallery.zolo-facebook-feed-{$unique_id} { grid-template-columns: repeat({$config['cols']}, 1fr){$important}; {$gap_css} }";

            default:
                return '';
        }
    }

    /**
     * Truncate content to specified length
     *
     * @param string $content Content to truncate
     * @param int    $length  Maximum length
     * @return string
     */
    private function truncate_content($content, $length)
    {
        if ($length === 0 || strlen($content) <= $length) {
            return $content;
        }

        return substr($content, 0, $length) . '...';
    }

    /**
     * Get Facebook posts from API
     *
     * @param string $page_id Page ID or username
     * @param string $access_token Facebook access token
     * @param int    $count Number of posts to retrieve
     * @param int    $cache_expiration Cache expiration in seconds
     * @param bool   $bypass_cache Whether to bypass cache
     * @return array
     */
    private function get_facebook_posts_from_api($page_id, $access_token, $count = 6, $cache_expiration = 3600, $bypass_cache = false)
    {
        // Create cache key
        $cache_key = 'zolo_fb_posts_' . \md5($page_id . $access_token . $count);

        // Try to get from cache (skip if force refresh or editor context)
        if (!$bypass_cache && empty($_GET['fb_refresh']) && empty($_GET['nocache'])) {
            $cached_posts = \get_transient($cache_key);
            if ($cached_posts !== false) {
                return $cached_posts;
            }
        }

        // Fetch from Facebook Graph API
        $api_url = \sprintf(
            'https://graph.facebook.com/v18.0/%s/posts?fields=id,message,created_time,full_picture,attachments{title,description,media_type,type,url,unshimmed_url,target{id}},reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(CARE).limit(0).summary(total_count).as(reactions_care),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry),reactions.limit(0).summary(total_count).as(reactions_total),comments.summary(true),shares&limit=%d&access_token=%s',
            \urlencode($page_id),
            $count,
            \urlencode($access_token)
        );

        $response = \wp_remote_get($api_url, [
            'timeout' => 15,
            'sslverify' => true,
        ]);

        if (\is_wp_error($response)) {
            return [];
        }

        $body = \wp_remote_retrieve_body($response);
        $data = \json_decode($body, true);

        if (empty($data['data'])) {
            return [];
        }

        // Format posts
        $posts = [];
        foreach ($data['data'] as $index => $post) {
            // Parse attachment if exists
            $attachment = null;
            $has_link_attachment = false;
            if (!empty($post['attachments']['data'][0])) {
                $attach_data = $post['attachments']['data'][0];
                $has_link_attachment = ($attach_data['type'] ?? '') === 'share';
                $attachment = [
                    'type' => $attach_data['type'] ?? '',
                    'media_type' => $attach_data['media_type'] ?? '',
                    'title' => $attach_data['title'] ?? '',
                    'description' => $attach_data['description'] ?? '',
                    'url' => $attach_data['unshimmed_url'] ?? $attach_data['url'] ?? '',
                ];
            }

            // Only use full_picture if it's not just a link preview thumbnail
            // If post has a link attachment, skip the image as it's just the preview
            $post_image = null;
            if (!empty($post['full_picture']) && !$has_link_attachment) {
                $post_image = $post['full_picture'];
            }

            $formatted_post = [
                'id' => $post['id'] ?? $index,
                'author' => $this->get_page_name($page_id, $access_token),
                'avatar' => $this->get_page_picture($page_id, $access_token),
                'date' => $this->format_date($post['created_time'] ?? ''),
                'content' => $post['message'] ?? '',
                'hashtags' => $this->extract_hashtags($post['message'] ?? ''),
                'image' => $post_image,
                'attachment' => $attachment,
                'reactions' => $post['reactions_total']['summary']['total_count'] ?? 0,
                'reaction_types' => [
                    'like' => $post['reactions_like']['summary']['total_count'] ?? 0,
                    'love' => $post['reactions_love']['summary']['total_count'] ?? 0,
                    'care' => $post['reactions_care']['summary']['total_count'] ?? 0,
                    'wow' => $post['reactions_wow']['summary']['total_count'] ?? 0,
                    'haha' => $post['reactions_haha']['summary']['total_count'] ?? 0,
                    'sad' => $post['reactions_sad']['summary']['total_count'] ?? 0,
                    'angry' => $post['reactions_angry']['summary']['total_count'] ?? 0,
                ],
                'comments' => $post['comments']['summary']['total_count'] ?? 0,
                'shares' => $post['shares']['count'] ?? 0,
            ];
            $posts[] = $formatted_post;
        }

        // Cache the results
        \set_transient($cache_key, $posts, $cache_expiration);

        return $posts;
    }

    /**
     * Get Facebook page name
     *
     * @param string $page_id Page ID
     * @param string $access_token Access token
     * @return string
     */
    private function get_page_name($page_id, $access_token)
    {
        $cache_key = 'zolo_fb_page_name_' . \md5($page_id);
        $cached_name = \get_transient($cache_key);

        if ($cached_name !== false) {
            return $cached_name;
        }

        $api_url = \sprintf(
            'https://graph.facebook.com/v18.0/%s?fields=name&access_token=%s',
            \urlencode($page_id),
            \urlencode($access_token)
        );

        $response = \wp_remote_get($api_url);

        if (!\is_wp_error($response)) {
            $body = \wp_remote_retrieve_body($response);
            $data = \json_decode($body, true);
            $name = $data['name'] ?? 'Facebook Page';
            \set_transient($cache_key, $name, 86400); // Cache for 24 hours
            return $name;
        }

        return 'Facebook Page';
    }

    /**
     * Get Facebook page profile picture
     *
     * @param string $page_id Page ID
     * @param string $access_token Access token
     * @return string
     */
    private function get_page_picture($page_id, $access_token)
    {
        $cache_key = 'zolo_fb_page_picture_' . \md5($page_id);
        $cached_picture = \get_transient($cache_key);

        if ($cached_picture !== false) {
            return $cached_picture;
        }

        $api_url = \sprintf(
            'https://graph.facebook.com/v18.0/%s/picture?type=small&redirect=false&access_token=%s',
            \urlencode($page_id),
            \urlencode($access_token)
        );

        $response = \wp_remote_get($api_url);

        if (!\is_wp_error($response)) {
            $body = \wp_remote_retrieve_body($response);
            $data = \json_decode($body, true);
            $picture = $data['data']['url'] ?? 'https://via.placeholder.com/50';
            \set_transient($cache_key, $picture, 86400); // Cache for 24 hours
            return $picture;
        }

        return 'https://via.placeholder.com/50';
    }

    /**
     * Format date to relative time
     *
     * @param string $date ISO date string
     * @return string
     */
    private function format_date($date)
    {
        if (empty($date)) {
            return '';
        }

        $diff = \time() - \strtotime($date);

        if ($diff < 60) return \__('Just now', 'zoloblocks');
        if ($diff < 3600) return \sprintf(\__('%d minutes ago', 'zoloblocks'), \floor($diff / 60));
        if ($diff < 86400) return \sprintf(\__('%d hours ago', 'zoloblocks'), \floor($diff / 3600));
        if ($diff < 604800) return \sprintf(\__('%d days ago', 'zoloblocks'), \floor($diff / 86400));

        return \sprintf(\__('%d weeks ago', 'zoloblocks'), \floor($diff / 604800));
    }

    /**
     * Extract hashtags from content
     *
     * @param string $content Post content
     * @return array
     */
    private function extract_hashtags($content)
    {
        \preg_match_all('/#(\w+)/', $content, $matches);
        return !empty($matches[0]) ? \array_slice($matches[0], 0, 5) : [];
    }

    /**
     * Get reaction emoji SVG
     *
     * @param string $type Reaction type (like, love, care, wow, haha, sad, angry)
     * @return string SVG markup
     */
    private function get_reaction_emoji($type)
    {
        $emojis = [
            'like' => '<svg class="zolo-fb-reaction-emoji like" width="18" height="18" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" fill="#2196F3" />
                <path d="M385.7 258.3c-4.2-23.8-24.9-41.9-49.8-41.9h-62.1c5.5-14.8 15.3-41.4 15.3-58.9 0-26.5-13.7-49.6-33.7-57.6-4.9-2-10.2-3-15.6-3-13.4 0-26.2 5.7-35.2 15.6-3.8 4.2-5.6 10.2-4.6 16.1l5.4 32.4c-7.9 20.8-28.7 53.1-45.6 62.1-6.9 3.7-11.3 10.8-11.3 18.6v112.8c0 11.5 9.3 20.8 20.8 20.8h9.1c3.6 13.8 16.1 24 30.9 24h120.3c23.5 0 43.9-16.4 48.8-39.2l21.2-99.7c1.5-7 .9-14.3-2.9-20.8-3.8-6.6-9.8-11.4-16.8-13.5z" fill="#FAFAFA" />
                <path d="M103.5 374.1h31.2c8.6 0 15.6-7 15.6-15.6V249.9c0-8.6-7-15.6-15.6-15.6h-31.2c-8.6 0-15.6 7-15.6 15.6v108.6c0 8.6 7 15.6 15.6 15.6z" fill="#FAFAFA" />
            </svg>',
            'love' => '<svg class="zolo-fb-reaction-emoji love" width="18" height="18" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" fill="#F44336" />
                <path d="M368.5 157.8c-33.5-33.5-87.8-33.5-121.3 0L256 149l-9.2-9.2c-33.5-33.5-87.8-33.5-121.3 0-33.5 33.5-33.5 87.8 0 121.3l130.5 130.5 130.5-130.5c33.5-33.5 33.5-87.8 0-121.3z" fill="#FAFAFA" />
            </svg>',
            'care' => '<svg class="zolo-fb-reaction-emoji care" width="18" height="18" viewBox="0 0 16 16"><linearGradient id="care-a" x1="-2.313" x2="-2.313" y1="19.862" y2="20.738" gradientTransform="matrix(16 0 0 -16 45 333)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f28a2d"></stop><stop offset="1" stop-color="#fde86f"></stop></linearGradient><path fill="url(#care-a)" fill-rule="evenodd" d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" clip-rule="evenodd"></path><radialGradient id="care-b" cx="-2.313" cy="20.313" r=".5" gradientTransform="matrix(16 0 0 -16 45 333)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f28a2d" stop-opacity="0"></stop><stop offset="1" stop-color="#f08423" stop-opacity=".34"></stop></radialGradient><path fill="url(#care-b)" fill-rule="evenodd" d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" clip-rule="evenodd"></path><linearGradient id="care-g" x1="-1.619" x2="-1.619" y1="18.2" y2="16.681" gradientTransform="matrix(3.4035 0 0 -.9374 13.51 22.37)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#482314"></stop><stop offset="1" stop-color="#9a4111"></stop></linearGradient><path fill="url(#care-g)" fill-rule="evenodd" d="M9.7 5.9c-.1-.3-3.3-.3-3.4 0-.1.3.6.7 1.7.7s1.8-.4 1.7-.7z" clip-rule="evenodd"></path><radialGradient id="care-h" cx="-3.9" cy="18.924" r=".872" gradientTransform="matrix(0 -2.1326 -2.1327 0 45.352 -4.046)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3b446b"></stop><stop offset=".688" stop-color="#202340"></stop></radialGradient><path fill="url(#care-h)" fill-rule="evenodd" d="M6 4.1c0 .7-.4.9-1 1-.6.1-1.1-.2-1.1-1 0-.6.3-1.4 1.1-1.4.7 0 1 .8 1 1.4z" clip-rule="evenodd"></path><path fill="#4e506a" fill-rule="evenodd" d="M4.9 3.1c.1.1.1.4-.1.5-.1.1-.3.2-.4 0s-.1-.3 0-.5c.2-.1.4-.1.5 0z" clip-rule="evenodd"></path><radialGradient id="care-i" cx="-3.914" cy="18.924" r=".872" gradientTransform="matrix(0 -2.1326 -2.1327 0 51.366 -4.077)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3b446b"></stop><stop offset=".688" stop-color="#202340"></stop></radialGradient><path fill="url(#care-i)" fill-rule="evenodd" d="M10 4.1c0 .7.4.9 1.1 1 .6.1 1.1-.2 1.1-1 0-.6-.3-1.4-1.1-1.4S10 3.5 10 4.1z" clip-rule="evenodd"></path><path fill="#4e506a" fill-rule="evenodd" d="M11 3.1c.1.1 0 .3-.1.5-.1.1-.3.1-.4 0s0-.3.1-.5c.2-.2.3-.2.4 0z" clip-rule="evenodd"></path><linearGradient id="care-l" x1="-2.17" x2="-2.407" y1="20.358" y2="19.647" gradientTransform="matrix(9.7496 0 0 -9.079 27.91 194.578)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f34462"></stop><stop offset="1" stop-color="#cc0820"></stop></linearGradient><path fill="url(#care-l)" fill-rule="evenodd" d="M9.7 8.5c-2.1-.6-2.8.8-2.8.8S7.1 7.7 5 7c-2-.6-3.2 1.3-3.3 2.4-.2 2.5 2 5.3 2.8 6.3.1.3.4.3.7.3 1.2-.3 4.6-1.4 5.9-3.6.5-1.1.6-3.3-1.4-3.9z" clip-rule="evenodd"></path><radialGradient id="care-v" cx="15.654" cy="7.737" r="8.846" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eda83a"></stop><stop offset="1" stop-color="#ffdc5e"></stop></radialGradient><path fill="url(#care-v)" d="M14.3 7.8c.3-.6.8-.4 1.1-.3.4.1.7.4.7 1 0 1.5-.2 2.9-1.5 4.3-2.3 2.6-6.2 2.2-6.6.6-.3-1.2 1.1-1.4 1.6-1.4v-.1c-.2-.1-.3-.2-.5-.3-.4-.3-.3-.9.2-.8.6.1 1.4.3 2 .2 1.9-.2 2.2-1.7 3-3.2z"></path></svg>',
            'wow' => '<svg class="zolo-fb-reaction-emoji wow" width="18" height="18" viewBox="0 0 16 16" fill="none"><path fill="url(#wow-a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"></path><path fill="url(#wow-b)" d="M5.643 10.888C5.485 12.733 6.37 14 8 14c1.63 0 2.515-1.267 2.357-3.112C10.2 9.042 9.242 8 8 8c-1.242 0-2.2 1.042-2.357 2.888Z"></path><path fill="url(#wow-c)" d="M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5Zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5Z"></path><path fill="#4E506A" d="M4.481 4.567c.186.042.29.252.232.47-.057.217-.254.36-.44.317-.186-.042-.29-.252-.232-.47.057-.216.254-.36.44-.317Zm6.659.063c.205.047.321.28.258.52-.064.243-.282.4-.49.354-.205-.046-.322-.28-.258-.52.063-.243.282-.4.49-.354Z"></path><path fill="url(#wow-d)" d="M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 0 1-.087.594.344.344 0 0 1-.387-.06c-.275-.26-.656-.4-.992-.37a.8.8 0 0 0-.59.332.346.346 0 0 1-.49.068.368.368 0 0 1-.068-.507 1.49 1.49 0 0 1 1.085-.612Zm-7.665.555c.371-.353.86-.553 1.372-.562a1.49 1.49 0 0 1 1.242.619.369.369 0 0 1-.066.507.347.347 0 0 1-.492-.068.8.8 0 0 0-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 0 1-.496-.024.368.368 0 0 1 .022-.51Z"></path><defs><linearGradient id="wow-a" x1="8" x2="8" y1="1.64" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#FEEA70"></stop><stop offset="1" stop-color="#F69B30"></stop></linearGradient><linearGradient id="wow-b" x1="8" x2="8" y1="8" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#472315"></stop><stop offset="1" stop-color="#8B3A0E"></stop></linearGradient><linearGradient id="wow-c" x1="8" x2="8" y1="4" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="#191A33"></stop><stop offset=".872" stop-color="#3B426A"></stop></linearGradient><linearGradient id="wow-d" x1="8" x2="8" y1="1.688" y2="2.888" gradientUnits="userSpaceOnUse"><stop stop-color="#E78E0D"></stop><stop offset="1" stop-color="#CB6000"></stop></linearGradient></defs></svg>',
            'haha' => '<svg class="zolo-fb-reaction-emoji haha" width="18" height="18" viewBox="0 0 16 16" fill="none"><path fill="url(#haha-a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"></path><path fill="url(#haha-b)" d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"></path><path fill="url(#haha-c)" d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"></path><path fill="#2A3755" d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"></path><defs><linearGradient id="haha-a" x1="8" x2="8" y1="1.64" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#FEEA70"></stop><stop offset="1" stop-color="#F69B30"></stop></linearGradient><linearGradient id="haha-b" x1="8" x2="8" y1="7" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#472315"></stop><stop offset="1" stop-color="#8B3A0E"></stop></linearGradient><linearGradient id="haha-c" x1="8.005" x2="8.005" y1="11" y2="13.457" gradientUnits="userSpaceOnUse"><stop stop-color="#FC607C"></stop><stop offset="1" stop-color="#D91F3A"></stop></linearGradient></defs></svg>',
            'sad' => '<svg class="zolo-fb-reaction-emoji sad" width="18" height="18" viewBox="0 0 16 16" fill="none"><path fill="url(#sad-a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"></path><path fill="url(#sad-b)" d="M5.333 12.765c0 .137.094.235.25.235.351 0 .836-.625 2.417-.625s2.067.625 2.417.625c.156 0 .25-.098.25-.235C10.667 12.368 9.828 11 8 11c-1.828 0-2.667 1.368-2.667 1.765Z"></path><path fill="url(#sad-c)" d="M3.599 8.8c0-.81.509-1.466 1.134-1.466.627 0 1.134.656 1.134 1.466 0 .338-.09.65-.238.898a.492.492 0 0 1-.301.225c-.14.037-.353.077-.595.077-.243 0-.453-.04-.595-.077a.49.49 0 0 1-.3-.225 1.741 1.741 0 0 1-.24-.898Zm6.534 0c0-.81.508-1.466 1.133-1.466.627 0 1.134.656 1.134 1.466 0 .338-.09.65-.238.898a.49.49 0 0 1-.301.225c-.39.101-.8.101-1.19 0a.49.49 0 0 1-.3-.225 1.74 1.74 0 0 1-.238-.898Z"></path><path fill="#4E506A" d="M4.616 7.986c.128.125.136.372.017.55-.12.179-.32.223-.448.097-.128-.125-.135-.372-.017-.55.12-.18.32-.222.448-.097Zm6.489 0c.128.125.136.372.018.55-.12.179-.32.223-.45.097-.127-.125-.134-.372-.015-.55.119-.18.319-.222.447-.097Z"></path><path fill="url(#sad-e)" d="M4.157 5.153c.332-.153.596-.22.801-.22.277 0 .451.12.55.307.175.329.096.4-.198.459-1.106.224-2.217.942-2.699 1.39-.3.28-.589-.03-.436-.274.154-.244.774-1.105 1.982-1.662Zm6.335.087c.1-.187.273-.306.55-.306.206 0 .47.066.801.219 1.208.557 1.828 1.418 1.981 1.662.153.244-.134.554-.435.274-.483-.448-1.593-1.166-2.7-1.39-.294-.058-.37-.13-.197-.46Z"></path><path fill="url(#sad-f)" d="M13.5 16c-.828 0-1.5-.748-1.5-1.671 0-.922.356-1.545.643-2.147.598-1.258.716-1.432.857-1.432.141 0 .259.174.857 1.432.287.602.643 1.225.643 2.147 0 .923-.672 1.671-1.5 1.671Z"></path><path fill="url(#sad-g)" d="M13.5 13.606c-.328 0-.594-.296-.594-.66 0-.366.141-.613.255-.852.236-.498.283-.566.34-.566.055 0 .102.068.338.566.114.24.255.486.255.851s-.266.661-.594.661"></path><defs><linearGradient id="sad-a" x1="8" x2="8" y1="1.64" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#FEEA70"></stop><stop offset="1" stop-color="#F69B30"></stop></linearGradient><linearGradient id="sad-b" x1="8" x2="8" y1="11" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="#472315"></stop><stop offset="1" stop-color="#8B3A0E"></stop></linearGradient><linearGradient id="sad-c" x1="7.999" x2="7.999" y1="7.334" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#191A33"></stop><stop offset=".872" stop-color="#3B426A"></stop></linearGradient><linearGradient id="sad-e" x1="8" x2="8" y1="4.934" y2="7.199" gradientUnits="userSpaceOnUse"><stop stop-color="#E78E0D"></stop><stop offset="1" stop-color="#CB6000"></stop></linearGradient><linearGradient id="sad-f" x1="13.5" x2="13.5" y1="15.05" y2="11.692" gradientUnits="userSpaceOnUse"><stop stop-color="#35CAFC"></stop><stop offset="1" stop-color="#007EDB"></stop></linearGradient><linearGradient id="sad-g" x1="13.5" x2="13.5" y1="11.528" y2="13.606" gradientUnits="userSpaceOnUse"><stop stop-color="#6AE1FF" stop-opacity=".287"></stop><stop offset="1" stop-color="#A8E3FF" stop-opacity=".799"></stop></linearGradient></defs></svg>',
            'angry' => '<svg class="zolo-fb-reaction-emoji angry" width="18" height="18" viewBox="0 0 16 16" fill="none"><path fill="url(#angry-a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"></path><path fill="url(#angry-c)" d="M5.2 13.551c0 .528 1.253.444 2.8.444 1.546 0 2.8.084 2.8-.444 0-.636-1.254-1.051-2.8-1.051-1.547 0-2.8.415-2.8 1.051Z"></path><path fill="url(#angry-d)" d="M3.6 9.831c0-.79.538-1.43 1.2-1.43.663 0 1.2.64 1.2 1.43 0 .33-.093.633-.252.874a.527.527 0 0 1-.318.22c-.15.036-.373.075-.63.075s-.481-.039-.63-.075a.524.524 0 0 1-.318-.22 1.588 1.588 0 0 1-.252-.874Zm6.4 0c0-.79.537-1.43 1.2-1.43.662 0 1.2.64 1.2 1.43 0 .33-.094.633-.252.874a.524.524 0 0 1-.318.22c-.207.05-.418.075-.63.075-.257 0-.48-.039-.63-.075a.53.53 0 0 1-.32-.22 1.596 1.596 0 0 1-.25-.874Z"></path><path fill="#4F4F67" d="M4.968 9.333a.33.33 0 0 1 .007.07c0 .202-.176.367-.394.367-.217 0-.393-.165-.393-.366 0-.083.03-.16.08-.221.224.053.46.104.7.15Zm5.927.437c-.211 0-.383-.153-.393-.348.258-.038.515-.085.765-.136.014.038.021.078.02.119 0 .2-.175.365-.393.365Z"></path><path fill="url(#angry-g)" d="M9 7.6c0-.446.163-.6.445-.6.28 0 .414.276.506 1.066 1.128 0 3.038-.534 3.222-.534.178 0 .277.085.317.267.035.158-.023.308-.221.4-.621.287-2.443.935-3.984.935-.168 0-.285-.086-.285-.301V7.6Zm-2.951.466C6.14 7.276 6.275 7 6.555 7c.282 0 .445.154.445.6v1.233c0 .215-.117.301-.285.301-1.541 0-3.363-.648-3.984-.935-.198-.092-.256-.242-.221-.4.04-.182.14-.267.317-.267.184 0 2.094.534 3.222.534Z"></path><defs><linearGradient id="angry-a" x1="8" x2="8" y2="10.751" gradientUnits="userSpaceOnUse"><stop stop-color="#E04300"></stop><stop offset="1" stop-color="#FFA320"></stop></linearGradient><linearGradient id="angry-c" x1="8" x2="8" y1="12.703" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#3D0D00"></stop><stop offset="1" stop-color="#661C04"></stop></linearGradient><linearGradient id="angry-d" x1="8" x2="8" y1="8.4" y2="11" gradientUnits="userSpaceOnUse"><stop stop-color="#191A33"></stop><stop offset=".872" stop-color="#3B426A"></stop></linearGradient><linearGradient id="angry-g" x1="11.615" x2="11.615" y1="9.333" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="#9A2F00"></stop><stop offset="1" stop-color="#D44800"></stop></linearGradient></defs></svg>',
        ];

        return $emojis[$type] ?? '';
    }
}
