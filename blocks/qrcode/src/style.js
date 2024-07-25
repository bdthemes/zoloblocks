/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateTextShadowStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import { QR_CODE_ALIGN, QR_CODE_BORDER, QR_CODE_BORDER_RADIUS } from './constants/index';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;

    const {
        uniqueId,

        // settings
    } = attributes;

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

    const desktopAllStyle = `
        .${uniqueId} .zolo-qrcode-wrapper {
            ${qrCodeAlignDesk}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusDesk}
        }
        
        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderDesk}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-qrcode-wrapper {
            ${qrCodeAlignTab}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .zolo-qrcode-wrapper {
            ${qrCodeAlignMob}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.couponBlock.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.couponBlock.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.couponBlock.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
