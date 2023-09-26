//WordPress dependencies
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
//external dependencies
import classnames from 'classnames';
//internal dependencies
import Inspector from './inspector';
import './style.scss';

//block constants
import {
    SEPARATOR_HEIGHT,
    SEPARATOR_SPACING,
    SEPARATOR_WIDTH,
    SUBTITLE_MARGIN,
    SUBTITLE_TEXT_SHADOW,
    SUBTITLE_TEXT_STROKE,
    TEST_NORMAL_BG,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_SHADOW,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    TPT_ALIGNMENT,
    TPT_BORDER,
    TPT_BORDER_RADIUS,
    TPT_MARGIN,
    TPT_PADDING,
    TPT_SHADOW,
    TPT_TEXT_SHADOW,
    TPT_TEXT_STROKE,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW,
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY, TRANSPARENT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const {
    handleUniqueId,
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    DynamicTag,
    generateResAlignmentStyle,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    DisplayIcon,
    generateNormalBGControlStyles,
} = window.zoloModule;

const Edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        blockStyle,

        //settings
        styles,
        headingIcon,
        enableTitleLink,
        titleText,
        subTitleText,
        showSubTitle,
        titleTagName,
        titleLink,
        showSeparator,
        subTitlePosition,
        separatorPosition,
        align,
        showTransparentTitle,
        transparentTitleText,
        transparentTitleXOffset,
        transparentTitleYOffset,
        transparentTitleRotate,
        transparentTitleRotateOrigin,
        transparentTitleHide,

        //style
        titleColor,
        subTitleColor,
        tptColor,
        tptBgColor,
        tptOpacity,
        separatorColor,
        titleBgColor,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = 'zolo-advance-heading';
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
    //title style generate
    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        defaultFontSize: 25,
        attributes,
    });
    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMobile,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: titlePaddingDesktop,
        dimensionStylesTab: titlePaddingTab,
        dimensionStylesMobile: titlePaddingMob,
    } = generateDimensionStyle({
        controlName: TITLE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: titleBorderRadiusDesktop,
        dimensionStylesTab: titleBorderRadiusTab,
        dimensionStylesMobile: titleBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: TITLE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: titleShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TITLE_SHADOW,
    });

    const {
        desktopBorderStyle: titleBorderDesktop,
        tabBorderStyle: titleBorderTab,
        mobBorderStyle: titleBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: TITLE_BORDER,
    });
    const { textShadowStyle: titleTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: titleTextStrokeStyle,
        tabTextStrokeStyle: tabTitleTextStrokeStyle,
        mobTextStrokeStyle: mobTitleTextStrokeStyle,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TITLE_TEXT_STROKE,
    });

    //separator style generate
    const {
        desktopRangeStyle: separatorWidthDesktop,
        tabRangeStyle: separatorWidthTab,
        mobRangeStyle: separatorWidthMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: separatorHeightDesktop,
        tabRangeStyle: separatorHeightTab,
        mobRangeStyle: separatorHeightMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_HEIGHT,
        property: 'border-width',
        attributes,
    });
    const {
        desktopRangeStyle: separatorSpacingDesktop,
        tabRangeStyle: separatorSpacingTab,
        mobRangeStyle: separatorSpacingMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_SPACING,
        property: 'margin-top',
        attributes,
    });

    //subtitle style generate
    const {
        typoStylesDesktop: subTitleTypoDesktop,
        typoStylesTab: subTitleTypoTab,
        typoStylesMobile: subTitleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: SUBTITLE_TYPOGRAPHY,
        defaultFontSize: 16,
        attributes,
    });
    const {
        dimensionStylesDesktop: subTitleMarginDesktop,
        dimensionStylesTab: subTitleMarginTab,
        dimensionStylesMobile: subTitleMarginMobile,
    } = generateDimensionStyle({
        controlName: SUBTITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const { textShadowStyle: subTitleTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: SUBTITLE_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: subTitleTextStrokeStyle,
        tabTextStrokeStyle: tabSubTitleTextStrokeStyle,
        mobTextStrokeStyle: mobSubTitleTextStrokeStyle,
    } = generateTextStrokeStyles({
        attributes,
        controlName: SUBTITLE_TEXT_STROKE,
    });

    //transparent style generate
    const {
        typoStylesDesktop: transparentTypoDesktop,
        typoStylesTab: transparentTypoTab,
        typoStylesMobile: transparentTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TRANSPARENT_TYPOGRAPHY,
        defaultFontSize: 55,
        attributes,
    });

    const {
        desktopAlignStyle: tptAlignmentDesktop,
        tabAlignStyle: tptAlignmentTab,
        mobAlignStyle: tptAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: TPT_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    const {
        dimensionStylesDesktop: tptMarginDesktop,
        dimensionStylesTab: tptMarginTab,
        dimensionStylesMobile: tptMarginMob,
    } = generateDimensionStyle({
        controlName: TPT_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: tptPaddingDesktop,
        dimensionStylesTab: tptPaddingTab,
        dimensionStylesMobile: tptPaddingMob,
    } = generateDimensionStyle({
        controlName: TPT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: tptBorderRadiusDesktop,
        dimensionStylesTab: tptBorderRadiusTab,
        dimensionStylesMobile: tptBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: TPT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: tptShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TPT_SHADOW,
    });

    const {
        desktopBorderStyle: tptBorderDesktop,
        tabBorderStyle: tptBorderTab,
        mobBorderStyle: tptBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: TPT_BORDER,
    });

    const { textShadowStyle: tptTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: TPT_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: tptTextStrokeStyle,
        tabTextStrokeStyle: tabtptTextStrokeStyle,
        mobTextStrokeStyle: mobtptTextStrokeStyle,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TPT_TEXT_STROKE,
    });

    //wrapper style generate
    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionStyle({
        controlName: WRAPPER_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: wrapperPaddingDesktop,
        dimensionStylesTab: wrapperPaddingTab,
        dimensionStylesMobile: wrapperPaddingMobile,
    } = generateDimensionStyle({
        controlName: WRAPPER_PADDING,
        styleFor: 'padding',
        attributes,
    });
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

    const {
        boxShadowStyle: wrapperShadow,
        hoverBoxShadowstyle: wrapperHoverShadow,
        transitionStyle: wrapperShadowTransition,
    } = generateBoxShadowStyles({
        attributes,
        controlName: WRAPPER_SHADOW,
    });

    const {
        desktopBorderStyle: wrapperBorderDesktop,
        tabBorderStyle: wrapperBorderTab,
        mobBorderStyle: wrapperBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: WRAPPER_BORDER,
    });

    //test normal bg control
    const {
        backgroundStylesDesktop: testNoramlBgDesktop,
        backgroundStylesTab: testNoramlBgTab,
        backgroundStylesMobile: testNoramlBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: TEST_NORMAL_BG,
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
      text-align: ${align};
      --zb-advanced-heading-pos-x: ${transparentTitleXOffset}px;
      --zb-advanced-heading-pos-y: ${transparentTitleYOffset}px;
      --zb-advanced-heading-rotate: ${transparentTitleRotate}deg;
      ${testNoramlBgDesktop}
		}
		.zolo-block-wrapper.${uniqueId}:hover{
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperHoverShadow}
		}
		.zolo-block-wrapper.${uniqueId}::before{
				${wrapperOverlayStylesDesktop}
		}
		.zolo-block-wrapper.${uniqueId}:hover::before{
			${wrapperHoverOverlayStylesDesktop}
		}
    .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading{
      font-weight: 900;
    }
    .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
      font-weight: 400;
      color: #323641;
    }
    .zolo-block-wrapper.${uniqueId} .zolo-ah-title{
      font-weight: 500;
      color: #202224;
    }
	`;
    const wrapperStylesTab = `
		.zolo-block-wrapper.${uniqueId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBackgroundStylesTab}
			${wrapperBorderTab}
      ${
          transparentTitleHide === 'nothing' &&
          `
        --zb-advanced-heading-pos-x: 0px;
        --zb-advanced-heading-pos-y: 0px;
        --zb-advanced-heading-rotate: 0deg;
      `
      }
      ${testNoramlBgTab}
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
      ${
          transparentTitleHide === 'nothing' &&
          `
        --zb-advanced-heading-pos-x: 0px;
        --zb-advanced-heading-pos-y: 0px;
        --zb-advanced-heading-rotate: 0deg;
      `
      }
      ${testNoramlBgMob}
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
			.zolo-block-wrapper.${uniqueId} .zolo-ah-title .zolo-ah-main-title {
        ${titleColor ? `color: ${titleColor};` : ''}
        ${titleBgColor ? `background-color: ${titleBgColor};` : ''}
				${titleTypoDesktop}
				${titleMarginDesktop}
        ${titlePaddingDesktop}
        ${titleBorderDesktop}
        ${titleBorderRadiusDesktop}
        ${titleTextShadowStyle}
        ${titleTextStrokeStyle}
        ${titleShadow}
			}

      .zolo-block-wrapper.${uniqueId}.zolo-ah-style-6 .zolo-ah-title {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${titleColor || 'rgba(6, 6, 7, 0.919)'};
      }

		`;

    // .zolo-block-wrapper.${uniqueId}.zolo-ah-style-7 .zolo-ah-main-title {
    //   ${titleBgColor ? `background-color: ${titleBgColor};` : ""}
    // }
    // .zolo-block-wrapper.${uniqueId}.zolo-ah-style-7 .zolo-ah-title::before,
    // .zolo-block-wrapper.${uniqueId}.zolo-ah-style-7 .zolo-ah-title::after {
    //   ${titleBorderColor ? `background-color: ${titleBorderColor};` : ""}
    // }

    const titleStylesTab = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-title .zolo-ah-main-title {
			${titleTypoTab}
			${titleMarginTab}
      ${titlePaddingTab}
      ${titleBorderTab}
      ${titleBorderRadiusTab}
      ${tabTitleTextStrokeStyle}
		}
	`;

    const titleStylesMobile = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-title .zolo-ah-main-title {
			${titleTypoMobile}
			${titleMarginMobile}
      ${titlePaddingMob}
      ${titleBorderMob}
      ${titleBorderRadiusMob}
      ${mobTitleTextStrokeStyle}
		}
	`;

    // separator styles css in strings
    const separatorStylesDesktop = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      border-style: none none solid;
      ${separatorColor ? `border-color: ${separatorColor};` : ''}
      ${separatorHeightDesktop}
      ${separatorWidthDesktop}
      ${separatorSpacingDesktop}
      ${align === 'center' ? 'margin-left: auto; margin-right: auto' : ''}
      ${align === 'right' ? 'margin-left: auto; margin-right: 0' : ''}
    }
  `;

    const separatorStylesTab = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      ${separatorHeightTab}
      ${separatorWidthTab}
      ${separatorSpacingTab}
    }
  `;

    const separatorStylesMobile = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      ${separatorHeightMob}
      ${separatorWidthMob}
      ${separatorSpacingMob}
    }
  `;

    // Subtitle styles css in strings
    const subtitleStylesDesktop = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
      ${subTitleColor ? `color: ${subTitleColor};` : ''}
			${subTitleTypoDesktop}
			${subTitleMarginDesktop}
      ${subTitleTextShadowStyle}
      ${subTitleTextStrokeStyle}
		}
	`;
    const subtitleStylesTab = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
			${subTitleTypoTab}
			${subTitleMarginTab}
      ${tabSubTitleTextStrokeStyle}
		}
	`;
    const subtitleStylesMobile = `
		.zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
			${subTitleTypoMobile}
			${subTitleMarginMobile}
      ${mobSubTitleTextStrokeStyle}
		}
	`;

    //transparent styles css
    const transparentStylesDesktop = `
    .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading-wrap{
      ${tptAlignmentDesktop}
    }
    .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading {
      ${tptColor ? `color: ${tptColor};` : ''}
      ${tptBgColor ? `background-color: ${tptBgColor};` : ''}
      ${tptOpacity ? `opacity: ${tptOpacity};` : ''}
      ${transparentTypoDesktop}
      ${tptMarginDesktop}
      ${tptPaddingDesktop}
      ${tptBorderDesktop}
      ${tptBorderRadiusDesktop}
      ${tptTextShadowStyle}
      ${tptTextStrokeStyle}
      ${tptShadow}

      display:inline-block;
      -webkit-transform: translate(var(--zb-advanced-heading-pos-x, 0), var(--zb-advanced-heading-pos-y, 0)) rotate(var(--zb-advanced-heading-rotate, 0));
      transform: translate(var(--zb-advanced-heading-pos-x, 0), var(--zb-advanced-heading-pos-y, 0)) rotate(var(--zb-advanced-heading-rotate, 0));
    }
    .zolo-block-wrapper.${uniqueId}.zolo-ah-style-2 .zolo-transparent-heading {
      -webkit-text-stroke-width: 3px;
      -webkit-text-stroke-color: ${tptColor || 'rgba(6, 6, 7, 0.22)'};
    }
  `;

    const transparentStylesTab = `
    .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading-wrap{
      ${tptAlignmentTab}
      ${transparentTitleHide === 'tab-mob' && `display:none`}
    }
    .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading {
      ${transparentTypoTab}
      ${tptMarginTab}
      ${tptPaddingTab}
      ${tptBorderTab}
      ${tptBorderRadiusTab}
      ${tptTextShadowStyle}
      ${tabtptTextStrokeStyle}
    }
  `;

    const transparentStylesMobile = `
    .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading-wrap{
      ${tptAlignmentMob}
      ${(transparentTitleHide === 'tab-mob' || transparentTitleHide === 'mob') && `display:none`}
    }
    .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading {
      ${transparentTypoMobile}
      ${tptMarginMob}
      ${tptPaddingMob}
      ${tptBorderMob}
      ${tptBorderRadiusMob}
      ${mobtptTextStrokeStyle}
    }
  `;

    const desktopAllStyle = `
		${wrapperStylesDesktop}
		${titleStylesDesktop}
		${subtitleStylesDesktop}
    ${transparentStylesDesktop}
    ${separatorStylesDesktop}
	`;

    const tabletAllStyle = `
		${wrapperStylesTab}
		${titleStylesTab}
		${subtitleStylesTab}
    ${transparentStylesTab}
    ${separatorStylesTab}
	`;

    const mobileAllStyle = `
		${wrapperStylesMobile}
		${titleStylesMobile}
		${subtitleStylesMobile}
    ${transparentStylesMobile}
    ${separatorStylesMobile}
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
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
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
            <div {...blockProps}>
                <div class="zolo-counter-wrap zolo-counter-style-1">
                    <div class="zolo-counter-item">
                        <div class="zolo-counter-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-emoji-smile"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
                            </svg>
                        </div>
                        <div class="zolo-counter-inner-content">
                            <div class="zolo-counter-count">
                                <span class="counter">1000</span>
                                <span class="zolo-counter-sub-text">+</span>
                            </div>
                            <div class="zolo-counter-title">Happy Client</div>
                        </div>
                    </div>
                    <div class="zolo-counter-item">
                        <div class="zolo-counter-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-people"
                                viewBox="0 0 16 16"
                            >
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
                            </svg>
                        </div>
                        <div class="zolo-counter-inner-content">
                            <div class="zolo-counter-count">
                                <span class="counter">150</span>
                                <span class="zolo-counter-sub-text">k</span>
                            </div>
                            <div class="zolo-counter-title">Customers Worldwide</div>
                        </div>
                    </div>
                    <div class="zolo-counter-item">
                        <div class="zolo-counter-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-check2-square"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"></path>
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
                            </svg>
                        </div>
                        <div class="zolo-counter-inner-content">
                            <div class="zolo-counter-count">
                                <span class="counter">800</span>
                                <span class="zolo-counter-sub-text">+</span>
                            </div>
                            <div class="zolo-counter-title">Project Done</div>
                        </div>
                    </div>
                    <div class="zolo-counter-item">
                        <div class="zolo-counter-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-headset"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"></path>
                            </svg>
                        </div>
                        <div class="zolo-counter-inner-content">
                            <div class="zolo-counter-count">
                                <span class="counter">80</span>
                                <span class="zolo-counter-sub-text">k</span>
                            </div>
                            <div class="zolo-counter-title">Support Given</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
