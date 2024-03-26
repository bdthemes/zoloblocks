/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    GlobalStyleHanlder,
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
} = window.zoloModule;

import {
    BTN_ALIGNMENT,
    BTN_BG,
    BTN_BORDER,
    BTN_BRADIUS,
    BTN_HBG,
    BTN_PADDING,
    BTN_MARGIN,
    LABEL_MARGIN,
    ICON_SIZE,
    FIELD_BG,
    FIELD_BORDER,
    FIELD_BRADIUS,
    FIELD_PADDING,
    SCC_BORDER,
    SCC_BRADIUS,
    SCC_BG,
    SCC_PADDING,
    ERR_BORDER,
    ERR_BRADIUS,
    ERR_BG,
    ERR_PADDING,
} from './constants';

import { LABEL_TYPO, FIELD_TYPO, BTN_TYPO, ERR_MSG_TYPO, SCC_MSG_TYPO } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        labelColor,
        requiredColor,
        iconColor,
        textColor,
        placeholderColor,
        btnColor,
        btnHoverColor,
        errMsgColor,
        sccMsgColor,
        closeBtnColor,
        focusBorderColor,
        focusBorderWidth,
    } = attributes;

    // label
    const {
        dimensionStylesDesktop: labelMarginDesk,
        dimensionStylesTab: labelMarginTab,
        dimensionStylesMobile: labelMarginMob,
    } = generateDimensionStyle({
        controlName: LABEL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: labelTypoDesk,
        typoStylesTab: labelTypoTab,
        typoStylesMobile: labelTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LABEL_TYPO,
        defaultFontSize: '',
        attributes,
    });

    // Icon
    const {
        desktopRangeStyle: iconSize,
        tabRangeStyle: iconTabSize,
        mobRangeStyle: iconMobSize,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // Input Fields
    const {
        typoStylesDesktop: fieldTypoDesk,
        typoStylesTab: fieldTypoTab,
        typoStylesMobile: fieldTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FIELD_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        desktopBorderStyle: fieldBorderStyles,
        tabBorderStyle: fieldBorderStylesTab,
        mobBorderStyle: fieldBorderStylesMob,
    } = generateBorderStyle({
        controlName: FIELD_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: fieldBRDesktop,
        dimensionStylesTab: fieldBRTab,
        dimensionStylesMobile: fieldBRMob,
    } = generateDimensionStyle({
        controlName: FIELD_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: fieldPaddingDesktop,
        dimensionStylesTab: fieldPaddingTab,
        dimensionStylesMobile: fieldPaddingMob,
    } = generateDimensionStyle({
        controlName: FIELD_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        backgroundStylesDesktop: fieldBGStyle,
        backgroundStylesTab: fieldTabBGStyle,
        backgroundStylesMobile: fieldMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: FIELD_BG,
        attributes,
        noMainBGImg: false,
    });

    // submit button
    const {
        desktopAlignStyle: buttonAlignmentDesktop,
        tabAlignStyle: buttonAlignmentTab,
        mobAlignStyle: buttonAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: BTN_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    const {
        typoStylesDesktop: btnTypoDesk,
        typoStylesTab: btnTypoTab,
        typoStylesMobile: btnTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BTN_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        desktopBorderStyle: btnBorderStyles,
        tabBorderStyle: btnBorderStylesTab,
        mobBorderStyle: btnBorderStylesMob,
    } = generateBorderStyle({
        controlName: BTN_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: btnBRDesktop,
        dimensionStylesTab: btnBRTab,
        dimensionStylesMobile: btnBRMob,
    } = generateDimensionStyle({
        controlName: BTN_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: btnPaddingDesktop,
        dimensionStylesTab: btnPaddingTab,
        dimensionStylesMobile: btnPaddingMob,
    } = generateDimensionStyle({
        controlName: BTN_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: btnMarginDesktop,
        dimensionStylesTab: btnMarginTab,
        dimensionStylesMobile: btnMarginMob,
    } = generateDimensionStyle({
        controlName: BTN_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: btnBGStyle,
        backgroundStylesTab: btnTabBGStyle,
        backgroundStylesMobile: btnMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BTN_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: btnHBGStyle,
        backgroundStylesTab: btnTabHBGStyle,
        backgroundStylesMobile: btnMobHBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BTN_HBG,
        attributes,
        noMainBGImg: false,
    });

    // Error Message typography
    const {
        typoStylesDesktop: errMsgTypoDesk,
        typoStylesTab: errMsgTypoTab,
        typoStylesMobile: errMsgTypoMob,
    } = generateTypographyStyles({
        prefixConstant: ERR_MSG_TYPO,
        defaultFontSize: '',
        attributes,
    });

    // Success Message typography
    const {
        typoStylesDesktop: sccMsgTypoDesk,
        typoStylesTab: sccMsgTypoTab,
        typoStylesMobile: sccMsgTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SCC_MSG_TYPO,
        defaultFontSize: '',
        attributes,
    });

    // Success Message
    const {
        desktopBorderStyle: sccBorderStyles,
        tabBorderStyle: sccBorderStylesTab,
        mobBorderStyle: sccBorderStylesMob,
    } = generateBorderStyle({
        controlName: SCC_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: sccBRDesktop,
        dimensionStylesTab: sccBRTab,
        dimensionStylesMobile: sccBRMob,
    } = generateDimensionStyle({
        controlName: SCC_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: sccBGStyle,
        backgroundStylesTab: sccTabBGStyle,
        backgroundStylesMobile: sccMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: SCC_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: sccPaddingDesktop,
        dimensionStylesTab: sccPaddingTab,
        dimensionStylesMobile: sccPaddingMob,
    } = generateDimensionStyle({
        controlName: SCC_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Error Message
    const {
        desktopBorderStyle: errMsgBorderStyles,
        tabBorderStyle: errMsgBorderStylesTab,
        mobBorderStyle: errMsgBorderStylesMob,
    } = generateBorderStyle({
        controlName: ERR_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: errMsgBRDesktop,
        dimensionStylesTab: errMsgBRTab,
        dimensionStylesMobile: errMsgBRMob,
    } = generateDimensionStyle({
        controlName: ERR_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: errMsgBGStyle,
        backgroundStylesTab: errMsgTabBGStyle,
        backgroundStylesMobile: errMsgMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: ERR_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: errMsgPaddingDesktop,
        dimensionStylesTab: errMsgPaddingTab,
        dimensionStylesMobile: errMsgPaddingMob,
    } = generateDimensionStyle({
        controlName: ERR_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // alignment
    const btnDeskAlign = `width: ${buttonAlignmentDesktop === 'text-align:justify;' ? '100%' : ''};`;
    const btnTabAlign = `width: ${buttonAlignmentTab === 'text-align:justify;' ? '100%' : ''};`;
    const btnMobAlign = `width: ${buttonAlignmentMob === 'text-align:justify;' ? '100%' : ''};`;

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .zolo-contact-form input:focus, .${uniqueId} .zolo-contact-form select:focus, .${uniqueId} .zolo-contact-form textarea:focus {
            ${focusBorderColor ? `border-color: ${focusBorderColor};` : ''} 
            ${focusBorderWidth ? `outline-width: ${focusBorderWidth}px;` : ''}
            ${focusBorderColor ? `outline-color: ${focusBorderColor};` : ''}
        }
        .${uniqueId} .zolo-label {
            ${labelTypoDesk}
            color: ${labelColor};
            ${labelMarginDesk}
        }

        .${uniqueId} .zolo-required {
            color: ${requiredColor};
        }

        .${uniqueId} .zolo-submit-btn {
            ${buttonAlignmentDesktop}
            ${btnMarginDesktop}
        }

        .${uniqueId} .zolo-submit-btn button{
            ${btnDeskAlign}
            ${btnTypoDesk}
            ${btnBorderStyles}
            ${btnBRDesktop}
            ${btnPaddingDesktop}
            ${btnBGStyle}
            color: ${btnColor};
        }

        .${uniqueId} .zolo-submit-btn button:hover{
            color: ${btnHoverColor};
            ${btnHBGStyle}
        }

        .${uniqueId} .zolo-input-icon svg {
            ${iconSize}
            fill: ${iconColor};
        }

        .${uniqueId} .zolo-field-input-item input, .${uniqueId} .zolo-field-input-item textarea {
            color: ${textColor};
            ${fieldTypoDesk}
            ${fieldBorderStyles}
            ${fieldBRDesktop}
            ${fieldPaddingDesktop}
            ${fieldBGStyle}
        }

        .${uniqueId} .zolo-field-input-item input::placeholder , .${uniqueId} .zolo-field-input-item textarea::placeholder {
            color: ${placeholderColor};
        }

        .${uniqueId}.wp-block-zolo-form .pristine-error {
            color: ${errMsgColor};
            ${errMsgTypoDesk}
        }

        .${uniqueId}.wp-block-zolo-form .has-danger input, .${uniqueId}.wp-block-zolo-form .has-danger textarea, .${uniqueId}.wp-block-zolo-form .has-danger select {
            border-color: ${errMsgColor};
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-success-msg {
            ${sccBorderStyles}
            ${sccBRDesktop}
            ${sccBGStyle}
            ${sccPaddingDesktop}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-success-msg .zolo-msg-desc {
            ${sccMsgTypoDesk}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-success-msg .zolo-msg-desc,
        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-success-msg .zolo-msg-icon svg {
            --zolo-form-seccess-color: ${sccMsgColor};
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-error-msg {
            ${errMsgBorderStyles}
            ${errMsgBRDesktop}
            ${errMsgBGStyle}
            ${errMsgPaddingDesktop}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-error-msg .zolo-msg-desc,
        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-error-msg .zolo-msg-icon svg {
            --zolo-form-error-color: ${errMsgColor};
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg .zolo-msg-close svg {
            --zolo-msg-close-color: ${closeBtnColor};
        }
	`;
    const tabletAllStyle = `
        .${uniqueId} .zolo-label {
            ${labelTypoTab}
            ${labelMarginTab}
        }

        .${uniqueId} .zolo-submit-btn {
            ${buttonAlignmentTab}
            ${btnMarginTab}
        }

        .${uniqueId} .zolo-submit-btn button{
            ${btnTabAlign}
            ${btnTypoTab}
            ${btnBorderStylesTab}
            ${btnBRTab}
            ${btnPaddingTab}
            ${btnTabBGStyle}
        }

        .${uniqueId} .zolo-submit-btn button:hover{
            ${btnTabHBGStyle}
        }

        .${uniqueId} .zolo-input-icon svg {
            ${iconTabSize}
        }

        .${uniqueId} .zolo-field-input-item input, .${uniqueId} .zolo-field-input-item textarea {
            ${fieldTypoTab}
            ${fieldBorderStylesTab}
            ${fieldBRTab}
            ${fieldPaddingTab}
            ${fieldTabBGStyle}
        }

        .${uniqueId}.wp-block-zolo-form .pristine-error {
            ${errMsgTypoTab}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-success-msg {
            ${sccBorderStylesTab}
            ${sccBRTab}
            ${sccTabBGStyle}
            ${sccPaddingTab}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-success-msg .zolo-msg-desc {
            ${sccMsgTypoTab}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-error-msg {
            ${errMsgBorderStylesTab}
            ${errMsgBRTab}
            ${errMsgTabBGStyle}
            ${errMsgPaddingTab}
        }

    `;
    const mobileAllStyle = `
        .${uniqueId} .zolo-label {
            ${labelTypoMob}
            ${labelMarginMob}
        }

        .${uniqueId} .zolo-submit-btn {
            ${buttonAlignmentMob}
            ${btnMarginMob}
        }

        .${uniqueId} .zolo-submit-btn button{
            ${btnMobAlign}
            ${btnTypoMob}
            ${btnBorderStylesMob}
            ${btnBRMob}
            ${btnPaddingMob}
            ${btnMobBGStyle}
        }

        .${uniqueId} .zolo-submit-btn button:hover{
            ${btnMobHBGStyle}
        }

        .${uniqueId} .zolo-input-icon svg {
            ${iconMobSize}
        }

        .${uniqueId} .zolo-field-input-item input, .${uniqueId} .zolo-field-input-item textarea {
            ${fieldTypoMob}
            ${fieldBorderStylesMob}
            ${fieldBRMob}
            ${fieldPaddingMob}
            ${fieldMobBGStyle}
        }

        .${uniqueId}.wp-block-zolo-form .pristine-error {
            ${errMsgTypoMob}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-success-msg {
            ${sccBorderStylesMob}
            ${sccBRMob}
            ${sccMobBGStyle}
            ${sccPaddingMob}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-success-msg .zolo-msg-desc {
            ${sccMsgTypoMob}
        }

        .${uniqueId}.wp-block-zolo-form .zolo-form-msg.zolo-form-error-msg {
            ${errMsgBorderStylesMob}
            ${errMsgBRMob}
            ${errMsgMobBGStyle}
            ${errMsgPaddingMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.form.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.form.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.form.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
