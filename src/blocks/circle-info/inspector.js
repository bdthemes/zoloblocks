/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import Sortable from './sortable';

/**
 * Internal depencencies
 */

const {
    ZoloToggleControl,
    ZoloCardDivider,
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    NormalBGControl,
    AdvancedOptions,
    ZoloBaseControl,
    ResAlignmentControl,
    ZoloPanelBody,
    TabPanelControl,
    LinkControl,
    IconicBtnGroup,
    ZoloTextareaControl,
    ZoloSelectControl,
    ZoloRangeControl,
    ImageAvatar,
    ZoloButton,
    ImageSizes,
} = window.zoloModule;

import objAttributes from './attributes';

import {
    MAIN_CIRCLE_SIZE,
    MAIN_CIRCLE_BORDER,
    MAIN_CIRCLE_SHADOW,
    MAIN_CIRCLE_RADIUS,
    MAIN_IMAGE_SIZE,
    ICON_SIZE,
    ICON_BG,
    ICON_PADDING,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_RADIUS,
    HOVER_ICON_BG,
    HOVER_ICON_SHADOW,
    IMAGE_SIZE,
    IMAGE_BORDER,
    IMAGE_SHADOW,
    IMAGE_RADIUS,
    HOVER_IMAGE_SHADOW,
    LAYER_1_CIRCLE_SIZE,
    LAYER_2_CIRCLE_SIZE,
    LAYER_3_CIRCLE_SIZE,
    LAYER_1_CIRCLE_BORDER,
    LAYER_2_CIRCLE_BORDER,
    LAYER_3_CIRCLE_BORDER,
} from './constants';

import { } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { block, attributes, setAttributes } = props;
    const {
        resMode,
        photo,
        imageRes,
        circleItems,
        iconColor,
        hoverIconColor,
        animation,
        animationDuration,
        layer1AnimationDuration,
        layer2AnimationDuration,
        layer3AnimationDuration,
        hoverAnimation,
        circleLayer,
        layer1HoverColor,
        layer2HoverColor,
        layer3HoverColor,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    // Check if any circle item has iconType === 'icon' or undefined (defaults to icon)
    const iconItems = circleItems.some((item) => !item.iconType || item.iconType === 'icon');
    const imageItems = circleItems.some((item) => item.iconType === 'image');

    // Check which layers have items
    const hasLayer1 = circleItems.some((item) => item.layer === 'layer1');
    const hasLayer2 = circleItems.some((item) => item.layer === 'layer2');
    const hasLayer3 = circleItems.some((item) => item.layer === 'layer3');

    // Count how many layers have items
    const layerCount = [hasLayer1, hasLayer2, hasLayer3].filter(Boolean).length;

    // Auto-select the first available layer if current selection is invalid
    useEffect(() => {
        const currentLayerHasItems =
            (circleLayer === 'layer1' && hasLayer1) ||
            (circleLayer === 'layer2' && hasLayer2) ||
            (circleLayer === 'layer3' && hasLayer3);

        if (!currentLayerHasItems) {
            if (hasLayer1) {
                setAttributes({ circleLayer: 'layer1' });
            } else if (hasLayer2) {
                setAttributes({ circleLayer: 'layer2' });
            } else if (hasLayer3) {
                setAttributes({ circleLayer: 'layer3' });
            }
        }
    }, [hasLayer1, hasLayer2, hasLayer3, circleLayer]);

    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);
    const cssFiltersHover = applyFilters('zolo.extensions.controls.cssFiltersHover', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/circle-info"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Circle', 'zoloblocks')} firstOpen={true} panelProps={props}>
                        <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>{__('Show/hide elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Animation', 'zoloblocks')}
                                checked={animation}
                                onChange={(value) =>
                                    setAttributes({
                                        animation: value,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Hover Animation', 'zoloblocks')}
                                checked={hoverAnimation}
                                onChange={(value) =>
                                    setAttributes({
                                        hoverAnimation: value,
                                    })
                                }
                            />

                            {(hasLayer1 || hasLayer2 || hasLayer3) && (
                                <>
                                    <div className="zolo-custom-heading">{__('Layer Circle Size', 'zoloblocks')}</div>
                                    {layerCount > 1 && (
                                        <IconicBtnGroup
                                            value={circleLayer}
                                            onChange={(value) =>
                                                setAttributes({
                                                    circleLayer: value,
                                                })
                                            }
                                            options={[
                                                hasLayer1 && { label: 'Layer 1', value: 'layer1' },
                                                hasLayer2 && { label: 'Layer 2', value: 'layer2' },
                                                hasLayer3 && { label: 'Layer 3', value: 'layer3' },
                                            ].filter(Boolean)}
                                        />
                                    )}
                                    {circleLayer === 'layer1' && hasLayer1 && (
                                        <>
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={LAYER_1_CIRCLE_SIZE}
                                                requiredProps={requiredProps}
                                                max={500}
                                            />
                                            {animation && (
                                                <div className="zolo-flex-col-control">
                                                    <ZoloRangeControl
                                                    label={__('Speed (seconds)', 'zoloblocks')}
                                                    value={layer1AnimationDuration / 1000}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            layer1AnimationDuration: value * 1000,
                                                        })
                                                    }
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                />
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {circleLayer === 'layer2' && hasLayer2 && (
                                        <>
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={LAYER_2_CIRCLE_SIZE}
                                                requiredProps={requiredProps}
                                                max={500}
                                            />
                                            {animation && (
                                                <div className="zolo-flex-col-control">
                                                    <ZoloRangeControl
                                                        label={__('Speed (seconds)', 'zoloblocks')}
                                                        value={layer2AnimationDuration / 1000}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                layer2AnimationDuration: value * 1000,
                                                            })
                                                        }
                                                        min={1}
                                                        max={100}
                                                        step={1}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {circleLayer === 'layer3' && hasLayer3 && (
                                        <>
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={LAYER_3_CIRCLE_SIZE}
                                                requiredProps={requiredProps}
                                                max={500}
                                            />
                                            {animation && (
                                                <div className="zolo-flex-col-control">
                                                    <ZoloRangeControl
                                                        label={__('Speed (seconds)', 'zoloblocks')}
                                                        value={layer3AnimationDuration / 1000}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                layer3AnimationDuration: value * 1000,
                                                            })
                                                        }
                                                        min={1}
                                                        max={100}
                                                        step={1}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                            
                            <ZoloCardDivider />

                            <ZoloBaseControl label={__('Main Photo', 'zoloblocks')} className="zolo-flex-col-control">
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
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Circle Item', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <Sortable circleItems={circleItems} attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Main Circle', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={MAIN_CIRCLE_SIZE}
                                            requiredProps={requiredProps}
                                            max={500}
                                        />
                                        <ResRangeControl
                                            label={__('Image Size', 'zoloblocks')}
                                            controlName={MAIN_IMAGE_SIZE}
                                            requiredProps={requiredProps}
                                            max={500}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={MAIN_CIRCLE_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            label={__('Box Shadow', 'zoloblocks')}
                                            controlName={MAIN_CIRCLE_SHADOW}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={MAIN_CIRCLE_RADIUS}
                                            requiredProps={requiredProps}
                                        />

                                        {cssFilters && cssFilters.length > 0 && cssFilters}
                                    </>
                                }
                                hoverComponents={<>{cssFiltersHover && cssFiltersHover.length > 0 && cssFiltersHover}</>}
                            />
                        </ZoloPanelBody>
                        
                        <ZoloPanelBody title={__('Layer Circle', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                <>

                                {(hasLayer1 || hasLayer2 || hasLayer3) && (
                                <>
                                    {layerCount > 1 && (
                                        <IconicBtnGroup
                                            value={circleLayer}
                                            onChange={(value) =>
                                                setAttributes({
                                                    circleLayer: value,
                                                })
                                            }
                                            options={[
                                                hasLayer1 && { label: 'Layer 1', value: 'layer1' },
                                                hasLayer2 && { label: 'Layer 2', value: 'layer2' },
                                                hasLayer3 && { label: 'Layer 3', value: 'layer3' },
                                            ].filter(Boolean)}
                                        />
                                    )}
                                    {circleLayer === 'layer1' && hasLayer1 && (
                                        <>
                                        <div className="zolo-custom-heading">{__('Layer 1 Border', 'zoloblocks')}</div>
                                             <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LAYER_1_CIRCLE_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={layer1HoverColor}
                                                onChange={(value) => setAttributes({ layer1HoverColor: value })}
                                            />
                                        </>
                                    )}
                                    {circleLayer === 'layer2' && hasLayer2 && (
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LAYER_2_CIRCLE_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={layer2HoverColor}
                                                onChange={(value) => setAttributes({ layer2HoverColor: value })}
                                            />
                                        </>
                                    )}
                                    {circleLayer === 'layer3' && hasLayer3 && (
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LAYER_3_CIRCLE_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={layer3HoverColor}
                                                onChange={(value) => setAttributes({ layer3HoverColor: value })}
                                            />
                                        </>
                                    )}
                                </>
                            )}

                                </>
                         </ZoloPanelBody>
                        {iconItems && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ResRangeControl
                                                label={__('Icon Size', 'zoloblocks')}
                                                controlName={ICON_SIZE}
                                                requiredProps={requiredProps}
                                                min={10}
                                                max={200}
                                            />
                                            <ZoloCardDivider />
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={iconColor}
                                                onChange={(value) => setAttributes({ iconColor: value })}
                                            />
                                            <NormalBGControl
                                                label={__('Background', 'zoloblocks')}
                                                controlName={ICON_BG}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={ICON_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={ICON_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={ICON_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={ICON_RADIUS}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={hoverIconColor}
                                                onChange={(value) => setAttributes({ hoverIconColor: value })}
                                            />
                                            <NormalBGControl
                                                label={__('Background', 'zoloblocks')}
                                                controlName={HOVER_ICON_BG}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={HOVER_ICON_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {imageItems && (
                            <>
                                <ZoloPanelBody title={__('Image', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={IMAGE_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={10}
                                                    max={200}
                                                />
                                                <ZoloCardDivider />
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={IMAGE_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <BoxShadowControl
                                                    label={__('Box Shadow', 'zoloblocks')}
                                                    controlName={IMAGE_SHADOW}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={IMAGE_RADIUS}
                                                    requiredProps={requiredProps}
                                                />
                                                {cssFilters && cssFilters.length > 0 && cssFilters}
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <BoxShadowControl
                                                    label={__('Box Shadow', 'zoloblocks')}
                                                    controlName={HOVER_IMAGE_SHADOW}
                                                    requiredProps={requiredProps}
                                                />
                                                {cssFiltersHover && cssFiltersHover.length > 0 && cssFiltersHover}
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
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
                            block="zolo/circle-info"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
