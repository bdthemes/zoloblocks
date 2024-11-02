<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

if (!defined('ABSPATH')) {
    exit;
}

class StyleGenerator {
    use SingletonTrait;

    private $dynamic_styles = '';

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
            add_action('wp_footer', [$this, 'output_dynamic_styles']);
        }
    }

    public function generate_style_on_render_block($block_content, $block) {
        if (isset($block['blockName']) && str_contains($block['blockName'], 'zolo/')) {
            do_action('zolo_block_render_block', $block);
            if (isset($block['attrs']['zoloStyles'])) {
                $style = ZoloHelpers::zolo_generate_style($block['attrs']['zoloStyles']);
                $this->dynamic_styles .= $style;
            }
        }

        return $block_content;
    }

    public function output_dynamic_styles() {
        if (!empty($this->dynamic_styles)) {
            echo '<style id="zolo-block-inline-styles">' . $this->dynamic_styles . '</style>'; // phpcs:ignore
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
