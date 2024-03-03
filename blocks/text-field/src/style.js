/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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

import { FIELD_TYPO, LABEL_TYPO } from './constants/typoPrefixConstant';
import { LABEL_MARGIN, FIELD_PADDING, FIELD_BG, FIELD_BORDER, FIELD_BRADIUS, ICON_SIZE } from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, showLabel, labelColor, textColor, placeholderColor, iconColor, showRequiredSymbol, requiredColor } = attributes;

    // label
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
            ${fieldPaddingDesktop}
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
        `
                : ''
        }

        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item input {
            ${fieldTypoTab}
            ${fieldBorderStylesTab}
            ${fieldBRTab}
            ${fieldPaddingTab}
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
        `
                : ''
        }
        
        .${uniqueId}.wp-block-zolo-text-field .zolo-field-input-item input {
            ${fieldTypoMob}
            ${fieldBorderStylesMob}
            ${fieldBRMob}
            ${fieldPaddingMob}
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
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
};

export default Style;
