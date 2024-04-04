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

import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN, ICON_SIZE, ICON_BORDER, ICON_BORDER_RADIUS, ICON_PADDING, ICON_BG } from './constants';
import { TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, titleColor, activeStarColor, inactiveStarColor, titlePosition, iconColor } = attributes;

    // styles
    const {
        desktopAlignStyle: itemsVDeskAlign,
        tabAlignStyle: itemsVTabAlign,
        mobAlignStyle: itemsVMobAlign,
    } = generateResAlignmentStyle({
        controlName: ITEMS_ALIGN,
        property: 'justify-content',
        attributes,
    });
    const {
        desktopAlignStyle: ratingVDeskAlign,
        tabAlignStyle: ratingVTabAlign,
        mobAlignStyle: ratingVMobAlign,
    } = generateResAlignmentStyle({
        controlName: ITEMS_ALIGN,
        property: 'align-items',
        attributes,
    });

    const {
        desktopAlignStyle: textDeskAlign,
        tabAlignStyle: textTabAlign,
        mobAlignStyle: textMobAlign,
    } = generateResAlignmentStyle({
        controlName: ITEMS_ALIGN,
        property: '',
        attributes,
    });


    const {
        desktopRangeStyle: deskGap,
        tabRangeStyle: tabGap,
        mobRangeStyle: mobGap,
    } = generateResRangeStyle({
        controlName: TITLE_GAP,
        property: 'gap',
        attributes,
    });

    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        attributes,
    });

    // Star Rating Style
    const {
        desktopRangeStyle: deskSize,
        tabRangeStyle: tabSize,
        mobRangeStyle: mobSize,
    } = generateResRangeStyle({
        controlName: STAR_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: deskHeight,
        tabRangeStyle: tabHeight,
        mobRangeStyle: mobHeight,
    } = generateResRangeStyle({
        controlName: STAR_SIZE,
        property: 'height',
        attributes,
    });
    // ICON / IMAGE
    const {
        desktopRangeStyle: deskIconWidth,
        tabRangeStyle: tabIconWidth,
        mobRangeStyle: mobIconWidth,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: deskIconHeight,
        tabRangeStyle: tabIconHeight,
        mobRangeStyle: mobIconHeight,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: iconBorderStylesDesk,
        tabBorderStyle: iconBorderStylesTab,
        mobBorderStyle: iconBorderStylesMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: iconrRadiusDesktop,
        dimensionStylesTab: iconrRadiusTab,
        dimensionStylesMobile: iconrRadiusMobile,
    } = generateDimensionStyle({
        controlName: ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMobile,
    } = generateDimensionStyle({
        controlName: ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        backgroundStylesDesktop: iconBgDesktop,
        backgroundStylesTab: iconBgTab,
        backgroundStylesMobile: iconBgMobile,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG,
        attributes,
        noMainBGImg: true,
    });
    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVDeskAlign}
            ${textDeskAlign == ':flex-start;' ? 'text-align: left;' : textDeskAlign == ':flex-end;' ? 'text-align: right;' : textDeskAlign == ':center;' ? 'text-align: center;' : ''}
        }
        .${uniqueId} .star-rating-inner {
            ${deskGap}
            ${titlePosition === 'top' || titlePosition === 'bottom' ? ratingVDeskAlign : ''}
        }
        .${uniqueId} .start-rating-title {
            color: ${titleColor};
            ${titleDeskTypo}
        }
        .${uniqueId} .star-rating_inner-icon {
            ${iconBgDesktop}
            ${iconPaddingDesktop}
            ${iconrRadiusDesktop}
            ${iconBorderStylesDesk}
        }
        .${uniqueId} .star-rating_inner-icon .zolo__display-icon svg {
            ${deskIconWidth}
            ${deskIconHeight}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${deskSize}
            ${deskHeight}
            ${activeStarColor ? `fill: ${activeStarColor};` : ''}
        }
        .${uniqueId} .zolo-star-rating svg.empty-star {
            ${inactiveStarColor ? `fill: ${inactiveStarColor};` : ''}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVTabAlign}
            ${textTabAlign == ':flex-start;' ? 'text-align: left;' : textTabAlign == ':flex-end;' ? 'text-align: right;' : textTabAlign == ':center;' ? 'text-align: center;' : ''}
        }
        .${uniqueId} .star-rating-inner {
            ${tabGap}
            ${titlePosition === 'top' || titlePosition === 'bottom' ? ratingVTabAlign : ''}

        }
        .${uniqueId} .start-rating-title {
            ${titleTabTypo}
        }
            .${uniqueId} .star-rating_inner-icon {
            ${iconBgTab}
            ${iconPaddingTab}
            ${iconrRadiusTab}
            ${iconBorderStylesTab}
        }
        .${uniqueId} .star-rating_inner-icon .zolo__display-icon svg {
            ${tabIconWidth}
            ${tabIconHeight}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${tabSize}
            ${tabHeight}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVMobAlign}
            ${textMobAlign == ':flex-start;' ? 'text-align: left;' : textMobAlign == ':flex-end;' ? 'text-align: right;' : textMobAlign == ':center;' ? 'text-align: center;' : ''}
        }
        .${uniqueId} .star-rating-inner {
            ${mobGap}
            ${titlePosition === 'top' || titlePosition === 'bottom' ? ratingVMobAlign : ''}

        }
        .${uniqueId} .start-rating-title {
            ${titleMobTypo}
        }
         .${uniqueId} .star-rating_inner-icon {
            ${iconBgMobile}
            ${iconPaddingMobile}
            ${iconrRadiusMobile}
            ${iconBorderStylesMob}
        }

          .${uniqueId} .star-rating_inner-icon .zolo__display-icon svg {
            ${mobIconWidth}
            ${mobIconHeight}
        }

        .${uniqueId} .zolo-star-rating svg {
            ${mobSize}
            ${mobHeight}
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
