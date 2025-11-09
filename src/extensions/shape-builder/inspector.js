import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const {
    ZoloToggleControl,
    ZoloSelectControl,
    ZoloCardDivider,
    ColorControl,
    ZoloPanelBody,
    PopoverControl,
    ZoloRepeater,
    ZoloRangeControl,
    TabPanelControl,
    IconicBtnGroup,
    ZoloButton,
    ZoloBaseControl,
    ImageAvatar,
} = window.zoloModule;

import {
    SHAPES_DATA,
    ANIMATION_EFFECTS,
    ANIMATION_TRIGGER,
    ANIMATION_EASING,
    ANIMATION_REPEAT,
    GRADIENT_TYPE,
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
} from './constants';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { shapeBuilder, shape = [] } = attributes;

    // Conditional wrapper to show/hide controls based on shapeType
    const ConditionalSvgUpload = ({ id }) => {
        const currentItem = shape.find((item) => item.id === id);

        // Only render if shapeType is 'custom'
        if (currentItem?.shapeType !== 'custom') {
            return null;
        }

        return (
            <>
                <MediaUploadControl
                    currentItem={currentItem}
                    onUpdate={(newSvg) => {
                        const updatedShape = shape.map((item) => (item.id === id ? { ...item, customSvg: newSvg } : item));
                        setAttributes({ shape: updatedShape });
                    }}
                />

                <CustomColorControls currentItem={currentItem} itemId={id} />
            </>
        );
    };

    // Color controls for custom SVG
    const CustomColorControls = ({ currentItem, itemId }) => {
        return (
            <>
                <ColorControl
                    label={__('Fill Color', 'zoloblocks')}
                    value={currentItem?.customSvgFillColor || ''}
                    onChange={(color) => {
                        const updatedShape = shape.map((item) => (item.id === itemId ? { ...item, customSvgFillColor: color } : item));
                        setAttributes({ shape: updatedShape });
                    }}
                />

                <ColorControl
                    label={__('Stroke Color', 'zoloblocks')}
                    value={currentItem?.customSvgStrokeColor || ''}
                    onChange={(color) => {
                        const updatedShape = shape.map((item) => (item.id === itemId ? { ...item, customSvgStrokeColor: color } : item));
                        setAttributes({ shape: updatedShape });
                    }}
                />
            </>
        );
    };

    // Check if current item is custom shape (for conditional rendering)
    const isCustomShape = (id) => {
        const currentItem = shape.find((item) => item.id === id);
        return currentItem?.shapeType === 'custom';
    };

    // Conditional wrapper for animation controls
    const ConditionalAnimationControls = ({ id }) => {
        const currentItem = shape.find((item) => item.id === id);

        // Only render if animationEnabled is true for this specific shape item
        if (!currentItem?.animationEnabled) {
            return null;
        }

        return (
            <>
                <ZoloSelectControl
                    label={__('Animation Effect', 'zoloblocks')}
                    name="animationName"
                    default="fade-in"
                    options={ANIMATION_EFFECTS}
                />

                <ZoloRangeControl
                    label={__('Duration (s)', 'zoloblocks')}
                    name="animationDuration"
                    default={1}
                    min={0.1}
                    max={5}
                    step={0.1}
                />

                <ZoloRangeControl label={__('Delay (s)', 'zoloblocks')} name="animationDelay" default={0} min={0} max={5} step={0.1} />
            </>
        );
    };

    // Actual upload control component
    const MediaUploadControl = ({ currentItem, onUpdate }) => {
        const svgId = currentItem?.customSvg?.id;
        const svgUrl = currentItem?.customSvg?.url;

        return (
            <ZoloBaseControl label={__('Custom SVG Upload', 'zoloblocks')} className="zolo-flex-col-control">
                {svgId ? (
                    <ImageAvatar
                        imageUrl={svgUrl}
                        onDeleteImage={() =>
                            onUpdate({
                                url: '',
                                id: null,
                            })
                        }
                        allowedTypes={['image/svg+xml']}
                        imageId={svgId}
                        onEditImage={(media) => {
                            onUpdate({
                                url: media.url,
                                id: media.id,
                            });
                        }}
                    />
                ) : (
                    <MediaUpload
                        onSelect={(media) => {
                            onUpdate({
                                url: media.url,
                                id: media.id,
                            });
                        }}
                        allowedTypes={['image/svg+xml']}
                        value={svgId}
                        render={({ open }) => (
                            <ZoloButton className="zolo-image-upload-btn" onClick={open}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                </svg>
                                {__(' Upload SVG', 'zoloblocks')}
                            </ZoloButton>
                        )}
                    />
                )}
            </ZoloBaseControl>
        );
    };

    if (!shapeBuilder) return null;

    return (
        <ZoloPanelBody title={__('Shape Builder', 'zoloblocks')} panelProps={panelProps} isNew={true}>
            <ZoloToggleControl
                label={__('Enable Shape Builder', 'zoloblocks')}
                checked={shapeBuilder?.enabled || false}
                onChange={() =>
                    setAttributes({
                        shapeBuilder: {
                            ...shapeBuilder,
                            enabled: !shapeBuilder.enabled,
                        },
                    })
                }
            />

            {shapeBuilder.enabled && (
                <>
                    <ZoloRepeater
                        repeaterItems={shape}
                        onChange={(newShape) => setAttributes({ shape: newShape })}
                        itemLabelName="shapeType"
                        defaultLabel="Shape"
                        addUniqueId={true}
                    >
                        <ZoloSelectControl label={__('Shape Type', 'zoloblocks')} name="shapeType" default="circle" options={SHAPES_DATA} />

                        <ConditionalSvgUpload />

                        <ZoloCardDivider />

                        <IconicBtnGroup
                            label={__('Fill Type', 'zoloblocks')}
                            name="fillType"
                            default="solid"
                            options={[
                                { label: __('Solid', 'zoloblocks'), value: 'solid' },
                                { label: __('Gradient', 'zoloblocks'), value: 'gradient' },
                            ]}
                        />

                        <ColorControl label={__('Color', 'zoloblocks')} name="color" default="" />
                        <ColorControl label={__('Gradient Color 1', 'zoloblocks')} name="gradientColor1" default="#08AEEC" />
                        <ColorControl label={__('Gradient Color 2', 'zoloblocks')} name="gradientColor2" default="#20E2AD" />

                        <ZoloCardDivider />

                        <ZoloRangeControl label={__('Width (px)', 'zoloblocks')} name="width" default={200} min={10} max={500} step={1} />

                        <ZoloRangeControl label={__('Height (px)', 'zoloblocks')} name="height" default={200} min={10} max={500} step={1} />

                        <ZoloCardDivider />

                        <ZoloSelectControl
                            label={__('Horizontal Position', 'zoloblocks')}
                            name="horizontalOrientation"
                            default="start"
                            options={HORIZONTAL_ORIENTATION}
                        />

                        <ZoloRangeControl
                            label={__('Horizontal Offset', 'zoloblocks')}
                            name="horizontalOffset"
                            default={0}
                            min={-500}
                            max={500}
                            step={1}
                        />

                        <ZoloSelectControl
                            label={__('Vertical Position', 'zoloblocks')}
                            name="verticalOrientation"
                            default="start"
                            options={VERTICAL_ORIENTATION}
                        />

                        <ZoloRangeControl
                            label={__('Vertical Offset', 'zoloblocks')}
                            name="verticalOffset"
                            default={0}
                            min={-500}
                            max={500}
                            step={1}
                        />

                        <ZoloRangeControl label={__('Z-Index', 'zoloblocks')} name="zIndex" default={1} min={-999} max={999} step={1} />

                        <ZoloCardDivider />

                        <ZoloToggleControl label={__('Enable Animation', 'zoloblocks')} name="animationEnabled" default={false} />

                        <ConditionalAnimationControls />
                    </ZoloRepeater>
                </>
            )}
        </ZoloPanelBody>
    );
};

export default Inspector;
