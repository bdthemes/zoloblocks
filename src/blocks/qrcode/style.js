/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { BADGE_TYPOGRAPHY } from './constants/typoPrefixConstant';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    GlobalStyleHanlder,
    generateBoxShadowStyles,
    generateTypographyStyles,
    generateResRangeStyle,
} = window.zoloModule;

import {
    QR_CODE_SIZE,
    QR_CODE_ALIGN,
    QR_CODE_BORDER,
    QR_CODE_BORDER_RADIUS,
    WRAP_QR_CODE_BORDER,
    WRAP_QR_CODE_BORDER_RADIUS,
    WRAP_QR_CODE_PADDING,
    WRAP_QR_CODE_BOX_SHADOW,
    BADGE_QR_CODE_BORDER,
    BADGE_QR_CODE_BORDER_RADIUS,
    BADGE_QR_CODE_PADDING,
    BADGE_QR_CODE_BOX_SHADOW,
    BADGE_QR_CODE_MARGIN,
    BADGE_ICON_SIZE,
} from './constants/index';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;

    const { uniqueId, showBadge, badgeStyle, wrapBackgroundColor, badgeBackgroundColor, badgeBackgroundArrowColor, badgeTextColor } =
        attributes;

    const {
        desktopAlignStyle: qrCodeAlignDesk,
        tabAlignStyle: qrCodeAlignTab,
        mobAlignStyle: qrCodeAlignMob,
    } = generateResAlignmentStyle({
        controlName: QR_CODE_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        desktopBorderStyle: qrCodeBorderDesk,
        tabBorderStyle: qrCodeBorderTab,
        mobBorderStyle: qrCodeBorderMob,
    } = generateBorderStyle({
        controlName: QR_CODE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: qrCodeBorderRadiusDesk,
        dimensionStylesTab: qrCodeBorderRadiusTab,
        dimensionStylesMobile: qrCodeBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: QR_CODE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // WRAP

    const {
        desktopBorderStyle: wrapQrCodeBorderDesk,
        tabBorderStyle: wrapQrCodeBorderTab,
        mobBorderStyle: wrapQrCodeBorderMob,
    } = generateBorderStyle({
        controlName: WRAP_QR_CODE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapQrCodeBorderRadiusDesk,
        dimensionStylesTab: wrapQrCodeBorderRadiusTab,
        dimensionStylesMobile: wrapQrCodeBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: WRAP_QR_CODE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapQrCodePaddingDesk,
        dimensionStylesTab: wrapQrCodePaddingTab,
        dimensionStylesMobile: wrapQrCodePaddingMob,
    } = generateDimensionStyle({
        controlName: WRAP_QR_CODE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { boxShadowStyle: wrapQrCodeBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: WRAP_QR_CODE_BOX_SHADOW,
    });

    // BADGE

    const {
        desktopBorderStyle: badgeQrCodeBorderDesk,
        tabBorderStyle: badgeQrCodeBorderTab,
        mobBorderStyle: badgeQrCodeBorderMob,
    } = generateBorderStyle({
        controlName: BADGE_QR_CODE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: badgeQrCodeBorderRadiusDesk,
        dimensionStylesTab: badgeQrCodeBorderRadiusTab,
        dimensionStylesMobile: badgeQrCodeBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BADGE_QR_CODE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: badgeQrCodePaddingDesk,
        dimensionStylesTab: badgeQrCodePaddingTab,
        dimensionStylesMobile: badgeQrCodePaddingMob,
    } = generateDimensionStyle({
        controlName: BADGE_QR_CODE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: badgeQrCodeMarginDesk,
        dimensionStylesTab: badgeQrCodeMarginTab,
        dimensionStylesMobile: badgeQrCodeMarginMob,
    } = generateDimensionStyle({
        controlName: BADGE_QR_CODE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const { boxShadowStyle: badgeQrCodeBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BADGE_QR_CODE_BOX_SHADOW,
    });

    const {
        typoStylesDesktop: badgeTypoDesktop,
        typoStylesTab: badgeTypoTab,
        typoStylesMobile: badgeTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BADGE_TYPOGRAPHY,
        defaultFontSize: '',
        attributes,
    });

    // icon size

    const {
        desktopRangeStyle: badgeIconHeight,
        tabRangeStyle: badgeIconHeightTab,
        mobRangeStyle: badgeIconHeightMob,
    } = generateResRangeStyle({
        controlName: BADGE_ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: badgeIconWidth,
        tabRangeStyle: badgeIconWidthTab,
        mobRangeStyle: badgeIconWidthMob,
    } = generateResRangeStyle({
        controlName: BADGE_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: qrCodeSizeDesk,
        tabRangeStyle: qrCodeSizeTab,
        mobRangeStyle: qrCodeSizeMob,
    } = generateResRangeStyle({
        controlName: QR_CODE_SIZE,
        property: '--zolo-qr-code-size',
        attributes,
    });

    const desktopAllStyle = `
        ${
            showBadge
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-wrapper {
                        ${wrapQrCodePaddingDesk}
                        ${wrapQrCodeBorderRadiusDesk}
                        ${wrapQrCodeBorderDesk}
                        ${wrapQrCodeBoxShadow}
                        ${wrapBackgroundColor ? `background: ${wrapBackgroundColor};` : ''}
                    }

                    .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-badge {
                        ${badgeTypoDesktop}
                        ${badgeQrCodeMarginDesk}
                        ${badgeTextColor ? `color: ${badgeTextColor};` : ''}
                    }
                    ${
                        badgeStyle !== 'zolo-badge-style-1'
                            ? `
                                .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-badge {
                                    ${badgeQrCodePaddingDesk}
                                    ${badgeQrCodeBorderRadiusDesk}
                                    ${badgeQrCodeBorderDesk}
                                    ${badgeQrCodeBoxShadow}
                                    ${badgeBackgroundColor ? `background: ${badgeBackgroundColor};` : ''}
                                }

                                .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-badge:after {
                                    ${badgeBackgroundArrowColor ? `--zolo-badge-arrow-color: ${badgeBackgroundArrowColor};` : ''}
                                }

                                .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-badge-icon svg {
                                    ${badgeIconHeight}
                                    ${badgeIconWidth}
                                }
                            `
                            : ''
                    }
                `
                : ''
        }

        .${uniqueId}.zolo-block.wp-block-zolo-qrcode {
            ${qrCodeAlignDesk !== '' ? qrCodeAlignDesk : 'text-align: center;'}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusDesk}
            ${qrCodeBorderDesk}

        }

        .${uniqueId}.wp-block-zolo-qrcode .zolo-qrcode-wrapper canvas {
            ${qrCodeSizeDesk}
        }
    `;

    const tabletAllStyle = `

        ${
            showBadge
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-wrapper {
                        ${wrapQrCodePaddingTab}
                        ${wrapQrCodeBorderRadiusTab}
                        ${wrapQrCodeBorderTab}
                    }

                    .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-badge {
                        ${badgeTypoTab}
                        ${badgeQrCodeMarginTab}
                    }
                    ${
                        badgeStyle !== 'zolo-badge-style-1'
                            ? `
                                .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-badge {
                                    ${badgeQrCodePaddingTab}
                                    ${badgeQrCodeBorderRadiusTab}}
                                    ${badgeQrCodeBorderTab}
                                }
                            `
                            : ''
                    }
                `
                : ''
        }
        .${uniqueId} .zolo-qrcode-wrapper {
            ${qrCodeAlignTab}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusTab}
            ${qrCodeBorderTab}
        }

        .${uniqueId}.wp-block-zolo-qrcode .zolo-qrcode-wrapper canvas {
            ${qrCodeSizeTab}
        }
    `;

    const mobileAllStyle = `

        ${
            showBadge
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-wrapper {
                        ${wrapQrCodePaddingMob}
                        ${wrapQrCodeBorderRadiusMob}
                        ${wrapQrCodeBorderMob}
                    }
                    .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-badge {
                        ${badgeTypoMob}
                        ${badgeQrCodeMarginMob}
                    }
                    ${
                        badgeStyle !== 'zolo-badge-style-1'
                            ? `
                                .${uniqueId}.zolo-block.wp-block-zolo-qrcode .zolo-qrcode-badge {
                                    ${badgeQrCodePaddingMob}
                                    ${badgeQrCodeBorderRadiusMob}
                                    ${badgeQrCodeBorderMob}
                                }
                            `
                            : ''
                    }
            `
                : ''
        }
        .${uniqueId} .zolo-qrcode-wrapper {
            ${qrCodeAlignMob}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusMob}
              ${qrCodeBorderMob}
        }
        
        .${uniqueId}.wp-block-zolo-qrcode .zolo-qrcode-wrapper canvas {
            ${qrCodeSizeMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.qrCode.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.qrCode.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.qrCode.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
