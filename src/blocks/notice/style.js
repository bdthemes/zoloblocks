/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    ICON_BOX_ALIGNMENT,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    DESCRIPTION_MARGIN,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_SIZE,
    ICON_PADDING,
    ICON_MARGIN,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_TEXT_SPACING,
    ICON_IMAGE_SIZE,
    IMAGE_BORDER,
    CONTENT_ALIGNMENT,
    ICON_IMAGE_BORDER_RADIUS,
    ITEM_BG,
    ITEM_HOVER_BG,
    ITEM_BORDER,
    ITEM_BRADIUS,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BOX_SHADOW,
    ITEM_HBOX_SHADOW,
    ICON_WRAPPER_BG_COLOR,
    //Animating Icon
    ICON_ANIMATION_BG,
    ICON_ANIMATION_SIZE,
    ICON_ANIMATION_RADIUS,
    ICON_ANIMATION_THICKNESS,

    // Close icon
    CLOSE_ICON_SIZE,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BG,
    CLOSE_ICON_BOX_SHADOW,
    CLOSE_ICON_HOVER_BG,
    CLOSE_ICON_HOVER_BOX_SHADOW,
    STYLE3_ICON_BG_COLOR,
    STYLE3_ICON_SIZE,
    // STYLE3_ICON_RADIUS,
    STYLE3_ICON_OFFSET,
    HIGHTLIGHT_BORDER_WIDTH,
    HIGHTLIGHT_BORDER_HEIGHT,
} from './constants';

import { TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        animationType,
        itemHBorderColor,
        textColor,
        textHoverColor,
        descColor,
        iconAlignment,
        iconColor,
        iconHoverColor,
        iconBorderHoverColor,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        iconPosition,
        //notice
        closedColor,
        closeIconHoverColor,
        closeIconBorderHoverColor,
        showAfterDismiss,
        titleHoverColor,
        descHoverColor,
        styleBorderColor,
    } = attributes;

    // item

    const {
        dimensionStylesDesktop: itemRadiusDesk,
        dimensionStylesTab: itemRadiusTab,
        dimensionStylesMobile: itemRadiusMob,
    } = generateDimensionStyle({
        controlName: ITEM_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopBorderStyle: itemBorderDesk,
        tabBorderStyle: itemBorderTab,
        mobBorderStyle: itemBorderMob,
    } = generateBorderStyle({
        controlName: ITEM_BORDER,
        attributes,
    });

    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_BOX_SHADOW,
    });

    const { boxShadowStyle: itemHBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_HBOX_SHADOW,
    });

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
        dimensionStylesDesktop: itemMarginDesk,
        dimensionStylesTab: itemMarginTab,
        dimensionStylesMobile: itemMarginMob,
    } = generateDimensionStyle({
        controlName: ITEM_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: itemBgDesk,
        backgroundStylesTab: itemBgTab,
        backgroundStylesMobile: itemBgMob,
    } = generateNormalBGControlStyles({
        controlName: ITEM_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: itemHBgDesk,
        backgroundStylesTab: itemHBgTab,
        backgroundStylesMobile: itemHBgMob,
    } = generateNormalBGControlStyles({
        controlName: ITEM_HOVER_BG,
        attributes,
        noMainBGImg: false,
    });

    // content
    const {
        desktopAlignStyle: contentDeskAlign,
        tabAlignStyle: contentTabAlign,
        mobAlignStyle: contentMobAlign,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    // icon alignment
    const {
        desktopAlignStyle: iconAlignmentDesktop,
        tabAlignStyle: iconAlignmentTab,
        mobAlignStyle: iconAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: ICON_BOX_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    // generate icon border radius
    const {
        dimensionStylesDesktop: iconBorderRadiusDesktop,
        dimensionStylesTab: iconBorderRadiusTab,
        dimensionStylesMobile: iconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // Generate Icon Box Shadow
    const { boxShadowStyle: iconBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ICON_BOX_SHADOW,
    });

    // Generate Icon Hover Box Shadow
    const { boxShadowStyle: iconHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ICON_HOVER_BOX_SHADOW,
    });

    // Generate Icon Padding
    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMob,
    } = generateDimensionStyle({
        controlName: ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Generate Icon Margin
    const {
        dimensionStylesDesktop: iconMarginDesktop,
        dimensionStylesTab: iconMarginTab,
        dimensionStylesMobile: iconMarginMob,
    } = generateDimensionStyle({
        controlName: ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //title typography
    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });

    // Generate Title Margin
    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMob,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Generate Title Text Shadow
    const { textShadowStyle: titleTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });

    // Generate Title Text Stroke
    const {
        desktopTextStrokeStyle: titleTextStrokeStyle,
        tabTextStrokeStyle: tabTitleTextStrokeStyle,
        mobTextStrokeStyle: mobTitleTextStrokeStyle,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TITLE_TEXT_STROKE,
    });

    // descrtiption typography
    const {
        typoStylesDesktop: descTypoDesktop,
        typoStylesTab: descTypoTab,
        typoStylesMobile: descTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: DESCRIPTION_TYPOGRAPHY,
        attributes,
    });

    // Generate Title Margin
    const {
        dimensionStylesDesktop: descMarginDesktop,
        dimensionStylesTab: descMarginTab,
        dimensionStylesMobile: descMarginMob,
    } = generateDimensionStyle({
        controlName: DESCRIPTION_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // generate border style
    const {
        desktopBorderStyle: borderStyles,
        tabBorderStyle: borderStylesTab,
        mobBorderStyle: borderStylesMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });

    // generate icon size
    const {
        desktopRangeStyle: iconSize,
        tabRangeStyle: iconSizeTab,
        mobRangeStyle: iconSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // Spacing between icon and text
    const {
        desktopRangeStyle: gapDesk,
        tabRangeStyle: gapTab,
        mobRangeStyle: gapMob,
    } = generateResRangeStyle({
        controlName: ICON_TEXT_SPACING,
        property: 'gap',
        attributes,
    });

    const {
        backgroundStylesDesktop: iconWrapperBgColorDesk,
        backgroundStylesTab: iconWrapperBgColorTab,
        backgroundStylesMobile: iconWrapperBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_WRAPPER_BG_COLOR,
        attributes,
        noMainBGImg: true,
    });

    // generate image size
    const {
        desktopRangeStyle: iconImageSizeDesk,
        tabRangeStyle: iconImageSizeTab,
        mobRangeStyle: iconImageSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_IMAGE_SIZE,
        property: 'width',
        attributes,
    });

    // generate image border
    const {
        desktopBorderStyle: iconImageBorderDesk,
        tabBorderStyle: iconImageBorderTab,
        mobBorderStyle: iconImageBorderMob,
    } = generateBorderStyle({
        controlName: IMAGE_BORDER,
        attributes,
    });

    // generate image border radius
    const {
        dimensionStylesDesktop: iconImageBorderRadiusDesk,
        dimensionStylesTab: iconImageBorderRadiusTab,
        dimensionStylesMobile: iconImageBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_IMAGE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    //animation
    const {
        backgroundStylesDesktop: animationBgDeskStyle,
        backgroundStylesTab: animationBgTabStyle,
        backgroundStylesMobile: animationBgMobStyle,
    } = generateNormalBGControlStyles({
        controlName: ICON_ANIMATION_BG,
        attributes,
    });
    const {
        desktopRangeStyle: animationWidthDesk,
        tabRangeStyle: animationWidthTab,
        mobRangeStyle: animationWidthMob,
    } = generateResRangeStyle({
        controlName: ICON_ANIMATION_SIZE,
        property: 'width',
        attributes,
    });

    //height
    const {
        desktopRangeStyle: animationHeightDesk,
        tabRangeStyle: animationHeightTab,
        mobRangeStyle: animationHeightMob,
    } = generateResRangeStyle({
        controlName: ICON_ANIMATION_SIZE,
        property: 'height',
        attributes,
    });

    // generate animation border radius
    const {
        dimensionStylesDesktop: animationBorderRadiusDesk,
        dimensionStylesTab: animationBorderRadiusTab,
        dimensionStylesMobile: animationBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_ANIMATION_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    //Thickness
    const {
        desktopRangeStyle: animationThickDesk,
        tabRangeStyle: animationThickTab,
        mobRangeStyle: animationThickMob,
    } = generateResRangeStyle({
        controlName: ICON_ANIMATION_THICKNESS,
        property: 'width',
        attributes,
    });

    // Close Icon

    const {
        desktopRangeStyle: closeIconSizeWDesk,
        tabRangeStyle: closeIconSizeWTab,
        mobRangeStyle: closeIconSizeWMob,
    } = generateResRangeStyle({
        controlName: CLOSE_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    const {
        desktopBorderStyle: closeIconBorderDesk,
        tabBorderStyle: closeIconBorderTab,
        mobBorderStyle: closeIconBorderMob,
    } = generateBorderStyle({
        controlName: CLOSE_ICON_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: closeIconBorderRadiusDesk,
        dimensionStylesTab: closeIconBorderRadiusTab,
        dimensionStylesMobile: closeIconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: closeIconPaddingDesk,
        dimensionStylesTab: closeIconPaddingTab,
        dimensionStylesMobile: closeIconPaddingMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: closeIconMarginDesk,
        dimensionStylesTab: closeIconMarginTab,
        dimensionStylesMobile: closeIconMarginMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: closeIconBgDesk,
        backgroundStylesTab: closeIconBgTab,
        backgroundStylesMobile: closeIconBgMob,
    } = generateNormalBGControlStyles({
        controlName: CLOSE_ICON_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: closeIconHoverBgDesk,
        backgroundStylesTab: closeIconHoverBgTab,
        backgroundStylesMobile: closeIconHoverBgMob,
    } = generateNormalBGControlStyles({
        controlName: CLOSE_ICON_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: closeIconBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CLOSE_ICON_BOX_SHADOW,
    });

    const { boxShadowStyle: closeIconHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CLOSE_ICON_HOVER_BOX_SHADOW,
    });

    // style 3

    const {
        backgroundStylesDesktop: style3IconBgColorDesk,
        backgroundStylesTab: style3IconBgColorTab,
        backgroundStylesMobile: style3IconBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: STYLE3_ICON_BG_COLOR,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopRangeStyle: style3IconSizeDesk,
        tabRangeStyle: style3IconSizeTab,
        mobRangeStyle: style3IconSizeMob,
    } = generateResRangeStyle({
        controlName: STYLE3_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: style3IconSizeHDesk,
        tabRangeStyle: style3IconSizeHTab,
        mobRangeStyle: style3IconSizeHMob,
    } = generateResRangeStyle({
        controlName: STYLE3_ICON_SIZE,
        property: 'height',
        attributes,
    });

    // const {
    //     dimensionStylesDesktop: style3IconRadiusDesk,
    //     dimensionStylesTab: style3IconRadiusTab,
    //     dimensionStylesMobile: style3IconRadiusMob,
    // } = generateDimensionStyle({
    //     controlName: STYLE3_ICON_RADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });

    const {
        desktopRangeStyle: style3IconOffsetDesk,
        tabRangeStyle: style3IconOffsetTab,
        mobRangeStyle: style3IconOffsetMob,
    } = generateResRangeStyle({
        controlName: STYLE3_ICON_OFFSET,
        property: 'left',
        attributes,
    });

    // Highlight Border

    const {
        desktopRangeStyle: highlightBorderWidthDesk,
        tabRangeStyle: highlightBorderWidthTab,
        mobRangeStyle: highlightBorderWidthMob,
    } = generateResRangeStyle({
        controlName: HIGHTLIGHT_BORDER_WIDTH,
        property: '--zolo-hightlight-border-width',
        attributes,
    });

    const {
        desktopRangeStyle: highlightBorderHeightDesk,
        tabRangeStyle: highlightBorderHeightTab,
        mobRangeStyle: highlightBorderHeightMob,
    } = generateResRangeStyle({
        controlName: HIGHTLIGHT_BORDER_HEIGHT,
        property: '--zolo-hightlight-border-height',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-item {
            ${itemBgDesk}
            ${itemBorderDesk}
            ${itemRadiusDesk}
            ${itemBoxShadow}
            ${itemPaddingDesk}
            ${itemMarginDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.style-3 .zolo-block-item::before {
            ${style3IconBgColorDesk}
            ${style3IconSizeDesk}
            ${style3IconSizeHDesk}
            ${style3IconOffsetDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-item:hover {
            ${itemHBoxShadow}
            ${itemHBgDesk}
            ${itemHBorderColor ? `border-color: ${itemHBorderColor};` : ''}
        }

        .${uniqueId}{
            ${iconAlignmentDesktop}
        }
		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-item{
			align-items: ${iconAlignment ? iconAlignment : 'center'};
		}

        ${
            preset === 'style-2'
                ? `
                .zolo-block.wp-block-zolo-notice.${uniqueId} .zolo-block-item{
                    ${contentDeskAlign}
                }
                    `
                : ''
        }

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-item .zolo-block-title{
			${titleTypoDesktop}
			${titleTextShadowStyle}
        	${titleTextStrokeStyle}
			${titleMarginDesktop ? titleMarginDesktop : ''}
            ${textColor ? `color: ${textColor};` : ''}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-desc{
			${descTypoDesktop}
			${descMarginDesktop}
            ${descColor ? `color: ${descColor};` : ''}
		}

         .${uniqueId}.zolo-block.wp-block-zolo-notice.style-3 .zolo-block-item:hover .zolo-block-title{
            ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.style-3 .zolo-block-item:hover .zolo-block-desc{
            ${descHoverColor ? `color: ${descHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap {
			${iconMarginDesktop}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon {
            ${iconBackgroundColor ? `background: ${iconBackgroundColor};` : ''}
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconBoxShadow}
            ${iconSize}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.style-4.info .zolo__display-icon::before {
			${iconBorderRadiusDesktop}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice.${preset} .zolo-block-icon-wrap svg {
            --zoloblocks-brand-color: ${iconColor ? iconColor : ''};
		}

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap img {
			${iconImageSizeDesk}
			${iconImageBorderDesk}
			${iconImageBorderRadiusDesk}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-notice.${preset}:hover .zolo-block-icon-wrap .zolo__display-icon {
            ${iconBackgroundHoverColor ? `background: ${iconBackgroundHoverColor};` : ''}
            ${iconHoverBoxShadow}
            ${iconBorderHoverColor ? `border-color: ${iconBorderHoverColor};` : ''}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-notice.${preset}:hover .zolo-block-icon-wrap .zolo__display-icon svg{
            ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
        }
        

      .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-block-item:before{
         ${animationBgDeskStyle}
         ${animationBorderRadiusDesk}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-notice.animation-style-1 .zolo-block-item:before {
          ${animationType === 'style-1' && animationWidthDesk}
          ${animationType === 'style-1' && animationHeightDesk}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-notice.animation-style-2 .zolo-block-item::before{
        ${animationType === 'style-2' && `--zolo-animation-thickness ${animationThickDesk.replace('width', '')};`} 
      }

     .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss svg {
        ${closedColor ? `color:${closedColor}` : ''};
        ${closeIconSizeWDesk}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss:hover svg{
        ${closeIconHoverColor ? `color:${closeIconHoverColor}` : ''}
     }

    .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss {
        ${closeIconBgDesk}
        ${closeIconBorderDesk}
        ${closeIconBorderRadiusDesk}
        ${closeIconPaddingDesk}
        ${closeIconMarginDesk}
        ${closeIconBoxShadow}
    }
    
    .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss:hover {
        ${closeIconHoverBgDesk || ''}
        ${closeIconHoverBoxShadow || ''}
        ${closeIconBorderHoverColor ? `border-color: ${closeIconBorderHoverColor};` : ''}
    }

    ${
        preset === 'style-4'
            ? `
                .${uniqueId}.wp-block-zolo-notice.style-4 .zolo-block-item::before {
                    ${styleBorderColor ? `background: ${styleBorderColor};` : ''}
                    ${highlightBorderWidthDesk}
                    ${highlightBorderHeightDesk}
                }
                .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon,
                .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon::before {
                    ${iconBackgroundColor ? `background: ${iconBackgroundColor};` : ''}
                    
                }
            `
            : ''
    }

  	`;

    const tabletAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-item{
            ${itemBgTab}
            ${itemBorderTab}
            ${itemRadiusTab}
            ${itemPaddingTab}
            ${itemMarginTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.style-3 .zolo-block-item::before {
            ${style3IconBgColorTab}
            ${style3IconSizeTab}
            ${style3IconSizeHTab}
            ${style3IconOffsetTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice:hover {
            ${itemHBgTab}
        }

		.${uniqueId}{
			${iconAlignmentTab}
		}

        ${
            preset === 'style-2'
                ? `
                    .zolo-block.wp-block-zolo-notice.${uniqueId} .zolo-block-item {
                        ${contentTabAlign}
                    }

                    `
                : ''
        }

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-item .zolo-block-title{
			${titleTypoTab}
			${tabTitleTextStrokeStyle}
			${titleMarginTab}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-desc{
			${descMarginTab}
			${descTypoTab}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap {
			${iconMarginTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon {
			${iconSizeTab}
			${borderStylesTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-notice.style-4.info .zolo__display-icon::before {
			${iconBorderRadiusTab}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap img {
			${iconImageSizeTab}
			${iconImageBorderTab}
			${iconImageBorderRadiusTab}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-block-item:before{
         ${animationBgTabStyle}
         ${animationBorderRadiusTab}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-notice.animation-style-1 .zolo-block-item:before {
          ${animationType === 'style-1' && animationWidthTab}
          ${animationType === 'style-1' && animationHeightTab}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-notice.animation-style-2 .zolo-block-item::before{

        ${animationType === 'style-2' && `--zolo-animation-thickness ${animationThickTab.replace('width', '')};`}
        
      }
  
     .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss svg {
        ${closeIconSizeWTab}
     }

    .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss {
        ${closeIconBgTab}
        ${closeIconBorderTab}
        ${closeIconBorderRadiusTab}
        ${closeIconPaddingTab}
        ${closeIconMarginTab}
    }
    
    .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss:hover {
        ${closeIconHoverBgTab}
    }

    ${
        preset === 'style-4'
            ? `
            .${uniqueId}.wp-block-zolo-notice.style-4 .zolo-block-item::before {
                ${highlightBorderWidthTab}
                ${highlightBorderHeightTab}
            }
        `
            : ''
    }

	`;

    const mobileAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-item{
            ${itemBgMob}
            ${itemBorderMob}
            ${itemRadiusMob}
            ${itemPaddingMob}
            ${itemMarginMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.style-3 .zolo-block-item::before {
            ${style3IconBgColorMob}
            ${style3IconSizeMob}
            ${style3IconSizeHMob}
            ${style3IconOffsetMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice:hover {
            ${itemHBgMob}
        }
		.${uniqueId}{
			${iconAlignmentMob}
		}

         ${
             preset === 'style-2'
                 ? `
                    .zolo-block.wp-block-zolo-notice.${uniqueId} .zolo-block-item{
                        ${contentMobAlign}
                    }

                    `
                 : ''
         } 

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-item .zolo-block-title{
			${titleTypoMobile}
			${mobTitleTextStrokeStyle}
			${titleMarginMob}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-desc{
			${descMarginMob}
			${descTypoMobile}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon {
			${iconPaddingMob}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon {
			${borderStylesMob}
			${iconBorderRadiusMob}
			${iconMarginMob}
            ${iconSizeMob}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-notice.style-4.info .zolo__display-icon::before {
			${iconBorderRadiusMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss svg {
            ${closeIconSizeWMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss {
            ${closeIconBgMob}
            ${closeIconBorderMob}
            ${closeIconBorderRadiusMob}
            ${closeIconPaddingMob}
            ${closeIconMarginMob}
        }
        
        .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-notice-dismiss:hover {
            ${closeIconHoverBgMob}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-notice.zolo-block-notice .zolo-block-icon-wrap img {
			${iconImageSizeMob}
			${iconImageBorderMob}
			${iconImageBorderRadiusMob}
		}

      .${uniqueId}.zolo-block.wp-block-zolo-notice .zolo-block-item:before{
         ${animationBgMobStyle}
         ${animationBorderRadiusMob}
      }

        ${
            preset === 'style-4'
                ? `
                .${uniqueId}.wp-block-zolo-notice.style-4 .zolo-block-item::before {
                    ${highlightBorderWidthMob}
                    ${highlightBorderHeightMob}
                }
                `
                : ''
        }

      .${uniqueId}.zolo-block.wp-block-zolo-notice.animation-style-1 .zolo-block-item:before {
          ${animationType === 'style-1' && animationWidthMob}
          ${animationType === 'style-1' && animationHeightMob}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-notice.animation-style-2 .zolo-block-item::before{

        ${animationType === 'style-2' && `--zolo-animation-thickness ${animationThickMob.replace('width', '')};`}
        
      }
  	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.advancedIconBox.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.advancedIconBox.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.advancedIconBox.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
