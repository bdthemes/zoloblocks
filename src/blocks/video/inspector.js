/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { SelectControl, TextControl, ToggleControl, BaseControl, Button } from '@wordpress/components';
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

import {
    PLAYER_WIDTH,
    PLAYER_ALIGNMENT,
    TIME_DURATION,
    DEFAULT_VOLUME,
    CONTROL_PADDING,
    CONTROL_BG_COLOR,
    NORMAL_PLAY_BUTTON_BG,
    NORMAL_PLAY_BORDER,
    NORMAL_PLAY_BORDER_RADIUS,
    NORMAL_PLAY_BOX_SHADOW,
    NORMAL_PLAY_ICON_SIZE,
    HOVER_PLAY_BUTTON_BG,
    HOVER_PLAY_BOX_SHADOW,
    SEEK_BAR_HEIGHT,
    SEEK_BAR_BORDER_RADIUS,
    NORMAL_VOLUME_BG,
    NORMAL_VOLUME_BORDER,
    NORMAL_VOLUME_BORDER_RADIUS,
    NORMAL_VOLUME_BOX_SHADOW,
    NORMAL_VOLUME_ICON_SIZE,
    HOVER_VOLUME_BG,
    HOVER_VOLUME_BOX_SHADOW,
    BAR_HEIGHT,
    VOLUME_BAR_BORDER_RADIUS,
    NORMAL_FULL_BUTTON_BG,
    NORMAL_FULL_BORDER,
    NORMAL_FULL_BORDER_RADIUS,
    NORMAL_FULL_BOX_SHADOW,
    NORMAL_FULL_ICON_SIZE,
    HOVER_FULL_BUTTON_BG,
    HOVER_FULL_BOX_SHADOW,
} from './constants';

import { TIME_TYPO } from './constants/typoPrefixConstants';

