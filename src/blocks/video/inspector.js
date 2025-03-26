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
    TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
import objAttributes from './attributes';

const { HeaderTabs, LinkControl, ImageAvatar, AdvancedOptions, ZoloPanelBody, ImageSizes, IconicBtnGroup, ResAlignmentControl } =
    window.zoloModule;

import { VIDEO_SOURCE, VIDEO_ALIGN, POPUP_BUTTON_ALIGNMENT } from './constants';
import { TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';

export default function Edit(props) {
    const { attributes, setAttributes, block } = props;

    const {
        resMode,
        videoSource,
        autoPlay,
        loop,
        mute,
        playerControl,
        customVideo,
        externalCustomVideoUrl,
        posterImage,
        imageRes,
        startTime,
        endTime,
        youtubeUrl,
        vimeoUrl,
        isExternalCustomUrl,
        videoLayoutType,
        isPrivacyMode,
        isLazyLoad,
        youtubeModestBranding,
        showCaption,
        popoupImage,
        popupImageSizes,
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
                                    label={__('Video Source', 'zoloblocks')}
                                    value={videoSource}
                                    options={VIDEO_SOURCE}
                                    onChange={(value) =>
                                        setAttributes({
                                            videoSource: value,
                                        })
                                    }
                                />
                                {videoSource === 'youtube' && (
                                    <LinkControl
                                        label={__('URL', 'zoloblocks')}
                                        value={youtubeUrl || ''}
                                        onChange={(value) =>
                                            setAttributes({
                                                youtubeUrl: value,
                                            })
                                        }
                                    />
                                )}
                                {videoSource === 'vimeo' && (
                                    <LinkControl
                                        label={__('URL', 'zoloblocks')}
                                        value={vimeoUrl || ''}
                                        onChange={(value) =>
                                            setAttributes({
                                                vimeoUrl: value,
                                            })
                                        }
                                    />
                                )}
                                {videoSource === 'custom' && (
                                    <>
                                        <ToggleControl
                                            label={__('External URL', 'zoloblocks')}
                                            checked={isExternalCustomUrl}
                                            onChange={(value) =>
                                                setAttributes({
                                                    isExternalCustomUrl: value,
                                                })
                                            }
                                        />
                                        {isExternalCustomUrl && (
                                            <LinkControl
                                                label={__('Link', 'zoloblocks')}
                                                value={externalCustomVideoUrl || ''}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        externalCustomVideoUrl: value,
                                                    })
                                                }
                                            />
                                        )}

                                        {!isExternalCustomUrl && (
                                            <BaseControl label={__('Choose Video', 'zoloblocks')} className="zolo-flex-col-control">
                                                <MediaUpload
                                                    onSelect={(file) => setAttributes({ customVideo: file.url })}
                                                    type="file"
                                                    value={customVideo}
                                                    render={({ open }) => (
                                                        <Button
                                                            style={{ marginBottom: '10px' }}
                                                            className="zolo-action-button"
                                                            variant="primary"
                                                            onClick={open}
                                                        >
                                                            {customVideo
                                                                ? __('Change Video File', 'zoloblocks')
                                                                : __('Choose Video File', 'zoloblocks')}
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
                                            </BaseControl>
                                        )}
                                    </>
                                )}

                                <div className="zolo-flex-col-control-tab">
                                    <IconicBtnGroup
                                        label={__('Video Type', 'zoloblocks')}
                                        value={videoLayoutType}
                                        onChange={(value) =>
                                            setAttributes({
                                                videoLayoutType: value,
                                            })
                                        }
                                        options={[
                                            { label: 'Inline', value: 'inline' },
                                            { label: 'Popup', value: 'popup' },
                                        ]}
                                    />
                                </div>

                                {videoLayoutType === 'popup' && (
                                    <>
                                        <div className="zolo-flex-col-control-tab">
                                            <IconicBtnGroup
                                                label={__('Popup Type', 'zoloblocks')}
                                                value={attributes?.popupType}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        popupType: value,
                                                    })
                                                }
                                                options={[
                                                    { label: 'Button', value: 'button' },
                                                    { label: 'Image/Button', value: 'image' },
                                                ]}
                                            />
                                        </div>

                                        {/* {attributes?.popupType === 'button' && (
                                            <> */}
                                        <ToggleControl
                                            label={__('Button Label', 'zoloblocks')}
                                            checked={attributes?.popupButtonLebelWrap}
                                            onChange={() =>
                                                setAttributes({
                                                    popupButtonLebelWrap: !attributes?.popupButtonLebelWrap,
                                                })
                                            }
                                        />

                                        {attributes?.popupButtonLebelWrap && (
                                            <>
                                                <TextControl
                                                    label={__('Sub Label', 'zoloblocks')}
                                                    value={attributes?.popupButtonSubLabel}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            popupButtonSubLabel: value,
                                                        })
                                                    }
                                                />
                                                <TextControl
                                                    label={__('Label', 'zoloblocks')}
                                                    value={attributes?.popupButtonLabel}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            popupButtonLabel: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                        {attributes?.popupType === 'button' && (
                                            <ResAlignmentControl
                                                label={__('Alignment', 'zoloblocks')}
                                                controlName={POPUP_BUTTON_ALIGNMENT}
                                                requiredProps={requiredProps}
                                                alignOptions={TEXT_ALIGN_OPTIONS}
                                            />
                                        )}

                                        {attributes?.popupType === 'image' && (
                                            <>
                                                <BaseControl label={__('Choose Poster', 'zoloblocks')} className="zolo-flex-col-control">
                                                    {popoupImage ? (
                                                        <ImageAvatar
                                                            imageUrl={popoupImage && popoupImage.url}
                                                            imageId={popoupImage && popoupImage.id}
                                                            onDeleteImage={() =>
                                                                setAttributes({
                                                                    popoupImage: null,
                                                                })
                                                            }
                                                            onEditImage={(media) =>
                                                                setAttributes({
                                                                    popoupImage: media,
                                                                })
                                                            }
                                                        />
                                                    ) : (
                                                        <MediaUpload
                                                            onSelect={(media) => {
                                                                setAttributes({
                                                                    popoupImage: {
                                                                        id: media.id,
                                                                        url: media.url,
                                                                        alt: media.alt,
                                                                        sizes: media.sizes,
                                                                    },
                                                                });
                                                            }}
                                                            allowedTypes={['image']}
                                                            value={popoupImage && popoupImage.id}
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
                                                    value={popupImageSizes}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            popupImageSizes: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                    </>
                                )}

                                <CardDivider />
                                <NumberControl
                                    style={{ display: 'contents' }}
                                    label={__('Start Time (in seconds)', 'zoloblocks')}
                                    value={startTime}
                                    onChange={(value) =>
                                        setAttributes({
                                            startTime: Number(value),
                                        })
                                    }
                                    min={0}
                                />

                                {videoSource !== 'vimeo' && (
                                    <NumberControl
                                        style={{ display: 'contents' }}
                                        label={__('End Time (in seconds)', 'zoloblocks')}
                                        value={endTime}
                                        onChange={(value) =>
                                            setAttributes({
                                                endTime: Number(value),
                                            })
                                        }
                                        min={0}
                                    />
                                )}

                                <div className="zolo-custom-heading">{__('Video Options', 'zoloblocks')}</div>
                                <ToggleControl
                                    label={__('Autoplay', 'zoloblocks')}
                                    checked={autoPlay}
                                    onChange={() =>
                                        setAttributes({
                                            autoPlay: !autoPlay,
                                        })
                                    }
                                />
                                <p className="components-base-control zolo-inspector-notice">
                                    Note: Autoplay is affected by{' '}
                                    <a
                                        href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google's autoplay policy
                                    </a>{' '}
                                    on Chrome browsers.
                                </p>

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
                                {videoSource !== 'vimeo' && (
                                    <>
                                        <ToggleControl
                                            label={__('Player Control', 'zoloblocks')}
                                            checked={playerControl}
                                            onChange={() =>
                                                setAttributes({
                                                    playerControl: !playerControl,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__('Lazy Load', 'zoloblocks')}
                                            checked={isLazyLoad}
                                            onChange={() =>
                                                setAttributes({
                                                    isLazyLoad: !isLazyLoad,
                                                })
                                            }
                                        />
                                    </>
                                )}
                                {videoSource == 'custom' && (
                                    <>
                                        <ToggleControl
                                            label={__('Download Button', 'zoloblocks')}
                                            checked={attributes?.showDownloadButton}
                                            onChange={() =>
                                                setAttributes({
                                                    showDownloadButton: !attributes?.showDownloadButton,
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__('Preload', 'zoloblocks')}
                                            value={attributes?.preload}
                                            onChange={(value) => setAttributes({ preload: value })}
                                            options={[
                                                { label: __('None', 'zoloblocks'), value: 'none' },
                                                { label: __('Metadata', 'zoloblocks'), value: 'metadata' },
                                                { label: __('Auto', 'zoloblocks'), value: 'auto' },
                                            ]}
                                        />
                                        <p className="components-base-control zolo-inspector-notice">
                                            Preload attribute lets you specify how the video should be loaded when the page loads.{' '}
                                            <a
                                                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-preload"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Learn more
                                            </a>
                                        </p>
                                    </>
                                )}
                                {videoSource == 'youtube' && (
                                    <>
                                        <ToggleControl
                                            label={__('Captions', 'zoloblocks')}
                                            checked={showCaption}
                                            onChange={() =>
                                                setAttributes({
                                                    showCaption: !showCaption,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__('Modest Branding', 'zoloblocks')}
                                            checked={youtubeModestBranding}
                                            onChange={() =>
                                                setAttributes({
                                                    youtubeModestBranding: !youtubeModestBranding,
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__('Suggested Videos', 'zoloblocks')}
                                            value={attributes?.youtubeSuggestedvideoType}
                                            options={[
                                                { label: __('Current video channel', 'zoloblocks'), value: '0' },
                                                { label: __('Any video', 'zoloblocks'), value: '1' },
                                            ]}
                                            onChange={(value) => setAttributes({ youtubeSuggestedvideoType: value })}
                                        />
                                    </>
                                )}
                                {videoSource !== 'custom' && (
                                    <>
                                        <ToggleControl
                                            label={__('Privacy Mode', 'zoloblocks')}
                                            checked={isPrivacyMode}
                                            onChange={() =>
                                                setAttributes({
                                                    isPrivacyMode: !isPrivacyMode,
                                                })
                                            }
                                        />
                                        <p className="components-base-control zolo-inspector-notice">
                                            When you turn on privacy mode, YouTube/Vimeo won't store information about visitors on your
                                            website unless they play the video.
                                        </p>
                                    </>
                                )}
                            </ZoloPanelBody>
                            <ZoloPanelBody title={__('Poster', 'zoloblocks')} panelProps={props} stylePanel={true}>
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
