/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { ToggleControl, TextControl, SelectControl, Button, BaseControl, __experimentalAlignmentMatrixControl as AlignmentMatrixControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    HeaderTabs,
    TabPanelControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
    ImageAvatar,
    ImageSizes,
    BorderControl,
    ResDimensionsControl,
    BoxShadowControl,
    NormalBGControl,
    MaskControl,
    TypographyDropdown,
    RangeResetControl,
    LinkControl,
    ObjectFitControl,
} = window.zoloModule;

import objAttributes from './attributes';

import {
    LAYOUTS,
    PHOTO_ALIGN,
    CAPTION_ALIGN,
    CAPTION_MARGIN,
    PHOTO_MASK,
    HOVER_EFFECTS,
    IMG_BORDER,
    IMG_BRADIUS,
    IMG_MARGIN,
    IMG_BSHADOW,
    IMG_HBSHADOW,
    OVERLAY_BG,
    OVERLAY_BORDER,
    OVERLAY_BRADIUS,
    OVERLAY_EDGE_DISTANCE,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_MAX_WIDTH,
    ITEM_VISIBILITY,
    HEADING_MARGIN,
    DESC_MARGIN,
    SEPARATOR_WIDTH,
    SEPARATOR_HEIGHT,
    SEPARATOR_MARGIN,
    SEPARATOR_STYLES,
    SEPARATOR_POSITIONS,
    IMG_WIDTH,
    IMGMAX_WIDTH,
    IMG_HEIGHT,
} from './constants';

import { DEFAULT_ALIGNS, FLEX_HORIZONTAL_OPTIONS, HEADING } from '../../../src/global/constants';

