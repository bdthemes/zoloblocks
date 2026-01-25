<?php

namespace Zolo\Blocks;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * FacebookReviews Block Class
 */
class FacebookReviews extends PostBlock
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
                'reviewsPerPage' => 6,
                'showAvatar' => true,
                'showReviewerName' => true,
                'showDate' => true,
                'showRating' => true,
                'showRecommendation' => true,
                'showReviewText' => true,
                'reviewTextLength' => 150,
                'showReadMore' => true,
                'readMoreText' => 'Read more',
                'showHeader' => true,
                'headerTitle' => 'Reviews & Recommendations',
                'showWriteReviewBtn' => true,
                'writeReviewBtnText' => 'Write a Review',
                'writeReviewBtnUrl' => '',
                'showHeaderRating' => true,
                'carouselAutoplay' => true,
                'carouselSpeed' => 3000,
                'carouselLoop' => true,
                'fbReviewsColumns' => [
                    'Desktop' => 3,
                    'Tablet' => 2,
                    'Mobile' => 1,
                ],
                'fbReviewsGap' => [
                    'Desktop' => ['gap' => 20, 'isLinked' => true, 'unit' => 'px'],
                    'Tablet' => ['gap' => 20, 'isLinked' => true, 'unit' => 'px'],
                    'Mobile' => ['gap' => 20, 'isLinked' => true, 'unit' => 'px'],
                ],
            ]
        );
    }

    /**
     * Render block
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
        $unique_id = \esc_attr($attributes['uniqueId'] ?? 'zolo-fb-reviews-' . \uniqid());
        $layout_type = \esc_attr($attributes['layoutType'] ?? 'grid');
        $reviews_per_page = \absint($attributes['reviewsPerPage'] ?? 6);

        // Get Facebook credentials from WordPress options
        $page_id = get_option('zolo_facebook_page_id', '');
        $access_token = get_option('zolo_facebook_access_token', '');
        $facebook_url = $page_id ? 'https://www.facebook.com/' . \urlencode($page_id) . '/reviews' : 'https://www.facebook.com';

        // Fetch reviews
        if (!empty($page_id) && !empty($access_token)) {
            $cache_duration = \absint($attributes['cacheDuration'] ?? 12);
            $reviews = $this->get_facebook_reviews($page_id, $access_token, $reviews_per_page, $cache_duration);
        } else {
            $reviews = [];
        }

        // Start output buffering
        \ob_start();

        // Add responsive CSS
        echo $this->get_responsive_css($attributes, $unique_id);

?>
        <div class="parent-<?php echo $unique_id; ?> zolo-block <?php echo $unique_id; ?> zolo-facebook-reviews zolo-facebook-reviews-<?php echo $layout_type; ?><?php echo !empty($attributes['parentClasses']) ? ' ' . \esc_attr(\implode(' ', $attributes['parentClasses'])) : ''; ?>"
            data-unique-id="<?php echo $unique_id; ?>"
            data-layout="<?php echo $layout_type; ?>"
            data-columns="<?php echo \esc_attr($attributes['fbReviewsColumns']['Desktop'] ?? 3); ?>"
            data-columns-tablet="<?php echo \esc_attr($attributes['fbReviewsColumns']['Tablet'] ?? 2); ?>"
            data-columns-mobile="<?php echo \esc_attr($attributes['fbReviewsColumns']['Mobile'] ?? 1); ?>"
            data-gap="<?php echo \esc_attr($attributes['fbReviewsGap']['Desktop']['first'] ?? 20); ?>"
            data-gap-tablet="<?php echo \esc_attr($attributes['fbReviewsGap']['Tablet']['first'] ?? 20); ?>"
            data-gap-mobile="<?php echo \esc_attr($attributes['fbReviewsGap']['Mobile']['first'] ?? 20); ?>"
            data-carousel-autoplay="<?php echo ($attributes['carouselAutoplay'] ?? true) ? 'true' : 'false'; ?>"
            data-carousel-speed="<?php echo \esc_attr($attributes['carouselSpeed'] ?? 3000); ?>"
            data-carousel-loop="<?php echo ($attributes['carouselLoop'] ?? true) ? 'true' : 'false'; ?>">

            <?php if ($attributes['showHeader'] ?? true): ?>
                <div class="zolo-fb-reviews-header">
                    <div class="zolo-fb-reviews-header-left">
                        <svg class="zolo-fb-logo" width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <div class="zolo-fb-reviews-header-info">
                            <h2 class="zolo-fb-reviews-title"><?php echo wp_kses_post($attributes['headerTitle'] ?? 'Reviews & Recommendations'); ?></h2>
                            <?php if ($attributes['showHeaderRating'] ?? true): ?>
                                <div class="zolo-fb-reviews-header-rating">
                                    <span class="zolo-fb-rating-number">5.0</span>
                                    <div class="zolo-fb-rating-stars">
                                        <?php for ($i = 1; $i <= 5; $i++): ?>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFC107">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        <?php endfor; ?>
                                    </div>
                                    <span class="zolo-fb-rating-count">Suggested by <?php echo count($reviews); ?> Clients</span>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php if ($attributes['showWriteReviewBtn'] ?? true): ?>
                        <a href="<?php echo \esc_url($attributes['writeReviewBtnUrl'] ?? $facebook_url); ?>" class="zolo-fb-write-review-btn" target="_blank" rel="noopener noreferrer">
                            <?php echo wp_kses_post($attributes['writeReviewBtnText'] ?? 'Write a Review'); ?>
                        </a>
                    <?php endif; ?>
                </div>
            <?php endif; ?>

            <?php if ($layout_type !== 'badge'): ?>
                <div class="zolo-fb-reviews-container layout-<?php echo $layout_type; ?> zolo-facebook-reviews-<?php echo $unique_id; ?>"
                    style="<?php echo $this->get_container_style($attributes); ?>">

                    <?php if (empty($reviews)): ?>
                        <div class="zolo-fb-reviews-empty" style="padding: 40px 20px; text-align: center; background: #f9fafb; border: 2px dashed #d1d5db; border-radius: 8px; color: #6b7280;">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style="margin: 0 auto 16px; opacity: 0.5;">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
                            </svg>
                            <?php if (empty($page_id) || empty($access_token)): ?>
                                <p style="margin: 0; font-size: 16px; font-weight: 600; color: #374151;">Facebook API Not Configured</p>
                                <p style="margin: 8px 0 0; font-size: 14px;">Please configure your Facebook Page ID and Access Token in the <a href="<?php echo admin_url('admin.php?page=zoloblocks#apiSettings'); ?>" style="color: #1877f2; text-decoration: none;">API Settings</a>.</p>
                            <?php else: ?>
                                <p style="margin: 0; font-size: 16px; font-weight: 600; color: #374151;">No Reviews Found</p>
                                <p style="margin: 8px 0 0; font-size: 14px;">No reviews are available for this Facebook page yet.</p>
                            <?php endif; ?>
                        </div>
                    <?php elseif ($layout_type === 'carousel'): ?>
                        <div class="swiper">
                            <div class="swiper-wrapper">
                                <?php foreach ($reviews as $review): ?>
                                    <div class="swiper-slide">
                                        <?php echo $this->render_review_card($review, $attributes, $facebook_url); ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                    <?php else: ?>
                        <?php foreach ($reviews as $review): ?>
                            <?php echo $this->render_review_card($review, $attributes, $facebook_url); ?>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
    <?php
        return \ob_get_clean();
    }

    /**
     * Get container style based on layout (not used with responsive CSS)
     *
     * @param array $attributes Block attributes
     * @return string
     */
    private function get_container_style($attributes)
    {
        // Return empty as styles are now handled by get_responsive_css
        return '';
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
        $layout = $attributes['layoutType'] ?? 'grid';

        if (!in_array($layout, ['grid', 'masonry', 'carousel'], true)) {
            return '';
        }

        // Get columns responsive values
        $fb_columns = $attributes['fbReviewsColumns'] ?? ['Desktop' => 3, 'Tablet' => 2, 'Mobile' => 1];
        $fb_gap = $attributes['fbReviewsGap'] ?? [
            'Desktop' => ['gap' => 20, 'isLinked' => true, 'unit' => 'px'],
            'Tablet' => ['gap' => 20, 'isLinked' => true, 'unit' => 'px'],
            'Mobile' => ['gap' => 20, 'isLinked' => true, 'unit' => 'px'],
        ];

        // Desktop config
        $desktop_gap = $fb_gap['Desktop'] ?? [];
        $desktop = [
            'cols' => $fb_columns['Desktop'] ?? 3,
            'is_linked' => $desktop_gap['isLinked'] ?? true,
            'gap' => isset($desktop_gap['first']) ? (float)$desktop_gap['first'] : 20,
            'row_gap' => isset($desktop_gap['second']) ? (float)$desktop_gap['second'] : (isset($desktop_gap['first']) ? (float)$desktop_gap['first'] : 20),
            'col_gap' => isset($desktop_gap['first']) ? (float)$desktop_gap['first'] : 20,
            'unit' => $desktop_gap['unit'] ?? 'px',
        ];

        // Tablet config
        $tablet_gap = $fb_gap['Tablet'] ?? $desktop_gap;
        $tablet = [
            'cols' => $fb_columns['Tablet'] ?? $desktop['cols'],
            'is_linked' => $tablet_gap['isLinked'] ?? $desktop['is_linked'],
            'gap' => isset($tablet_gap['first']) ? (float)$tablet_gap['first'] : $desktop['gap'],
            'row_gap' => isset($tablet_gap['second']) ? (float)$tablet_gap['second'] : (isset($tablet_gap['first']) ? (float)$tablet_gap['first'] : $desktop['row_gap']),
            'col_gap' => isset($tablet_gap['first']) ? (float)$tablet_gap['first'] : $desktop['col_gap'],
            'unit' => $tablet_gap['unit'] ?? $desktop['unit'],
        ];

        // Mobile config
        $mobile_gap = $fb_gap['Mobile'] ?? $tablet_gap;
        $mobile = [
            'cols' => $fb_columns['Mobile'] ?? $tablet['cols'],
            'is_linked' => $mobile_gap['isLinked'] ?? $tablet['is_linked'],
            'gap' => isset($mobile_gap['first']) ? (float)$mobile_gap['first'] : $tablet['gap'],
            'row_gap' => isset($mobile_gap['second']) ? (float)$mobile_gap['second'] : (isset($mobile_gap['first']) ? (float)$mobile_gap['first'] : $tablet['row_gap']),
            'col_gap' => isset($mobile_gap['first']) ? (float)$mobile_gap['first'] : $tablet['col_gap'],
            'unit' => $mobile_gap['unit'] ?? $tablet['unit'],
        ];

        // Get margin settings from GlobalStyleHandler
        $margin = $attributes['zolo_margin'] ?? [];
        $margin_css = $this->generate_margin_css($unique_id, $margin);

        return \sprintf(
            '<style>%s%s@media (max-width: 1024px) {%s}@media (max-width: 767px) {%s}</style>',
            $this->generate_layout_css($layout, $unique_id, $desktop),
            $margin_css,
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
            case 'carousel':
                return ".{$unique_id}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-carousel .swiper { {$gap_css} }";

            case 'grid':
                return ".{$unique_id}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-grid { display: grid; grid-template-columns: repeat({$config['cols']}, 1fr){$important}; {$gap_css} }";

            case 'masonry':
                $col_gap = $config['is_linked'] ? $config['gap'] : $config['col_gap'];
                $row_gap = $config['is_linked'] ? $config['gap'] : $config['row_gap'];
                return \sprintf(
                    '.%s.zolo-facebook-reviews .zolo-fb-reviews-container.layout-masonry { column-count: %d%s; column-gap: %d%s; } .%s.zolo-facebook-reviews .zolo-fb-reviews-container.layout-masonry .zolo-fb-review-card { margin-bottom: %d%s; }',
                    $unique_id,
                    $config['cols'],
                    $important,
                    $col_gap,
                    $unit,
                    $unique_id,
                    $row_gap,
                    $unit
                );

            default:
                return '';
        }
    }

    /**
     * Generate margin CSS for centering
     *
     * @param string $unique_id Unique block ID
     * @param array  $margin    Margin settings
     * @return string
     */
    private function generate_margin_css($unique_id, $margin)
    {
        if (empty($margin)) {
            return '';
        }

        $desktop = $margin['Desktop'] ?? [];
        if (!empty($desktop['left']) || !empty($desktop['right'])) {
            return ".{$unique_id}.zolo-facebook-reviews .zolo-fb-reviews-container { margin-left: auto !important; margin-right: auto !important; }";
        }

        return '';
    }

    /**
     * Render single review card
     *
     * @param array  $review     Review data
     * @param array  $attributes Block attributes
     * @param string $fb_url     Facebook URL
     * @return string
     */
    private function render_review_card($review, $attributes, $fb_url = '#')
    {
        \ob_start();
    ?>
        <div class="zolo-fb-review-card">
            <?php if (($attributes['showAvatar'] ?? true) && !empty($review['avatar'])): ?>
                <div class="zolo-fb-reviewer-image">
                    <a class="zolo-fb-reviewer-image-url" href="<?php echo \esc_url($fb_url); ?>" target="_blank" rel="noopener noreferrer">
                        <img class="zolo-fb-reviewer-avatar" src="<?php echo \esc_url($review['avatar']); ?>" alt="<?php echo \esc_attr($review['name']); ?>" />
                    </a>
                </div>
            <?php endif; ?>

            <div class="zolo-fb-review-info">
                <div class="zolo-fb-review-header">
                    <?php if ($attributes['showReviewerName'] ?? true): ?>
                        <a class="zolo-fb-reviewer-name-url" href="<?php echo \esc_url($fb_url); ?>" target="_blank" rel="noopener noreferrer">
                            <span class="zolo-fb-reviewer-name"><?php echo \esc_html($review['name']); ?></span>
                        </a>
                    <?php endif; ?>

                    <?php if (($attributes['showRecommendation'] ?? true) && !empty($review['has_recommendation'])): ?>
                        <div class="zolo-fb-rating-wrapper zolo-fb-rating">
                            <svg class="wpsr-recommends" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 14l-3.293 3.293A1 1 0 0 1 4 16.586V14h-.154c-1.337 0-1.822-.14-2.311-.4A2.726 2.726 0 0 1 .4 12.464c-.261-.488-.4-.973-.4-2.309v-6.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536.4c.488-.261.973-.4 2.309-.4h10.31c1.336 0 1.821.14 2.31.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v6.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H9zm0-5l1.454.765a.5.5 0 0 0 .726-.527l-.278-1.62 1.177-1.147a.5.5 0 0 0-.277-.853l-1.626-.236-.728-1.474a.5.5 0 0 0-.896 0l-.728 1.474-1.626.236a.5.5 0 0 0-.277.853l1.177 1.147-.278 1.62a.5.5 0 0 0 .726.527L9 9z" fill="#f36b7f" />
                            </svg>
                            <span><?php echo \esc_html__('recommends', 'zoloblocks'); ?></span>
                        </div>
                    <?php endif; ?>
                </div>

                <?php if ($attributes['showDate'] ?? true): ?>
                    <span class="zolo-fb-review-date"><?php echo \esc_html($review['date']); ?></span>
                <?php endif; ?>

                <?php if (($attributes['showReviewText'] ?? true) && !empty($review['text'])): ?>
                    <div class="zolo-fb-review-content">
                        <p><?php echo \esc_html($review['text']); ?></p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
<?php
        return \ob_get_clean();
    }

    /**
     * Get Facebook reviews
     *
     * @param string $page_id      Page ID
     * @param string $access_token Access token
     * @param int    $limit        Number of reviews
     * @param int    $cache_duration Cache duration in hours
     * @return array
     */
    private function get_facebook_reviews($page_id, $access_token, $limit = 6, $cache_duration = 12)
    {
        if (empty($page_id) || empty($access_token)) {
            return array();
        }

        // Generate transient key
        $transient_key = 'zolo_fb_reviews_' . md5($page_id . '_' . $limit . '_' . $cache_duration);

        // Check for cached reviews
        $cached_reviews = \get_transient($transient_key);
        if ($cached_reviews !== false) {
            return $cached_reviews;
        }

        // Fetch from API
        $reviews = $this->fetch_reviews_from_api($page_id, $access_token, $limit);

        // Save to transient if we got reviews
        if (!empty($reviews)) {
            \set_transient($transient_key, $reviews, $cache_duration * HOUR_IN_SECONDS);
        }

        return $reviews;
    }

    /**
     * Fetch reviews from Facebook API
     *
     * @param string $page_id      Page ID
     * @param string $access_token Access token
     * @param int    $limit        Number of reviews
     * @return array
     */
    private function fetch_reviews_from_api($page_id, $access_token, $limit)
    {
        $url = \add_query_arg(
            array(
                'fields' => 'id,created_time,recommendation_type,review_text,reviewer{id,name,picture}',
                'access_token' => $access_token,
                'limit' => $limit,
            ),
            "https://graph.facebook.com/v18.0/{$page_id}/ratings"
        );

        $response = \wp_remote_get($url, array('timeout' => 15));

        if (\is_wp_error($response)) {
            return array();
        }

        $body = \wp_remote_retrieve_body($response);
        $data = \json_decode($body, true);

        if (empty($data['data'])) {
            return array();
        }

        $reviews = array();
        foreach ($data['data'] as $review) {
            // Extract reviewer name
            $reviewer_name = 'Anonymous';
            if (isset($review['reviewer']) && !empty($review['reviewer']['name'])) {
                $reviewer_name = $review['reviewer']['name'];
            }

            // Extract avatar - try different picture structures
            $reviewer_avatar = '';
            if (isset($review['reviewer']['picture']['data']['url']) && !empty($review['reviewer']['picture']['data']['url'])) {
                $reviewer_avatar = $review['reviewer']['picture']['data']['url'];
            } elseif (isset($review['reviewer']['picture']['url']) && !empty($review['reviewer']['picture']['url'])) {
                $reviewer_avatar = $review['reviewer']['picture']['url'];
            } elseif (isset($review['reviewer']['picture']) && is_string($review['reviewer']['picture'])) {
                $reviewer_avatar = $review['reviewer']['picture'];
            }

            // Fallback to UI Avatars if no picture
            if (empty($reviewer_avatar)) {
                $colors = array('FF6B6B', '4ECDC4', '45B7D1', 'FFA07A', '98D8C8', 'F7DC6F');
                $random_color = $colors[array_rand($colors)];
                $reviewer_avatar = 'https://ui-avatars.com/api/?name=' . \urlencode($reviewer_name) . '&size=100&background=' . $random_color . '&color=fff';
            }

            $reviews[] = array(
                'id' => !empty($review['id']) ? $review['id'] : \uniqid('review_'),
                'name' => $reviewer_name,
                'avatar' => $reviewer_avatar,
                'rating' => isset($review['rating']) ? \intval($review['rating']) : 5,
                'text' => !empty($review['review_text']) ? $review['review_text'] : 'Great experience!',
                'has_recommendation' => !empty($review['recommendation_type']) && $review['recommendation_type'] === 'positive',
                'date' => $this->format_date($review['created_time']),
            );
        }

        return $reviews;
    }

    /**
     * Format date
     *
     * @param string $date_string Date string
     * @return string
     */
    private function format_date($date_string)
    {
        $timestamp = \strtotime($date_string);
        $diff = \time() - $timestamp;

        if ($diff < 60) {
            return 'Just now';
        } elseif ($diff < 3600) {
            $mins = floor($diff / 60);
            return $mins . ' minute' . ($mins > 1 ? 's' : '') . ' ago';
        } elseif ($diff < 86400) {
            $hours = floor($diff / 3600);
            return $hours . ' hour' . ($hours > 1 ? 's' : '') . ' ago';
        } elseif ($diff < 2592000) {
            $days = floor($diff / 86400);
            return $days . ' day' . ($days > 1 ? 's' : '') . ' ago';
        } elseif ($diff < 31536000) {
            $months = floor($diff / 2592000);
            return $months . ' month' . ($months > 1 ? 's' : '') . ' ago';
        } else {
            $years = floor($diff / 31536000);
            return $years . ' year' . ($years > 1 ? 's' : '') . ' ago';
        }
    }
}
