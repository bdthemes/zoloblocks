/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    BorderControl,
    BoxShadowControl,
    NormalBGControl,
    ResDimensionsControl,
    TabPanelControl,
    ResRangeControl,
    ResCounterControl,
    ColorControl,
    TypographyDropdown,
    ZoloIconPicker,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    ImageSizes,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    COLUMN_GAP,
    COLUMN_COUNT,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
    IMAGE_BOX_SHADOW,
    IMAGE_BACKGROUND,
    IMAGE_HOVER_BOX_SHADOW,
    IMAGE_HOVER_BACKGROUND,
    IMAGE_PADDING,
    HEADING_BORDER,
    HEADING_BACKGROUND,
    HEADING_MARGIN,
    HEADING_PADDING,
    HEADING_BORDER_RADIUS,
    HEADING_BOX_SHADOW,
    ZOOM_ICON_PADDING,
    ZOOM_ICON_BORDER_RADIUS,
    ZOOM_ICON_BORDER,
    ZOOM_ICON_BOX_SHADOW,
    ZOOM_ICON_BG_COLOR,
    ZOOM_ICON_HOVER_BOX_SHADOW,
    ZOOM_ICON_BG_HOVER_COLOR,
    OVERLAY_BG_COLOR,
    ZOOM_ICON_SIZE,
    MPA_ANIMATIONS,
} from './constants';

import { HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        advancedGallery,
        showCaption,
        showLightbox,
        headingColor,
        zoomIconColor,
        zoomIconHoverBorderColor,
        zoomIconHoverColor,
        imageHoverBorderColor,
        lightboxIcon,
        imageSize,
        entranceAnimation,
        showLightboxThumb,
        showThumbCaption,
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
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <ToggleControl
                                label={__('Show photo caption', 'zolo-blocks')}
                                checked={showCaption}
                                onChange={() =>
                                    setAttributes({
                                        showCaption: !showCaption,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Enable photo lightbox', 'zolo-blocks')}
                                checked={showLightbox}
                                onChange={() =>
                                    setAttributes({
                                        showLightbox: !showLightbox,
                                    })
                                }
                                help={__('This option will only work at the frontend', 'zolo-blocks')}
                            />
                            <div className="zolo-gallery-wrapper">
                                <label className="zolo-control-label" htmlFor="zolo-control-label">
                                    {__('Gallery Photos', 'zolo-blocks')}
                                </label>
                                <div className="zolo-gallery-items">
                                    <div className="replace-btn-wrapper">
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    advancedGallery: media,
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            multiple={true}
                                            gallery={true}
                                            value={advancedGallery && advancedGallery.map((image) => image.id)}
                                            render={({ open }) => (
                                                <button className="zolo-replace-btn" onClick={open}>
                                                    {__('Replace Photos', 'zolo-blocks')}
                                                </button>
                                            )}
                                        />
                                    </div>
                                    {advancedGallery &&
                                        advancedGallery.length > 0 &&
                                        advancedGallery &&
                                        advancedGallery.map((image, index) => {
                                            return (
                                                <div className="zolo-gallery-item" key={index}>
                                                    <img src={image.url} alt={image.alt || image.caption} />
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                            <ImageSizes
                                label={__('Thumb Resolution', 'zolo-blocks')}
                                value={imageSize}
                                onChange={(value) => setAttributes({ imageSize: value })}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Grid', 'zolo-blocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Columns', 'zolo-blocks')}
                                controlName={COLUMN_COUNT}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                defaults={{
                                    deskRange: 3,
                                    tabRange: 2,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl
                                label={__('Gap', 'zolo-blocks')}
                                controlName={COLUMN_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>
                        {showLightbox && (
                            <ZoloPanelBody title={__('Lightbox Settings', 'zolo-blocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Show Thumbnails', 'zolo-blocks')}
                                    checked={showLightboxThumb}
                                    onChange={() => setAttributes({ showLightboxThumb: !showLightboxThumb })}
                                />
                                <ToggleControl
                                    label={__('Show Caption', 'zolo-blocks')}
                                    checked={showThumbCaption}
                                    onChange={() => setAttributes({ showThumbCaption: !showThumbCaption })}
                                />
                                <ZoloIconPicker
                                    label={__('Lightbox Opener Icon', 'zolo-blocks')}
                                    value={lightboxIcon}
                                    onChange={(value) => {
                                        setAttributes({
                                            lightboxIcon: value,
                                        });
                                    }}
                                />
                                <SelectControl
                                    label={__('Entrance Animation', 'zolo-blocks')}
                                    value={entranceAnimation}
                                    options={MPA_ANIMATIONS}
                                    onChange={(v) => {
                                        setAttributes({
                                            entranceAnimation: v,
                                        });
                                    }}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Image', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={IMAGE_BORDER}
                                requiredProps={requiredProps}
                                hoverControl={
                                    <ColorControl
                                        label={__('Border Hover Color', 'zolo-blocks')}
                                        color={imageHoverBorderColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                imageHoverBorderColor: value,
                                            })
                                        }
                                    />
                                }
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={IMAGE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />

                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={IMAGE_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />

                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <BoxShadowControl
                                            controlName={IMAGE_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={IMAGE_BACKGROUND} noMainBGImg={false} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={IMAGE_HOVER_BACKGROUND}
                                            noMainBGImg={false}
                                        />
                                        <BoxShadowControl
                                            controlName={IMAGE_HOVER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {showCaption && (
                            <ZoloPanelBody title={__('Caption', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <>
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={HEADING_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={36}
                                    />
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={headingColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                headingColor: value,
                                            })
                                        }
                                    />
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={HEADING_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={HEADING_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                    <BoxShadowControl
                                        controlName={HEADING_BOX_SHADOW}
                                        requiredProps={requiredProps}
                                        enableTransition={false}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={HEADING_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zolo-blocks')}
                                        controlName={HEADING_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                    <NormalBGControl requiredProps={requiredProps} controlName={HEADING_BACKGROUND} noMainBGImg={false} />
                                </>
                            </ZoloPanelBody>
                        )}
                        {showLightbox && (
                            <ZoloPanelBody title={__('Lightbox Icon', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Size', 'zolo-blocks')}
                                    controlName={ZOOM_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={36}
                                    step={1}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={ZOOM_ICON_BORDER}
                                    requiredProps={requiredProps}
                                    hoverControl={
                                        <ColorControl
                                            label={__('Border Hover Color', 'zolo-blocks')}
                                            color={zoomIconHoverBorderColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    zoomIconHoverBorderColor: value,
                                                })
                                            }
                                        />
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={ZOOM_ICON_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={ZOOM_ICON_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={zoomIconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        zoomIconColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ZOOM_ICON_BG_COLOR}
                                                noMainBGImg={true}
                                            />
                                            <BoxShadowControl
                                                controlName={ZOOM_ICON_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={zoomIconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        zoomIconHoverColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={ZOOM_ICON_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ZOOM_ICON_BG_HOVER_COLOR}
                                                noMainBGImg={true}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Overlay Background', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <NormalBGControl requiredProps={requiredProps} controlName={OVERLAY_BG_COLOR} noMainBGImg={true} />
                        </ZoloPanelBody>
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
