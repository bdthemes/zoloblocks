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
    classArrayToStr,
} = window.zoloModule;

import { BLOCK_PREFIX, STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';
import Inspector from './inspector';
import { TITLE_TYPO } from './constants/typoPrefixConstant';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, parentClasses, showTitle, title, titleTag, titleColor, titlePosition, rating, activeStarColor, inactiveStarColor } =
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
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
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
