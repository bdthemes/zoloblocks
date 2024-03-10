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
} = window.zoloModule;

import {
    LIST_COLUMN_COUNT,
    LIST_COLUMNS_GAP,
    SINGLE_ITEM_ALIGNMENT,
    //item
    ITEM_ALIGNMENT,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_SHADOW,
    LIST_BG,
    LIST_HOVER_BOX_SHADOW,
    LIST_HOVER_BG,
    //desc
    DSC_MARGIN,
    // icon
    LIST_ICON_SIZE,
    ICON_LIST_BG,
    ICON_LIST_HOVER_BG,
    ICON_LIST_PADDING,
    ICON_LIST_MARGIN,
    ICON_LIST_BORDER,
    ICON_RADIUS,
    ICON_VERTICAL_ALIGN,
    //Hover Icon
    LIST_HOVER_ICON_SIZE,
    ICON_HOVER_LIST_MARGIN,
    ICON_LINKVERTICAL_ALIGN,
} from './constants';

import { DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        dscColor,
        dscHcolor,
        textListColor,
        txtHListColor,
        listIcon,
        listIconHover,
        layout,
        HoverIconColor,
        iconToggle,
        BorderHovColor,
    } = attributes;

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

    //icon
    const {
        desktopAlignStyle: desktopVListAlign,
        tabAlignStyle: tabVListAlign,
        mobAlignStyle: mobVListAlign,
    } = generateResAlignmentStyle({
        controlName: ICON_VERTICAL_ALIGN,
        property: 'align-items',
        attributes,
    });
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
        desktopAlignStyle: desktopHVListAlign,
        tabAlignStyle: tabHVListAlign,
        mobAlignStyle: mobHVListAlign,
    } = generateResAlignmentStyle({
        controlName: ICON_LINKVERTICAL_ALIGN,
        property: 'align-items',
        attributes,
    });
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

    const { boxShadowStyle: boxshadowListitem } = generateBoxShadowStyles({ controlName: LIST_BOX_SHADOW, attributes });
    const {
        backgroundStylesDesktop: DeskListBg,
        backgroundStylesTab: TabListBg,
        backgroundStylesMobile: MobListBg,
    } = generateNormalBGControlStyles({ controlName: LIST_BG, attributes });
    const { boxShadowStyle: boxshadowHListitem } = generateBoxShadowStyles({ controlName: LIST_HOVER_BOX_SHADOW, attributes });
    const {
        backgroundStylesDesktop: DeskHListBg,
        backgroundStylesTab: TabHListBg,
        backgroundStylesMobile: MobHListBg,
    } = generateNormalBGControlStyles({ controlName: LIST_HOVER_BG, attributes });

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

    const {
        desktopAlignStyle: desktopSingleAlign,
        tabAlignStyle: tabSingleAlign,
        mobAlignStyle: mobSingleAlign,
    } = generateResAlignmentStyle({
        controlName: SINGLE_ITEM_ALIGNMENT,
        property: 'align-items',
        attributes,
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
        ${desktopSingleAlign}
      }
	.wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item {
        ${(preset == 'zolo-list-style-1' || preset == 'zolo-list-style-2') && desktopListAlign};
        ${!iconToggle && (preset == 'zolo-list-style-3' || preset == 'zolo-list-style-4') && desktopListAlign};
        ${DesktopListRadius}
        ${desktopListBorder}
        ${DesktopListP}
        ${boxshadowListitem}
        ${DeskListBg}
        ${preset == 'zolo-list-style-4' && desktopHVListAlign}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item:hover{
          ${BorderHovColor && `border-color:${BorderHovColor}`}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item {
        ${preset == 'zolo-list-style-3' && desktopVListAlign}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-icon-and-content-wrap{
        ${preset == 'zolo-list-style-4' && desktopVListAlign}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item:hover {
        ${boxshadowHListitem}
        ${DeskHListBg}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item:hover .zolo-list-title {
        color:${txtHListColor}
     }
     .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item:hover.zolo-list-title {
        color:${txtHListColor}
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${DesktopTextListTypo}
        color:${textListColor}
     }
    
    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${DesktopDsceTypo}
        ${DesktopDsceMargin}
        color:${dscColor}
    }
    .wp-block-zolo-list.${uniqueId} .zolo-list-item:hover .zolo-list-desc{
        color:${dscHcolor}
    }
   
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon svg,.wp-block-zolo-list.${uniqueId} .zolo-list-icon {
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
    .wp-block-zolo-list.${uniqueId} .zolo-list-item:hover .zolo-list-icon{
         ${DeskIconHBg}
         fill:${listIconHover}
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon svg,.wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon {
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
        ${tabSingleAlign}
      }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item {
        ${(preset == 'zolo-list-style-1' || preset == 'zolo-list-style-2') && tabListAlign};
        ${!iconToggle && (preset == 'zolo-list-style-3' || preset == 'zolo-list-style-4') && tabListAlign};
        ${TabListRadius}
        ${tabListBorder}
        ${TabListp}
        ${TabListBg}
        ${preset == 'zolo-list-style-4' && tabHVListAlign}
    }

    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item {
        ${preset == 'zolo-list-style-3' && tabVListAlign}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-icon-and-content-wrap{
        ${preset == 'zolo-list-style-4' && tabVListAlign}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item:hover {
        ${TabHListBg}
    }
    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${TabTextListTypo}
     }

    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${TabDscTypo}
        ${TabDsceMargin}

    }
 
    .wp-block-zolo-list.${uniqueId} .zolo-list-icon svg,.wp-block-zolo-list.${uniqueId} .zolo-list-icon {
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
    .wp-block-zolo-list.${uniqueId} .zolo-list-item:hover .zolo-list-icon {
         ${TabIconHBg} 
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon svg,.wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon {
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
        ${mobSingleAlign}
    }
	.wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item { 
        ${(preset == 'zolo-list-style-1' || preset == 'zolo-list-style-2') && mobListAlign};
        ${!iconToggle && (preset == 'zolo-list-style-3' || preset == 'zolo-list-style-4') && mobListAlign};
        ${MobListRadius}
        ${mobListBorder}
        ${MobListp}
        ${MobListBg}
        ${preset == 'zolo-list-style-4' && mobHVListAlign}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item {
        ${preset == 'zolo-list-style-3' && mobVListAlign}
    }
    .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-icon-and-content-wrap{
        ${preset == 'zolo-list-style-4' && mobVListAlign}
    }
     .wp-block-zolo-list.${uniqueId}.${preset} .zolo-list-item:hover {
        ${MobHListBg}
    }
    .wp-block-zolo-list.${uniqueId} .zolo-list-title{
        ${MobTextListTypo}
    }

    .wp-block-zolo-list.${uniqueId} .zolo-list-desc {
        ${MobDscTypo}
        ${MobDsceMargin}
    }

    .wp-block-zolo-list.${uniqueId} .zolo-list-icon svg,.wp-block-zolo-list.${uniqueId} .zolo-list-icon {
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
    .wp-block-zolo-list.${uniqueId} .zolo-list-item:hover .zolo-list-icon {
         ${MobIconHBg} 
     }
    .wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon svg,.wp-block-zolo-list.${uniqueId} .zolo-list-hover-icon {
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
