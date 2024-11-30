/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {applyFilters} from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
  generateDimensionStyle,
  generateBorderStyle,
  generateTypographyStyles,
  generateResRangeStyle,
  generateNormalBGControlStyles,
  GlobalStyleHanlder,
} = window.zoloModule;

import {FIELD_TYPO, LABEL_TYPO} from './constants/typoPrefixConstant';
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
  ICON_SIZE,
} from './constants';

const Style = ({props}) => {
  const {attributes, setAttributes} = props;
  const {
    uniqueId,
    showLabel,
    labelColor,
    textColor,
    showRequiredSymbol,
    requiredColor
  } = attributes;

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

  const {backgroundStylesDesktop: labelBGStyle} = generateNormalBGControlStyles({
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

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        ${showLabel ? `
            .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label-wrapper {
                ${labelMarginDesk}
            }
            .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label {
                ${labelTypoDesk}
                color: ${labelColor};
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label{
                ${labelPaddingDesk}
                ${labelBGStyle}
                ${labelBorderStyles}
                ${labelBRDesktop}
            }
            ${showRequiredSymbol ? `
                .${uniqueId}.wp-block-zolo-checkbox-field .zolo-required {
                    color: ${requiredColor};
                }
            ` : ''}
        ` : ''}

        .${uniqueId}.wp-block-zolo-checkbox-field .zolo-field-input-item label{
          ${textColor ? `color: ${textColor};` : ''}
          ${fieldTypoDesk}
        }

        .${uniqueId}.wp-block-zolo-checkbox-field .zolo-field-input-item input[type="checkbox"] {
            ${fieldBorderStyles}
            ${fieldBRDesktop}
            ${fieldPaddingDesktop}
            ${fieldBGStyle}
        }
    `;

  const tabletAllStyle = `
        ${showLabel ? `
            .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label-wrapper {
                ${labelMarginTab}
            }
            .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label {
                ${labelTypoTab}
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label {
                ${labelPaddingTab}
                ${labelBorderStylesTab}
                ${labelBRTab}
            }
        ` : ''}
        .${uniqueId}.wp-block-zolo-checkbox-field .zolo-field-input-item label{
          ${fieldTypoTab}
        }
        .${uniqueId}.wp-block-zolo-checkbox-field .zolo-field-input-item input[type="checkbox"] {
            ${fieldBorderStylesTab}
            ${fieldBRTab}
            ${fieldPaddingTab}
            ${fieldTabBGStyle}
        }
    `;

  const mobileAllStyle = `
        ${showLabel ? `
            .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label-wrapper {
                ${labelMarginMob}
            }
            .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label {
                ${labelTypoMob}
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-checkbox-field .zolo-label {
                ${labelPaddingMob}
                ${labelBorderStylesMob}
                ${labelBRMob}
            }
        ` : ''}
        .${uniqueId}.wp-block-zolo-checkbox-field .zolo-field-input-item label{
          ${fieldTypoMob}
        }
        .${uniqueId}.wp-block-zolo-checkbox-field .zolo-field-input-item input[type="checkbox"] {
            ${fieldTypoMob}
            ${fieldBorderStylesMob}
            ${fieldBRMob}
            ${fieldPaddingMob}
            ${fieldMobBGStyle}
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
