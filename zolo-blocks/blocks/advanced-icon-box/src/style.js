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
    ICON_IMAGE_BORDER_RADIUS,
} from './constants';

import { TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY, BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        preset,
        containerBorderHoverColor,
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
        btnColor,
        btnHoverColor,
        btnBgHoverColor,
        btnHoverBorderColor,
        buttonIconColor,
        buttonIconHoverColor,
        presetOneStyles,
        presetTwoStyles,
        presetThreeStyles,
    } = attributes;

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
        defaultFontSize: 25,
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
        defaultFontSize: 16,
        attributes,
    });

    // button typography
    const {
        typoStylesDesktop: btnTypoDesktop,
        typoStylesTab: btnTypoTab,
        typoStylesMobile: btnTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TYPOGRAPHY,
        defaultFontSize: 14,
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
        property: 'font-size',
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
        desktopRangeStyle: iconImageBorderRadiusDesk,
        tabRangeStyle: iconImageBorderRadiusTab,
        mobRangeStyle: iconImageBorderRadiusMob,
    } = generateResRangeStyle({
        controlName: ICON_IMAGE_BORDER_RADIUS,
        property: 'border-radius',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId} .zolo-block-icon-wrap{
			justify-content: ${presetOneStyles ? presetOneStyles.contentPosition : 'left'};
			align-items: ${iconAlignment ? iconAlignment : 'flex-start'};
		}
		.${uniqueId} .zolo-block-body-content{
			text-align: ${presetOneStyles ? presetOneStyles.contentPosition : 'left'};
		}
		.${uniqueId} .zolo-block-link-btn{
			justify-content: ${presetOneStyles ? presetOneStyles.contentPosition : 'left'};
		}
		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item .zolo-block-title{
			${titleTypoDesktop}
			${titleTextShadowStyle}
        	${titleTextStrokeStyle}
			${titleMarginDesktop ? titleMarginDesktop : ''}
            ${textColor ? `color: ${textColor};` : ''}
            transition: all 0.3s ease-in-out;
		}
		.${uniqueId} .zolo-block-desc{
			${descTypoDesktop}
			${descMarginDesktop}
            ${descColor ? `color: ${descColor};` : ''}
            transition: all 0.3s ease-in-out;
		}
		.${uniqueId} .zolo-block-icon-wrap i {
            ${iconBackgroundColor ? `background: ${iconBackgroundColor};` : ''}
            ${iconColor ? `color: ${iconColor};` : ''}
			${iconSize}
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconMarginDesktop}
			${iconBoxShadow}
            transition: all 0.3s ease-in-out;
		}
		.${uniqueId} .zolo-block-icon-wrap img {
			${iconImageSizeDesk}
			${iconImageBorderDesk}
			${iconImageBorderRadiusDesk}
		}
		.${uniqueId} .zolo-block-body-content .zolo-box-button {
			${buttonBGDeskStyle}
			${gapDesk}
			${buttonBorderStyles}
			${buttonBorderRadiusDesktop}
			${buttonPaddingDesktop}
			${buttonMarginDesktop}
			${buttonBoxShadow}
            transition: all 0.3s ease-in-out;
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button i{
            ${buttonIconColor ? `color: ${buttonIconColor};` : ''}
			${buttonIconSize}
            transition: all 0.3s ease-in-out;
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button p{
            color: ${btnColor ? btnColor : ''};
			${btnTypoDesktop}
		}

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-block-title{
            ${textHoverColor ? `color: ${textHoverColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-block-desc{
            ${descHoverColor ? `color: ${descHoverColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-block-icon-wrap i{
            ${iconBackgroundHoverColor ? `background: ${iconBackgroundHoverColor};` : ''}
            ${iconHoverColor ? `color: ${iconHoverColor};` : ''}
			${iconHoverBoxShadow}
            ${iconBorderHoverColor ? `border-color: ${iconBorderHoverColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button {
			${buttonBGHoverDeskStyle}
            ${btnBgHoverColor ? `background: ${btnBgHoverColor};` : ''}
			${buttonHoverBoxShadow}
            ${btnHoverBorderColor ? `border-color: ${btnHoverBorderColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button p{
            ${btnHoverColor ? `color: ${btnHoverColor}; ` : ''}
        }

        ${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button i{
            ${buttonIconHoverColor ? `color: ${buttonIconHoverColor};` : ''}
        }

       ${
           preset === 'style-1'
               ? `.zolo-block-icon-wrap {
                        justify-content: ${presetOneStyles && presetOneStyles.contentPosition};
                } .zolo-box-button {
                    flex-direction: ${presetOneStyles && presetOneStyles.iconPosition};
                }`
               : ''
       }
       ${
           preset === 'style-2'
               ? `.${uniqueId}
               .zolo-block-body-content {
                text-align: ${presetTwoStyles && presetTwoStyles.contentPosition};
                } .${uniqueId}
				.zolo-block-link-btn {
                    justify-content: ${presetTwoStyles && presetTwoStyles.contentPosition};
                }
                .zolo-box-button{
					flex-direction: ${presetTwoStyles && presetTwoStyles.iconPosition};
				}`
               : ''
       }
       ${
           preset === 'style-3'
               ? `.${uniqueId}
               .zolo-block-body-content {
                text-align: ${presetThreeStyles && presetThreeStyles.contentPosition};
                } .${uniqueId}
				.zolo-block-link-btn {
                    justify-content: ${presetThreeStyles && presetThreeStyles.contentPosition};
                }
                .zolo-box-button{
					flex-direction: ${presetThreeStyles && presetThreeStyles.iconPosition};
				}`
               : ''
       }

  	`;

    const tabletAllStyle = `
		.${uniqueId}{
			${iconAlignmentTab}
		}
		.${uniqueId} .zolo-block-title{
			${titleTypoTab}
			${tabTitleTextStrokeStyle}
			${titleMarginTab}
		}
		.${uniqueId} .zolo-block-desc{
			${descMarginTab}
			${descTypoTab}
		}
		.${uniqueId} .zolo-block-icon-wrap i {
			${iconSizeTab}
			${borderStylesTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
			${iconMarginTab}
			background: ${iconBackgroundColor ? iconBackgroundColor : ''};
			color: ${iconColor ? iconColor : ''};
		}
		.${uniqueId} .zolo-block-icon-wrap img {
			${iconImageSizeTab}
			${iconImageBorderTab}
			${iconImageBorderRadiusTab}
		}
		.${uniqueId} .zolo-block-body-content .zolo-box-button i{
			${buttonIconSizeTab}
		}
		.${uniqueId} .zolo-block-body-content .zolo-box-button {
			${gapTab}
			${buttonBorderStylesTab}
			${buttonBorderRadiusTab}
			${buttonPaddingTab}
			${buttonMarginTab}
		}
		.${uniqueId} .zolo-block-body-content .zolo-box-button p{
			${btnTypoTab}
		}
	`;

    const mobileAllStyle = `
		.${uniqueId}{
			${iconAlignmentMob}
		}
		.${uniqueId} .zolo-block-title{
			${titleTypoMobile}
			${mobTitleTextStrokeStyle}
			${titleMarginMob}
		}
		.${uniqueId} .zolo-block-desc{
			${descMarginMob}
			${descTypoMobile}
		}
		.${uniqueId} .zolo-block-icon-wrap i {
			${iconSizeMob}
			${borderStylesMob}
			${iconBorderRadiusMob}
			${iconPaddingMob}
			${iconMarginMob}
		}
		.${uniqueId} .zolo-block-icon-wrap img {
			${iconImageSizeMob}
			${iconImageBorderMob}
			${iconImageBorderRadiusMob}
		}
		.${uniqueId} .zolo-block-body-content .zolo-box-button i{
			${buttonIconSizeMob}
		}
		.${uniqueId} .zolo-block-body-content .zolo-box-button {
			${gapMob}
			${buttonBorderStylesMob}
			${buttonBorderRadiusMob}
			${buttonPaddingMob}
			${buttonMarginMob}
		}
		.${uniqueId} .zolo-block-body-content .zolo-box-button p{
			${btnTypoMobile}
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
