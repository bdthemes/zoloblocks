import { applyFilters } from '@wordpress/hooks';
import {
    CONTENT_ALIGN,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BG,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_SHADOW,
    CONTENT_HOVER_BG,
    CONTENT_HOVER_BORDER,
    CONTENT_HOVER_BRADIUS,
    CONTENT_HOVER_SHADOW,
    CONTENT_TEXT_SHADOW,
    CONTENT_TEXT_STROKE,
    //image
    THUMBNAIL_WIDTH,
    THUMBNAIL_HEIGHT,
    THUMBNAIL_BG,
    THUMBNAIL_PADDING,
    THUMBNAIL_MARGIN,
    THUMBNAIL_BORDER,
    THUMBNAIL_BRADIUS,
    THUMBNAIL_BOX_SHADOW,
    THUMBNAIL_HOVER_SHADOW,
    //heading
    HEADING_TEXT_STROKE,
    HEADING_TEXT_SHADOW,
    HEADING_MARGIN,
    //heading TWO
    HEADING_TWO_TEXT_STROKE,
    HEADING_TWO_TEXT_SHADOW,
    HEADING_TWO_MARGIN,
    //heading THREE
    HEADING_THREE_TEXT_STROKE,
    HEADING_THREE_TEXT_SHADOW,
    HEADING_THREE_MARGIN,
    //link
    LINK_BG,
    LINK_PADDING,
    LINK_MARGIN,
    LINK_BORDER,
    LINK_SHADOW,
    LINK_BORDER_RADIUS,
    LINK_HOVER_BG,
    LINK_HOVER_SHADOW,
} from './constants';

