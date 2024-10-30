import { applyFilters } from '@wordpress/hooks';

import {
    //thumbnail
    THUMBNAIL_ALIGN,
    THUMBNAIL_WIDTH,
    THUMBNAIL_HEIGHT,
    THUMBNAIL_BORDER,
    THUMBNAIL_BRADIUS,
    THUMBNAIL_BOX_SHADOW,
    THUMBNAIL_HOVER_SHADOW,
} from './constants';

const {
    generateResAlignmentStyle,
    generateResRangeStyle,
    generateDimensionStyle,
    generateBorderStyle,
    generateBoxShadowStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const { uniqueId, borderHoverColor } = attributes;

    //thumbnail
    const {
        desktopAlignStyle: thumbAlignDesk,
        tabAlignStyle: thumbAlignTab,
        mobAlignStyle: thumbAlignMob,
    } = generateResAlignmentStyle({
        controlName: THUMBNAIL_ALIGN,
        property: 'text-align',
        attributes,
    });
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
    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};
    const {
        active: activeHover = false,
        blur: blurHover = 0,
        brightness: brightnessHover = 100,
        contrast: contrastHover = 100,
        saturate: saturateHover = 100,
        hueRotate: hueRotateHover = 0,
    } = attributes?.cssFiltersHover || {};

    const desktopAllStyle = `
    .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image{
      ${thumbAlignDesk}
    }
    .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image img{
      ${thumbWidthDesk}
      ${thumbHeightDesk}
      ${thumbBorderDesk}
      ${thumbBRadiusDesk}
      ${thumbBoxShadow}
    }
     .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image:hover img{
      ${thumbHoverBoxShadow}
      ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
     }

     ${
         active
             ? `
        .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image img {
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
          .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image:hover img {
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
    .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image{
      ${thumbAlignTab}
    }
    .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image img{
      ${thumbWidthTab}
      ${thumbHeightTab}
      ${thumbBorderTab}
      ${thumbBRadiusTab}
    }
  `;
    const mobileAllStyle = `
    .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image{
      ${thumbAlignMob}
    }
    .${uniqueId}.zolo-block.wp-block-zolo-post-featured-image img{
      ${thumbAlignMob}
      ${thumbWidthMob}
      ${thumbHeightMob}
      ${thumbBorderMob}
      ${thumbBRadiusMob}
    }
  `;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.postFeaturedImage.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.postFeaturedImage.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.postFeaturedImage.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
