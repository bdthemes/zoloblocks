<?php

/**
 * ZoloBlocks Shape Builder Extension.
 */

namespace Zolo\Extensions;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class ShapeBuilder {

    use SingletonTrait;

    public function __construct() {
        if (ZoloHelpers::is_extension_enabled('shape-builder')) {
            add_action("init", [$this, "shape_builder_assets"]);
            add_action("enqueue_block_editor_assets", [$this, "enqueue_shape_builder_editor_assets"]);
            if (!is_admin()) {
                add_filter("render_block_data", [$this, "modify_render_block_data"]);
                add_filter("render_block", [$this, "render_shape_builder_markup"], 10, 2);
            }
        }
    }

    public function shape_builder_assets() {
        $editor_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/shape-builder/index.asset.php";
        $frontend_asset = trailingslashit(ZOLO_DIR_PATH) . "build/extensions/shape-builder/frontend.asset.php";
        
        // Register editor script
        if (file_exists($editor_asset)) {
            $editor_assets = include $editor_asset;
            wp_register_script(
                'zolo-shape-builder-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/shape-builder/index.js",
                $editor_assets['dependencies'],
                $editor_assets['version'],
                true
            );
            wp_register_style(
                'zolo-shape-builder-editor-style',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/shape-builder/index.css",
                [],
                $editor_assets['version']
            );
        }

        // Register frontend script with GSAP dependency
        if (file_exists($frontend_asset)) {
            $frontend_assets = include $frontend_asset;
            wp_register_script(
                'zolo-shape-builder-frontend',
                trailingslashit(ZOLO_ADMIN_URL) . "build/extensions/shape-builder/frontend.js",
                array_merge($frontend_assets['dependencies'], ['gsap']), // Add GSAP as dependency
                $frontend_assets['version'],
                true
            );
        }
    }

    public function enqueue_shape_builder_editor_assets() {
        wp_enqueue_script('zolo-shape-builder-editor-script');
        wp_enqueue_style('zolo-shape-builder-editor-style');
    }

    public function modify_render_block_data($parsed_block) {
        // Check if block has shape builder enabled
        if (isset($parsed_block['blockName']) && 
            isset($parsed_block['attrs']['shapeBuilder']['enabled']) && 
            $parsed_block['attrs']['shapeBuilder']['enabled'] === true) {
            // Enqueue GSAP and frontend script
            wp_enqueue_script('gsap');
            wp_enqueue_script('gsap-scroll-trigger');
            wp_enqueue_script('zolo-shape-builder-frontend');
        }
        return $parsed_block;
    }

    /**
     * Get shape (predefined or custom)
     */
    public function get_shape($shape_type, $settings)
    {
        // Handle custom uploaded SVG
        if ($shape_type === 'custom') {
            // Check if customSvg exists and has an ID
            $custom_svg_id = null;
            
            if (isset($settings['customSvg']) && is_array($settings['customSvg']) && !empty($settings['customSvg']['id'])) {
                $custom_svg_id = $settings['customSvg']['id'];
            }
            
            if ($custom_svg_id) {
                $svg_path = get_attached_file($custom_svg_id);
                if ($svg_path && file_exists($svg_path)) {
                    $svg = file_get_contents($svg_path);
                    if ($svg) {
                        return [
                            'is_custom'  => true,
                            'custom_svg' => $svg,
                        ];
                    }
                }
            }
            
            // If custom SVG ID not found or file doesn't exist, return null
            return null;
        }

        if ( ! function_exists( 'WP_Filesystem' ) ) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
        }
        WP_Filesystem();
        global $wp_filesystem;

        $json_path = ZOLO_DIR_PATH . 'src/extensions/shape-builder/constants/shapes.json';

        $shapes = [];
        if ( $wp_filesystem->exists( $json_path ) ) {
            $shapes = json_decode( $wp_filesystem->get_contents( $json_path ), true );
        }

        if ( empty( $shapes ) || ! is_array( $shapes ) ) {
            $shapes = [];
        }

        // Handle predefined shapes
        foreach ($shapes as $shape) {
            if ($shape['id'] === $shape_type) {
                return $shape;
            }
        }

