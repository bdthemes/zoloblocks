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
} from './constants';

import { PAGINATION_TYPOGRAPHY } from './constants/typoPrefixConstant';

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
    } = attributes;

    const {
        desktopAlignStyle: paginationAlignDesk,
        tabAlignStyle: paginationAlignTab,
        mobAlignStyle: paginationAlignMob,
    } = generateResAlignmentStyle({
        controlName: PAGINATION_ALIGN,
        property: 'text-align',
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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-post-pagination.zolo-block{
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
    `;

    const tabletAllStyle = `

        .${uniqueId}.wp-block-zolo-post-pagination.zolo-block{
          ${paginationAlignTab}
          ${paginationMarginTab}
        }

    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-post-pagination.zolo-block{
          ${paginationAlignMob}
          ${paginationMarginMob}
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
