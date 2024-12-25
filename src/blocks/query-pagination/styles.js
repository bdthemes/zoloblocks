import { applyFilters } from '@wordpress/hooks';
import {
    PAGINATION_ALIGN,
    PAGINATION_PADDING,
    PAGINATION_MARGIN,
    PAGINATION_BG,
    PAGINATION_BORDER,
    PAGINATION_BORDER_RADIUS,
    PAGINATION_SHADOW,
    PAGINATION_HOVER_BG,
    PAGINATION_HOVER_SHADOW,
    PAGINATION_ACTIVE_BG,
    PAGINATION_ACTIVE_SHADOW,
    NAV_BG,
    NAV_PADDING,
    NAV_MARGIN,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_SHADOW,
    NAV_HOVER_BG,
    NAV_HOVER_SHADOW,
} from './constants';

import { PAGINATION_TYPOGRAPHY, NAV_TYPOGRAPHY } from './constants/typoPrefixConstant';

const {
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        paginationColor,
        paginationHoverColor,
        paginationHoverBorderColor,
        paginationActiveBorderColor,
        paginationActiveColor,
        navColor,
        navHoverColor,
        navHoverBorderColor,
    } = attributes;

    const {
        desktopAlignStyle: paginationAlignDesk,
        tabAlignStyle: paginationAlignTab,
        mobAlignStyle: paginationAlignMob,
    } = generateResAlignmentStyle({
        controlName: PAGINATION_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        typoStylesDesktop: paginationTypoDesk,
        typoStylesTab: paginationTypoTab,
        typoStylesMobile: paginationTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PAGINATION_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: paginationPaddingDesk,
        dimensionStylesTab: paginationPaddingTab,
        dimensionStylesMobile: paginationPaddingMob,
    } = generateDimensionStyle({
        controlName: PAGINATION_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: paginationMarginDesk,
        dimensionStylesTab: paginationMarginTab,
        dimensionStylesMobile: paginationMarginMob,
    } = generateDimensionStyle({
        controlName: PAGINATION_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: paginationBGDesk,
        backgroundStylesTab: paginationBGTab,
        backgroundStylesMobile: paginationBGMob,
    } = generateNormalBGControlStyles({
        controlName: PAGINATION_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: paginationBorderDesk,
        tabBorderStyle: paginationBorderTab,
        mobBorderStyle: paginationBorderMob,
    } = generateBorderStyle({
        controlName: PAGINATION_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: paginationBorderRadiusDesk,
        dimensionStylesTab: paginationBorderRadiusTab,
        dimensionStylesMobile: paginationBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: PAGINATION_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: paginationBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: PAGINATION_SHADOW,
    });

    const {
        backgroundStylesDesktop: paginationHoverBGDesk,
        backgroundStylesTab: paginationHoverBGTab,
        backgroundStylesMobile: paginationHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: PAGINATION_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: paginationHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: PAGINATION_HOVER_SHADOW,
    });

    const {
        backgroundStylesDesktop: paginationActiveBGDesk,
        backgroundStylesTab: paginationActiveBGTab,
        backgroundStylesMobile: paginationActiveBGMob,
    } = generateNormalBGControlStyles({
        controlName: PAGINATION_ACTIVE_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: paginationActiveBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: PAGINATION_ACTIVE_SHADOW,
    });

    // Nav Style

    const {
        typoStylesDesktop: navTypoDesk,
        typoStylesTab: navTypoTab,
        typoStylesMobile: navTypoMob,
    } = generateTypographyStyles({
        prefixConstant: NAV_TYPOGRAPHY,
        attributes,
    });

    const {
        backgroundStylesDesktop: navBGDesk,
        backgroundStylesTab: navBGTab,
        backgroundStylesMobile: navBGMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: navPaddingDesk,
        dimensionStylesTab: navPaddingTab,
        dimensionStylesMobile: navPaddingMob,
    } = generateDimensionStyle({
        controlName: NAV_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: navMarginDesk,
        dimensionStylesTab: navMarginTab,
        dimensionStylesMobile: navMarginMob,
    } = generateDimensionStyle({
        controlName: NAV_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: navBorderDesk,
        tabBorderStyle: navBorderTab,
        mobBorderStyle: navBorderMob,
    } = generateBorderStyle({
        controlName: NAV_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: navBorderRadiusDesk,
        dimensionStylesTab: navBorderRadiusTab,
        dimensionStylesMobile: navBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: NAV_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: navBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: NAV_SHADOW,
    });

    const {
        backgroundStylesDesktop: navHoverBGDesk,
        backgroundStylesTab: navHoverBGTab,
        backgroundStylesMobile: navHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: navHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: NAV_HOVER_SHADOW,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper{
          ${paginationAlignDesk}
        }
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers {
            ${paginationPaddingDesk}
            ${paginationMarginDesk}
            ${paginationBGDesk}
            ${paginationBorderDesk}
            ${paginationBorderRadiusDesk}
            ${paginationBoxShadow}
            ${paginationTypoDesk}
            ${paginationColor ? `color:${paginationColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers:hover{
            ${paginationHoverBGDesk}
            ${paginationHoverBoxShadow}
            ${paginationHoverColor ? `color:${paginationHoverColor};` : ''}
            ${paginationHoverBorderColor ? `border-color:${paginationHoverBorderColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.current{
            ${paginationActiveBGDesk}
            ${paginationActiveBoxShadow}
            ${paginationActiveColor ? `color:${paginationActiveColor};` : ''}
            ${paginationActiveBorderColor ? `border-color:${paginationActiveBorderColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.next,
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.prev{
            ${navTypoDesk}
            ${navBGDesk}
            ${navPaddingDesk}
            ${navMarginDesk}
            ${navBorderDesk}
            ${navBorderRadiusDesk}
            ${navBoxShadow}
            ${navColor ? `color:${navColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.next:hover,
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.prev:hover{
            ${navHoverBGDesk}
            ${navHoverBoxShadow}
            ${navHoverColor ? `color:${navHoverColor};` : ''}
            ${navHoverBorderColor ? `border-color:${navHoverBorderColor};` : ''}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper{
          ${paginationAlignTab}
        }
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers {
            ${paginationPaddingTab}
            ${paginationMarginTab}
            ${paginationBGTab}
            ${paginationBorderTab}
            ${paginationBorderRadiusTab}
            ${paginationTypoTab}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers:hover{
            ${paginationHoverBGTab}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.current{
            ${paginationActiveBGTab}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.next,
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.prev{
            ${navTypoTab}
            ${navBGTab}
            ${navPaddingTab}
            ${navMarginTab}
            ${navBorderTab}
            ${navBorderRadiusTab}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.next:hover,
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.prev:hover{
            ${navHoverBGTab}
        }

    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper{
          ${paginationAlignMob}
        }
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers {
            ${paginationPaddingMob}
            ${paginationMarginMob}
            ${paginationBGMob}
            ${paginationBorderMob}
            ${paginationBorderRadiusMob}
            ${paginationTypoMob}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers:hover{
            ${paginationHoverBGMob}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.current{
            ${paginationActiveBGMob}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.next,
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.prev{
            ${navTypoMob}
            ${navBGMob}
            ${navPaddingMob}
            ${navMarginMob}
            ${navBorderMob}
            ${navBorderRadiusMob}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.next:hover,
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers.prev:hover{
            ${navHoverBGMob}
        }
  `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.postTitle.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.postTitle.tabAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.postTitle.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
