//WordPress dependencies
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

//external dependencies
import classnames from 'classnames';

//internal dependencies
// import { handleUniqueId, softMinifyCssStrings } from '../../../src/helpers/helper';
// import { generateControls } from '../../../src/helpers/generateControls';


import Inspector from './inspector';

import controls from "./controls.json"

//block constants
import {
    HEADING_ALIGNMENT,
    TITLE_MARGIN,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

//generate style
// import { generateBackgroundControlStyles } from '../../../src/helpers/backgroundHelpers';
// import { generateBorderStyle } from '../../../src/helpers/border-helper';
// import { generateBoxShadowStyles } from '../../../src/helpers/boxshadow-helper';
// import { generateDimensionStyle } from '../../../src/helpers/dimension-helper';
// import { generateResAlignmentStyle } from '../../../src/helpers/res-alignment-helper';
// import { generateTypographyStyles } from '../../../src/helpers/typoHelpers';

const {
    handleUniqueId,
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateDimensionStyle,
    generateResAlignmentStyle,
    generateTypographyStyles,

    // generateControls,
} = window.zoloModule;

const Edit = (props) => {

    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        blockStyle,

        //settings
        titleText,
        subTitleText,
        showSubTitle,
        titleTagName,
        showSeparator,
        subTitleTagName,

        //style
        titleColor,
        titleHoverColor,
        subTitleColor,
        subTitleHoverColor
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "zolo-advance-heading";
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(className, ``),
    });

    //css generate

    // const {
    // 	desktopRangeStyle: headingWidthDesktop,
    // 	tabRangeStyle: headingWidthTab,
    // 	mobRangeStyle: headingWithMob,
    // } = generateResRangeStyle({
    // 	controlName: HEADING_WIDTH,
    // 	property: 'width',
    // 	attributes,
    // });

    const {
        desktopAlignStyle: headingAlignmentDesktop,
        tabAlignStyle: headingAlignmentTab,
        mobAlignStyle: headingAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: HEADING_ALIGNMENT,
        property: 'text-align',
        attributes,
    });


    //title style generate
    //typography
    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        defaultFontSize: 22,
        attributes,
    })
    //margin
    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMobile,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //subtitle style generate
    //typography
    const {
        typoStylesDesktop: subTitleTypoDesktop,
        typoStylesTab: subTitleTypoTab,
        typoStylesMobile: subTitleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: SUBTITLE_TYPOGRAPHY,
        defaultFontSize: 22,
        attributes,
    })
    //margin
    const {
        dimensionStylesDesktop: subTitleMarginDesktop,
        dimensionStylesTab: subTitleMarginTab,
        dimensionStylesMobile: subTitleMarginMobile,
    } = generateDimensionStyle({
        controlName: SUBTITLE_TYPOGRAPHY,
        styleFor: 'margin',
        attributes,
    });

    //wrapper style generate
    //margin
    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionStyle({
        controlName: WRAPPER_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    //padding
    const {
        dimensionStylesDesktop: wrapperPaddingDesktop,
        dimensionStylesTab: wrapperPaddingTab,
        dimensionStylesMobile: wrapperPaddingMobile,
    } = generateDimensionStyle({
        controlName: WRAPPER_PADDING,
        styleFor: 'padding',
        attributes,
    });
    //Background
    const {
        backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
        backgroundStylesTab: wrapperBackgroundStylesTab,
        hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
        backgroundStylesMobile: wrapperBackgroundStylesMobile,
        hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
        overlayStylesDesktop: wrapperOverlayStylesDesktop,
        hoverOverlayStylesDesktop: wrapperHoverOverlayStylesDesktop,
        overlayStylesTab: wrapperOverlayStylesTab,
        hoverOverlayStylesTab: wrapperHoverOverlayStylesTab,
        overlayStylesMobile: wrapperOverlayStylesMobile,
        hoverOverlayStylesMobile: wrapperHoverOverlayStylesMobile,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WRAPPER_BG,
    });

    //boxshadow
    const {
        boxShadowStyle: wrapperShadow,
        hoverBoxShadowstyle: wrapperHoverShadow,
        transitionStyle: wrapperShadowTransition
    } = generateBoxShadowStyles({
        attributes,
        controlName: WRAPPER_SHADOW,
    });

    //border
    const {
        desktopBorderStyle: wrapperBorderDesktop,
        tabBorderStyle: wrapperBorderTab,
        mobBorderStyle: wrapperBorderMob
    } = generateBorderStyle({
        attributes,
        controlName: WRAPPER_BORDER,
    });


    //css style
    const wrapperStylesDesktop = `
		.zolo-block-wrapper.${uniqueId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBorderDesktop}
			${wrapperShadow}
			transition:${wrapperShadowTransition};
		}
		.zolo-block-wrapper.${uniqueId}:hover{
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperHoverShadow}
		}
		.zolo-block-wrapper.${uniqueId}::befor{
				${wrapperOverlayStylesDesktop}
		}
		.zolo-block-wrapper.${uniqueId}:hover::befor{
			${wrapperHoverOverlayStylesDesktop}
		}
	`;
    const wrapperStylesTab = `
		.zolo-block-wrapper.${uniqueId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBackgroundStylesTab}
			${wrapperBorderTab}
		}
		.zolo-block-wrapper.${uniqueId}:hover{
			${wrapperHoverBackgroundStylesTab}
		}
		.zolo-block-wrapper.${uniqueId}::before{
			${wrapperOverlayStylesTab}
		}
		.zolo-block-wrapper.${uniqueId}:hover::before{
			${wrapperHoverOverlayStylesTab}
		}
	`;
    const wrapperStylesMobile = `
		.zolo-block-wrapper.${uniqueId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBorderMob}
		}
		.zolo-block-wrapper.${uniqueId}:hover{
			${wrapperHoverBackgroundStylesMobile}
		}
		.zolo-block-wrapper.${uniqueId}::before{
			${wrapperOverlayStylesMobile}
		}
		.zolo-block-wrapper.${uniqueId}::before:hover{
			${wrapperHoverOverlayStylesMobile}
		}
	`;

    // Title styles css in strings
    const titleStylesDesktop = `
			.zolo-block-wrapper.${uniqueId} .zolo-ah-title {
				color: ${titleColor};
				${titleTypoDesktop}
				${titleMarginDesktop}
			}
			.zolo-block-wrapper.${uniqueId}:hover .zolo-ah-title {
				color: ${titleHoverColor};
			}
		`;

    const titleStylesTab = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-title {
			${titleTypoTab}
			${titleMarginTab}
		}
	`;

    const titleStylesMobile = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-title {
			${titleTypoMobile}
			${titleMarginMobile}
		}
	`;

    // Subtitle styles css in strings
    const subtitleStylesDesktop = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
			color: ${subTitleColor};
			${subTitleTypoDesktop}
			${subTitleMarginDesktop}
		}
		.zolo-block-wrapper.${uniqueId}:hover .zolo-ah-subtitle {
			color: ${subTitleHoverColor};
		}
	`;

    const subtitleStylesTab = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
			${subTitleTypoTab}
			${subTitleMarginTab}
		}
	`;

    const subtitleStylesMobile = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
			${subTitleTypoMobile}
			${subTitleMarginMobile}
		}
	`;

    const desktopAllStyle = `
		${wrapperStylesDesktop}
		${titleStylesDesktop}
		${subtitleStylesDesktop}
	`;

    const tabletAllStyle = `
		${wrapperStylesTab}
		${titleStylesTab}
		${subtitleStylesTab}
	`;

    const mobileAllStyle = `
		${wrapperStylesMobile}
		${titleStylesMobile}
		${subtitleStylesMobile}
	`;

    // Set All Style in "blockStyle" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes]);

    return (
        <>
            {/* {isSelected && (
                generateControls(controls, attributes, setAttributes)
            )} */}
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>

                <style>
                    {`
						/* desktopcssStart */
						${softMinifyCssStrings(desktopAllStyle)}
						/* desktopcssEnd */

						@media all and (max-width: 1024px) {
							/* tabcssStart */
							${softMinifyCssStrings(tabletAllStyle)}
							/* tabcssEnd */
						}

						@media all and (max-width: 767px) {
							/* mobcssStart */
							${softMinifyCssStrings(mobileAllStyle)}
							/* mobcssEnd */
						}
					`}
                </style>
                <div className={`zolo-block-wrapper zolo-advanced-heading ${uniqueId}`}>

                    <RichText
                        tagName={titleTagName}
                        className="zolo-ah-title"
                        value={titleText}
                        formattingControl={["bold", "italic"]}
                        onChange={(titleText) => setAttributes({ titleText })}
                    />

                    {showSubTitle && (
                        <RichText
                            tagName={subTitleTagName}
                            className="zolo-ah-subtitle"
                            value={subTitleText}
                            formattingControl={["bold", "italic"]}
                            onChange={(subTitleText) => setAttributes({ subTitleText })}
                        />
                    )}

                    {showSeparator && (
                        <div className={"zolo-ah-separator line"}></div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Edit;
