/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    SelectControl,
    ToggleControl,
    CardDivider,
    BaseControl,
    Button,
    __experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
import objAttributes from './attributes';

const {
    ColorControl,
    ZoloIconPicker,
    BoxShadowControl,
    TabPanelControl,
    HeaderTabs,
    LinkControl,
    ImageAvatar,
    AdvancedOptions,
    ZoloPanelBody,
    ResAlignmentControl,
    ResDimensionsControl,
    TypographyDropdown,
    ImageSizes,
    NormalBGControl,
    SimpleRangeControl,
    ResRangeControl,
    BorderControl,
} = window.zoloModule;

import { STYLES, VIDEO_ALIGN } from './constants';

export default function Edit(props) {
    const { attributes, setAttributes, block } = props;

    const {
        resMode,

        // settings
        styles,
        autoPlay,
        loop,
        mute,
        playerControl,
        smallButton,
        hoverPlayPause,
        video,
        videoLink,
        posterImage,
        imageRes,
        startTime,
        endTime,
        startEnd,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);

    return (
        <>
            <InspectorControls>
                <HeaderTabs
                    block="zolo/video"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    generalTab={
                        <>
                            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <SelectControl
                                    label={__('Presets', 'zoloblocks')}
                                    value={styles}
                                    options={STYLES}
                                    onChange={(value) =>
                                        setAttributes({
                                            styles: value,
                                        })
                                    }
                                />
                                <div className="zolo-custom-heading">{__('show/hide elements', 'zoloblocks')}</div>
                                <ToggleControl
                                    label={__('Autoplay', 'zoloblocks')}
                                    checked={autoPlay}
                                    onChange={() =>
                                        setAttributes({
                                            autoPlay: !autoPlay,
                                            mute: !autoPlay ? true : mute,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Loop', 'zoloblocks')}
                                    checked={loop}
                                    onChange={() =>
                                        setAttributes({
                                            loop: !loop,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Mute', 'zoloblocks')}
                                    checked={mute}
                                    onChange={() =>
                                        setAttributes({
                                            mute: !mute,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Player Control', 'zoloblocks')}
                                    checked={playerControl}
                                    onChange={() =>
                                        setAttributes({
                                            playerControl: !playerControl,
                                        })
                                    }
                                />

                                {playerControl === false && (
                                    <ToggleControl
                                        label={__('Small Play Button', 'zoloblocks')}
                                        checked={smallButton}
                                        onChange={() =>
                                            setAttributes({
                                                smallButton: !smallButton,
                                            })
                                        }
                                    />
                                )}

                                {loop === false && (
                                    <ToggleControl
                                        label={__('Start/End Time', 'zoloblocks')}
                                        checked={startEnd}
                                        onChange={() =>
                                            setAttributes({
                                                startEnd: !startEnd,
                                            })
                                        }
                                    />
                                )}

                                <ToggleControl
                                    label={__('Hover Play/pause', 'zoloblocks')}
                                    checked={hoverPlayPause}
                                    onChange={() =>
                                        setAttributes({
                                            hoverPlayPause: !hoverPlayPause,
                                        })
                                    }
                                />

                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={VIDEO_ALIGN}
                                    requiredProps={requiredProps}
                                />

                                <CardDivider />
                                <BaseControl label={__('Choose Video', 'zoloblocks')} className="zolo-flex-col-control">
                                    {video && (
                                        <MediaUpload
                                            onSelect={(file) => setAttributes({ video: file.url })}
                                            type="file"
                                            value={video}
                                            render={({ open }) => (
                                                <Button
                                                    style={{ marginBottom: '10px' }}
                                                    className="zolo-action-button"
                                                    variant="primary"
                                                    onClick={open}
                                                >
                                                    {video ? __('Change Video File', 'zoloblocks') : __('Choose Video File', 'zoloblocks')}
                                                </Button>
                                            )}
                                            allowedTypes={['video']}
                                            accept="video/*"
                                            onSelectURL={(url) => {
                                                setAttributes({
                                                    video: {
                                                        url,
                                                    },
                                                });
                                            }}
                                        />
                                    )}
                                </BaseControl>

                                <BaseControl label={__('Choose Poster', 'zoloblocks')} className="zolo-flex-col-control">
                                    {posterImage ? (
                                        <ImageAvatar
                                            imageUrl={posterImage && posterImage.url}
                                            imageId={posterImage && posterImage.id}
                                            onDeleteImage={() =>
                                                setAttributes({
                                                    posterImage: null,
                                                })
                                            }
                                            onEditImage={(media) =>
                                                setAttributes({
                                                    posterImage: media,
                                                })
                                            }
                                        />
                                    ) : (
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    posterImage: {
                                                        id: media.id,
                                                        url: media.url,
                                                        alt: media.alt,
                                                        sizes: media.sizes,
                                                    },
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            value={posterImage && posterImage.id}
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
                                                    {__(' Upload Poster', 'zoloblocks')}
                                                </Button>
                                            )}
                                        />
                                    )}
                                </BaseControl>

                                <ImageSizes
                                    label={__('Resolution', 'zoloblocks')}
                                    value={imageRes}
                                    onChange={(value) =>
                                        setAttributes({
                                            imageRes: value,
                                        })
                                    }
                                />

                                <LinkControl
                                    label={__('Link', 'zoloblocks')}
                                    value={videoLink}
                                    onChange={(value) =>
                                        setAttributes({
                                            videoLink: value,
                                        })
                                    }
                                />

                                {loop ? (
                                    true
                                ) : (
                                    <>
                                        {startEnd && (
                                            <>
                                                <NumberControl
                                                    style={{ display: 'contents' }}
                                                    label={__('Start Time', 'zoloblocks')}
                                                    value={startTime}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            startTime: Number(value),
                                                        })
                                                    }
                                                    min={0}
                                                />

                                                <NumberControl
                                                    style={{ display: 'contents' }}
                                                    label={__('End Time', 'zoloblocks')}
                                                    value={endTime}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            endTime: Number(value),
                                                        })
                                                    }
                                                    min={0}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                            </ZoloPanelBody>
                        </>
                    }
                    styleTab={<></>}
                    advancedTab={
                        <>
                            <AdvancedOptions
                                attributes={attributes}
                                setAttributes={setAttributes}
                                requiredProps={requiredProps}
                                block="zolo/video"
                            />
                        </>
                    }
                />
            </InspectorControls>
        </>
    );
}
