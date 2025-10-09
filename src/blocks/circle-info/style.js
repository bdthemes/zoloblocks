/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const {
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
} = window.zoloModule;

import {
    CONTENT_BG,
    CONTENT_PADDING,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    ICON_BG,
    ICON_BG_HOVER,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_SHADOW_HOVER,
    ICON_BORDER_RADIUS,
    CIRCLE_SIZE,
} from './constants';

import { TITLE_TYPO, TEXT_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId } = attributes;

    const {
        backgroundStylesDesktop: contentBgDesk,
        backgroundStylesTab: contentBgTab,
        backgroundStylesMobile: contentBgMob,
    } = generateNormalBGControlStyles({
        controlName: CONTENT_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: contentPaddingDesktop,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: contentBorderDesk,
        tabBorderStyle: contentBorderTab,
        mobBorderStyle: contentBorderMob,
    } = generateBorderStyle({
        controlName: CONTENT_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: contentBorderRadiusDesktop,
        dimensionStylesTab: contentBorderRadiusTab,
        dimensionStylesMobile: contentBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CONTENT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: iconBgDesk,
        backgroundStylesTab: iconBgTab,
        backgroundStylesMobile: iconBgMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: iconBgHoverDesk,
        backgroundStylesTab: iconBgHoverTab,
        backgroundStylesMobile: iconBgHoverMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG_HOVER,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: iconBorderDesk,
        tabBorderStyle: iconBorderTab,
        mobBorderStyle: iconBorderMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });

    const { boxShadowStyle: iconBoxShadow } = generateBoxShadowStyles({
        controlName: ICON_SHADOW,
        attributes,
    });

    const { boxShadowStyle: iconBoxShadowHover } = generateBoxShadowStyles({
        controlName: ICON_SHADOW_HOVER,
        attributes,
    });

    const {
        dimensionStylesDesktop: iconBorderRadiusDesktop,
        dimensionStylesTab: iconBorderRadiusTab,
        dimensionStylesMobile: iconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        typoStylesDesktop: textTypoDesktop,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const desktopAllStyle = `
        
    `;
    const tabletAllStyle = ``;
    const mobileAllStyle = ``;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.circleInfo.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.circleInfo.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.circleInfo.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
