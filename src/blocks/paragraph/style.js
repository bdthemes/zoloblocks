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
    generateBorderStyle,
    generateResAlignmentStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import { FIELD_TYPO, TEXT_TYPO } from './constants/typoPrefixConstant';
import {
    LABEL_MARGIN,
    LABEL_BG,
    LABEL_PADDING,
    LABEL_BORDER,
    LABEL_BRADIUS,
    FIELD_PADDING,
    FIELD_BG,
    FIELD_BORDER,
    FIELD_BRADIUS,
    COLUMNS,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, dropcap,textColor, placeholderColor, iconColor, showRequiredSymbol, requiredColor } = attributes;

    // text
    const {
        desktopBorderStyle: textBorderStyles,
        tabBorderStyle: textBorderStylesTab,
        mobBorderStyle: textBorderStylesMob,
    } = generateBorderStyle({
        controlName: LABEL_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: textBRDesktop,
        dimensionStylesTab: textBRTab,
        dimensionStylesMobile: textBRMob,
    } = generateDimensionStyle({
        controlName: LABEL_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: textPaddingDesk,
        dimensionStylesTab: textPaddingTab,
        dimensionStylesMobile: textPaddingMob,
    } = generateDimensionStyle({
        controlName: LABEL_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { backgroundStylesDesktop: textBGStyle } = generateNormalBGControlStyles({
        controlName: LABEL_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: textMarginDesk,
        dimensionStylesTab: textMarginTab,
        dimensionStylesMobile: textMarginMob,
    } = generateDimensionStyle({
        controlName: LABEL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: textTypoDesk,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPO,
        defaultFontSize: '',
        attributes,
    });

    // Field
    const {
        typoStylesDesktop: fieldTypoDesk,
        typoStylesTab: fieldTypoTab,
        typoStylesMobile: fieldTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FIELD_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        desktopBorderStyle: fieldBorderStyles,
        tabBorderStyle: fieldBorderStylesTab,
        mobBorderStyle: fieldBorderStylesMob,
    } = generateBorderStyle({
        controlName: FIELD_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: fieldBRDesktop,
        dimensionStylesTab: fieldBRTab,
        dimensionStylesMobile: fieldBRMob,
    } = generateDimensionStyle({
        controlName: FIELD_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: fieldPaddingDesktop,
        dimensionStylesTab: fieldPaddingTab,
        dimensionStylesMobile: fieldPaddingMob,
    } = generateDimensionStyle({
        controlName: FIELD_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        backgroundStylesDesktop: fieldBGStyle,
        backgroundStylesTab: fieldTabBGStyle,
        backgroundStylesMobile: fieldMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: FIELD_BG,
        attributes,
        noMainBGImg: false,
    });

    // Icon
    const {
        desktopRangeStyle: columnsDesktop,
        tabRangeStyle: columnsTab,
        mobRangeStyle: columnsMob,
    } = generateResRangeStyle({
        controlName: COLUMNS,
        property: 'column-count',
        attributes,
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
        ${textMarginDesk}
        ${textPaddingDesk}
        ${textBRDesktop}
        ${textBGStyle}
        ${textBorderStyles}

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
`;

    const tabletAllStyle = ``;

    const mobileAllStyle = ``;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.textarea.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.textarea.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.textarea.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
