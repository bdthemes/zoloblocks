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

import { VIDEO_ALIGN } from './constants';

// import {  } from './constants/typoPrefixConstants';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,

        // setting
    } = attributes;

    // style

    // const {
    //     desktopRangeStyle: playerWidthDesk,
    //     tabRangeStyle: playerWidthTab,
    //     mobRangeStyle: playerWidthMob,
    // } = generateResRangeStyle({
    //     controlName: PLAYER_WIDTH,
    //     property: 'width',
    //     attributes,
    // });

    const {
        desktopAlignStyle: videoAlignDesk,
        tabAlignStyle: videoAlignTab,
        mobAlignStyle: videoAlignMob,
    } = generateResAlignmentStyle({
        controlName: VIDEO_ALIGN,
        property: 'text-align',
        attributes,
    });

    const desktopAllStyle = `
        .${uniqueId} .wp-block-zolo-video {
            ${videoAlignDesk}
    `;

    const tabletAllStyle = `
        .${uniqueId} .wp-block-zolo-video {
            ${videoAlignTab}
    `;

    const mobileAllStyle = `
        .${uniqueId} .wp-block-zolo-video {
            ${videoAlignMob}
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
