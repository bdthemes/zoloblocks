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

import {} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { preset, uniqueId } = attributes;

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
                desktopAllStyle={applyFilters('zolo.counter.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.counter.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.counter.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
