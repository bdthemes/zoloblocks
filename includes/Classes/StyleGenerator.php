<?php

namespace Zolo\Classes;

use WP_HTML_Tag_Processor;
use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

if (!defined('ABSPATH')) {
    exit;
}

class StyleGenerator {
    use SingletonTrait;

    private $dynamic_styles = '';

    /**
     * Block styles already printed in <head> (keyed by md5), so the footer
     * output does not repeat them.
     *
     * @var array
     */
    private $head_styles = [];

    public function __construct() {
        // Ensure blocks in post content are rendered
        add_filter('the_content', 'do_blocks', 9);

        // Generate Style on block render
        add_filter('render_block', [$this, 'generate_style_on_render_block'], 10, 2);
        add_filter('render_block', [$this, 'particles_effects'], 10, 2);

        // Enqueue Dynamic Styles
        if (wp_is_block_theme()) {
            add_action('wp_head', [$this, 'output_dynamic_styles']);
        } else {
            // Classic themes render the content after wp_head, so styles collected
            // during render can only be printed in the footer, which causes layout
            // shift (CLS). Pre-collect the current post's block styles and print
            // them in <head>; the footer still prints anything rendered later
            // (widgets, other loops). Priority 99 keeps them after enqueued styles.
            add_action('wp_head', [$this, 'output_head_styles'], 99);
            add_action('wp_footer', [$this, 'output_dynamic_styles']);
        }
    }

