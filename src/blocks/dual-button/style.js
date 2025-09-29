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
    generateTextShadowStyles,
    generateTextStrokeStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
    generateMaskStyles,
} = window.zoloModule;

import {
    BUTTON_ALIGNMENT,
    BUTTON_WIDTH,
    BUTTON_ONE_ICON_POSITIONS,
    BUTTON_ONE_BG,
    BUTTON_ONE_BORDER,
    BUTTON_ONE_BORDER_RADIUS,
    BUTTON_ONE_MARGIN,
    BUTTON_ONE_PADDING,
    BUTTON_ONE_SHADOW,
    BUTTON_ONE_ALIGN,
    BUTTON_TWO_BG,
    BUTTON_TWO_BORDER,
    BUTTON_TWO_BORDER_RADIUS,
    BUTTON_TWO_MARGIN,
    BUTTON_TWO_PADDING,
    BUTTON_TWO_SHADOW,
    BUTTON_TWO_ALIGN,
    MIDDLE_TEXT_BG,
    MIDDLE_TEXT_MARGIN,
    MIDDLE_TEXT_PADDING,
    MIDDLE_TEXT_SHADOW,
    MIDDLE_TEXT_BORDER,
    MIDDLE_TEXT_BORDER_RADIUS,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId } = attributes;

    const {
        desktopAlignStyle: buttonDeskAlign,
        tabAlignStyle: buttonTabAlign,
        mobAlignStyle: buttonMobAlign,
    } = generateResAlignmentStyle({
        controlName: BUTTON_ALIGNMENT,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopRangeStyle: buttonWidthDesktop,
        tabRangeStyle: buttonWidthTab,
        mobRangeStyle: buttonWidthMo,
    } = generateResRangeStyle({
        controlName: BUTTON_WIDTH,
        property: 'width',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .zolo-btn-group {
            ${buttonDeskAlign}
        }
        .${uniqueId} .zolo-btn {
            ${buttonWidthDesktop}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-btn-group { 
            ${buttonTabAlign}
        }
        .${uniqueId} .zolo-btn {
            ${buttonWidthTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .zolo-btn-group {
            ${buttonMobAlign}
        }
        .${uniqueId} .zolo-btn {
            ${buttonWidthMo}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.counter.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.counter.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.counter.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
