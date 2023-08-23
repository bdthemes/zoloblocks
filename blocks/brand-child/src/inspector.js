/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, TextControl, BaseControl, Button, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ResAlignmentControl,
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
    IconicBtnGroup,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    CONTAINER_HEIGHT,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    TITLE_TEXT_STROKE,
    LINK_TEXT_STROKE,
    LINK_MARGIN,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BORDER,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    IMAGE_WIDTH,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, FLEX_ALIGN_OPTIONS, FLEX_HORIZONTAL_OPTIONS, HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        brandPhoto,
        isBrandName,
        isBrandLink,
        brandName,
        brandNameTag,
        brandLabel,
        brandDetailPageLink,
        resMode,
        textColor,
        linkColor,
        linkHoverColor,
        containerHoverBorderColor,
        contentHorizontalPosition,
        contentVerticalPosition,
    } = attributes;

    const resRequiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
                            <BaseControl label={__('Brand Photo', 'zolo-blocks')}>
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
                            <ToggleControl
                                label={__('Show Brand Name', 'zolo-blocks')}
                                checked={isBrandName}
                                onChange={() => setAttributes({ isBrandName: !isBrandName })}
                            />
                            <ToggleControl
                                label={__('Show Brand Link', 'zolo-blocks')}
                                checked={isBrandLink}
                                onChange={() => setAttributes({ isBrandLink: !isBrandLink })}
                            />
                        </PanelBody>
                        {isBrandName && (
                            <PanelBody title={__('Brand Name', 'zolo-blocks')} initialOpen={false}>
                                <TextControl
                                    label={__('Name', 'zolo-blocks')}
                                    onChange={(name) =>
                                        setAttributes({
                                            brandName: name,
                                        })
                                    }
                                    value={brandName}
                                    placeholder={__('Name..', 'zolo-blocks')}
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
                            </PanelBody>
                        )}
                        {isBrandLink && (
                            <PanelBody title={__('Brand Link', 'zolo-blocks')} initialOpen={false}>
                                <TextControl
                                    label={__('Label', 'zolo-blocks')}
                                    onChange={(name) =>
                                        setAttributes({
                                            brandLabel: name,
                                        })
                                    }
                                    value={brandLabel}
                                    placeholder={__('Name..', 'zolo-blocks')}
                                />
                                <LinkControl
                                    label={__('URL', 'zolo-blocks')}
                                    value={brandDetailPageLink}
                                    onChange={(data) =>
                                        setAttributes({
                                            brandDetailPageLink: data,
                                        })
                                    }
                                />
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Container', 'zolo-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                controlName={CONTAINER_HEIGHT}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={1000}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={CONTAINER_BORDER}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={CONTAINER_BORDER_RADIUS}
                                            resRequiredProps={resRequiredProps}
                                            forBorderRadius={true}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_BOX_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            enableTransition={false}
                                        />

                                        <NormalBGControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={CONTAINER_BACKGROUND}
                                            noMainBGImg={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Border Color', 'zolo-blocks')}
                                            color={containerHoverBorderColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    containerHoverBorderColor: value,
                                                })
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_HOVER_BOX_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            enableTransition={false}
                                        />
                                        <NormalBGControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={CONTAINER_HOVER_BACKGROUND}
                                            noMainBGImg={false}
                                        />
                                    </>
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={CONTENT_ALIGNMENT}
                                resRequiredProps={resRequiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            <IconicBtnGroup
                                label={__('Horizontal Position', 'zolo-blocks')}
                                value={contentHorizontalPosition}
                                onChange={(value) => setAttributes({ contentHorizontalPosition: value })}
                                options={FLEX_HORIZONTAL_OPTIONS}
                            />
                            <IconicBtnGroup
                                label={__('Vertical Position', 'zolo-blocks')}
                                value={contentVerticalPosition}
                                onChange={(value) => setAttributes({ contentVerticalPosition: value })}
                                options={FLEX_ALIGN_OPTIONS}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Photo', 'zolo-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Photo Size', 'zolo-blocks')}
                                controlName={IMAGE_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={1000}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_BORDER_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl
                                controlName={BRAND_PHOTO_BOX_SHADOW}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />
                            <NormalBGControl resRequiredProps={resRequiredProps} controlName={BRAND_PHOTO_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_PADDING}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_MARGIN}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        {isBrandName && (
                            <PanelBody title={__('Brand Name', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={textColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            textColor: value,
                                        })
                                    }
                                />
                                <TextStrokeControl
                                    controlName={TITLE_TEXT_STROKE}
                                    resRequiredProps={resRequiredProps}
                                    enableTransition={false}
                                />
                            </PanelBody>
                        )}
                        {isBrandLink && (
                            <PanelBody title={__('Link', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={LINK_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={linkColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        linkColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={linkHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        linkHoverColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                                <TextStrokeControl
                                    controlName={LINK_TEXT_STROKE}
                                    resRequiredProps={resRequiredProps}
                                    enableTransition={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={LINK_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                />
                            </PanelBody>
                        )}
                    </>
                }
                advancedTab={<>{/* advanced tab */}</>}
            />
        </InspectorControls>
    );
}

export default Inspector;
