/**
 * WordPress dependencies
 */
import {
    useBlockProps,
    RichText,
    BlockControls,
    MediaUpload,
    __experimentalLinkControl as LinkControl,
    MediaPlaceholder,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup, Dropdown } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const {
    handleUniqueId,
    softMinifyCssStrings,
    generateResAlignmentStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    CONTAINER_HEIGHT,
    CONTENT_ALIGNMENT,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    LINK_MARGIN,
    LINK_TEXT_SHADOW,
    LINK_TEXT_STROKE,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BORDER,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
    IMAGE_HEIGHT,
    IMAGE_WIDTH,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';

import Inspector from './inspector';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const {
        uniqueId,
        isBrandName,
        isBrandLink,
        brandPhoto,
        brandName,
        brandNameTag,
        brandLabel,
        brandDetailPageLink,
        textColor,
        linkColor,
        linkHoverColor,
        blockStyle,
        containerHoverBorderColor,
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

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            preset: context['zolo/preset'],
            heading: context['zolo/heading'],
            showBrandName: context['zolo/showBrandName'],
            showBrandLink: context['zolo/showBrandLink'],
        });
    }, [context]);

    // block props
    const blockProps = useBlockProps({
        className: classnames(className, `zb-brand-item ${uniqueId} ${brandPhoto ? 'has-photo' : ''}`),
    });

    // Content Align
    const {
        desktopAlignStyle: brandContentDeskAlignStyle,
        tabAlignStyle: brandContentTabAlignStyle,
        mobAlignStyle: brandContentMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    // Container
    const {
        desktopRangeStyle: deskContainerHeight,
        tabRangeStyle: tabContainerHeight,
        mobRangeStyle: mobContainerHeight,
    } = generateResRangeStyle({
        controlName: CONTAINER_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: containerBorderDesk,
        tabBorderStyle: containerBorderTab,
        mobBorderStyle: containerBorderMob,
    } = generateBorderStyle({
        controlName: CONTAINER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: containerDeskBorderRadius,
        dimensionStylesTab: containerTabBorderRadius,
        dimensionStylesMobile: containerMobBorderRadius,
    } = generateDimensionStyle({
        controlName: CONTAINER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_BOX_SHADOW,
    });

    const {
        backgroundStylesDesktop: containerDeskBGStyle,
        backgroundStylesTab: containerTabBGStyle,
        backgroundStylesMobile: containerMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: brandPhotoDeskBGStyle,
        backgroundStylesTab: brandPhotoTabBGStyle,
        backgroundStylesMobile: brandPhotoMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BRAND_PHOTO_BG,
        attributes,
        noMainBGImg: false,
    });

    // Container Hover
    const {
        backgroundStylesDesktop: containerHoverDeskBGStyle,
        backgroundStylesTab: containerHoverTabBGStyle,
        backgroundStylesMobile: containerHoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_HOVER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    // Container Hover Box Shadow
    const { boxShadowStyle: brandContainerHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_HOVER_BOX_SHADOW,
    });

    // Photo
    const {
        desktopRangeStyle: deskImageWidth,
        tabRangeStyle: tabImageWidth,
        mobRangeStyle: mobImageWidth,
    } = generateResRangeStyle({
        controlName: IMAGE_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopBorderStyle: photoBorderDesktop,
        tabBorderStyle: photoBorderTab,
        mobBorderStyle: photoBorderMob,
    } = generateBorderStyle({
        controlName: BRAND_PHOTO_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: brandPhotoBorderRadiusDesk,
        dimensionStylesTab: brandPhotoBorderRadiusTab,
        dimensionStylesMobile: brandPhotoBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // Photo Box Shadow
    const { boxShadowStyle: brandPhotoBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BRAND_PHOTO_BOX_SHADOW,
    });

    // Brand Photo Padding
    const {
        dimensionStylesDesktop: brandPhotoPaddingDesk,
        dimensionStylesTab: brandPhotoPaddingTab,
        dimensionStylesMobile: brandPhotoPaddingMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Brand Photo Margin
    const {
        dimensionStylesDesktop: brandPhotoMaringDesk,
        dimensionStylesTab: brandPhotoMarginTab,
        dimensionStylesMobile: brandPhotoMarginMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Title Typography
    const {
        typoStylesDesktop: titleTypoDesk,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });

    // Link Typography
    const {
        typoStylesDesktop: linkTypoDesk,
        typoStylesTab: linkTypoTab,
        typoStylesMobile: linkTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LINK_TYPOGRAPHY,
        defaultFontSize: 16,
        attributes,
    });

    // Title Margin
    const {
        dimensionStylesDesktop: titleMarginDesk,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMob,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Link Margin
    const {
        dimensionStylesDesktop: linkMarginDesk,
        dimensionStylesTab: linkMarginTab,
        dimensionStylesMobile: linkMarginMob,
    } = generateDimensionStyle({
        controlName: LINK_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Title Text Shadow
    const { textShadowStyle: titleTextShadow } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });

    // Title Text Stroke
    const {
        desktopTextStrokeStyle: titleTextStrokeDesk,
        tabTextStrokeStyle: titleTextStrokeTab,
        mobTextStrokeStyle: titleTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TITLE_TEXT_STROKE,
    });

    // Link Text Shadow
    const { textShadowStyle: linkTextShadow } = generateTextShadowStyles({
        attributes,
        controlName: LINK_TEXT_SHADOW,
    });

    // Link Text Stroke
    const {
        desktopTextStrokeStyle: linkTextStrokeDesk,
        tabTextStrokeStyle: linkTextStrokeTab,
        mobTextStrokeStyle: linkTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: LINK_TEXT_STROKE,
    });

    /**
     * Presets Based Styles
     */
    // let presetStyles;
    // switch (preset) {
    //     case 'style-1':
    //         presetStyles = `
    // 			.zolo-block-icon-wrap{
    // 				justify-content: ${presetOneStyles && presetOneStyles.iconPosition};
    // 			}
    // 			.zolo-block-link-btn{
    // 				justify-content: ${presetOneStyles && presetOneStyles.buttonPosition};
    // 			}
    // 			.zolo-box-button{
    // 				flex-direction: ${presetOneStyles && presetOneStyles.buttonIconPosition};
    // 			}
    // 		`;
    //         break;
    //     case 'style-2':
    //         presetStyles = `
    // 			.zolo-block-icon-wrap{
    // 				align-items: ${presetTwoStyles && presetTwoStyles.iconPosition};
    // 			}
    // 			.zolo-block-link-btn{
    // 				justify-content: ${presetTwoStyles && presetTwoStyles.buttonPosition};
    // 			}
    // 			.zolo-box-button{
    // 				flex-direction: ${presetTwoStyles && presetTwoStyles.buttonIconPosition};
    // 			}
    // 		`;
    //         break;
    //     case 'style-3':
    //         presetStyles = `
    // 			.${uniqueId}
    // 			.zolo-block-icon-wrap{
    // 				align-items: ${presetThreeStyles && presetThreeStyles.iconPosition};
    // 			}
    // 			.zolo-block-link-btn{
    // 				justify-content: ${presetThreeStyles && presetThreeStyles.buttonPosition};
    // 			}
    // 			.zolo-box-button{
    // 				flex-direction: ${presetThreeStyles && presetThreeStyles.buttonIconPosition};
    // 			}
    // 		`;
    //         break;
    //     case 'style-4':
    //         break;
    //     default:
    //         presetStyles = '';
    // }
    /**
     * All Style Combination
     */

    const desktopAllStyle = `	
		.${uniqueId}.zb-brand-item{
            ${deskContainerHeight}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
            ${containerBorderDesk}
		}		
		.${uniqueId}.zb-brand-item:hover{
			${brandContainerHoverBoxShadow}
            ${containerHoverBorderColor ? `border-color:${containerHoverBorderColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-brand-child .zb-brand-image img{
            ${brandPhotoPaddingDesk}	
			${deskImageWidth}
			${brandPhotoBorderRadiusDesk}
			${brandPhotoBoxShadow}
			${brandPhotoDeskBGStyle}			
			${brandPhotoMaringDesk}		
			${photoBorderDesktop}
		}
        .${uniqueId} .zb-brand-inner-content{
            ${brandContentDeskAlignStyle}
        }
		.${uniqueId} .zb-brand-content{
			${containerHoverDeskBGStyle}
		}		
		.${uniqueId} .zb-brand-title{
			${titleTypoDesk}
			${titleMarginDesk}
			${titleTextShadow}
			${titleTextStrokeDesk}
			color:${textColor};
		}
		.${uniqueId} .zb-brand-link{
			${linkTypoDesk}
			${linkMarginDesk}
			${linkTextShadow}
			${linkTextStrokeDesk}
			color:${linkColor};
		}
		.${uniqueId} .zb-brand-link:hover{
			color:${linkHoverColor};
		}
  	`;

    const tabletAllStyle = `
        .${uniqueId}.zb-brand-item{
            ${tabContainerHeight}
            ${containerTabBorderRadius}
            ${containerTabBGStyle}
            ${containerBorderTab}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-image img{
            ${brandPhotoPaddingTab}
            ${tabImageWidth}
            ${brandPhotoBorderRadiusTab}
            ${brandPhotoTabBGStyle}
            ${brandPhotoMarginTab}
            ${photoBorderTab}
        }
        .${uniqueId} .zb-brand-inner-content{
            ${brandContentTabAlignStyle}
        }
        .${uniqueId} .zb-brand-content{
            ${containerHoverTabBGStyle}
        }
        .${uniqueId} .zb-brand-title{
            ${titleTypoTab}
            ${titleMarginTab}
            ${titleTextStrokeTab}
        }
        .${uniqueId} .zb-brand-link{
            ${linkTypoTab}
            ${linkMarginTab}
            ${linkTextStrokeTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.zb-brand-item{
            ${mobContainerHeight}
            ${containerMobBorderRadius}
            ${containerMobBGStyle}
            ${containerBorderMob}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-image img{
            ${brandPhotoPaddingMob}
            ${mobImageWidth}
            ${brandPhotoBorderRadiusMob}
            ${brandPhotoMobBGStyle}
            ${brandPhotoMarginMob}
            ${photoBorderMob}
        }
        .${uniqueId} .zb-brand-inner-content{
            ${brandContentMobAlignStyle}
        }
        .${uniqueId} .zb-brand-content{
            ${containerHoverMobBGStyle}
        }
        .${uniqueId} .zb-brand-title{
            ${titleTypoMob}
            ${titleMarginMob}
            ${titleTextStrokeMob}
        }
        .${uniqueId} .zb-brand-link{
            ${linkTypoMob}
            ${linkMarginMob}
            ${linkTextStrokeMob}
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

            {brandPhoto && (
                <BlockControls>
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        brandPhoto: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={brandPhoto && brandPhoto.id}
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
                                        brandPhoto: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                </BlockControls>
            )}

            <style>{` ${softMinifyCssStrings(allStyle)}`}</style>
            <div {...blockProps}>
                <div className="zb-brand-image">
                    {brandPhoto ? (
                        <img src={brandPhoto.url} alt={brandPhoto.alt || brandName} className="zolo-img" />
                    ) : (
                        <MediaPlaceholder
                            onSelect={(media) => setAttributes({ brandPhoto: media })}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{ title: __('Brand Photo', 'zolo-blocks') }}
                        />
                    )}
                </div>
                <div className="zb-brand-content">
                    <div className="zb-brand-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>
                    <div className="zb-brand-inner-content">
                        {isBrandName && (
                            <RichText
                                tagName={brandNameTag}
                                className="zb-brand-title"
                                value={brandName}
                                onChange={(name) =>
                                    setAttributes({
                                        brandName: name,
                                    })
                                }
                                placeholder={__('Brand name..', 'zolo-blocks')}
                            />
                        )}
                        {isBrandLink && (
                            <a
                                className="zb-brand-link"
                                href={brandDetailPageLink && brandDetailPageLink.url}
                                rel={brandDetailPageLink && brandDetailPageLink.opensInNewTab && 'noreferer'}
                                target={brandDetailPageLink && brandDetailPageLink.opensInNewTab && '_blank'}
                            >
                                <RichText
                                    tagName="span"
                                    value={brandLabel}
                                    onChange={(name) =>
                                        setAttributes({
                                            brandLabel: name,
                                        })
                                    }
                                    placeholder={__('www.zalando.com', 'zolo-blocks')}
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
