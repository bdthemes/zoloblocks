/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, RangeControl, SelectControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    IconicBtnGroup,
    AdvancedOptions,
    GoogleMapAutocomplete,
    ResDimensionsControl,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';
import { MAP_TYPES, LANGUAGES, MAP_HEIGHT, MAP_BRADIUS } from './constants';

import { MINFO_TYPO } from './constants/typoPrefixConstant';

// Markers Repeater
import Repeater from './repeater';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        mapStyleType,
        mapId,
        mapStyleCodes,
        showUIControls,
        uiControls,
        draggable,
        location,
        zoom,
        mapType,
        language,
        latitude,
        longitude,
        infoWindow,
        markers,
        markerInfoColor,
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
                block="zolo/google-map"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <GoogleMapAutocomplete
                                label={__('Default Location', 'zoloblocks')}
                                value={location}
                                onChange={(v) => setAttributes({ location: v })}
                                onClick={(v) => {
                                    setAttributes({
                                        location: v.formatted_address,
                                        latitude: v.geometry.location.lat(),
                                        longitude: v.geometry.location.lng(),
                                    });
                                }}
                            />
                            <TextControl
                                label={__('Latitude', 'zoloblocks')}
                                placeholder={__('24.8233495', 'zoloblocks')}
                                value={latitude}
                                readOnly={true}
                                type="number"
                            />
                            <TextControl
                                label={__('Longitude', 'zoloblocks')}
                                placeholder={__('-122.4194', 'zoloblocks')}
                                value={longitude}
                                readOnly={true}
                                type="number"
                            />
                            <TextareaControl
                                label={__('Marker Description')}
                                value={infoWindow}
                                onChange={(v) =>
                                    setAttributes({
                                        infoWindow: v,
                                    })
                                }
                                placeholder={__('Enter your marker description', 'zoloblocks')}
                                help={__('HTML tags are allowed', 'zoloblocks')}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('More Locations', 'zoloblocks')} panelProps={props}>
                            <Repeater markers={markers} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Map UI', 'zoloblocks')} panelProps={props}>
                            <ToggleControl
                                label={__('Enable Draggable', 'zoloblocks')}
                                checked={draggable}
                                onChange={() => setAttributes({ draggable: !draggable })}
                            />
                            <ToggleControl
                                label={__('Show UI Controls', 'zoloblocks')}
                                checked={showUIControls}
                                onChange={() =>
                                    setAttributes({
                                        showUIControls: !showUIControls,
                                    })
                                }
                            />

                            {showUIControls && (
                                <>
                                    <ToggleControl
                                        label={__('Enable Fullscreen Control', 'zoloblocks')}
                                        checked={uiControls?.fullscreenControl}
                                        onChange={() => {
                                            setAttributes({
                                                uiControls: {
                                                    ...uiControls,
                                                    fullscreenControl: !uiControls?.fullscreenControl,
                                                },
                                            });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Enable Map Type Control', 'zoloblocks')}
                                        checked={uiControls?.mapTypeControl}
                                        onChange={() =>
                                            setAttributes({
                                                uiControls: {
                                                    ...uiControls,
                                                    mapTypeControl: !uiControls?.mapTypeControl,
                                                },
                                            })
                                        }
                                    />
                                    <ToggleControl
                                        label={__('Enable Zoom Control', 'zoloblocks')}
                                        checked={uiControls?.zoomControl}
                                        onChange={() =>
                                            setAttributes({
                                                uiControls: {
                                                    ...uiControls,
                                                    zoomControl: !uiControls?.zoomControl,
                                                },
                                            })
                                        }
                                    />
                                    <ToggleControl
                                        label={__('Enable Scale Control', 'zoloblocks')}
                                        checked={uiControls?.scaleControl}
                                        onChange={() =>
                                            setAttributes({
                                                uiControls: {
                                                    ...uiControls,
                                                    scaleControl: !uiControls?.scaleControl,
                                                },
                                            })
                                        }
                                    />
                                    <ToggleControl
                                        label={__('Enable Street View Control', 'zoloblocks')}
                                        checked={uiControls?.streetViewControl}
                                        onChange={() =>
                                            setAttributes({
                                                uiControls: {
                                                    ...uiControls,
                                                    streetViewControl: !uiControls?.streetViewControl,
                                                },
                                            })
                                        }
                                    />
                                </>
                            )}
                            <IconicBtnGroup
                                label={__('Map Style Type', 'zoloblocks')}
                                value={mapStyleType}
                                options={[
                                    {
                                        label: __('Default', 'zoloblocks'),
                                        value: 'default',
                                    },
                                    {
                                        label: __('Custom', 'zoloblocks'),
                                        value: 'custom',
                                    },
                                ]}
                                onChange={(mapStyleType) => setAttributes({ mapStyleType })}
                            />
                            {mapStyleType === 'default' && (
                                <TextControl
                                    label={__('Map ID', 'zoloblocks')}
                                    help={__('Enter your map ID', 'zoloblocks')}
                                    value={mapId}
                                    onChange={(mapId) => setAttributes({ mapId })}
                                    placeholder="31bf003fdd5e1eb2"
                                />
                            )}
                            {mapStyleType === 'custom' && (
                                <TextareaControl
                                    label={__('Paste Style Codes', 'zoloblocks')}
                                    help={
                                        <div className="components-base-control__help">
                                            Paste your map style codes here visit{' '}
                                            <a href="https://snazzymaps.com/explore" target="_blank" rel="noopener noreferrer">
                                                Snazzy Maps Styles
                                            </a>
                                        </div>
                                    }
                                    value={mapStyleCodes}
                                    onChange={(v) => {
                                        setAttributes({ mapStyleCodes: v });
                                    }}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Settings', 'zoloblocks')} panelProps={props}>
                            <RangeControl
                                label={__('Zoom Level', 'zoloblocks')}
                                help={__(
                                    'Set the initial zoom level of the map. The higher the value will be the more zoomed in the map',
                                    'zoloblocks'
                                )}
                                value={zoom}
                                onChange={(zoom) => setAttributes({ zoom })}
                                min={1}
                                max={21}
                            />
                            <SelectControl
                                label={__('Map View Type', 'zoloblocks')}
                                help={__(
                                    'Set the type of map to be displayed, such as road map, satellite imagery, or terrain.',
                                    'zoloblocks'
                                )}
                                value={mapType}
                                options={MAP_TYPES}
                                onChange={(mapType) => {
                                    setAttributes({ mapType });
                                }}
                            />
                            <SelectControl
                                label={__('Select Language', 'zoloblocks')}
                                help={__(
                                    'Select the language of the map interface. such as for English select English or French select French',
                                    'zoloblocks'
                                )}
                                value={language}
                                options={LANGUAGES}
                                onChange={(language) => {
                                    setAttributes({ language });
                                }}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Map', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Height', 'zoloblocks')}
                                help={__('Specifies the height of the map in pixels.', 'zoloblocks')}
                                controlName={MAP_HEIGHT}
                                requiredProps={requiredProps}
                                min={200}
                                max={1000}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={MAP_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Marker Info', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={markerInfoColor}
                                onChange={(markerInfoColor) => setAttributes({ markerInfoColor })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={MINFO_TYPO}
                                requiredProps={requiredProps}
                                max={36}
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
                            block="zolo/google-map"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
