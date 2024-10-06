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
