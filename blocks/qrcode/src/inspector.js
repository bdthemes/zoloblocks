/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextareaControl, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

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
    const { attributes, setAttributes } = props;

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

                                {/* <ToggleControl
                                    label={__('Enable Page Link', 'zoloblocks')}
                                    checked={qrCodeLink}
                                    onChange={() =>
                                        setAttributes({
                                            qrCodeLink: !qrCodeLink,
                                        })
                                    }
                                /> */}

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

                                {/* <SelectControl
                                    label={__('Style', 'zoloblocks')}
                                    value={qrCodeStyle}
                                    onChange={(value) =>
                                        setAttributes({
                                            qrCodeStyle: value,
                                        })
                                    }
                                    options={QR_CODE_STYLE}
                                /> */}

                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={QR_CODE_ALIGN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>

                            {/* <ZoloPanelBody title={__('Logo')} panelProps={props} firstOpen={false}>
                                <BaseControl label={__('Choose Logo', 'zoloblocks')}>
                                    {logoQr ? (
                                        <ImageAvatar
                                            imageUrl={logoQr && logoQr.url}
                                            onDeleteImage={() =>
                                                setAttributes({
                                                    logoQr: null,
                                                })
                                            }
                                            imageId={logoQr && logoQr.id}
                                            onEditImage={(media) => {
                                                setAttributes({
                                                    logoQr: media,
                                                });
                                            }}
                                        />
                                    ) : (
                                        <>
                                            <MediaUpload
                                                onSelect={(media) => {
                                                    setAttributes({
                                                        logoQr: {
                                                            id: media.id,
                                                            url: media.url,
                                                            sizes: media.sizes,
                                                            alt: media.alt,
                                                            caption: media.caption,
                                                        },
                                                    });
                                                }}
                                                allowedTypes={['image']}
                                                value={logoQr && logoQr.id}
                                                render={({ open }) => (
                                                    <Button className="zolo-image-upload-btn" onClick={open}>
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                        >
                                                            <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                        </svg>
                                                        {__(' Upload Logo', 'zoloblocks')}
                                                    </Button>
                                                )}
                                            />
                                            <span className="zolo-help-text">{__('Use Square Size Image', 'zoloblocks')}</span>
                                        </>
                                    )}
                                </BaseControl>

                                <ToggleControl
                                    label={__('Behind the QR Code', 'zoloblocks')}
                                    checked={logoQrBehind}
                                    onChange={() =>
                                        setAttributes({
                                            logoQrBehind: !logoQrBehind,
                                        })
                                    }
                                />
                            </ZoloPanelBody> */}
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

                            {/* <ZoloPanelBody title={__('Logo', 'zoloblocks')} panelProps={props}>
                                <SimpleRangeControl
                                    label={__('Size', 'zoloblocks')}
                                    value={logoWidth}
                                    onChange={(value) =>
                                        setAttributes({
                                            logoWidth: value,
                                        })
                                    }
                                    onReset={() => {
                                        setAttributes({
                                            logoWidth: '',
                                        });
                                    }}
                                    min={1}
                                    max={300}
                                    noUnits={true}
                                />

                                <SimpleRangeControl
                                    label={__('Opacity', 'zoloblocks')}
                                    value={logoOpacity}
                                    onChange={(value) =>
                                        setAttributes({
                                            logoOpacity: value,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            logoOpacity: '',
                                        })
                                    }
                                    step={0.1}
                                    min={0.1}
                                    max={1}
                                    noUnits={true}
                                />

                                <SelectControl
                                    label={__('Padding Style', 'zoloblocks')}
                                    value={logoPaddingStyle}
                                    onChange={(value) =>
                                        setAttributes({
                                            logoPaddingStyle: value,
                                        })
                                    }
                                    options={QR_LOGO_PADDING_STYLE}
                                />

                                <SimpleRangeControl
                                    label={__('Padding', 'zoloblocks')}
                                    value={logoPadding}
                                    onChange={(value) =>
                                        setAttributes({
                                            logoPadding: value,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            logoPadding: '',
                                        })
                                    }
                                    min={0}
                                    max={50}
                                    noUnits={true}
                                />
                            </ZoloPanelBody> */}
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
