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
    CIRCLE_SIZE,
    MAIN_CIRCLE_SIZE,
    MAIN_CIRCLE_BORDER,
    MAIN_CIRCLE_SHADOW,
    MAIN_CIRCLE_RADIUS,
    IMAGE_SIZE,
    IMAGE_BORDER,
    IMAGE_SHADOW,
    IMAGE_RADIUS,
    HOVER_IMAGE_SHADOW,
    ICON_SIZE,
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
    const { uniqueId, animation, animationDuration, iconColor, hoverIconColor } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};

    const {
        active: activeHover = false,
        blur: blurHover = 0,
        brightness: brightnessHover = 100,
        contrast: contrastHover = 100,
        saturate: saturateHover = 100,
        hueRotate: hueRotateHover = 0,
    } = attributes?.cssFiltersHover || {};

    // const {
    //     desktopRangeStyle: circleSizeWidthDesk,
    //     tabRangeStyle: circleSizeWidthTab,
    //     mobRangeStyle: circleSizeWidthMob,
    // } = generateResRangeStyle({
    //     controlName: CIRCLE_SIZE,
    //     property: 'width',
    //     attributes,
    // });

    // const {
    //     desktopRangeStyle: circleSizeHeightDesk,
    //     tabRangeStyle: circleSizeHeightTab,
    //     mobRangeStyle: circleSizeHeightMob,
    // } = generateResRangeStyle({
    //     controlName: CIRCLE_SIZE,
    //     property: 'height',
    //     attributes,
    // });

    const {
        desktopRangeStyle: mainImageWidthDesk,
        tabRangeStyle: mainImageWidthTab,
        mobRangeStyle: mainImageWidthMob,
    } = generateResRangeStyle({
        controlName: MAIN_CIRCLE_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: mainImageHeightDesk,
        tabRangeStyle: mainImageHeightTab,
        mobRangeStyle: mainImageHeightMob,
    } = generateResRangeStyle({
        controlName: MAIN_CIRCLE_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: mainImageBorderDesk,
        tabBorderStyle: mainImageBorderTab,
        mobBorderStyle: mainImageBorderMob,
    } = generateBorderStyle({
        controlName: MAIN_CIRCLE_BORDER,
        attributes,
    });

    const { boxShadowStyle: mainCircleBoxShadow } = generateBoxShadowStyles({
        controlName: MAIN_CIRCLE_SHADOW,
        attributes,
    });

    const {
        dimensionStylesDesktop: mainCircleRadiusDesk,
        dimensionStylesTab: mainCircleRadiusTab,
        dimensionStylesMobile: mainCircleRadiusMob,
    } = generateDimensionStyle({
        controlName: MAIN_CIRCLE_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    //image styles

    const {
        desktopRangeStyle: imageWidthDesk,
        tabRangeStyle: imageWidthTab,
        mobRangeStyle: imageWidthMob,
    } = generateResRangeStyle({
        controlName: IMAGE_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: imageHeightDesk,
        tabRangeStyle: imageHeightTab,
        mobRangeStyle: imageHeightMob,
    } = generateResRangeStyle({
        controlName: IMAGE_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: imageBorderDesk,
        tabBorderStyle: imageBorderTab,
        mobBorderStyle: imageBorderMob,
    } = generateBorderStyle({
        controlName: IMAGE_BORDER,
        attributes,
    });

    const { boxShadowStyle: imageBoxShadow } = generateBoxShadowStyles({
        controlName: IMAGE_SHADOW,
        attributes,
    });

    const {
        dimensionStylesDesktop: imageRadiusDesk,
        dimensionStylesTab: imageRadiusTab,
        dimensionStylesMobile: imageRadiusMob,
    } = generateDimensionStyle({
        controlName: IMAGE_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: hoverImageBoxShadow } = generateBoxShadowStyles({
        controlName: HOVER_IMAGE_SHADOW,
        attributes,
    });

    //icon

    const {
        desktopRangeStyle: iconSizeWidthDesk,
        tabRangeStyle: iconSizeWidthTab,
        mobRangeStyle: iconSizeWidthMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: iconSizeHeightDesk,
        tabRangeStyle: iconSizeHeightTab,
        mobRangeStyle: iconSizeHeightMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        backgroundStylesDesktop: iconDeskBGStyle,
        backgroundStylesTab: iconTabBGStyle,
        backgroundStylesMobile: iconMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: iconPaddingDesk,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMob,
    } = generateDimensionStyle({
        controlName: ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: iconBorderDesk,
        tabBorderStyle: iconBorderTab,
        mobBorderStyle: iconBorderMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });

    const { boxShadowStyle: iconBoxShadow } = generateBoxShadowStyles({
        controlName: ICON_SHADOW,
        attributes,
    });

    const {
        dimensionStylesDesktop: iconRadiusDesk,
        dimensionStylesTab: iconRadiusTab,
        dimensionStylesMobile: iconRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: hoverIconDeskBGStyle,
        backgroundStylesTab: hoverIconTabBGStyle,
        backgroundStylesMobile: hoverIconMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: HOVER_ICON_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: hoverIconBoxShadow } = generateBoxShadowStyles({
        controlName: HOVER_ICON_SHADOW,
        attributes,
    });

    // Animation styles
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
        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item {
            ${mainImageWidthDesk}
            ${mainImageHeightDesk}
            ${mainImageBorderDesk}
            ${mainCircleRadiusDesk}
            ${mainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item img {
            ${imageWidthDesk}
            ${imageHeightDesk}
            ${imageBorderDesk}
            ${imageRadiusDesk}
            ${imageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item:hover img {
            ${hoverImageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-icon .zolo__display-icon {
            ${iconDeskBGStyle}
            ${iconPaddingDesk}
            ${iconBorderDesk}
            ${iconBoxShadow}
            ${iconRadiusDesk}
        }

        .${uniqueId} .zolo-block-circle-icon-wrap .zolo__display-icon {
            ${iconSizeWidthDesk}
            ${iconSizeHeightDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-list-icon .zolo__display-icon {
            ${hoverIconDeskBGStyle}
            ${hoverIconBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-list-icon .zolo__display-icon svg {
            ${hoverIconColor ? `color: ${hoverIconColor};` : ''}
        }

        ${
            active
                ? `
                    .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item img{
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
                    .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item:hover img {
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
        ${animationStyles}
        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item {
            ${mainImageWidthTab}
            ${mainImageHeightTab}
            ${mainImageBorderTab}
            ${mainCircleRadiusTab}
            ${mainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item img {
            ${imageWidthTab}
            ${imageHeightTab}
            ${imageBorderTab}
            ${imageRadiusTab}
            ${imageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item:hover img {
            ${hoverImageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-icon .zolo__display-icon {
            ${iconTabBGStyle}
            ${iconPaddingTab}
            ${iconBorderTab}
            ${iconBoxShadow}
            ${iconRadiusTab}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-icon .zolo__display-icon svg {
            ${iconSizeWidthTab}
            ${iconSizeHeightTab}
            ${iconColor ? `color: ${iconColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-list-icon .zolo__display-icon {
            ${hoverIconTabBGStyle}
            ${hoverIconBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-list-icon .zolo__display-icon svg {
            ${hoverIconColor ? `color: ${hoverIconColor};` : ''}
        }
    `;

    const mobileAllStyle = `
        ${animationStyles}
        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item {
            ${mainImageWidthMob}
            ${mainImageHeightMob}
            ${mainImageBorderMob}
            ${mainCircleRadiusMob}
            ${mainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item img {
            ${imageWidthMob}
            ${imageHeightMob}
            ${imageBorderMob}
            ${imageRadiusMob}
            ${imageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item:hover img {
            ${hoverImageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-icon .zolo__display-icon {
            ${iconMobBGStyle}
            ${iconPaddingMob}
            ${iconBorderMob}
            ${iconBoxShadow}
            ${iconRadiusMob}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-icon .zolo__display-icon svg {
            ${iconSizeWidthMob}
            ${iconSizeHeightMob}
            ${iconColor ? `color: ${iconColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-list-icon .zolo__display-icon {
            ${hoverIconMobBGStyle}
            ${hoverIconBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-list-icon .zolo__display-icon svg {
            ${hoverIconColor ? `color: ${hoverIconColor};` : ''}
        }
    `;

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
