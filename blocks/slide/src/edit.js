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
} = window.zoloModule;

import { BLOCK_PREFIX, SLIDE_BG, SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

import Inspector from './inspector';

/**
 * Filter Slide Item block on Register
 * and pass the block as a child of swiper-slide
 */
const zoloSlide = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        if ('zolo/slide' === props.name) {
            return (
                <div className="swiper-slide">
                    <BlockListBlock {...props} />
                </div>
            );
        }

        return <BlockListBlock {...props} />;
    };
}, 'zoloSlide');

addFilter('editor.BlockListBlock', 'zolo/slide', zoloSlide);

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, zoloStyles, enableOverlay, overlayType, overlayColor, overlayGradient } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number


    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`),
    });

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

    const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

    // Set All Style in "zoloStyles" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(zoloStyles) != JSON.stringify(styles)) {
            setAttributes({ zoloStyles: styles });
        }
    }, [attributes]);

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-content-outer`,
            slot: 'container-start',
        },
        {
            template: [['core/paragraph']],
            templateLock: false,
            orientation: 'horizontal',
        }
    );

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <style>{`${softMinifyCssStrings(allStyle)}`}</style>
            <div {...blockProps}>
                <div {...innerBlocksProps} />
            </div>
        </>
    );
}
