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
} from './constants';

import { TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY, BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
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
    } = attributes;

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
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: iconHSize,
        tabRangeStyle: iconHSizeTab,
        mobRangeStyle: iconHSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
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
        .${uniqueId}{
            ${iconAlignmentDesktop}
        }
		.${uniqueId} .zolo-block-icon-wrap{
			align-items: ${iconAlignment ? iconAlignment : 'flex-start'};
		}

		.${uniqueId} .zolo-block-item{
			${contentDeskAlign}
		}

		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item .zolo-block-title{
			${titleTypoDesktop}
			${titleTextShadowStyle}
        	${titleTextStrokeStyle}
			${titleMarginDesktop ? titleMarginDesktop : ''}
            ${textColor ? `color: ${textColor};` : ''}
		}

		.${uniqueId} .zolo-block-desc{
			${descTypoDesktop}
			${descMarginDesktop}
            ${descColor ? `color: ${descColor};` : ''}
		}

		.${uniqueId} .zolo-block-icon-wrap svg {
            ${iconBackgroundColor ? `background: ${iconBackgroundColor};` : ''}
            ${iconColor ? `fill: ${iconColor};` : ''}
			${iconSize}
            ${iconHSize}
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconMarginDesktop}
			${iconBoxShadow}
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
            color: ${btnColor ? btnColor : ''};
			${btnTypoDesktop}
            flex-direction: ${iconPosition};
		}


        .${uniqueId} .zolo-block-body-content .zolo-box-button svg{
			${buttonIconSize}
            ${buttonIconHSize}
            ${btnColor ? `fill: ${btnColor};` : ''}
		}

        ${
            globalLink === true
                ? `.${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button {
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
                `
                : ''
        }

        ${
            globalLink === false
                ? `.${uniqueId}.wp-block-zolo-advanced-icon-box .zolo-box-button:hover {
                    ${buttonBGHoverDeskStyle}
                    ${btnBgHoverColor ? `background: ${btnBgHoverColor};` : ''}
                    ${buttonHoverBoxShadow}
                    ${btnHoverBorderColor ? `border-color: ${btnHoverBorderColor};` : ''}
                    ${btnHoverColor ? `color: ${btnHoverColor}; ` : ''}
                }
                .${uniqueId}.wp-block-zolo-advanced-icon-box .zolo-box-button:hover svg{
                    ${btnHoverColor ? `fill: ${btnHoverColor};` : ''}
                }
                .${uniqueId}.wp-block-zolo-advanced-icon-box .zolo-block-icon-wrap svg:hover {
                    ${iconBackgroundHoverColor ? `background: ${iconBackgroundHoverColor};` : ''}
                    ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
                    ${iconHoverBoxShadow}
                    ${iconBorderHoverColor ? `border-color: ${iconBorderHoverColor};` : ''}
                }        
                `
                : ''
        }

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-block-title{
            ${textHoverColor ? `color: ${textHoverColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-block-desc{
            ${descHoverColor ? `color: ${descHoverColor};` : ''}
        }
  	`;

    const tabletAllStyle = `
		.${uniqueId}{
			${iconAlignmentTab}
		}

        .${uniqueId} .zolo-block-item{
			${contentTabAlign}
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

		.${uniqueId} .zolo-block-icon-wrap svg {
			${iconSizeTab}
            ${iconHSizeTab}
			${borderStylesTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
			${iconMarginTab}
			background: ${iconBackgroundColor ? iconBackgroundColor : ''};
		}

		.${uniqueId} .zolo-block-icon-wrap img {
			${iconImageSizeTab}
			${iconImageBorderTab}
			${iconImageBorderRadiusTab}
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button {
            ${buttonBGTabStyle}
			${gapTab}
			${buttonBorderStylesTab}
			${buttonBorderRadiusTab}
			${buttonPaddingTab}
			${buttonMarginTab}
		}

        .${uniqueId} .zolo-block-body-content .zolo-box-button svg{
			${buttonIconSizeTab}
            ${buttonIconHSizeTab}
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button{
			${btnTypoTab}
		}

        ${
            globalLink === true
                ? `.${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button {
                    ${buttonBGHoverTabStyle}
                }`
                : ''
        }

        ${
            globalLink === false
                ? `.${uniqueId}.wp-block-zolo-advanced-icon-box .zolo-box-button:hover {
                    ${buttonBGHoverTabStyle}
                }`
                : ''
        }
	`;

    const mobileAllStyle = `
		.${uniqueId}{
			${iconAlignmentMob}
		}

        .${uniqueId} .zolo-block-item{
			${contentMobAlign}
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

		.${uniqueId} .zolo-block-icon-wrap svg {
			${iconSizeMob}
            ${iconHSizeMob}
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
        
        .${uniqueId} .zolo-block-body-content .zolo-box-button {
            ${buttonBGMobStyle}
			${gapMob}
			${buttonBorderStylesMob}
			${buttonBorderRadiusMob}
			${buttonPaddingMob}
			${buttonMarginMob}
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button svg{
			${buttonIconSizeMob}
            ${buttonIconHSizeMob}
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button {
			${btnTypoMobile}
		}

        ${
            globalLink === true
                ? `.${uniqueId}.wp-block-zolo-advanced-icon-box:hover .zolo-box-button {
                    ${buttonBGHoverMobStyle}
                }`
                : ''
        }

        ${
            globalLink === false
                ? `.${uniqueId}.wp-block-zolo-advanced-icon-box .zolo-box-button:hover {
                    ${buttonBGHoverMobStyle}
                }`
                : ''
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
