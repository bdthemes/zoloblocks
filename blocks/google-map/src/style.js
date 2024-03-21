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

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, markerInfoColor } = attributes;

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
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
};

export default Style;
