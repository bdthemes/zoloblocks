/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloTextareaControl,
    ZoloBaseControl,
    ZoloButton,
    ZoloTextControl,
    ZoloCardDivider,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    TabPanelControl,
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
    LIGHT_BOX_SELECT,
    LIGHT_BOX_CONTENT,
    POSTER_HEIGHT,
    BUTTON_ALIGN,
    POSTER_BG_COLOR,
    POSTER_BORDER,
    POSTER_BORDER_RADIUS,
    POSTER_PADDING,
    POSTER_BOX_SHADOW,
    HOVER_POSTER_BG_COLOR,
    HOVER_POSTER_BORDER_RADIUS,
    HOVER_POSTER_BOX_SHADOW,
    BUTTON_BG_COLOR,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_PADDING,
    BUTTON_BOX_SHADOW,
    HOVER_BUTTON_BG_COLOR,
    HOVER_BUTTON_BORDER_RADIUS,
    HOVER_BUTTON_BOX_SHADOW,
    CONTENT_WIDTH,
    CONTENT_HEIGHT,
    ICON_BG_COLOR,
    ICON_H_BG_COLOR,
    PLAY_BTN_ICON_SIZE,
    PLAY_BTN_PADDING,
    PLAY_BTN_MARGIN,
    PLAY_BTN_BORDER,
    PLAY_BTN_BORDER_RADIUS,
    PLAY_BTN_BOX_SHADOW,
    PLAY_BTN_H_BOX_SHADOW,
} from './constants';

