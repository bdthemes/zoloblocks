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
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    COLUMN_COUNT,
    COLUMNS_GAP,
    ROW_GAP,
    BUTTON_PADDING,
    BUTTON_SIZE,
    ICON_TEXT_SPACING,
    BLOCK_MARGIN,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
} from './constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, socialBgColor, socialColor, socialBgHoverColor, socialTextColor, socialTextHoverColor, borderHoverColor } =
        attributes;

    //  button general settings
    const {
        desktopRangeStyle: buttonSize,
        tabRangeStyle: buttonSizeTab,
        mobRangeStyle: buttonSizeMob,
    } = generateResRangeStyle({
        controlName: BUTTON_SIZE,
        property: 'font-size',
        attributes,
    });

    const {
        desktopBorderStyle: borderStyles,
        tabBorderStyle: borderStylesTab,
        mobBorderStyle: borderStylesMob,
    } = generateBorderStyle({
        controlName: BUTTON_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: btnRadiusDesk,
        dimensionStylesTab: btnRadiusTab,
        dimensionStylesMobile: btnRadiusMob,
    } = generateDimensionStyle({
        controlName: BTN_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: normalShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BTN_SHADOW,
    });

    const { boxShadowStyle: hoverShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BTN_HOVER_SHADOW,
    });

    const {
        typoStylesDesktop: textTypoDesk,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPOGRAPHY,
        defaultFontSize: 14,
        attributes,
    });

    const {
        dimensionStylesDesktop: paddingDesktop,
        dimensionStylesTab: paddingTab,
        dimensionStylesMobile: paddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Spacing between icon and text
    const {
        desktopRangeStyle: gapDesktop,
        tabRangeStyle: gapTablet,
        mobRangeStyle: gapMobile,
    } = generateResRangeStyle({
        controlName: ICON_TEXT_SPACING,
        property: 'gap',
        attributes,
    });

    // column count
    const {
        desktopRangeStyle: columnCountDeskstyle,
        tabRangeStyle: columnCountTabStyle,
        mobRangeStyle: columnCountMobStyle,
    } = generateResCounterStyle({
        controlName: COLUMN_COUNT,
        attributes,
        noProperty: true,
    });

    // column gap
    const {
        desktopRangeStyle: colGapDeskstyle,
        tabRangeStyle: colGapTabStyle,
        mobRangeStyle: colGapMobStyle,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'column-gap',
        attributes,
    });

    // row gap
    const {
        desktopRangeStyle: rowGapDeskstyle,
        tabRangeStyle: rowGapTabStyle,
        mobRangeStyle: rowGapMobStyle,
    } = generateResRangeStyle({
        controlName: ROW_GAP,
        property: 'row-gap',
        attributes,
    });

    // block margin
    const {
        dimensionStylesDesktop: blockDeskMargin,
        dimensionStylesTab: blockTabMargin,
        dimensionStylesMobile: blockMobMargin,
    } = generateDimensionStyle({
        controlName: BLOCK_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-social-links {
			${blockDeskMargin}
			${colGapDeskstyle}
			${rowGapDeskstyle}
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
		}
		.${uniqueId}.wp-block-zolo-social-links .zolo-social-item {
			${borderStyles}
			${paddingDesktop}
			${gapDesktop}
			${btnRadiusDesk}
			${normalShadow}
			${buttonSize}
		}
		.${uniqueId}.wp-block-zolo-social-links .zolo-social-item:hover {
			border-color:${borderHoverColor};
			${hoverShadow}
		}
		.${uniqueId}.wp-block-zolo-social-links .zolo-social-item:before {
			background-color:${socialBgHoverColor};
		}
		.${uniqueId}.wp-block-zolo-social-links .zolo-social-text {
			${textTypoDesk}
		}
		${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-links .zolo-social-item{
					color:${socialTextColor};
					background:${socialBgColor};
				}`
                : ' '
        }
		${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-links .zolo-social-item:hover{
					color:${socialTextHoverColor};
				}`
                : ' '
        }
  	`;
    const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-social-links{
			${blockTabMargin}
			${colGapTabStyle}
			${rowGapTabStyle}
			grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
		}
		.${uniqueId}.wp-block-zolo-social-links .zolo-social-item {
			${borderStylesTab}
			${paddingTab}
			${gapTablet}
			${btnRadiusTab}
			${buttonSizeTab}
		}
		.${uniqueId}.wp-block-zolo-social-links .zolo-social-text {
			${textTypoTab}
		}
	`;

    const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-social-links{
			${blockMobMargin}
			${colGapMobStyle}
			${rowGapMobStyle}
			grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
		}
		.${uniqueId}.wp-block-zolo-social-links .zolo-social-item {
			${borderStylesMob}
			${paddingMob}
			${gapMobile}
			${btnRadiusMob}
			${buttonSizeMob}
		}
		.${uniqueId}.wp-block-zolo-social-links .zolo-social-text {
			${textTypoMob}
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
