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
    MAIN_CIRCLE_SIZE,
    MAIN_CIRCLE_BORDER,
    MAIN_CIRCLE_SHADOW,
    MAIN_CIRCLE_RADIUS,
    MAIN_IMAGE_SIZE,
    HOVER_MAIN_CIRCLE_BORDER,
    HOVER_MAIN_CIRCLE_SHADOW,
    ICON_SIZE,
    ICON_BG,
    ICON_PADDING,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_RADIUS,
    HOVER_ICON_BG,
    HOVER_ICON_SHADOW,
    IMAGE_SIZE,
    IMAGE_BORDER,
    IMAGE_SHADOW,
    IMAGE_RADIUS,
    HOVER_IMAGE_SHADOW,
    LAYER_1_CIRCLE_SIZE,
    LAYER_2_CIRCLE_SIZE,
    LAYER_3_CIRCLE_SIZE,
    LAYER_1_CIRCLE_BORDER,
    LAYER_2_CIRCLE_BORDER,
    LAYER_3_CIRCLE_BORDER,
} from './constants';

import {} from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        animation,
        animationDuration,
        layer1AnimationDuration,
        layer2AnimationDuration,
        layer3AnimationDuration,
        iconColor,
        hoverIconColor,
        circleItems = [],
        layer1HoverColor,
        layer2HoverColor,
        layer3HoverColor,
    } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};

    const {
        active: activeHover = false,
        blur: blurHover = 0,
        brightness: brightnessHover = 100,
        contrast: contrastHover = 100,
        saturate: saturateHover = 100,
        hueRotate: hueRotateHover = 0,
    } = attributes?.cssFiltersHover || {};

    const getLayerCircleSize = (layer) => {
        const layerItems = circleItems.filter((item) => item.layer === layer);
        if (layerItems.length === 0) {
            return 0;
        }
        return layerItems[0].circleSize || (layer === 'layer1' ? 15 : layer === 'layer2' ? 25 : 35);
    };

    const {
        desktopRangeStyle: mainCircleWidthDesk,
        tabRangeStyle: mainCircleWidthTab,
        mobRangeStyle: mainCircleWidthMob,
    } = generateResRangeStyle({
        controlName: MAIN_CIRCLE_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: mainCircleHeightDesk,
        tabRangeStyle: mainCircleHeightTab,
        mobRangeStyle: mainCircleHeightMob,
    } = generateResRangeStyle({
        controlName: MAIN_CIRCLE_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: mainImageWidthDesk,
        tabRangeStyle: mainImageWidthTab,
        mobRangeStyle: mainImageWidthMob,
    } = generateResRangeStyle({
        controlName: MAIN_IMAGE_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: mainImageHeightDesk,
        tabRangeStyle: mainImageHeightTab,
        mobRangeStyle: mainImageHeightMob,
    } = generateResRangeStyle({
        controlName: MAIN_IMAGE_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: mainCircleBorderDesk,
        tabBorderStyle: mainCircleBorderTab,
        mobBorderStyle: mainCircleBorderMob,
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

    const {
        desktopBorderStyle: hoverMainCircleBorderDesk,
        tabBorderStyle: hoverMainCircleBorderTab,
        mobBorderStyle: hoverMainCircleBorderMob,
    } = generateBorderStyle({
        controlName: HOVER_MAIN_CIRCLE_BORDER,
        attributes,
    });

    const { boxShadowStyle: hoverMainCircleBoxShadow } = generateBoxShadowStyles({
        controlName: HOVER_MAIN_CIRCLE_SHADOW,
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

    // layer circle styles - using CSS variables for size control

    const {
        desktopRangeStyle: layer1CircleSizeDesk,
        tabRangeStyle: layer1CircleSizeTab,
        mobRangeStyle: layer1CircleSizeMob,
    } = generateResRangeStyle({
        controlName: LAYER_1_CIRCLE_SIZE,
        property: '--zolo-circle-wrap-size',
        attributes,
    });

    const {
        desktopRangeStyle: layer2CircleSizeDesk,
        tabRangeStyle: layer2CircleSizeTab,
        mobRangeStyle: layer2CircleSizeMob,
    } = generateResRangeStyle({
        controlName: LAYER_2_CIRCLE_SIZE,
        property: '--zolo-circle-wrap-size',
        attributes,
    });

    const {
        desktopRangeStyle: layer3CircleSizeDesk,
        tabRangeStyle: layer3CircleSizeTab,
        mobRangeStyle: layer3CircleSizeMob,
    } = generateResRangeStyle({
        controlName: LAYER_3_CIRCLE_SIZE,
        property: '--zolo-circle-wrap-size',
        attributes,
    });

    const {
        desktopBorderStyle: layer1CircleBorderDesk,
        tabBorderStyle: layer1CircleBorderTab,
        mobBorderStyle: layer1CircleBorderMob,
    } = generateBorderStyle({
        controlName: LAYER_1_CIRCLE_BORDER,
        attributes,
    });

    const {
        desktopBorderStyle: layer2CircleBorderDesk,
        tabBorderStyle: layer2CircleBorderTab,
        mobBorderStyle: layer2CircleBorderMob,
    } = generateBorderStyle({
        controlName: LAYER_2_CIRCLE_BORDER,
        attributes,
    });

    const {
        desktopBorderStyle: layer3CircleBorderDesk,
        tabBorderStyle: layer3CircleBorderTab,
        mobBorderStyle: layer3CircleBorderMob,
    } = generateBorderStyle({
        controlName: LAYER_3_CIRCLE_BORDER,
        attributes,
    });
    // Animation styles - layer-specific speeds
    const layer1Speed = layer1AnimationDuration ? layer1AnimationDuration / 1000 : 50;
    const layer2Speed = layer2AnimationDuration ? layer2AnimationDuration / 1000 : 100;
    const layer3Speed = layer3AnimationDuration ? layer3AnimationDuration / 1000 : 100;

    const animationStyles = animation
        ? `
        .${uniqueId}.zolo-circle-animation-enabled {
            --zolo-layer1-time: ${layer1Speed}s;
            --zolo-layer2-time: ${layer2Speed}s;
            --zolo-layer3-time: ${layer3Speed}s;
        }
    `
        : '';

    const desktopAllStyle = `
        ${animationStyles}
        
        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_one {
            ${layer1CircleSizeDesk}
            ${layer1CircleBorderDesk}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_two {
            ${layer2CircleSizeDesk}
            ${layer2CircleBorderDesk}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_three {
            ${layer3CircleSizeDesk}
            ${layer3CircleBorderDesk}
        }
        .${uniqueId}.wp-block-zolo-circle-info.zolo-circle-animation-enabled .zolo-circle-icon-wrap > li:hover .zolo-list_one {
            ${layer1HoverColor ? `border-color: ${layer1HoverColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-circle-info.zolo-circle-animation-enabled .zolo-circle-icon-wrap > li:hover .zolo-list_two {
            ${layer2HoverColor ? `border-color: ${layer2HoverColor};` : ''}
        }
        
        .${uniqueId}.wp-block-zolo-circle-info.zolo-circle-animation-enabled .zolo-circle-icon-wrap > li:hover .zolo-list_three {
            ${layer3HoverColor ? `border-color: ${layer3HoverColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item {
            ${mainCircleWidthDesk}
            ${mainCircleHeightDesk}
            ${mainCircleBorderDesk}
            ${mainCircleRadiusDesk}
            ${mainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item:hover {
            ${hoverMainCircleBorderDesk}
            ${hoverMainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item img {
            ${mainImageWidthDesk}
            ${mainImageHeightDesk}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo__display-icon {
            ${iconDeskBGStyle}
            ${iconPaddingDesk}
            ${iconBorderDesk}
            ${iconBoxShadow}
            ${iconRadiusDesk}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo__display-icon svg{
            ${iconSizeWidthDesk}
            ${iconSizeHeightDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo__display-icon:hover  {
            ${hoverIconDeskBGStyle}
            ${hoverIconBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo__display-icon:hover svg{
            ${hoverIconColor ? `fill: ${hoverIconColor};` : ''}
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

        .${uniqueId}.wp-block-zolo-circle-info .zolo-circle-item-img {
            ${imageWidthDesk}
            ${imageHeightDesk}
            ${imageBorderDesk}
            ${imageRadiusDesk}
            ${imageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-circle-item-img {
            ${hoverImageBoxShadow}
        }
    `;

    const tabletAllStyle = `
        ${animationStyles}

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_one {
            ${layer1CircleSizeTab}
            ${layer1CircleBorderTab}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_two {
            ${layer2CircleSizeTab}
            ${layer2CircleBorderTab}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_three {
            ${layer3CircleSizeTab}
            ${layer3CircleBorderTab}
        }
        
        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item {
            ${mainCircleWidthTab}
            ${mainCircleHeightTab}
            ${mainCircleBorderTab}
            ${mainCircleRadiusTab}
            ${mainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item:hover {
            ${hoverMainCircleBorderTab}
            ${hoverMainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item img {
            ${mainImageWidthTab}
            ${mainImageHeightTab}
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

        .${uniqueId}.wp-block-zolo-circle-info .zolo-circle-item-img {
            ${imageWidthTab}
            ${imageHeightTab}
            ${imageBorderTab}
            ${imageRadiusTab}
            ${imageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-circle-item-img {
            ${hoverImageBoxShadow}
        }
    `;

    const mobileAllStyle = `
        ${animationStyles}
        
        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_one {
            ${layer1CircleSizeMob}
            ${layer1CircleBorderMob}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_two {
            ${layer2CircleSizeTab}
            ${layer2CircleBorderMob}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-block-circle-icon-wrap .zolo-list_three {
            ${layer3CircleSizeTab}
            ${layer3CircleBorderMob}
        }
        
        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item {
            ${mainCircleWidthMob}
            ${mainCircleHeightMob}
            ${mainCircleBorderMob}
            ${mainCircleRadiusMob}
            ${mainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item:hover {
            ${hoverMainCircleBorderMob}
            ${hoverMainCircleBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-main-circle-item img {
            ${mainImageWidthMob}
            ${mainImageHeightMob}
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

        .${uniqueId}.wp-block-zolo-circle-info .zolo-circle-item-img {
            ${imageWidthMob}
            ${imageHeightMob}
            ${imageBorderMob}
            ${imageRadiusMob}
            ${imageBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-circle-info .zolo-list-item:hover .zolo-circle-item-img {
            ${hoverImageBoxShadow}
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
