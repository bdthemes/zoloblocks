/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateResRangeStyle } = window.zoloModule;


const Style = (props) => {
    const { attributes } = props;
    const { shapeBuilder, uniqueId } = attributes

    const shapeBuilderDesktop = ``;
    const shapeBuilderTablet = ``;
    const shapeBuilderMobile = ``;
    return {
        shapeBuilderDesktop,
        shapeBuilderTablet,
        shapeBuilderMobile,
    };
};
export default Style;
