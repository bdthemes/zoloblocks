/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { Button, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses, addNewAccordion } = attributes;

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.accordion} alt={__('Accordion Preview', 'zolo-blocks')} />;
    }

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, 'zolo-accordion-wrap accordion-container', classArrayToStr(parentClasses)),
    });

    const accordionRef = useRef(null);

    useEffect(() => {
        let options = {
            duration: 400,
            showMultiple: false,
            // openOnInit: [0],
        };
        if (accordionRef.current) {
            // new Accordion(accordionRef.current, options);
        }
    }, [addNewAccordion]);

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `zolo-accordion-wrap accordion-container`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/slide'],
            template: [
                [
                    'zolo/accordion-child',
                    {
                        title: 'Accordion Title',
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
        setAttributes({ addNewAccordion: !addNewAccordion });
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton icon="plus" label={__('Add Accordion', 'zolo-blocks')} onClick={() => appendBlock()} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div {...innerBlocksProps} ref={accordionRef} />
                <button className="zolo-appender-btn" onClick={() => appendBlock()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    {__('Add Accordion', 'zolo-blocks')}
                </button>
            </div>
        </>
    );
}
