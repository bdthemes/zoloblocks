/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateResRangeStyle, generateBackgroundControlStyles } = window.zoloModule;

const Style = (props) => {
    const { attributes } = props;
    const { backgroundVideo, uniqueId } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};

    // settings

    // const {
    //     // main background
    //     backgroundStylesDesktop: bgDeskStyle,
    // } = generateBackgroundControlStyles({
    //     attributes,
    //     controlName: globalConfig?.background?.prefix || 'mainBg',
    // });
    const StyleBackgroundVideo = `
      .parent-${uniqueId}.zolo-block {
        ${backgroundVideo?.falbackImageURL ? `background-image: url(${backgroundVideo.falbackImageURL});` : ''};
        background-size: cover;
      }

      ${
          active
              ? `
                    .parent-${uniqueId}.zolo-block .zolo-bgv-hosted {
                        filter:
                            blur(${blur}px)
                            brightness(${brightness}%)
                            contrast(${contrast}%)
                            saturate(${saturate}%)
                            hue-rotate(${hueRotate}deg)
                    }
             `
              : ''
      }
`;

    const shapeDividerTablet = `

    `;
    const shapeDividerMobile = `

    `;
    return {
        StyleBackgroundVideo,
        shapeDividerTablet,
        shapeDividerMobile,
    };
};
export default Style;
