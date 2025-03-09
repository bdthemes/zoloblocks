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
    generateResCounterStyle,
    generateTextShadowStyles,
    generateResAlignmentStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    GlobalStyleHanlder,
    generateBoxShadowStyles,
    generateTextGradientsStyles,
} = window.zoloModule;

import { TEXT_TYPO, HOVER_TEXT_TYPO, LINK_TYPO, DROP_CAP_TYPO } from './constants/typoPrefixConstant';

import {
    TEXT_MARGIN,
    COLUMNS,
    COLUMNS_GAP,
    TEXT_ALIGNMENT,
    LINK_BG_COLOR,
    LINK_RADIUS,
    LINK_PADDING,
    LINK_BORDER,
    LINK_BOX_SHADOW,
    HOVER_LINK_BG_COLOR,
    HOVER_LINK_RADIUS,
    HOVER_LINK_PADDING,
    DROP_CAP_SHADOW,
    DROP_CAP_BG_COLOR,
    DROP_CAP_BORDER,
    DROP_CAP_RADIUS,
    DROP_CAP_PADDING,
    DROP_CAP_MARGIN,
    TEXT_GRADIENT_COLOR,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;

    const { uniqueId, dropcap, textColor, hoverTextColor, linkColor, hoverLinkColor, dropcapColor, hoverLinkBorderColor } = attributes;

    // text margin
    const {
        dimensionStylesDesktop: textMarginDesk,
        dimensionStylesTab: textMarginTab,
        dimensionStylesMobile: textMarginMob,
    } = generateDimensionStyle({
        controlName: TEXT_MARGIN,
        attributes,
        styleFor: 'margin',
    });

    const {
        desktopRangeStyle: columnsDesktop,
        tabRangeStyle: columnsTab,
        mobRangeStyle: columnsMob,
    } = generateResCounterStyle({
        controlName: COLUMNS,
        property: 'column-count',
        attributes,
    });

    const {
        desktopRangeStyle: columnsGapDesktop,
        tabRangeStyle: columnsGapTab,
        mobRangeStyle: columnsGapMob,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'gap',
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
        desktopBorderStyle: linkBorderDesk,
        tabBorderStyle: linkBorderTab,
        mobBorderStyle: linkBorderMob,
    } = generateBorderStyle({
        controlName: LINK_BORDER,
        attributes,
    });

    const { boxShadowStyle: linkBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: LINK_BOX_SHADOW,
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
        dimensionStylesTab: dropCapRadiusTab,
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

    // text gradient color
    const {
        backgroundStylesDesktop: textGradientDesktop,
        backgroundStylesTab: textGradientTab,
        backgroundStylesMobile: textGradientMobile,
    } = generateTextGradientsStyles({
        controlName: TEXT_GRADIENT_COLOR,
        attributes,
        noMainBGImg: false,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
    .${uniqueId}.wp-block-zolo-advanced-paragraph{
        ${columnsDesktop.replace('px', '')}
        ${columnsGapDesktop}
        ${textMarginDesk}
        ${textGradientDesktop}
    }
    .${uniqueId}.wp-block-zolo-advanced-paragraph{
        ${textColor ? `color: ${textColor};` : ''}
        ${textTypoDesk}
        ${textAlignDesk}

    }

    ${
        dropcap
            ? `
                .${uniqueId}.wp-block-zolo-advanced-paragraph {
                    text-align: left;
                }
                .${uniqueId}.wp-block-zolo-advanced-paragraph::first-letter {
                    font-size: 2em;
                    font-weight: bold;
                    float: left;
                    margin-right: 0.1em;
                    line-height: 1;
                }
             `
            : ''
    }


    .${uniqueId}.wp-block-zolo-advanced-paragraph a{
        ${linkTypoDesk}
        ${linkColor ? `color: ${linkColor};` : ''}
        ${linkBgColorDesk}
        ${linkRadiusDesk}
        ${linkPaddingDesk}
        ${linkBorderDesk}
        ${linkBoxShadow}
    }

    .${uniqueId}.wp-block-zolo-advanced-paragraph a:hover{
        ${hoverLinkColor ? `color: ${hoverLinkColor};` : ''}
        ${hoverLinkBorderColor ? `border-color: ${hoverLinkBorderColor};` : ''}
        ${hoverLinkBgColorDesk}
        ${hoverLinkRadiusDesk}
        ${hoverLinkPaddingDesk}
    }

    ${
        dropcap
            ? `
        .${uniqueId}.wp-block-zolo-advanced-paragraph:first-letter {
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

    const tabletAllStyle = `
    .${uniqueId}.wp-block-zolo-advanced-paragraph{
        ${columnsTab.replace('px', '')}
        ${columnsGapTab}
        ${textMarginTab}
    }
    .${uniqueId}.wp-block-zolo-advanced-paragraph{
        ${textColor ? `color: ${textColor};` : ''}
        ${textTypoTab}
        ${textAlignTab}
    }

    ${
        dropcap
            ? `
        .${uniqueId}.wp-block-zolo-advanced-paragraph:first-letter {
            font-size: 2em;
            font-weight: bold;
            float: left;
            margin-right: 0.1em;
            line-height: 1;
        }
    `
            : ''
    }


    .${uniqueId}.wp-block-zolo-advanced-paragraph a{
        ${linkTypoTab}
        ${linkColor ? `color: ${linkColor};` : ''}
        ${linkBgColorTab}
        ${linkRadiusTab}
        ${linkPaddingTab}
    }

    .${uniqueId}.wp-block-zolo-advanced-paragraph a:hover{
        ${hoverLinkColor ? `color: ${hoverLinkColor};` : ''}
        ${hoverLinkBgColorTab}
        ${hoverLinkRadiusTab}
        ${hoverLinkPaddingTab}
    }

    ${
        dropcap
            ? `
        .${uniqueId}.wp-block-zolo-advanced-paragraph:first-letter {
            ${dropcapColor ? `color: ${dropcapColor};` : ''}
            ${dropCapTypoTab}
            ${dropCapShadowStyle}
            ${dropCapBgColorTab}
            ${dropCapBorderTab}
            ${dropCapRadiusTab}
            ${dropCapPaddingTab}
            ${dropCapMarginTab}
        }
    `
            : ''
    }
    `;

    const mobileAllStyle = `
     .${uniqueId}.wp-block-zolo-advanced-paragraph{
        ${columnsMob.replace('px', '')}
        ${columnsGapMob}
        ${textMarginMob}
    }
    .${uniqueId}.wp-block-zolo-advanced-paragraph{
        ${textColor ? `color: ${textColor};` : ''}
        ${textTypoMob}
        ${textAlignMob}

    }

    ${
        dropcap
            ? `
        .${uniqueId}.wp-block-zolo-advanced-paragraph:first-letter {
            font-size: 2em;
            font-weight: bold;
            float: left;
            margin-right: 0.1em;
            line-height: 1;
        }
    `
            : ''
    }

    .${uniqueId}.wp-block-zolo-advanced-paragraph a{
        ${linkTypoMob}
        ${linkColor ? `color: ${linkColor};` : ''}
        ${linkBgColorMob}
        ${linkRadiusMob}
        ${linkPaddingMob}
    }

    .${uniqueId}.wp-block-zolo-advanced-paragraph a:hover{
        ${hoverLinkColor ? `color: ${hoverLinkColor};` : ''}
        ${hoverLinkBgColorMob}
        ${hoverLinkRadiusMob}
        ${hoverLinkPaddingMob}
    }

    ${
        dropcap
            ? `
        .${uniqueId}.wp-block-zolo-advanced-paragraph:first-letter {
            ${dropcapColor ? `color: ${dropcapColor};` : ''}
            ${dropCapTypoMob}
            ${dropCapShadowStyle}
            ${dropCapBgColorMob}
            ${dropCapBorderMob}
            ${dropCapRadiusMob}
            ${dropCapPaddingMob}
            ${dropCapMarginMob}
        }
    `
            : ''
    }
    `;

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
