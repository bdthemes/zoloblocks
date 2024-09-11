/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { ToggleControl, SelectControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

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
    SimpleRangeControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    COLUMN_GAP,
    COLUMN_COUNT,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
    IMAGE_BOX_SHADOW,
    IMAGE_BACKGROUND,
    IMAGE_HOVER_BOX_SHADOW,
    IMAGE_HOVER_BACKGROUND,
    IMAGE_PADDING,
    IMAGE_HEIGHT,
    HEADING_BORDER,
    HEADING_BACKGROUND,
    HEADING_MARGIN,
    HEADING_PADDING,
    HEADING_BORDER_RADIUS,
    HEADING_BOX_SHADOW,
    TITLE_MARGIN,
    CONTENT_BORDER,
    CONTENT_BACKGROUND,
    CONTENT_MARGIN,
    CONTENT_PADDING,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
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
import { TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        advancedGallery,
        showCaption,
        showTitle,
        showLightbox,
        headingColor,
        TitleColor,
        zoomIconColor,
        zoomIconHoverBorderColor,
        zoomIconHoverColor,
        imageHoverBorderColor,
        lightboxIcon,
        imageSize,
        entranceAnimation,
        showLightboxThumb,
        showThumbCaption,
        backdropFilterBlur,
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
                block="zolo/image-gallery"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Preset', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.imageGallery.presets', PRESETS)}
                                onChange={(v) => {
                                    setAttributes({
                                        preset: v,
                                    });
                                }}
                            />
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Photo caption', 'zoloblocks')}
                                checked={showCaption}
                                onChange={() =>
                                    setAttributes({
                                        showCaption: !showCaption,
                                    })
                                }
                            />

                            {preset === 'style-2' && (
                                <ToggleControl
                                    label={__('Sub Title', 'zoloblocks')}
                                    checked={showTitle}
                                    onChange={() =>
                                        setAttributes({
                                            showTitle: !showTitle,
                                        })
                                    }
                                    help={__('Alt text will be used as subtitle', 'zoloblocks')}
                                />
                            )}

                            <ToggleControl
                                label={__('Enable photo lightbox', 'zoloblocks')}
                                checked={showLightbox}
                                onChange={() =>
                                    setAttributes({
                                        showLightbox: !showLightbox,
                                    })
                                }
                                help={__('This option will only work at the frontend', 'zoloblocks')}
                            />
                            <CardDivider />
                            <div className="zolo-gallery-wrapper">
                                <label className="zolo-control-label" htmlFor="zolo-control-label">
                                    {__('Gallery Photos', 'zoloblocks')}
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
                                                    {__('Replace Photos', 'zoloblocks')}
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
                                label={__('Resolution', 'zoloblocks')}
                                value={imageSize}
                                onChange={(value) => setAttributes({ imageSize: value })}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Grid', 'zoloblocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Columns', 'zoloblocks')}
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
                                label={__('Gap', 'zoloblocks')}
                                controlName={COLUMN_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>
                        {showLightbox && (
                            <ZoloPanelBody title={__('Lightbox Settings', 'zoloblocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Thumbnails', 'zoloblocks')}
                                    checked={showLightboxThumb}
                                    onChange={() => setAttributes({ showLightboxThumb: !showLightboxThumb })}
                                />
                                <ToggleControl
                                    label={__('Caption', 'zoloblocks')}
                                    checked={showThumbCaption}
                                    onChange={() => setAttributes({ showThumbCaption: !showThumbCaption })}
                                />
                                <CardDivider />
                                <ZoloIconPicker
                                    label={__('Opener Icon', 'zoloblocks')}
                                    value={lightboxIcon}
                                    onChange={(value) => {
                                        setAttributes({
                                            lightboxIcon: value,
                                        });
                                    }}
                                />
                                <SelectControl
                                    label={__('Animation', 'zoloblocks')}
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
                        <ZoloPanelBody title={__('Image', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={IMAGE_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={1}
                                            max={500}
                                            step={1}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={IMAGE_BACKGROUND} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={IMAGE_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={IMAGE_BORDER}
                                            requiredProps={requiredProps}
                                            hoverControl={
                                                <ColorControl
                                                    label={__('Border Hover Color', 'zoloblocks')}
                                                    color={imageHoverBorderColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            imageHoverBorderColor: value,
                                                        })
                                                    }
                                                />
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={IMAGE_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={IMAGE_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
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

                        {/* style 2 content wrap start */}
                        {preset === 'style-2' && (
                            <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <>
                                    <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BACKGROUND} noMainBGImg={false} />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={CONTENT_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={CONTENT_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                    <CardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={CONTENT_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <BoxShadowControl
                                        controlName={CONTENT_BOX_SHADOW}
                                        requiredProps={requiredProps}
                                        enableTransition={false}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={CONTENT_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </>
                            </ZoloPanelBody>
                        )}
                        {/* style 2 content wrap end */}

                        {showCaption && (
                            <ZoloPanelBody title={__('Caption', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={headingColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                headingColor: value,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={HEADING_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={36}
                                    />
                                    <CardDivider />
                                    {preset !== 'style-2' && (
                                        <>
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={HEADING_BACKGROUND}
                                                noMainBGImg={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={HEADING_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={HEADING_MARGIN}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={HEADING_BORDER}
                                                requiredProps={requiredProps}
                                            />

                                            <BoxShadowControl
                                                controlName={HEADING_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={HEADING_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    )}
                                    {preset === 'style-2' && (
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HEADING_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                    )}
                                </>
                            </ZoloPanelBody>
                        )}

                        {showTitle && preset === 'style-2' && (
                            <ZoloPanelBody title={__('Sub Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={TitleColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                TitleColor: value,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={TITLE_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={36}
                                    />
                                    <CardDivider />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={TITLE_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </>
                            </ZoloPanelBody>
                        )}

                        {showLightbox && (
                            <ZoloPanelBody title={__('Lightbox Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={zoomIconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        zoomIconColor: value,
                                                    })
                                                }
                                            />
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={ZOOM_ICON_SIZE}
                                                requiredProps={requiredProps}
                                                min={1}
                                                max={36}
                                                step={1}
                                            />
                                            <CardDivider />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ZOOM_ICON_BG_COLOR}
                                                noMainBGImg={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={ZOOM_ICON_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={ZOOM_ICON_BORDER}
                                                requiredProps={requiredProps}
                                                hoverControl={
                                                    <ColorControl
                                                        label={__('Border Hover Color', 'zoloblocks')}
                                                        color={zoomIconHoverBorderColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                zoomIconHoverBorderColor: value,
                                                            })
                                                        }
                                                    />
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={ZOOM_ICON_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={ZOOM_ICON_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={zoomIconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        zoomIconHoverColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ZOOM_ICON_BG_HOVER_COLOR}
                                                noMainBGImg={true}
                                            />
                                            <BoxShadowControl
                                                controlName={ZOOM_ICON_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Overlay Background', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <NormalBGControl requiredProps={requiredProps} controlName={OVERLAY_BG_COLOR} noMainBGImg={true} />
                            <div className="zolo-flex-col-control">
                                <SimpleRangeControl
                                    label={__('Blur', 'zoloblocks')}
                                    value={backdropFilterBlur}
                                    onChange={(filterBlur) =>
                                        setAttributes({
                                            backdropFilterBlur: filterBlur,
                                        })
                                    }
                                    max={50}
                                />
                            </div>
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/image-gallery"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
