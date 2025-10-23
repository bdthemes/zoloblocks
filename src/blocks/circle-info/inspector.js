/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import {} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
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
    CIRCLE_SIZE,
    MAIN_CIRCLE_SIZE,
    MAIN_CIRCLE_BORDER,
    MAIN_CIRCLE_SHADOW,
    MAIN_CIRCLE_RADIUS,
    IMAGE_SIZE,
    IMAGE_BORDER,
    IMAGE_SHADOW,
    IMAGE_RADIUS,
    HOVER_IMAGE_SHADOW,
    ICON_SIZE,
    ICON_BG,
    ICON_PADDING,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_RADIUS,
    HOVER_ICON_BG,
    HOVER_ICON_SHADOW,
} from './constants';

import {} from './constants/typoPrefixConstant';

function Inspector(props) {
    const { block, attributes, setAttributes } = props;
    const { resMode, photo, imageRes, circleItems, iconColor, hoverIconColor, animation, animationDuration, hoverAnimation } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

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
                            {animation && (
                                <div className="zolo-flex-col-control">
                                    <ZoloRangeControl
                                        label={__('Speed (seconds)', 'zoloblocks')}
                                        value={animationDuration / 1000}
                                        onChange={(value) =>
                                            setAttributes({
                                                animationDuration: value * 1000,
                                            })
                                        }
                                        min={1}
                                        max={100}
                                        step={1}
                                    />
                                </div>
                            )}

                            <ResRangeControl
                                label={__('Circle Size', 'zoloblocks')}
                                controlName={CIRCLE_SIZE}
                                requiredProps={requiredProps}
                                min={50}
                                max={500}
                            />

                            <ZoloBaseControl label={__('Photo', 'zoloblocks')} className="zolo-flex-col-control">
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
                                    </>
                                }
                                hoverComponents={<></>}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Image', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={IMAGE_SIZE}
                                            requiredProps={requiredProps}
                                            max={500}
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
                                        {cssFilters && cssFilters.length > 0 && cssFilters}
                                    </>
                                }
                            />
                        </ZoloPanelBody>

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
