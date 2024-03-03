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
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_MARGIN,
    LIST_BOX_SHADOW,
    LIST_BG,
    //desc
    DSC_MARGIN,
    //list title
    TEXT_LIST_MARGIN,
    TEXT_LIST_STROKE,
    // icon
    LIST_ICON_SIZE,
    ICON_LIST_BG,
    ICON_LIST_HOVER_BG,
    ICON_LIST_PADDING,
    ICON_LIST_MARGIN,
    ICON_LIST_BORDER,
    ICON_RADIUS,
    //Hover Icon
    LIST_HOVER_ICON_SIZE,
    ICON_HOVER_LIST_MARGIN,
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
        dimensionStylesDesktop: DesktopDsceMargin,
        dimensionStylesTab: TabDsceMargin,
        dimensionStylesMobile: MobDsceMargin,
    } = generateDimensionStyle({
        controlName: DSC_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //Text LIST
    const {
        typoStylesDesktop: DesktopTextListTypo,
        typoStylesTab: TabTextListTypo,
        typoStylesMobile: MobTextListTypo,
    } = generateTypographyStyles({ prefixConstant: TEXT_LIST_TYPOGRAPHY, attributes });

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
        desktopBorderStyle: desktopIconBorder,
        tabBorderStyle: tabIconBorder,
        mobBorderStyle: mobIconBorder,
    } = generateBorderStyle({ controlName: ICON_LIST_BORDER, attributes });
    const {
        dimensionStylesDesktop: DesktopIconRadius,
        dimensionStylesTab: TabIconRadius,
        dimensionStylesMobile: MobIconRadius,
    } = generateDimensionStyle({
        controlName: ICON_RADIUS,
        styleFor: 'border-radius',
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
	.wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item {
        ${desktopListAlign}
        ${DesktopListRadius}
        ${desktopListBorder}
        ${DesktopListP}
        ${DesktopListM}
        ${boxshadowListitem}
        ${DeskListBg}
    }

    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${DesktopTextListTypo}
        ${DesktopTextLeMargin}
        ${DeskTextLStroke}
        color:${textListColor}
     }

    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${DesktopDsceTypo}
        ${DesktopDsceMargin}
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
         ${desktopIconBorder}
         ${DesktopIconRadius}
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
        ${DesktopIconHoMargin}  
    }
  	`;
    const tabletAllStyle = `
     .wp-block-zolo-list.${uniqueId} {
        ${layout == 'flex' ? 'display:flex' : `grid-template-columns: repeat(${listGridTabStyle}, 1fr)`};
        ${listGapTabStyle};
      }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item {
        ${tabListAlign}
        ${TabListRadius}
        ${tabListBorder}
        ${TabListp}
        ${TabListM}
        ${TabListBg}
    }
    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${TabTextListTypo}
        ${TabTextLMargin}
        ${TabTextLStroke}
        
     }

    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${TabDscTypo}
        ${TabDsceMargin}

    }
 
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon svg {
        ${tabIconWidth}
        ${tabIconHeight}   
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon {
         ${TabIconBg}
         ${TabIconPadding}
         ${TabIconMargin}
         ${tabIconBorder}
         ${TabIconRadius}
     
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon:hover {
         ${TabIconHBg} 
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon svg {
        ${tabIconHWidth}
        ${tabIconHHeight}
        
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon {
        ${TabIconHoMargin}
    }
  		
	`;

    const mobileAllStyle = `
      .wp-block-zolo-list.${uniqueId} {
        ${layout == 'flex' ? 'display:flex' : `grid-template-columns: repeat(${listGridMobStyle}, 1fr)`};
        ${listGapMobStyle};
      }
	 .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item { 
        ${mobListAlign}
        ${MobListRadius}
        ${mobListBorder}
        ${MobListp}
        ${MobListM}
        ${MobListBg}
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${MobTextListTypo}
        ${MobTextLMargin}
        ${MobTextLStroke}
     }

    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${MobDscTypo}
        ${MobDsceMargin}
    }

    .wp-block-zolo-list.${uniqueId} .zolo-list-icon svg {
        ${mobIconWidth}
        ${mobIconHeight}
        
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon {
         ${MobIconBg}
         ${MobIconPadding}
         ${MobIconMargin}
         ${mobIconBorder}
         ${MobIconRadius}
     
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon:hover {
         ${MobIconHBg} 
     }
      .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon svg {
        ${mobIconHWidth}
        ${mobIconHHeight}
        
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon {
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
