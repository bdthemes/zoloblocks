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
    LIST_BOX_SIZE,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_MARGIN,
    LIST_BOX_SHADOW,
    LIST_BG,
    //TITLE
    LIST_TITTLE_BORDER,
    LIST_TITLE_RADIUS,
    LIST_TITLE_BG,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_STROKE,
    //desc
    LIST_DSC_BORDER,
    LIST_DSC_RADIUS,
    LIST_DSC_BG,
    DSC_MARGIN,
    DSC_PADDING,
    DSC_STROKE,
    //list TEXT
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
} from './constants';

import { TITLE_TYPOGRAPHY, DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { preset, uniqueId, titleColor, dscColor, textListColor, listIcon, listIconHover } = attributes;
    // title
    const {
        typoStylesDesktop: DesktopTitleTypo,
        typoStylesTab: TabTitleTypo,
        typoStylesMobile: MobTitleTypo,
    } = generateTypographyStyles({ prefixConstant: TITLE_TYPOGRAPHY, attributes });
    const {
        desktopBorderStyle: desktopTitleBorder,
        tabBorderStyle: tabTitleBorder,
        mobBorderStyle: mobTitleBorder,
    } = generateBorderStyle({ controlName: LIST_TITTLE_BORDER, attributes });
    const {
        dimensionStylesDesktop: DesktopTitleRadius,
        dimensionStylesTab: TabTitleRadius,
        dimensionStylesMobile: MobTitleRadius,
    } = generateDimensionStyle({
        controlName: LIST_TITLE_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopTitleMargin,
        dimensionStylesTab: TabTitleMargin,
        dimensionStylesMobile: MobTitleMargin,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopTitlePadding,
        dimensionStylesTab: TabTitlePadding,
        dimensionStylesMobile: MobTitlePadding,
    } = generateDimensionStyle({
        controlName: TITLE_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: DeskTitleBg,
        backgroundStylesTab: TabTitleBg,
        backgroundStylesMobile: MobTitleBg,
    } = generateNormalBGControlStyles({ controlName: LIST_TITLE_BG, attributes });
    const {
        desktopTextStrokeStyle: DeskTitleStroke,
        tabTextStrokeStyle: TabTitleStroke,
        mobTextStrokeStyle: MobTitleStroke,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TITLE_STROKE,
    });
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
        dimensionStylesDesktop: DesktopListWidth,
        dimensionStylesTab: TabListWidth,
        dimensionStylesMobile: MobListWidth,
    } = generateDimensionStyle({
        controlName: LIST_BOX_SIZE,
        styleFor: 'width',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopListHeight,
        dimensionStylesTab: TabListHeight,
        dimensionStylesMobile: MobListHeight,
    } = generateDimensionStyle({
        controlName: LIST_BOX_SIZE,
        styleFor: 'height',
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
	  .wp-block-zolo-list.${uniqueId} .zolo-list {
           grid-template-columns: repeat(${listGridDeskstyle}, 1fr);
           ${listGapDeskstyle};
      }
	.wp-block-zolo-list.${uniqueId} .zolo-list-wrap {
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
    .wp-block-zolo-list.${uniqueId} .list-heading {
        ${DesktopTitleTypo}
        ${desktopTitleBorder}
        ${DesktopTitleRadius}
        ${DesktopTitleMargin}
        ${DesktopTitlePadding}
        ${DeskTitleBg}
        ${DeskTitleStroke}
        color:${titleColor}
    }
    .wp-block-zolo-list.${uniqueId} .descriptipn {
        ${DesktopDsceTypo}
        ${desktoDsceBorder}
        ${DeskDsctBg}
        ${DesktopDscRadius}
        ${DesktopDsceMargin}
        ${DesktopDscPadding}
        ${DeskDscStroke}
        color:${dscColor}
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
  	`;
    const tabletAllStyle = `
     .wp-block-zolo-list.${uniqueId} .zolo-list {
           grid-template-columns: repeat(${listGridTabStyle}, 1fr);
           ${listGapTabStyle};
      }
    .wp-block-zolo-list.${uniqueId} .zolo-list-wrap {
        ${tabListAlign}
        ${TabListWidth}
        ${TabListHeight}
        ${TabListRadius}
        ${tabListBorder}
        ${TabListp}
        ${TabListM}
        ${TabListBg}
    }
    .wp-block-zolo-list.${uniqueId} .list-heading {
        ${TabTitleTypo}
        ${tabTitleBorder}
        ${TabTitleRadius}
        ${TabTitleMargin}
        ${TabTitlePadding}
        ${TabTitleBg}
        ${TabTitleStroke}
    }
    .wp-block-zolo-list.${uniqueId} .descriptipn {
        ${TabDscTypo}
        ${tabDscBorder}
        ${MobDsctBg}
        ${TaDsceRadius}
        ${TabDsceMargin}
        ${TabDscPadding}
        ${TabDscStroke}
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
  		
	`;

    const mobileAllStyle = `
      .wp-block-zolo-list.${uniqueId} .zolo-list {
           grid-template-columns: repeat(${listGridMobStyle}, 1fr);
           ${listGapMobStyle};
      }
	 .wp-block-zolo-list.${uniqueId} .zolo-list-wrap {
        ${mobListAlign}
        ${MobListWidth}
        ${MobListHeight}
        ${MobListRadius}
        ${mobListBorder}
        ${MobListp}
        ${MobListM}
        ${MobListBg}
     }
      .wp-block-zolo-list.${uniqueId} .list-heading {
        ${MobTitleTypo}
        ${mobTitleBorder}
        ${MobTitleRadius}
        ${MobTitleMargin}
        ${MobTitlePadding}
        ${MobTitleBg}
        ${MobTitleStroke}
    }
    .wp-block-zolo-list.${uniqueId} .descriptipn {
        ${MobDscTypo}
        ${mobDscBorder}
        ${TabLDscBg}
        ${MobDscRadius}
        ${MobDsceMargin}
        ${MobDscPadding}
        ${MobDscStroke}
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
