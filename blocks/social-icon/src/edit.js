/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const {
    DisplayIcon,
    generateResRangeStyle,
    generateBorderStyle,
    softMinifyCssStrings,
    generateResCounterStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    COLUMN_COUNT,
    COLUMNS_GAP,
    ROW_GAP,
    BUTTON_PADDING,
    BUTTON_SIZE,
    ICON_TEXT_SPACING,
    BLOCK_MARGIN,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
} from './constants';

import Inspector from './inspector';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        preset,
        zoloStyles,
        socialText,
        socialProfiles,
        socialBgColor,
        socialColor,
        socialBgHoverColor,
        socialTextColor,
        socialTextHoverColor,
        borderHoverColor,
        presetBgColor,
    } = attributes;
    // this useEffect is for creating a unique id for each block's unique className by a random unique number


    const blockProps = useBlockProps({
        className: classnames(className, `${preset} ${uniqueId}`),
    });

    //  button general settings
    const {
        desktopRangeStyle: buttonSize,
        tabRangeStyle: buttonSizeTab,
        mobRangeStyle: buttonSizeMob,
    } = generateResRangeStyle({
        controlName: BUTTON_SIZE,
        property: 'font-size',
        attributes,
    });

    const {
        desktopBorderStyle: borderStyles,
        tabBorderStyle: borderStylesTab,
        mobBorderStyle: borderStylesMob,
    } = generateBorderStyle({
        controlName: BUTTON_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: btnRadiusDesk,
        dimensionStylesTab: btnRadiusTab,
        dimensionStylesMobile: btnRadiusMob,
    } = generateDimensionStyle({
        controlName: BTN_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: normalShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BTN_SHADOW,
    });

    const { boxShadowStyle: hoverShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BTN_HOVER_SHADOW,
    });

    const {
        typoStylesDesktop: textTypoDesk,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPOGRAPHY,
        defaultFontSize: 14,
        attributes,
    });

    const {
        dimensionStylesDesktop: paddingDesktop,
        dimensionStylesTab: paddingTab,
        dimensionStylesMobile: paddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Spacing between icon and text
    const {
        desktopRangeStyle: gapDesktop,
        tabRangeStyle: gapTablet,
        mobRangeStyle: gapMobile,
    } = generateResRangeStyle({
        controlName: ICON_TEXT_SPACING,
        property: 'gap',
        attributes,
    });

    // column count
    const {
        desktopRangeStyle: columnCountDeskstyle,
        tabRangeStyle: columnCountTabStyle,
        mobRangeStyle: columnCountMobStyle,
    } = generateResCounterStyle({
        controlName: COLUMN_COUNT,
        attributes,
        noProperty: true,
    });

    // column gap
    const {
        desktopRangeStyle: colGapDeskstyle,
        tabRangeStyle: colGapTabStyle,
        mobRangeStyle: colGapMobStyle,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'column-gap',
        attributes,
    });

    // row gap
    const {
        desktopRangeStyle: rowGapDeskstyle,
        tabRangeStyle: rowGapTabStyle,
        mobRangeStyle: rowGapMobStyle,
    } = generateResRangeStyle({
        controlName: ROW_GAP,
        property: 'row-gap',
        attributes,
    });

    // block margin
    const {
        dimensionStylesDesktop: blockDeskMargin,
        dimensionStylesTab: blockTabMargin,
        dimensionStylesMobile: blockMobMargin,
    } = generateDimensionStyle({
        controlName: BLOCK_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-social-icon {
			${blockDeskMargin}
			${colGapDeskstyle}
			${rowGapDeskstyle}
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
		}
		.${uniqueId}.wp-block-zolo-social-icon .zolo-social-item {
			${borderStyles}
			${paddingDesktop}
			${gapDesktop}
			${btnRadiusDesk}
			${normalShadow}
			${buttonSize}
		}
		.${uniqueId}.wp-block-zolo-social-icon .zolo-social-item:hover {
			border-color:${borderHoverColor};
			${hoverShadow}
		}
		.${uniqueId}.wp-block-zolo-social-icon .zolo-social-item:before {
			background-color:${presetBgColor};
		}
		.${uniqueId}.wp-block-zolo-social-icon .zolo-social-text {
			${textTypoDesk}
		}
		${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-icon .zolo-social-item{
					color:${socialTextColor};
					background:${socialBgColor};
				}`
                : ' '
        }
		${
            socialColor === 'custom'
                ? `.${uniqueId}.wp-block-zolo-social-icon .zolo-social-item:hover{
					color:${socialTextHoverColor};
					background:${socialBgHoverColor};
				}`
                : ' '
        }
  	`;
    const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-social-icon{
			${blockTabMargin}
			${colGapTabStyle}
			${rowGapTabStyle}
			grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
		}
		.${uniqueId}.wp-block-zolo-social-icon .zolo-social-item {
			${borderStylesTab}
			${paddingTab}
			${gapTablet}
			${btnRadiusTab}
			${buttonSizeTab}
		}
		.${uniqueId}.wp-block-zolo-social-icon .zolo-social-text {
			${textTypoTab}
		}
	`;

    const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-social-icon{
			${blockMobMargin}
			${colGapMobStyle}
			${rowGapMobStyle}
			grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
		}
		.${uniqueId}.wp-block-zolo-social-icon .zolo-social-item {
			${borderStylesMob}
			${paddingMob}
			${gapMobile}
			${btnRadiusMob}
			${buttonSizeMob}
		}
		.${uniqueId}.wp-block-zolo-social-icon .zolo-social-text {
			${textTypoMob}
		}
  	`;

    const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

    // Set All Style in "zoloStyles" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(zoloStyles) != JSON.stringify(styles)) {
            setAttributes({ zoloStyles: styles });
        }
    }, [attributes]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <style>{` ${softMinifyCssStrings(allStyle)}`}</style>

            <div {...blockProps}>
                {socialProfiles &&
                    socialProfiles.map((profile, index) => {
                        let socialName = Object.keys(profile.icon)[0];
                        return (
                            <a
                                href={profile.link && profile.link.url}
                                key={index}
                                target={profile.link && profile.link.openInNewTab && '_blank'}
                                rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                                className={`zolo-social-item zolo-${socialName} ${socialColor}`}
                            >
                                {socialText !== 'none' && (
                                    <span className="zolo-social-icon">
                                        <DisplayIcon icon={profile.icon} />
                                    </span>
                                )}
                                {socialText !== 'iconOnly' && <span className="zolo-social-text">{profile.text}</span>}
                            </a>
                        );
                    })}
            </div>
        </>
    );
}
