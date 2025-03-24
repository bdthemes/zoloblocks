import { applyFilters } from '@wordpress/hooks';
import { META_GAP, META_ALIGN, SEPARATOR_SIZE, SEPARATOR_WIDTH, SEPARATOR_HEIGHT, ICON_SIZE, TEXT_INDENT } from './constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const { generateGapStyle, generateResRangeStyle, generateTypographyStyles, GlobalStyleHanlder, generateResAlignmentStyle } =
    window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const { uniqueId, separatorColor, hoverColor, textColor } = attributes;

    const {
        desktopAlignStyle: metaAlignDesk,
        tabAlignStyle: metaAlignTab,
        mobAlignStyle: metaAlignMob,
    } = generateResAlignmentStyle({
        controlName: META_ALIGN,
        property: 'justify-content',
        attributes,
    });
    const {
        gapStylesDesktop: metaGapDesk,
        gapStylesTab: metaGapTab,
        gapStylesMobile: metaGapMob,
    } = generateGapStyle({
        controlName: META_GAP,
        attributes,
    });

    const {
        desktopRangeStyle: separatorSWidthDesk,
        tabRangeStyle: separatorSWidthTab,
        mobRangeStyle: separatorSWidthMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: separatorSHeightDesk,
        tabRangeStyle: separatorSHeightTab,
        mobRangeStyle: separatorSHeightMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_SIZE,
        property: 'height',
        attributes,
    });
    const {
        desktopRangeStyle: separatorWidthDesk,
        tabRangeStyle: separatorWidthTab,
        mobRangeStyle: separatorWidthMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: separatorHeightDesk,
        tabRangeStyle: separatorHeightTab,
        mobRangeStyle: separatorHeightMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: iconSizeWidthDesk,
        tabRangeStyle: iconSizeWidthTab,
        mobRangeStyle: iconSizeWidthMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: iconSizeHeightDesk,
        tabRangeStyle: iconSizeHeightTab,
        mobRangeStyle: iconSizeHeightMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
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
        desktopRangeStyle: textIndentDesk,
        tabRangeStyle: textIndentTab,
        mobRangeStyle: textIndentMob,
    } = generateResRangeStyle({
        controlName: TEXT_INDENT,
        property: 'gap',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block{
        ${metaGapDesk}
        ${metaAlignDesk}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block.separator-dot .zolo-separator{
        ${separatorSWidthDesk}
        ${separatorSHeightDesk}
        ${separatorColor ? `background-color:${separatorColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block.separator-line .zolo-separator{
        ${separatorWidthDesk}
        ${separatorHeightDesk}
        ${separatorColor ? `background-color:${separatorColor};` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-separator{
        ${separatorColor ? `color:${separatorColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info,
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info a{
        ${textTypoDesk}
        ${textColor ? `color:${textColor};` : ''}
      }

      ${hoverColor ? `.${uniqueId}.wp-block-zolo-post-meta.zolo-block :is(.zolo-meta-info a:hover, .zolo-meta-info.terms:hover){color:${hoverColor};}` : ''}

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info,
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info > a{
        ${textIndentDesk}
      }
    `;

    const tabletAllStyle = `
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block{
        ${metaGapTab}
        ${metaAlignTab}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block.separator-dot .zolo-separator{
        ${separatorSWidthTab}
        ${separatorSHeightTab}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block.separator-line .zolo-separator{
        ${separatorWidthTab}
        ${separatorHeightTab}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info ,
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info a{
        ${textTypoTab}
      }
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info,
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info > a{
        ${textIndentTab}
      }
    `;

    const mobileAllStyle = `
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block{
        ${metaGapMob}
        ${metaAlignMob}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block.separator-dot .zolo-separator{
        ${separatorSWidthMob}
        ${separatorSHeightMob}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block.separator-line .zolo-separator{
        ${separatorWidthMob}
        ${separatorHeightMob}
      }

      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info ,
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info a{
        ${textTypoMob}
      }
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info,
      .${uniqueId}.wp-block-zolo-post-meta.zolo-block .zolo-meta-info > a{
        ${textIndentMob}
      }
  `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.postMeta.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.postMeta.tabAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.postMeta.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
