/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

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
    IconPicker,
    AdvancedOptions,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    ROW_GAP,
    COLUMNS_GAP,
    COLUMN_COUNT,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
    IMAGE_BOX_SHADOW,
    IMAGE_BACKGROUND,
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
    OVERLAY_BG_COLOR,
    ZOOM_ICON_SIZE,
} from './constants';

import { HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        showCaption,
        showLightbox,
        headingColor,
        zoomIconColor,
        zoomIconHoverBorderColor,
        zoomIconHoverColor,
        imageHoverBorderColor,
        lightboxIcon,
        selectedPanel,
        selectedTab,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    useEffect(() => {
        // set initial panle to panel11
        if (!selectedPanel) {
            setAttributes({
                selectedPanel: 'general',
            });
        }
    }, [selectedPanel, selectedTab]);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <PanelBody
                            title={__('General', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'general' })}
                            opened={selectedPanel === 'general'}
                        >
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
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
                        </PanelBody>
                        <PanelBody
                            title={__('Grid', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'grid' })}
                            opened={selectedPanel === 'grid'}
                        >
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
                        </PanelBody>
                        {showLightbox && (
                            <PanelBody
                                title={__('Lightbox Icon', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'lightboxIcon' })}
                                opened={selectedPanel === 'lightboxIcon'}
                            >
                                <IconPicker
                                    value={lightboxIcon}
                                    onChange={(value) => {
                                        setAttributes({
                                            lightboxIcon: value,
                                        });
                                    }}
                                    showHeading={false}
                                    disableDashicon={true}
                                />
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <PanelBody
                            title={__('Image', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'imageStyle' })}
                            opened={selectedPanel === 'imageStyle'}
                        >
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={IMAGE_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={IMAGE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />

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
                                        <ColorControl
                                            label={__('Border Hover Color', 'zolo-blocks')}
                                            color={imageHoverBorderColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imageHoverBorderColor: value,
                                                })
                                            }
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
                            <PanelBody
                                title={__('Caption', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'captionStyle' })}
                                opened={selectedPanel === 'captionStyle'}
                            >
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
                            </PanelBody>
                        )}
                        {showLightbox && (
                            <PanelBody
                                title={__('Lightbox Icon', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'lightboxIconStyle' })}
                                opened={selectedPanel === 'lightboxIconStyle'}
                            >
                                <ResRangeControl
                                    label={__('Size', 'zolo-blocks')}
                                    controlName={ZOOM_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={200}
                                    step={1}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={ZOOM_ICON_BORDER}
                                    requiredProps={requiredProps}
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
                                                label={__('Border Hover Color', 'zolo-blocks')}
                                                color={zoomIconHoverBorderColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        zoomIconHoverBorderColor: value,
                                                    })
                                                }
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
                            </PanelBody>
                        )}
                        <PanelBody
                            title={__('Overlay Background', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'overlayBgStyle' })}
                            opened={selectedPanel === 'overlayBgStyle'}
                        >
                            <NormalBGControl requiredProps={requiredProps} controlName={OVERLAY_BG_COLOR} noMainBGImg={true} />
                        </PanelBody>
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
