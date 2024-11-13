/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateDimensionStyle,
    generateTextShadowStyles,
    generateResAlignmentStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import { TEXT_TYPO, HOVER_TEXT_TYPO, LINK_TYPO, DROP_CAP_TYPO } from './constants/typoPrefixConstant';

import {
    COLUMNS,
    TEXT_ALIGNMENT,
    LINK_BG_COLOR,
    LINK_RADIUS,
    LINK_PADDING,
    HOVER_LINK_BG_COLOR,
    HOVER_LINK_RADIUS,
    HOVER_LINK_PADDING,
    DROP_CAP_SHADOW,
    DROP_CAP_BG_COLOR,
    DROP_CAP_BORDER,
    DROP_CAP_RADIUS,
    DROP_CAP_PADDING,
    DROP_CAP_MARGIN,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;

    const {
        uniqueId,
        dropcap,
        textColor,
        hoverTextColor,
        linkColor,
        hoverLinkColor,
        focusTextColor,
        focusHoverTextColor,
        textDecorColor,
        useBgOnText,
        useTextFill,
        dropcapColor,
    } = attributes;

    const {
        desktopRangeStyle: columnsDesktop,
        tabRangeStyle: columnsTab,
        mobRangeStyle: columnsMob,
    } = generateResRangeStyle({
        controlName: COLUMNS,
        property: 'column-count',
        attributes,
    });

    // text
    const {
        typoStylesDesktop: textTypoDesk,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        desktopAlignStyle: textAlignDesk,
        tabAlignStyle: textAlignTab,
        mobAlignStyle: textAlignMob,
    } = generateResAlignmentStyle({
        controlName: TEXT_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    const {
        typoStylesDesktop: hoverTextTypoDesk,
        typoStylesTab: hoverTextTypoTab,
        typoStylesMobile: hoverTextTypoMob,
    } = generateTypographyStyles({
        controlName: HOVER_TEXT_TYPO,
        prefixConstant: HOVER_TEXT_TYPO,
        defaultFontSize: '',
        attributes,
    });

    // link

    const {
        typoStylesDesktop: linkTypoDesk,
        typoStylesTab: linkTypoTab,
        typoStylesMobile: linkTypoMob,
    } = generateTypographyStyles({
        controlName: LINK_TYPO,
        prefixConstant: LINK_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        backgroundStylesDesktop: linkBgColorDesk,
        backgroundStylesTab: linkBgColorTab,
        backgroundStylesMobile: linkBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: LINK_BG_COLOR,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: linkRadiusDesk,
        dimensionStylesTab: linkRadiusTab,
        dimensionStylesMobile: linkRadiusMob,
    } = generateDimensionStyle({
        controlName: LINK_RADIUS,
        attributes,
        styleFor: 'border-radius',
    });

    const {
        dimensionStylesDesktop: linkPaddingDesk,
        dimensionStylesTab: linkPaddingTab,
        dimensionStylesMobile: linkPaddingMob,
    } = generateDimensionStyle({
        controlName: LINK_PADDING,
        attributes,
        styleFor: 'padding',
    });

    const {
        backgroundStylesDesktop: hoverLinkBgColorDesk,
        backgroundStylesTab: hoverLinkBgColorTab,
        backgroundStylesMobile: hoverLinkBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: HOVER_LINK_BG_COLOR,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: hoverLinkRadiusDesk,
        dimensionStylesTab: hoverLinkRadiusTab,
        dimensionStylesMobile: hoverLinkRadiusMob,
    } = generateDimensionStyle({
        controlName: HOVER_LINK_RADIUS,
        attributes,
        styleFor: 'border-radius',
    });

    const {
        dimensionStylesDesktop: hoverLinkPaddingDesk,
        dimensionStylesTab: hoverLinkPaddingTab,
        dimensionStylesMobile: hoverLinkPaddingMob,
    } = generateDimensionStyle({
        controlName: HOVER_LINK_PADDING,
        attributes,
        styleFor: 'padding',
    });

    // focused

    // const {
    //     dimensionStylesDesktop: focusTextPaddingDesk,
    //     dimensionStylesTab: focusTextPaddingTab,
    //     dimensionStylesMobile: focusTextPaddingMob,
    // } = generateDimensionStyle({
    //     controlName: FOCUS_TEXT_PADDING,
    //     attributes,
    //     styleFor: 'padding',
    // });

    // const {
    //     typoStylesDesktop: focusTextTypoDesk,
    //     typoStylesTab: focusTextTypoTab,
    //     typoStylesMobile: focusTextTypoMob,
    // } = generateTypographyStyles({
    //     controlName: FOCUS_TEXT_TYPO,
    //     prefixConstant: FOCUS_TEXT_TYPO,
    //     defaultFontSize: '',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: useTextBgColorDesk,
    //     backgroundStylesTab: useTextBgColorTab,
    //     backgroundStylesMobile: useTextBgColorMob,
    // } = generateNormalBGControlStyles({
    //     controlName: USE_TEXT_BG_COLOR,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const {
    //     dimensionStylesDesktop: useBgRadiusDesk,
    //     dimensionStylesTab: useBgRadiusTab,
    //     dimensionStylesMobile: useBgRadiusMob,
    // } = generateDimensionStyle({
    //     controlName: USE_BG_RADIUS,
    //     attributes,
    //     styleFor: 'border-radius',
    // });

    // const {
    //     backgroundStylesDesktop: useFillBgColorDesk,
    //     backgroundStylesTab: useFillBgColorTab,
    //     backgroundStylesMobile: useFillBgColorMob,
    // } = generateNormalBGControlStyles({
    //     controlName: USE_FILL_BG_COLOR,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // dropcap
    const {
        typoStylesDesktop: dropCapTypoDesk,
        typoStylesTab: dropCapTypoTab,
        typoStylesMobile: dropCapTypoMob,
    } = generateTypographyStyles({
        controlName: DROP_CAP_TYPO,
        prefixConstant: DROP_CAP_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const { textShadowStyle: dropCapShadowStyle } = generateTextShadowStyles({
        controlName: DROP_CAP_SHADOW,
        attributes,
    });

    const {
        backgroundStylesDesktop: dropCapBgColorDesk,
        backgroundStylesTab: dropCapBgColorTab,
        backgroundStylesMobile: dropCapBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: DROP_CAP_BG_COLOR,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: dropCapBorderDesk,
        tabBorderStyle: dropCapBorderTab,
        mobBorderStyle: dropCapBorderMob,
    } = generateBorderStyle({
        controlName: DROP_CAP_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: dropCapRadiusDesk,
        dimensionStylesTab: dropRadiusTab,
        dimensionStylesMobile: dropCapRadiusMob,
    } = generateDimensionStyle({
        controlName: DROP_CAP_RADIUS,
        attributes,
        styleFor: 'border-radius',
    });

    const {
        dimensionStylesDesktop: dropCapPaddingDesk,
        dimensionStylesTab: dropCapPaddingTab,
        dimensionStylesMobile: dropCapPaddingMob,
    } = generateDimensionStyle({
        controlName: DROP_CAP_PADDING,
        attributes,
        styleFor: 'padding',
    });

    const {
        dimensionStylesDesktop: dropCapMarginDesk,
        dimensionStylesTab: dropCapMarginTab,
        dimensionStylesMobile: dropCapMarginMob,
    } = generateDimensionStyle({
        controlName: DROP_CAP_MARGIN,
        attributes,
        styleFor: 'margin',
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
    .${uniqueId}.wp-block-zolo-paragraph {
        ${columnsDesktop.replace('px', '')}
    }
    .${uniqueId}.wp-block-zolo-paragraph p{
        ${textColor ? `color: ${textColor};` : ''}
        ${textTypoDesk}
        ${textAlignDesk}

    }

    ${
        dropcap
            ? `
        .${uniqueId}.wp-block-zolo-paragraph:first-letter {
            font-size: 2em;
            font-weight: bold;
            float: left;
            margin-right: 0.1em;
            line-height: 1;
        }
    `
            : ''
    }

    .${uniqueId}.wp-block-zolo-paragraph p:hover{
        ${hoverTextColor ? `color: ${hoverTextColor};` : ''}
        ${hoverTextTypoDesk}
    }

    .${uniqueId}.wp-block-zolo-paragraph a{
        ${linkTypoDesk}
        ${linkColor ? `color: ${linkColor};` : ''}
        ${linkBgColorDesk}
        ${linkRadiusDesk}
        ${linkPaddingDesk}
    }

    .${uniqueId}.wp-block-zolo-paragraph a:hover{
        ${hoverLinkColor ? `color: ${hoverLinkColor};` : ''}
        ${hoverLinkBgColorDesk}
        ${hoverLinkRadiusDesk}
        ${hoverLinkPaddingDesk}
    }

    ${
        dropcap
            ? `
        .${uniqueId}.wp-block-zolo-paragraph:first-letter {
            ${dropcapColor ? `color: ${dropcapColor};` : ''}
            ${dropCapTypoDesk}
            ${dropCapShadowStyle}
            ${dropCapBgColorDesk}
            ${dropCapBorderDesk}
            ${dropCapRadiusDesk}
            ${dropCapPaddingDesk}
            ${dropCapMarginDesk}
        }
    `
            : ''
    }
`;

    const tabletAllStyle = ``;

    const mobileAllStyle = ``;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.advancedParagraph.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.advancedParagraph.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.advancedParagraph.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
