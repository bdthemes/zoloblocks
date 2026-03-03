/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
    ZoloBaseControl,
    ZoloButton,
    ZoloSelectControl,
    ZoloCardDivider,
    ZoloTextControl,
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
    ImageSizes,
    ZoloResponsive,
    useResponsiveValue,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    CONTAINER_HEIGHT,
    CONTAINER_BG,
    CONTAINER_H_BG,
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
    SPAN_OPTIONS,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        preset,
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
        imageRes,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };
    const [getResponsiveValue, createResponsiveValue] = useResponsiveValue(attributes);

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);
    const cssFiltersHover = applyFilters('zolo.extensions.controls.cssFiltersHover', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/brand-child"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloBaseControl label={__('Brand Logo', 'zoloblocks')} className="zolo-flex-col-control">
                                {brandPhoto ? (
                                    <ImageAvatar
                                        imageUrl={brandPhoto && brandPhoto.url}
                                        onDeleteImage={() =>
                                            setAttributes({
                                                brandPhoto: null,
                                            })
                                        }
                                        imageId={brandPhoto && brandPhoto.id}
                                        onEditImage={(media) =>
                                            setAttributes({
                                                brandPhoto: media,
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
                                                {__(' Upload Photo', 'zoloblocks')}
                                            </ZoloButton>
                                        )}
                                    />
                                )}
                            </ZoloBaseControl>
                            <ImageSizes
                                label={__('Resolution', 'zoloblocks')}
                                value={imageRes}
                                onChange={(value) =>
                                    setAttributes({
                                        imageRes: value,
                                    })
                                }
                            />
                            {enableLogoLink && preset === 'zb-brand-basic-style' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Link', 'zoloblocks')}</div>
                                    <LinkControl
                                        label={__('URL', 'zoloblocks')}
                                        value={logoLink}
                                        onChange={(data) =>
                                            setAttributes({
                                                logoLink: data,
                                            })
                                        }
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        {preset !== 'zb-brand-basic-style' && (
                            <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                                {brandNameVisible && (
                                    <>
                                        <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                            {__('Title', 'zoloblocks')}
                                        </div>
                                        <ZoloTextControl
                                            label={__('Text', 'zoloblocks')}
                                            onChange={(v) =>
                                                setAttributes({
                                                    brandTitle: v,
                                                })
                                            }
                                            value={brandTitle}
                                            placeholder={__('Title..', 'zoloblocks')}
                                        />

                                        <ZoloSelectControl
                                            label={__('Tag', 'zoloblocks')}
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
                                    <>
                                        <div className="zolo-custom-heading">{__('Label', 'zoloblocks')}</div>
                                        <ZoloTextControl
                                            label={__('Text', 'zoloblocks')}
                                            onChange={(name) =>
                                                setAttributes({
                                                    brandLabel: name,
                                                })
                                            }
                                            value={brandLabel}
                                            placeholder={__('Label..', 'zoloblocks')}
                                        />
                                    </>
                                )}
                                {enableLogoLink && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Link', 'zoloblocks')}</div>
                                        <LinkControl
                                            label={__('URL', 'zoloblocks')}
                                            value={logoLink}
                                            onChange={(data) =>
                                                setAttributes({
                                                    logoLink: data,
                                                })
                                            }
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                            min={0}
                                            max={100}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={CONTAINER_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={CONTAINER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CONTAINER_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />

                                        <ZoloCardDivider />
                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={CONTAINER_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={1000}
                                        />
                                        <ZoloResponsive left='10ch'>
                                            <ZoloSelectControl 
                                                label={__('Column Start', 'zoloblocks')}
                                                value={getResponsiveValue('columnStart') || ''}
                                                options={SPAN_OPTIONS}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('columnStart', value));
                                                }}
                                            />
                                        </ZoloResponsive>
                                        <ZoloResponsive left='10ch'>
                                            <ZoloSelectControl 
                                                label={__('Column End', 'zoloblocks')}
                                                value={getResponsiveValue('columnEnd') || ''}
                                                options={SPAN_OPTIONS}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('columnEnd', value));
                                                }}
                                            />
                                        </ZoloResponsive>
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_H_BG} noMainBGImg={false} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {preset !== 'zb-brand-basic-style' && (
                            <>
                                <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    {/* <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} /> */}
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={CONTENT_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                        min={0}
                                        max={200}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={IMAGE_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                            <ZoloCardDivider />
                            <NormalBGControl requiredProps={requiredProps} controlName={BRAND_PHOTO_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={BRAND_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={BRAND_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ZoloCardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={BRAND_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={BRAND_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={BRAND_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            {preset !== 'zb-brand-basic-style' && (
                                <>
                                    <ZoloCardDivider />
                                    {cssFilters && cssFilters.length > 0 && cssFilters}
                                </>
                            )}
                            {preset === 'zb-brand-basic-style' && (
                                <>
                                    {cssFilters && cssFilters.length > 0 && (
                                        <>
                                            <TabPanelControl
                                                options={[
                                                    {
                                                        value: 'normal',
                                                        label: __('Normal', 'zoloblocks'),
                                                    },
                                                    {
                                                        value: 'hover',
                                                        label: __('Hover', 'zoloblocks'),
                                                    },
                                                ]}
                                                normalComponents={<>{cssFilters}</>}
                                                hoverComponents={<>{cssFiltersHover}</>}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>
                        {preset !== 'zb-brand-basic-style' && (
                            <>
                                {brandNameVisible && (
                                    <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                        {!(enableLogoLink && logoLinkType == 'logo__title') && (
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={nameColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        nameColor: value,
                                                    })
                                                }
                                            />
                                        )}
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <TextStrokeControl
                                            controlName={TITLE_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ZoloCardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={TITLE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        {enableLogoLink && logoLinkType == 'logo__title' && (
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
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
                                                            label={__('Color', 'zoloblocks')}
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
                                    <ZoloPanelBody title={__('Label', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                        {!(enableLogoLink && logoLinkType == 'logo__label') && (
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={labelColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        labelColor: value,
                                                    })
                                                }
                                            />
                                        )}
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={LINK_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />

                                        <TextStrokeControl
                                            controlName={LINK_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ZoloCardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={LINK_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        {enableLogoLink && logoLinkType == 'logo__label' && (
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
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
                                                            label={__('Color', 'zoloblocks')}
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
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/brand-child"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
