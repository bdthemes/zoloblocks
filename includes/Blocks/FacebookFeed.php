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
                'zolo_fbColumnsRange' => 3,
                'zolo_TABfbColumnsRange' => 2,
                'zolo_MOBfbColumnsRange' => 1,
                'zolo_fbGapGap' => 20,
                'zolo_fbGapRowGap' => null,
                'zolo_fbGapColGap' => null,
                'zolo_TABfbGapGap' => null,
                'zolo_TABfbGapRowGap' => null,
                'zolo_TABfbGapColGap' => null,
                'zolo_MOBfbGapGap' => null,
                'zolo_MOBfbGapRowGap' => null,
                'zolo_MOBfbGapColGap' => null,
                'zolo_fbGapIsLinked' => true,
                'zolo_fbGapUnit' => 'px',
                'zolo_TABfbGapUnit' => 'px',
                'zolo_MOBfbGapUnit' => 'px',
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
    public function render($attributes, $content = '', $block = null)
    {
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

        // Add responsive CSS
        echo $this->get_responsive_css($attributes, $unique_id);

?>
        <div class="zolo-facebook-feed zolo-facebook-feed-<?php echo $layout_type; ?> zolo-facebook-feed-<?php echo $unique_id; ?>"
            data-unique-id="<?php echo $unique_id; ?>"
            data-layout="<?php echo $layout_type; ?>"
            data-columns="<?php echo \esc_attr($attributes['zolo_fbColumnsRange'] ?? 3); ?>"
            data-carousel-autoplay="<?php echo $attributes['carouselAutoplay'] ? 'true' : 'false'; ?>"
            data-carousel-speed="<?php echo \esc_attr($attributes['carouselSpeed']); ?>"
            data-carousel-loop="<?php echo $attributes['carouselLoop'] ? 'true' : 'false'; ?>">

            <div class="zolo-fb-posts-container layout-<?php echo $layout_type; ?>"
                style="<?php echo $this->get_container_style($attributes); ?>">

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

                            <a href="<?php echo \esc_url($facebook_url); ?>"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="zolo-fb-icon"
                                title="<?php echo \esc_attr__('Visit Facebook Page', 'zoloblocks'); ?>">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877f2">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
                                        <?php
                                        $reaction_types = $post['reaction_types'] ?? [];
                                        if (!empty($reaction_types['like'])) : ?>
                                            <svg class="zolo-fb-reaction-emoji like" width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="256" cy="256" r="256" fill="#2196F3" />
                                                <path d="M385.7 258.3c-4.2-23.8-24.9-41.9-49.8-41.9h-62.1c5.5-14.8 15.3-41.4 15.3-58.9 0-26.5-13.7-49.6-33.7-57.6-4.9-2-10.2-3-15.6-3-13.4 0-26.2 5.7-35.2 15.6-3.8 4.2-5.6 10.2-4.6 16.1l5.4 32.4c-7.9 20.8-28.7 53.1-45.6 62.1-6.9 3.7-11.3 10.8-11.3 18.6v112.8c0 11.5 9.3 20.8 20.8 20.8h9.1c3.6 13.8 16.1 24 30.9 24h120.3c23.5 0 43.9-16.4 48.8-39.2l21.2-99.7c1.5-7 .9-14.3-2.9-20.8-3.8-6.6-9.8-11.4-16.8-13.5z" fill="#FAFAFA" />
                                                <path d="M103.5 374.1h31.2c8.6 0 15.6-7 15.6-15.6V249.9c0-8.6-7-15.6-15.6-15.6h-31.2c-8.6 0-15.6 7-15.6 15.6v108.6c0 8.6 7 15.6 15.6 15.6z" fill="#FAFAFA" />
                                            </svg>
                                        <?php endif; ?>
                                        <?php if (!empty($reaction_types['love'])) : ?>
                                            <svg class="zolo-fb-reaction-emoji love" width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="256" cy="256" r="256" fill="#F44336" />
                                                <path d="M368.5 157.8c-33.5-33.5-87.8-33.5-121.3 0L256 149l-9.2-9.2c-33.5-33.5-87.8-33.5-121.3 0-33.5 33.5-33.5 87.8 0 121.3l130.5 130.5 130.5-130.5c33.5-33.5 33.5-87.8 0-121.3z" fill="#FAFAFA" />
                                            </svg>
                                        <?php endif; ?>
                                        <?php if (!empty($reaction_types['care'])) : ?>
                                            <svg class="zolo-fb-reaction-emoji care" width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="256" cy="256" r="256" fill="#FFC107" />
                                                <circle cx="200" cy="220" r="20" fill="#795548" />
                                                <circle cx="312" cy="220" r="20" fill="#795548" />
                                                <path d="M340 280c0-46.4-37.6-84-84-84s-84 37.6-84 84" stroke="#795548" stroke-width="16" fill="none" stroke-linecap="round" />
                                                <path d="M320 190c-20-35-50-50-50-50s-30 15-50 50" stroke="#FF6B9D" stroke-width="18" fill="none" stroke-linecap="round" />
                                                <path d="M140 240c30 40 60 60 60 60M372 240c-30 40-60 60-60 60" stroke="#FF6B9D" stroke-width="16" fill="none" stroke-linecap="round" />
                                            </svg>
                                        <?php endif; ?>
                                        <?php if (!empty($reaction_types['wow'])) : ?>
                                            <svg class="zolo-fb-reaction-emoji wow" width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="256" cy="256" r="256" fill="#FFC107" />
                                                <circle cx="180" cy="200" r="32" fill="#795548" />
                                                <circle cx="332" cy="200" r="32" fill="#795548" />
                                                <ellipse cx="256" cy="340" rx="48" ry="64" fill="#795548" />
                                            </svg>
                                        <?php endif; ?>
                                        <?php if (!empty($reaction_types['haha'])) : ?>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" id="haha">
                                                <path fill="url(#a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"></path>
                                                <path fill="url(#b)" d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"></path>
                                                <path fill="url(#c)" d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"></path>
                                                <path fill="#2A3755" d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"></path>
                                                <defs>
                                                    <linearGradient id="a" x1="8" x2="8" y1="1.64" y2="16" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FEEA70"></stop>
                                                        <stop offset="1" stop-color="#F69B30"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="b" x1="8" x2="8" y1="7" y2="14" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#472315"></stop>
                                                        <stop offset="1" stop-color="#8B3A0E"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="c" x1="8.005" x2="8.005" y1="11" y2="13.457" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FC607C"></stop>
                                                        <stop offset="1" stop-color="#D91F3A"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        <?php endif; ?>
                                        <?php if (!empty($reaction_types['sad'])) : ?>
                                            <svg class="zolo-fb-reaction-emoji sad" width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="256" cy="256" r="256" fill="#FFC107" />
                                                <path d="M168 192c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm160 0c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16z" fill="#795548" />
                                                <path d="M336 360c0-44.2-35.8-80-80-80s-80 35.8-80 80" stroke="#795548" stroke-width="16" fill="none" stroke-linecap="round" />
                                                <ellipse cx="152" cy="280" rx="16" ry="24" fill="#42A5F5" />
                                            </svg>
                                        <?php endif; ?>
                                        <?php if (!empty($reaction_types['angry'])) : ?>
                                            <svg class="zolo-fb-reaction-emoji angry" width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="256" cy="256" r="256" fill="#FF6F00" />
                                                <path d="M144 176l48 32-16 16-48-32zm224 0l-48 32 16 16 48-32z" fill="#795548" />
                                                <circle cx="184" cy="240" r="24" fill="#795548" />
                                                <circle cx="328" cy="240" r="24" fill="#795548" />
                                                <path d="M336 368c0-44.2-35.8-80-80-80s-80 35.8-80 80" stroke="#795548" stroke-width="16" fill="none" stroke-linecap="round" />
                                            </svg>
                                        <?php endif; ?>
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
    private function get_container_style($attributes)
    {
        $layout = $attributes['layoutType'];
        $styles = [];

        if ($layout === 'grid') {
            $cols = $attributes['zolo_fbColumnsRange'] ?? 3;
            $is_linked = $attributes['zolo_fbGapIsLinked'] ?? true;
            $gap_unit = $attributes['zolo_fbGapUnit'] ?? 'px';

            if ($is_linked) {
                $gap = $attributes['zolo_fbGapGap'] ?? 20;
                $styles[] = "display: grid;";
                $styles[] = "grid-template-columns: repeat({$cols}, 1fr);";
                $styles[] = "gap: {$gap}{$gap_unit};";
            } else {
                $row_gap = $attributes['zolo_fbGapRowGap'] ?? 20;
                $col_gap = $attributes['zolo_fbGapColGap'] ?? 20;
                $styles[] = "display: grid;";
                $styles[] = "grid-template-columns: repeat({$cols}, 1fr);";
                $styles[] = "row-gap: {$row_gap}{$gap_unit};";
                $styles[] = "column-gap: {$col_gap}{$gap_unit};";
            }
        } elseif ($layout === 'masonry') {
            $cols = $attributes['zolo_fbColumnsRange'] ?? 3;
            $is_linked = $attributes['zolo_fbGapIsLinked'] ?? true;
            $gap_unit = $attributes['zolo_fbGapUnit'] ?? 'px';

            if ($is_linked) {
                $gap = $attributes['zolo_fbGapGap'] ?? 20;
                $styles[] = "column-count: {$cols};";
                $styles[] = "column-gap: {$gap}{$gap_unit};";
            } else {
                $col_gap = $attributes['zolo_fbGapColGap'] ?? 20;
                $styles[] = "column-count: {$cols};";
                $styles[] = "column-gap: {$col_gap}{$gap_unit};";
            }
        }

        return implode(' ', $styles);
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
        $layout = $attributes['layoutType'];

        if ($layout !== 'grid' && $layout !== 'masonry') {
            return '';
        }

        // Desktop values
        $cols_desk = $attributes['zolo_fbColumnsRange'] ?? 3;
        $is_linked_desk = $attributes['zolo_fbGapIsLinked'] ?? true;
        $gap_desk = $attributes['zolo_fbGapGap'] ?? 20;
        $row_gap_desk = $attributes['zolo_fbGapRowGap'] ?? $gap_desk;
        $col_gap_desk = $attributes['zolo_fbGapColGap'] ?? $gap_desk;
        $gap_unit_desk = $attributes['zolo_fbGapUnit'] ?? 'px';

        // Tablet values
        $cols_tab = $attributes['zolo_TABfbColumnsRange'] ?? $cols_desk;
        $gap_tab = $attributes['zolo_TABfbGapGap'] ?? $gap_desk;
        $row_gap_tab = $attributes['zolo_TABfbGapRowGap'] ?? $row_gap_desk;
        $col_gap_tab = $attributes['zolo_TABfbGapColGap'] ?? $col_gap_desk;
        $gap_unit_tab = $attributes['zolo_TABfbGapUnit'] ?? $gap_unit_desk;

        // Mobile values
        $cols_mob = $attributes['zolo_MOBfbColumnsRange'] ?? $cols_tab;
        $gap_mob = $attributes['zolo_MOBfbGapGap'] ?? $gap_tab;
        $row_gap_mob = $attributes['zolo_MOBfbGapRowGap'] ?? $row_gap_tab;
        $col_gap_mob = $attributes['zolo_MOBfbGapColGap'] ?? $col_gap_tab;
        $gap_unit_mob = $attributes['zolo_MOBfbGapUnit'] ?? $gap_unit_tab;

        $css = '<style>';

        // Desktop styles
        if ($layout === 'grid') {
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-grid {";
            $css .= "grid-template-columns: repeat({$cols_desk}, 1fr);";
            if ($is_linked_desk) {
                $css .= "gap: {$gap_desk}{$gap_unit_desk};";
            } else {
                $css .= "row-gap: {$row_gap_desk}{$gap_unit_desk};";
                $css .= "column-gap: {$col_gap_desk}{$gap_unit_desk};";
            }
            $css .= "}";
        } elseif ($layout === 'masonry') {
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-masonry {";
            $css .= "column-count: {$cols_desk};";
            if ($is_linked_desk) {
                $css .= "column-gap: {$gap_desk}{$gap_unit_desk};";
            } else {
                $css .= "column-gap: {$col_gap_desk}{$gap_unit_desk};";
            }
            $css .= "}";
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-masonry .zolo-fb-post {";
            if ($is_linked_desk) {
                $css .= "margin-bottom: {$gap_desk}{$gap_unit_desk};";
            } else {
                $css .= "margin-bottom: {$row_gap_desk}{$gap_unit_desk};";
            }
            $css .= "}";
        }

        // Tablet styles
        $css .= "@media (max-width: 1024px) {";
        if ($layout === 'grid') {
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-grid {";
            $css .= "grid-template-columns: repeat({$cols_tab}, 1fr) !important;";
            $css .= "row-gap: {$row_gap_tab}{$gap_unit_tab};";
            $css .= "column-gap: {$col_gap_tab}{$gap_unit_tab};";
            $css .= "}";
        } elseif ($layout === 'masonry') {
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-masonry {";
            $css .= "column-count: {$cols_tab} !important;";
            $css .= "column-gap: {$col_gap_tab}{$gap_unit_tab};";
            $css .= "}";
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-masonry .zolo-fb-post {";
            $css .= "margin-bottom: {$row_gap_tab}{$gap_unit_tab};";
            $css .= "}";
        }
        $css .= "}";

        // Mobile styles
        $css .= "@media (max-width: 767px) {";
        if ($layout === 'grid') {
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-grid {";
            $css .= "grid-template-columns: repeat({$cols_mob}, 1fr) !important;";
            $css .= "row-gap: {$row_gap_mob}{$gap_unit_mob};";
            $css .= "column-gap: {$col_gap_mob}{$gap_unit_mob};";
            $css .= "}";
        } elseif ($layout === 'masonry') {
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-masonry {";
            $css .= "column-count: {$cols_mob} !important;";
            $css .= "column-gap: {$col_gap_mob}{$gap_unit_mob};";
            $css .= "}";
            $css .= ".zolo-facebook-feed-{$unique_id} .layout-masonry .zolo-fb-post {";
            $css .= "margin-bottom: {$row_gap_mob}{$gap_unit_mob};";
            $css .= "}";
        }
        $css .= "}";

        $css .= '</style>';

        return $css;
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
     * @return array
     */
    private function get_facebook_posts_from_api($page_id, $access_token, $count = 6, $cache_expiration = 3600)
    {
        // Create cache key
        $cache_key = 'zolo_fb_posts_' . \md5($page_id . $access_token . $count);

        // Try to get from cache (skip if force refresh is requested)
        $force_refresh = isset($_GET['fb_refresh']) || isset($_GET['nocache']);
        $cached_posts = \get_transient($cache_key);
        if ($cached_posts !== false && !$force_refresh) {
            return $cached_posts;
        }

        // Fetch from Facebook Graph API
        $api_url = \sprintf(
            'https://graph.facebook.com/v18.0/%s/posts?fields=id,message,created_time,full_picture,reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(CARE).limit(0).summary(total_count).as(reactions_care),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry),reactions.limit(0).summary(total_count).as(reactions_total),comments.summary(true),shares&limit=%d&access_token=%s',
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
    private function extract_hashtags($content)
    {
        \preg_match_all('/#(\w+)/', $content, $matches);
        return !empty($matches[0]) ? \array_slice($matches[0], 0, 5) : [];
    }

    /**
     * Get demo posts (fallback)
     *
     * @param int $count Number of posts to retrieve
     * @return array
     */
    private function get_demo_posts($count = 6)
    {
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
                'reactions' => 8,
                'reaction_types' => [
                    'like' => 0,
                    'love' => 0,
                    'care' => 8,
                    'wow' => 0,
                    'haha' => 0,
                    'sad' => 0,
                    'angry' => 0,
                ],
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
                'reaction_types' => [
                    'like' => 15,
                    'love' => 7,
                    'care' => 0,
                    'wow' => 0,
                    'haha' => 0,
                    'sad' => 0,
                    'angry' => 0,
                ],
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
                'reaction_types' => [
                    'like' => 25,
                    'love' => 10,
                    'care' => 0,
                    'wow' => 0,
                    'haha' => 0,
                    'sad' => 0,
                    'angry' => 0,
                ],
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
                'reaction_types' => [
                    'like' => 12,
                    'love' => 3,
                    'care' => 0,
                    'wow' => 3,
                    'haha' => 0,
                    'sad' => 0,
                    'angry' => 0,
                ],
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
