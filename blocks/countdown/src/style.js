/**SEPARATOR_TYP
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateResAlignmentStyle, generateDimensionStyle, generateTypographyStyles, generateResRangeStyle, generateBoxShadowStyles, generateBorderStyle, generateNormalBGControlStyles, generateResCounterStyle, generateGapStyle, GlobalStyleHanlder } = window.zoloModule;

import {
    INNER_ALIGNMENT,
    LABEL_POSITION,
    COUNTLABEL_MARGIN,
    COUNTLABEL_PADDING,
    COUNTLABEL_BORDER,
    COUNT_LABEL_BG,
    COUNT_LABEL_RADIUS,
    COUNT_BOX_GRID,
    COUNT_BOX_RADIUS,
    COUNT_BOX_SIZE,
    GRID_BOX_GAP,
    ALLBOX_PADDING,
    SEPERATR_SPACING,
    SEPARATOR_TOP_SPACING,
    BOX_SHADOW,
    COUNT_BORDER,
    COUNT_BG,
    COUNTNUM_BORDER,
    COUNTNUM_PADDING,
    COUNTBOX_MARGIN,
    COUNT_NUM_BG,
    COUNT_NUM_RADIUS,
} from './constants';
import { DIGIT_TYPO, LABEL_TYPO, SEPARATOR_TYPO } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, digitColor, labelColor, seperaColor, countSeparator, toggleSeparator, layout, separatorItem, overflow } = attributes;

    // styles

    /**
     * All Style Combination
     */

    const {
        desktopAlignStyle: desktopInnerAlign,
        tabAlignStyle: tabInnerAlign,
        mobAlignStyle: mobInnerAlign,
    } = generateResAlignmentStyle({
        controlName: INNER_ALIGNMENT,
        property: 'text-align',
        attributes,
    });
    const {
        desktopAlignStyle: desktopLposition,
        tabAlignStyle: tabLposition,
        mobAlignStyle: mobLposition,
    } = generateResAlignmentStyle({
        controlName: LABEL_POSITION,
        property: 'flex-direction',
        attributes,
    });

    // Grid Columns
    const {
        desktopRangeStyle: deskColumns,
        tabRangeStyle: tabColumns,
        mobRangeStyle: mobColumns,
    } = generateResCounterStyle({
        controlName: COUNT_BOX_GRID,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 4,
            tabRange: 2,
            mobRange: 1,
        },
    });
    const {
        gapStylesDesktop: deskGridGap,
        gapStylesTab: tabGridGap,
        gapStylesMobile: mobGridGap,
    } = generateGapStyle({
        controlName: GRID_BOX_GAP,
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopLabelMargin,
        dimensionStylesTab: TabLabelMargin,
        dimensionStylesMobile: MobLabelMargin,
    } = generateDimensionStyle({
        controlName: COUNTLABEL_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopLabelPadding,
        dimensionStylesTab: TabLabelPadding,
        dimensionStylesMobile: MobLabelPadding,
    } = generateDimensionStyle({
        controlName: COUNTLABEL_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopLabelRadius,
        dimensionStylesTab: TabLabelRadius,
        dimensionStylesMobile: MobLabelRadius,
    } = generateDimensionStyle({
        controlName: COUNT_LABEL_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { desktopBorderStyle: desktopLabelBorder, tabBorderStyle: tabLabelBorder, mobBorderStyle: mobLabelBorder } = generateBorderStyle({ controlName: COUNTLABEL_BORDER, attributes });

    //NUMBER
    const {
        dimensionStylesDesktop: DesktopNumRadius,
        dimensionStylesTab: TabNumRadius,
        dimensionStylesMobile: MobNumRadius,
    } = generateDimensionStyle({
        controlName: COUNT_NUM_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    //change
    const {
        dimensionStylesDesktop: DesktopBoxMargin,
        dimensionStylesTab: TabBoxMargin,
        dimensionStylesMobile: MobBoxMargin,
    } = generateDimensionStyle({
        controlName: COUNTBOX_MARGIN,
        styleFor: 'gap',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopNumPadding,
        dimensionStylesTab: TabNumPadding,
        dimensionStylesMobile: MobNumPadding,
    } = generateDimensionStyle({
        controlName: COUNTNUM_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const { desktopBorderStyle: desktopNumBorder, tabBorderStyle: tabNumBorder, mobBorderStyle: mobNumBorder } = generateBorderStyle({ controlName: COUNTNUM_BORDER, attributes });
    const { backgroundStylesDesktop: DeskNumBg, backgroundStylesTab: TabNumGg, backgroundStylesMobile: MobNumBg } = generateNormalBGControlStyles({ controlName: COUNT_NUM_BG, attributes });

    const { backgroundStylesDesktop: DeskBoxBg, backgroundStylesTab: TabBoxGg, backgroundStylesMobile: MobBoxBg } = generateNormalBGControlStyles({ controlName: COUNT_BG, attributes });

    const {
        dimensionStylesDesktop: DesktopBoxPadding,
        dimensionStylesTab: TabBoxPadding,
        dimensionStylesMobile: MobBoxPadding,
    } = generateDimensionStyle({
        controlName: ALLBOX_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const { desktopBorderStyle: desktopBoxborder, tabBorderStyle: tabBoxborder, mobBorderStyle: mobBoxborder } = generateBorderStyle({ controlName: COUNT_BORDER, attributes });
    const {
        dimensionStylesDesktop: DesktopBoxRadius,
        dimensionStylesTab: TabBoxRadius,
        dimensionStylesMobile: MobBoxRadius,
    } = generateDimensionStyle({
        controlName: COUNT_BOX_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopRangeStyle: DesktopBoxwidth,
        tabRangeStyle: TabBoxwidth,
        mobRangeStyle: MobBoxwidth,
    } = generateResRangeStyle({
        controlName: COUNT_BOX_SIZE,
        property: '--zolo-item-flex-width',
        attributes,
    });

    const {
        desktopRangeStyle: DesktopBoxheight,
        tabRangeStyle: TabBoxheight,
        mobRangeStyle: MobBoxheight,
    } = generateResRangeStyle({
        controlName: COUNT_BOX_SIZE,
        property: '--zolo-item-flex-height',
        attributes,
    });

    const { typoStylesDesktop: DesktopDigitTypo, typoStylesTab: TabDigitTypo, typoStylesMobile: MobDigitTypo } = generateTypographyStyles({ prefixConstant: DIGIT_TYPO, attributes });

    const { typoStylesDesktop: DesktopLabelTypo, typoStylesTab: TabLabelTypo, typoStylesMobile: MobLabelTypo } = generateTypographyStyles({ prefixConstant: LABEL_TYPO, attributes });

    const { backgroundStylesDesktop: DeskLabelBg, backgroundStylesTab: TabLabelGg, backgroundStylesMobile: MobLabelBg } = generateNormalBGControlStyles({ controlName: COUNT_LABEL_BG, attributes });

    const { typoStylesDesktop: DesktopSeparatorTypo, typoStylesTab: TabSepararotTypo, typoStylesMobile: MobSeparatorTypo } = generateTypographyStyles({ prefixConstant: SEPARATOR_TYPO, attributes });

    const {
        desktopRangeStyle: desktopSright,
        tabRangeStyle: tabSright,
        mobRangeStyle: mobSright,
    } = generateResRangeStyle({
        controlName: SEPERATR_SPACING,
        property: 'right',
        attributes,
        noUnits: false,
    });

    const {
        desktopRangeStyle: desktopStop,
        tabRangeStyle: tabStop,
        mobRangeStyle: mobStop,
    } = generateResRangeStyle({
        controlName: SEPARATOR_TOP_SPACING,
        property: 'top',
        attributes,
        noUnits: false,
    });

    const { boxShadowStyle: boxshadowBox } = generateBoxShadowStyles({ controlName: BOX_SHADOW, attributes });

    const desktopAllStyle = `
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-wrap {
            ${layout == 'flex' ? 'display:flex' : `grid-template-columns:repeat(${deskColumns}, 1fr);`};
           ${deskGridGap};
        }
             
        .wp-block-zolo-countdown.${uniqueId} .flex .zolo-countdown-item {
            ${layout == 'flex' && DesktopBoxwidth}
            ${layout == 'flex' && DesktopBoxheight}
         }
         
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-item {
          ${DesktopBoxMargin}
           ${DeskBoxBg}
           ${desktopInnerAlign}
           ${desktopLposition}
           ${DesktopBoxPadding}
           ${boxshadowBox}
           ${desktopBoxborder}
           ${DesktopBoxRadius}
            ${overflow ? `overflow: ${overflow};` : ''}
        }

        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-face{
           ${DesktopNumPadding}
           ${desktopNumBorder}
           ${DesktopDigitTypo}
           ${DeskNumBg}
           ${DesktopNumRadius}
           ${digitColor ? `color:${digitColor}` : ''} 
        }
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-label{
            ${DesktopLabelPadding};
            ${desktopLabelBorder};
            ${DesktopLabelMargin}
            ${DesktopLabelTypo}
            ${DeskLabelBg}
            ${DesktopLabelRadius}
            ${labelColor ? `color:${labelColor}` : ''}
        }
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-item::after{
           ${DesktopSeparatorTypo}
           ${desktopStop}
           ${desktopSright}
           ${seperaColor ? `color:${seperaColor} ` : ''};
           content: "${toggleSeparator ? (countSeparator == 'text' ? separatorItem && separatorItem : countSeparator) : ''}";
        }
        
    `;

    const tabletAllStyle = `
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-wrap {
            ${layout == 'flex' ? 'display:flex' : `grid-template-columns:repeat(${tabColumns}, 1fr);`};
            ${tabGridGap}};
        
        }
        
        .wp-block-zolo-countdown.${uniqueId} .flex .zolo-countdown-item {
            ${layout == 'flex' && TabBoxwidth}
            ${layout == 'flex' && TabBoxheight}
        }

        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-item {
            ${TabBoxMargin}
            ${TabBoxGg}
            ${tabInnerAlign}
            ${tabLposition}
            ${TabBoxPadding}
            ${tabBoxborder}
            ${TabBoxRadius}
       
        }

        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-face{
            ${TabNumPadding}
            ${tabNumBorder}
            ${TabDigitTypo}
            ${TabNumGg}
            ${TabNumRadius}
         
        }
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-label{
            ${TabLabelPadding};
            ${tabLabelBorder};
            ${TabLabelMargin}
            ${TabLabelTypo}
            ${TabLabelGg}
            ${TabLabelRadius}
        }
       .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-item::after{
          ${TabSepararotTypo}
           ${tabStop}
           ${tabSright}
        }
    `;

    const mobileAllStyle = `
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-wrap {
            ${layout == 'flex' ? 'display:flex' : `grid-template-columns:repeat(${mobColumns}, 1fr);`};
           ${mobGridGap};
        }
        
        .wp-block-zolo-countdown.${uniqueId} .flex .zolo-countdown-item {
            ${layout == 'flex' && MobBoxwidth};
            ${layout == 'flex' && MobBoxheight}
        }
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-item {
            ${MobBoxMargin}
            ${MobBoxBg}
            ${mobInnerAlign}
            ${mobLposition}
            ${MobBoxPadding}
            ${mobBoxborder}
            ${MobBoxRadius}
          
        }
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-face{
            ${MobNumPadding}
            ${mobNumBorder}
            ${MobDigitTypo}
            ${MobNumBg}
            ${MobNumRadius}
         
        }
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-label{
            ${MobLabelPadding};
            ${mobLabelBorder};
            ${MobLabelMargin}
            ${MobLabelTypo}
            ${MobLabelBg}
            ${MobLabelRadius}
        }
        .wp-block-zolo-countdown.${uniqueId} .zolo-countdown-item::after{
           ${MobSeparatorTypo}
           ${mobStop}
           ${mobSright}
          
        }
    `;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.countdown.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.countdown.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.countdown.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
