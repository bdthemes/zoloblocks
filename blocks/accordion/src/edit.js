/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import { Button, ToolbarButton, ToolbarGroup, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses, preset } = attributes;

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.accordion} alt={__('Accordion Preview', 'zoloblocks')} />;
    }

    const acContainerRef = useRef(null);
    const acInstanceRef = useRef(null);
    const [delayedInit, setDelayedInit] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (acContainerRef.current) {
                acInstanceRef.current = new Accordion(acContainerRef.current, {
                    duration: 400,
                    showMultiple: false,
                    // openOnInit: keepFirstOpen ? [0] : [],
                });
            }
            setDelayedInit(false);
        }, 200);

        // Cleanup on component unmount
        return () => {
            clearTimeout(timeoutId);
            if (acInstanceRef.current) {
                acInstanceRef.current.destroy();
            }
        };
    }, [delayedInit]);

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `accordion-container`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/accordion-child'],
            template: [
                [
                    'zolo/accordion-child',
                    {
                        title: 'Accordion Title 1',
                        titleTag: 'h3',
                    },
                ],
                [
                    'zolo/accordion-child',
                    {
                        title: 'Accordion Title 2',
                        titleTag: 'h3',
                    },
                ],
                [
                    'zolo/accordion-child',
                    {
                        title: 'Accordion Title 3',
                        titleTag: 'h3',
                    },
                ],
            ],
            templateLock: false,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    // add new accordion item
    const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
    const appendBlock = () => {
        const newBlock = wp.blocks.createBlock('zolo/accordion-child', {
            title: 'Accordion New Title',
            titleTag: 'h3',
        });
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);

        if (acInstanceRef.current) {
            acInstanceRef.current.update();
        }
    };

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, preset, 'zolo-accordion-wrap', classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton icon="insert" label={__('Add Accordion', 'zoloblocks')} onClick={() => appendBlock()} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener />
                {!delayedInit ? (
                    <>
                        <div {...innerBlocksProps} ref={acContainerRef} />
                        <button className="zolo-appender-btn" onClick={() => appendBlock()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            {__('Add Accordion', 'zoloblocks')}
                        </button>
                    </>
                ) : (
                    <Spinner />
                )}
            </div>
        </>
    );
}
