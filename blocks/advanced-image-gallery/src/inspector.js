/**
 * WordPress dependencies
 */
import { InspectorControls, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
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
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    ROW_GAP,
    COLUMNS_GAP,
    COLUMN_COUNT,
    CONTAINER_BORDER,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTAINER_HOVER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
    IMAGE_BOX_SHADOW,
    IMAGE_BACKGROUND,
    IMAGE_HOVER_BORDER,
    IMAGE_HOVER_BOX_SHADOW,
    IMAGE_HOVER_BACKGROUND,
    IMAGE_PADDING,
    IMAGE_MARGIN,
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
} from './constants';

import { HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        showCaption,
        showLightbox,
        advancedGallery,
        headingColor,
        zoomIconColor,
        zoomIconHoverBorderColor,
        zoomIconHoverColor,
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
                generalTab={
                    <>
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={true}>
                            <SelectControl
                                label={__('Preset Designs', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <p>{__('Elements', 'zolo-blocks')}</p>
                            <ToggleControl
                                label={__('Caption', 'zolo-blocks')}
                                checked={showCaption}
                                onChange={() =>
                                    setAttributes({
                                        showCaption: !showCaption,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Lightbox', 'zolo-blocks')}
                                checked={showLightbox}
                                onChange={() =>
                                    setAttributes({
                                        showLightbox: !showLightbox,
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
                            <MediaPlaceholder
                                onSelect={(media) => {
                                    setAttributes({
                                        advancedGallery: media,
                                    });
                                }}
                                gallery={true}
                                multiple={true}
                                allowedTypes={['image']}
                                value={advancedGallery && advancedGallery.map((image) => image.id)}
                            />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Grid', 'zolo-blocks')} initialOpen={false}>
                            <ResCounterControl
                                label={__('Columns', 'zolo-blocks')}
                                controlName={COLUMN_COUNT}
                                requiredProps={requiredProps}
                                min={1}
                                max={5}
                            />
                            <ResRangeControl
                                label={__('Column Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Row Gap', 'zolo-blocks')}
                                controlName={ROW_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={CONTAINER_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={CONTAINER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={CONTAINER_BACKGROUND}
                                            noMainBGImg={false}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={CONTAINER_HOVER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={CONTAINER_HOVER_BACKGROUND}
                                            noMainBGImg={false}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_HOVER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Image', 'zolo-blocks')} initialOpen={false}>
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={IMAGE_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={IMAGE_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={IMAGE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <BorderControl
                                            label={__('Image Border', 'zolo-blocks')}
                                            controlName={IMAGE_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={IMAGE_BACKGROUND}
                                            noMainBGImg={false}
                                        />
                                        <BoxShadowControl
                                            controlName={IMAGE_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={IMAGE_HOVER_BORDER}
                                            requiredProps={requiredProps}
                                        />
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
                        </PanelBody>
                        {showCaption && (
                            <PanelBody title={__('Caption', 'zolo-blocks')} initialOpen={false}>
                                <>
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={HEADING_TYPOGRAPHY}
                                        requiredProps={requiredProps}
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
                                    <NormalBGControl
                                        requiredProps={requiredProps}
                                        controlName={HEADING_BACKGROUND}
                                        noMainBGImg={false}
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
                                </>
                            </PanelBody>
                        )}
                        {showLightbox && (
                            <PanelBody title={__('Lightbox', 'zolo-blocks')} initialOpen={false}>
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={ZOOM_ICON_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={ZOOM_ICON_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
                                                controlName={ZOOM_ICON_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={ZOOM_ICON_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ZOOM_ICON_BG_COLOR}
                                                noMainBGImg={true}
                                            />
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={zoomIconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        zoomIconColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Border Hover Color', 'zolo-blocks')}
                                                color={zoomIconHoverBorderColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        zoomIconHoverBorderColor: value,
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
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={zoomIconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        zoomIconHoverColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <PanelBody title={__('Visibility', 'zolo-blocks')} initialOpen={false}>
                            <p>{__('Advanced Settings are here..', 'zolo-blocks')}</p>
                        </PanelBody>
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
