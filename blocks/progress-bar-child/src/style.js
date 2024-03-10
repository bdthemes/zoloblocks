/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { GlobalStyleHanlder, generateTypographyStyles, generateResRangeStyle, generateNormalBGControlStyles, generateDimensionStyle } =
    window.zoloModule;

import {
    PROGRESS_BG_COLOR,
    PROGRESS_BAR_BG_COLOR,
    PROGRESS_HIGHT,
    PROGRESS_BAR_RADIUS,
    PROGRESS_TITLE_MARGIN,
    PROGRESS_VALUE_MARGIN,
    ITEM_BRADIUS,
} from './constants';
import { TITLE_TYPO, PROGRESS_VALUE } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, progressH, titleColor, progressVColor } = attributes;

    // progress item
    const {
        dimensionStylesDesktop: itemDeskMargin,
        dimensionStylesTab: itemTabMargin,
        dimensionStylesMobile: itemMobMargin,
    } = generateDimensionStyle({
        controlName: ITEM_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // title
    const {
        typoStylesDesktop: typoDeskTitle,
        typoStylesTab: typoTabTitle,
        typoStylesMobile: typoMobTitle,
    } = generateTypographyStyles({ prefixConstant: TITLE_TYPO, attributes });

    //progress
    const {
        desktopRangeStyle: progressDeskHeight,
        tabRangeStyle: progressTabHeight,
        mobRangeStyle: progressMobHeight,
    } = generateResRangeStyle({ controlName: PROGRESS_HIGHT, property: 'height', attributes });

    //progress bar
    const {
        dimensionStylesDesktop: progressBarDeskRadius,
        dimensionStylesTab: progressBarTabRadius,
        dimensionStylesMobile: progressBarMobRadius,
    } = generateDimensionStyle({
        controlName: PROGRESS_BAR_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: progressBarDeskcolor,
        backgroundStylesTab: progressBarTabcolor,
        backgroundStylesMobile: progressBarMobcolor,
    } = generateNormalBGControlStyles({
        controlName: PROGRESS_BAR_BG_COLOR,
        noMainBGImg: true,
        attributes,
    });

    //title margin
    const {
        dimensionStylesDesktop: titleDeskMargin,
        dimensionStylesTab: titleTabMargin,
        dimensionStylesMobile: titleMobMargin,
    } = generateDimensionStyle({
        controlName: PROGRESS_TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //progress value margin
    const {
        dimensionStylesDesktop: valueDeskMargin,
        dimensionStylesTab: valueTabMargin,
        dimensionStylesMobile: valueMobMargin,
    } = generateDimensionStyle({
        controlName: PROGRESS_VALUE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: typoDeskValue,
        typoStylesTab: typoTabValue,
        typoStylesMobile: typoMobValue,
    } = generateTypographyStyles({ prefixConstant: PROGRESS_VALUE, attributes });

    //progress  color
    const {
        backgroundStylesDesktop: progressDeskcolor,
        backgroundStylesTab: progressTabcolor,
        backgroundStylesMobile: progressMobcolor,
    } = generateNormalBGControlStyles({
        controlName: PROGRESS_BG_COLOR,
        noMainBGImg: true,
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
       .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__title{
           ${typoDeskTitle}
           ${titleDeskMargin}
           ${titleColor && `color: ${titleColor}`}
       }

       .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar_counter{
          ${valueDeskMargin}
          ${typoDeskValue}
          ${progressVColor && `color:${progressVColor}`}
       }

      .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress{
        ${progressDeskcolor}
        ${progressDeskHeight}
        ${itemDeskMargin}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress-bar {
         ${progressBarDeskcolor}
         ${progressBarDeskRadius}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress-bar.active {
        ${progressH && `width:${progressH}%`};
     }

    `;

    const tabletAllStyle = `
    .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__title{
        ${typoTabTitle}
        ${titleTabMargin}
    }

    .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress{
        ${progressTabcolor}
        ${progressTabHeight}
        ${itemTabMargin}
    }

    .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar_counter{
        ${valueTabMargin}
        ${typoTabValue}
    }

    .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress-bar {
        ${progressBarTabcolor}
        ${progressBarTabRadius}
    }

    `;

    const mobileAllStyle = `
       .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__title{
           ${typoMobTitle}
           ${titleMobMargin}
       }

       .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress{
         ${progressMobcolor}
         ${progressMobHeight}
         ${itemMobMargin}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar_counter{
        ${valueMobMargin}
        ${typoMobValue}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress-bar {
        ${progressBarMobcolor}
        ${progressBarMobRadius}
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
