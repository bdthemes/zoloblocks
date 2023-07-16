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
import {
	SUBTITLE_TYPOGRAPHY,
	TITLE_TYPOGRAPHY,
	TRANSPARENT_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

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
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		blockStyle,

		//settings
		styles,
		headingIcon,
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
	const { textShadowStyle: subTitleTextShadowStyle } =
		generateTextShadowStyles({
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
      ${
			(transparentTitleHide === 'tab-mob' ||
				transparentTitleHide === 'mob') &&
			`display:none`
		}
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

				<div
					className={`zolo-block-wrapper zolo-advanced-heading ${
						'zolo-ah-' + styles
					} ${uniqueId}`}
				>
					<DisplayIcon icon={headingIcon} />

					{showTransparentTitle && (
						<div className="zolo-transparent-heading-wrap">
							<h3
								className={`zolo-transparent-heading zolo-transform-origin-${transparentTitleRotateOrigin}`}
							>
								{transparentTitleText}
							</h3>
						</div>
					)}

					{showSeparator && separatorPosition === 'top' && (
						<div className="zolo-ah-separator"></div>
					)}

					{showSubTitle && subTitlePosition == 'top' && (
						<RichText
							tagName={'h4'}
							className="zolo-ah-subtitle"
							value={subTitleText}
							formattingControl={['bold', 'italic']}
							onChange={(subTitleText) =>
								setAttributes({ subTitleText })
							}
						/>
					)}

					<DynamicTag
						tagName={titleTagName}
						className="zolo-ah-title"
					>
						<RichText
							tagName={titleLink ? 'a' : 'span'}
							className="zolo-ah-main-title"
							value={titleText}
							formattingControl={['bold', 'italic']}
							onChange={(titleText) =>
								setAttributes({ titleText })
							}
							{...(titleLink
								? {
										href: titleLink.url,
										target: titleLink.isNewTab
											? '_blank'
											: '_self',
										rel: titleLink.isNewTab
											? 'noopener noreferrer'
											: 'noopener',
								  }
								: {})}
						/>
					</DynamicTag>

					{showSubTitle && subTitlePosition == 'bottom' && (
						<RichText
							tagName={'h4'}
							className="zolo-ah-subtitle"
							value={subTitleText}
							formattingControl={['bold', 'italic']}
							onChange={(subTitleText) =>
								setAttributes({ subTitleText })
							}
						/>
					)}

					{showSeparator && separatorPosition === 'bottom' && (
						<div className="zolo-ah-separator"></div>
					)}
				</div>
			</div>
		</>
	);
};

export default Edit;
