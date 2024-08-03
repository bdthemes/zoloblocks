import { ToggleControl, SelectControl, TextControl, BaseControl, Button } from '@wordpress/components';
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import objAttributes from './attributes';
import { __ } from '@wordpress/i18n';

const {
    ResRangeControl,
    SimpleRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    TabPanelControl,
    IconicBtnGroup,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    LinkControl,
    NormalBGControl,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
} = window.zoloModule;

import {
    DOT_SIZE,
    LA_POSITION,
    SELECT_SOURCE,
    PRESET,
    TEXT_BG_COLOR,
    TEXT_PADDING,
    TEXT_BORDER,
    TEXT_BORDER_RADIUS,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
} from './constants';

// import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;

    const { resMode, zoloCursors } = attributes;

    const [position, setPosition] = useState('layout');

    const { active, source, preset, imageSource, } = zoloCursors;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <ZoloPanelBody title={__('Cursor Effects', 'zoloblocks')} panelProps={panelProps} firstOpen={true} isNew={true}>
            <ToggleControl
                label={__('Show Cursor Effect', 'zoloblocks')}
                checked={active}
                onChange={() =>
                    setAttributes({
                        zoloCursors: {
                            ...zoloCursors,
                            active: !active,
                        },
                    })
                }
            />

            {active && (
                <>
                    <TabPanelControl
                        options={LA_POSITION}
                        normalComponents={
                            <>
                                <SelectControl
                                    label={__('Select Source', 'zoloblocks')}
                                    value={source}
                                    options={SELECT_SOURCE}
                                    onChange={(value) =>
                                        setAttributes({
                                            zoloCursors: {
                                                ...zoloCursors,
                                                source: value,
                                            },
                                        })
                                    }
                                />

                                {zoloCursors.source === 'default' && (
                                    <>
                                        <SelectControl
                                            label={__('Style', 'zoloblocks')}
                                            options={PRESET}
                                            value={preset}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        preset: value,
                                                    },
                                                })
                                            }
                                        />

                                        <SimpleRangeControl
                                            label={__('Speed', 'zoloblocks')}
                                            value={zoloCursors.speed}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        speed: value,
                                                    },
                                                })
                                            }
                                            onReset={() =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        speed: '',
                                                    },
                                                })
                                            }
                                            min={0.1}
                                            max={10}
                                            step={0.1}
                                            noUits={true}
                                        />
                                    </>
                                )}

                                {zoloCursors.source === 'text' && (
                                    <>
                                        <TextControl
                                            label={__('Text label', 'zoloblocks')}
                                            value={zoloCursors.textLabel}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        textLabel: value,
                                                    },
                                                })
                                            }
                                        />
                                    </>
                                )}

                                {zoloCursors.source === 'image' && (
                                    <>
                                        <BaseControl label={__('Image Source', 'zoloblocks')}>
                                            {imageSource ? (
                                                <ImageAvatar
                                                    imageUrl={imageSource && imageSource.url}
                                                    onDeleteImage={() =>
                                                        setAttributes({
                                                            zoloCursors: {
                                                                ...zoloCursors,
                                                                imageSource: null,
                                                            },
                                                        })
                                                    }
                                                    imageId={imageSource && imageSource.id}
                                                    onEditImage={(media) => {
                                                        setAttributes({
                                                            zoloCursors: {
                                                                ...zoloCursors,
                                                                imageSource: media,
                                                            },
                                                        });
                                                    }}
                                                />
                                            ) : (
                                                <MediaUpload
                                                    onSelect={(media) => {
                                                        setAttributes({
                                                            zoloCursors: {
                                                                ...zoloCursors,
                                                                imageSource: {
                                                                    id: media.id,
                                                                    url: media.url,
                                                                    sizes: media.sizes,
                                                                    alt: media.alt,
                                                                    caption: media.caption,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    allowedTypes={['image']}
                                                    value={imageSource && imageSource.id}
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
                                                            {__('Choose Image', 'zoloblocks')}
                                                        </Button>
                                                    )}
                                                />
                                            )}
                                        </BaseControl>
                                    </>
                                )}

                                {zoloCursors.source === 'icon' && (
                                    <>
                                        <ZoloIconPicker
                                            value={zoloCursors.icon}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        icon: value,
                                                    },
                                                })
                                            }
                                        />
                                    </>
                                )}
                            </>
                        }
                        hoverComponents={
                            <>
                                {zoloCursors.source === 'default' && (
                                    <>
                                        <hr></hr>
                                        <h3>{__('Primary', 'zoloblocks')}</h3>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={zoloCursors.primaryColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        primaryColor: value,
                                                    },
                                                })
                                            }
                                        />

                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={DOT_SIZE}
                                            requiredProps={requiredProps}
                                            max={300}
                                        />

                                        {/* <SimpleRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            value={zoloCursors.primarySize}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        primarySize: value,
                                                    },
                                                })
                                            }
                                            onReset={() =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        primarySize: '',
                                                    },
                                                })
                                            }
                                            min={0}
                                            max={100}
                                            step={1}
                                            noUits={true}
                                        /> */}

                                        <hr></hr>
                                        <h3>{__('Secondary', 'zoloblocks')}</h3>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={zoloCursors.secondaryColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        secondaryColor: value,
                                                    },
                                                })
                                            }
                                        />

                                        <SimpleRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            value={zoloCursors.secondarySize}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        secondarySize: value,
                                                    },
                                                })
                                            }
                                            onReset={() =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        secondarySize: '',
                                                    },
                                                })
                                            }
                                            min={0}
                                            max={100}
                                            step={1}
                                            noUits={true}
                                        />
                                    </>
                                )}

                                {zoloCursors.source === 'text' && (
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={zoloCursors.textColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoloCursors: {
                                                        ...zoloCursors,
                                                        textColor: value,
                                                    },
                                                })
                                            }
                                        />

                                        <NormalBGControl
                                            label={__('Background Color', 'zoloblocks')}
                                            controlName={TEXT_BG_COLOR}
                                            requiredProps={requiredProps}
                                            noMainBGIMG={true}
                                        />

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={TEXT_PADDING}
                                            requiredProps={requiredProps}
                                        />

                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={TEXT_BORDER}
                                            requiredProps={requiredProps}
                                        />

                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={TEXT_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                        />

                                        {/* <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        prefixConstant={TEXT_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                    /> */}
                                        {zoloCursors.source === 'image' && (
                                            <>
                                                <SimpleRangeControl
                                                    label={__('Size', 'zolo-blocks')}
                                                    value={zoloCursors.imageSize}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            zoloCursors: {
                                                                ...zoloCursors,
                                                                imageSize: value,
                                                            },
                                                        })
                                                    }
                                                    onReset={() =>
                                                        setAttributes({
                                                            zoloCursors: {
                                                                ...zoloCursors,
                                                                imageSize: '',
                                                            },
                                                        })
                                                    }
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    noUits={true}
                                                />

                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={IMAGE_BORDER}
                                                    requiredProps={requiredProps}
                                                />

                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={IMAGE_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                        {zoloCursors.source === 'icon' && (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={zoloCursors.iconColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            zoloCursors: {
                                                                ...zoloCursors,
                                                                iconColor: value,
                                                            },
                                                        })
                                                    }
                                                />

                                                <SimpleRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    value={zoloCursors.iconSize}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            zoloCursors: {
                                                                ...zoloCursors,
                                                                iconSize: value,
                                                            },
                                                        })
                                                    }
                                                    onReset={() =>
                                                        setAttributes({
                                                            zoloCursors: {
                                                                ...zoloCursors,
                                                                iconSize: '',
                                                            },
                                                        })
                                                    }
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    noUits={true}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        }
                    />
                </>
            )}

            {active && position === 'layout' && (
                <>
                    <hr></hr>

                    <ToggleControl
                        label={__('Disable Default Cursor', 'zoloblocks')}
                        checked={zoloCursors.disabledDefault}
                        onChange={() =>
                            setAttributes({
                                zoloCursors: {
                                    ...zoloCursors,
                                    disabledDefault: !zoloCursors.disabledDefault,
                                },
                            })
                        }
                    />
                </>
            )}
        </ZoloPanelBody>
    );
};
export default Inspector;
