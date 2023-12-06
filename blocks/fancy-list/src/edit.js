/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { softMinifyCssStrings, DisplayIcon, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY } from './constants/typoPrefixConstants';

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        preset,
        parentClasses,
        mediaType,
        mediaText,
        image,
        headingTag,
        fancyTitle,
        fancyListText,
        fancyIcon,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        dscTag,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses), preset),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.cta} alt={__('Call to Action Preview', 'zolo-blocks')} />;
    }

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `zolo-fancy-list-container`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/fancy-list-child'],
            template: [['zolo/fancy-list-child'], ['zolo/fancy-list-child'], ['zolo/fancy-list-child'], ['zolo/fancy-list-child']],
            templateLock: false,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    /**
     * Custom Append Button for InnerBlocks
     */
    const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
    const appendBlock = () => {
        const newBlock = wp.blocks.createBlock('zolo/fancy-list-child', {});
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls></BlockControls>
            <div {...blockProps}>
                <div {...innerBlocksProps} />
                <button className="zolo-appender-btn" label={__('Add List Item', 'zolo-blocks')} onClick={() => appendBlock()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    {__('Add List Item', 'zolo-blocks')}
                </button>
            </div>
        </>
    );
}
