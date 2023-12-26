/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { SelectControl, TextControl, TextareaControl, Button, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ColorControl,
    ZoloIconPicker,
    TabPanelControl,
    ImageAvatar,
    TypographyDropdown,
    BorderControl,
    ResRangeControl,
    ResDimensionsControl,
    IconicBtnGroup,
    NormalBGControl,
    AdvancedOptions,
    ZoloPanelBody,
    BoxShadowControl,
    LinkControl,
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
    ITEM_BG,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY, MEDIA_TYPOGRAPHY } from './constants/typoPrefixConstants';

import { HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        headingTag,
        titleColor,
        titleHColor,
        dscColor,
        desHcolor,
        fancyIcon,
        fancyTitle,
        fancyLinkToggle,
        fancyLink,
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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <Fragment>
                        <ZoloPanelBody title={__('Content', 'zolo-block')} panelProps={props} firstOpen={true}>
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
                            <ToggleControl
                                label={__('Add item link', 'zolo-block')}
                                checked={fancyLinkToggle}
                                onChange={() => setAttributes({ fancyLinkToggle: !fancyLinkToggle })}
                            />
                            {fancyLinkToggle && (
                                <LinkControl
                                    label={__('Enter link', 'zolo-block')}
                                    value={fancyLink}
                                    onChange={(v) => setAttributes({ fancyLink: v })}
                                />
                            )}
                        </ZoloPanelBody>

                        {iconToggle && (
                            <ZoloPanelBody title={__('Icon', 'zolo-block')} panelProps={props}>
                                {iconToggle && (
                                    <ZoloIconPicker
                                        label={__('Select Icon', 'zolo-block')}
                                        value={fancyIcon}
                                        onChange={(v) => setAttributes({ fancyIcon: v })}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                        {imageToggle && (
                            <ZoloPanelBody title={__('Media', 'zolo-block')} panelProps={props}>
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
                            </ZoloPanelBody>
                        )}
                    </Fragment>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={ITEM_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={ITEM_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={ITEM_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={ITEM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={ITEM_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                        </ZoloPanelBody>
                        {titleToggle && (
                            <ZoloPanelBody title={__('Title', 'zolo-block')} stylePanel={true} panelProps={props}>
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
                                    label={__('Margin', 'zolo-block')}
                                    controlName={TITLE_SPACING}
                                    requiredProps={requiredProps}
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
                            </ZoloPanelBody>
                        )}
                        {textToggle && (
                            <ZoloPanelBody title={__('Description', 'zolo-block')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-block')}
                                    typoPrefixConstant={TEXT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-block')}
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
                            </ZoloPanelBody>
                        )}
                        {iconToggle && (
                            <ZoloPanelBody title={__('Icon', 'zolo-block')} stylePanel={true} panelProps={props}>
                                <ResRangeControl label={__('Size', 'zolo-block')} controlName={ICON_WIDTH} requiredProps={requiredProps} />
                                <BorderControl
                                    label={__('Border')}
                                    controlName={ICON_BORDER}
                                    requiredProps={requiredProps}
                                    hoverControl={
                                        <ColorControl
                                            label={__('Border Color', 'zolo-block')}
                                            color={iconHBColor}
                                            onChange={(v) => setAttributes({ iconHBColor: v })}
                                        />
                                    }
                                />
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
                                            <NormalBGControl requiredProps={requiredProps} controlName={ICON_HBG} noMainBGImg={true} />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {imageToggle && (
                            <ZoloPanelBody
                                title={mediaType === 'image' ? __('Image', 'zolo-block') : __('Text', 'zolo-block')}
                                stylePanel={true}
                                panelProps={props}
                            >
                                {mediaType === 'text' && (
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={MEDIA_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
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
                            </ZoloPanelBody>
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
