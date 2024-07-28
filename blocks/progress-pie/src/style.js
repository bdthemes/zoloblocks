/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const { generateResAlignmentStyle, generateTypographyStyles, generateResRangeStyle, GlobalStyleHanlder } = window.zoloModule;

import { PROGRESS_BAR_SIZE, PROGRESS_ALIGN, NUMBER_BOTTOM_SPACE } from './constants';
import { NUMBER_TYPO, TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, progressPie } = attributes;
    const {size, numberColor, titleColor, fillSize, round, circleColor} = progressPie;


    const {
        desktopRangeStyle: deskProgressWidth,
        tabRangeStyle: tabProgressWidth,
        mobRangeStyle: mobProgressWidth,
    } = generateResRangeStyle({
        controlName: PROGRESS_BAR_SIZE,
        property: 'max-width',
        attributes,
    });
    const {
        desktopRangeStyle: deskNumberSpacing,
        tabRangeStyle: tabNumberSpacing,
        mobRangeStyle: mobNumberSpacing,
    } = generateResRangeStyle({
        controlName: NUMBER_BOTTOM_SPACE,
        property: 'margin-bottom',
        attributes,
    });
    const {
        typoStylesDesktop: DesktopNumberTypo,
        typoStylesTab: TabNumberTypo,
        typoStylesMobile: MobNumberTypo,
    } = generateTypographyStyles({
        prefixConstant: NUMBER_TYPO,
        attributes,
    });
    const {
        typoStylesDesktop: DesktopTittleTypo,
        typoStylesTab: TabTittleTypo,
        typoStylesMobile: MobTittleTypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        attributes,
    });


    const {
        desktopAlignStyle: progressDeskAlignStyle,
        tabAlignStyle: progressTabAlignStyle,
        mobAlignStyle: progressMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: PROGRESS_ALIGN,
        property: 'text-align',
        attributes,
    });

    /**

     * All Style Combination
     */
    //
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-progress-pie {
            ${progressDeskAlignStyle}
         }
       .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-progress {
            ${size ? `stroke-width:${size / 10};` : 'stroke-width:1'};
            ${round ? 'stroke-linecap:round;' : ''}
        }
         .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-fill{
                ${fillSize ? `stroke-width:${fillSize / 10}` : 'stroke-width:1'}
         }
        .${uniqueId}.wp-block-zolo-progress-pie .progress-pie{
           ${deskProgressWidth}
        }
       .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-number{
            ${DesktopNumberTypo}
            ${numberColor ? `color:${numberColor};` : ''}
            ${deskNumberSpacing}
       }
       .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-label{
            ${DesktopTittleTypo}
            ${titleColor ? `color:${titleColor};` : ''}
       }
        .${uniqueId}.wp-block-zolo-progress-pie  .progress-donut-hole{
                ${circleColor ? `fill:${circleColor};` : 'fill:transparent'}
         }

    `;

    const tabletAllStyle = `
      .${uniqueId}.wp-block-zolo-progress-pie {
            ${progressTabAlignStyle}
         }
      .${uniqueId}.wp-block-zolo-progress-pie .progress-pie{
           ${tabProgressWidth}
        }
     .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-number{
        ${TabNumberTypo}
        ${tabNumberSpacing}

       }
       .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-label{
            ${TabTittleTypo}
       }
       `;
    const mobileAllStyle = `

     .${uniqueId}.wp-block-zolo-progress-pie {
          ${progressMobAlignStyle}
     }
    .${uniqueId}.wp-block-zolo-progress-pie .progress-pie{
        ${mobProgressWidth}
    }
    .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-number{
        ${MobNumberTypo}
        ${mobNumberSpacing}
    }
    .${uniqueId}.wp-block-zolo-progress-pie .progress-pie-label{
        ${MobTittleTypo}
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
