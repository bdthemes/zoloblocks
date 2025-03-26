/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateDimensionStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import { VIDEO_ALIGN, POPUP_BUTTON_ALIGNMENT } from './constants';

// import {  } from './constants/typoPrefixConstants';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,

        // setting
    } = attributes;

    // style

    const {
        desktopAlignStyle: videoAlignDesk,
        tabAlignStyle: videoAlignTab,
        mobAlignStyle: videoAlignMob,
    } = generateResAlignmentStyle({
        controlName: VIDEO_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        desktopAlignStyle: popupButtonAlignDesk,
        tabAlignStyle: popupButtonAlignTab,
        mobAlignStyle: popupButtonAlignMob,
    } = generateResAlignmentStyle({
        controlName: POPUP_BUTTON_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-video {
            ${videoAlignDesk}
        }
        
        .${uniqueId}.wp-block-zolo-video {
            ${popupButtonAlignDesk}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-video .video-player-popup-inline-content{
            ${videoAlignTab}
        }
    `;

    const mobileAllStyle = ` 
        .${uniqueId}.wp-block-zolo-video {
            ${videoAlignMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.video.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.video.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.video.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
