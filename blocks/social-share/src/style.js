/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

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
    generateResAlignmentStyle,
} = window.zoloModule;

import {
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    COLUMN_COUNT,
    COLUMNS_GAP,
    BUTTON_PADDING,
    BUTTON_SIZE,
    ICON_TEXT_SPACING,
    BLOCK_MARGIN,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    PT_ICON_WIDTH,
    PT_ICON_HEIGHT,
    BLOCK_ALIGNMENT,
} from './constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        socialBgColor,
        socialColor,
        socialText,
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
        desktopRangeStyle: buttonSize,
        tabRangeStyle: buttonSizeTab,
        mobRangeStyle: buttonSizeMob,
    } = generateResRangeStyle({
        controlName: BUTTON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: buttonHSize,
        tabRangeStyle: buttonHSizeTab,
        mobRangeStyle: buttonHSizeMob,
    } = generateResRangeStyle({
        controlName: BUTTON_SIZE,
        property: 'height',
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
        gapStylesDesktop: colGapDeskstyle,
        gapStylesTab: colGapTabStyle,
        gapStylesMobile: colGapMobStyle,
    } = generateGapStyle({
        controlName: COLUMNS_GAP,
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

    // alignment
    const {
        desktopAlignStyle: blockAlignmentDesktop,
        tabAlignStyle: blockAlignmentTab,
        mobAlignStyle: blockAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: BLOCK_ALIGNMENT,
        property: 'justify-content',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-social-share.flex {
        ${blockAlignmentDesktop}
        }
		.${uniqueId}.wp-block-zolo-social-share {
			${blockDeskMargin}
			${colGapDeskstyle}
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
		}
		.${uniqueId}.wp-block-zolo-social-share .zolo-social-item {
			${borderStyles}
			${paddingDesktop}
			${gapDesktop}
			${btnRadiusDesk}
			${normalShadow}

		}
         ${
             preset !== 'preset-1'
                 ? `.${uniqueId}.wp-block-zolo-social-share .zolo-social-item svg{
           ${buttonSize}
            ${buttonHSize}
        }`
                 : ' '
         }
         ${
             preset === 'preset-1' && socialText === 'iconOnly'
                 ? `.${uniqueId}.wp-block-zolo-social-share .zolo-social-item svg{
           ${buttonSize}
            ${buttonHSize}
        }`
                 : ' '
         }
		.${uniqueId}.wp-block-zolo-social-share .zolo-social-text {
			${textTypoDesk}
		}
		${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-share .zolo-social-item{
					color:${socialTextColor};
					background:${socialBgColor};
				} .${uniqueId}.wp-block-zolo-social-share .zolo-social-item svg{
                    fill:${socialTextColor};
                }`
                : ' '
        }
		${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-share .zolo-social-item:hover{
					color:${socialTextHoverColor};
                    border-color:${borderHoverColor};
                    background:${socialBgHoverColor};
                    ${hoverShadow}
				}
                .${uniqueId}.wp-block-zolo-social-share .zolo-social-item:hover svg{
					fill:${socialTextHoverColor};
				}`
                : ' '
        }

        ${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-share.preset-3 .zolo-social-icon{
                    background:${iconBgColor};
                }
                .${uniqueId}.wp-block-zolo-social-share.preset-3 .zolo-social-item svg{
                    fill:${iconColor};
                }
                .${uniqueId}.wp-block-zolo-social-share.preset-3 .zolo-social-item:hover .zolo-social-icon {
                    background:${iconBgHoverColor};
                }
                .${uniqueId}.wp-block-zolo-social-share.preset-3 .zolo-social-item:hover svg{
                    fill:${iconHoverColor};
                }
         `
                : ' '
        }
         ${
             preset === 'preset-3'
                 ? `.${uniqueId}.wp-block-zolo-social-share.preset-3 .zolo-social-item .zolo-social-icon{
                    ${ptIconWidth}
                    ${ptIconHeight}
                }
         `
                 : ' '
         }
  	`;
    const tabletAllStyle = `

		.${uniqueId}.wp-block-zolo-social-share.flex {
        ${blockAlignmentTab}
        }
		.${uniqueId}.wp-block-zolo-social-share{
			${blockTabMargin}
			${colGapTabStyle}
			grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
		}
		.${uniqueId}.wp-block-zolo-social-share .zolo-social-item {
			${borderStylesTab}
			${paddingTab}
			${gapTablet}
			${btnRadiusTab}

		}
        .${uniqueId}.wp-block-zolo-social-share .zolo-social-item svg {
			${buttonSizeTab}
            ${buttonHSizeTab}
        }
		.${uniqueId}.wp-block-zolo-social-share .zolo-social-text {
			${textTypoTab}
		}
        ${
            socialColor === 'custom' && preset === 'preset-3'
                ? `.${uniqueId}.wp-block-zolo-social-share.preset-3 .zolo-social-icon{
                ${ptIconWidthTab}
                ${ptIconHeightTab}
        }`
                : ' '
        }
	`;

    const mobileAllStyle = `
    .${uniqueId}.wp-block-zolo-social-share.flex {
        ${blockAlignmentMob}
        }
		.${uniqueId}.wp-block-zolo-social-share{
			${blockMobMargin}
			${colGapMobStyle}
			grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
		}

		.${uniqueId}.wp-block-zolo-social-share .zolo-social-item {
			${borderStylesMob}
			${paddingMob}
			${gapMobile}
			${btnRadiusMob}
		}

        .${uniqueId}.wp-block-zolo-social-share .zolo-social-item svg{
            ${buttonSizeMob}
            ${buttonHSizeMob}
        }

		.${uniqueId}.wp-block-zolo-social-share .zolo-social-text {
			${textTypoMob}
		}

        ${
            socialColor === 'custom' && preset === 'preset-3'
                ? `.${uniqueId}.wp-block-zolo-social-share.preset-3 .zolo-social-icon{
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
                desktopAllStyle={applyFilters('zolo.socialShare.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.socialShare.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.socialShare.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};
export default Style;
