/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResRangeStyle,
    generateBorderStyle,
    generateResCounterStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    generateGapStyle,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
    generateResAlignmentStyle,
    generateTextStrokeStyles,
} = window.zoloModule;

import {
    LIST_COLUMN_COUNT,
    LIST_COLUMNS_GAP,
    //item
    ITEM_ALIGNMENT,
    LIST_BOX_WIDTH,
    LIST_BOX_HEIGHT,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_MARGIN,
    LIST_BOX_SHADOW,
    LIST_BG,
    //desc
    LIST_DSC_BORDER,
    LIST_DSC_RADIUS,
    LIST_DSC_BG,
    DSC_MARGIN,
    DSC_PADDING,
    DSC_STROKE,
    //list title
    TEXT_LIST_BG,
    TEXT_LIST_BORDER,
    TEXT_LIST_RADIUS,
    TEXT_LIST_MARGIN,
    TEXT_LIST_PADDING,
    TEXT_LIST_STROKE,
    // icon
    LIST_ICON_SIZE,
    ICON_LIST_BG,
    ICON_LIST_HOVER_BG,
    ICON_LIST_PADDING,
    ICON_LIST_MARGIN,
    //Hover Icon
    LIST_HOVER_ICON_SIZE,
    ICON_HOVER_LIST_PADDING,
    ICON_HOVER_LIST_MARGIN,
    ICON_HOVER_LIST_BG,
} from './constants';

import { DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { preset, uniqueId, dscColor, textListColor, listIcon, listIconHover, layout, HoverIconColor } = attributes;

    //desc
    const {
        typoStylesDesktop: DesktopDsceTypo,
        typoStylesTab: TabDscTypo,
        typoStylesMobile: MobDscTypo,
    } = generateTypographyStyles({ prefixConstant: DSC_TYPOGRAPHY, attributes });
    const {
        desktopBorderStyle: desktoDsceBorder,
        tabBorderStyle: tabDscBorder,
        mobBorderStyle: mobDscBorder,
    } = generateBorderStyle({ controlName: LIST_DSC_BORDER, attributes });

    const {
        backgroundStylesDesktop: DeskDsctBg,
        backgroundStylesTab: TabLDscBg,
        backgroundStylesMobile: MobDsctBg,
    } = generateNormalBGControlStyles({ controlName: LIST_DSC_BG, attributes });
    const {
        dimensionStylesDesktop: DesktopDscRadius,
        dimensionStylesTab: TaDsceRadius,
        dimensionStylesMobile: MobDscRadius,
    } = generateDimensionStyle({
        controlName: LIST_DSC_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopDsceMargin,
        dimensionStylesTab: TabDsceMargin,
        dimensionStylesMobile: MobDsceMargin,
    } = generateDimensionStyle({
        controlName: DSC_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopDscPadding,
        dimensionStylesTab: TabDscPadding,
        dimensionStylesMobile: MobDscPadding,
    } = generateDimensionStyle({
        controlName: DSC_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        desktopTextStrokeStyle: DeskDscStroke,
        tabTextStrokeStyle: TabDscStroke,
        mobTextStrokeStyle: MobDscStroke,
    } = generateTextStrokeStyles({
        attributes,
        controlName: DSC_STROKE,
    });

    //Text LIST
    const {
        typoStylesDesktop: DesktopTextListTypo,
        typoStylesTab: TabTextListTypo,
        typoStylesMobile: MobTextListTypo,
    } = generateTypographyStyles({ prefixConstant: TEXT_LIST_TYPOGRAPHY, attributes });
    const {
        desktopBorderStyle: desktoTextLBorder,
        tabBorderStyle: tabTextLBorder,
        mobBorderStyle: mobTextLBorder,
    } = generateBorderStyle({ controlName: TEXT_LIST_BORDER, attributes });

    const {
        backgroundStylesDesktop: DeskTextLBg,
        backgroundStylesTab: TabTextLBg,
        backgroundStylesMobile: MobTextLtBg,
    } = generateNormalBGControlStyles({ controlName: TEXT_LIST_BG, attributes });
    const {
        dimensionStylesDesktop: DesktopTextLRadius,
        dimensionStylesTab: TaDTextLRadius,
        dimensionStylesMobile: MobTextLRadius,
    } = generateDimensionStyle({
        controlName: TEXT_LIST_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopTextLPadding,
        dimensionStylesTab: TabTextLPadding,
        dimensionStylesMobile: MobTextLPadding,
    } = generateDimensionStyle({
        controlName: TEXT_LIST_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopTextLeMargin,
        dimensionStylesTab: TabTextLMargin,
        dimensionStylesMobile: MobTextLMargin,
    } = generateDimensionStyle({
        controlName: TEXT_LIST_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        desktopTextStrokeStyle: DeskTextLStroke,
        tabTextStrokeStyle: TabTextLStroke,
        mobTextStrokeStyle: MobTextLStroke,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TEXT_LIST_STROKE,
    });
    //icon
    const {
        desktopRangeStyle: desktopIconWidth,
        tabRangeStyle: tabIconWidth,
        mobRangeStyle: mobIconWidth,
    } = generateResRangeStyle({
        controlName: LIST_ICON_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: desktopIconHeight,
        tabRangeStyle: tabIconHeight,
        mobRangeStyle: mobIconHeight,
    } = generateResRangeStyle({
        controlName: LIST_ICON_SIZE,
        property: 'height',
        attributes,
    });
    const {
        backgroundStylesDesktop: DeskIconBg,
        backgroundStylesTab: TabIconBg,
        backgroundStylesMobile: MobIconBg,
    } = generateNormalBGControlStyles({ controlName: ICON_LIST_BG, attributes });
    const {
        backgroundStylesDesktop: DeskIconHBg,
        backgroundStylesTab: TabIconHBg,
        backgroundStylesMobile: MobIconHBg,
    } = generateNormalBGControlStyles({ controlName: ICON_LIST_HOVER_BG, attributes });
    const {
        dimensionStylesDesktop: DesktopIconPadding,
        dimensionStylesTab: TabIconPadding,
        dimensionStylesMobile: MobIconPadding,
    } = generateDimensionStyle({
        controlName: ICON_LIST_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopIconMargin,
        dimensionStylesTab: TabIconMargin,
        dimensionStylesMobile: MobIconMargin,
    } = generateDimensionStyle({
        controlName: ICON_LIST_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //Hover icon
    const {
        desktopRangeStyle: desktopIconHWidth,
        tabRangeStyle: tabIconHWidth,
        mobRangeStyle: mobIconHWidth,
    } = generateResRangeStyle({
        controlName: LIST_HOVER_ICON_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: desktopIconHHeight,
        tabRangeStyle: tabIconHHeight,
        mobRangeStyle: mobIconHHeight,
    } = generateResRangeStyle({
        controlName: LIST_HOVER_ICON_SIZE,
        property: 'height',
        attributes,
    });
    const {
        backgroundStylesDesktop: DeskIconHoverBg,
        backgroundStylesTab: TabIconHoverBg,
        backgroundStylesMobile: MobIconHoverBg,
    } = generateNormalBGControlStyles({ controlName: ICON_HOVER_LIST_BG, attributes });
    const {
        dimensionStylesDesktop: DesktopIconHoPadding,
        dimensionStylesTab: TabIconHoPadding,
        dimensionStylesMobile: MobIconHoPadding,
    } = generateDimensionStyle({
        controlName: ICON_HOVER_LIST_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopIconHoMargin,
        dimensionStylesTab: TabIconHoMargin,
        dimensionStylesMobile: MobIconHoMargin,
    } = generateDimensionStyle({
        controlName: ICON_HOVER_LIST_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //item
    const {
        desktopAlignStyle: desktopListAlign,
        tabAlignStyle: tabListAlign,
        mobAlignStyle: mobListAlign,
    } = generateResAlignmentStyle({
        controlName: ITEM_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    const {
        desktopRangeStyle: DesktopListWidth,
        tabRangeStyle: TabListWidth,
        mobRangeStyle: MobListWidth,
    } = generateResRangeStyle({
        controlName: LIST_BOX_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: DesktopListHeight,
        tabRangeStyle: TabListHeight,
        mobRangeStyle: MobListHeight,
    } = generateResRangeStyle({
        controlName: LIST_BOX_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopListRadius,
        dimensionStylesTab: TabListRadius,
        dimensionStylesMobile: MobListRadius,
    } = generateDimensionStyle({
        controlName: LIST_BOX_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopBorderStyle: desktopListBorder,
        tabBorderStyle: tabListBorder,
        mobBorderStyle: mobListBorder,
    } = generateBorderStyle({ controlName: LIST_BORDER, attributes });
    const {
        dimensionStylesDesktop: DesktopListP,
        dimensionStylesTab: TabListp,
        dimensionStylesMobile: MobListp,
    } = generateDimensionStyle({
        controlName: LIST_ALLBOX_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopListM,
        dimensionStylesTab: TabListM,
        dimensionStylesMobile: MobListM,
    } = generateDimensionStyle({
        controlName: LIST_BOX_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const { boxShadowStyle: boxshadowListitem } = generateBoxShadowStyles({ controlName: LIST_BOX_SHADOW, attributes });
    const {
        backgroundStylesDesktop: DeskListBg,
        backgroundStylesTab: TabListBg,
        backgroundStylesMobile: MobListBg,
    } = generateNormalBGControlStyles({ controlName: LIST_BG, attributes });

    // column count
    const {
        desktopRangeStyle: listGridDeskstyle,
        tabRangeStyle: listGridTabStyle,
        mobRangeStyle: listGridMobStyle,
    } = generateResCounterStyle({
        controlName: LIST_COLUMN_COUNT,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 1,
            tabRange: 1,
            mobRange: 1,
        },
    });

    // column gap
    const {
        gapStylesDesktop: listGapDeskstyle,
        gapStylesTab: listGapTabStyle,
        gapStylesMobile: listGapMobStyle,
    } = generateGapStyle({
        controlName: LIST_COLUMNS_GAP,
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
	  .wp-block-zolo-list.${uniqueId} {
        ${layout == 'flex' ? 'display:flex' : `grid-template-columns: repeat(${listGridDeskstyle}, 1fr)`};
        ${listGapDeskstyle};
      }
	.wp-block-zolo-list.${uniqueId} .zolo-list-item  {
        ${desktopListAlign}
        ${DesktopListWidth}
        ${DesktopListHeight}
        ${DesktopListRadius}
        ${desktopListBorder}
        ${DesktopListP}
        ${DesktopListM}
        ${boxshadowListitem}
        ${DeskListBg}
    }

    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${DesktopTextListTypo}
        ${desktoTextLBorder}
        ${DeskTextLBg}
        ${DesktopTextLRadius}
        ${DesktopTextLPadding}
        ${DesktopTextLeMargin}
        ${DeskTextLStroke}
        color:${textListColor}
     }

    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${DesktopDsceTypo}
        ${desktoDsceBorder}
        ${DeskDsctBg}
        ${DesktopDscRadius}
        ${DesktopDsceMargin}
        ${DesktopDscPadding}
        ${DeskDscStroke}
        color:${dscColor}
    }
   
     .wp-block-zolo-list.${uniqueId} .zolo-list-icon svg {
        ${desktopIconWidth}
        ${desktopIconHeight}
        
     }
     
     .wp-block-zolo-list.${uniqueId} .zolo-list-icon {
         ${DeskIconBg}
         ${DesktopIconPadding}
         ${DesktopIconMargin}
         fill:${listIcon}
     }
       .wp-block-zolo-list.${uniqueId} .zolo-list-icon:hover {
         ${DeskIconHBg}
         fill:${listIconHover}
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon svg {
        ${desktopIconHWidth}
        ${desktopIconHHeight}
        fill:${HoverIconColor}
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon {
        ${DeskIconHoverBg}
        ${DesktopIconHoPadding}
        ${DesktopIconHoMargin}  
    }
  	`;
    const tabletAllStyle = `
     .wp-block-zolo-list.${uniqueId} {
        ${layout == 'flex' ? 'display:flex' : `grid-template-columns: repeat(${listGridTabStyle}, 1fr)`};
        ${listGapTabStyle};
      }
    .wp-block-zolo-list.${uniqueId} .zolo-list-item {
        ${tabListAlign}
        ${TabListWidth}
        ${TabListHeight}
        ${TabListRadius}
        ${tabListBorder}
        ${TabListp}
        ${TabListM}
        ${TabListBg}
    }
    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${TabTextListTypo}
        ${tabTextLBorder}
        ${TabTextLBg}
        ${TaDTextLRadius}
        ${TabTextLPadding}
        ${TabTextLMargin}
        ${TabTextLStroke}
        
     }

    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${TabDscTypo}
        ${tabDscBorder}
        ${MobDsctBg}
        ${TaDsceRadius}
        ${TabDsceMargin}
        ${TabDscPadding}
        ${TabDscStroke}
    }
 
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon svg {
        ${tabIconWidth}
        ${tabIconHeight}   
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon {
         ${TabIconBg}
         ${TabIconPadding}
         ${TabIconMargin}
     
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon:hover {
         ${TabIconHBg} 
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon svg {
        ${tabIconHWidth}
        ${tabIconHHeight}
        
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon {
        ${TabIconHoverBg}
        ${TabIconHoPadding}
        ${TabIconHoMargin}
    }
  		
	`;

    const mobileAllStyle = `
      .wp-block-zolo-list.${uniqueId} {
        ${layout == 'flex' ? 'display:flex' : `grid-template-columns: repeat(${listGridMobStyle}, 1fr)`};
        ${listGapMobStyle};
      }
	 .wp-block-zolo-list.${uniqueId} .zolo-list-item {
        ${mobListAlign}
        ${MobListWidth}
        ${MobListHeight}
        ${MobListRadius}
        ${mobListBorder}
        ${MobListp}
        ${MobListM}
        ${MobListBg}
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${MobTextListTypo}
        ${mobTextLBorder}
        ${MobTextLtBg}
        ${MobTextLRadius}
        ${MobTextLPadding}
        ${MobTextLMargin}
        ${MobTextLStroke}
     }

    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${MobDscTypo}
        ${mobDscBorder}
        ${TabLDscBg}
        ${MobDscRadius}
        ${MobDsceMargin}
        ${MobDscPadding}
        ${MobDscStroke}
    }

    .wp-block-zolo-list.${uniqueId} .zolo-list-icon svg {
        ${mobIconWidth}
        ${mobIconHeight}
        
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon {
         ${MobIconBg}
         ${MobIconPadding}
         ${MobIconMargin}
     
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon:hover {
         ${MobIconHBg} 
     }
      .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon svg {
        ${mobIconHWidth}
        ${mobIconHHeight}
        
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon {
        ${MobIconHoverBg}
        ${MobIconHoPadding}
        ${MobIconHoMargin}
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
};
export default Style;