        return null;
    }

    /**
     * Generate shape markup
     */
    protected function generate_shape_markup($settings, $wrapper_id, $unique_id, $index)
    {
        $shape_type = $settings['shapeType'] ?? 'circle';
        $shape_id   = $settings['id'] ?? $index;
        $shape      = $this->get_shape($shape_type, $settings);

        if (empty($shape)) {
            return '';
        }

        // Build animation data attributes
        $animation_attrs = '';
        if (isset($settings['animationEnabled']) && $settings['animationEnabled'] === true) {
            $animation_trigger = $settings['animationTrigger'] ?? 'on-load';
            $animation_name = $settings['animationName'] ?? 'fade-in';
            $animation_duration = $settings['animationDuration'] ?? 1;
            $animation_delay = $settings['animationDelay'] ?? 0;
            $animation_easing = $settings['animationEasing'] ?? 'power2.out';
            $animation_repeat = $settings['animationRepeat'] ?? '0';
            $animation_yoyo = isset($settings['animationYoyo']) && $settings['animationYoyo'] === true ? 'true' : 'false';
            $animation_viewport = $settings['animationViewport'] ?? 0.1;

            $animation_attrs = sprintf(
                ' data-animation-enabled="true" data-animation-trigger="%s" data-animation-name="%s" data-animation-duration="%s" data-animation-delay="%s" data-animation-easing="%s" data-animation-repeat="%s" data-animation-yoyo="%s" data-animation-viewport="%s"',
                esc_attr($animation_trigger),
                esc_attr($animation_name),
                esc_attr($animation_duration),
                esc_attr($animation_delay),
                esc_attr($animation_easing),
                esc_attr($animation_repeat),
                esc_attr($animation_yoyo),
                esc_attr($animation_viewport)
            );
        }

        // Styles
        $zIndex = $settings['zIndex'] ?? 1;
        $horizontalOrientation = $settings['horizontalOrientation'] ?? 'start';
        $horizontalOffset = $settings['horizontalOffset'] ?? 0;
        $verticalOrientation = $settings['verticalOrientation'] ?? 'start';
        $verticalOffset = $settings['verticalOffset'] ?? 0;
        $width = $settings['width'] ?? 200;
        $height = $settings['height'] ?? 200;

        $styles = sprintf(
            'position: absolute; pointer-events: none; z-index: %s; %s: %spx; %s: %spx; width: %spx; height: %spx;',
            $zIndex,
            $horizontalOrientation === 'start' ? 'left' : 'right',
            $horizontalOffset,
            $verticalOrientation === 'start' ? 'top' : 'bottom',
            $verticalOffset,
            $width,
            $height
        );
        

         // Custom uploaded SVGs
        if (!empty($shape['is_custom'])) {
            // Get colors from svgColor object (that's where inspector.js stores them)
            $svgColor = $settings['svgColor'] ?? [];
            $customFillColor = $svgColor['customSvgFillColor'] ?? '';
            $customStrokeColor = $svgColor['customSvgStrokeColor'] ?? '';
            
            $svg_content = $shape['custom_svg'];
            
            // Remove inline fill and stroke attributes so CSS/inline styles can control them
            if ($customFillColor) {
                $svg_content = preg_replace('/fill="[^"]*"/i', '', $svg_content);
                $svg_content = preg_replace("/fill='[^']*'/i", '', $svg_content);
            }
            if ($customStrokeColor) {
                $svg_content = preg_replace('/stroke="[^"]*"/i', '', $svg_content);
                $svg_content = preg_replace("/stroke='[^']*'/i", '', $svg_content);
            }
            
            // Build inline styles for SVG
            $custom_styles = 'width: 100%; height: 100%; object-fit: contain;';
            if ($customFillColor) $custom_styles .= " fill: {$customFillColor}; color: {$customFillColor};";
            if ($customStrokeColor) $custom_styles .= " stroke: {$customStrokeColor};";

            // Inject styles into the SVG element
            $svg_content = preg_replace('/<svg/i', '<svg style="' . esc_attr($custom_styles) . '"', $svg_content, 1);

            return '<div data-wrapper-id="' . esc_attr($wrapper_id) . '" class="zolo-shape-builder zolo-shape-builder-custom zolo-shape-builder-' . esc_attr($unique_id) . '-' . esc_attr($shape_id) . '"' . $animation_attrs . ' style="' . esc_attr($styles) . '">' .
                $svg_content .
                '</div>';
        }

        // Predefined SVGs
        $viewBox = $shape['viewBox'] ?? '0 0 100 100';
        $path    = $shape['path'] ?? '';
        $fill_type = $settings['fillType'] ?? 'solid';
        $fill_color = 'currentColor';
        $defs = '';

        if ($fill_type === 'solid') {
            $fill_color = $settings['color'] ?? 'currentColor';
        } elseif ($fill_type === 'gradient') {
            $grad_id = 'grad-' . esc_attr($unique_id) . '-' . esc_attr($shape_id);
            $color1 = $settings['gradientColor1'] ?? '#08AEEC';
            $color2 = $settings['gradientColor2'] ?? '#20E2AD';
            $loc1 = $settings['gradientLocation1'] ?? 0;
            $loc2 = $settings['gradientLocation2'] ?? 100;
            $angle = $settings['gradientAngle'] ?? 90;
            $gradientType = $settings['gradientType'] ?? 'linear';

            if ($gradientType === 'linear') {
                $defs = "
                    <defs>
                        <linearGradient id='{$grad_id}' gradientTransform='rotate({$angle})'>
                            <stop offset='{$loc1}%' stop-color='{$color1}' />
                            <stop offset='{$loc2}%' stop-color='{$color2}' />
                        </linearGradient>
                    </defs>
                ";
            } else {
                 $defs = "
                    <defs>
                        <radialGradient id='{$grad_id}'>
                            <stop offset='{$loc1}%' stop-color='{$color1}' />
                            <stop offset='{$loc2}%' stop-color='{$color2}' />
                        </radialGradient>
                    </defs>
                ";
            }
            $fill_color = "url(#{$grad_id})";
        }

        // SVG Transformation
        // Note: The original JS had a 'transform' property for shapes, but the JSON I read didn't show it for most.
        // Assuming simple path for now as per JSON.
        
        $svg = "
            <svg viewBox='{$viewBox}' preserveAspectRatio='none' style='width: 100%; height: 100%;'>
                {$defs}
                <path d='{$path}' fill='{$fill_color}'></path>
            </svg>
        ";

        return '<div data-wrapper-id="' . esc_attr($wrapper_id) . '" class="zolo-shape-builder zolo-shape-builder-' . esc_attr($unique_id) . '-' . esc_attr($shape_id) . '"' . $animation_attrs . ' style="' . esc_attr($styles) . '">' . $svg . '</div>';
    }

    /**
     * Render final output with all shapes
     */
    public function render_shape_builder_markup($block_content, $block)
    {
        // Check if block has shape builder enabled
        if (!isset($block['attrs']['shapeBuilder']['enabled']) || $block['attrs']['shapeBuilder']['enabled'] !== true) {
            return $block_content;
        }

        $attrs = $block['attrs'];
        if (empty($attrs['shape']) || !is_array($attrs['shape'])) {
            return $block_content;
        }

        // Generate a unique ID for this block instance if not present (though normally passed from block props)
        // Using block attributes uniqueId if available, or generating one
        $unique_id = $attrs['uniqueId'] ?? wp_generate_uuid4();
        $wrapper_id = 'zolo-block-' . $unique_id;

        // `shapes.forEach(el => { const wrapperClass = el.dataset.wrapperId; ... const wrapper = document.querySelector('.' + wrapperClass); ... wrapper.appendChild(el); })`
        // So we need to ensure the BLOCK itself has a class matching `zolo-block-{unique_id}`.
        // We can inject this class into the block content wrapper if possible, or wrap the content.
        
        // Remove any existing shape markup from saved content (from React editor)
        // This ensures PHP backend has full control over shape rendering
        $block_content_clean = preg_replace(
            '/<div[^>]*class="[^"]*zolo-shape-builder[^"]*"[^>]*>.*?<\/div>/s',
            '',
            $block_content
        );
        
        // Inject the class into the first HTML tag of the content
        $block_content_processor = new \WP_HTML_Tag_Processor($block_content_clean);
        if ($block_content_processor->next_tag()) {
            $block_content_processor->add_class($wrapper_id);
            $block_content_clean = $block_content_processor->get_updated_html();
        }

        $shapes_output = '';
        foreach ($attrs['shape'] as $index => $shape) {
            $shapes_output .= $this->generate_shape_markup($shape, $wrapper_id, $unique_id, $index);
        }

        return $block_content_clean . $shapes_output;
    }
}
