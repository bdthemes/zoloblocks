/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
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
    handleUniqueId,
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

import { BLOCK_PREFIX, STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';
import Inspector from './inspector';
import { TITLE_TYPO } from './constants/typoPrefixConstant';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, blockStyle, showTitle, title, titleTag, titleColor, titlePosition, rating, activeStarColor, inactiveStarColor } =
        attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`),
    });

    // styles
    const {
        desktopAlignStyle: itemsVDeskAlign,
        tabAlignStyle: itemsVTabAlign,
        mobAlignStyle: itemsVMobAlign,
    } = generateResAlignmentStyle({
        controlName: ITEMS_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopRangeStyle: deskGap,
        tabRangeStyle: tabGap,
        mobRangeStyle: mobGap,
    } = generateResRangeStyle({
        controlName: TITLE_GAP,
        property: 'gap',
        attributes,
    });

    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        attributes,
    });

    // Star Rating Style
    const {
        desktopRangeStyle: deskSize,
        tabRangeStyle: tabSize,
        mobRangeStyle: mobSize,
    } = generateResRangeStyle({
        controlName: STAR_SIZE,
        property: 'width',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVDeskAlign}
        }
        .${uniqueId} .star-rating-inner {
            ${deskGap}
        }
        .${uniqueId} .start-rating-title {
            color: ${titleColor};
            ${titleDeskTypo}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${deskSize}
            ${activeStarColor ? `fill: ${activeStarColor};` : ''}
        }
        .${uniqueId} .zolo-star-rating .empty-star svg {
            ${inactiveStarColor ? `fill: ${inactiveStarColor};` : ''}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVTabAlign}
        }
        .${uniqueId} .star-rating-inner {
            ${tabGap}
        }
        .${uniqueId} .start-rating-title {
            ${titleTabTypo}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${tabSize}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVMobAlign}
        }
        .${uniqueId} .star-rating-inner {
            ${mobGap}
        }
        .${uniqueId} .start-rating-title {
            ${titleMobTypo}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${mobSize}
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

    // Set All Style in "blockStyle" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <style>{`${softMinifyCssStrings(allStyle)}`}</style>
            <div {...blockProps}>
                <div className={classnames('start-rating-wrapper', titlePosition)}>
                    <div className={classnames('star-rating-inner', titlePosition)}>
                        {showTitle && (
                            <RichText
                                tagName={titleTag}
                                className="start-rating-title"
                                value={title}
                                onChange={(v) => setAttributes({ title: v })}
                                placeholder={__('Enter title', 'zolo-blocks')}
                            />
                        )}
                        <StarRating rating={rating} total={5} />
                    </div>
                </div>
            </div>
        </>
    );
}
