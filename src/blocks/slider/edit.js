/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import { Fragment, useEffect, useRef } from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import classnames from 'classnames';
import Inspector from './inspector';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';


// Import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

/**
 * Edit function
 */

// editor
import './editor.scss';

// import style
import Style from './style';
import { add } from '@dnd-kit/utilities';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, parentClasses, addNewSlideBlock } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, parentClasses),
    });

    // add new slide
    const addNewSlide = () => {
        // Create the new slide block
        const newSlideBlock = createBlock('zolo/slide');
        // Insert the new slide block
        dispatch('core/block-editor').insertBlocks(newSlideBlock, 100, clientId);
        setAttributes({ addNewSlideBlock: !addNewSlideBlock });
    };

        const dispatch = useDispatch();

    const deviceType = useSelect((select) => select('core/editor').getDeviceType());

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-wrapper`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/slide'],
            template: [['zolo/slide'], ['zolo/slide'], ['zolo/slide'], ['zolo/slide']],
            templateLock: false,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    return (
        <>
            <Style props={props} />
            <style>
                {`
                [data-type="zolo/slide"] {
                    height: 100%;
                }
            `}
            </style>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton title={__('Add Slide', 'zoloblocks')} icon="insert" onClick={addNewSlide} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <Swiper
                    key={JSON.parse(addNewSlideBlock)}
                    modules={[A11y, Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    observer={true}
                    observeParents={true}
                    navigation={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    // slidesPerView={deviceType === 'Desktop' ? 3 : deviceType === 'Tablet' ? 2 : 1}
                >
                    <div {...innerBlocksProps} />
                </Swiper>
            </div>
        </>
    );
}
