import { applyFilters } from '@wordpress/hooks';
import {
    //box
    BOX_PADDING,
    BOX_SEPARATOR_WIDTH,
    BOX_MIN_HEIGHT,
    BOX_MAX_WIDTH,
    BOX_BORDER,
    BOX_BORDER_RADIUS,
    BOX_SHADOW,

    // content
    CONTENT_PADDING,

    //header
    HEADER_BG,
    HEADER_PADDING,
    HEADER_MARGIN,
    HEADER_BORDER,
    HEADER_BORDER_RADIUS,
    HEADER_SHADOW,
    HEADER_ICON_SIZE,

    // toggle
    TOGGLE_ICON_BG,
    TOGGLE_ICON_PADDING,
    TOGGLE_ICON_MARGIN,
    TOGGLE_ICON_BORDER,
    TOGGLE_ICON_SHADOW,
    TOGGLE_ICON_BORDER_RADIUS,
    TOGGLE_ICON_H_BG,
    TOGGLE_ICON_H_SHADOW,

    //list
    LIST_MARKER_SIZE,

    // close
    CLOSE_ICON_SIZE,
    CLOSE_ICON_BG,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_SHADOW,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_H_BG,
    CLOSE_ICON_H_SHADOW,

    // open
    OPEN_BTN_BG,
    OPEN_BTN_PADDING,
    OPEN_BTN_MARGIN,
    OPEN_BTN_BORDER,
    OPEN_BTN_SHADOW,
    OPEN_BTN_BORDER_RADIUS,
    OPEN_BTN_H_BG,
    OPEN_BTN_H_SHADOW,
} from './constants';

