/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateResAlignmentStyle, generateTypographyStyles, generateResRangeStyle, GlobalStyleHanlder } = window.zoloModule;

import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';
import { TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, preset, progressH } = attributes;

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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
      .${uniqueId}.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress-bar {
       width:${progressH}%;
      }
      ${
          preset == 'style-5' &&
          `.${uniqueId}.wp-block-zolo-progress-bar-child .zolo-progress-bar__progress .zolo-progress-bar__progress-bar {
            
        height:${progressH}%;
      }`
      }
    `;

    const tabletAllStyle = `
   
    `;

    const mobileAllStyle = `
  
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
