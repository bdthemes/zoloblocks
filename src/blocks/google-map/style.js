/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateTypographyStyles, generateResRangeStyle, GlobalStyleHanlder, generateDimensionStyle } = window.zoloModule;

import { MAP_BRADIUS, MAP_HEIGHT } from './constants';
import { MINFO_TYPO } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, markerInfoColor } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};
    const {
        active: activeHover = false,
        blur: blurHover = 0,
        brightness: brightnessHover = 100,
        contrast: contrastHover = 100,
        saturate: saturateHover = 100,
        hueRotate: hueRotateHover = 0,
    } = attributes?.cssFiltersHover || {};

    const {
        desktopRangeStyle: deskHeight,
        tabRangeStyle: tabHeight,
        mobRangeStyle: mobHeight,
    } = generateResRangeStyle({
        controlName: MAP_HEIGHT,
        property: 'height',
        attributes,
    });

    // marker info typography
    const {
        typoStylesDesktop: infoDeskTypo,
        typoStylesTab: infoTabTypo,
        typoStylesMobile: infoMobTypo,
    } = generateTypographyStyles({
        prefixConstant: MINFO_TYPO,
        attributes,
    });

    // border radius
    const {
        dimensionStylesDesktop: borderRadiusDesk,
        dimensionStylesTab: borderRadiusTab,
        dimensionStylesMobile: borderRadiusMob,
    } = generateDimensionStyle({
        controlName: MAP_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-google-map .zolo-gmap-wrapper {
            ${deskHeight}
            ${borderRadiusDesk}
        }
        .${uniqueId}.wp-block-zolo-google-map .zolo-gmap-marker-info {
            color: ${markerInfoColor};
            ${infoDeskTypo}
        }


        ${
            active
                ? `
                        .${uniqueId}.wp-block-zolo-google-map .zolo-gmap-wrapper {
                            filter:
                                blur(${blur}px)
                                brightness(${brightness}%)
                                contrast(${contrast}%)
                                saturate(${saturate}%)
                                hue-rotate(${hueRotate}deg)
                        }
       `
                : ''
        }

        ${
            activeHover
                ? `
                    .${uniqueId}.wp-block-zolo-google-map .zolo-gmap-wrapper:hover {
                        filter:
                            blur(${blurHover}px)
                            brightness(${brightnessHover}%)
                            contrast(${contrastHover}%)
                            saturate(${saturateHover}%)
                            hue-rotate(${hueRotateHover}deg)
                    }

       `
                : ''
        }





    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-google-map .zolo-gmap-wrapper {
            ${tabHeight}
            ${borderRadiusTab}
        }
        .${uniqueId}.wp-block-zolo-google-map .zolo-gmap-marker-info {
            ${infoTabTypo}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-google-map .zolo-gmap-wrapper {
            ${mobHeight}
            ${borderRadiusMob}
        }
        .${uniqueId}.wp-block-zolo-google-map .zolo-gmap-marker-info {
            ${infoMobTypo}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.googleMap.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.googleMap.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.googleMap.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
