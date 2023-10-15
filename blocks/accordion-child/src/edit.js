/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
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
    classArrayToStr,
    DisplayIcon,
} = window.zoloModule;

import { BLOCK_PREFIX, SLIDE_BG, SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const {
        uniqueId,
        collapseIcon,
        expandIcon,
        zoloStyles,
        enableOverlay,
        overlayType,
        overlayColor,
        overlayGradient,
        title,
        titleTag,
        parentClasses,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            collapseIcon: context['zolo/collapseIcon'],
            expandIcon: context['zolo/expandIcon'],
            titleTag: context['zolo/titleTag'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zolo-accordion-wrapper">
                    <div className="accordion-head">
                        <RichText
                            tagName={titleTag}
                            className="accordion-title"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Title', 'zolo-blocks')}
                        />
                        <button className="accordion-toggle" aria-label="Toggle">
                            <div className="collapsed-mode">{collapseIcon && <DisplayIcon icon={collapseIcon} />}</div>
                            <div className="expanded-mode">{expandIcon && <DisplayIcon icon={expandIcon} />}</div>
                        </button>
                    </div>
                    <div className="accordion-body">
                        <div className="accordion-body-inner">
                            <InnerBlocks />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
