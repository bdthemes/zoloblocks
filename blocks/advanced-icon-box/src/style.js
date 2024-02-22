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
    BUTTON_BG_COLOR,
    BUTTON_BG_HOVER_COLOR,
    BUTTON_ICON_SIZE,
    BUTTON_BORDER,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    ICON_TEXT_SPACING,
    BUTTON_BORDER_RADIUS,
    BUTTON_MARGIN,
    BUTTON_PADDING,
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
    RIBBON_MARGIN,
    RIBBON_PADDING,
    RIBBON_BORDER,
    RIBBON_RADIUS,
    RIBBON_BG,
} from './constants';

import { TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY, BUTTON_TYPOGRAPHY, RIBBON_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
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
        btnColor,
        btnHoverColor,
        btnBgHoverColor,
        btnHoverBorderColor,
        globalLink,
        //ribbon
        ribbonXPosition,
        ribbonYPosition,
        ribbonRotate,
        ribbonColor,
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

    //ribbon style
    const {
        typoStylesDesktop: ribbonTypoDesktop,
        typoStylesTab: ribbonTypoTab,
        typoStylesMobile: ribbonTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: RIBBON_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: ribbonMarginDesktop,
        dimensionStylesTab: ribbonMarginTab,
        dimensionStylesMobile: ribbonMarginMobile,
    } = generateDimensionStyle({
        controlName: RIBBON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: ribbonPaddingDesktop,
        dimensionStylesTab: ribbonPaddingTab,
        dimensionStylesMobile: ribbonPaddingMobile,
    } = generateDimensionStyle({
        controlName: RIBBON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: ribbonBorderDesktop,
        tabBorderStyle: ribbonBorderTab,
        mobBorderStyle: ribbonBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: RIBBON_BORDER,
    });

    const {
        dimensionStylesDesktop: ribbonDeskRadius,
        dimensionStylesTab: ribbonTabRadius,
        dimensionStylesMobile: ribbonMobRadius,
    } = generateDimensionStyle({
        controlName: RIBBON_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: ribbonBgDesktop,
        backgroundStylesTab: ribbonBgTab,
        backgroundStylesMobile: ribbonBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: RIBBON_BG,
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

    // Generate Button Box Shadow
    const { boxShadowStyle: buttonBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BUTTON_BOX_SHADOW,
    });

    // Generate Icon Hover Box Shadow
    const { boxShadowStyle: buttonHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BUTTON_HOVER_BOX_SHADOW,
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
    // Generate Button Padding
    const {
        dimensionStylesDesktop: buttonPaddingDesktop,
        dimensionStylesTab: buttonPaddingTab,
        dimensionStylesMobile: buttonPaddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_PADDING,
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

    // Generate Button Margin
    const {
        dimensionStylesDesktop: buttonMarginDesktop,
        dimensionStylesTab: buttonMarginTab,
        dimensionStylesMobile: buttonMarginMob,
    } = generateDimensionStyle({
        controlName: BUTTON_MARGIN,
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

    // button typography
    const {
        typoStylesDesktop: btnTypoDesktop,
        typoStylesTab: btnTypoTab,
        typoStylesMobile: btnTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TYPOGRAPHY,
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

    // button background color
    const {
        backgroundStylesDesktop: buttonBGDeskStyle,
        backgroundStylesTab: buttonBGTabStyle,
        backgroundStylesMobile: buttonBGMobStyle,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_BG_COLOR,
        attributes,
        noMainBGImg: true,
    });

    // button background hover color
    const {
        backgroundStylesDesktop: buttonBGHoverDeskStyle,
        backgroundStylesTab: buttonBGHoverTabStyle,
        backgroundStylesMobile: buttonBGHoverMobStyle,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_BG_HOVER_COLOR,
        attributes,
        noMainBGImg: true,
    });

    // generate button icon size
    const {
        desktopRangeStyle: buttonIconSize,
        tabRangeStyle: buttonIconSizeTab,
        mobRangeStyle: buttonIconSizeMob,
    } = generateResRangeStyle({
        controlName: BUTTON_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: buttonIconHSize,
        tabRangeStyle: buttonIconHSizeTab,
        mobRangeStyle: buttonIconHSizeMob,
    } = generateResRangeStyle({
        controlName: BUTTON_ICON_SIZE,
        property: 'height',
        attributes,
    });

    // generate button style
    const {
        desktopBorderStyle: buttonBorderStyles,
        tabBorderStyle: buttonBorderStylesTab,
        mobBorderStyle: buttonBorderStylesMob,
    } = generateBorderStyle({
        controlName: BUTTON_BORDER,
        attributes,
    });

    // generate button border radius
    const {
        dimensionStylesDesktop: buttonBorderRadiusDesktop,
        dimensionStylesTab: buttonBorderRadiusTab,
        dimensionStylesMobile: buttonBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BUTTON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
    	.zolo-block-advanced-icon-box.${uniqueId}{
      --zolo-ribbon-xposition: ${ribbonXPosition}px;
      --zolo-ribbon-yposition: ${ribbonYPosition}px;
      ${ribbonRotate != '' && typeof ribbonRotate == 'number' ? `--zolo-ribbon-rotate: ${ribbonRotate}deg;` : ''}
		}

    .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item {
            ${itemBgDesk}
            ${itemBorderDesk}
            ${itemRadiusDesk}
            ${itemBoxShadow}
            ${itemPaddingDesk}
            ${itemMarginDesk}

        }

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item:hover {
            ${itemHBoxShadow}
            ${itemHBgDesk}
            ${itemHBorderColor ? `border-color: ${itemHBorderColor};` : ''}
        }

        .${uniqueId}{
            ${iconAlignmentDesktop}
        }
		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap{
			align-items: ${iconAlignment ? iconAlignment : 'flex-start'};
		}

		.wp-block-zolo-advanced-icon-box.${uniqueId} .zolo-block-item{
			${contentDeskAlign}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item .zolo-block-title{
			${titleTypoDesktop}
			${titleTextShadowStyle}
        	${titleTextStrokeStyle}
			${titleMarginDesktop ? titleMarginDesktop : ''}
            ${textColor ? `color: ${textColor};` : ''}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-desc{
			${descTypoDesktop}
			${descMarginDesktop}
            ${descColor ? `color: ${descColor};` : ''}
		}

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap {
			${iconMarginDesktop}
        }

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap .zolo__display-icon {
            ${iconBackgroundColor ? `background: ${iconBackgroundColor};` : ''}
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconBoxShadow}
            ${iconSize}
        }

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap svg {
            --zoloblocks-brand-color: ${iconColor ? iconColor : ''};
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap img {
			${iconImageSizeDesk}
			${iconImageBorderDesk}
			${iconImageBorderRadiusDesk}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-body-content .zolo-box-button {
			${buttonBGDeskStyle}
			${gapDesk}
			${buttonBorderStyles}
			${buttonBorderRadiusDesktop}
			${buttonPaddingDesktop}
			${buttonMarginDesktop}
			${buttonBoxShadow}
            color: ${btnColor ? btnColor : ''};
			${btnTypoDesktop}
            flex-direction: ${iconPosition};
		}

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-body-content .zolo-box-button svg{
			${buttonIconSize}
            ${buttonIconHSize}
            ${btnColor ? `fill: ${btnColor};` : ''}
		}

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button {
                ${buttonBGHoverDeskStyle}
                ${btnBgHoverColor ? `background: ${btnBgHoverColor};` : ''}
                ${buttonHoverBoxShadow}
                ${btnHoverBorderColor ? `border-color: ${btnHoverBorderColor};` : ''}
                ${btnHoverColor ? `color: ${btnHoverColor}; ` : ''}
            }
            .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button svg{
                ${btnHoverColor ? `fill: ${btnHoverColor};` : ''}
            }
            .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-block-icon-wrap svg{
                ${iconBackgroundHoverColor ? `background: ${iconBackgroundHoverColor};` : ''}
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
                ${iconHoverBoxShadow}
                ${iconBorderHoverColor ? `border-color: ${iconBorderHoverColor};` : ''}
            }
        }

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-block-title{
            ${textHoverColor ? `color: ${textHoverColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-block-desc{
            ${descHoverColor ? `color: ${descHoverColor};` : ''}
        }
        .${uniqueId} .zolo-ribbon-btn{
        ${ribbonColor ? `color: ${ribbonColor};` : ''}
        ${ribbonBgDesktop}
        ${ribbonPaddingDesktop}
        ${ribbonMarginDesktop}
        ${ribbonBorderDesktop}
        ${ribbonDeskRadius}
        ${ribbonTypoDesktop}
        -webkit-transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
        transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
      }
  	`;

    const tabletAllStyle = `
        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item{
            ${itemBgTab}
            ${itemBorderTab}
            ${itemRadiusTab}
            ${itemPaddingTab}f
            ${itemMarginTab}
        }

        .${uniqueId}.zolo-block-advanced-icon-box:hover {
            ${itemHBgTab}
        }

		.${uniqueId}{
			${iconAlignmentTab}
		}

        .${uniqueId} .zolo-block-item{
			${contentTabAlign}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item .zolo-block-title{
			${titleTypoTab}
			${tabTitleTextStrokeStyle}
			${titleMarginTab}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-desc{
			${descMarginTab}
			${descTypoTab}
		}

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap {
			${iconMarginTab}
        }

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap .zolo__display-icon {
			${iconSizeTab}
			${borderStylesTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap img {
			${iconImageSizeTab}
			${iconImageBorderTab}
			${iconImageBorderRadiusTab}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-body-content .zolo-box-button {
            ${buttonBGTabStyle}
			${gapTab}
			${buttonBorderStylesTab}
			${buttonBorderRadiusTab}
			${buttonPaddingTab}
			${buttonMarginTab}
		}

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-body-content .zolo-box-button svg{
			${buttonIconSizeTab}
            ${buttonIconHSizeTab}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-body-content .zolo-box-button{
			${btnTypoTab}
		}

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button {
            ${buttonBGHoverTabStyle}
        }
        .${uniqueId} .zolo-ribbon-btn{
            ${ribbonTypoTab}
            ${ribbonBgTab}
            ${ribbonPaddingTab}
            ${ribbonMarginTab}
            ${ribbonBorderTab}
            ${ribbonTabRadius}
        }
	`;

    const mobileAllStyle = `
        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item{
            ${itemBgMob}
            ${itemBorderMob}
            ${itemRadiusMob}
            ${itemPaddingMob}
            ${itemMarginMob}
        }

        .${uniqueId}.zolo-block-advanced-icon-box:hover {
            ${itemHBgMob}
        }
		.${uniqueId}{
			${iconAlignmentMob}
		}

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item{
			${contentMobAlign}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item .zolo-block-title{
			${titleTypoMobile}
			${mobTitleTextStrokeStyle}
			${titleMarginMob}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-desc{
			${descMarginMob}
			${descTypoMobile}
		}

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap {
			${iconPaddingMob}
        }

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap .zolo__display-icon {
			${borderStylesMob}
			${iconBorderRadiusMob}
			${iconMarginMob}
            ${iconSizeMob}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-icon-wrap img {
			${iconImageSizeMob}
			${iconImageBorderMob}
			${iconImageBorderRadiusMob}
		}

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-body-content .zolo-box-button {
            ${buttonBGMobStyle}
			${gapMob}
			${buttonBorderStylesMob}
			${buttonBorderRadiusMob}
			${buttonPaddingMob}
			${buttonMarginMob}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-body-content .zolo-box-button svg{
			${buttonIconSizeMob}
            ${buttonIconHSizeMob}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-body-content .zolo-box-button {
			${btnTypoMobile}
		}

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button {
            ${buttonBGHoverMobStyle}
        }

        .${uniqueId}.zolo-block-advanced-icon-box .zolo-ribbon-btn{
            ${ribbonTypoMobile}
            ${ribbonBgMob}
            ${ribbonPaddingMobile}
            ${ribbonMarginMobile}
            ${ribbonBorderMob}
            ${ribbonMobRadius}
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
}
