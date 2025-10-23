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
    MAIN_IMAGE_WIDTH,
    MAIN_IMAGE_HEIGHT,
    MAIN_IMAGE_BORDER,
    MAIN_IMAGE_SHADOW,
    MAIN_IMAGE_RADIUS,
    ICON_BG,
    ICON_PADDING,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_RADIUS,
    HOVER_ICON_BG,
    HOVER_ICON_SHADOW,
} from './constants';

import {} from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, animation, animationDuration } = attributes;

    const {
        desktopRangeStyle: mainImageWidthDesk,
        tabRangeStyle: mainImageWidthTab,
        mobRangeStyle: mainImageWidthMob,
    } = generateResRangeStyle({
        controlName: MAIN_IMAGE_WIDTH,
        property: 'width',
        attributes,
    });

    // Animation styles - convert milliseconds to seconds
    const animationSpeed = animationDuration ? animationDuration / 1000 : 100;
    const animationSpeedHalf = animationSpeed / 2;

    const animationStyles = animation
        ? `
        .${uniqueId}.zolo-circle-animation-enabled {
            --zolo-circle-time: ${animationSpeed}s;
            --zolo-circle-time-last-item: ${animationSpeedHalf}s;
        }
    `
        : '';

    const desktopAllStyle = `
        ${animationStyles}
    `;
    const tabletAllStyle = '';
    const mobileAllStyle = '';

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.circleInfo.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.circleInfo.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.circleInfo.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
