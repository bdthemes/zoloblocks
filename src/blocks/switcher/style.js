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
    GlobalStyleHanlder,
    generateResAlignmentStyle,
} = window.zoloModule;

import {
    
} from './constants';

import { BUTTON_ONE_TYPO, BUTTON_TWO_TYPO, MIDDLE_TEXT_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,

    } = attributes;

    

    /**
     * All Style Combination
     */
    const desktopAllStyle = ``;

    const tabletAllStyle = ``;

    const mobileAllStyle = ``;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.switcher.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.switcher.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.switcher.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