import {
    CONTENT_TYPOGRAPHY,
    HEADING_TYPOGRAPHY,
    HEADING_TWO_TYPOGRAPHY,
    HEADING_THREE_TYPOGRAPHY,
    LINK_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

const {
    generateTextShadowStyles,
    generateTextStrokeStyles,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
    generateResRangeStyle,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        inheritThemeLayout,
        styleTags,
        headingTags,
        contentColor,
        contentHoverColor,
        thumbnailBorderHColor,
        headingColor,
        headingTwoColor,
        headingThreeColor,
        headingHoverColor,
        linkColor,
        linkHoverColor,
        linkHoverBorderColor,
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

    const {
        desktopAlignStyle: contentAlignDesk,
        tabAlignStyle: contentAlignTab,
        mobAlignStyle: contentAlignMob,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        typoStylesDesktop: contentTypoDesk,
        typoStylesTab: contentTypoTab,
        typoStylesMobile: contentTypoMob,
    } = generateTypographyStyles({
        prefixConstant: CONTENT_TYPOGRAPHY,
        attributes,
    });

    const { textShadowStyle: contentTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: CONTENT_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: contentTextStrokeDesk,
        tabTextStrokeStyle: contentTextStrokeTab,
        mobTextStrokeStyle: contentTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: CONTENT_TEXT_STROKE,
    });

    const {
        dimensionStylesDesktop: contentPaddingDesk,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: contentMarginDesk,
        dimensionStylesTab: contentMarginTab,
        dimensionStylesMobile: contentMarginMob,
    } = generateDimensionStyle({
        controlName: CONTENT_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: contentBGDesk,
        backgroundStylesTab: contentBGTab,
        backgroundStylesMobile: contentBGMob,
    } = generateNormalBGControlStyles({
        controlName: CONTENT_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: contentBorderDesk,
        tabBorderStyle: contentBorderTab,
        mobBorderStyle: contentBorderMob,
    } = generateBorderStyle({
        controlName: CONTENT_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: contentBorderRadiusDesk,
        dimensionStylesTab: contentBorderRadiusTab,
        dimensionStylesMobile: contentBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CONTENT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: contentBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTENT_SHADOW,
    });

    const {
        backgroundStylesDesktop: contentHoverBGDesk,
        backgroundStylesTab: contentHoverBGTab,
        backgroundStylesMobile: contentHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: CONTENT_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: contentHoverBorderDesk,
        tabBorderStyle: contentHoverBorderTab,
        mobBorderStyle: contentHoverBorderMob,
    } = generateBorderStyle({
        controlName: CONTENT_HOVER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: contentHoverBRadiusDesk,
        dimensionStylesTab: contentHoverBRadiusTab,
        dimensionStylesMobile: contentHoverBRadiusMob,
    } = generateDimensionStyle({
        controlName: CONTENT_HOVER_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: contentHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTENT_HOVER_SHADOW,
    });

    //image style
    const {
        desktopRangeStyle: thumbWidthDesk,
        tabRangeStyle: thumbWidthTab,
        mobRangeStyle: thumbWidthMob,
    } = generateResRangeStyle({
        controlName: THUMBNAIL_WIDTH,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: thumbHeightDesk,
        tabRangeStyle: thumbHeightTab,
        mobRangeStyle: thumbHeightMob,
    } = generateResRangeStyle({
        controlName: THUMBNAIL_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        dimensionStylesDesktop: thumbPaddingDesk,
        dimensionStylesTab: thumbPaddingTab,
        dimensionStylesMobile: thumbPaddingMob,
    } = generateDimensionStyle({
        controlName: THUMBNAIL_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: thumbMarginDesk,
        dimensionStylesTab: thumbMarginTab,
        dimensionStylesMobile: thumbMarginMob,
    } = generateDimensionStyle({
        controlName: THUMBNAIL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: thumbBGDesk,
        backgroundStylesTab: thumbBGTab,
        backgroundStylesMobile: thumbBGMob,
    } = generateNormalBGControlStyles({
        controlName: THUMBNAIL_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: thumbBorderDesk,
        tabBorderStyle: thumbBorderTab,
        mobBorderStyle: thumbBorderMob,
    } = generateBorderStyle({
        controlName: THUMBNAIL_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: thumbBRadiusDesk,
        dimensionStylesTab: thumbBRadiusTab,
        dimensionStylesMobile: thumbBRadiusMob,
    } = generateDimensionStyle({
        controlName: THUMBNAIL_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: thumbBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: THUMBNAIL_BOX_SHADOW,
    });
    const { boxShadowStyle: thumbHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: THUMBNAIL_HOVER_SHADOW,
    });
    //heading
    const {
        typoStylesDesktop: headingTypoDesk,
        typoStylesTab: headingTypoTab,
        typoStylesMobile: headingTypoMob,
    } = generateTypographyStyles({
        prefixConstant: HEADING_TYPOGRAPHY,
        attributes,
    });

    const { textShadowStyle: headingTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: HEADING_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: headingTextStrokeDesk,
        tabTextStrokeStyle: headingTextStrokeTab,
        mobTextStrokeStyle: headingTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: HEADING_TEXT_STROKE,
    });

    const {
        dimensionStylesDesktop: headingMarginDesk,
        dimensionStylesTab: headingMarginTab,
        dimensionStylesMobile: headingMarginMob,
    } = generateDimensionStyle({
        controlName: HEADING_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //heading TWO
    const {
        typoStylesDesktop: headingTwoTypoDesk,
        typoStylesTab: headingTwoTypoTab,
        typoStylesMobile: headingTwoTypoMob,
    } = generateTypographyStyles({
        prefixConstant: HEADING_TWO_TYPOGRAPHY,
        attributes,
    });

    const { textShadowStyle: headingTwoTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: HEADING_TWO_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: headingTwoTextStrokeDesk,
        tabTextStrokeStyle: headingTwoTextStrokeTab,
        mobTextStrokeStyle: headingTwoTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: HEADING_TWO_TEXT_STROKE,
    });

    const {
        dimensionStylesDesktop: headingTwoMarginDesk,
        dimensionStylesTab: headingTwoMarginTab,
        dimensionStylesMobile: headingTwoMarginMob,
    } = generateDimensionStyle({
        controlName: HEADING_TWO_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //heading three
    const {
        typoStylesDesktop: headingThreeTypoDesk,
        typoStylesTab: headingThreeTypoTab,
        typoStylesMobile: headingThreeTypoMob,
    } = generateTypographyStyles({
        prefixConstant: HEADING_THREE_TYPOGRAPHY,
        attributes,
    });

    const { textShadowStyle: headingThreeTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: HEADING_THREE_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: headingThreeTextStrokeDesk,
        tabTextStrokeStyle: headingThreeTextStrokeTab,
        mobTextStrokeStyle: headingThreeTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: HEADING_THREE_TEXT_STROKE,
    });

    const {
        dimensionStylesDesktop: headingThreeMarginDesk,
        dimensionStylesTab: headingThreeMarginTab,
        dimensionStylesMobile: headingThreeMarginMob,
    } = generateDimensionStyle({
        controlName: HEADING_THREE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //link
    const {
        typoStylesDesktop: linkTypoDesk,
        typoStylesTab: linkTypoTab,
        typoStylesMobile: linkTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LINK_TYPOGRAPHY,
        attributes,
    });

    const {
        backgroundStylesDesktop: linkBGDesk,
        backgroundStylesTab: linkBGTab,
        backgroundStylesMobile: linkBGMob,
    } = generateNormalBGControlStyles({
        controlName: LINK_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: linkPaddingDesk,
        dimensionStylesTab: linkPaddingTab,
        dimensionStylesMobile: linkPaddingMob,
    } = generateDimensionStyle({
        controlName: LINK_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: linkMarginDesk,
        dimensionStylesTab: linkMarginTab,
        dimensionStylesMobile: linkMarginMob,
    } = generateDimensionStyle({
        controlName: LINK_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: linkBorderDesk,
        tabBorderStyle: linkBorderTab,
        mobBorderStyle: linkBorderMob,
    } = generateBorderStyle({
        controlName: LINK_BORDER,
        attributes,
    });

    const { boxShadowStyle: linkBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: LINK_SHADOW,
    });

    const {
        dimensionStylesDesktop: linkBRadiusDesk,
        dimensionStylesTab: linkBRadiusTab,
        dimensionStylesMobile: linkBRadiusMob,
    } = generateDimensionStyle({
        controlName: LINK_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: linkHoverBGDesk,
        backgroundStylesTab: linkHoverBGTab,
        backgroundStylesMobile: linkHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: LINK_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: linkHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: LINK_HOVER_SHADOW,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
          ${contentAlignDesk}
        }

        ${
            inheritThemeLayout
                ? `
          .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
            max-width: var(--wp--style--global--content-size);
            margin-left: auto;
            margin-right: auto;
          }
        `
                : ''
        }

        .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
            ${contentPaddingDesk}
            ${contentMarginDesk}
            ${contentBGDesk}
            ${contentBorderDesk}
            ${contentBorderRadiusDesk}
            ${contentBoxShadow}
            ${contentTypoDesk}
            ${contentColor ? `color:${contentColor};` : ''}
            ${contentTextShadowStyle}
            ${contentTextStrokeDesk}
        }
        .${uniqueId}.wp-block-zolo-post-content.zolo-block:hover > *{
            ${contentHoverBGDesk}
            ${contentHoverBorderDesk}
            ${contentHoverBRadiusDesk}
            ${contentHoverBoxShadow}
            ${contentHoverColor ? `color:${contentHoverColor};` : ''}
        }
 
        .${uniqueId}.wp-block-zolo-post-content.zolo-block img{
            ${thumbWidthDesk}
            ${thumbHeightDesk}
            ${thumbPaddingDesk}
            ${thumbMarginDesk}
            ${thumbBGDesk}
            ${thumbBorderDesk}
            ${thumbBRadiusDesk}
            ${thumbBoxShadow}
        }
        .${uniqueId}.wp-block-zolo-post-content.zolo-block img:hover{
            ${thumbHoverBoxShadow}
            ${thumbnailBorderHColor ? `border-color: ${thumbnailBorderHColor};` : ''}
        }
        ${
            active
                ? `
            .${uniqueId}.wp-block-zolo-post-content.zolo-block img {
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
            .${uniqueId}.wp-block-zolo-post-content.zolo-block img:hover {
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

        
         .${uniqueId}.wp-block-zolo-post-content.zolo-block h1.wp-block-heading,
         .${uniqueId}.wp-block-zolo-post-content.zolo-block .zolo-advanced-heading h1 .zolo-ah-main-title,
         .${uniqueId}.wp-block-zolo-post-content.zolo-block h1.zolo-heading {
            ${headingTypoDesk}
            ${headingTextShadowStyle}
            ${headingTextStrokeDesk}
            ${headingMarginDesk}
            ${headingColor ? `color:${headingColor};` : ''}
         }

         .${uniqueId}.wp-block-zolo-post-content.zolo-block h2.wp-block-heading,
         .${uniqueId}.wp-block-zolo-post-content.zolo-block .zolo-advanced-heading h2 .zolo-ah-main-title,
         .${uniqueId}.wp-block-zolo-post-content.zolo-block h2.zolo-heading {
            ${headingTwoTypoDesk}
            ${headingTwoTextShadowStyle}
            ${headingTwoTextStrokeDesk}
            ${headingTwoMarginDesk}
            ${headingTwoColor ? `color:${headingTwoColor};` : ''}
         }

         .${uniqueId}.wp-block-zolo-post-content.zolo-block h3.wp-block-heading,
         .${uniqueId}.wp-block-zolo-post-content.zolo-block .zolo-advanced-heading h3 .zolo-ah-main-title,
         .${uniqueId}.wp-block-zolo-post-content.zolo-block h3.zolo-heading {
            ${headingThreeTypoDesk}
            ${headingThreeTextShadowStyle}
            ${headingThreeTextStrokeDesk}
            ${headingThreeMarginDesk}
            ${headingThreeColor ? `color:${headingThreeColor};` : ''}
         }
 
        .${uniqueId}.wp-block-zolo-post-content.zolo-block a{
        ${linkTypoDesk}
        ${linkColor ? `color:${linkColor};` : ''}
        ${linkBGDesk}
        ${linkPaddingDesk}
        ${linkMarginDesk}
        ${linkBorderDesk}
        ${linkBRadiusDesk}
        ${linkBoxShadow}
        }
        .${uniqueId}.wp-block-zolo-post-content.zolo-block a:hover{
        ${linkHoverColor ? `color: ${linkHoverColor};` : ''}
        ${linkHoverBGDesk}
        ${linkHoverBoxShadow}
        ${linkHoverBorderColor ? `border-color: ${linkHoverBorderColor};` : ''}
        }
        
                
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
          ${contentAlignTab}
        }
        .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
            ${contentPaddingTab}
            ${contentMarginTab}
            ${contentBGTab}
            ${contentBorderTab}
            ${contentBorderRadiusTab}
            ${contentTypoTab}
            ${contentTextStrokeTab}
        }
        .${uniqueId}.wp-block-zolo-post-content.zolo-block:hover > *{
            ${contentHoverBGTab}
            ${contentHoverBorderTab}
            ${contentHoverBRadiusTab}
        }
        ${
            styleTags?.some((item) => item.type === 'image')
                ? `
          .${uniqueId}.wp-block-zolo-post-content.zolo-block img{
            ${thumbWidthTab}
            ${thumbHeightTab}
            ${thumbPaddingTab}
            ${thumbMarginTab}
            ${thumbBGTab}
            ${thumbBorderTab}
            ${thumbBRadiusTab}
          }
        `
                : ''
        }
         ${
             styleTags?.some((item) => item.type === 'heading') && headingTags.length > 0
                 ? `
            ${headingTags
                .map(
                    (tag) => `
            .${uniqueId}.wp-block-zolo-post-content.zolo-block ${tag},
             .${uniqueId}.wp-block-zolo-post-content.zolo-block .zolo-heading{
              ${headingTypoTab}
              ${headingTextStrokeTab}
              ${headingMarginTab}
            }
            `
                )
                .join('')}
        `
                 : ''
         }
         ${
             styleTags?.some((item) => item.type === 'link')
                 ? `
                  .${uniqueId}.wp-block-zolo-post-content.zolo-block a{
                    ${linkTypoTab}
                    ${linkBGTab}
                    ${linkPaddingTab}
                    ${linkMarginTab}
                    ${linkBorderTab}
                    ${linkBRadiusTab}
                  }
                  .${uniqueId}.wp-block-zolo-post-content.zolo-block a:hover{
                    ${linkHoverBGTab}
                  }
        `
                 : ''
         }
    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
          ${contentAlignMob}
        }
        .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
            ${contentPaddingMob}
            ${contentMarginMob}
            ${contentBGMob}
            ${contentBorderMob}
            ${contentBorderRadiusMob}
            ${contentTypoMob}
            ${contentTextStrokeMob}
        }
        .${uniqueId}.wp-block-zolo-post-content.zolo-block:hover > *{
            ${contentHoverBGMob}
            ${contentHoverBorderMob}
            ${contentHoverBRadiusMob}
        }
        ${
            styleTags?.some((item) => item.type === 'image')
                ? `
          .${uniqueId}.wp-block-zolo-post-content.zolo-block img{
            ${thumbWidthMob}
            ${thumbHeightMob}
            ${thumbPaddingMob}
            ${thumbMarginMob}
            ${thumbBGMob}
            ${thumbBorderMob}
            ${thumbBRadiusMob}
          }
        `
                : ''
        }
        ${
            styleTags?.some((item) => item.type === 'heading') && headingTags.length > 0
                ? `
            ${headingTags
                .map(
                    (tag) => `
            .${uniqueId}.wp-block-zolo-post-content.zolo-block ${tag},
             .${uniqueId}.wp-block-zolo-post-content.zolo-block .zolo-heading{
              ${headingTypoMob}
              ${headingTextStrokeMob}
              ${headingMarginMob}
            }
            `
                )
                .join('')}
        `
                : ''
        }
        ${
            styleTags?.some((item) => item.type === 'link')
                ? `
                  .${uniqueId}.wp-block-zolo-post-content.zolo-block a{
                    ${linkTypoMob}
                    ${linkBGDesk}
                    ${linkPaddingMob}
                    ${linkMarginMob}
                    ${linkBorderMob}
                    ${linkBRadiusMob}
                  }

                  .${uniqueId}.wp-block-zolo-post-content.zolo-block a:hover{
                    ${linkHoverBGDesk}
                  }
        `
                : ''
        }
  `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.postContent.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.postContent.tabAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.postContent.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
