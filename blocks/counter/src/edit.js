/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, MediaUpload, MediaPlaceholder, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import CountUp from 'react-countup';
/**
 * Internal depencencies
 */
const {
    handleUniqueId,
    softMinifyCssStrings,
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
    COUNTER_MARGIN,
    COUNTER_GAP,
    COUNTER_TEXT_STROKE,
    COUNTER_TEXT_SHADOW,
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_IMAGE_SIZE,
    ICON_PADDING,
    ICON_MARGIN,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY, COUNTER_TYPOGRAPHY } from './constants/typoPrefixConstant';

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
        titleTag,
        counterSuffix,
        counterIcon,
        titleText,
        titleTextColor,
        titleTextHoverColor,
        iconType,
        iconTypeImage,
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
        className: classnames(className, ``),
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

    // Generate Counter Margin
    const {
        dimensionStylesDesktop: counterMarginDesk,
        dimensionStylesTab: counterMarginTab,
        dimensionStylesMobile: counterMarginMob,
    } = generateDimensionStyle({
        controlName: COUNTER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //counter typography
    const {
        typoStylesDesktop: counterTypoDesktop,
        typoStylesTab: counterTypoTab,
        typoStylesMobile: counterTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: COUNTER_TYPOGRAPHY,
        defaultFontSize: 25,
        attributes,
    });

    // generate counter gap
    const {
        desktopRangeStyle: counterGapDesk,
        tabRangeStyle: counterGapTab,
        mobRangeStyle: counterGapMob,
    } = generateResRangeStyle({
        controlName: COUNTER_GAP,
        property: 'gap',
        attributes,
    });

    // Generate Counter Text Shadow
    const { textShadowStyle: counterTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: COUNTER_TEXT_SHADOW,
    });

    // Generate Counter Text Stroke
    const {
        desktopTextStrokeStyle: counterTextStrokeStyleDesk,
        tabTextStrokeStyle: counterTextStrokeStyleTab,
        mobTextStrokeStyle: counterTextStrokeStyleMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: COUNTER_TEXT_STROKE,
    });

    //title typography
    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        defaultFontSize: 16,
        attributes,
    });

    //generate image width
    const {
        desktopRangeStyle: iconImageWidthDesk,
        tabRangeStyle: iconImageWidthTab,
        mobRangeStyle: iconImageWidthMob,
    } = generateResRangeStyle({
        controlName: ICON_IMAGE_SIZE,
        property: 'width',
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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `	
		.${uniqueId}.zolo-counter-${preset} .zolo-counter-item{
            align-items:${iconAlignment ? iconAlignment : ''};
			${containerDeskBGStyle}            
			${containerBorderDeskStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerMarginDesk}
			${containerPaddingDesk}
		}
        .wp-block-zolo-counter .${uniqueId} .zolo-counter-count{
            color: ${textColor ? textColor : ''};
            ${counterMarginDesk}
            ${counterGapDesk}
            ${counterTextStrokeStyleDesk}
        }
        .wp-block-zolo-counter .${uniqueId} .zolo-counter-count:hover{
            color: ${textHoverColor ? textHoverColor : ''};
        }
		.${uniqueId} .animated-counter, .${uniqueId} .zolo-counter-sub-text{
			${counterTypoDesktop}
			${counterTextShadowStyle}
			color: ${descColor ? descColor : ''};
		}
        .${uniqueId} .animated-counter:hover{
			color: ${descHoverColor ? descHoverColor : ''};
		}        
        .wp-block-zolo-counter .${uniqueId} .zolo-counter-title{
            color: ${titleTextColor ? titleTextColor : ''};
            ${titleTypoDesktop}
            ${titleMarginDesktop}
            ${titleTextShadowStyle}
            ${titleTextStrokeStyle}
        }
        .wp-block-zolo-counter .${uniqueId} .zolo-counter-title:hover{
            color: ${titleTextHoverColor ? titleTextHoverColor : ''};
        }
        .wp-block-zolo-counter .zolo-counter-style-1.${uniqueId} .zolo-counter-icon i {
			${iconSize}
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconMarginDesktop}
			${iconBoxShadow}
            background: ${iconBackgroundColor ? iconBackgroundColor : ''};
			color: ${iconColor ? iconColor : ''};	
			}
        .wp-block-zolo-counter .zolo-counter-style-1.${uniqueId} .zolo-counter-icon i:hover{			
            background: ${iconBackgroundHoverColor ? iconBackgroundHoverColor : ''};
            color: ${iconHoverColor ? iconHoverColor : ''};
            ${iconHoverBoxShadow}
            border-color: ${iconBorderHoverColor ? iconBorderHoverColor : ''}
        }

        .wp-block-zolo-counter .zolo-counter-style-1 .zolo-counter-icon{
            justify-content: ${iconAlignment ? iconAlignment : ''};
        }

        .wp-block-zolo-counter .zolo-counter-style-1.${uniqueId} .zolo-counter-icon img {
            ${iconImageWidthDesk}
        }
        .${uniqueId}.zolo-counter-${preset} .zolo-counter-item:hover{
            border-color: ${containerBorderHoverColor ? containerBorderHoverColor : ''};
            ${containerHoverBoxShadow}
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
        .${uniqueId}.zolo-counter-${preset} .zolo-counter-item{
            ${containerTabBGStyle}
        }	
		.${uniqueId} .animated-counter, .${uniqueId} .zolo-counter-sub-text{
            ${counterTypoTab}
		}
        .wp-block-zolo-counter .${uniqueId} .zolo-counter-count{
            ${counterMarginTab}
            ${counterGapTab}
            ${counterTextStrokeStyleTab}
        }
        .wp-block-zolo-counter .${uniqueId} .zolo-counter-title{
            ${titleTypoTab}
            ${titleMarginTab}
            ${tabTitleTextStrokeStyle}
        }		
	`;

    const mobileAllStyle = `
        .${uniqueId}.zolo-counter-${preset} .zolo-counter-item{
            ${containerMobBGStyle}
        }
		.${uniqueId} .animated-counter, .${uniqueId} .zolo-counter-sub-text{
			${counterTypoMobile}
		}        
        .wp-block-zolo-counter .${uniqueId} .zolo-counter-count{
            ${counterMarginMob}
            ${counterGapMob}
            ${counterTextStrokeStyleMob}
        }
        .wp-block-zolo-counter .${uniqueId} .zolo-counter-title{
            ${titleTypoMobile}
            ${titleMarginMob}
            ${mobTitleTextStrokeStyle}
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
                <div class={`zolo-counter-wrap zolo-counter-${preset} ${uniqueId}`}>
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
                                        <span className="animated-counter">
                                            <CountUp end={counterNumber} duration={3.2} />
                                        </span>
                                        <span className="zolo-counter-sub-text">{counterSuffix}</span>
                                    </>
                                )}
                            </div>

                            {hideTitle && (
                                <RichText
                                    className={`zolo-counter-title`}
                                    tagName={titleTag}
                                    value={titleText}
                                    onChange={(text) =>
                                        setAttributes({
                                            titleText: text,
                                        })
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
