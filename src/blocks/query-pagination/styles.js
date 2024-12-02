import { applyFilters } from '@wordpress/hooks';
import {
    TITLE_ALIGN,
    TITLE_PADDING,
    TITLE_MARGIN,
    TITLE_BG,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_SHADOW,
    TITLE_HOVER_BG,
    TITLE_HOVER_BORDER,
    TITLE_HOVER_BRADIUS,
    TITLE_HOVER_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

const {
    generateTextShadowStyles,
    generateTextStrokeStyles,
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
    const { uniqueId, paginationColor, titleHoverColor, isLink } = attributes;

    const {
        desktopAlignStyle: titleAlignDesk,
        tabAlignStyle: titleAlignTab,
        mobAlignStyle: titleAlignMob,
    } = generateResAlignmentStyle({
        controlName: TITLE_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        typoStylesDesktop: titleTypoDesk,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: titlePaddingDesk,
        dimensionStylesTab: titlePaddingTab,
        dimensionStylesMobile: titlePaddingMob,
    } = generateDimensionStyle({
        controlName: TITLE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: titleMarginDesk,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMob,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: titleBGDesk,
        backgroundStylesTab: titleBGTab,
        backgroundStylesMobile: titleBGMob,
    } = generateNormalBGControlStyles({
        controlName: TITLE_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: titleBorderDesk,
        tabBorderStyle: titleBorderTab,
        mobBorderStyle: titleBorderMob,
    } = generateBorderStyle({
        controlName: TITLE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: titleBorderRadiusDesk,
        dimensionStylesTab: titleBorderRadiusTab,
        dimensionStylesMobile: titleBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: TITLE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: titleBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TITLE_SHADOW,
    });

    const {
        backgroundStylesDesktop: titleHoverBGDesk,
        backgroundStylesTab: titleHoverBGTab,
        backgroundStylesMobile: titleHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: TITLE_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: titleHoverBorderDesk,
        tabBorderStyle: titleHoverBorderTab,
        mobBorderStyle: titleHoverBorderMob,
    } = generateBorderStyle({
        controlName: TITLE_HOVER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: titleHoverBRadiusDesk,
        dimensionStylesTab: titleHoverBRadiusTab,
        dimensionStylesMobile: titleHoverBRadiusMob,
    } = generateDimensionStyle({
        controlName: TITLE_HOVER_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: titleHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TITLE_HOVER_SHADOW,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-post-title.zolo-block{
          ${titleAlignDesk}
        }
        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers {
            ${titlePaddingDesk}
            ${titleMarginDesk}
            ${titleBGDesk}
            ${titleBorderDesk}
            ${titleBorderRadiusDesk}
            ${titleBoxShadow}
            ${titleTypoDesk}
            ${paginationColor ? `color:${paginationColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-query-pagination .zolo-query-pagination-wrapper .page-numbers{
            ${titleHoverBGDesk}
            ${titleHoverBorderDesk}
            ${titleHoverBRadiusDesk}
            ${titleHoverBoxShadow}
            ${titleHoverColor ? `color:${titleHoverColor};` : ''}
        }
    `;

    const tabletAllStyle = `

        .${uniqueId}.wp-block-zolo-post-title.zolo-block{
          ${titleAlignTab}
          ${titleMarginTab}
        }

    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-post-title.zolo-block{
          ${titleAlignMob}
          ${titleMarginMob}
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
