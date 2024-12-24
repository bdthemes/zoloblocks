/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateTextStrokeStyles,
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateResCounterStyle,
    generateResRangeStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    generateGapStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import { TEXTPATHTYPO } from './constants/typoPrefixConstant';
import {
    TEXTPATH_ALIGN,
    TEXTPATH_SIZE,
    TEXT_PATH_STROKE,
    TEXT_WORD_SPACING,
    PATH_TEXT_SPACING,
    CIRCLE_DURATION,
    CIRCLE_IMG_HEIGHT,
    CIRCLE_IMG_WIDTH,
    CIRCLE_IMAGE_BACKGROUND,
    CIRCLE_IMAGE_PADDING,
    CIRCLE_IMAGE_MARGIN,
    CIRCLE_IMAGE_BORDER,
    CIRCLE_IMAGE_BOX_SHADOW,
    CIRCLE_IMAGE_BORDER_RADIUS,
    PATH_THICKNESS,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        textPathShow,
        textpathRotate,
        textPathColor,
        textPathHoverColor,
        textPathType,
        textPathTypeCircle,
        circleAnimationDuration,
        direction,
        pathColor,
    } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};

    const {
        desktopAlignStyle: textPathDeskAlignStyle,
        tabAlignStyle: textPathTabAlignStyle,
        mobAlignStyle: textPathMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: TEXTPATH_ALIGN,
        property: 'text-align',
        attributes,
    });
    const {
        desktopRangeStyle: DeskTextpathWidth,
        tabRangeStyle: TabTextpathWidth,
        mobRangeStyle: MobTextpathWidth,
    } = generateResRangeStyle({
        controlName: TEXTPATH_SIZE,
        property: '--width',
        attributes,
    });

    const {
        typoStylesDesktop: DesktopTextpathTypo,
        typoStylesTab: TabTextpathTypo,
        typoStylesMobile: MobTextpathTypo,
    } = generateTypographyStyles({
        prefixConstant: TEXTPATHTYPO,
        attributes,
    });
    const {
        desktopTextStrokeStyle: Desktextstroke,
        tabTextStrokeStyle: Tabktextstroke,
        mobTextStrokeStyle: Mobtextstroke,
    } = generateTextStrokeStyles({
        controlName: TEXT_PATH_STROKE,
        attributes,
    });

    const {
        desktopRangeStyle: DeskTextpathSpacing,
        tabRangeStyle: TabTextpathSpacing,
        mobRangeStyle: MobTextpathSpacing,
    } = generateResRangeStyle({
        controlName: TEXT_WORD_SPACING,
        property: 'word-spacing',
        attributes,
    });
    const {
        desktopRangeStyle: DeskTextSpacing,
        tabRangeStyle: TabTextSpacing,
        mobRangeStyle: MobTextSpacing,
    } = generateResRangeStyle({
        controlName: PATH_TEXT_SPACING,
        property: 'letter-spacing',
        attributes,
    });
    // Image
    const {
        desktopRangeStyle: DeskCircleImgHeight,
        tabRangeStyle: TabCircleImgHeight,
        mobRangeStyle: MobCircleImgHeight,
    } = generateResRangeStyle({
        controlName: CIRCLE_IMG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: DeskCircleImgWidth,
        tabRangeStyle: TabCircleImgWidth,
        mobRangeStyle: MobCircleImgWidth,
    } = generateResRangeStyle({
        controlName: CIRCLE_IMG_HEIGHT,
        property: 'width',
        attributes,
    });

    const {
        desktopBorderStyle: imageBorderDesk,
        tabBorderStyle: imageBorderTab,
        mobBorderStyle: imageBorderMob,
    } = generateBorderStyle({
        controlName: CIRCLE_IMAGE_BORDER,
        attributes,
    });

    const {
        backgroundStylesDesktop: imageDeskBGStyle,
        backgroundStylesTab: imageTabBGStyle,
        backgroundStylesMobile: imageMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CIRCLE_IMAGE_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: imageBorderRadiusDesk,
        dimensionStylesTab: imageBorderRadiusTab,
        dimensionStylesMobile: imageBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CIRCLE_IMAGE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: imagePaddingDesk,
        dimensionStylesTab: imagePaddingTab,
        dimensionStylesMobile: imagePaddingMob,
    } = generateDimensionStyle({
        controlName: CIRCLE_IMAGE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: imageMarginDesk,
        dimensionStylesTab: imageMarginTab,
        dimensionStylesMobile: imageMarginMob,
    } = generateDimensionStyle({
        controlName: CIRCLE_IMAGE_MARGIN,
        styleFor: 'padding',
        attributes,
    });

    const { boxShadowStyle: imageBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CIRCLE_IMAGE_BOX_SHADOW,
    });

    const directionStyle = circleAnimationDuration.direction === 'clockwise' ? 1 : -1;

    const {
        desktopRangeStyle: pathDeskThickness,
        tabRangeStyle: pathTabThickness,
        mobRangeStyle: pathMobThickness,
    } = generateResRangeStyle({
        controlName: PATH_THICKNESS,
        property: 'stroke-width',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `

        ${
            circleAnimationDuration.direction
                ? `
                .${uniqueId}.wp-block-zolo-text-path {
                    --zolo-rotate-animation-50: ${180 * directionStyle}deg;
                    --zolo-rotate-animation-100: ${360 * directionStyle}deg;
                }
                `
                : ''
        }
        ${
            textPathType === 'circle' && textPathTypeCircle === true
                ? `
                    .${uniqueId}.wp-block-zolo-text-path svg{
                        animation: rotate-animation var(--text-path-circle-transition) infinite linear;
                        ${circleAnimationDuration && `--text-path-circle-transition:${circleAnimationDuration.duration}ms`}
                    }
            `
                : ''
        }

        .${uniqueId}.wp-block-zolo-text-path  {
          ${textPathDeskAlignStyle}
        }
        .${uniqueId}.wp-block-zolo-text-path tspan {
            ${Desktextstroke}
            ${DeskTextpathSpacing}
            ${DeskTextSpacing}
            ${textPathColor && `fill:${textPathColor}`}

        }
        .${uniqueId}.wp-block-zolo-text-path tspan:hover {
            ${textPathHoverColor && `fill:${textPathHoverColor}`}
        }
        .${uniqueId}.wp-block-zolo-text-path .zolo-path{
            ${textPathShow && 'stroke:#2667ff'};
            ${pathDeskThickness}
        }
        .${uniqueId}.wp-block-zolo-text-path svg {
            ${DesktopTextpathTypo}
            ${textpathRotate && `rotate:${textpathRotate}deg`};
            ${DeskTextpathWidth}
        }

        .${uniqueId}.wp-block-zolo-text-path .zolo-path {
            ${pathColor && `stroke:${pathColor}`}
        }

        .${uniqueId}.wp-block-zolo-text-path .zolo-circle-image {
             ${imageMarginDesk}
        }
        .${uniqueId}.wp-block-zolo-text-path .zolo-circle-image {
            ${DeskCircleImgHeight}
            ${DeskCircleImgWidth}
            ${imageDeskBGStyle}
            ${imagePaddingDesk}
            ${imageBorderDesk}
            ${imageBorderRadiusDesk}
            ${imageBoxShadow}
        }
        ${
            active
                ? `
                     .${uniqueId}.wp-block-zolo-text-path .zolo-circle-image .zolo-img {
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
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-text-path  {
          ${textPathTabAlignStyle}
        }
        .${uniqueId}.wp-block-zolo-text-path tspan {
            ${Tabktextstroke}
            ${TabTextpathSpacing}
            ${TabTextSpacing}
        }
        .${uniqueId}.wp-block-zolo-text-path svg {
            ${TabTextpathTypo}
            ${TabTextpathWidth}
        }

        .${uniqueId}.wp-block-zolo-text-path .zolo-circle-image {
            ${TabCircleImgHeight}
            ${TabCircleImgWidth}
            ${imageTabBGStyle}
            ${imagePaddingTab}
            ${imageBorderTab}
            ${imageBorderRadiusTab}
        }
        .${uniqueId}.wp-block-zolo-text-path .zolo-path{
            ${pathTabThickness}
        }
    `;

    const mobileAllStyle = `
         .${uniqueId}.wp-block-zolo-text-path  {
          ${textPathMobAlignStyle}
        }
        .${uniqueId}.wp-block-zolo-text-path tspan {
            ${Mobtextstroke}
            ${MobTextpathSpacing}
            ${MobTextSpacing}
        }
        .${uniqueId}.wp-block-zolo-text-path svg {
            ${MobTextpathTypo}
            ${MobTextpathWidth}
        }
        .${uniqueId}.wp-block-zolo-text-path .zolo-circle-image {
            ${MobCircleImgHeight}
            ${MobCircleImgWidth}
            ${imageMobBGStyle}
            ${imagePaddingMob}
            ${imageBorderMob}
            ${imageBorderRadiusMob}
        }
        .${uniqueId}.wp-block-zolo-text-path .zolo-path{
            ${pathMobThickness}
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
