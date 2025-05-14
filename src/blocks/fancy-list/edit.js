/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, preset, parentClasses, fancyDirection } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses), fancyDirection),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.cta} alt={__('Call to Action Preview', 'zoloblocks')} />;
    }

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `zolo-fancy-list-container`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/fancy-list-child'],
            template: [
                [
                    'zolo/fancy-list-child',
                    {
                        fancyTitle: 'Fancy Title #1',
                    },
                ],
                [
                    'zolo/fancy-list-child',
                    {
                        fancyTitle: 'Fancy Title #2',
                    },
                ],
                [
                    'zolo/fancy-list-child',
                    {
                        fancyTitle: 'Fancy Title #3',
                    },
                ],
                [
                    'zolo/fancy-list-child',
                    {
                        fancyTitle: 'Fancy Title #4',
                    },
                ],
            ],
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
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div {...innerBlocksProps} />
                <button className="zolo-appender-btn" label={__('Add List Item', 'zoloblocks')} onClick={() => appendBlock()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    {__('Add List Item', 'zoloblocks')}
                </button>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
