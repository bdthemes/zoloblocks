import { render } from '@wordpress/element';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import apiFetch from '@wordpress/api-fetch';
import ZoloMarker from './marker';

const GoogleMapFrontend = (props) => {
    const {
        apiKey,
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
    } = props;

    const position = { lat: latitude, lng: longitude };

    return (
        <APIProvider apiKey={apiKey} language={language} libraries={['places']}>
            <div className="zolo-gmap-wrapper">
                <Map
                    {...(mapStyleType === 'custom' && mapStyleCodes && { styles: JSON.parse(mapStyleCodes) })}
                    zoom={zoom}
                    center={position}
                    language={language}
                    {...(mapStyleType === 'default' && { mapId: mapId })}
                    mapTypeId={mapType}
                    disableDefaultUI={!showUIControls}
                    draggable={draggable}
                    scaleControl={showUIControls && uiControls?.scaleControl}
                    streetViewControl={showUIControls && uiControls?.streetViewControl}
                    zoomControl={showUIControls && uiControls?.zoomControl}
                    mapTypeControl={showUIControls && uiControls?.mapTypeControl}
                    fullscreenControl={showUIControls && uiControls?.fullscreenControl}
                    disableDoubleClickZoom={true}
                >
                    <ZoloMarker position={position} info={infoWindow} />
                    {markers && markers.map((marker, index) => <ZoloMarker key={index} position={marker.position} info={marker.info} />)}
                </Map>
            </div>
        </APIProvider>
    );
};

// Fetch google map api key once
// let apiKeyPromise = apiFetch({
//     path: '/wp/v2/settings',
//     method: 'GET',
// }).then((response) => response.zolo_google_api_key);

document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = zoloSettings?.googleAPIKey;
    const googleMaps = document.querySelectorAll('.wp-block-zolo-google-map');

    if (googleMaps.length > 0) {
        googleMaps.forEach((googleMap) => {
            const options = JSON.parse(googleMap.dataset.options);
            render(<GoogleMapFrontend apiKey={apiKey} {...options} />, googleMap);
        });
    }
});
