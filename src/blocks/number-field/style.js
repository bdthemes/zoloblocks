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
    generateGapStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import { FIELD_TYPO, LABEL_TYPO } from './constants/typoPrefixConstant';

import {
    LABEL_MARGIN,
    LABEL_BG,
    LABEL_PADDING,
    LABEL_BORDER,
    LABEL_BRADIUS,
    FIELD_SIZE,
    FIELD_MARGIN,
    FIELD_BG,
    FIELD_BORDER,
    FIELD_BRADIUS,
    FIELD_GAP,
    FIELD_SPACE,
    ICON_SIZE,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, showLabel, labelColor, textColor, placeholderColor, iconColor, showRequiredSymbol, requiredColor } = attributes;

    // label
    const {
        desktopBorderStyle: labelBorderStyles,
        tabBorderStyle: labelBorderStylesTab,
        mobBorderStyle: labelBorderStylesMob,
    } = generateBorderStyle({
        controlName: LABEL_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: labelBRDesktop,
        dimensionStylesTab: labelBRTab,
        dimensionStylesMobile: labelBRMob,
    } = generateDimensionStyle({
        controlName: LABEL_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: labelPaddingDesk,
        dimensionStylesTab: labelPaddingTab,
        dimensionStylesMobile: labelPaddingMob,
    } = generateDimensionStyle({
        controlName: LABEL_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { backgroundStylesDesktop: labelBGStyle } = generateNormalBGControlStyles({
        controlName: LABEL_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: labelMarginDesk,
        dimensionStylesTab: labelMarginTab,
        dimensionStylesMobile: labelMarginMob,
    } = generateDimensionStyle({
        controlName: LABEL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: labelTypoDesk,
        typoStylesTab: labelTypoTab,
        typoStylesMobile: labelTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LABEL_TYPO,
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
        desktopRangeStyle: fieldSizeDesk,
        tabRangeStyle: fieldSizeTab,
        mobRangeStyle: fieldSizeMob,
    } = generateResRangeStyle({
        controlName: FIELD_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: fieldHSizeDesk,
        tabRangeStyle: fieldHSizeTab,
        mobRangeStyle: fieldHSizeMob,
    } = generateResRangeStyle({
        controlName: FIELD_SIZE,
        property: 'width',
        attributes,
    });

    const {
        dimensionStylesDesktop: fieldMarginDesktop,
        dimensionStylesTab: fieldMarginTab,
        dimensionStylesMobile: fieldMarginMob,
    } = generateDimensionStyle({
        controlName: FIELD_MARGIN,
        styleFor: 'margin',
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

    const {
        gapStylesDesktop: fieldGapDesk,
        gapStylesTab: fieldGapTab,
        gapStylesMobile: fieldGapMob,
    } = generateGapStyle({
        controlName: FIELD_GAP,
        attributes,
    });

    const {
        desktopRangeStyle: fieldSpaceDesk,
        tabRangeStyle: fieldSpaceTab,
        mobRangeStyle: fieldSpaceMob,
    } = generateResRangeStyle({
        controlName: FIELD_SPACE,
        attributes,
    });

    // Icon
    const {
        desktopRangeStyle: iconSize,
        tabRangeStyle: iconTabSize,
        mobRangeStyle: iconMobSize,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        ${
            showLabel
                ? `
            .${uniqueId}.wp-block-zolo-text-field .zolo-label-wrapper {
                ${labelMarginDesk}
            }
            .${uniqueId}.wp-block-zolo-text-field .zolo-label {
                ${labelTypoDesk}
                color: ${labelColor};
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-text-field .zolo-label{
                ${labelPaddingDesk}
                ${labelBGStyle}
                ${labelBorderStyles}
                ${labelBRDesktop}
            }
            ${
                showRequiredSymbol
                    ? `
                .${uniqueId}.wp-block-zolo-text-field .zolo-required {
                    color: ${requiredColor};
                }
            `
                    : ''
            }
        `
                : ''
        }
        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item input {
            ${textColor ? `color: ${textColor};` : ''}
            ${fieldTypoDesk}
            ${fieldBorderStyles}
            ${fieldBRDesktop}
            ${fieldBGStyle}
        }
        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item input::placeholder {
            ${placeholderColor ? `color: ${placeholderColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item .zolo-input-icon svg {
            ${iconSize}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }
    `;

    const tabletAllStyle = `
        ${
            showLabel
                ? `
            .${uniqueId}.wp-block-zolo-text-field .zolo-label-wrapper {
                ${labelMarginTab}
            }
            .${uniqueId}.wp-block-zolo-text-field .zolo-label {
                ${labelTypoTab}
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-text-field .zolo-label {
                ${labelPaddingTab}
                ${labelBorderStylesTab}
                ${labelBRTab}
            }
        `
                : ''
        }

        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item input {
            ${fieldTypoTab}
            ${fieldBorderStylesTab}
            ${fieldBRTab}
            ${fieldTabBGStyle}
        }

        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item .zolo-input-icon svg {
            ${iconTabSize}
        }
    `;

    const mobileAllStyle = `
        ${
            showLabel
                ? `
            .${uniqueId}.wp-block-zolo-text-field .zolo-label-wrapper {
                ${labelMarginMob}
            }
            .${uniqueId}.wp-block-zolo-text-field .zolo-label {
                ${labelTypoMob}
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-text-field .zolo-label {
                ${labelPaddingMob}
                ${labelBorderStylesMob}
                ${labelBRMob}
            }
        `
                : ''
        }
        
        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item input {
            ${fieldTypoMob}
            ${fieldBorderStylesMob}
            ${fieldBRMob}
            ${fieldMobBGStyle}
        }

        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item .zolo-input-icon svg {
            ${iconMobSize}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.textField.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.textField.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.textField.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
