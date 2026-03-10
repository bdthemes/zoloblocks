<?php

namespace Zolo\Blocks;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Instagram Feed block class
 */
class InstagramFeed extends PostBlock
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
                'layoutType' => 'grid',
                'postsPerPage' => 9,
                'showHeader' => true,
                'showUsername' => true,
                'showFollowers' => true,
                'showBio' => true,
                'showFollowButton' => true,
                'followButtonText' => 'Follow us on Instagram',
                'showCaption' => true,
                'captionLength' => 100,
                'showLikes' => true,
                'showComments' => true,
                'openInNewTab' => true,
                'enableLightbox' => false,
                'imageRatio' => 'square',
                'carouselAutoplay' => true,
                'carouselSpeed' => 3000,

                'igColumns' => [
                    'Desktop' => 3,
                    'Tablet' => 2,
                    'Mobile' => 1,
                ],
                'igGap' => [
                    'Desktop' => [
                        'linked' => true,
                        'first' => '20px',
                        'second' => '20px',
                    ],
                    'Tablet' => [],
                    'Mobile' => [],
                ],
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
        $unique_id = \esc_attr($attributes['uniqueId'] ?? 'zolo-ig-' . \uniqid());
        $layout_type = \esc_attr($attributes['layoutType'] ?? 'grid');
        $posts_per_page = \absint($attributes['postsPerPage'] ?? 9);

        // Get Instagram credentials from WordPress options
        $access_token = get_option('zolo_instagram_access_token', '');

        // Bypass cache in editor context (REST API requests or admin)
        $bypass_cache = \defined('REST_REQUEST') && REST_REQUEST;

        // Get cache expiration from global settings (default 12 hours)
        $cache_expiration = \get_option('zolo_instagram_cache_expiration', 12);

        // Get posts from Instagram API or return empty if not configured
        if (!empty($access_token)) {
            $data = $this->get_instagram_data($access_token, $posts_per_page, $cache_expiration, $bypass_cache);
        } else {
            $data = null;
        }

        // Return early if no data
        if (empty($data) || empty($data['media'])) {
            return '';
        }

        // Enqueue lightbox if enabled
        $enable_lightbox = $attributes['enableLightbox'] ?? false;
        if ($enable_lightbox) {
            \wp_enqueue_script('fslightbox');
        }

        // Start output buffering
        \ob_start();

        // Add responsive CSS
        echo $this->get_responsive_css($attributes, $unique_id);

        $desktop_columns = $attributes['igColumns']['Desktop'] ?? 3;
        $tablet_columns = $attributes['igColumns']['Tablet'] ?? 2;
        $mobile_columns = $attributes['igColumns']['Mobile'] ?? 1;

        // Gap for data attribute (using desktop gap as primary)
        $gap_object = $attributes['igGap']['Desktop'] ?? [];
        $gap = $gap_object['first'] ?? '20px';