import { CAPTION_TYPO, HEADING_TYPO, DESC_TYPO } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        photo,
        layout,
        ocPosition,
        imageRes,
        hoverEffect,
        imgAlt,
        link,
        showCaption,
        caption,
        captionColor,
        imgHoverBorder,
        objectFit,

        // heading
        heading,
        headingTag,
        headingVisibleOn,
        headingColor,

        // description
        description,
        descriptionVisibleOn,
        descriptionColor,

        // separator
        separatorVisibleOn,
        separatorColor,
        separatorStyle,
        separatorPosition,

        photoMaskImage,
        zolo_overlayBorderBorderColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    const [duotone, setDuotone] = useState(['#000000', '#ffffff']);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/advanced-image"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <BaseControl label={__('Image', 'zoloblocks')}
                                className='zolo-flex-col-control'
                            >
                                {photo ? (
                                    <ImageAvatar
                                        imageUrl={photo && photo.url}
                                        onDeleteImage={() =>
                                            setAttributes({
                                                photo: null,
                                            })
                                        }
                                        imageId={photo && photo.id}
                                        onEditImage={(media) => {
                                            setAttributes({
                                                photo: media,
                                            });
                                        }}
                                    />
                                ) : (
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                photo: {
                                                    id: media.id,
                                                    url: media.url,
                                                    sizes: media.sizes,
                                                    alt: media.alt,
                                                    caption: media.caption,
                                                },
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={photo && photo.id}
                                        render={({ open }) => (
                                            <Button className="zolo-image-upload-btn" onClick={open}>
                                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                </svg>
                                                {__(' Upload Photo', 'zoloblocks')}
                                            </Button>
                                        )}
                                    />
                                )}
                            </BaseControl>
                            <IconicBtnGroup
                                label={__('Layout', 'zoloblocks')}
                                value={layout}
                                onChange={(value) =>
                                    setAttributes({
                                        layout: value,
                                    })
                                }
                                options={LAYOUTS}
                            />

                            {layout === 'overlay' && (
                                <BaseControl label={__('Content Position', 'zoloblocks')}
                                    className='zolo-flex-col-control'
                                >
                                    <AlignmentMatrixControl
                                        value={ocPosition}
                                        onChange={(v) => {
                                            setAttributes({ ocPosition: v });
                                        }}
                                    />
                                </BaseControl>
                            )}

                            <ResAlignmentControl label={__('Alignment', 'zoloblocks')} controlName={PHOTO_ALIGN} requiredProps={requiredProps} alignOptions={FLEX_HORIZONTAL_OPTIONS} />
                            <ImageSizes
                                label={__('Image Resolution', 'zoloblocks')}
                                value={imageRes}
                                onChange={(value) =>
                                    setAttributes({
                                        imageRes: value,
                                    })
                                }
                            />
                            <TextControl label={__('Alt Text', 'zoloblocks')} onChange={(v) => setAttributes({ imgAlt: v })} value={imgAlt } placeholder={__('Enter alt text', 'zoloblocks')} />
                            <LinkControl label={__('Link', 'zoloblocks')} value={link} onChange={(value) => setAttributes({ link: value })} />
                            {layout === 'normal' && <ToggleControl label={__('Enable Caption', 'zoloblocks')} checked={showCaption} onChange={() => setAttributes({ showCaption: !showCaption })} />}
                        </ZoloPanelBody>
                        {layout === 'normal' && showCaption && (
                            <ZoloPanelBody title={__('Caption', 'zoloblocks')} panelProps={props}>
                                <TextControl label={__('Caption', 'zoloblocks')} value={caption || photo?.caption} onChange={(v) => setAttributes({ caption: v })} placeholder={__('Enter caption', 'zoloblocks')} />
                                <ResAlignmentControl label={__('Alignment', 'zoloblocks')} controlName={CAPTION_ALIGN} requiredProps={requiredProps} alignOptions={DEFAULT_ALIGNS} />
                            </ZoloPanelBody>
                        )}
                        {layout === 'overlay' && (
                            <>
                                <ZoloPanelBody title={__('Heading', 'zoloblocks')} panelProps={props}>
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        onChange={(v) =>
                                            setAttributes({
                                                heading: v,
                                            })
                                        }
                                        value={heading}
                                        placeholder={__('heading text..', 'zoloblocks')}
                                    />
                                    <SelectControl
                                        label={__('Select Tag', 'zoloblocks')}
                                        options={HEADING}
                                        onChange={(v) =>
                                            setAttributes({
                                                headingTag: v,
                                            })
                                        }
                                        value={headingTag}
                                    />
                                    <IconicBtnGroup
                                        label={__('Visible On', 'zoloblocks')}
                                        value={headingVisibleOn}
                                        onChange={(v) =>
                                            setAttributes({
                                                headingVisibleOn: v,
                                            })
                                        }
                                        options={ITEM_VISIBILITY}
                                    />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Description', 'zoloblocks')} panelProps={props}>
                                    <div className='zolo-flex-col-control'>
                                        <TextareaControl
                                            label={__('Text', 'zoloblocks')}
                                            onChange={(v) =>
                                                setAttributes({
                                                    description: v,
                                                })
                                            }
                                            value={description}
                                            placeholder={__('description text..', 'zoloblocks')}
                                        />
                                    </div>
                                    <IconicBtnGroup
                                        label={__('Visible On', 'zoloblocks')}
                                        value={descriptionVisibleOn}
                                        onChange={(v) =>
                                            setAttributes({
                                                descriptionVisibleOn: v,
                                            })
                                        }
                                        options={ITEM_VISIBILITY}
                                    />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Separator', 'zoloblocks')} panelProps={props}>
                                    <SelectControl label={__('Style', 'zoloblocks')} options={SEPARATOR_STYLES} onChange={(v) => setAttributes({ separatorStyle: v })} value={separatorStyle} />
                                    {separatorStyle !== '' && (
                                        <>
                                            <SelectControl label={__('Position', 'zoloblocks')} options={SEPARATOR_POSITIONS} onChange={(v) => setAttributes({ separatorPosition: v })} value={separatorPosition} />
                                            <IconicBtnGroup
                                                label={__('Visible On', 'zoloblocks')}
                                                value={separatorVisibleOn}
                                                onChange={(v) =>
                                                    setAttributes({
                                                        separatorVisibleOn: v,
                                                    })
                                                }
                                                options={ITEM_VISIBILITY}
                                            />
                                        </>
                                    )}
                                </ZoloPanelBody>
                            </>
                        )}
                        <ZoloPanelBody title={__('Mask', 'zoloblocks')} panelProps={props}>
                            <MaskControl controlName={PHOTO_MASK} requiredProps={requiredProps} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Image', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <SelectControl
                                label={__('Select Effect', 'zoloblocks')}
                                value={hoverEffect}
                                options={HOVER_EFFECTS}
                                onChange={(v) => {
                                    setAttributes({ hoverEffect: v });
                                }}
                            />

                            <ResRangeControl label={__('Width', 'zoloblocks')} controlName={IMG_WIDTH} requiredProps={requiredProps} max={1500} />
                            {/* <ResRangeControl label={__('Max Width', 'zoloblocks')} controlName={IMGMAX_WIDTH} requiredProps={requiredProps} /> */}
                            <ResRangeControl label={__('Height', 'zoloblocks')} controlName={IMG_HEIGHT} requiredProps={requiredProps} max={1500} />
                            <ObjectFitControl value={objectFit} onChange={(value) => setAttributes({ objectFit: value })} />
                            {photoMaskImage === '' && (
                                <>
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={IMG_BORDER}
                                        requiredProps={requiredProps}
                                        hoverControl={
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={imgHoverBorder}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        imgHoverBorder: value,
                                                    })
                                                }
                                            />
                                        }
                                    />
                                    <ResDimensionsControl label={__('Border Radius', 'zoloblocks')} controlName={IMG_BRADIUS} requiredProps={requiredProps} forBorderRadius={true} />
                                </>
                            )}

                            {photoMaskImage === '' && <TabPanelControl normalComponents={<BoxShadowControl controlName={IMG_BSHADOW} requiredProps={requiredProps} />} hoverComponents={<BoxShadowControl controlName={IMG_HBSHADOW} requiredProps={requiredProps} />} />}
                        </ZoloPanelBody>

                        {layout === 'overlay' && (
                            <>
                                <ZoloPanelBody title={__('Overlay', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    {photoMaskImage === '' && (
                                        <>
                                            <BorderControl label={__('Border', 'zoloblocks')} controlName={OVERLAY_BORDER} requiredProps={requiredProps} />
                                            {zolo_overlayBorderBorderColor && (
                                                <>
                                                    <ResDimensionsControl label={__('Border Radius', 'zoloblocks')} controlName={OVERLAY_BRADIUS} requiredProps={requiredProps} forBorderRadius={true} />
                                                    <ResRangeControl label={__('Edge Distance', 'zoloblocks')} controlName={OVERLAY_EDGE_DISTANCE} requiredProps={requiredProps} />
                                                </>
                                            )}
                                        </>
                                    )}
                                    <NormalBGControl requiredProps={requiredProps} controlName={OVERLAY_BG} noMainBGImg={true} />
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <RangeResetControl label={__('Overlay Opacity', 'zoloblocks')} controlName="onOpacity" requiredProps={requiredProps} min={0} max={1} step={0.1} />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <RangeResetControl label={__('Overlay Opacity', 'zoloblocks')} controlName="ohOpacity" requiredProps={requiredProps} min={0} max={1} step={0.1} />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <ResRangeControl label={__('Max Width', 'zoloblocks')} controlName={CONTENT_MAX_WIDTH} requiredProps={requiredProps} max={2000} />
                                    <ResDimensionsControl label={__('Padding', 'zoloblocks')} controlName={CONTENT_PADDING} requiredProps={requiredProps} />
                                    <ResDimensionsControl label={__('Margin', 'zoloblocks')} controlName={CONTENT_MARGIN} requiredProps={requiredProps} />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Heading', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <TypographyDropdown label={__('Typography', 'zoloblocks')} typoPrefixConstant={HEADING_TYPO} requiredProps={requiredProps} max={72} />
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={headingColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                headingColor: value,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl label={__('Margin', 'zoloblocks')} controlName={HEADING_MARGIN} requiredProps={requiredProps} forBorderRadius={false} />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Description', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <TypographyDropdown label={__('Typography', 'zoloblocks')} typoPrefixConstant={DESC_TYPO} requiredProps={requiredProps} max={36} />
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={descriptionColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                descriptionColor: value,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl label={__('Margin', 'zoloblocks')} controlName={DESC_MARGIN} requiredProps={requiredProps} forBorderRadius={false} />
                                </ZoloPanelBody>
                                {separatorStyle !== '' && (
                                    <ZoloPanelBody title={__('Separator', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={separatorColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    separatorColor: value,
                                                })
                                            }
                                        />
                                        <ResRangeControl label={__('Width', 'zoloblocks')} controlName={SEPARATOR_WIDTH} requiredProps={requiredProps} max={500} />
                                        <ResRangeControl label={__('Height', 'zoloblocks')} controlName={SEPARATOR_HEIGHT} requiredProps={requiredProps} />
                                        <ResDimensionsControl label={__('Margin', 'zoloblocks')} controlName={SEPARATOR_MARGIN} requiredProps={requiredProps} />
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                        {layout === 'normal' && showCaption && (
                            <ZoloPanelBody title={__('Caption', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown label={__('Typography', 'zoloblocks')} typoPrefixConstant={CAPTION_TYPO} requiredProps={requiredProps} max={36} />
                                <ColorControl
                                    label={__('Caption Color', 'zoloblocks')}
                                    color={captionColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            captionColor: value,
                                        })
                                    }
                                />
                                <ResDimensionsControl label={__('Margin', 'zoloblocks')} controlName={CAPTION_MARGIN} requiredProps={requiredProps} forBorderRadius={false} />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} block="zolo/advanced-image" />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
