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
    ICON_TEXT_SPACING,
    BLOCK_MARGIN,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    PT_ICON_WIDTH,
    PT_ICON_HEIGHT,
} from './constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        socialBgColor,
        socialColor,
        socialBgHoverColor,
        socialTextColor,
        socialTextHoverColor,
        borderHoverColor,
        iconColor,
        iconHoverColor,
        iconBgColor,
        iconBgHoverColor,
    } = attributes;

    //  button general settings
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
        defaults: {
            deskRange: 5,
            tabRange: 3,
            mobRange: 2,
        },
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

    // preset 3 icon
    const {
        desktopRangeStyle: ptIconWidth,
        tabRangeStyle: ptIconWidthTab,
        mobRangeStyle: ptIconWidthMob,
    } = generateResRangeStyle({
        controlName: PT_ICON_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: ptIconHeight,
        tabRangeStyle: ptIconHeightTab,
        mobRangeStyle: ptIconHeightMob,
    } = generateResRangeStyle({
        controlName: PT_ICON_HEIGHT,
        property: 'height',
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
			${paddingDesktop}
			${gapDesktop}
			${btnRadiusDesk}
            ${textTypoDesk}

		}
		${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-links .zolo-social-item{
					color:${socialTextColor};
					background:${socialBgColor};
                    ${borderStyles}
                    ${normalShadow}
				} .${uniqueId}.wp-block-zolo-social-links .zolo-social-item svg{
                    fill:${socialTextColor};
                }`
                : ' '
        }
		${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-links .zolo-social-item:hover{
					color:${socialTextHoverColor};
                    border-color:${borderHoverColor};
                    background:${socialBgHoverColor};
                    ${hoverShadow}
				}
                .${uniqueId}.wp-block-zolo-social-links .zolo-social-item:hover svg{
					fill:${socialTextHoverColor};
				}`
                : ' '
        }

        ${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-links.preset-3 .zolo-social-icon{
                    background:${iconBgColor};
                } 
                .${uniqueId}.wp-block-zolo-social-links.preset-3 .zolo-social-item svg{
                    fill:${iconColor};
                }
                .${uniqueId}.wp-block-zolo-social-links.preset-3 .zolo-social-item:hover .zolo-social-icon {
                    background:${iconBgHoverColor};
                }
                .${uniqueId}.wp-block-zolo-social-links.preset-3 .zolo-social-item:hover svg{
                    fill:${iconHoverColor};
                }
         `
                : ' '
        }

        ${
            preset === 'preset-3'
                ? `.${uniqueId}.wp-block-zolo-social-links.preset-3 .zolo-social-icon{
                    ${ptIconWidth}
                    ${ptIconHeight}
                } 
         `
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
            ${textTypoTab}
		}
        ${
            preset === 'preset-3'
                ? `.${uniqueId}.wp-block-zolo-social-links.preset-3 .zolo-social-icon{
                ${ptIconWidthTab}
                ${ptIconHeightTab}
        }`
                : ' '
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
            ${textTypoMob}
		}
        ${
            preset === 'preset-3'
                ? `.${uniqueId}.wp-block-zolo-social-links.preset-3 .zolo-social-icon{
                ${ptIconWidthMob}
                ${ptIconHeightMob}
        }`
                : ' '
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
