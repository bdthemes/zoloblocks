/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextareaControl, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    ColorControl,
    SimpleRangeControl,
    BorderControl,
    ResDimensionsControl,
    HeaderTabs,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

import {
    QR_CODE_LEVEL,
    QR_CODE_STYLE,
    QR_CODE_BORDER,
    QR_CODE_ALIGN,
    QR_CODE_BORDER_RADIUS,
    QR_LOGO_PADDING_STYLE,
} from './constants/index';

export default function Inspector(props) {
    const { attributes, setAttributes, block } = props;

    const {
        resMode,

        // settings
        qrContent,
        qrCodeLink,
        qrCodeStyle,
        logoQr,
        logoQrBehind,
        codeColor,
        backgroundColor,
        qrCodePadding,

        qrCodeLevel,
        qrCodeSize,
        logoWidth,
        logoOpacity,
        logoPaddingStyle,
        logoPadding,
        eyeColor,
        eyeRadius,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };
            const hookLinks = applyFilters('zolo.blocks.controls.qrcode.pageLinks', [],  props);
            const hookStyles = applyFilters('zolo.blocks.controls.qrcode.styles', [],  props);
            const hookLogo = applyFilters('zolo.blocks.controls.qrcode.logo', [],  props);
            const hookLogoStyle = applyFilters('zolo.blocks.controls.qrcode.logoStyle', [],  props);


    return (
        <>
            <InspectorControls>
                <HeaderTabs
                    block="zolo/qrcode"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    generalTab={
                        <>
                            <ZoloPanelBody title={__('QR Code', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <TextareaControl
                                    label={__('Content', 'zoloblocks')}
                                    value={qrContent}
                                    onChange={(value) =>
                                        setAttributes({
                                            qrContent: value,
                                        })
                                    }
                                />
                                {/* hook links */}
                                {hookLinks && hookLinks.length > 0 && hookLinks}
                                <SimpleRangeControl
                                    label={__('Size', 'zoloblocks')}
                                    value={qrCodeSize}
                                    onChange={(value) =>
                                        setAttributes({
                                            qrCodeSize: value,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            qrCodeSize: 0,
                                        })
                                    }
                                    max={500}
                                    noUnits={true}
                                />

                                <SelectControl
                                    label={__('Error Correction Level', 'zoloblocks')}
                                    value={qrCodeLevel}
                                    onChange={(value) =>
                                        setAttributes({
                                            qrCodeLevel: value,
                                        })
                                    }
                                    options={QR_CODE_LEVEL}
                                />

                                {/* hook styles */}
                                {hookStyles && hookStyles.length > 0 && hookStyles}

                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={QR_CODE_ALIGN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                                {/* hook logo  */}
                                {hookLogo && hookLogo.length > 0 && hookLogo}

                        </>
                    }
                    styleTab={
                        <>
                            <ZoloPanelBody title={__('Wrapper', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={codeColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            codeColor: value,
                                        })
                                    }
                                />

                                <ColorControl
                                    label={__('Eye Color', 'zoloblocks')}
                                    color={eyeColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            eyeColor: value,
                                        })
                                    }
                                />

                                <SimpleRangeControl
                                    label={__('Eye Radius', 'zoloblocks')}
                                    value={eyeRadius}
                                    onChange={(value) =>
                                        setAttributes({
                                            eyeRadius: value,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            eyeRadius: '',
                                        })
                                    }
                                    min={0}
                                    max={100}
                                    noUnits={true}
                                />

                                <ColorControl
                                    label={__('Background Type', 'zoloblocks')}
                                    color={backgroundColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            backgroundColor: value,
                                        })
                                    }
                                />

                                <BorderControl
                                    label={__('Border Type', 'zoloblocks')}
                                    controlName={QR_CODE_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={QR_CODE_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <SimpleRangeControl
                                    label={__('Padding', 'zoloblocks')}
                                    value={qrCodePadding}
                                    onChange={(value) =>
                                        setAttributes({
                                            qrCodePadding: value,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            qrCodePadding: '',
                                        })
                                    }
                                    min={1}
                                    max={300}
                                    noUnits={true}
                                />
                            </ZoloPanelBody>

                            {/* hooks logo style  */}
                            {hookLogoStyle && hookLogoStyle.length > 0 && hookLogoStyle}
                        </>
                    }
                    advancedTab={
                        <AdvancedOptions
                            block="zolo/qr-block"
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                        />
                    }
                />
            </InspectorControls>
        </>
    );
}
