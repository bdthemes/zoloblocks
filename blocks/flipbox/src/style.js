/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
} = window.zoloModule;

import {
    //FRONT ITEMS
    FLIPBOX_HEIGHT,
    FRONT_ITEMS_BORDER,
    FLIPBOX_BORDER_RADIUS,
    FRONT_ITEMS_BG,
    FLIPBOX_ITEMS_PADDING,
    BACK_ITEMS_BORDER,
    BACK_ITEMS_BG,
    FRONT_ITEMS_ALIGNMENT,
    FRONT_ITEMS_VERTICAL_ALIGNMENT,
    BACK_ITEMS_ALIGNMENT,
    BACK_ITEMS_VERTICAL_ALIGNMENT,

    //FLIPBOX FRONT CONTENT
    FRONT_ICON_SIZE,
    FRONT_ICON_BORDER,
    FRONT_ICON_BORDER_RADIUS,
    FRONT_ICON_BG,
    FRONT_ICON_PADDING,
    FRONT_ICON_MARGIN,
    FRONT_TITLE_MARGIN,
    //FLIPBOX BACK CONTENT
    BACK_ICON_SIZE,
    BACK_ICON_BORDER,
    BACK_ICON_BORDER_RADIUS,
    BACK_ICON_BG,
    BACK_ICON_PADDING,
    BACK_ICON_MARGIN,
    BACK_TITLE_MARGIN,
    //FLIPBOX BACK LINK BUTTON
    BACK_LINK_BORDER,
    BACK_LINK_BORDER_RADIUS,
    BACK_LINK_BG,
    BACK_LINK_PADDING,
    BACK_LINK_HBG,
} from './constants';

