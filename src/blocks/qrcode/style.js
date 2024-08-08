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
    generateBorderStyle,
    generateDimensionStyle,
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
            ${qrCodeAlignDesk !== '' ? qrCodeAlignDesk : 'text-align: center;'}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusDesk}
            ${qrCodeBorderDesk}

        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-qrcode-wrapper {
            ${qrCodeAlignTab}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusTab}
              ${qrCodeBorderTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .zolo-qrcode-wrapper {
            ${qrCodeAlignMob}
        }

        .${uniqueId} .zolo-qrcode-wrapper canvas{
            ${qrCodeBorderRadiusMob}
              ${qrCodeBorderMob}
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
