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
    generateNormalBGControlStyles,
    generateResAlignmentStyle,
    generateTextStrokeStyles,
} = window.zoloModule;

import {} from './constants';

import { DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { preset, uniqueId, dscColor, textListColor, listIcon, listIconHover, layout, HoverIconColor } = attributes;

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
