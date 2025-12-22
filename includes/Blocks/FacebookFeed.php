<?php

namespace Zolo\Blocks;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Facebook Feed block class
 */
class FacebookFeed extends PostBlock {
    
    /**
     * Get default attributes
     *
     * @return array
     */
    public function get_default_attributes() {
        return array_merge(
            parent::$default_attributes,
            [
                'layoutType' => 'timeline',
                'columns' => [
                    'desktop' => 3,
                    'tablet' => 2,
                    'mobile' => 1,
                ],
                'gap' => [
                    'desktop' => 20,
                    'tablet' => 15,
                    'mobile' => 10,
                ],
                'postsPerPage' => 6,
                'showAvatar' => true,
                'showAuthor' => true,
                'showDate' => true,
                'showContent' => true,
                'contentLength' => 150,
                'showReadMore' => true,
                'readMoreText' => 'Read more',
                'showReactions' => true,
                'showComments' => false,
                'showShares' => false,
                'carouselAutoplay' => true,
                'carouselSpeed' => 3000,
                'carouselLoop' => true,
                'facebookPageId' => '',
                'facebookAccessToken' => '',
                'cacheExpiration' => 3600,
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
    public function render($attributes, $content = '', $block = null) {
        $attributes = \wp_parse_args($attributes, $this->get_default_attributes());

        // Extract attributes
        $unique_id = \esc_attr($attributes['uniqueId'] ?? 'zolo-fb-' . \uniqid());
        $layout_type = \esc_attr($attributes['layoutType'] ?? 'timeline');
        $posts_per_page = \absint($attributes['postsPerPage'] ?? 6);
        
        $facebook_page_id = $attributes['facebookPageId'] ?? '';
        $access_token = $attributes['facebookAccessToken'] ?? '';
        $facebook_url = !empty($facebook_page_id) ? 'https://www.facebook.com/' . \urlencode($facebook_page_id) : 'https://www.facebook.com';

        // Get posts from Facebook or use demo data
        if (!empty($facebook_page_id) && !empty($access_token)) {
            $posts = $this->get_facebook_posts_from_api($facebook_page_id, $access_token, $posts_per_page, $attributes['cacheExpiration']);
        } else {
            $posts = $this->get_demo_posts($posts_per_page);
        }

        // Start output buffering
        \ob_start();
        ?>
        <div class="zolo-facebook-feed zolo-facebook-feed-<?php echo $layout_type; ?>" 
             data-unique-id="<?php echo $unique_id; ?>"
             data-layout="<?php echo $layout_type; ?>"
             data-carousel-autoplay="<?php echo $attributes['carouselAutoplay'] ? 'true' : 'false'; ?>"
             data-carousel-speed="<?php echo \esc_attr($attributes['carouselSpeed']); ?>"
             data-carousel-loop="<?php echo $attributes['carouselLoop'] ? 'true' : 'false'; ?>">
            
            <div class="zolo-fb-posts-container layout-<?php echo $layout_type; ?>"
                 style="<?php echo $this->get_container_style($attributes); ?>">
                
                <?php foreach ($posts as $post) : ?>
                    <div class="zolo-fb-post">
                        <div class="zolo-fb-post-header">
                            <?php if ($attributes['showAvatar']) : ?>
                                <img src="<?php echo \esc_url($post['avatar']); ?>" 
                                     alt="<?php echo \esc_attr($post['author']); ?>" 
                                     class="zolo-fb-avatar">
                            <?php endif; ?>
                            
                            <div class="zolo-fb-meta">
                                <?php if ($attributes['showAuthor']) : ?>
                                    <div class="zolo-fb-author"><?php echo \esc_html($post['author']); ?></div>
                                <?php endif; ?>
                                
                                <?php if ($attributes['showDate']) : ?>
                                    <div class="zolo-fb-date"><?php echo \esc_html($post['date']); ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <a href="<?php echo \esc_url($facebook_url); ?>" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="zolo-fb-icon"
                               title="<?php echo \esc_attr__('Visit Facebook Page', 'zoloblocks'); ?>">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877f2">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
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

                        <?php if (!empty($post['image'])) : ?>
                            <div class="zolo-fb-image">
                                <img src="<?php echo \esc_url($post['image']); ?>" alt="<?php echo \esc_attr($post['author']); ?>">
                            </div>
                        <?php endif; ?>

                        <?php if ($attributes['showReactions'] || $attributes['showComments'] || $attributes['showShares']) : ?>
                            <div class="zolo-fb-reactions">
                                <?php if ($attributes['showReactions'] && !empty($post['reactions']) && $post['reactions'] > 0) : ?>
                                    <div class="zolo-fb-reaction-icons">
                                        <svg class="zolo-fb-reaction-emoji like" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#1877f2"/>
                                            <path d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41" fill="#fff"/>
                                        </svg>
                                        <svg class="zolo-fb-reaction-emoji love" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#f33e58"/>
                                            <path d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41" fill="#fff"/>
                                        </svg>
                                        <span class="zolo-fb-reaction-count"><?php echo \esc_html($post['reactions']); ?></span>
                                    </div>
                                <?php endif; ?>
                                <div class="zolo-fb-engagement-stats">
                                    <?php if ($attributes['showComments'] && !empty($post['comments']) && $post['comments'] > 0) : ?>
                                        <span class="zolo-fb-stat-item"><?php echo \esc_html($post['comments']); ?> Comments</span>
                                    <?php endif; ?>
                                    <?php if ($attributes['showShares'] && !empty($post['shares']) && $post['shares'] > 0) : ?>
                                        <span class="zolo-fb-stat-item"><?php echo \esc_html($post['shares']); ?> Shares</span>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
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
    private function get_container_style($attributes) {
        $layout = $attributes['layoutType'];
        $styles = [];

        if ($layout === 'grid' || $layout === 'masonry') {
            $cols = $attributes['columns']['desktop'] ?? 3;
            $gap = $attributes['gap']['desktop'] ?? 20;
            $styles[] = "display: grid;";
            $styles[] = "grid-template-columns: repeat({$cols}, 1fr);";
            $styles[] = "gap: {$gap}px;";
            
            if ($layout === 'masonry') {
                $styles[] = "grid-auto-rows: 10px;";
            }
        }

        return implode(' ', $styles);
    }

    /**
     * Truncate content to specified length
     *
     * @param string $content Content to truncate
     * @param int    $length  Maximum length
     * @return string
     */
    private function truncate_content($content, $length) {
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
     * @return array
     */
    private function get_facebook_posts_from_api($page_id, $access_token, $count = 6, $cache_expiration = 3600) {
        // Create cache key
        $cache_key = 'zolo_fb_posts_' . \md5($page_id . $access_token . $count);
        
        // Try to get from cache
        $cached_posts = \get_transient($cache_key);
        if ($cached_posts !== false) {
            return $cached_posts;
        }

        // Fetch from Facebook Graph API
        $api_url = \sprintf(
            'https://graph.facebook.com/v18.0/%s/posts?fields=id,message,created_time,full_picture,likes.summary(true),comments.summary(true),shares&limit=%d&access_token=%s',
            \urlencode($page_id),
            $count,
            \urlencode($access_token)
        );

        $response = \wp_remote_get($api_url, [
            'timeout' => 15,
            'sslverify' => true,
        ]);

        if (\is_wp_error($response)) {
            // Return demo posts if API fails
            return $this->get_demo_posts($count);
        }

        $body = \wp_remote_retrieve_body($response);
        $data = \json_decode($body, true);

        if (empty($data['data'])) {
            // Return demo posts if no data
            return $this->get_demo_posts($count);
        }

        // Format posts
        $posts = [];
        foreach ($data['data'] as $index => $post) {
            $formatted_post = [
                'id' => $post['id'] ?? $index,
                'author' => $this->get_page_name($page_id, $access_token),
                'avatar' => $this->get_page_picture($page_id, $access_token),
                'date' => $this->format_date($post['created_time'] ?? ''),
                'content' => $post['message'] ?? '',
                'hashtags' => $this->extract_hashtags($post['message'] ?? ''),
                'image' => $post['full_picture'] ?? '',
                'reactions' => $post['likes']['summary']['total_count'] ?? 0,
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
    private function get_page_name($page_id, $access_token) {
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
    private function get_page_picture($page_id, $access_token) {
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
    private function format_date($date) {
        if (empty($date)) {
            return '';
        }

        $timestamp = \strtotime($date);
        $diff = \time() - $timestamp;

        if ($diff < 60) {
            return \__('Just now', 'zoloblocks');
        } elseif ($diff < 3600) {
            $mins = \floor($diff / 60);
            return \sprintf(\__('%d minutes ago', 'zoloblocks'), $mins);
        } elseif ($diff < 86400) {
            $hours = \floor($diff / 3600);
            return \sprintf(\__('%d hours ago', 'zoloblocks'), $hours);
        } elseif ($diff < 604800) {
            $days = \floor($diff / 86400);
            return \sprintf(\__('%d days ago', 'zoloblocks'), $days);
        } else {
            $weeks = \floor($diff / 604800);
            return \sprintf(\__('%d weeks ago', 'zoloblocks'), $weeks);
        }
    }

    /**
     * Extract hashtags from content
     *
     * @param string $content Post content
     * @return array
     */
    private function extract_hashtags($content) {
        \preg_match_all('/#(\w+)/', $content, $matches);
        return !empty($matches[0]) ? \array_slice($matches[0], 0, 5) : [];
    }

    /**
     * Get demo posts (fallback)
     *
     * @param int $count Number of posts to retrieve
     * @return array
     */
    private function get_demo_posts($count = 6) {
        // Demo posts - in production, fetch from Facebook API
        $demo_posts = [
            [
                'id' => 1,
                'author' => 'WP Social Ninja',
                'avatar' => 'https://via.placeholder.com/50',
                'date' => '2 weeks ago',
                'content' => 'The WP Social Ninja crew is all set for WordCamp Malaysia! 🇲🇾 Tomorrow, if you spot any of us at the venue, feel free to stop us, say hi, and let\'s chat about everything social media integration for WordPress sites! See you there!',
                'hashtags' => ['#WordCampMY', '#WCMY25', '#WordCamp'],
                'image' => 'https://via.placeholder.com/600x400',
                'reactions' => 12,
                'comments' => 5,
                'shares' => 2,
            ],
            [
                'id' => 2,
                'author' => 'WP Social Ninja',
                'avatar' => 'https://via.placeholder.com/50',
                'date' => '1 week ago',
                'content' => 'Exciting news! We just launched our new feature that helps you connect with your audience better. Check it out and let us know what you think!',
                'image' => 'https://via.placeholder.com/600x400',
                'reactions' => 22,
                'comments' => 8,
                'shares' => 4,
            ],
            [
                'id' => 3,
                'author' => 'WP Social Ninja',
                'avatar' => 'https://via.placeholder.com/50',
                'date' => '3 days ago',
                'content' => 'Thanks to all our amazing users for your continued support! We couldn\'t do this without you. 💙',
                'reactions' => 35,
                'comments' => 12,
                'shares' => 6,
            ],
            [
                'id' => 4,
                'author' => 'WP Social Ninja',
                'avatar' => 'https://via.placeholder.com/50',
                'date' => '5 days ago',
                'content' => 'Join us for an exclusive webinar on social media integration best practices!',
                'hashtags' => ['#Webinar', '#SocialMedia'],
                'image' => 'https://via.placeholder.com/600x400',
                'reactions' => 18,
                'comments' => 7,
                'shares' => 3,
            ],
            [
                'id' => 5,
                'author' => 'WP Social Ninja',
                'avatar' => 'https://via.placeholder.com/50',
                'date' => '1 day ago',
                'content' => 'New tutorial alert! Learn how to maximize engagement with our latest features.',
                'image' => 'https://via.placeholder.com/600x400',
                'reactions' => 28,
                'comments' => 10,
                'shares' => 5,
            ],
            [
                'id' => 6,
                'author' => 'WP Social Ninja',
                'avatar' => 'https://via.placeholder.com/50',
                'date' => '6 hours ago',
                'content' => 'Happy Friday everyone! What are your weekend plans?',
                'reactions' => 42,
                'comments' => 15,
                'shares' => 8,
            ],
        ];

        return array_slice($demo_posts, 0, $count);
    }
}