import {
    FRONT_TITLE_TYPOGRAPHY,
    FRONT_CONTENT_TYPOGRAPHY,
    BACK_TITLE_TYPOGRAPHY,
    BACK_CONTENT_TYPOGRAPHY,
    BACK_LINK_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        flipDuration,
        frontIconColor,
        frontTitleColor,
        frontContentColor,
        backIconColor,
        backTitleColor,
        backContentColor,
        backLinkColor,
        backLinkHoverColor,
        backLinkHoverBorderColor,
        objectFit,
        backImageObjectFit,
        flipEasingType,
        flipCustomEasing,
    } = attributes;

    const {
        desktopRangeStyle: flipboxDeskHeight,
        tabRangeStyle: flipboxTabHeight,
        mobRangeStyle: flipboxMobHeight,
    } = generateResRangeStyle({
        controlName: FLIPBOX_HEIGHT,
        property: 'height',
        attributes,
    });
    const {
        desktopBorderStyle: frontItemsBorderDeskStyle,
        tabBorderStyle: frontItemsBorderTabStyle,
        mobBorderStyle: frontItemsBorderMobStyle,
    } = generateBorderStyle({
        controlName: FRONT_ITEMS_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: flipboxDeskBorderRadius,
        dimensionStylesTab: flipboxTabBorderRadius,
        dimensionStylesMobile: flipboxMobBorderRadius,
    } = generateDimensionStyle({
        controlName: FLIPBOX_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: flipboxItemsDeskPadding,
        dimensionStylesTab: flipboxItemsTabPadding,
        dimensionStylesMobile: flipboxItemsMobPadding,
    } = generateDimensionStyle({
        controlName: FLIPBOX_ITEMS_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // alignment
    const {
        desktopAlignStyle: frontItemsAlignmentDesktop,
        tabAlignStyle: frontItemsAlignmentTab,
        mobAlignStyle: frontItemsAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: FRONT_ITEMS_ALIGNMENT,
        property: 'text-align',
        attributes,
    });
    const {
        desktopAlignStyle: frontItemsVerticalAlignmentDesktop,
        tabAlignStyle: frontItemsVerticalAlignmentTab,
        mobAlignStyle: frontItemsVerticalAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: FRONT_ITEMS_VERTICAL_ALIGNMENT,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopAlignStyle: backItemsAlignmentDesktop,
        tabAlignStyle: backItemsAlignmentTab,
        mobAlignStyle: backItemsAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: BACK_ITEMS_ALIGNMENT,
        property: 'text-align',
        attributes,
    });
    const {
        desktopAlignStyle: backItemsVerticalAlignmentDesktop,
        tabAlignStyle: backItemsVerticalAlignmentTab,
        mobAlignStyle: backItemsVerticalAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: BACK_ITEMS_VERTICAL_ALIGNMENT,
        property: 'justify-content',
        attributes,
    });

    const {
        backgroundStylesDesktop: frontItemsDeskBg,
        backgroundStylesTab: frontItemsTabBg,
        backgroundStylesMobile: frontItemsMobBg,
    } = generateNormalBGControlStyles({
        controlName: FRONT_ITEMS_BG,
        attributes,
        noMainBGImg: false,
    });

    //FLIPBOX BACK CONTENT
    const {
        desktopBorderStyle: backItemsBorderDeskStyle,
        tabBorderStyle: backItemsBorderTabStyle,
        mobBorderStyle: backItemsBorderMobStyle,
    } = generateBorderStyle({
        controlName: BACK_ITEMS_BORDER,
        attributes,
    });

    const {
        backgroundStylesDesktop: backItemsDeskBg,
        backgroundStylesTab: backItemsTabBg,
        backgroundStylesMobile: backItemsMobBg,
    } = generateNormalBGControlStyles({
        controlName: BACK_ITEMS_BG,
        attributes,
        noMainBGImg: false,
    });
    // flipbox icon front

    const {
        dimensionStylesDesktop: frontIconDeskSizeHeight,
        dimensionStylesTab: frontIconTabSizeHeight,
        dimensionStylesMobile: frontIconMobSizeHeight,
    } = generateDimensionStyle({
        controlName: FRONT_ICON_SIZE,
        styleFor: 'height',
        attributes,
    });

    const {
        dimensionStylesDesktop: frontIconDeskSizeWidth,
        dimensionStylesTab: frontIconTabSizeWidth,
        dimensionStylesMobile: frontIconMobSizeWidth,
    } = generateDimensionStyle({
        controlName: FRONT_ICON_SIZE,
        styleFor: 'width',
        attributes,
    });
    const {
        desktopBorderStyle: frontIconBorderDeskStyle,
        tabBorderStyle: frontIconBorderTabStyle,
        mobBorderStyle: frontIconBorderMobStyle,
    } = generateBorderStyle({
        controlName: FRONT_ICON_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: frontIconDeskBorderRadius,
        dimensionStylesTab: frontIconTabBorderRadius,
        dimensionStylesMobile: frontIconMobBorderRadius,
    } = generateDimensionStyle({
        controlName: FRONT_ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: frontIconDeskPadding,
        dimensionStylesTab: frontIconTabPadding,
        dimensionStylesMobile: frontIconMobPadding,
    } = generateDimensionStyle({
        controlName: FRONT_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        dimensionStylesDesktop: frontIconDeskMargin,
        dimensionStylesTab: frontIconTabMargin,
        dimensionStylesMobile: frontIconMobMargin,
    } = generateDimensionStyle({
        controlName: FRONT_ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        backgroundStylesDesktop: frontIconDeskBg,
        backgroundStylesTab: frontIconTabBg,
        backgroundStylesMobile: frontIconMobBg,
    } = generateNormalBGControlStyles({
        controlName: FRONT_ICON_BG,
        attributes,
        noMainBGImg: false,
    });

    // flipbox icon back

    const {
        dimensionStylesDesktop: backIconDeskSizeHeight,
        dimensionStylesTab: backIconTabSizeHeight,
        dimensionStylesMobile: backIconMobSizeHeight,
    } = generateDimensionStyle({
        controlName: BACK_ICON_SIZE,
        styleFor: 'height',
        attributes,
    });

    const {
        dimensionStylesDesktop: backIconDeskSizeWidth,
        dimensionStylesTab: backIconTabSizeWidth,
        dimensionStylesMobile: backIconMobSizeWidth,
    } = generateDimensionStyle({
        controlName: BACK_ICON_SIZE,
        styleFor: 'width',
        attributes,
    });

    const {
        desktopBorderStyle: backIconBorderDeskStyle,
        tabBorderStyle: backIconBorderTabStyle,
        mobBorderStyle: backIconBorderMobStyle,
    } = generateBorderStyle({
        controlName: BACK_ICON_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: backIconDeskBorderRadius,
        dimensionStylesTab: backIconTabBorderRadius,
        dimensionStylesMobile: backIconMobBorderRadius,
    } = generateDimensionStyle({
        controlName: BACK_ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: backIconDeskPadding,
        dimensionStylesTab: backIconTabPadding,
        dimensionStylesMobile: backIconMobPadding,
    } = generateDimensionStyle({
        controlName: BACK_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        dimensionStylesDesktop: backIconDeskMargin,
        dimensionStylesTab: backIconTabMargin,
        dimensionStylesMobile: backIconMobMargin,
    } = generateDimensionStyle({
        controlName: BACK_ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        backgroundStylesDesktop: backIconDeskBg,
        backgroundStylesTab: backIconTabBg,
        backgroundStylesMobile: backIconMobBg,
    } = generateNormalBGControlStyles({
        controlName: BACK_ICON_BG,
        attributes,
        noMainBGImg: false,
    });

    // flipbox front title
    const {
        typoStylesDesktop: frontTitleTypoDesk,
        typoStylesTab: frontTitleTypoTab,
        typoStylesMobile: frontTitleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FRONT_TITLE_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: frontTitleDeskMargin,
        dimensionStylesTab: frontTitleTabMargin,
        dimensionStylesMobile: frontTitleMobMargin,
    } = generateDimensionStyle({
        controlName: FRONT_TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // flipbox front title
    const {
        typoStylesDesktop: backTitleTypoDesk,
        typoStylesTab: backTitleTypoTab,
        typoStylesMobile: backTitleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BACK_TITLE_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: backTitleDeskMargin,
        dimensionStylesTab: backTitleTabMargin,
        dimensionStylesMobile: backTitleMobMargin,
    } = generateDimensionStyle({
        controlName: BACK_TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // FLIPBOX FRONT CONTENT
    const {
        typoStylesDesktop: frontContentTypoDesk,
        typoStylesTab: frontContentTypoTab,
        typoStylesMobile: frontContentTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FRONT_CONTENT_TYPOGRAPHY,
        attributes,
    });
    // FLIPBOX FRONT CONTENT
    const {
        typoStylesDesktop: backContentTypoDesk,
        typoStylesTab: backContentTypoTab,
        typoStylesMobile: backContentTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BACK_CONTENT_TYPOGRAPHY,
        attributes,
    });

    // FLIPBOX BACK LINK BUTTON
    const {
        desktopBorderStyle: backLinkBorderDeskStyle,
        tabBorderStyle: backLinkBorderTabStyle,
        mobBorderStyle: backLinkBorderMobStyle,
    } = generateBorderStyle({
        controlName: BACK_LINK_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: backLinkDeskBorderRadius,
        dimensionStylesTab: backLinkTabBorderRadius,
        dimensionStylesMobile: backLinkMobBorderRadius,
    } = generateDimensionStyle({
        controlName: BACK_LINK_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: backLinkDeskPadding,
        dimensionStylesTab: backLinkTabPadding,
        dimensionStylesMobile: backLinkMobPadding,
    } = generateDimensionStyle({
        controlName: BACK_LINK_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        typoStylesDesktop: backLinkTypoDesk,
        typoStylesTab: backLinkTypoTab,
        typoStylesMobile: backLinkTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BACK_LINK_TYPOGRAPHY,
        attributes,
    });

    const {
        backgroundStylesDesktop: backLinkDeskBg,
        backgroundStylesTab: backLinkTabBg,
        backgroundStylesMobile: backLinkMobBg,
    } = generateNormalBGControlStyles({
        controlName: BACK_LINK_BG,
        attributes,
        noMainBGImg: false,
    });
    const {
        backgroundStylesDesktop: backLinkDeskHBg,
        backgroundStylesTab: backLinkTabHBg,
        backgroundStylesMobile: backLinkMobHBg,
    } = generateNormalBGControlStyles({
        controlName: BACK_LINK_HBG,
        attributes,
        noMainBGImg: false,
    });
    /**
     * All Style Combination
     */

    const desktopAllStyle = `

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_face{
        ${flipboxDeskBorderRadius}
        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box-content{
        ${flipboxItemsDeskPadding}
        }



    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_front-content{
        ${frontItemsAlignmentDesktop}
        ${frontItemsVerticalAlignmentDesktop}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_back-content{
        ${backItemsAlignmentDesktop}
        ${backItemsVerticalAlignmentDesktop}
        }

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_inner-item {
        ${flipboxDeskHeight}
        ${flipDuration ? `transition-duration: ${flipDuration}ms;` : ''}
        ${
            flipEasingType === 'custom'
                ? `transition-timing-function: ${flipCustomEasing};`
                : `transition-timing-function: ${flipEasingType};`
        }

        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_inner-item .zolo-flip-box_face {
        ${flipDuration ? `transition-duration: ${flipDuration}ms;` : ''}
                ${
                    flipEasingType === 'custom'
                        ? `transition-timing-function: ${flipCustomEasing};`
                        : `transition-timing-function: ${flipEasingType};`
                }

        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front {
        ${frontItemsBorderDeskStyle}
        ${frontItemsDeskBg}
        }

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back {
        ${backItemsBorderDeskStyle}
        ${backItemsDeskBg}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon {
            ${frontIconDeskBg}
            ${frontIconBorderDeskStyle}
            ${frontIconDeskBorderRadius}
            ${frontIconDeskPadding}
            ${frontIconDeskMargin}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon img {
            ${objectFit ? `object-fit: ${objectFit};` : ''}
            ${frontIconDeskSizeHeight}
            ${frontIconDeskSizeWidth}
            ${frontIconDeskBorderRadius}

        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon img {
            ${backImageObjectFit ? `object-fit: ${backImageObjectFit};` : ''}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon svg {
            ${frontIconDeskSizeHeight}
            ${frontIconDeskSizeWidth}
            ${frontIconColor ? `fill: ${frontIconColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon svg path{
            ${frontIconColor ? `fill: ${frontIconColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_title {
            ${frontTitleColor ? `color: ${frontTitleColor};` : ''}
            ${frontTitleTypoDesk}
            ${frontTitleDeskMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_desc {
            ${frontContentColor ? `color: ${frontContentColor};` : ''}
            ${frontContentTypoDesk}
		}

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon {
            ${backIconDeskBg}
            ${backIconBorderDeskStyle}
            ${backIconDeskBorderRadius}
            ${backIconDeskPadding}
            ${backIconDeskMargin}
            ${backIconDeskSizeHeight}
            ${backIconDeskSizeWidth}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon svg {
            ${backIconDeskSizeHeight}
            ${backIconDeskSizeWidth}
            ${backIconColor ? `fill: ${backIconColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon svg path{
            ${backIconColor ? `fill: ${backIconColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_title {
            ${backTitleColor ? `color: ${backTitleColor};` : ''}
            ${backTitleTypoDesk}
            ${backTitleDeskMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_desc {
            ${backContentColor ? `color: ${backContentColor};` : ''}
            ${backContentTypoDesk}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_link-btn {
            ${backLinkColor ? `color: ${backLinkColor};` : ''}
            ${backLinkDeskBg}
            ${backLinkBorderDeskStyle}
            ${backLinkDeskBorderRadius}
            ${backLinkDeskPadding}
            ${backLinkTypoDesk}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_link-btn:hover {
            ${backLinkHoverColor ? `color: ${backLinkHoverColor};` : ''}
            ${backLinkHoverBorderColor ? `border-color: ${backLinkHoverBorderColor};` : ''}
            ${backLinkDeskHBg}
		}

	`;
    const tabletAllStyle = `



    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_face{
        ${flipboxTabBorderRadius}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box-content{
        ${flipboxItemsTabPadding}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_front-content{
        ${frontItemsAlignmentTab}
        ${frontItemsVerticalAlignmentTab}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_back-content{
        ${backItemsAlignmentTab}
        ${backItemsVerticalAlignmentTab}
        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_inner-item {
        ${flipboxTabHeight}
        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front {
        ${frontItemsBorderTabStyle}
        ${frontItemsTabBg}
        }

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back {
        ${backItemsBorderTabStyle}
        ${backItemsTabBg}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon {
            ${frontIconTabBg}
            ${frontIconBorderTabStyle}
            ${frontIconTabBorderRadius}
            ${frontIconTabPadding}
            ${frontIconTabMargin}
            ${frontIconTabSizeHeight}
            ${frontIconTabSizeWidth}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon svg {
            ${frontIconTabSizeHeight}
            ${frontIconTabSizeWidth}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_title {
            ${frontTitleTypoTab}
            ${frontTitleTabMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_desc {
            ${frontContentTypoTab}
		}

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon {
            ${backIconTabBg}
            ${backIconBorderTabStyle}
            ${backIconTabBorderRadius}
            ${backIconTabPadding}
            ${backIconTabMargin}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon svg {
            ${backIconTabSizeHeight}
            ${backIconTabSizeWidth}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_title {
            ${backTitleTypoTab}
            ${backTitleTabMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_desc {
            ${backContentTypoTab}
		}
         .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_link-btn {
            ${backLinkColor ? `color: ${backLinkColor};` : ''}
            ${backLinkTabBg}
            ${backLinkBorderTabStyle}
            ${backLinkTabBorderRadius}
            ${backLinkTabPadding}
            ${backLinkTypoTab}
        }
	`;
    const mobileAllStyle = `

.${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_face{
        ${flipboxMobBorderRadius}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box-content{
        ${flipboxItemsMobPadding}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_front-content{
        ${frontItemsAlignmentMob}
        ${frontItemsVerticalAlignmentMob}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_back-content{
        ${backItemsAlignmentMob}
        ${backItemsVerticalAlignmentMob}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_inner-item {
        ${flipboxMobHeight}
        ${flipboxMobBorderRadius}
        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front {
        ${frontItemsBorderMobStyle}
        ${frontItemsMobBg}
        }

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back {
        ${backItemsBorderMobStyle}
        ${backItemsMobBg}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon {
            ${frontIconMobBg}
            ${frontIconBorderMobStyle}
            ${frontIconMobBorderRadius}
            ${frontIconMobPadding}
            ${frontIconMobMargin}
            ${frontIconMobSizeHeight}
            ${frontIconMobSizeWidth}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon svg {
            ${frontIconMobSizeHeight}
            ${frontIconMobSizeWidth}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_title {
            ${frontTitleTypoMob}
            ${frontTitleMobMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_desc {
            ${frontContentTypoMob}
		}

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon {
            ${backIconMobBg}
            ${backIconBorderMobStyle}
            ${backIconMobBorderRadius}
            ${backIconMobPadding}
            ${backIconMobMargin}
            ${backIconMobSizeHeight}
            ${backIconMobSizeWidth}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon svg {
            ${backIconMobSizeHeight}
            ${backIconMobSizeWidth}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_title {
            ${backTitleTypoMob}
            ${backTitleMobMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_desc {
            ${backContentTypoMob}
		}

         .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_link-btn {
            ${backLinkMobBg}
            ${backLinkBorderMobStyle}
            ${backLinkMobBorderRadius}
            ${backLinkMobPadding}
            ${backLinkTypoMob}
        }
	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.flipbox.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.flipbox.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.flipbox.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
