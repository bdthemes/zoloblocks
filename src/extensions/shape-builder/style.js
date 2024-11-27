/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
const {
    generateResAlignmentStyle,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

const Style = (props) => {
    const { attributes } = props;
    const { builderShapes, uniqueId } = attributes || {};

    if (!Array.isArray(builderShapes) || builderShapes.length === 0) {
        return null;
    }

    // Generate CSS for all shapes
    const shapeStyles = builderShapes
        .map((shape, index) => {
            // generate Background
            const {
                backgroundStylesDesktop: normalDeskBGStyle,
                backgroundStylesTab: normalTabBGStyle,
                backgroundStylesMobile: normalMobBGStyle,
            } = generateNormalBGControlStyles({
                controlName: `shapeBG${shape.id}`,
                attributes,
                noMainBGImg: false,
            });
            return `
            .wp-block.zolo-shape-builder-${shape.id} {
                ${normalDeskBGStyle};
            }
        `;
        })
        .join('\n');

    // Combine CSS for different responsive modes
    const shapeBuilderDesktop = `
        ${shapeStyles}
        
    `;
    const shapeBuilderTablet = ``;
    const shapeBuilderMobile = ``;

    return {
        shapeBuilderDesktop,
        shapeBuilderTablet,
        shapeBuilderMobile,
    };
};

export default Style;
