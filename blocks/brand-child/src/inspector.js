/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, BaseControl, Button, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    BorderControl,
    BoxShadowControl,
    NormalBGControl,
    ColorControl,
    ResDimensionsControl,
    TextStrokeControl,
    TypographyDropdown,
    TabPanelControl,
    ImageAvatar,
    ResRangeControl,
    LinkControl,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    CONTAINER_HEIGHT,
    CONTAINER_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTENT_PADDING,
    CONTENT_BG,
    TITLE_TEXT_STROKE,
    TITLE_MARGIN,
    LINK_TEXT_STROKE,
    LINK_MARGIN,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    IMAGE_WIDTH,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        brandPhoto,
        brandTitle,
        nameColor,
        nameHoverColor,
        brandNameTag,
        brandLabel,
        logoLink,
        resMode,
        labelColor,
        labelHoverColor,
        brandNameVisible,
        brandLabelVisible,
        enableLogoLink,
        logoLinkType,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Layout', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <BaseControl label={__('Brand Logo', 'zolo-blocks')}>
                                {brandPhoto ? (
                                    <ImageAvatar
                                        imageUrl={brandPhoto && brandPhoto.url}
                                        onDeleteImage={() =>
                                            setAttributes({
                                                brandPhoto: null,
                                            })
                                        }
                                        imageId={brandPhoto && brandPhoto.id}
                                        onEditImage={(url, id) =>
                                            setAttributes({
                                                brandPhoto: {
                                                    url,
                                                    id,
                                                },
                                            })
                                        }
                                    />
                                ) : (
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                brandPhoto: media,
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={brandPhoto && brandPhoto.id}
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
                                )}
                            </BaseControl>
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                            {brandNameVisible && (
                                <>
                                    <TextControl
                                        label={__('Title', 'zolo-blocks')}
                                        onChange={(v) =>
                                            setAttributes({
                                                brandTitle: v,
                                            })
                                        }
                                        value={brandTitle}
                                        placeholder={__('Title..', 'zolo-blocks')}
                                    />
                                    <SelectControl
                                        label={__('Select Tag', 'zolo-blocks')}
                                        value={brandNameTag}
                                        options={HEADING}
                                        onChange={(v) => {
                                            setAttributes({
                                                brandNameTag: v,
                                            });
                                        }}
                                    />
                                </>
                            )}
                            {brandLabelVisible && (
                                <TextControl
                                    label={__('Label', 'zolo-blocks')}
                                    onChange={(name) =>
                                        setAttributes({
                                            brandLabel: name,
                                        })
                                    }
                                    value={brandLabel}
                                    placeholder={__('label..', 'zolo-blocks')}
                                />
                            )}
                            {enableLogoLink && (
                                <LinkControl
                                    label={__('URL', 'zolo-blocks')}
                                    value={logoLink}
                                    onChange={(data) =>
                                        setAttributes({
                                            logoLink: data,
                                        })
                                    }
                                />
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Container', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                controlName={CONTAINER_HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={CONTAINER_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={200}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Photo', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Photo Size', 'zolo-blocks')}
                                controlName={IMAGE_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={BRAND_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={BRAND_PHOTO_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>
                        {brandNameVisible && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                {!(enableLogoLink && logoLinkType == 'logo__title') && (
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={nameColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                nameColor: value,
                                            })
                                        }
                                    />
                                )}
                                <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {enableLogoLink && logoLinkType == 'logo__title' && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={nameColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            nameColor: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={nameHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            nameHoverColor: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                        {brandLabelVisible && (
                            <ZoloPanelBody title={__('Label', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={LINK_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                {!(enableLogoLink && logoLinkType == 'logo__label') && (
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={labelColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                labelColor: value,
                                            })
                                        }
                                    />
                                )}
                                <TextStrokeControl controlName={LINK_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={LINK_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {enableLogoLink && logoLinkType == 'logo__label' && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={labelColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            labelColor: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Hover Color', 'zolo-blocks')}
                                                    color={labelHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            labelHoverColor: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                )}
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
