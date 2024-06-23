/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateDimensionStyle,
    generateBorderStyle,
    generateResAlignmentStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import { FIELD_TYPO, LABEL_TYPO } from './constants/typoPrefixConstant';
import {
  
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, } = attributes;

    // label
    // const {
    //     desktopBorderStyle: labelBorderStyles,
    //     tabBorderStyle: labelBorderStylesTab,
    //     mobBorderStyle: labelBorderStylesMob,
    // } = generateBorderStyle({
    //     controlName: LABEL_BORDER,
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: labelBRDesktop,
    //     dimensionStylesTab: labelBRTab,
    //     dimensionStylesMobile: labelBRMob,
    // } = generateDimensionStyle({
    //     controlName: LABEL_BRADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: labelPaddingDesk,
    //     dimensionStylesTab: labelPaddingTab,
    //     dimensionStylesMobile: labelPaddingMob,
    // } = generateDimensionStyle({
    //     controlName: LABEL_PADDING,
    //     styleFor: 'padding',
    //     attributes,
    // });

    // const { backgroundStylesDesktop: labelBGStyle } = generateNormalBGControlStyles({
    //     controlName: LABEL_BG,
    //     attributes,
    //     noMainBGImg: true,
    // });

    // const {
    //     dimensionStylesDesktop: labelMarginDesk,
    //     dimensionStylesTab: labelMarginTab,
    //     dimensionStylesMobile: labelMarginMob,
    // } = generateDimensionStyle({
    //     controlName: LABEL_MARGIN,
    //     styleFor: 'margin',
    //     attributes,
    // });

    // const {
    //     typoStylesDesktop: labelTypoDesk,
    //     typoStylesTab: labelTypoTab,
    //     typoStylesMobile: labelTypoMob,
    // } = generateTypographyStyles({
    //     prefixConstant: LABEL_TYPO,
    //     defaultFontSize: '',
    //     attributes,
    // });

    // Field
    // const {
    //     typoStylesDesktop: fieldTypoDesk,
    //     typoStylesTab: fieldTypoTab,
    //     typoStylesMobile: fieldTypoMob,
    // } = generateTypographyStyles({
    //     prefixConstant: FIELD_TYPO,
    //     defaultFontSize: '',
    //     attributes,
    // });

    // const {
    //     desktopBorderStyle: fieldBorderStyles,
    //     tabBorderStyle: fieldBorderStylesTab,
    //     mobBorderStyle: fieldBorderStylesMob,
    // } = generateBorderStyle({
    //     controlName: FIELD_BORDER,
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: fieldBRDesktop,
    //     dimensionStylesTab: fieldBRTab,
    //     dimensionStylesMobile: fieldBRMob,
    // } = generateDimensionStyle({
    //     controlName: FIELD_BRADIUS,
    //     styleFor: 'border-radius',
    //     attributes,
    // });

    // const {
    //     dimensionStylesDesktop: fieldPaddingDesktop,
    //     dimensionStylesTab: fieldPaddingTab,
    //     dimensionStylesMobile: fieldPaddingMob,
    // } = generateDimensionStyle({
    //     controlName: FIELD_PADDING,
    //     styleFor: 'padding',
    //     attributes,
    // });

    // const {
    //     backgroundStylesDesktop: fieldBGStyle,
    //     backgroundStylesTab: fieldTabBGStyle,
    //     backgroundStylesMobile: fieldMobBGStyle,
    // } = generateNormalBGControlStyles({
    //     controlName: FIELD_BG,
    //     attributes,
    //     noMainBGImg: false,
    // });

    // Icon
    // const {
    //     desktopRangeStyle: iconSize,
    //     tabRangeStyle: iconTabSize,
    //     mobRangeStyle: iconMobSize,
    // } = generateResRangeStyle({
    //     controlName: ICON_SIZE,
    //     property: 'font-size',
    //     attributes,
    // });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
      
  
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
                desktopAllStyle={applyFilters('zolo.textarea.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.textarea.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.textarea.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
