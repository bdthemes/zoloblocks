/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
    generateDimensionStyle,
    generateBorderStyle,
} = window.zoloModule;

import { PROGRESS_BAR_SIZE,PROGRESS_ALIGN} from './constants';
import {NUMBER_TYPO,TITLE_TYPO} from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { 
        uniqueId,
        progressSize,
        progressBarColor,
        numberColor,
        titleColor
    } = attributes;

     const {
        desktopRangeStyle: deskProgressWidth,
        tabRangeStyle: tabProgressWidth,
        mobRangeStyle: mobProgressWidth,
    } = generateResRangeStyle({
        controlName: PROGRESS_BAR_SIZE,
        property: 'width',
        attributes,
    });
    const { 
        typoStylesDesktop: DesktopNumberTypo, 
        typoStylesTab: TabNumberTypo, 
        typoStylesMobile: MobNumberTypo 
    } = generateTypographyStyles({ 
        prefixConstant: NUMBER_TYPO, 
        attributes 
    });
    const { 
        typoStylesDesktop: DesktopTittleTypo, 
        typoStylesTab: TabTittleTypo, 
        typoStylesMobile: MobTittleTypo 
    } = generateTypographyStyles({ 
            prefixConstant: TITLE_TYPO, 
            attributes 
        });

        const {
            desktopAlignStyle: progressDeskAlignStyle,
            tabAlignStyle: progressTabAlignStyle,
            mobAlignStyle:progressMobAlignStyle,
        } = generateResAlignmentStyle({
            controlName: PROGRESS_ALIGN,
            property: 'text-align',
            attributes,
        });

    // styles
    // const {
    //     desktopAlignStyle: itemsVDeskAlign,
    //     tabAlignStyle: itemsVTabAlign,
    //     mobAlignStyle: itemsVMobAlign,
    // } = generateResAlignmentStyle({
    //     controlName: ITEMS_ALIGN,
    //     property: 'justify-content',
    //     attributes,
    // });
    // const {
    //     desktopAlignStyle: ratingVDeskAlign,
    //     tabAlignStyle: ratingVTabAlign,
    //     mobAlignStyle: ratingVMobAlign,
    // } = generateResAlignmentStyle({
    //     controlName: ITEMS_ALIGN,
    //     property: 'align-items',
    //     attributes,
    // });

    // const {
    //     desktopAlignStyle: textDeskAlign,
    //     tabAlignStyle: textTabAlign,
    //     mobAlignStyle: textMobAlign,
    // } = generateResAlignmentStyle({
    //     controlName: ITEMS_ALIGN,
    //     property: '',
    //     attributes,
    // });


    // const {
    //     desktopRangeStyle: deskGap,
    //     tabRangeStyle: tabGap,
    //     mobRangeStyle: mobGap,
    // } = generateResRangeStyle({
    //     controlName: TITLE_GAP,
    //     property: 'gap',
    //     attributes,
    // });

    // const {
    //     typoStylesDesktop: titleDeskTypo,
    //     typoStylesTab: titleTabTypo,
    //     typoStylesMobile: titleMobTypo,
    // } = generateTypographyStyles({
    //     prefixConstant: TITLE_TYPO,
    //     attributes,
    // });

    // // Star Rating Style
    // const {
    //     desktopRangeStyle: deskSize,
    //     tabRangeStyle: tabSize,
    //     mobRangeStyle: mobSize,
    // } = generateResRangeStyle({
    //     controlName: STAR_SIZE,
    //     property: 'width',
    //     attributes,
    // });
    // const {
    //     desktopRangeStyle: deskHeight,
    //     tabRangeStyle: tabHeight,
    //     mobRangeStyle: mobHeight,
    // } = generateResRangeStyle({
    //     controlName: STAR_SIZE,
    //     property: 'height',
    //     attributes,
    // });
    // // ICON / IMAGE
    // const {
    //     desktopRangeStyle: deskIconWidth,
    //     tabRangeStyle: tabIconWidth,
    //     mobRangeStyle: mobIconWidth,
    // } = generateResRangeStyle({
    //     controlName: ICON_SIZE,
    //     property: 'width',
    //     attributes,
    // });
    // const {
    //     desktopRangeStyle: deskIconHeight,
    //     tabRangeStyle: tabIconHeight,
    //     mobRangeStyle: mobIconHeight,
    // } = generateResRangeStyle({
    //     controlName: ICON_SIZE,
    //     property: 'height',
    //     attributes,
    // });

    // const {
    //     desktopBorderStyle: iconBorderStylesDesk,
    //     tabBorderStyle: iconBorderStylesTab,
    //     mobBorderStyle: iconBorderStylesMob,
    // } = generateBorderStyle({
    //     controlName: ICON_BORDER,
    //     attributes,
    // });
    // const {
    //     dimensionStylesDesktop: iconrRadiusDesktop,
    //     dimensionStylesTab: iconrRadiusTab,
    //     dimensionStylesMobile: iconrRadiusMobile,
    // } = generateDimensionStyle({
    //     controlName: ICON_BORDER_RADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });
    // const {
    //     dimensionStylesDesktop: iconPaddingDesktop,
    //     dimensionStylesTab: iconPaddingTab,
    //     dimensionStylesMobile: iconPaddingMobile,
    // } = generateDimensionStyle({
    //     controlName: ICON_PADDING,
    //     styleFor: 'padding',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: iconBgDesktop,
    //     backgroundStylesTab: iconBgTab,
    //     backgroundStylesMobile: iconBgMobile,
    // } = generateNormalBGControlStyles({
    //     controlName: ICON_BG,
    //     attributes,
    //     noMainBGImg: true,
    // });
    /**
     
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-progress-pie {
            ${progressDeskAlignStyle}
         }
       .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-progress {
            ${progressSize ? `stroke-width:${progressSize}` : ''};
            ${progressBarColor ? `stroke:${progressBarColor}` : ''};
              
        }
        .${uniqueId}.wp-block-zolo-progress-pie .progress-pie{
           ${deskProgressWidth}
        }   
       .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-number{
            ${DesktopNumberTypo}
            ${numberColor ? `fill:${numberColor }` :''}
       }
       .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-label{
            ${DesktopTittleTypo}
            ${titleColor ? `fill:${titleColor}` : ''}
       }

    `;

    const tabletAllStyle = `
      .${uniqueId}.wp-block-zolo-progress-pie {
            ${progressTabAlignStyle}
         }
      .${uniqueId}.wp-block-zolo-progress-pie .progress-pie{
           ${tabProgressWidth}
        } 
     .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-number{
        ${TabNumberTypo}
        
       }
       .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-label{
            ${TabTittleTypo}   
       } 
       `
    const mobileAllStyle = ` 
     .${uniqueId}.wp-block-zolo-progress-pie {
          ${progressMobAlignStyle}
     }
    .${uniqueId}.wp-block-zolo-progress-pie .progress-pie{
        ${mobProgressWidth}
    }  
    .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-number{
        ${MobNumberTypo}
    }
    .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-label{
        ${MobTittleTypo}
    }

    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.starRating.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.starRating.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.starRating.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
