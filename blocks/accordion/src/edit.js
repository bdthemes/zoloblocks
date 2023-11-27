/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
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
    const { preview, uniqueId, parentClasses, totalItems } = attributes;

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.accordion} alt={__('Accordion Preview', 'zolo-blocks')} />;
    }

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, classArrayToStr(parentClasses)),
    });

    // get inner blocks array
    const innerBlocks = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0] || [];
    const innerBlocksArray = innerBlocks && innerBlocks.innerBlocks;
    // set total items
    setAttributes({
        totalItems: innerBlocksArray && innerBlocksArray.length,
    });

    useEffect(() => {
        // Define a function to handle accordion item click
        const handleAccordionItemClick = (event) => {
            const accordionBody = event.target.closest('.zolo-accordion-wrapper').querySelector('.accordion-body');
            const toggleButton = event.target.closest('.zolo-accordion-wrapper').querySelector('.accordion-toggle');
            const accordionHead = event.target.closest('.zolo-accordion-wrapper').querySelector('.accordion-head');
            accordionBody.classList.toggle('zolo-active');
            toggleButton.classList.toggle('zolo-active');
            accordionHead.classList.toggle('zolo-active');
        };

        // Add event listener to the block when it is inserted into the DOM
        const accordionItems = document.querySelectorAll('.zolo-accordion-wrapper');
        accordionItems.forEach((item) => {
            const accordionHead = item.querySelector('.accordion-head');
            const accordionToggle = item.querySelector('.accordion-toggle');
            accordionHead.addEventListener('click', handleAccordionItemClick);
            accordionToggle.addEventListener('click', handleAccordionItemClick);
        });

        // Clean up the event listeners when the block is removed from the DOM
        return () => {
            accordionItems.forEach((item) => {
                const accordionHead = item.querySelector('.accordion-head');
                const accordionToggle = item.querySelector('.accordion-toggle');
                accordionHead.removeEventListener('click', handleAccordionItemClick);
                accordionToggle.removeEventListener('click', handleAccordionItemClick);
            });
        };
    }, [totalItems]);

    const innerBlocksProps = useInnerBlocksProps(
        {},
        {
            allowedBlocks: ['zolo/accordion-child'],
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
                        title: 'Accordion Title',
                        titleTag: 'h3',
                    },
                ],
                [
                    'zolo/accordion-child',
                    {
                        title: 'Accordion Title',
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
        const newBlock = wp.blocks.createBlock('zolo/accordion-child', {});
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <style>{`
                .${uniqueId} .accordion-body.zolo-active {
                    display: block !important;
                    visibility: visible;
                    opacity: 1;
                    height: auto;
               }
            `}</style>

            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton icon="plus" label={__('Add Accordion', 'zolo-blocks')} onClick={() => appendBlock()} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div {...innerBlocksProps} />
                <Button icon="plus" className="zolo-appender-btn" variant="primary" onClick={() => appendBlock()}>
                    {__('Add Accordion', 'zolo-blocks')}
                </Button>
            </div>
        </>
    );
}
