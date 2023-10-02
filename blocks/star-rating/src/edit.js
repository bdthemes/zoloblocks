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

import { BLOCK_PREFIX, STAR_SIZE, STAR_SPACING, STAR_MARGIN, TITLE_MARGIN, ITEMS_ALIGN } from './constants';
import Inspector from './inspector';

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
        desktopAlignStyle: itemsDeskAlign,
        tabAlignStyle: itemsTabAlign,
        mobAlignStyle: itemsMobAlign,
    } = generateResAlignmentStyle({
        controlName: ITEMS_ALIGN,
        property: 'align-items',
        attributes,
    });

    // icon

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsDeskAlign}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsTabAlign}
        }

    `;

    const mobileAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsMobAlign}
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
        </>
    );
}