?>
        <div class="parent-<?php echo $unique_id; ?> zolo-block <?php echo $unique_id; ?> zolo-instagram-feed zolo-instagram-feed-<?php echo $layout_type; ?>"
            data-layout="<?php echo $layout_type; ?>"
            data-unique-id="<?php echo $unique_id; ?>"
            data-lightbox="<?php echo $enable_lightbox ? 'true' : 'false'; ?>"
            data-entranceanimation="<?php echo \esc_attr($attributes['entranceAnimation'] ?? 'zolo-zoom-in'); ?>"
            data-showthumb="<?php echo ($attributes['showLightboxThumb'] ?? false) ? 'true' : 'false'; ?>"
            data-carousel-autoplay="<?php echo $attributes['carouselAutoplay'] ? 'true' : 'false'; ?>"
            data-carousel-speed="<?php echo \esc_attr($attributes['carouselSpeed']); ?>"
            data-carousel-loop="<?php echo $attributes['carouselLoop'] ? 'true' : 'false'; ?>"
            data-desktop-columns="<?php echo $desktop_columns; ?>"
            data-tablet-columns="<?php echo $tablet_columns; ?>"
            data-mobile-columns="<?php echo $mobile_columns; ?>"
            data-gap="<?php echo $gap; ?>">

            <div class="zolo-ig-container">
                <?php if ($attributes['showHeader']) : ?>
                    <div class="zolo-ig-header">
                        <div class="zolo-ig-profile">
                            <div class="zolo-ig-avatar">
                                <img src="<?php echo \esc_url($data['profile_picture']); ?>" alt="<?php echo \esc_attr($data['username']); ?>">
                            </div>
                            <div class="zolo-ig-profile-info">
                                <?php if ($attributes['showUsername']) : ?>
                                    <div class="zolo-ig-username">
                                        <a href="https://instagram.com/<?php echo \esc_attr($data['username']); ?>" target="_blank" rel="noopener noreferrer">
                                            @<?php echo \esc_html($data['username']); ?>
                                        </a>
                                    </div>
                                <?php endif; ?>

                                <div class="zolo-ig-stats">
                                    <span class="zolo-ig-posts">
                                        <strong><?php echo \esc_html($data['media_count']); ?></strong> Posts
                                    </span>
                                    <?php if ($attributes['showFollowers'] && isset($data['followers'])) : ?>
                                        <span class="zolo-ig-followers">
                                            <strong><?php echo \esc_html($data['followers']); ?></strong> Followers
                                        </span>
                                    <?php endif; ?>
                                </div>

                                <?php if ($attributes['showBio'] && !empty($data['bio'])) : ?>
                                    <div class="zolo-ig-bio"><?php echo \esc_html($data['bio']); ?></div>
                                <?php endif; ?>
                            </div>
                        </div>

                        <?php if ($attributes['showFollowButton']) : ?>
                            <a href="https://instagram.com/<?php echo \esc_attr($data['username']); ?>"
                                class="zolo-ig-follow-btn"
                                target="_blank"
                                rel="noopener noreferrer">
                                <?php echo \esc_html($attributes['followButtonText']); ?>
                            </a>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>

                <?php if ($layout_type === 'carousel') : ?>
                    <div class="zolo-ig-carousel">
                        <div class="swiper">
                            <div class="swiper-wrapper">
                                <?php foreach ($data['media'] as $index => $post) : ?>
                                    <div class="swiper-slide">
                                        <?php echo $this->render_post($post, $attributes); ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <div class="swiper-button-prev" role="button" aria-label="Previous slide" tabindex="0"></div>
                            <div class="swiper-button-next" role="button" aria-label="Next slide" tabindex="0"></div>
                            <div class="swiper-pagination" role="group" aria-label="Carousel pagination"></div>
                        </div>
                    </div>
                <?php else : ?>
                    <div class="zolo-ig-grid">
                        <?php foreach ($data['media'] as $index => $post) : ?>
                            <?php echo $this->render_post($post, $attributes); ?>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    <?php
        return \ob_get_clean();
    }

    /**
     * Render a single Instagram post
     *
     * @param array $post Post data
     * @param array $attributes Block attributes
     * @return string
     */
    private function render_post($post, $attributes)
    {
        $image_url = $post['media_type'] === 'VIDEO' ? $post['thumbnail_url'] : $post['media_url'];
        $caption = $post['caption'] ?? '';
        $truncated_caption = strlen($caption) > $attributes['captionLength']
            ? substr($caption, 0, $attributes['captionLength']) . '...'
            : $caption;

        $enable_lightbox = $attributes['enableLightbox'] ?? false;
        $link_href = $enable_lightbox ? $image_url : $post['permalink'];
        $link_target = $enable_lightbox ? '' : ($attributes['openInNewTab'] ? '_blank' : '_self');

        // Prepare lightbox data attributes
        $lightbox_attrs = '';
        if ($enable_lightbox) {
            $lightbox_attrs .= ' data-fslightbox="instagram-gallery-' . esc_attr($attributes['uniqueId']) . '"';

            // Add caption if enabled
            if ($attributes['showCaption'] && !empty($caption)) {
                $caption_html = '<div class="zolo-lightbox-content"><h3 class="zolo-lightbox-caption">' . esc_html($caption) . '</h3></div>';
                $lightbox_attrs .= ' data-caption="' . esc_attr($caption_html) . '"';
            }

            // Add thumbnail for videos or use a smaller image size if available
            if ($post['media_type'] === 'VIDEO' && !empty($post['thumbnail_url'])) {
                $lightbox_attrs .= ' data-thumb="' . esc_url($post['thumbnail_url']) . '"';
            } else {
                $lightbox_attrs .= ' data-thumb="' . esc_url($image_url) . '"';
            }
        }

        \ob_start();
    ?>
        <div class="zolo-ig-item <?php echo \esc_attr($attributes['imageRatio']); ?>">
            <div class="zolo-ig-item-inner">
                <a href="<?php echo \esc_url($link_href); ?>"
                    <?php if (!$enable_lightbox) : ?>target="<?php echo $link_target; ?>" <?php endif; ?>
                    rel="noopener noreferrer"
                    class="zolo-ig-link" <?php echo $lightbox_attrs; ?>>
                    <div class="zolo-ig-image-wrapper">
                        <div class="zolo-ig-instagram-icon">
                            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </div>
                        <img src="<?php echo \esc_url($image_url); ?>" alt="<?php echo \esc_attr($caption); ?>" loading="lazy">

                        <?php if ($post['media_type'] === 'VIDEO') : ?>
                            <div class="zolo-ig-video-icon">
                                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        <?php endif; ?>

                        <div class="zolo-ig-overlay">
                            <div class="zolo-ig-overlay-content">
                                <?php if ($attributes['showLikes'] && isset($post['like_count'])) : ?>
                                    <span class="zolo-ig-likes">
                                        <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                        <?php echo \esc_html($post['like_count']); ?>
                                    </span>
                                <?php endif; ?>

                                <?php if ($attributes['showComments'] && isset($post['comments_count'])) : ?>
                                    <span class="zolo-ig-comments">
                                        <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                                        </svg>
                                        <?php echo \esc_html($post['comments_count']); ?>
                                    </span>
                                <?php endif; ?>
                            </div>
                            <?php if ($attributes['showCaption'] && !empty($truncated_caption)) : ?>
                                <div class="zolo-ig-caption-overlay">
                                    <?php echo \esc_html($truncated_caption); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    <?php
        return \ob_get_clean();
    }

    /**
     * Get Instagram data from API
     *
     * @param string $access_token Instagram access token
     * @param int    $limit        Number of posts to fetch
     * @param int    $cache_expiration Cache expiration in seconds
     * @param bool   $bypass_cache Whether to bypass cache
     * @return array|null
     */
    private function get_instagram_data($access_token, $limit = 9, $cache_expiration = 12, $bypass_cache = false)
    {
        $cache_key = 'zolo_instagram_data_' . \md5($access_token . $limit);

        // Try to get cached data
        if (!$bypass_cache) {
            $cached_data = \get_transient($cache_key);
            if ($cached_data !== false) {
                return $cached_data;
            }
        }

        // Fetch user profile
        $user_url = \sprintf(
            'https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=%s',
            \urlencode($access_token)
        );

        $user_response = \wp_remote_get($user_url, ['timeout' => 15]);

        if (\is_wp_error($user_response)) {
            return null;
        }

        $user_body = \wp_remote_retrieve_body($user_response);
        $user_data = \json_decode($user_body, true);

        if (empty($user_data) || isset($user_data['error'])) {
            return null;
        }

        // Fetch profile picture from first media item (Instagram Basic Display API limitation)
        $profile_picture = 'https://ui-avatars.com/api/?name=' . urlencode($user_data['username'] ?? 'Instagram') . '&background=e9d5ff&color=7c3aed&size=150';

        // Try to get user ID-based profile picture URL
        if (!empty($user_data['id'])) {
            $user_id = $user_data['id'];
            $profile_url = \sprintf(
                'https://graph.instagram.com/%s?fields=profile_picture_url&access_token=%s',
                \urlencode($user_id),
                \urlencode($access_token)
            );

            $profile_response = \wp_remote_get($profile_url, ['timeout' => 10]);

            if (!\is_wp_error($profile_response)) {
                $profile_body = \wp_remote_retrieve_body($profile_response);
                $profile_data = \json_decode($profile_body, true);

                if (!empty($profile_data['profile_picture_url'])) {
                    $profile_picture = $profile_data['profile_picture_url'];
                }
            }
        }

        // Fetch media
        $media_url = \sprintf(
            'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=%d&access_token=%s',
            $limit,
            \urlencode($access_token)
        );

        $media_response = \wp_remote_get($media_url, ['timeout' => 15]);

        if (\is_wp_error($media_response)) {
            return null;
        }

        $media_body = \wp_remote_retrieve_body($media_response);
        $media_data = \json_decode($media_body, true);

        if (empty($media_data) || isset($media_data['error'])) {
            return null;
        }

        // Prepare data
        $data = [
            'username' => $user_data['username'] ?? 'Instagram User',
            'account_type' => $user_data['account_type'] ?? 'PERSONAL',
            'media_count' => $user_data['media_count'] ?? 0,
            'followers' => 0, // Instagram Basic Display API doesn't provide follower count
            'bio' => '', // Instagram Basic Display API doesn't provide bio
            'profile_picture' => $profile_picture,
            'media' => $media_data['data'] ?? [],
        ];

        // Cache the results
        \set_transient($cache_key, $data, $cache_expiration * 3600);

        return $data;
    }

    /**
     * Get responsive CSS for the block
     *
     * @param array  $attributes Block attributes
     * @param string $unique_id  Unique ID for the block
     * @return string
     */
    private function get_responsive_css($attributes, $unique_id)
    {
        $layout_type = $attributes['layoutType'] ?? 'grid';

        $desktop_columns = $attributes['igColumns']['Desktop'] ?? 3;
        $tablet_columns = $attributes['igColumns']['Tablet'] ?? 2;
        $mobile_columns = $attributes['igColumns']['Mobile'] ?? 1;

        $lightbox_caption_size = $attributes['lightboxCaptionSize'] ?? 16;

        // Helper to generate gap CSS
        $get_gap_css = function ($gap_data) {
            if (empty($gap_data)) return '';

            $linked = $gap_data['linked'] ?? true;
            $first = $gap_data['first'] ?? '0px';
            $second = $gap_data['second'] ?? '0px';

            if ($linked) {
                return "gap: {$first};";
            } else {
                return "column-gap: {$first}; row-gap: {$second};";
            }
        };



        $desk_gap = $attributes['igGap']['Desktop'] ?? [];
        $tab_gap = $attributes['igGap']['Tablet'] ?? [];
        $mob_gap = $attributes['igGap']['Mobile'] ?? [];

        \ob_start();
    ?>
        <style>
            .<?php echo $unique_id; ?>.zolo-ig-grid {
                display: grid;
                grid-template-columns: repeat(<?php echo $desktop_columns; ?>, 1fr);
                <?php echo $get_gap_css($desk_gap); ?>
            }



            .zolo-lightbox-caption {
                font-size: <?php echo $lightbox_caption_size; ?>px;
            }

            @media (max-width: 1024px) {
                .<?php echo $unique_id; ?>.zolo-ig-grid {
                    grid-template-columns: repeat(<?php echo $tablet_columns; ?>, 1fr);
                    <?php echo $get_gap_css($tab_gap); ?>
                }


            }

            @media (max-width: 768px) {
                .<?php echo $unique_id; ?>.zolo-ig-grid {
                    grid-template-columns: repeat(<?php echo $mobile_columns; ?>, 1fr);
                    <?php echo $get_gap_css($mob_gap); ?>
                }


            }
        </style>
<?php
        return \ob_get_clean();
    }
}
