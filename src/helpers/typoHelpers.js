import { hasVal } from './helper';
import { prefix } from '../global/constants';

// function to generate typography attributes for multiple typography control based on the array of prefix
export const generateTypographyAttributes = (prefixArray) => {
    const typoAttrs = prefixArray.reduce((total, current) => {
        const result = {
            [`${prefix}${current}FontFamily`]: {
                type: 'string',
            },
            [`${prefix}${current}SizeUnit`]: {
                type: 'string',
                default: 'px',
            },
            [`${prefix}${current}FontSize`]: {
                type: 'number',
            },
            [`${prefix}${current}FontWeight`]: {
                type: 'string',
            },
            [`${prefix}${current}FontStyle`]: {
                type: 'string',
            },
            [`${prefix}${current}TextTransform`]: {
                type: 'string',
            },
            [`${prefix}${current}TextDecoration`]: {
                type: 'string',
            },
            [`${prefix}${current}LetterSpacingUnit`]: {
                type: 'string',
                default: 'px',
            },
            [`${prefix}${current}LetterSpacing`]: {
                type: 'number',
            },
            [`${prefix}${current}LineHeightUnit`]: {
                type: 'string',
                default: 'em',
            },
            [`${prefix}${current}LineHeight`]: {
                type: 'number',
            },

            [`${prefix}TAB${current}SizeUnit`]: {
                type: 'string',
                default: 'px',
            },
            [`${prefix}TAB${current}FontSize`]: {
                type: 'number',
            },
            [`${prefix}TAB${current}LetterSpacingUnit`]: {
                type: 'string',
                default: 'px',
            },
            [`${prefix}TAB${current}LetterSpacing`]: {
                type: 'number',
            },
            [`${prefix}TAB${current}LineHeightUnit`]: {
                type: 'string',
                default: 'em',
            },
            [`${prefix}TAB${current}LineHeight`]: {
                type: 'number',
            },

            [`${prefix}MOB${current}SizeUnit`]: {
                type: 'string',
                default: 'px',
            },
            [`${prefix}MOB${current}FontSize`]: {
                type: 'number',
            },
            [`${prefix}MOB${current}LetterSpacingUnit`]: {
                type: 'string',
                default: 'px',
            },
            [`${prefix}MOB${current}LetterSpacing`]: {
                type: 'number',
            },
            [`${prefix}MOB${current}LineHeightUnit`]: {
                type: 'string',
                default: 'em',
            },
            [`${prefix}MOB${current}LineHeight`]: {
                type: 'number',
            },
        };
        return {
            ...total,
            ...result,
        };
    }, {});
    return typoAttrs;
};

// function to generate typography styles for an element based on it's prefix
export const generateTypographyStyles = ({ prefixConstant, defaultFontSize, attributes }) => {
    const {
        [`${prefix}${prefixConstant}FontFamily`]: fontFamily,
        [`${prefix}${prefixConstant}FontWeight`]: fontWeight,
        [`${prefix}${prefixConstant}FontStyle`]: fontStyle,
        [`${prefix}${prefixConstant}TextTransform`]: textTransform,
        [`${prefix}${prefixConstant}TextDecoration`]: textDecoration,
        [`${prefix}${prefixConstant}FontSize`]: fontSize = defaultFontSize,
        [`${prefix}${prefixConstant}SizeUnit`]: sizeUnit,
        [`${prefix}${prefixConstant}LetterSpacing`]: letterSpacing,
        [`${prefix}${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
        [`${prefix}${prefixConstant}LineHeight`]: lineHeight,
        [`${prefix}${prefixConstant}LineHeightUnit`]: lineHeightUnit,

        [`${prefix}TAB${prefixConstant}SizeUnit`]: TABsizeUnit,
        [`${prefix}TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
        [`${prefix}TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit,
        [`${prefix}TAB${prefixConstant}FontSize`]: TABfontSize,
        [`${prefix}TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
        [`${prefix}TAB${prefixConstant}LineHeight`]: TABlineHeight,

        [`${prefix}MOB${prefixConstant}SizeUnit`]: MOBsizeUnit,
        [`${prefix}MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
        [`${prefix}MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
        [`${prefix}MOB${prefixConstant}FontSize`]: MOBfontSize,
        [`${prefix}MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
        [`${prefix}MOB${prefixConstant}LineHeight`]: MOBlineHeight,
    } = attributes;

    let selectedFont;
    if (fontFamily === 'undefined' || fontFamily === 'Default') {
        selectedFont = 'inherit';
    } else {
        selectedFont = fontFamily;
    }

    const typoStylesDesktop = `
		${selectedFont ? `font-family: ${selectedFont};` : ' '}
		${hasVal(fontSize) ? `font-size: ${fontSize}${sizeUnit};` : ' '}
		${hasVal(lineHeight) ? `line-height: ${lineHeight}${lineHeightUnit};` : ' '}
		${fontWeight ? `font-weight: ${fontWeight};` : ' '}
		${fontStyle ? `font-style: ${fontStyle};` : ' '}
		${textDecoration ? `text-decoration: ${textDecoration};` : ' '}
		${textTransform ? `text-transform: ${textTransform};` : ' '}
		${hasVal(letterSpacing) ? `letter-spacing: ${letterSpacing}${letterSpacingUnit};` : ' '}
	`;

    const typoStylesTab = `
		${hasVal(TABfontSize) ? `font-size: ${TABfontSize}${TABsizeUnit};` : ' '}
		${hasVal(TABlineHeight) ? `line-height: ${TABlineHeight}${TABlineHeightUnit};` : ' '}
		${hasVal(TABletterSpacing) ? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};` : ' '}
	`;

    const typoStylesMobile = `
		${hasVal(MOBfontSize) ? `font-size: ${MOBfontSize}${MOBsizeUnit};` : ' '}
		${hasVal(MOBlineHeight) ? `line-height: ${MOBlineHeight}${MOBlineHeightUnit};` : ' '}
		${hasVal(MOBletterSpacing) ? `letter-spacing: ${MOBletterSpacing}${MOBletterSpacingUnit};` : ' '}
	`;

    return {
        typoStylesDesktop,
        typoStylesTab,
        typoStylesMobile,
    };
};
