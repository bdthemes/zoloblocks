import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { __ } from '@wordpress/i18n';
// marker
import ZoloMarker from './marker';
const { zoloSettings } = window;

function GoogleMap({ attributes }) {
    const {
        draggable,
        showUIControls,
        uiControls,
        language,
        zoom,
        latitude,
        longitude,
        infoWindow,
        mapType,
        mapStyleType,
        mapId,
        mapStyleCodes,
        markers,
    } = attributes;

    const position = { lat: latitude || 24.8233495, lng: longitude || 89.3841374 };


    return (
        <>
            {zoloSettings?.googleAPIKey ? (
                <APIProvider apiKey={zoloSettings?.googleAPIKey} language={language} libraries={['places']}>
                    <div className="zolo-gmap-wrapper">
                        <Map
                            {...(mapStyleType === 'custom' && mapStyleCodes && { styles: JSON.parse(mapStyleCodes) })}
                            defaultZoom={zoom || 16}
                            defaultCenter={position}
                            language={language || 'en'}
                            {...((mapStyleType === 'default' || mapStyleType === undefined) && { mapId: mapId })}
                            mapTypeId={mapType || 'roadmap'}
                            disableDefaultUI={!(showUIControls === undefined ? true : showUIControls)}
                            draggable={draggable === undefined ? true : draggable}
                            scaleControl={
                                (showUIControls === undefined ? true : showUIControls) &&
                                (uiControls?.scaleControl === undefined ? true : uiControls?.scaleControl)
                            }
                            streetViewControl={
                                (showUIControls === undefined ? true : showUIControls) &&
                                (uiControls?.streetViewControl === undefined ? true : uiControls?.streetViewControl)
                            }
                            zoomControl={
                                (showUIControls === undefined ? true : showUIControls) &&
                                (uiControls?.zoomControl === undefined ? true : uiControls?.zoomControl)
                            }
                            mapTypeControl={
                                (showUIControls === undefined ? true : showUIControls) &&
                                (uiControls?.mapTypeControl === undefined ? true : uiControls?.mapTypeControl)
                            }
                            fullscreenControl={
                                (showUIControls === undefined ? true : showUIControls) &&
                                (uiControls?.fullscreenControl === undefined ? true : uiControls?.fullscreenControl)
                            }
                            disableDoubleClickZoom={true}
                        >
                            <ZoloMarker
                                position={position}
                                info={
                                    infoWindow ||
                                    '<a href="https://bdthemes.com"><b>BdThemes</b></a> is the sole owner of market-leading addons for #1 Elementor such as Element Pack Pro, Prime Slider, Ultimate Post Kit, Ultimate Store Kit, Pixel Gallery, and more useful plugins.'
                                }
                            />
                            {markers &&
                                markers.length > 0 &&
                                markers.map((marker, index) => <ZoloMarker key={index} position={marker.position} info={marker.info} />)}
                        </Map>
                    </div>
                </APIProvider>
            ) : (
                <div className="zolo-google-map">
                    <p className="zolo-notice-error">
                        {__('No Google API Key Found. Please add google api key in the', 'zoloblocks')}{' '}
                        <a href={`${zoloSettings.home_url}/wp-admin/admin.php?page=zoloblocks#apiSettings`}>
                            {__('ZoloBlocks settings', 'zoloblocks')}
                        </a>
                    </p>
                </div>
            )}
        </>
    );
}

export default GoogleMap;
