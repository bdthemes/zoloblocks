/**
 * Internal depencencies
 */
const { GoogleMapAutocomplete } = window.zoloModule;

const { __ } = wp.i18n;
const { Button, PanelBody, TextareaControl } = wp.components;
import { TextControl } from '@wordpress/components';
import { cloneDeep } from 'lodash';

const Repeater = ({ markers, setAttributes }) => {
    const deepCloneMarkers = cloneDeep(markers);
    return (
        <div className="sortable zolo-gmap-repeater">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Location', 'zoloblocks')}</div>
                <Button
                    onClick={() =>
                        setAttributes({
                            markers: [
                                ...markers,
                                {
                                    location: 'BdThemes',
                                    position: {
                                        lat: 24.8233495,
                                        lng: 89.3841374,
                                    },
                                    info: '',
                                },
                            ],
                        })
                    }
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </Button>
            </div>
            {deepCloneMarkers &&
                deepCloneMarkers.map((marker, index) => {
                    return (
                        <div className="dnd-container" key={index}>
                            <Button
                                className="dnd-trash"
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        markers: markers.filter((marker, i) => index !== i),
                                    });
                                }}
                            />
                            <PanelBody title={marker?.location || 'Location'} initialOpen={false}>
                                <GoogleMapAutocomplete
                                    label={__('Location', 'zoloblocks')}
                                    value={marker?.location}
                                    onChange={(v) => {
                                        const newItems = [...deepCloneMarkers];
                                        newItems[index].location = v.formatted_address;
                                        setAttributes({
                                            markers: newItems,
                                        });
                                    }}
                                    onClick={(v) => {
                                        const newItems = [...deepCloneMarkers];
                                        newItems[index].location = v.formatted_address;
                                        newItems[index].position.lat = v.geometry.location.lat();
                                        newItems[index].position.lng = v.geometry.location.lng();
                                        setAttributes({
                                            markers: newItems,
                                        });
                                    }}
                                />
                                <TextControl label={__('Latitude', 'zoloblocks')} value={marker?.position.lat} readOnly={true} />
                                <TextControl label={__('Longitude', 'zoloblocks')} value={marker?.position.lng} readOnly={true} />
                                <TextareaControl
                                    label={__('Marker Description', 'zoloblocks')}
                                    value={marker?.info}
                                    onChange={(v) => {
                                        const newItems = [...deepCloneMarkers];
                                        newItems[index].info = v;
                                        setAttributes({
                                            markers: newItems,
                                        });
                                    }}
                                    help={__('HTML tags are allowed', 'zoloblocks')}
                                />
                            </PanelBody>
                        </div>
                    );
                })}
        </div>
    );
};

export default Repeater;
