<?php
namespace Zolo\Blocks;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * FacebookReviews Block Class
 */
class FacebookReviews extends PostBlock {

    /**
     * Get default attributes
     */
    public function get_default_attributes() {
        return array(
            'layoutType' => 'grid',
            'columns' => array('desktop' => 3, 'tablet' => 2, 'mobile' => 1),
            'gap' => array('desktop' => 24, 'tablet' => 20, 'mobile' => 16),
            'showAvatar' => true,
            'showName' => true,
            'showRating' => true,
            'showDate' => true,
            'showRecommendation' => true,
            'showReviewText' => true,
            'reviewsToShow' => 6,
            'pageId' => '',
            'accessToken' => '',
        );
    }

    /**
     * Render block
     */
    public function render($attributes, $content = '', $block = null) {
        $attributes = array_merge($this->get_default_attributes(), $attributes);

        // Get Facebook credentials from WordPress options (global settings)
        $page_id = get_option('zolo_facebook_page_id', '');
        $access_token = get_option('zolo_facebook_access_token', '');
        $limit = !empty($attributes['reviewsToShow']) ? intval($attributes['reviewsToShow']) : 6;

        // Fetch reviews
        $reviews = $this->get_facebook_reviews($page_id, $access_token, $limit);

        error_log('Total reviews fetched: ' . count($reviews));
        error_log('Reviews data: ' . print_r($reviews, true));

        if (empty($reviews)) {
            return '<div class="zolo-fb-reviews-empty">No reviews found. Please configure your Facebook Page ID and Access Token in the block settings.</div>';
        }

        // Layout type
        $layout_type = !empty($attributes['layoutType']) ? $attributes['layoutType'] : 'grid';
        
        // Get columns
        $columns_desktop = !empty($attributes['columns']['desktop']) ? intval($attributes['columns']['desktop']) : 3;
        $columns_tablet = !empty($attributes['columns']['tablet']) ? intval($attributes['columns']['tablet']) : 2;
        $columns_mobile = !empty($attributes['columns']['mobile']) ? intval($attributes['columns']['mobile']) : 1;
        
        // Get gap
        $gap_desktop = !empty($attributes['gap']['desktop']) ? intval($attributes['gap']['desktop']) : 24;
        $gap_tablet = !empty($attributes['gap']['tablet']) ? intval($attributes['gap']['tablet']) : 20;
        $gap_mobile = !empty($attributes['gap']['mobile']) ? intval($attributes['gap']['mobile']) : 16;
        
        // Generate unique ID
        $unique_id = !empty($attributes['uniqueId']) ? $attributes['uniqueId'] : 'zolo-fb-reviews-' . wp_generate_password(8, false);

        // Get parent classes for advanced controls
        $parent_classes = !empty($attributes['parentClasses']) ? implode(' ', $attributes['parentClasses']) : '';
        
        // Build wrapper classes - required for advanced controls (margin, padding, etc.)
        $wrapper_classes = trim(sprintf(
            'parent-%s zolo-block %s zolo-facebook-reviews zolo-facebook-reviews-%s %s',
            esc_attr($unique_id),
            esc_attr($unique_id),
            esc_attr($layout_type),
            esc_attr($parent_classes)
        ));

        // Header settings - explicitly check for false
        $show_header = array_key_exists('showHeader', $attributes) ? (bool)$attributes['showHeader'] : true;
        $header_title = !empty($attributes['headerTitle']) ? $attributes['headerTitle'] : 'Reviews & Recommendations';
        $show_write_review_btn = array_key_exists('showWriteReviewBtn', $attributes) ? (bool)$attributes['showWriteReviewBtn'] : true;
        $write_review_btn_text = !empty($attributes['writeReviewBtnText']) ? $attributes['writeReviewBtnText'] : 'Write a Review';
        $write_review_btn_url = !empty($attributes['writeReviewBtnUrl']) ? $attributes['writeReviewBtnUrl'] : ($page_id ? 'https://www.facebook.com/' . $page_id . '/reviews' : '#');
        $show_header_rating = array_key_exists('showHeaderRating', $attributes) ? (bool)$attributes['showHeaderRating'] : true;

        // Carousel settings
        $carousel_autoplay = array_key_exists('carouselAutoplay', $attributes) ? (bool)$attributes['carouselAutoplay'] : true;
        $carousel_speed = !empty($attributes['carouselSpeed']) ? intval($attributes['carouselSpeed']) : 3000;
        $carousel_loop = array_key_exists('carouselLoop', $attributes) ? (bool)$attributes['carouselLoop'] : true;

        // Generate dynamic CSS
        $dynamic_css = $this->generate_dynamic_css($unique_id, $layout_type, $columns_desktop, $columns_tablet, $columns_mobile, $gap_desktop, $gap_tablet, $gap_mobile);

        // Build HTML
        ob_start();
        ?>
        <style>
            <?php echo $dynamic_css; ?>
        </style>
        <div class="<?php echo esc_attr($wrapper_classes); ?>" 
             data-layout="<?php echo esc_attr($layout_type); ?>"
             data-carousel-autoplay="<?php echo $carousel_autoplay ? 'true' : 'false'; ?>"
             data-carousel-speed="<?php echo esc_attr($carousel_speed); ?>"
             data-carousel-loop="<?php echo $carousel_loop ? 'true' : 'false'; ?>"
             data-columns="<?php echo esc_attr($columns_desktop); ?>">
            <?php if ($show_header): ?>
                <div class="zolo-fb-reviews-header">
                    <div class="zolo-fb-reviews-header-left">
                        <svg class="zolo-fb-logo" width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <div class="zolo-fb-reviews-header-info">
                            <h2 class="zolo-fb-reviews-title"><?php echo esc_html($header_title); ?></h2>
                            <?php if ($show_header_rating): ?>
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
                    <?php if ($show_write_review_btn): ?>
                        <a href="<?php echo esc_url($write_review_btn_url); ?>" class="zolo-fb-write-review-btn" target="_blank" rel="noopener noreferrer">
                            <?php echo esc_html($write_review_btn_text); ?>
                        </a>
                    <?php endif; ?>
                </div>
            <?php endif; ?>

            <?php if ($layout_type !== 'badge'): ?>
            <div class="zolo-fb-reviews-container layout-<?php echo esc_attr($layout_type); ?> zolo-facebook-reviews-<?php echo esc_attr($unique_id); ?>">
                <?php if ($layout_type === 'carousel'): ?>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?php foreach ($reviews as $review): ?>
                                <div class="swiper-slide">
                                    <?php echo $this->render_review_card($review, $attributes, $page_id); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-pagination"></div>
                    </div>
                <?php else: ?>
                    <?php foreach ($reviews as $review): ?>
                        <?php echo $this->render_review_card($review, $attributes, $page_id); ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }

