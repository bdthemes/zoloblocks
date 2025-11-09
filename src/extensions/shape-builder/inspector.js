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
        const currentItem = shape.find(item => item.id === id);
        
        // Only render if shapeType is 'custom'
        if (currentItem?.shapeType !== 'custom') {
            return null;
        }
        
        return (
            <Fragment>
                <MediaUploadControl 
                    currentItem={currentItem}
                    onUpdate={(newSvg) => {
                        const updatedShape = shape.map(item => 
                            item.id === id ? { ...item, customSvg: newSvg } : item
                        );
                        setAttributes({ shape: updatedShape });
                    }}
                />
                
                <CustomColorControls 
                    currentItem={currentItem}
                    itemId={id}
                />
            </Fragment>
        );
    };
    
    // Color controls for custom SVG
    const CustomColorControls = ({ currentItem, itemId }) => {
        return (
            <Fragment>
                <ColorControl
                    label={__('Fill Color', 'zoloblocks')}
                    value={currentItem?.customSvgFillColor || ''}
                    onChange={(color) => {
                        const updatedShape = shape.map(item => 
                            item.id === itemId ? { ...item, customSvgFillColor: color } : item
                        );
                        setAttributes({ shape: updatedShape });
                    }}
                />
                
                <ColorControl
                    label={__('Stroke Color', 'zoloblocks')}
                    value={currentItem?.customSvgStrokeColor || ''}
                    onChange={(color) => {
                        const updatedShape = shape.map(item => 
                            item.id === itemId ? { ...item, customSvgStrokeColor: color } : item
                        );
                        setAttributes({ shape: updatedShape });
                    }}
                />
            </Fragment>
        );
    };
    
    // Check if current item is custom shape (for conditional rendering)
    const isCustomShape = (id) => {
        const currentItem = shape.find(item => item.id === id);
        return currentItem?.shapeType === 'custom';
    };
    
    // Actual upload control component
    const MediaUploadControl = ({ currentItem, onUpdate }) => {
        return (
            <ZoloBaseControl label={__('Custom SVG Upload', 'zoloblocks')}>
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={(media) => {
                            onUpdate({
                                url: media.url,
                                id: media.id,
                            });
                        }}
                        allowedTypes={['image/svg+xml']}
                        value={currentItem?.customSvg?.id}
                        render={({ open }) => (
                            <ZoloButton onClick={open} className="zolo-media-upload-btn">
                                {currentItem?.customSvg?.url ? __('Replace SVG', 'zoloblocks') : __('Upload SVG', 'zoloblocks')}
                            </ZoloButton>
                        )}
                    />
                </MediaUploadCheck>
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
                            label={__('Horizontal Offset (px)', 'zoloblocks')}
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
                            label={__('Vertical Offset (px)', 'zoloblocks')}
                            name="verticalOffset"
                            default={0}
                            min={-500}
                            max={500}
                            step={1}
                        />

                        <ZoloRangeControl label={__('Z-Index', 'zoloblocks')} name="zIndex" default={1} min={-999} max={999} step={1} />

                        <ZoloCardDivider />

                        <ZoloToggleControl label={__('Enable Animation', 'zoloblocks')} name="animationEnabled" default={false} />

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

                        <ZoloRangeControl
                            label={__('Delay (s)', 'zoloblocks')}
                            name="animationDelay"
                            default={0}
                            min={0}
                            max={5}
                            step={0.1}
                        />
                    </ZoloRepeater>
                </>
            )}
        </ZoloPanelBody>
    );
};

export default Inspector;