import { HEADER_TYPOGRAPHY, LIST_TYPOGRAPHY, STICKY_OPEN_BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

const {
    generateTextShadowStyles,
    generateTextStrokeStyles,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
    generateResRangeStyle,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        //box
        boxBgColor,
        boxSeparatorColor,
        //header
        headerColor,
        headerIconColor,
        //toggle
        toggleHoverIconColor,
        toggleHoverIconBorderColor,
        //list
        listColor,
        listHoverColor,
        listActiveColor,
        listMarkerColor,
        // close
        closeIconColor,
        closeIconHoverColor,
        closeIconHoverBorderColor,
        // open
        openBtnIconColor,
        openBtnIconHoverColor,
        openBtnIconHoverBorderColor,
    } = attributes;

    //box
    const {
        dimensionStylesDesktop: boxPaddingDesk,
        dimensionStylesTab: boxPaddingTab,
        dimensionStylesMobile: boxPaddingMob,
    } = generateDimensionStyle({
        controlName: BOX_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        desktopRangeStyle: boxSWidthDesk,
        tabRangeStyle: boxSWidthTab,
        mobRangeStyle: boxSWidthMob,
    } = generateResRangeStyle({
        controlName: BOX_SEPARATOR_WIDTH,
        property: 'border-top-width',
        attributes,
    });
    const {
        desktopRangeStyle: boxMaxWidthDesk,
        tabRangeStyle: boxMaxWidthTab,
        mobRangeStyle: boxMaxWidthMob,
    } = generateResRangeStyle({
        controlName: BOX_MAX_WIDTH,
        property: 'max-width',
        attributes,
    });
    const {
        desktopRangeStyle: boxMinHeightDesk,
        tabRangeStyle: boxMinHeightTab,
        mobRangeStyle: boxMinHeightMob,
    } = generateResRangeStyle({
        controlName: BOX_MIN_HEIGHT,
        property: 'min-height',
        attributes,
    });
    const {
        desktopBorderStyle: boxBorderDesk,
        tabBorderStyle: boxBorderTab,
        mobBorderStyle: boxBorderMob,
    } = generateBorderStyle({
        controlName: BOX_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: boxBorderRadiusDesk,
        dimensionStylesTab: boxBorderRadiusTab,
        dimensionStylesMobile: boxBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BOX_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: boxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BOX_SHADOW,
    });

    //header
    const {
        typoStylesDesktop: headerTypoDesk,
        typoStylesTab: headerTypoTab,
        typoStylesMobile: headerTypoMob,
    } = generateTypographyStyles({
        prefixConstant: HEADER_TYPOGRAPHY,
        attributes,
    });
    const {
        backgroundStylesDesktop: headerBGDesk,
        backgroundStylesTab: headerBGTab,
        backgroundStylesMobile: headerBGMob,
    } = generateNormalBGControlStyles({
        controlName: HEADER_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: headerPaddingDesk,
        dimensionStylesTab: headerPaddingTab,
        dimensionStylesMobile: headerPaddingMob,
    } = generateDimensionStyle({
        controlName: HEADER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: headerMarginDesk,
        dimensionStylesTab: headerMarginTab,
        dimensionStylesMobile: headerMarginMob,
    } = generateDimensionStyle({
        controlName: HEADER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: headerBorderDesk,
        tabBorderStyle: headerBorderTab,
        mobBorderStyle: headerBorderMob,
    } = generateBorderStyle({
        controlName: HEADER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: headerBorderRadiusDesk,
        dimensionStylesTab: headerBorderRadiusTab,
        dimensionStylesMobile: headerBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: HEADER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: headerShadow } = generateBoxShadowStyles({
        attributes,
        controlName: HEADER_SHADOW,
    });

    const {
        desktopRangeStyle: headerIconSizeDesk,
        tabRangeStyle: headerIconSizeTab,
        mobRangeStyle: headerIconSizeMob,
    } = generateResRangeStyle({
        controlName: HEADER_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: headerIconHeightDesk,
        tabRangeStyle: headerIconHeightTab,
        mobRangeStyle: headerIconHeightMob,
    } = generateResRangeStyle({
        controlName: HEADER_ICON_SIZE,
        property: 'height',
        attributes,
    });

    // toggle

    const {
        backgroundStylesDesktop: toggleIconBgDesk,
        backgroundStylesTab: toggleIconBgTab,
        backgroundStylesMobile: toggleIconBgMob,
    } = generateNormalBGControlStyles({
        controlName: TOGGLE_ICON_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: toggleIconPaddingDesk,
        dimensionStylesTab: toggleIconPaddingTab,
        dimensionStylesMobile: toggleIconPaddingMob,
    } = generateDimensionStyle({
        controlName: TOGGLE_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: toggleIconMarginDesk,
        dimensionStylesTab: toggleIconMarginTab,
        dimensionStylesMobile: toggleIconMarginMob,
    } = generateDimensionStyle({
        controlName: TOGGLE_ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: toggleIconBorderDesk,
        tabBorderStyle: toggleIconBorderTab,
        mobBorderStyle: toggleIconBorderMob,
    } = generateBorderStyle({
        controlName: TOGGLE_ICON_BORDER,
        attributes,
    });

    const { boxShadowStyle: toggleIconShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TOGGLE_ICON_SHADOW,
    });

    const {
        dimensionStylesDesktop: toggleIconBorderRadiusDesk,
        dimensionStylesTab: toggleIconBorderRadiusTab,
        dimensionStylesMobile: toggleIconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: TOGGLE_ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: toggleIconHoverBgDesk,
        backgroundStylesTab: toggleIconHoverBgTab,
        backgroundStylesMobile: toggleIconHoverBgMob,
    } = generateNormalBGControlStyles({
        controlName: TOGGLE_ICON_H_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: toggleIconHoverShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TOGGLE_ICON_H_SHADOW,
    });

    //list
    const {
        typoStylesDesktop: listTypoDesk,
        typoStylesTab: listTypoTab,
        typoStylesMobile: listTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LIST_TYPOGRAPHY,
        attributes,
    });
    const {
        desktopRangeStyle: listMarkerSizeDesk,
        tabRangeStyle: listMarkerSizeTab,
        mobRangeStyle: listMarkerSizeMob,
    } = generateResRangeStyle({
        controlName: LIST_MARKER_SIZE,
        property: 'font-size',
        attributes,
    });

    // close
    const {
        desktopRangeStyle: closeIconSizeDesk,
        tabRangeStyle: closeIconSizeTab,
        mobRangeStyle: closeIconSizeMob,
    } = generateResRangeStyle({
        controlName: CLOSE_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: closeIconHeightDesk,
        tabRangeStyle: closeIconHeightTab,
        mobRangeStyle: closeIconHeightMob,
    } = generateResRangeStyle({
        controlName: CLOSE_ICON_SIZE,
        property: 'height',
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
        desktopBorderStyle: closeIconBorderDesk,
        tabBorderStyle: closeIconBorderTab,
        mobBorderStyle: closeIconBorderMob,
    } = generateBorderStyle({
        controlName: CLOSE_ICON_BORDER,
        attributes,
    });

    const { boxShadowStyle: closeIconShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CLOSE_ICON_SHADOW,
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
        backgroundStylesDesktop: closeIconHoverBgDesk,
        backgroundStylesTab: closeIconHoverBgTab,
        backgroundStylesMobile: closeIconHoverBgMob,
    } = generateNormalBGControlStyles({
        controlName: CLOSE_ICON_H_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: closeIconHoverShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CLOSE_ICON_H_SHADOW,
    });

    // open

    const {
        typoStylesDesktop: openBtnTypoDesk,
        typoStylesTab: openBtnTypoTab,
        typoStylesMobile: openBtnTypoMob,
    } = generateTypographyStyles({
        prefixConstant: STICKY_OPEN_BUTTON_TYPOGRAPHY,
        attributes,
    });

    const {
        backgroundStylesDesktop: openBtnBgDesk,
        backgroundStylesTab: openBtnBgTab,
        backgroundStylesMobile: openBtnBgMob,
    } = generateNormalBGControlStyles({
        controlName: OPEN_BTN_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: openBtnPaddingDesk,
        dimensionStylesTab: openBtnPaddingTab,
        dimensionStylesMobile: openBtnPaddingMob,
    } = generateDimensionStyle({
        controlName: OPEN_BTN_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: openBtnMarginDesk,
        dimensionStylesTab: openBtnMarginTab,
        dimensionStylesMobile: openBtnMarginMob,
    } = generateDimensionStyle({
        controlName: OPEN_BTN_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: openBtnBorderDesk,
        tabBorderStyle: openBtnBorderTab,
        mobBorderStyle: openBtnBorderMob,
    } = generateBorderStyle({
        controlName: OPEN_BTN_BORDER,
        attributes,
    });

    const { boxShadowStyle: openBtnShadow } = generateBoxShadowStyles({
        attributes,
        controlName: OPEN_BTN_SHADOW,
    });

    const {
        dimensionStylesDesktop: openBtnBorderRadiusDesk,
        dimensionStylesTab: openBtnBorderRadiusTab,
        dimensionStylesMobile: openBtnBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: OPEN_BTN_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: openBtnHoverBgDesk,
        backgroundStylesTab: openBtnHoverBgTab,
        backgroundStylesMobile: openBtnHoverBgMob,
    } = generateNormalBGControlStyles({
        controlName: OPEN_BTN_H_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: openBtnHoverShadow } = generateBoxShadowStyles({
        attributes,
        controlName: OPEN_BTN_H_SHADOW,
    });

    // content
    const {
        dimensionStylesDesktop: contentPaddingDesk,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block{
      ${boxMaxWidthDesk}
      ${boxMinHeightDesk}
      ${boxBorderDesk}
      ${boxBorderRadiusDesk}
      ${boxShadow}
      ${boxBgColor ? `background-color:${boxBgColor};` : ''}
      ${boxPaddingDesk}
    }
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content{
      ${contentPaddingDesk}
    }
    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-heading{
      ${headerBGDesk}
      ${headerTypoDesk}
      ${headerPaddingDesk}
      ${headerMarginDesk}
      ${headerBorderDesk}
      ${headerBorderRadiusDesk}
      ${headerShadow}
      ${headerColor ? `color:${headerColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-toggle-btn svg{
      ${headerIconSizeDesk}
      ${headerIconHeightDesk}
      ${headerIconColor ? `fill:${headerIconColor};` : ''}
    }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-toggle-btn{
      ${toggleIconBgDesk}
      ${toggleIconPaddingDesk}
      ${toggleIconMarginDesk}
      ${toggleIconBorderDesk}
      ${toggleIconShadow}
      ${toggleIconBorderRadiusDesk}
    }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-toggle-btn:hover{
      ${toggleHoverIconBorderColor ? `border-color:${toggleHoverIconBorderColor};` : ''}
      ${toggleIconHoverBgDesk}
      ${toggleIconHoverShadow}
    }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-toggle-btn:hover svg {
      ${toggleHoverIconColor ? `fill:${toggleHoverIconColor};` : ''}
    }

    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content .zolo-toc-list a{
     ${listTypoDesk}
     ${listColor ? `color:${listColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content .zolo-toc-list a:hover{
      ${listHoverColor ? `color:${listHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content .zolo-toc-list li.active> a{
     ${listActiveColor ? `color:${listActiveColor};` : ''}
    }
   .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content ol li::before{
     ${listMarkerColor ? `color:${listMarkerColor};` : ''}
     ${listMarkerSizeDesk}
   }
   .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content ul li{
     ${listMarkerColor ? `color:${listMarkerColor};` : ''}
   }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close{
        ${closeIconBgDesk}
        ${closeIconPaddingDesk}
        ${closeIconMarginDesk}
        ${closeIconBorderDesk}
        ${closeIconShadow}
        ${closeIconBorderRadiusDesk}
    }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close svg{
        ${closeIconColor ? `color:${closeIconColor};` : ''}
    }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close:hover{
        ${closeIconHoverBorderColor ? `border-color:${closeIconHoverBorderColor};` : ''}
        ${closeIconHoverBgDesk}
        ${closeIconHoverShadow}
    }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close:hover svg{
        ${closeIconHoverColor ? `color:${closeIconHoverColor};` : ''}
    }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-open{
        ${openBtnTypoDesk}
        ${openBtnIconColor ? `color:${openBtnIconColor};` : ''}
        ${openBtnBgDesk}
        ${openBtnPaddingDesk}
        ${openBtnMarginDesk}
        ${openBtnBorderDesk}
        ${openBtnShadow}
        ${openBtnBorderRadiusDesk}
    }

    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-open:hover{
        ${openBtnHoverBgDesk}
        ${openBtnHoverShadow}
         ${openBtnIconHoverColor ? `color:${openBtnIconHoverColor};` : ''}
         ${openBtnIconHoverBorderColor ? `border-color:${openBtnIconHoverBorderColor};` : ''}
    }

  `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-table-of-content.zolo-block{
          ${boxMaxWidthTab}
          ${boxMinHeightTab}
          ${boxBorderTab}
          ${boxBorderRadiusTab}
          ${boxPaddingTab}
        }
        .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content{
          ${contentPaddingTab}
        }
        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-heading{
          ${headerBGTab}
          ${headerTypoTab}
          ${headerPaddingTab}
          ${headerMarginTab}
          ${headerBorderTab}
          ${headerBorderRadiusTab}
        }
        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-heading svg{
          ${headerIconSizeTab}
          ${headerIconHeightTab}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-toggle-btn{
          ${toggleIconBgTab}
          ${toggleIconPaddingTab}
          ${toggleIconMarginTab}
          ${toggleIconBorderTab}
          ${toggleIconBorderRadiusTab}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-toggle-btn:hover{
          ${toggleIconHoverBgTab}
        }

        .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content .zolo-toc-list a{
          ${listTypoTab}
        }
        .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content ol li::before{
          ${listMarkerSizeTab}
        }
        
        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close{
            ${closeIconBgTab}
            ${closeIconPaddingTab}
            ${closeIconMarginTab}
            ${closeIconBorderTab}
            ${closeIconBorderRadiusTab}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close svg{
            ${closeIconSizeTab}
            ${closeIconHeightTab}
        }
        
        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close:hover{
            ${closeIconHoverBgTab}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-open{
            ${openBtnTypoTab}
            ${openBtnBgTab}
            ${openBtnPaddingTab}
            ${openBtnMarginTab}
            ${openBtnBorderTab}
            ${openBtnBorderRadiusTab}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-open:hover{
            ${openBtnHoverBgTab}
        }

    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-table-of-content.zolo-block{
          ${boxMaxWidthMob}
          ${boxMinHeightMob}
          ${boxBorderMob}
          ${boxBorderRadiusMob}
          ${boxPaddingMob}
        }
        .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content{
          ${contentPaddingMob}
        }
        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-heading{
          ${headerBGMob}
          ${headerTypoMob}
          ${headerPaddingMob}
          ${headerMarginMob}
          ${headerBorderMob}
          ${headerBorderRadiusMob}
        }
        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-heading svg{
          ${headerIconSizeMob}
          ${headerIconHeightMob}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-toggle-btn{
          ${toggleIconBgMob}
          ${toggleIconPaddingMob}
          ${toggleIconMarginMob}
          ${toggleIconBorderMob}
          ${toggleIconBorderRadiusMob}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-toggle-btn:hover{
          ${toggleIconHoverBgMob}
        }

        .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content .zolo-toc-list a{
          ${listTypoMob}
        }
        .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content ol li::before{
          ${listMarkerSizeMob}
        }

         .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close{
            ${closeIconBgMob}
            ${closeIconPaddingMob}
            ${closeIconMarginMob}
            ${closeIconBorderMob}
            ${closeIconBorderRadiusMob}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close svg{
            ${closeIconSizeMob}
            ${closeIconHeightMob}
        }
        
        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-close:hover{
            ${closeIconHoverBgMob}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-open{
            ${openBtnTypoMob}
            ${openBtnBgMob}
            ${openBtnPaddingMob}
            ${openBtnMarginMob}
            ${openBtnBorderMob}
            ${openBtnBorderRadiusMob}
        }

        .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-open:hover{
            ${openBtnHoverBgMob}
        }
  `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.tableOfContent.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.tableOfContent.tabAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.tableOfContent.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