    /**
     * Print the block styles of the queried post in <head> on classic themes.
     *
     * @return void
     */
    public function output_head_styles() {
        /**
         * Filters whether ZoloBlocks prints the current post's block styles in
         * <head> on classic themes. Return false to keep the footer-only output.
         *
         * @param bool $print_in_head Default true on singular views.
         */
        if (! apply_filters('zolo_print_styles_in_head', is_singular())) {
            return;
        }

        $post = get_queried_object();
        if (! $post instanceof \WP_Post || ! has_blocks($post->post_content)) {
            return;
        }

        $seen_refs = [];
        $css       = apply_filters('zolo_dynamic_styles', $this->collect_block_styles(parse_blocks($post->post_content), $seen_refs));
        $safe_css  = ZoloHelpers::zolo_sanitize_inline_css($css);
        if ('' !== $safe_css) {
            echo '<style id="zolo-block-inline-styles">' . $safe_css . '</style>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        }
    }

    /**
     * Collect zoloStyles from parsed blocks, including inner and synced (reusable) blocks.
     *
     * @param array $blocks    Parsed blocks.
     * @param array $seen_refs Synced block IDs already visited (prevents loops).
     * @return string
     */
    private function collect_block_styles($blocks, &$seen_refs) {
        $css = '';

        // Inner blocks are collected before their parent to match render order
        // (render_block runs for children first), so the CSS cascade is unchanged.
        foreach ($blocks as $block) {
            $name = $block['blockName'] ?? '';

            if (! empty($block['innerBlocks'])) {
                $css .= $this->collect_block_styles($block['innerBlocks'], $seen_refs);
            }

            if ('core/block' === $name && ! empty($block['attrs']['ref'])) {
                $ref = (int) $block['attrs']['ref'];
                if (! isset($seen_refs[$ref])) {
                    $seen_refs[$ref] = true;
                    $synced          = get_post($ref);
                    if ($synced instanceof \WP_Post && 'wp_block' === $synced->post_type && 'publish' === $synced->post_status) {
                        $css .= $this->collect_block_styles(parse_blocks($synced->post_content), $seen_refs);
                    }
                }
            }

            if (str_starts_with((string) $name, 'zolo/') && isset($block['attrs']['zoloStyles'])) {
                $style = ZoloHelpers::zolo_generate_style($block['attrs']['zoloStyles']);
                $key   = md5($style);
                if ('' !== $style && ! isset($this->head_styles[$key])) {
                    $this->head_styles[$key] = true;
                    $css .= $style;
                }
            }
        }

        return $css;
    }

    public function generate_style_on_render_block($block_content, $block) {
        if (isset($block['blockName']) && str_contains($block['blockName'], 'zolo/')) {
            do_action('zolo_block_render_block', $block);
            if (isset($block['attrs']['zoloStyles'])) {
                $style = ZoloHelpers::zolo_generate_style($block['attrs']['zoloStyles']);
                // Skip styles already printed in <head> (classic themes).
                if (! isset($this->head_styles[md5($style)])) {
                    $this->dynamic_styles .= $style;
                }
            }

            $attributes = $block['attrs'];
            if (isset($attributes['uniqueId'])) {
                $tag = new WP_HTML_Tag_Processor($block_content);
                $tag->next_tag();
                $tag->add_class('zolo-block');
                $tag->add_class($attributes['uniqueId']);
                $tag->add_class('parent-' . $attributes['uniqueId']);
                $block_content = $tag->get_updated_html();
            }
        }

        return $block_content;
    }

    public function output_dynamic_styles() {
        $dynamic_styles = apply_filters('zolo_dynamic_styles', $this->dynamic_styles);
        if (!empty($dynamic_styles)) {
            $safe_css = ZoloHelpers::zolo_sanitize_inline_css($dynamic_styles);
            if ('' !== $safe_css) {
                // Use a distinct id when the head already printed the main block styles.
                $style_id = empty($this->head_styles) ? 'zolo-block-inline-styles' : 'zolo-block-inline-styles-footer';
                echo '<style id="' . esc_attr($style_id) . '">' . $safe_css . '</style>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            }
        }
    }

    public function cursors_effects($block_content, $block) {
        if (isset($block['blockName']) && str_contains($block['blockName'], 'zolo/') && $block_content) {

            $zoloCursors = $block['attrs']['zoloCursors'] ?? false;
            if ($zoloCursors) {
                $cursorOptions = $block['attrs']['zoloCursors'] ?? [
                    'active' => true,
                    'source' => 'default',
                    'preset' => 'style-1',
                    'disabledDefault' => false,
                    'speed' => 400,
                    'textLabel' => 'Click Me',
                ];

                // Convert the heading animation to JSON string
                // Convert the heading animation to JSON string
                $cursorOptions = wp_json_encode($cursorOptions);

                if (!empty($cursorOptions)) {
                    // Parse the block content as HTML
                    $dom = new \DOMDocument();
                    // Use explicit error handling to prevent warnings from causing issues
                    libxml_use_internal_errors(true);
                    $dom->loadHTML($block_content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

                    // Retrieve the first div or the outermost element
                    $outerDiv = $dom->firstChild;
                    if ($outerDiv) {
                        // Retrieve existing class attribute
                        $existingClasses = $outerDiv->getAttribute('class');

                        // Add the animation attribute
                        $outerDiv->setAttribute('data-cursors', $cursorOptions);
                        // Restore existing classes
                        if (!empty($existingClasses)) {
                            $outerDiv->setAttribute('class', $existingClasses);
                        }

                        // Save the modified HTML
                        // Use saveHTML() with the specified node to avoid getting unwanted doctype/html/body tags
                        $block_content = $dom->saveHTML($dom->documentElement);
                    }
                }

                // Clean up any libxml errors
                libxml_clear_errors();
            }
        }

        return $block_content;
    }
    public function particles_effects($block_content, $block) {
        if (isset($block['blockName']) && str_contains($block['blockName'], 'zolo/')) {

            $zoloParticles = $block['attrs']['zoloParticles']['active'] ?? false;
            // print_r($zoloParticles);
            if ($zoloParticles) {
                $particlesOptions = $block['attrs']['zoloParticles'] ?? [
                    'active' => true,
                    'source' => 'default',
                    'preset' => 'style-1',
                    'disabledDefault' => false,
                    'speed' => 400,
                    'textLabel' => 'Click Me',
                ];

                // Convert the heading animation to JSON string
                // Convert the heading animation to JSON string
                $particlesOptions = wp_json_encode($particlesOptions);

                if (!empty($particlesOptions)) {
                    // Parse the block content as HTML
                    $dom = new \DOMDocument();
                    // Use explicit error handling to prevent warnings from causing issues
                    libxml_use_internal_errors(true);
                    $dom->loadHTML($block_content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

                    // Retrieve the first div or the outermost element
                    $outerDiv = $dom->firstChild;
                    if ($outerDiv) {
                        // Retrieve existing class attribute
                        $existingClasses = $outerDiv->getAttribute('class');

                        // Add the animation attribute
                        $outerDiv->setAttribute('data-particles', $particlesOptions);
                        // Restore existing classes
                        if (!empty($existingClasses)) {
                            $outerDiv->setAttribute('class', $existingClasses);
                        }

                        // Save the modified HTML
                        // Use saveHTML() with the specified node to avoid getting unwanted doctype/html/body tags
                        $block_content = $dom->saveHTML($dom->documentElement);
                    }
                }

                // Clean up any libxml errors
                libxml_clear_errors();
            }
        }

        return $block_content;
    }
}
