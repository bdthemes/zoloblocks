import { applyFilters } from '@wordpress/hooks';
const {
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
} = window.zoloModule;

import {
    //item
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    //icon
    ICON_BG,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_SIZE,
    ICON_SPACING,
    ICON_H_SPACING,
    ICON_HOVER_BG,
    COUNTER_SPACING,
} from './constants';

import { COUNTER_TYPOGRAPHY, META_TYPOGRAPHY } from './constants/typoPrefixConstant';
const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        counterColor,
        counterHoverColor,
        metaColor,
        metaHoverColor,
        itemHoverBorderColor,
    } = attributes;

    //item style
    const {
        dimensionStylesDesktop: itemPaddingDesk,
        dimensionStylesTab: itemPaddingTab,
        dimensionStylesMobile: itemPaddingMob,
    } = generateDimensionStyle({
        controlName: ITEM_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: itemBGDesk,
        backgroundStylesTab: itemBGTab,
        backgroundStylesMobile: itemBGMob,
    } = generateNormalBGControlStyles({
        controlName: ITEM_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: itemBorderDesk,
        tabBorderStyle: itemBorderTab,
        mobBorderStyle: itemBorderMob,
    } = generateBorderStyle({
        controlName: ITEM_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: itemBorderRadiusDesk,
        dimensionStylesTab: itemBorderRadiusTab,
        dimensionStylesMobile: itemBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ITEM_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_SHADOW,
    });
    const {
        backgroundStylesDesktop: itemHoverBGDesk,
        backgroundStylesTab: itemHoverBGTab,
        backgroundStylesMobile: itemHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: ITEM_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: itemHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_HOVER_SHADOW,
    });

    //icon
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
        backgroundStylesDesktop: iconBGDesk,
        backgroundStylesTab: iconBGTab,
        backgroundStylesMobile: iconBGMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: iconBorderDesk,
        tabBorderStyle: iconBorderTab,
        mobBorderStyle: iconBorderMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: iconBorderRadiusDesk,
        dimensionStylesTab: iconBorderRadiusTab,
        dimensionStylesMobile: iconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        desktopRangeStyle: iconSizeDesk,
        tabRangeStyle: iconSizeTab,
        mobRangeStyle: iconSizeMob,
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
        desktopRangeStyle: iconSpacingDesk,
        tabRangeStyle: iconSpacingTab,
        mobRangeStyle: iconSpacingMob,
    } = generateResRangeStyle({
        controlName: ICON_SPACING,
        property: 'margin-bottom',
        attributes,
    });

    const {
        desktopRangeStyle: iconHSpacingDesk,
        tabRangeStyle: iconHSpacingTab,
        mobRangeStyle: iconHSpacingMob,
    } = generateResRangeStyle({
        controlName: ICON_H_SPACING,
        property: 'grid-column-gap',
        attributes,
    });

    const {
        backgroundStylesDesktop: iconHoverBGDesk,
        backgroundStylesTab: iconHoverBGTab,
        backgroundStylesMobile: iconHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });
    //counter
    const {
        typoStylesDesktop: counterTypoDesk,
        typoStylesTab: counterTypoTab,
        typoStylesMobile: counterTypoMob,
    } = generateTypographyStyles({
        prefixConstant: COUNTER_TYPOGRAPHY,
        attributes,
    });
    const {
        desktopRangeStyle: counterSpacingDesk,
        tabRangeStyle: counterSpacingTab,
        mobRangeStyle: counterSpacingMob,
    } = generateResRangeStyle({
        controlName: COUNTER_SPACING,
        property: 'margin-bottom',
        attributes,
    });
    //meta
    const {
        typoStylesDesktop: metaTypoDesk,
        typoStylesTab: metaTypoTab,
        typoStylesMobile: metaTypoMob,
    } = generateTypographyStyles({
        prefixConstant: META_TYPOGRAPHY,
        attributes,
    });
    /**
     * All Style Combination
     */
    const desktopAllStyle = `

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item{
        ${itemBGDesk}
        ${itemPaddingDesk}
        ${itemBorderDesk}
        ${itemBorderRadiusDesk}
        ${itemBoxShadow}
      }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover{
      ${itemHoverBGDesk}
      ${itemHoverBoxShadow}
      ${itemHoverBorderColor ? `border-color:${itemHoverBorderColor};` : ''}
     }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
      ${iconBGDesk}
      ${iconBorderDesk}
      ${iconBorderRadiusDesk}
      ${iconPaddingDesk}
     }

    ${
        preset === 'style-1'
            ? `

          .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
            ${iconSpacingDesk}
          }

      `
            : ''
    }

    ${
        preset === 'style-2'
            ? `

          .${uniqueId}.zolo-block.wp-block-zolo-social-count-child.zolo-style-2 .zolo-item{
            ${iconHSpacingDesk}
          }

      `
            : ''
    }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-icon .zolo__display-icon svg{
      ${iconHoverColor ? `fill:${iconHoverColor};` : ''}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-icon{
      ${iconHoverBGDesk}
      ${iconHoverBorderColor ? `border-color:${iconHoverBorderColor};` : ''}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon .zolo__display-icon svg{
       ${iconSizeDesk}
       ${iconSizeHeightDesk}
       ${iconColor ? `fill:${iconColor};` : ''}
     }
      .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-count{
        ${counterTypoDesk}
        ${counterSpacingDesk}
        ${counterColor ? `color:${counterColor};` : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-count{
        ${counterHoverColor ? `color:${counterHoverColor};` : ''}
      }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-meta{
      ${metaTypoDesk}
      ${metaColor ? `color:${metaColor};` : ''}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-meta{
      ${metaHoverColor ? `color:${metaHoverColor};` : ''}
     }
  	`;
    const tabletAllStyle = `

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item{
        ${itemBGTab}
        ${itemPaddingTab}
        ${itemBorderTab}
        ${itemBorderRadiusTab}
      }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover{
      ${itemHoverBGTab}
     }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
      ${iconBGTab}
      ${iconBorderTab}
      ${iconBorderRadiusTab}
      ${iconPaddingTab}
     }

    ${
        preset === 'style-1'
            ? `

            .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
                ${iconSpacingTab}
            }

    `
            : ''
    }

    ${
        preset === 'style-2'
            ? `

        .${uniqueId}.zolo-block.wp-block-zolo-social-count-child.zolo-style-2 .zolo-item{
          ${iconHSpacingTab}
        }

  `
            : ''
    }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-icon{
      ${iconHoverBGTab}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon .zolo__display-icon svg{
       ${iconSizeTab}
       ${iconSizeHeightTab}
     }
      .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-count{
        ${counterTypoTab}
        ${counterSpacingTab}
      }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-meta{
      ${metaTypoTab}
     }
	`;

    const mobileAllStyle = `

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item{
        ${itemBGMob}
        ${itemPaddingMob}
        ${itemBorderMob}
        ${itemBorderRadiusMob}
      }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover{
      ${itemHoverBGMob}
     }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
      ${iconBGMob}
      ${iconBorderMob}
      ${iconBorderRadiusMob}
      ${iconPaddingMob}
     }

      ${
          preset === 'style-1'
              ? `
                .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
                   ${iconSpacingMob}
                }
              `
              : ''
      }

      ${
          preset === 'style-2'
              ? `

              .${uniqueId}.zolo-block.wp-block-zolo-social-count-child.zolo-style-2 .zolo-item{
                ${iconHSpacingMob}
              }

          `
              : ''
      }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-icon{
      ${iconHoverBGMob}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon .zolo__display-icon svg{
       ${iconSizeMob}
       ${iconSizeHeightMob}
     }
      .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-count{
        ${counterTypoMob}
        ${counterSpacingMob}
      }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-meta{
      ${metaTypoMob}
     }
  	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.socialCount.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.socialCount.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.socialCount.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};
export default Style;
