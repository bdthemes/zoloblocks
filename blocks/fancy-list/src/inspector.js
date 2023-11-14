/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, TextareaControl, ToggleControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ColorControl,
    IconPicker,
    TabPanelControl,
    ImageAvatar,
    TypographyDropdown,
    BorderControl,
    ResRangeControl,
    ResDimensionsControl,
    IconicBtnGroup,
    NormalBGControl,
    AdvancedOptions,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    ICON_WIDTH,
    ICON_BORDER,
    ICON_PADDING,
    ICON_RADIUS,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_BORDER,
    IMAGE_BORDERRADIUS,
    IMAGE_PADDING,
    TITLE_SPACING,
    DESC_SPACING,
    ICON_BG,
    ICON_HBG,
    GAP,
} from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY, MEDIA_TYPOGRAPHY } from './constants/typoPrefixConstants';

import { HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        headingTag,
        titleColor,
        titleHColor,
        dscColor,
        desHcolor,
        fancyIcon,
        fancyTitle,
        fancyListText,
        mediaType,
        mediaText,
        mediaTextColor,
        mediaTextBgColor,
        image,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        iconColor,
        iconHColor,
        iconHBColor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const onPresetChange = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case 'style-1':
                setAttributes({
                    imageToggle: false,
                    textToggle: false,
                });
                break;

            case 'style-2':
                setAttributes({
                    textToggle: false,
                    imageToggle: true,
                    mediaType: 'text',
                });
                break;

            case 'style-3':
                setAttributes({
                    imageToggle: false,
                    textToggle: true,
                });
                break;

            case 'style-4':
                setAttributes({
                    imageToggle: true,
                    mediaType: 'image',
                });
                break;
            default:
                return false;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <Fragment>
                        <PanelBody title={__('General', 'zolo-block')} initialOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-block')}
                                options={PRESETS}
                                onChange={(v) => onPresetChange(v)}
                                value={preset}
                            />
                            <ToggleControl
                                label={__('Show title', 'zolo-block')}
                                checked={titleToggle}
                                onChange={() => {
                                    setAttributes({ titleToggle: !titleToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Show description', 'zolo-block')}
                                checked={textToggle}
                                onChange={() => {
                                    setAttributes({ textToggle: !textToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Show media', 'zolo-block')}
                                checked={imageToggle}
                                onChange={() => {
                                    setAttributes({ imageToggle: !imageToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Enable Icon', 'zolo-block')}
                                checked={iconToggle}
                                onChange={() => {
                                    setAttributes({ iconToggle: !iconToggle });
                                }}
                            />
                        </PanelBody>
                        {(!titleToggle && !textToggle) || (
                            <PanelBody initialOpen={false} title={__('Content', 'zolo-block')}>
                                {titleToggle && (
                                    <TextControl
                                        label={__('Title', 'zolo-block')}
                                        value={fancyTitle}
                                        onChange={(v) => setAttributes({ fancyTitle: v })}
                                        placeholder="title.."
                                    />
                                )}
                                {textToggle && (
                                    <TextareaControl
                                        label={__('Description', 'zolo-block')}
                                        value={fancyListText}
                                        onChange={(v) => setAttributes({ fancyListText: v })}
                                        placeholder="description text.."
                                    />
                                )}
                            </PanelBody>
                        )}

                        {iconToggle && (
                            <PanelBody initialOpen={false} title={__('Icon', 'zolo-block')}>
                                {iconToggle && (
                                    <IconPicker
                                        title={__('Icon picker', 'zolo-block')}
                                        value={fancyIcon}
                                        onChange={(v) => setAttributes({ fancyIcon: v })}
                                        showHeading={false}
                                        disableDashicon={true}
                                    />
                                )}
                            </PanelBody>
                        )}
                        {imageToggle && (
                            <PanelBody initialOpen={false} title={__('Media', 'zolo-block')}>
                                <IconicBtnGroup
                                    label={__('Media Type', 'zolo-blocks')}
                                    value={mediaType}
                                    onChange={(value) =>
                                        setAttributes({
                                            mediaType: value,
                                        })
                                    }
                                    options={[
                                        {
                                            label: __('Text', 'zolo-blocks'),
                                            value: 'text',
                                        },
                                        {
                                            label: __('Image', 'zolo-blocks'),
                                            value: 'image',
                                        },
                                    ]}
                                />
                                {mediaType === 'image' &&
                                    (image ? (
                                        <ImageAvatar
                                            imageUrl={image && image.url}
                                            onDeleteImage={() =>
                                                setAttributes({
                                                    image: null,
                                                })
                                            }
                                            imageId={image && image.id}
                                            onEditImage={(url, id) => {
                                                setAttributes({
                                                    image: {
                                                        url,
                                                        id,
                                                    },
                                                });
                                            }}
                                        />
                                    ) : (
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    image: media,
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            value={image && image.id}
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
                                                    {__(' Upload Photo', 'zolo-blocks')}
                                                </Button>
                                            )}
                                        />
                                    ))}
                                {mediaType === 'text' && (
                                    <TextControl
                                        label={__('Text', 'zolo-block')}
                                        value={mediaText}
                                        onChange={(v) => setAttributes({ mediaText: v })}
                                        placeholder="1"
                                    />
                                )}
                            </PanelBody>
                        )}
                    </Fragment>
                }
                styleTab={
                    <>
                        {titleToggle && (
                            <PanelBody title={__('Title', 'zolo-block')} initialOpen={true}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-block')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <SelectControl
                                    label={__('Select Tag', 'zolo-block')}
                                    options={HEADING}
                                    onChange={(v) =>
                                        setAttributes({
                                            headingTag: v,
                                        })
                                    }
                                    value={headingTag}
                                />
                                <ResDimensionsControl
                                    label={__('Spacing', 'zolo-block')}
                                    controlName={TITLE_SPACING}
                                    requiredProps={requiredProps}
                                    max={100}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <ColorControl
                                            label={__('Color', 'zolo-block')}
                                            color={titleColor}
                                            onChange={(v) =>
                                                setAttributes({
                                                    titleColor: v,
                                                })
                                            }
                                        />
                                    }
                                    hoverComponents={
                                        <ColorControl
                                            label={__('Hover Color', 'zolo-block')}
                                            color={titleHColor}
                                            onChange={(v) =>
                                                setAttributes({
                                                    titleHColor: v,
                                                })
                                            }
                                        />
                                    }
                                />
                            </PanelBody>
                        )}
                        {textToggle && (
                            <PanelBody title={__('Description', 'zolo-block')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-block')}
                                    typoPrefixConstant={TEXT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Spacing', 'zolo-block')}
                                    controlName={DESC_SPACING}
                                    requiredProps={requiredProps}
                                    max={100}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <ColorControl
                                            label={__('Color', 'zolo-block')}
                                            color={dscColor}
                                            onChange={(v) =>
                                                setAttributes({
                                                    dscColor: v,
                                                })
                                            }
                                        />
                                    }
                                    hoverComponents={
                                        <ColorControl
                                            label={__('Hover Color', 'zolo-block')}
                                            color={desHcolor}
                                            onChange={(v) =>
                                                setAttributes({
                                                    desHcolor: v,
                                                })
                                            }
                                        />
                                    }
                                />
                            </PanelBody>
                        )}
                        {iconToggle && (
                            <PanelBody title={__('Icon', 'zolo-block')} initialOpen={false}>
                                <ResRangeControl label={__('Size', 'zolo-block')} controlName={ICON_WIDTH} requiredProps={requiredProps} />
                                <BorderControl label={__('Border')} controlName={ICON_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-block')}
                                    controlName={ICON_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-block')}
                                    controlName={ICON_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-block')}
                                                color={iconColor}
                                                onChange={(v) => setAttributes({ iconColor: v })}
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={true} />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-block')}
                                                color={iconHColor}
                                                onChange={(v) => setAttributes({ iconHColor: v })}
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zolo-block')}
                                                color={iconHBColor}
                                                onChange={(v) => setAttributes({ iconHBColor: v })}
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={ICON_HBG} noMainBGImg={true} />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}
                        {imageToggle && (
                            <PanelBody
                                title={mediaType === 'image' ? __('Image', 'zolo-block') : __('Text', 'zolo-block')}
                                initialOpen={false}
                            >
                                {mediaType === 'text' && (
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={MEDIA_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zolo-block')}
                                            color={mediaTextColor}
                                            onChange={(v) => setAttributes({ mediaTextColor: v })}
                                        />
                                        <ColorControl
                                            label={__('Background Color', 'zolo-block')}
                                            color={mediaTextBgColor}
                                            onChange={(v) => setAttributes({ mediaTextBgColor: v })}
                                        />
                                    </>
                                )}
                                <ResRangeControl
                                    label={__('Width', 'zolo-block')}
                                    controlName={IMAGE_WIDTH}
                                    requiredProps={requiredProps}
                                    max={500}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-block')}
                                    controlName={IMAGE_HEIGHT}
                                    requiredProps={requiredProps}
                                    max={500}
                                />
                                <ResRangeControl label={__('Gap', 'zolo-block')} controlName={GAP} requiredProps={requiredProps} />
                                <BorderControl
                                    label={__('Border', 'zolo-block')}
                                    controlName={IMAGE_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-block')}
                                    controlName={IMAGE_BORDERRADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-block')}
                                    controlName={IMAGE_PADDING}
                                    requiredProps={requiredProps}
                                />
                            </PanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