    /**
     * Generate dynamic CSS for grid layout
     */
    private function generate_dynamic_css($unique_id, $layout_type, $columns_desktop, $columns_tablet, $columns_mobile, $gap_desktop, $gap_tablet, $gap_mobile) {
        $css = '';
        
        // Desktop styles
        $css .= ".zolo-fb-reviews-container.layout-grid.zolo-facebook-reviews-{$unique_id} { display: grid; gap: {$gap_desktop}px; grid-template-columns: repeat({$columns_desktop}, 1fr); }\n";
        $css .= ".zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-{$unique_id} { column-count: {$columns_desktop}; column-gap: {$gap_desktop}px; }\n";
        $css .= ".zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-{$unique_id} .zolo-fb-review-card { margin-bottom: {$gap_desktop}px; }\n";
        
        // Tablet styles
        $css .= "@media (max-width: 1024px) {\n";
        $css .= "  .zolo-fb-reviews-container.layout-grid.zolo-facebook-reviews-{$unique_id} { gap: {$gap_tablet}px !important; grid-template-columns: repeat({$columns_tablet}, 1fr) !important; }\n";
        $css .= "  .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-{$unique_id} { column-count: {$columns_tablet} !important; column-gap: {$gap_tablet}px; }\n";
        $css .= "  .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-{$unique_id} .zolo-fb-review-card { margin-bottom: {$gap_tablet}px; }\n";
        $css .= "}\n";
        
        // Mobile styles
        $css .= "@media (max-width: 767px) {\n";
        $css .= "  .zolo-fb-reviews-container.layout-grid.zolo-facebook-reviews-{$unique_id} { gap: {$gap_mobile}px !important; grid-template-columns: repeat({$columns_mobile}, 1fr) !important; }\n";
        $css .= "  .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-{$unique_id} { column-count: {$columns_mobile} !important; column-gap: {$gap_mobile}px; }\n";
        $css .= "  .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-{$unique_id} .zolo-fb-review-card { margin-bottom: {$gap_mobile}px; }\n";
        $css .= "}\n";
        
        return $css;
    }