import { BUTTON_TYPOGRAPHY, BUTTON_SUB_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Edit(props) {
    const { attributes, setAttributes } = props;

    const {
        resMode,
        // settings
        lightboxType,
        imagePoster,
        posterIcon,
        showPosterIcon,
        imageSize,
        buttonText,
        enableHeading,
        enableSubHeading,
        buttonHeadingText,
        contentType,
        contentCaption,
        contentImage,
        youtubeUrl,
        vimeoUrl,
        googleMapUrl,
        titleColor,
        hoverTitleColor,
        titleSubColor,
        hoverTitleSubColor,
        iconColor,
        iconHColor,
        playBtnBorderHColor,
        imageSizeLightbox,
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
                    block="zolo/lightbox"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    generalTab={
                        <>
                            <ZoloPanelBody title={__('Toggler', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <ZoloSelectControl
                                    label={__('Type', 'zoloblocks')}
                                    value={lightboxType}
                                    onChange={(value) =>
                                        setAttributes({
                                            lightboxType: value,
                                        })
                                    }
                                    options={LIGHT_BOX_SELECT}
                                />

                                {lightboxType === 'poster' && (
                                    <>
                                        <ZoloCardDivider />
                                        <ZoloBaseControl label={__('Poster Image', 'zoloblocks')} className="zolo-flex-col-control">
                                            {imagePoster ? (
                                                <ImageAvatar
                                                    imageUrl={imagePoster && imagePoster.url}
                                                    onDeleteImage={() =>
                                                        setAttributes({
                                                            imagePoster: null,
                                                        })
                                                    }
                                                    imageId={imagePoster && imagePoster.id}
                                                    onEditImage={(media) => {
                                                        setAttributes({
                                                            imagePoster: media,
                                                        });
                                                    }}
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
                                                        <ZoloButton className="zolo-image-upload-btn" onClick={open}>
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
                                                        </ZoloButton>
                                                    )}
                                                />
                                            )}
                                        </ZoloBaseControl>

                                        <ImageSizes
                                            label={__('Resolution', 'zoloblocks')}
                                            value={imageSize}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imageSize: value,
                                                })
                                            }
                                        />

                                        <ResRangeControl
                                            label={__('Poster Height', 'zoloblocks')}
                                            controlName={POSTER_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={1200}
                                        />
                                        <ZoloCardDivider />
                                        <ZoloToggleControl
                                            label={__('Play Button', 'zoloblocks')}
                                            checked={showPosterIcon}
                                            onChange={() =>
                                                setAttributes({
                                                    showPosterIcon: !showPosterIcon,
                                                })
                                            }
                                        />

                                        {showPosterIcon && (
                                            <>
                                                <ZoloIconPicker
                                                    key="posterIcon"
                                                    label={__('Icon', 'zoloblocks')}
                                                    value={posterIcon}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            posterIcon: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                    </>
                                )}

                                {lightboxType === 'button' && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                                        <ZoloToggleControl
                                            label={__('Title', 'zoloblocks')}
                                            checked={enableHeading}
                                            onChange={() =>
                                                setAttributes({
                                                    enableHeading: !enableHeading,
                                                })
                                            }
                                        />
                                        <ZoloToggleControl
                                            label={__('Sub Title', 'zoloblocks')}
                                            checked={enableSubHeading}
                                            onChange={() =>
                                                setAttributes({
                                                    enableSubHeading: !enableSubHeading,
                                                })
                                            }
                                        />
                                        <ZoloToggleControl
                                            label={__('Play Button', 'zoloblocks')}
                                            checked={showPosterIcon}
                                            onChange={() =>
                                                setAttributes({
                                                    showPosterIcon: !showPosterIcon,
                                                })
                                            }
                                        />
                                        <ZoloCardDivider />
                                        {enableHeading && (
                                            <>
                                                <ZoloTextControl
                                                    label={__('Title', 'zoloblocks')}
                                                    value={buttonText}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            buttonText: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                        {enableSubHeading && (
                                            <ZoloTextControl
                                                label={__('Sub Title', 'zoloblocks')}
                                                value={buttonHeadingText}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        buttonHeadingText: value,
                                                    })
                                                }
                                            />
                                        )}
                                        {showPosterIcon && (
                                            <>
                                                <ZoloCardDivider />
                                                <ZoloIconPicker
                                                    label={__('Play Button Icon', 'zoloblocks')}
                                                    value={posterIcon}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            posterIcon: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                        <ZoloCardDivider />
                                        <ResAlignmentControl
                                            label={__('Alignment', 'zoloblocks')}
                                            controlName={BUTTON_ALIGN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>

                            <ZoloPanelBody title={__('Lightbox Content', 'zoloblocks')} panelProps={props} firstOpen={false}>
                                <ZoloSelectControl
                                    label={__('Type', 'zoloblocks')}
                                    value={contentType}
                                    onChange={(value) =>
                                        setAttributes({
                                            contentType: value,
                                        })
                                    }
                                    options={applyFilters('zolo.presets.lightbox', LIGHT_BOX_CONTENT)}
                                />

                                {contentType === 'image' && (
                                    <>
                                        <ZoloBaseControl label={__('Image Source', 'zoloblocks')} className="zolo-flex-col-control">
                                            {contentImage ? (
                                                <ImageAvatar
                                                    imageUrl={contentImage && contentImage.url}
                                                    onDeleteImage={() =>
                                                        setAttributes({
                                                            contentImage: {
                                                                id: null,
                                                                url: null,
                                                                sizes: null,
                                                                alt: null,
                                                                caption: null,
                                                            },
                                                        })
                                                    }
                                                    imageId={contentImage && contentImage.id}
                                                    onEditImage={(media) => {
                                                        setAttributes({
                                                            contentImage: media,
                                                        });
                                                    }}
                                                />
                                            ) : (
                                                <MediaUpload
                                                    onSelect={(media) => {
                                                        setAttributes({
                                                            contentImage: {
                                                                id: media.id,
                                                                url: media.url,
                                                                sizes: media.sizes,
                                                                alt: media.alt,
                                                                caption: media.caption,
                                                            },
                                                        });
                                                    }}
                                                    allowedTypes={['image']}
                                                    value={contentImage && contentImage.id}
                                                    render={({ open }) => (
                                                        <ZoloButton className="zolo-image-upload-btn" onClick={open}>
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
                                                        </ZoloButton>
                                                    )}
                                                />
                                            )}
                                        </ZoloBaseControl>

                                        <ImageSizes
                                            label={__('Resolution', 'zoloblocks')}
                                            value={imageSizeLightbox}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imageSizeLightbox: value,
                                                })
                                            }
                                        />
                                    </>
                                )}

                                {contentType === 'youtube' && (
                                    <>
                                        <ZoloTextareaControl
                                            label={__('Youtube Video Url', 'zoloblocks')}
                                            value={youtubeUrl}
                                            onChange={(value) =>
                                                setAttributes({
                                                    youtubeUrl: value,
                                                })
                                            }
                                        />
                                    </>
                                )}
                                {contentType === 'vimeo' && (
                                    <>
                                        {/* <LinkControl
                                            label={__('Vimeo', 'zoloblocks')}
                                            value={vimeoUrl}
                                            onChange={(value) =>
                                                setAttributes({
                                                    vimeoUrl: value,
                                                })
                                            }
                                        /> */}
                                        <ZoloTextareaControl
                                            label={__('Vimeo Video Url', 'zoloblocks')}
                                            value={vimeoUrl}
                                            onChange={(value) =>
                                                setAttributes({
                                                    vimeoUrl: value,
                                                })
                                            }
                                        />
                                    </>
                                )}

                                {contentType === 'googleMap' && (
                                    <ZoloTextareaControl
                                        label={__('Google Map Embed Url', 'zoloblocks')}
                                        value={googleMapUrl}
                                        onChange={(value) =>
                                            setAttributes({
                                                googleMapUrl: value,
                                            })
                                        }
                                    />
                                )}

                                <ZoloTextControl
                                    label={__('Caption', 'zoloblocks')}
                                    value={contentCaption}
                                    onChange={(value) =>
                                        setAttributes({
                                            contentCaption: value,
                                        })
                                    }
                                />
                            </ZoloPanelBody>
                        </>
                    }
                    styleTab={
                        <>
                            {lightboxType === 'poster' && (
                                <>
                                    <ZoloPanelBody
                                        title={__('Poster Wrapper', 'zoloblocks')}
                                        panelProps={props}
                                        stylePanel={true}
                                        firstOpen={true}
                                    >
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <BorderControl
                                                        label={__('Border', 'zoloblocks')}
                                                        controlName={POSTER_BORDER}
                                                        requiredProps={requiredProps}
                                                    />

                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={POSTER_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={true}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <NormalBGControl
                                                        label={__('Background Color', 'zoloblocks')}
                                                        controlName={HOVER_POSTER_BG_COLOR}
                                                        requiredProps={requiredProps}
                                                        noMainBGIMG={false}
                                                    />

                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={HOVER_POSTER_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={true}
                                                    />

                                                    <BoxShadowControl
                                                        controlName={HOVER_POSTER_BOX_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                </>
                                            }
                                        />
                                    </ZoloPanelBody>
                                </>
                            )}
                            {lightboxType === 'button' && (
                                <>
                                    <ZoloPanelBody title={__('Button Wrapper', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <NormalBGControl
                                                        label={__('Background Color', 'zoloblocks')}
                                                        controlName={BUTTON_BG_COLOR}
                                                        requiredProps={requiredProps}
                                                        noMainBGIMG={false}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Padding', 'zoloblocks')}
                                                        controlName={BUTTON_PADDING}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ZoloCardDivider />
                                                    <BorderControl
                                                        label={__('Border', 'zoloblocks')}
                                                        controlName={BUTTON_BORDER}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <BoxShadowControl
                                                        controlName={BUTTON_BOX_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={BUTTON_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={true}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <NormalBGControl
                                                        label={__('Background Color', 'zoloblocks')}
                                                        controlName={HOVER_BUTTON_BG_COLOR}
                                                        requiredProps={requiredProps}
                                                        noMainBGIMG={false}
                                                    />
                                                    <ZoloCardDivider />

                                                    <BoxShadowControl
                                                        controlName={HOVER_BUTTON_BOX_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={HOVER_BUTTON_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={true}
                                                    />
                                                </>
                                            }
                                        />
                                    </ZoloPanelBody>

                                    {enableHeading && (
                                        <>
                                            <ZoloPanelBody title={__('Button Content', 'zoloblocks')} panelProps={props} firstOpen={false}>
                                                <TabPanelControl
                                                    options={[
                                                        {
                                                            value: 'normal',
                                                            label: __('Title', 'zoloblocks'),
                                                        },
                                                        {
                                                            value: 'hover',
                                                            label: __('Sub Title', 'zoloblocks'),
                                                        },
                                                    ]}
                                                    normalComponents={
                                                        <>
                                                            <ColorControl
                                                                label={__('Color', 'zoloblocks')}
                                                                color={titleColor}
                                                                onChange={(value) =>
                                                                    setAttributes({
                                                                        titleColor: value,
                                                                    })
                                                                }
                                                            />

                                                            <TypographyDropdown
                                                                label={__('Typography', 'zoloblocks')}
                                                                typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                                                requiredProps={requiredProps}
                                                            />
                                                            <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                                            <ColorControl
                                                                label={__('Color', 'zoloblocks')}
                                                                color={hoverTitleColor}
                                                                onChange={(value) =>
                                                                    setAttributes({
                                                                        hoverTitleColor: value,
                                                                    })
                                                                }
                                                            />
                                                        </>
                                                    }
                                                    hoverComponents={
                                                        <>
                                                            {enableSubHeading && (
                                                                <>
                                                                    <ColorControl
                                                                        label={__('Color', 'zoloblocks')}
                                                                        color={titleSubColor}
                                                                        onChange={(value) =>
                                                                            setAttributes({
                                                                                titleSubColor: value,
                                                                            })
                                                                        }
                                                                    />
                                                                    <TypographyDropdown
                                                                        label={__('Typography', 'zoloblocks')}
                                                                        typoPrefixConstant={BUTTON_SUB_TYPOGRAPHY}
                                                                        requiredProps={requiredProps}
                                                                    />
                                                                    <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                                                    <ColorControl
                                                                        label={__('Color', 'zoloblocks')}
                                                                        color={hoverTitleSubColor}
                                                                        onChange={(value) =>
                                                                            setAttributes({
                                                                                hoverTitleSubColor: value,
                                                                            })
                                                                        }
                                                                    />
                                                                </>
                                                            )}
                                                        </>
                                                    }
                                                />
                                            </ZoloPanelBody>
                                        </>
                                    )}
                                </>
                            )}
                            {showPosterIcon && (
                                <>
                                    <ZoloPanelBody title={__('Play Button', 'zoloblocks')} panelProps={props} firstOpen={false}>
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={iconColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconColor: value,
                                                            })
                                                        }
                                                    />
                                                    <ResRangeControl
                                                        label={__('Icon Size', 'zoloblocks')}
                                                        controlName={PLAY_BTN_ICON_SIZE}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={100}
                                                    />
                                                    <ZoloCardDivider />
                                                    <NormalBGControl
                                                        label={__('Background Color', 'zoloblocks')}
                                                        controlName={ICON_BG_COLOR}
                                                        requiredProps={requiredProps}
                                                        noMainBGIMG={false}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Padding', 'zoloblocks')}
                                                        controlName={PLAY_BTN_PADDING}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Margin', 'zoloblocks')}
                                                        controlName={PLAY_BTN_MARGIN}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ZoloCardDivider />
                                                    <BorderControl
                                                        label={__('Border', 'zoloblocks')}
                                                        controlName={PLAY_BTN_BORDER}
                                                        requiredProps={requiredProps}
                                                    />

                                                    <BoxShadowControl
                                                        controlName={PLAY_BTN_BOX_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={PLAY_BTN_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={true}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={iconHColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconHColor: value,
                                                            })
                                                        }
                                                    />
                                                    <NormalBGControl
                                                        label={__('Background Color', 'zoloblocks')}
                                                        controlName={ICON_H_BG_COLOR}
                                                        requiredProps={requiredProps}
                                                        noMainBGIMG={false}
                                                    />
                                                    <ZoloCardDivider />
                                                    <ColorControl
                                                        label={__('Border Color', 'zoloblocks')}
                                                        color={playBtnBorderHColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                playBtnBorderHColor: value,
                                                            })
                                                        }
                                                    />

                                                    <BoxShadowControl
                                                        controlName={PLAY_BTN_H_BOX_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                </>
                                            }
                                        />
                                    </ZoloPanelBody>
                                </>
                            )}

                            <ZoloPanelBody
                                title={__('Lightbox Content', 'zoloblocks')}
                                stylePanel={true}
                                panelProps={props}
                                firstOpen={false}
                            >
                                {contentType !== 'image' && (
                                    <ResRangeControl
                                        label={__('Size', 'zoloblocks')}
                                        controlName={CONTENT_WIDTH}
                                        requiredProps={requiredProps}
                                        max={1000}
                                    />
                                )}
                                {contentType === 'image' && (
                                    <ResRangeControl
                                        label={__('Size', 'zoloblocks')}
                                        controlName={CONTENT_HEIGHT}
                                        requiredProps={requiredProps}
                                        max={1000}
                                    />
                                )}
                            </ZoloPanelBody>
                        </>
                    }
                    advancedTab={
                        <>
                            <AdvancedOptions
                                attributes={attributes}
                                setAttributes={setAttributes}
                                requiredProps={requiredProps}
                                block="zolo/lightbox"
                            />
                        </>
                    }
                />
            </InspectorControls>
        </>
    );
}
