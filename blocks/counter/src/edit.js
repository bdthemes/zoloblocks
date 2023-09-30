/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const {
    handleUniqueId,
    softMinifyCssStrings,
    generateResAlignmentStyle,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    DisplayIcon,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
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

import Inspector from './inspector';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        preset,
        hideIcon,
        hideTitle,
        hideCounter,
        counterNumber,
        counterSuffix,
        counterIcon,
        titleText,
        iconType,
        iconTypeImage,

        // Old Attributes

        blockStyle,
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
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `muhib `),
    });

    // item background
    const {
        backgroundStylesDesktop: containerDeskBGStyle,
        backgroundStylesTab: containerTabBGStyle,
        backgroundStylesMobile: containerMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    // item border
    const {
        desktopBorderStyle: containerBorderDeskStyle,
        tabBorderStyle: containerBorderTabStyle,
        mobBorderStyle: containerBorderMobStyle,
    } = generateBorderStyle({
        controlName: CONTAINER_BORDER,
        attributes,
    });

    // item border radius
    const {
        dimensionStylesDesktop: containerDeskBorderRadius,
        dimensionStylesTab: containerTabBorderRadius,
        dimensionStylesMobile: containerMobBorderRadius,
    } = generateDimensionStyle({
        controlName: CONTAINER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // item box shadow
    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_BOX_SHADOW,
    });

    // item hover box shadow
    const { boxShadowStyle: containerHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_HOVER_BOX_SHADOW,
    });

    // Generate Container Margin
    const {
        dimensionStylesDesktop: containerMarginDesk,
        dimensionStylesTab: containerMarginTab,
        dimensionStylesMobile: containerMarginMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Generate Container Padding
    const {
        dimensionStylesDesktop: containerPaddingDesk,
        dimensionStylesTab: containerPaddingTab,
        dimensionStylesMobile: containerPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_PADDING,
        styleFor: 'padding',
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

    // generate button icon height
    const {
        desktopRangeStyle: buttonIconHeight,
        tabRangeStyle: buttonIconHeightTab,
        mobRangeStyle: buttonIconHeightMob,
    } = generateResRangeStyle({
        controlName: BUTTON_ICON_SIZE,
        property: 'height',
        attributes,
    });

    // generate button icon width
    const {
        desktopRangeStyle: buttonIconWidth,
        tabRangeStyle: buttonIconWidthTab,
        mobRangeStyle: buttonIconWidthMob,
    } = generateResRangeStyle({
        controlName: BUTTON_ICON_SIZE,
        property: 'width',
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
		.${uniqueId}.zolo-block-advanced-icon-box-${preset} .zolo-block-item{
			${containerDeskBGStyle}
			${containerBorderDeskStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerMarginDesk}
			${containerPaddingDesk}
		}
        .${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item:hover{
            border-color: ${containerBorderHoverColor ? containerBorderHoverColor : ''};
            ${containerHoverBoxShadow}
        }
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
			color: ${textColor ? textColor : ''};
		}
		.${uniqueId}.zolo-block-advanced-icon-box .zolo-block-item .zolo-block-title:hover{
			color: ${textHoverColor ? textHoverColor : ''};
		}
		.${uniqueId} .zolo-block-desc{
			${descTypoDesktop}
			${descMarginDesktop}
			color: ${descColor ? descColor : ''};
		}
		.${uniqueId} .zolo-block-desc:hover{
			color: ${descHoverColor ? descHoverColor : ''};
		}		
		.${uniqueId} .zolo-block-icon-wrap i {
			background: ${iconBackgroundColor ? iconBackgroundColor : ''};
			color: ${iconColor ? iconColor : ''};	
			${iconSize}
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconMarginDesktop}
			${iconBoxShadow}
			}
		.${uniqueId} .zolo-block-icon-wrap i:hover{			
			background: ${iconBackgroundHoverColor ? iconBackgroundHoverColor : ''};
			color: ${iconHoverColor ? iconHoverColor : ''};
			${iconHoverBoxShadow}
			border-color: ${iconBorderHoverColor ? iconBorderHoverColor : ''}
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
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button:hover {			
			${buttonBGHoverDeskStyle}
			background: ${btnBgHoverColor ? btnBgHoverColor : ''};
			${buttonHoverBoxShadow}
			border-color: ${btnHoverBorderColor ? btnHoverBorderColor : ''}
		}
		
		.${uniqueId} .zolo-block-body-content .zolo-box-button span{
			color: ${buttonIconColor};
			${buttonIconSize}			
			${buttonIconHeight}			
			${buttonIconWidth}			
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button:hover span{
			color: ${buttonIconHoverColor}	
		}
		
		.${uniqueId} .zolo-block-body-content .zolo-box-button p{
            color: ${btnColor ? btnColor : ''};	
			${btnTypoDesktop}
		}

		.${uniqueId} .zolo-block-body-content .zolo-box-button:hover p{			
			color: ${btnHoverColor ? btnHoverColor : ''};			
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
		.${uniqueId}.zolo-block-advanced-icon-box-${preset} .zolo-block-item{
			${containerTabBGStyle}
			${containerBorderTabStyle}
			${containerTabBorderRadius}
			${containerMarginTab}
			${containerPaddingTab}
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
		.${uniqueId} .zolo-block-body-content .zolo-box-button span{
			${buttonIconSizeTab}			
			${buttonIconHeightTab}			
			${buttonIconWidthTab}			
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
		.${uniqueId}.zolo-block-advanced-icon-box-${preset} .zolo-block-item{
			${containerMobBGStyle}
			${containerBorderMobStyle}
			${containerMobBorderRadius}
			${containerMarginMob}
			${containerPaddingMob}
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
		.${uniqueId} .zolo-block-body-content .zolo-box-button span{
			${buttonIconSizeMob}			
			${buttonIconHeightMob}			
			${buttonIconWidthMob}			
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

    const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

    // Set All Style in "blockStyle" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes]);
    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <BlockControls>
                {iconTypeImage && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        iconTypeImage: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={iconTypeImage && iconTypeImage.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zolo-blocks')}
                                        icon="update"
                                        onClick={open}
                                    />
                                )}
                            />
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        iconTypeImage: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>
            <style>{` ${softMinifyCssStrings(allStyle)}`}</style>

            <div {...blockProps}>
                <div class="zolo-counter-wrap zolo-counter-style-1">
                    <div class="zolo-counter-item">
                        {hideIcon && (
                            <div class="zolo-counter-icon">
                                {iconType == 'icon' ? (
                                    <DisplayIcon icon={counterIcon} />
                                ) : (
                                    iconTypeImage && <img src={iconTypeImage.url} alt={iconTypeImage.alt || titleText} />
                                )}
                            </div>
                        )}

                        <div class="zolo-counter-inner-content">
                            <div class="zolo-counter-count">
                                {hideCounter && (
                                    <>
                                        <RichText
                                            label={__('Counter Number', 'zolo-blocks')}
                                            tagName="span"
                                            className="counter"
                                            value={counterNumber}
                                            onChange={(counterNumber) => setAttributes({ counterNumber })}
                                        />
                                        <RichText
                                            label={__('Counter Suffix', 'zolo-blocks')}
                                            tagName="span"
                                            className="zolo-counter-sub-text"
                                            value={counterSuffix}
                                            onChange={(counterSuffix) => setAttributes({ counterSuffix })}
                                        />
                                    </>
                                )}
                            </div>
                            {hideTitle && (
                                <RichText
                                    label={__('Counter Title', 'zolo-blocks')}
                                    tagName="div"
                                    className="zolo-counter-title"
                                    value={titleText}
                                    onChange={(titleText) => setAttributes({ titleText })}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