    /**
     * Render single review card
     */
    private function render_review_card($review, $attributes, $page_id = '') {
        $fb_reviews_link = !empty($page_id) ? 'https://www.facebook.com/' . esc_attr($page_id) . '/reviews' : '#';
        
        ob_start();
        ?>
        <div class="zolo-fb-review-card">
            <?php if ($attributes['showAvatar'] && !empty($review['avatar'])): ?>
                <div class="zolo-fb-reviewer-image">
                    <a class="zolo-fb-reviewer-image-url" href="<?php echo esc_url($fb_reviews_link); ?>" target="_blank" rel="noopener noreferrer">
                        <img class="zolo-fb-reviewer-avatar" src="<?php echo esc_url($review['avatar']); ?>" alt="<?php echo esc_attr($review['name']); ?>" />
                    </a>
                </div>
            <?php endif; ?>
            
            <div class="zolo-fb-review-info">
                <div class="zolo-fb-review-header">
                    <?php if ($attributes['showName']): ?>
                        <a class="zolo-fb-reviewer-name-url" href="<?php echo esc_url($fb_reviews_link); ?>" target="_blank" rel="noopener noreferrer">
                            <span class="zolo-fb-reviewer-name"><?php echo esc_html($review['name']); ?></span>
                        </a>
                    <?php endif; ?>
                    
                    <?php if ($attributes['showRecommendation'] && !empty($review['has_recommendation'])): ?>
                        <div class="zolo-fb-rating-wrapper zolo-fb-rating">
                            <svg class="wpsr-recommends" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 14l-3.293 3.293A1 1 0 0 1 4 16.586V14h-.154c-1.337 0-1.822-.14-2.311-.4A2.726 2.726 0 0 1 .4 12.464c-.261-.488-.4-.973-.4-2.309v-6.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536.4c.488-.261.973-.4 2.309-.4h10.31c1.336 0 1.821.14 2.31.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v6.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H9zm0-5l1.454.765a.5.5 0 0 0 .726-.527l-.278-1.62 1.177-1.147a.5.5 0 0 0-.277-.853l-1.626-.236-.728-1.474a.5.5 0 0 0-.896 0l-.728 1.474-1.626.236a.5.5 0 0 0-.277.853l1.177 1.147-.278 1.62a.5.5 0 0 0 .726.527L9 9z" fill="#f36b7f"/>
                            </svg>
                            <span><?php echo esc_html__('recommends', 'zoloblocks'); ?></span>
                        </div>
                    <?php endif; ?>
                </div>
                
                <?php if ($attributes['showDate']): ?>
                    <span class="zolo-fb-review-date"><?php echo esc_html($review['date']); ?></span>
                <?php endif; ?>
                
                <?php if ($attributes['showReviewText'] && !empty($review['text'])): ?>
                    <div class="zolo-fb-review-content">
                        <p><?php echo esc_html($review['text']); ?></p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

    /**
     * Get Facebook reviews
     */
    private function get_facebook_reviews($page_id, $access_token, $limit = 6) {
        if (empty($page_id) || empty($access_token)) {
            return $this->get_demo_reviews($limit);
        }

        // TEMPORARILY BYPASS CACHE FOR DEBUGGING
        // Fetch from API
        $reviews = $this->fetch_reviews_from_api($page_id, $access_token, $limit);

        if (empty($reviews)) {
            return $this->get_demo_reviews($limit);
        }

        return $reviews;
    }

    /**
     * Fetch reviews from Facebook API
     */
    private function fetch_reviews_from_api($page_id, $access_token, $limit) {
        $url = add_query_arg(
            array(
                'fields' => 'id,created_time,recommendation_type,review_text,reviewer{id,name,picture}',
                'access_token' => $access_token,
                'limit' => $limit,
            ),
            "https://graph.facebook.com/v18.0/{$page_id}/ratings"
        );

        $response = wp_remote_get($url, array('timeout' => 15));

        if (is_wp_error($response)) {
            error_log('Facebook Reviews API Error: ' . $response->get_error_message());
            return array();
        }

        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        error_log('Facebook Reviews API Response: ' . print_r($data, true));

        if (empty($data['data'])) {
            return array();
        }

        $reviews = array();
        foreach ($data['data'] as $review) {
            error_log('Individual Review Data: ' . print_r($review, true));

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
                $reviewer_avatar = 'https://ui-avatars.com/api/?name=' . urlencode($reviewer_name) . '&size=100&background=' . $random_color . '&color=fff';
            }

            error_log('Reviewer Name: ' . $reviewer_name . ', Avatar: ' . $reviewer_avatar);

            $reviews[] = array(
                'id' => !empty($review['id']) ? $review['id'] : uniqid('review_'),
                'name' => $reviewer_name,
                'avatar' => $reviewer_avatar,
                'rating' => isset($review['rating']) ? intval($review['rating']) : 5,
                'text' => !empty($review['review_text']) ? $review['review_text'] : 'Great experience!',
                'has_recommendation' => !empty($review['recommendation_type']) && $review['recommendation_type'] === 'positive',
                'date' => $this->format_date($review['created_time']),
            );
        }

        return $reviews;
    }

