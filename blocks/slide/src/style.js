/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
    softMinifyCssStrings,
    StarRating,
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateBackgroundControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import { BLOCK_PREFIX, SLIDE_BG, SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, zoloStyles, enableOverlay, overlayType, overlayColor, overlayGradient } = attributes;

    // settings
    const {
        backgroundStylesDesktop: slideBgDesktop,
        backgroundStylesTab: slideBgTab,
        backgroundStylesMobile: slideBgMob,
    } = generateNormalBGControlStyles({
        controlName: SLIDE_BG,
        attributes,
    });

    const {
        desktopBorderStyle: slideDeskBorderStyle,
        tabBorderStyle: slideTabBorderStyle,
        mobBorderStyle: slideMobBorderStyle,
    } = generateBorderStyle({
        controlName: SLIDE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: slideDeskBorderRadius,
        dimensionStylesTab: slideTabBorderRadius,
        dimensionStylesMobile: slideMobBorderRadius,
    } = generateDimensionStyle({
        controlName: SLIDE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: slideDeskPadding,
        dimensionStylesTab: slideTabPadding,
        dimensionStylesMobile: slideMobPadding,
    } = generateDimensionStyle({
        controlName: SLIDE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-slide {
            ${slideBgDesktop}
            ${slideDeskBorderStyle}
            ${slideDeskBorderRadius}
            ${slideDeskPadding}
        }
        ${
            enableOverlay
                ? `
            .${uniqueId}.wp-block-zolo-slide:before {
                ${overlayType == 'overlay_color' ? `background-color: ${overlayColor};` : ''}
                ${overlayType == 'overlay_gradient' ? `background-image: ${overlayGradient};` : ''}
            }
        `
                : ''
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-slide {
            ${slideBgTab}
            ${slideTabBorderStyle}
            ${slideTabBorderRadius}
            ${slideTabPadding}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-slide {
            ${slideBgMob}
            ${slideMobBorderStyle}
            ${slideMobBorderRadius}
            ${slideMobPadding}
        }
    `;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
};

export default Style;
