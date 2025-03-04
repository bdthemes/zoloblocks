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

    // const {
    //     desktopRangeStyle: defaultVolumeDesk,
    //     tabRangeStyle: defaultVolumeTab,
    //     mobRangeStyle: defaultVolumeMob,
    // } = generateResRangeStyle({
    //     controlName: DEFAULT_VOLUME,
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: controlPaddingDesk,
    //     dimensionStylesTablet: controlPaddingTab,
    //     dimensionStylesMobile: controlPaddingMob,
    // } = generateDimensionStyle({
    //     controlName: CONTROL_PADDING,
    //     styleFor: 'padding',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: controlBgColorDesk,
    //     backgroundStylesTab: controlBgColorTab,
    //     backgroundStylesMobile: controlBgColorMob,
    // } = generateNormalBGControlStyles({
    //     controlName: CONTROL_BG_COLOR,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const {
    //     backgroundStylesDesktop: normalPlayButtonBgDesk,
    //     backgroundStylesTab: normalPlayButtonBgTab,
    //     backgroundStylesMobile: normalPlayButtonBgMob,
    // } = generateNormalBGControlStyles({
    //     controlName: NORMAL_PLAY_BUTTON_BG,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const {
    //     desktopBorderStyle: normalPlayBorderDesk,
    //     tabBorderStyle: normalPlayBorderTab,
    //     mobBorderStyle: normalPlayBorderMob,
    // } = generateBorderStyle({
    //     controlName: NORMAL_PLAY_BORDER,
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: normalPlayBorderRadiusDesk,
    //     dimensionStylesTab: normalPlayBorderRadiusTab,
    //     dimensionStylesMobile: normalPlayBorderRadiusMob,
    // } = generateDimensionStyle({
    //     controlName: NORMAL_PLAY_BORDER_RADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });

    // const { boxShadowStyle: normalPlayBoxShadow } = generateBoxShadowStyles({
    //     controlName: NORMAL_PLAY_BOX_SHADOW,
    //     attributes,
    // });

    // const {
    //     desktopRangeStyle: normalPlayIconSizeDesk,
    //     tabRangeStyle: normalPlayIconSizeTab,
    //     mobRangeStyle: normalPlayIconSizeMob,
    // } = generateResRangeStyle({
    //     controlName: NORMAL_PLAY_ICON_SIZE,
    //     property: 'width',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: hoverPlayButtonBgDesk,
    //     backgroundStylesTab: hoverPlayButtonBgTab,
    //     backgroundStylesMobile: hoverPlayButtonBgMob,
    // } = generateNormalBGControlStyles({
    //     controlName: HOVER_PLAY_BUTTON_BG,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const { boxShadowStyle: hoverPlayBoxShadow } = generateBoxShadowStyles({
    //     controlName: HOVER_PLAY_BOX_SHADOW,
    //     attributes,
    // });

    // const {
    //     desktopRangeStyle: seekBarHeightDesk,
    //     tabRangeStyle: seekBarHeightTab,
    //     mobRangeStyle: seekBarHeightMob,
    // } = generateResRangeStyle({
    //     controlName: SEEK_BAR_HEIGHT,
    //     property: 'height',
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: seekBarBorderRadiusDesk,
    //     dimensionStylesTab: seekBarBorderRadiusTab,
    //     dimensionStylesMobile: seekBarBorderRadiusMob,
    // } = generateDimensionStyle({
    //     controlName: SEEK_BAR_BORDER_RADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: normalVolumeBgDesk,
    //     backgroundStylesTab: normalVolumeBgTab,
    //     backgroundStylesMobile: normalVolumeBgMob,
    // } = generateNormalBGControlStyles({
    //     controlName: NORMAL_VOLUME_BG,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const {
    //     desktopBorderStyle: normalVolumeBorderDesk,
    //     tabBorderStyle: normalVolumeBorderTab,
    //     mobBorderStyle: normalVolumeBorderMob,
    // } = generateBorderStyle({
    //     controlName: NORMAL_VOLUME_BORDER,
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: normalVolumeBorderRadiusDesk,
    //     dimensionStylesTab: normalVolumeBorderRadiusTab,
    //     dimensionStylesMobile: normalVolumeBorderRadiusMob,
    // } = generateDimensionStyle({
    //     controlName: NORMAL_VOLUME_BORDER_RADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });

    // const { boxShadowStyle: normalVolumeBoxShadow } = generateBoxShadowStyles({
    //     controlName: NORMAL_VOLUME_BOX_SHADOW,
    //     attributes,
    // });

    // const {
    //     desktopRangeStyle: normalVolumeIconSizeDesk,
    //     tabRangeStyle: normalVolumeIconSizeTab,
    //     mobRangeStyle: normalVolumeIconSizeMob,
    // } = generateResRangeStyle({
    //     controlName: NORMAL_VOLUME_ICON_SIZE,
    //     property: 'width',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: hoverVolumeBgDesk,
    //     backgroundStylesTab: hoverVolumeBgTab,
    //     backgroundStylesMobile: hoverVolumeBgMob,
    // } = generateNormalBGControlStyles({
    //     controlName: HOVER_VOLUME_BG,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const { boxShadowStyle: hoverVolumeBoxShadow } = generateBoxShadowStyles({
    //     controlName: HOVER_VOLUME_BOX_SHADOW,
    //     attributes,
    // });

    // const {
    //     desktopRangeStyle: barHeightDesk,
    //     tabRangeStyle: barHeightTab,
    //     mobRangeStyle: barHeightMob,
    // } = generateResRangeStyle({
    //     controlName: BAR_HEIGHT,
    //     property: 'height',
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: volumeBarBorderRadiusDesk,
    //     dimensionStylesTab: volumeBarBorderRadiusTab,
    //     dimensionStylesMobile: volumeBarBorderRadiusMob,
    // } = generateDimensionStyle({
    //     controlName: VOLUME_BAR_BORDER_RADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: normalFullButtonBgDesk,
    //     backgroundStylesTab: normalFullButtonBgTab,
    //     backgroundStylesMobile: normalFullButtonBgMob,
    // } = generateNormalBGControlStyles({
    //     controlName: NORMAL_FULL_BUTTON_BG,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const {
    //     desktopBorderStyle: normalFullBorderDesk,
    //     tabBorderStyle: normalFullBorderTab,
    //     mobBorderStyle: normalFullBorderMob,
    // } = generateBorderStyle({
    //     controlName: NORMAL_FULL_BORDER,
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: normalFullBorderRadiusDesk,
    //     dimensionStylesTab: normalFullBorderRadiusTab,
    //     dimensionStylesMobile: normalFullBorderRadiusMob,
    // } = generateDimensionStyle({
    //     controlName: NORMAL_FULL_BORDER_RADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });

    // const { boxShadowStyle: normalFullBoxShadow } = generateBoxShadowStyles({
    //     controlName: NORMAL_FULL_BOX_SHADOW,
    //     attributes,
    // });

    // const {
    //     desktopRangeStyle: normalFullIconSizeDesk,
    //     tabRangeStyle: normalFullIconSizeTab,
    //     mobRangeStyle: normalFullIconSizeMob,
    // } = generateResRangeStyle({
    //     controlName: NORMAL_FULL_ICON_SIZE,
    //     property: 'width',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: hoverFullButtonBgDesk,
    //     backgroundStylesTab: hoverFullButtonBgTab,
    //     backgroundStylesMobile: hoverFullButtonBgMob,
    // } = generateNormalBGControlStyles({
    //     controlName: HOVER_FULL_BUTTON_BG,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const { boxShadowStyle: hoverFullBoxShadow } = generateBoxShadowStyles({
    //     controlName: HOVER_FULL_BOX_SHADOW,
    //     attributes,
    // });

    const desktopAllStyle = `
        .${uniqueId} .zolo-video-player {
            ${videoAlignDesk}
    `;

    const tabletAllStyle = ``;
    const mobileAllStyle = ``;

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