export default function Edit(props) {
    const { attributes, setAttributes, block } = props;

    const {
        resMode,

        // settings
        introTitle,
        externalUrl,
        videoLink,
        videoUrl,
        imagePoster,
        titleHide,
        seekBar,
        timeDuration,
        playerControl,
        autoPlay,
        loop,
        mute,
        volumeBar,
        fullScreen,
        smoothEnter,
        keyboardEnable,
        stickyMode,
        timeColor,
        iconColor,
        hoverColor,
        seekBarColor,
        seekBarActiveColor,
        volumeColor,
        volumeHoverColor,
        volumeBarColor,
        volumeBarActiveColor,
        fullColor,
        hoverFullColor,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    const onSelectFile = (file) => {
        const videoFile = file.url;

        setAttributes({
            videoUrl: videoFile,
        });
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
                            <ZoloPanelBody title={__('Video Source', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <TextControl
                                    label={__('Title', 'zoloblocks')}
                                    value={introTitle}
                                    onChange={(value) =>
                                        setAttributes({
                                            introTitle: value,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('External Url', 'zoloblocks')}
                                    checked={externalUrl}
                                    onChange={() =>
                                        setAttributes({
                                            externalUrl: !externalUrl,
                                        })
                                    }
                                />

                                {externalUrl ? (
                                    <>
                                        <LinkControl
                                            label={__('Link', 'zoloblocks')}
                                            value={videoLink}
                                            onChange={(value) =>
                                                setAttributes({
                                                    videoLink: value,
                                                })
                                            }
                                        />
                                    </>
                                ) : (
                                    <>
                                        <MediaUpload
                                            onSelect={onSelectFile}
                                            type="file"
                                            value={videoUrl}
                                            render={({ open }) => (
                                                <Button
                                                    style={{ marginBottom: '10px' }}
                                                    className="zolo-action-button"
                                                    variant="primary"
                                                    onClick={open}
                                                >
                                                    {videoUrl
                                                        ? __('Change Video File', 'zoloblocks')
                                                        : __('Choose Video File', 'zoloblocks')}
                                                </Button>
                                            )}
                                            allowedTypes={['text/video']}
                                        />
                                    </>
                                )}

                                <BaseControl label={__('Choose Poster', 'zoloblocks')}>
                                    {imagePoster ? (
                                        <ImageAvatar
                                            imageUrl={imagePoster && imagePoster.url}
                                            imageId={imagePoster && imagePoster.id}
                                            onDeleteImage={() =>
                                                setAttributes({
                                                    imagePoster: null,
                                                })
                                            }
                                            onEditImage={(media) =>
                                                setAttributes({
                                                    imagePoster: media,
                                                })
                                            }
                                        />
                                    ) : (
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    imagePoster: {
                                                        id: media.id,
                                                        url: media.url,
                                                        sizes: media.sizes,
                                                        alt: media.alt,
                                                        caption: media.caption,
                                                    },
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            value={imagePoster && imagePoster.id}
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

                                <ResRangeControl
                                    label={__('Player Width', 'zoloblocks')}
                                    controlName={PLAYER_WIDTH}
                                    requiredProps={requiredProps}
                                    min={40}
                                    max={1200}
                                />

                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={PLAYER_ALIGNMENT}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>

                            <ZoloPanelBody title={__('Additional', 'zoloblocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Title Hide', 'zoloblocks')}
                                    checked={titleHide}
                                    onChange={() =>
                                        setAttributes({
                                            titleHide: !titleHide,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Seek Bar', 'zoloblocks')}
                                    checked={seekBar}
                                    onChange={() =>
                                        setAttributes({
                                            seekBar: !seekBar,
                                        })
                                    }
                                />

                                <SelectControl
                                    label={__('Time/Duration', 'zoloblocks')}
                                    value={timeDuration}
                                    options={TIME_DURATION}
                                    onChange={(value) =>
                                        setAttributes({
                                            timeDuration: value,
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

                                <ToggleControl
                                    label={__('Auto Play', 'zoloblocks')}
                                    checked={autoPlay}
                                    onChange={() =>
                                        setAttributes({
                                            autoPlay: !autoPlay,
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
                                    label={__('Volume Mute/Unmute', 'zoloblocks')}
                                    checked={mute}
                                    onChange={() =>
                                        setAttributes({
                                            mute: !mute,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Volume Bar', 'zoloblocks')}
                                    checked={volumeBar}
                                    onChange={() =>
                                        setAttributes({
                                            volumeBar: !volumeBar,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Fullscreen Control', 'zoloblocks')}
                                    checked={fullScreen}
                                    onChange={() =>
                                        setAttributes({
                                            fullScreen: !fullScreen,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Smooth Enter', 'zoloblocks')}
                                    checked={smoothEnter}
                                    onChange={() =>
                                        setAttributes({
                                            smoothEnter: !smoothEnter,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Keyboard Enable', 'zoloblocks')}
                                    checked={keyboardEnable}
                                    onChange={() =>
                                        setAttributes({
                                            keyboardEnable: !keyboardEnable,
                                        })
                                    }
                                    help={__('for example: when you press p=Play, m=Mute, >=Volume + <=Volume -, l=Loop etc', 'zoloblocks')}
                                />

                                <ResRangeControl
                                    label={__('Default Volume', 'zoloblocks')}
                                    controlName={DEFAULT_VOLUME}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={1}
                                    step={0.1}
                                />

                                <ToggleControl
                                    label={__('Sticky Mode', 'zoloblocks')}
                                    checked={stickyMode}
                                    onChange={() =>
                                        setAttributes({
                                            stickyMode: !stickyMode,
                                        })
                                    }
                                    help={__('When you activate is you video will sticky at playing time.', 'zoloblocks')}
                                />
                            </ZoloPanelBody>
                        </>
                    }
                    styleTab={
                        <>
                            <ZoloPanelBody title={__('Control Area', 'zoloblocks')} panelProps={props} firstOpen={true} stylePanel={true}>
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={CONTROL_PADDING}
                                    requiredProps={requiredProps}
                                />

                                <NormalBGControl
                                    label={__('Background Color', 'zoloblocks')}
                                    controlName={CONTROL_BG_COLOR}
                                    requiredProps={requiredProps}
                                    noMainBGImg={true}
                                />
                            </ZoloPanelBody>

                            <ZoloPanelBody title={__('Play/Pause Button', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Icon Color', 'zoloblocks')}
                                                color={iconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconColor: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl
                                                label={__('Background Color', 'zoloblocks')}
                                                controlName={NORMAL_PLAY_BUTTON_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />

                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={NORMAL_PLAY_BORDER}
                                                requiredProps={requiredProps}
                                            />

                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={NORMAL_PLAY_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                            />

                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={NORMAL_PLAY_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                            />

                                            <ResRangeControl
                                                label={__('Icon Size', 'zoloblocks')}
                                                controlName={NORMAL_PLAY_ICON_SIZE}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Hover Color', 'zoloblocks')}
                                                color={hoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        hoverColor: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl
                                                label={__('Background Color', 'zoloblocks')}
                                                controlName={HOVER_PLAY_BUTTON_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />

                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={HOVER_PLAY_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>

                            {timeDuration !== 'none' && (
                                <ZoloPanelBody title={__('Time/Duration', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={timeColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                timeColor: value,
                                            })
                                        }
                                    />

                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={TIME_TYPO}
                                        requiredProps={requiredProps}
                                    />
                                </ZoloPanelBody>
                            )}

                            {seekBar && (
                                <ZoloPanelBody title={__('Seek Bar', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                    <ResRangeControl
                                        label={__('Bar Height', 'zoloblocks')}
                                        controlName={SEEK_BAR_HEIGHT}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                    />

                                    <ColorControl
                                        label={__('Bar Color', 'zoloblocks')}
                                        color={seekBarColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                seekBarColor: value,
                                            })
                                        }
                                    />

                                    <ColorControl
                                        label={__('Active Color', 'zoloblocks')}
                                        color={seekBarActiveColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                seekBarActiveColor: value,
                                            })
                                        }
                                    />

                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={SEEK_BAR_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                    />
                                </ZoloPanelBody>
                            )}

                            {mute && (
                                <ZoloPanelBody title={__('Volume Button', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={volumeColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            volumeColor: value,
                                                        })
                                                    }
                                                />

                                                <NormalBGControl
                                                    label={__('Background Color', 'zoloblocks')}
                                                    controlName={NORMAL_VOLUME_BG}
                                                    requiredProps={requiredProps}
                                                    noMainBGImg={true}
                                                />

                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={NORMAL_VOLUME_BORDER}
                                                    requiredProps={requiredProps}
                                                />

                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={NORMAL_VOLUME_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                />

                                                <BoxShadowControl
                                                    label={__('Box Shadow', 'zoloblocks')}
                                                    controlName={NORMAL_VOLUME_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                />

                                                <ResRangeControl
                                                    label={__('Icon Size', 'zoloblocks')}
                                                    controlName={NORMAL_VOLUME_ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={100}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Hover Color', 'zoloblocks')}
                                                    color={volumeHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            hoveVoluColor: value,
                                                        })
                                                    }
                                                />

                                                <NormalBGControl
                                                    label={__('Background Color', 'zoloblocks')}
                                                    controlName={HOVER_VOLUME_BG}
                                                    requiredProps={requiredProps}
                                                    noMainBGImg={true}
                                                />

                                                <BoxShadowControl
                                                    label={__('Box Shadow', 'zoloblocks')}
                                                    controlName={HOVER_VOLUME_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            )}

                            {volumeBar && (
                                <ZoloPanelBody title={__('Volume Bar', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                    <ResRangeControl
                                        label={__('Bar Height', 'zoloblocks')}
                                        controlName={BAR_HEIGHT}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                    />

                                    <ColorControl
                                        label={__('Bar Color', 'zoloblocks')}
                                        color={volumeBarColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                seekBarColor: value,
                                            })
                                        }
                                    />

                                    <ColorControl
                                        label={__('Active Color', 'zoloblocks')}
                                        color={volumeBarActiveColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                seekBarActiveColor: value,
                                            })
                                        }
                                    />

                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={VOLUME_BAR_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                    />
                                </ZoloPanelBody>
                            )}

                            {fullScreen && (
                                <ZoloPanelBody title={__('Fullscreen Button', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Icon Color', 'zoloblocks')}
                                                    color={fullColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            fullScreenColor: value,
                                                        })
                                                    }
                                                />

                                                <NormalBGControl
                                                    label={__('Background Color', 'zoloblocks')}
                                                    controlName={NORMAL_FULL_BUTTON_BG}
                                                    requiredProps={requiredProps}
                                                    noMainBGImg={true}
                                                />

                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={NORMAL_FULL_BORDER}
                                                    requiredProps={requiredProps}
                                                />

                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={NORMAL_FULL_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                />

                                                <BoxShadowControl
                                                    label={__('Box Shadow', 'zoloblocks')}
                                                    controlName={NORMAL_FULL_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                />

                                                <ResRangeControl
                                                    label={__('Icon Size', 'zoloblocks')}
                                                    controlName={NORMAL_FULL_ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={100}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Hover Color', 'zoloblocks')}
                                                    color={hoverFullColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            hoverColor: value,
                                                        })
                                                    }
                                                />

                                                <NormalBGControl
                                                    label={__('Background Color', 'zoloblocks')}
                                                    controlName={HOVER_FULL_BUTTON_BG}
                                                    requiredProps={requiredProps}
                                                    noMainBGImg={true}
                                                />

                                                <BoxShadowControl
                                                    label={__('Box Shadow', 'zoloblocks')}
                                                    controlName={HOVER_FULL_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            )}
                        </>
                    }
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