    /**
     * Format date
     */
    private function format_date($date_string) {
        $timestamp = strtotime($date_string);
        $diff = time() - $timestamp;

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

    /**
     * Get demo reviews
     */
    private function get_demo_reviews($limit = 6) {
        $demo_reviews = array(
            array(
                'id' => '1',
                'name' => 'Sarah Johnson',
                'avatar' => 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=100&background=FF6B6B&color=fff',
                'rating' => 5,
                'text' => 'Excellent service! The team was professional and delivered beyond our expectations. Highly recommend!',
                'has_recommendation' => true,
                'date' => '2 days ago',
            ),
            array(
                'id' => '2',
                'name' => 'Michael Chen',
                'avatar' => 'https://ui-avatars.com/api/?name=Michael+Chen&size=100&background=4ECDC4&color=fff',
                'rating' => 5,
                'text' => 'Great experience from start to finish. Very responsive and attentive to details.',
                'has_recommendation' => true,
                'date' => '1 week ago',
            ),
            array(
                'id' => '3',
                'name' => 'Emily Rodriguez',
                'avatar' => 'https://ui-avatars.com/api/?name=Emily+Rodriguez&size=100&background=45B7D1&color=fff',
                'rating' => 4,
                'text' => 'Quality work and friendly staff. Will definitely use their services again.',
                'has_recommendation' => true,
                'date' => '2 weeks ago',
            ),
            array(
                'id' => '4',
                'name' => 'David Kim',
                'avatar' => 'https://ui-avatars.com/api/?name=David+Kim&size=100&background=FFA07A&color=fff',
                'rating' => 5,
                'text' => 'Outstanding! They went above and beyond to ensure everything was perfect.',
                'has_recommendation' => true,
                'date' => '3 weeks ago',
            ),
            array(
                'id' => '5',
                'name' => 'Jennifer Smith',
                'avatar' => 'https://ui-avatars.com/api/?name=Jennifer+Smith&size=100&background=98D8C8&color=fff',
                'rating' => 5,
                'text' => 'Fantastic service! Professional, reliable, and excellent quality.',
                'has_recommendation' => true,
                'date' => '1 month ago',
            ),
            array(
                'id' => '6',
                'name' => 'Robert Taylor',
                'avatar' => 'https://ui-avatars.com/api/?name=Robert+Taylor&size=100&background=F7DC6F&color=fff',
                'rating' => 4,
                'text' => 'Very satisfied with the results. Good communication throughout the process.',
                'has_recommendation' => false,
                'date' => '1 month ago',
            ),
        );

        return array_slice($demo_reviews, 0, $limit);
    }
}

