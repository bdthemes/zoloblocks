/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    GlobalStyleHanlder,
    generateResCounterStyle,
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateGapStyle,
} = window.zoloModule;

import { BTN_ALIGNMENT, LABEL_MARGIN, ICON_SIZE } from './constants';

import { LABEL_TYPO } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, labelColor, requiredColor, iconColor } = attributes;

    // submit button
    const {
        desktopAlignStyle: buttonAlignmentDesktop,
        tabAlignStyle: buttonAlignmentTab,
        mobAlignStyle: buttonAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: BTN_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    const btnDeskAlign = `width: ${buttonAlignmentDesktop === 'text-align:justify;' ? '100%' : ''};`;
    const btnTabAlign = `width: ${buttonAlignmentTab === 'text-align:justify;' ? '100%' : ''};`;
    const btnMobAlign = `width: ${buttonAlignmentMob === 'text-align:justify;' ? '100%' : ''};`;

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
        .${uniqueId} .zolo-label {
            ${labelTypoDesk}
            color: ${labelColor};
            ${labelMarginDesk}
        }

        .${uniqueId} .zolo-required {
            color: ${requiredColor};
        }

        .${uniqueId}.wp-block-zolo-form .zolo-submit-btn {
            ${buttonAlignmentDesktop}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-submit-btn button{
            ${btnDeskAlign}
        }
	`;
    const tabletAllStyle = ``;
    const mobileAllStyle = ``;

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
