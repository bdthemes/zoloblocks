/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateResAlignmentStyle, generateTypographyStyles, generateResRangeStyle, generateTextStrokeStyles, GlobalStyleHanlder } =
    window.zoloModule;

import { TEXTPATHTYPO } from './constants/typoPrefixConstant';
import { TEXTPATH_ALIGN, TEXTPATH_SIZE, TEXT_PATH_STROKE, TEXT_WORD_SPACING, PATH_TEXT_SPACING } from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, textPathShow, textpathRotate, textPathColor, textPathHoverColor } = attributes;

    const {
        desktopAlignStyle: textPathDeskAlignStyle,
        tabAlignStyle: textPathTabAlignStyle,
        mobAlignStyle: textPathMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: TEXTPATH_ALIGN,
        property: 'text-align',
        attributes,
    });
    const {
        desktopRangeStyle: DeskTextpathWidth,
        tabRangeStyle: TabTextpathWidth,
        mobRangeStyle: MobTextpathWidth,
    } = generateResRangeStyle({
        controlName: TEXTPATH_SIZE,
        property: '--width',
        attributes,
    });

    const {
        typoStylesDesktop: DesktopTextpathTypo,
        typoStylesTab: TabTextpathTypo,
        typoStylesMobile: MobTextpathTypo,
    } = generateTypographyStyles({
        prefixConstant: TEXTPATHTYPO,
        attributes,
    });
    const {
        desktopTextStrokeStyle: Desktextstroke,
        tabTextStrokeStyle: Tabktextstroke,
        mobTextStrokeStyle: Mobtextstroke,
    } = generateTextStrokeStyles({
        controlName: TEXT_PATH_STROKE,
        attributes,
    });

    const {
        desktopRangeStyle: DeskTextpathSpacing,
        tabRangeStyle: TabTextpathSpacing,
        mobRangeStyle: MobTextpathSpacing,
    } = generateResRangeStyle({
        controlName: TEXT_WORD_SPACING,
        property: 'word-spacing',
        attributes,
    });
    const {
        desktopRangeStyle: DeskTextSpacing,
        tabRangeStyle: TabTextSpacing,
        mobRangeStyle: MobTextSpacing,
    } = generateResRangeStyle({
        controlName: PATH_TEXT_SPACING,
        property: 'letter-spacing',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-text-path  {
          ${textPathDeskAlignStyle}
        }
        .${uniqueId}.wp-block-zolo-text-path tspan {
            ${Desktextstroke}
            ${DeskTextpathSpacing}
            ${DeskTextSpacing}
            ${textPathColor && `fill:${textPathColor}`}
            
        }
        .${uniqueId}.wp-block-zolo-text-path tspan:hover {
            ${textPathHoverColor && `fill:${textPathHoverColor}`}
        }  
        .${uniqueId}.wp-block-zolo-text-path .zolo-path{
            ${textPathShow && 'stroke:#2667ff'};
        }
        .${uniqueId}.wp-block-zolo-text-path svg {
            ${DesktopTextpathTypo}
            ${textpathRotate && `rotate:${textpathRotate}deg`};
            ${DeskTextpathWidth}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-text-path  {
          ${textPathTabAlignStyle}
        }
        .${uniqueId}.wp-block-zolo-text-path tspan {
            ${Tabktextstroke}
            ${TabTextpathSpacing}
            ${TabTextSpacing}
        }
        .${uniqueId}.wp-block-zolo-text-path svg {
            ${TabTextpathTypo}  
            ${TabTextpathWidth}
        }
   
    `;

    const mobileAllStyle = `
         .${uniqueId}.wp-block-zolo-text-path  {
          ${textPathMobAlignStyle}
        }
        .${uniqueId}.wp-block-zolo-text-path tspan {
            ${Mobtextstroke}
            ${MobTextpathSpacing}
            ${MobTextSpacing}
        }
        .${uniqueId}.wp-block-zolo-text-path svg {
            ${MobTextpathTypo}
            ${MobTextpathWidth}
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
