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
        descHoverColor,
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



    const {
        boxShadowStyle: closeIconBoxShadow,
    } = generateBoxShadowStyles({
        attributes,
        controlName: CLOSE_ICON_BOX_SHADOW,
    });

    const {
        boxShadowStyle: closeIconHoverBoxShadow,
    } = generateBoxShadowStyles({
        attributes,
        controlName: CLOSE_ICON_HOVER_BOX_SHADOW,
    });



    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.zolo-block-notice .zolo-block-item {
            ${itemBgDesk}
            ${itemBorderDesk}
            ${itemRadiusDesk}
            ${itemBoxShadow}
            ${preset !== 'style-3' ? itemPaddingDesk : ''}
            ${itemMarginDesk}
        }
        .${uniqueId}.zolo-block-notice.style-3 .zolo-block-icon-wrap{
            ${iconWrapperBgColorDesk}
        }
        .${uniqueId}.zolo-block-notice.style-3 .zolo-block-body-content{
           ${preset === 'style-3' ? itemPaddingDesk : ''}
        }

        .${uniqueId}.zolo-block-notice .zolo-block-item:hover {
            ${itemHBoxShadow}
            ${itemHBgDesk}
            ${itemHBorderColor ? `border-color: ${itemHBorderColor};` : ''}
        }

        .${uniqueId}{
            ${iconAlignmentDesktop}
        }
		.${uniqueId}.zolo-block-notice .zolo-block-item{
			align-items: ${iconAlignment ? iconAlignment : 'center'};
		}

		.wp-block-zolo-notice.${uniqueId} .zolo-block-item{
			${contentDeskAlign}
		}

		.${uniqueId}.zolo-block-notice .zolo-block-item .zolo-block-title{
			${titleTypoDesktop}
			${titleTextShadowStyle}
        	${titleTextStrokeStyle}
			${titleMarginDesktop ? titleMarginDesktop : ''}
            ${textColor ? `color: ${textColor};` : ''}
		}

		.${uniqueId}.zolo-block-notice .zolo-block-desc{
			${descTypoDesktop}
			${descMarginDesktop}
            ${descColor ? `color: ${descColor};` : ''}
		}

        .${uniqueId}.zolo-block-notice .zolo-block-icon-wrap {
			${iconMarginDesktop}
        }

        .${uniqueId}.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon {
            ${iconBackgroundColor ? `background: ${iconBackgroundColor};` : ''}
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconBoxShadow}
            ${iconSize}
        }

		.${uniqueId}.zolo-block-notice.${preset} .zolo-block-icon-wrap svg {
            --zoloblocks-brand-color: ${iconColor ? iconColor : ''};
		}

		.${uniqueId}.zolo-block-notice .zolo-block-icon-wrap img {
			${iconImageSizeDesk}
			${iconImageBorderDesk}
			${iconImageBorderRadiusDesk}
		}
        .${uniqueId}.wp-block-zolo-notice.${preset}:hover .zolo-block-icon-wrap .zolo__display-icon {
            ${iconBackgroundHoverColor ? `background: ${iconBackgroundHoverColor};` : ''}
            ${iconHoverBoxShadow}
            ${iconBorderHoverColor ? `border-color: ${iconBorderHoverColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-notice.${preset}:hover .zolo-block-icon-wrap .zolo__display-icon svg{
            ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
        }
        
        .${uniqueId}.wp-block-zolo-notice:hover .zolo-block-title{
            ${textHoverColor ? `color: ${textHoverColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-notice:hover .zolo-block-desc{
            ${descHoverColor ? `color: ${descHoverColor};` : ''}
        }
     

      .${uniqueId}.wp-block-zolo-notice .zolo-block-item:before{
         ${animationBgDeskStyle}
         ${animationBorderRadiusDesk}
      }
      .${uniqueId}.wp-block-zolo-notice.animation-style-1 .zolo-block-item:before {
          ${animationType === 'style-1' && animationWidthDesk}
          ${animationType === 'style-1' && animationHeightDesk}
      }

      .${uniqueId}.wp-block-zolo-notice.animation-style-2 .zolo-block-item::before{
        ${animationType === 'style-2' && `--zolo-animation-thickness ${animationThickDesk.replace('width', '')};`} 
      }
     .${uniqueId}.wp-block-zolo-notice .zolo-notice-dismiss svg {
        ${closedColor ? `color:${closedColor}` : ''}
        ${closeIconSizeWDesk}
     }
     .${uniqueId}.wp-block-zolo-notice .zolo-notice-dismiss:hover svg{
        ${closeIconHoverColor ? `color:${closeIconHoverColor}` : ''}
     }

    .${uniqueId}.wp-block-zolo-notice .zolo-notice-dismiss {
        ${closeIconBgDesk}
        ${closeIconBorderDesk}
        ${closeIconBorderRadiusDesk}
        ${closeIconPaddingDesk}
        ${closeIconMarginDesk}
        ${closeIconBoxShadow}
    }
    
    .${uniqueId}.wp-block-zolo-notice .zolo-notice-dismiss:hover {
        ${closeIconHoverBgDesk}
        ${closeIconBorderHoverColor}
        ${closeIconHoverBoxShadow}
    }

  	`;

    const tabletAllStyle = `
        .${uniqueId}.zolo-block-notice .zolo-block-item{
            ${itemBgTab}
            ${itemBorderTab}
            ${itemRadiusTab}
           ${preset !== 'style-3' ? itemPaddingTab : ''}
            ${itemMarginTab}
        }

         .${uniqueId}.zolo-block-notice.style-3 .zolo-block-body-content{
           ${preset === 'style-3' ? itemPaddingTab : ''}
        }

        .${uniqueId}.zolo-block-notice:hover {
            ${itemHBgTab}
        }

		.${uniqueId}{
			${iconAlignmentTab}
		}

        .wp-block-zolo-notice.${uniqueId} .zolo-block-item{
			${contentTabAlign}
		}

		.${uniqueId}.zolo-block-notice .zolo-block-item .zolo-block-title{
			${titleTypoTab}
			${tabTitleTextStrokeStyle}
			${titleMarginTab}
		}

		.${uniqueId}.zolo-block-notice .zolo-block-desc{
			${descMarginTab}
			${descTypoTab}
		}

        .${uniqueId}.zolo-block-notice .zolo-block-icon-wrap {
			${iconMarginTab}
        }

        .${uniqueId}.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon {
			${iconSizeTab}
			${borderStylesTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
		}

		.${uniqueId}.zolo-block-notice .zolo-block-icon-wrap img {
			${iconImageSizeTab}
			${iconImageBorderTab}
			${iconImageBorderRadiusTab}
		}
        .${uniqueId}.wp-block-zolo-notice .zolo-block-item:before{
         ${animationBgTabStyle}
         ${animationBorderRadiusTab}
      }
      .${uniqueId}.wp-block-zolo-notice.animation-style-1 .zolo-block-item:before {
          ${animationType === 'style-1' && animationWidthTab}
          ${animationType === 'style-1' && animationHeightTab}
      }
      .${uniqueId}.wp-block-zolo-notice.animation-style-2 .zolo-block-item::before{

        ${animationType === 'style-2' && `--zolo-animation-thickness ${animationThickTab.replace('width', '')};`}
        
      }
	`;

    const mobileAllStyle = `
        .${uniqueId}.zolo-block-notice .zolo-block-item{
            ${itemBgMob}
            ${itemBorderMob}
            ${itemRadiusMob}
            ${preset !== 'style-3' ? itemPaddingMob : ''}
            ${itemMarginMob}
        }

         .${uniqueId}.zolo-block-notice.style-3 .zolo-block-body-content{
           ${preset === 'style-3' ? itemPaddingMob : ''}
        }

        .${uniqueId}.zolo-block-notice:hover {
            ${itemHBgMob}
        }
		.${uniqueId}{
			${iconAlignmentMob}
		}

        .wp-block-zolo-notice.${uniqueId} .zolo-block-item{
			${contentMobAlign}
		}

		.${uniqueId}.zolo-block-notice .zolo-block-item .zolo-block-title{
			${titleTypoMobile}
			${mobTitleTextStrokeStyle}
			${titleMarginMob}
		}

		.${uniqueId}.zolo-block-notice .zolo-block-desc{
			${descMarginMob}
			${descTypoMobile}
		}

        .${uniqueId}.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon {
			${iconPaddingMob}
        }

		.${uniqueId}.zolo-block-notice .zolo-block-icon-wrap .zolo__display-icon {
			${borderStylesMob}
			${iconBorderRadiusMob}
			${iconMarginMob}
            ${iconSizeMob}
		}

		.${uniqueId}.zolo-block-notice .zolo-block-icon-wrap img {
			${iconImageSizeMob}
			${iconImageBorderMob}
			${iconImageBorderRadiusMob}
		}

      .${uniqueId}.wp-block-zolo-notice .zolo-block-item:before{
         ${animationBgMobStyle}
         ${animationBorderRadiusMob}
      }
      .${uniqueId}.wp-block-zolo-notice.animation-style-1 .zolo-block-item:before {
          ${animationType === 'style-1' && animationWidthMob}
          ${animationType === 'style-1' && animationHeightMob}
      }
      .${uniqueId}.wp-block-zolo-notice.animation-style-2 .zolo-block-item::before{

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
