/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Fragment, useEffect, useRef } from 'react';
import { useSelect } from '@wordpress/data';
import classnames from 'classnames';

// Import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

/**
 * Edit function
 */

export default function Edit(props) {
    const { attributes, className } = props;
    const { uniqueId, parentClasses, showNavigation } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, parentClasses),
    });

    const swiperRef = useRef(null);
    const deviceType = useSelect((select) => select('core/editor').getDeviceType());

    useEffect(() => {
        const updateSwiper = () => {
            if (swiperRef.current) {
                swiperRef.current.update(); // Trigger Swiper update
            }
        };

        // Attach the resize event listener to the window
        const editorWindow = document.querySelector('.editor-post-editor')?.ownerDocument?.defaultView;

        if (editorWindow) {
            editorWindow.addEventListener('resize', updateSwiper);
        }

        // Cleanup function to remove the event listener
        return () => {
            if (editorWindow) {
                editorWindow.removeEventListener('resize', updateSwiper);
            }
        };
    }, [deviceType]);
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
        <div {...blockProps}>
            <Swiper
                ref={swiperRef}
                modules={[A11y, Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                observer={true}
                observeParents={true}
                navigation={true}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={deviceType === 'Desktop' ? 3: deviceType === 'Tablet' ? 2 : 1}
            >
                <div {...innerBlocksProps} />
            </Swiper>
        </div>
    );
}
