/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResRangeStyle,
    generateBorderStyle,
    generateResCounterStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    generateGapStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    BUTTON_PADDING,
    ICON_TEXT_SPACING,
    BLOCK_MARGIN,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    PT_ICON_WIDTH,
    PT_ICON_HEIGHT,
} from './constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        socialBgColor,
        socialColor,
        socialBgHoverColor,
        socialTextColor,
        socialTextHoverColor,
        borderHoverColor,
        iconColor,
        iconHoverColor,
        iconBgColor,
        iconBgHoverColor,
    } = attributes;

    //  button general settings

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		
	
  	`;
    const tabletAllStyle = `
		
	`;

    const mobileAllStyle = `
		
       
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
