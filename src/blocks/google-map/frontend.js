import { createRoot } from '@wordpress/element';
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

    const position = { lat: latitude || 24.8233495, lng: longitude || 89.3841374 };

    return (
        <APIProvider apiKey={apiKey} language={language || 'en'} libraries={['places']}>
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
                    scaleControl={showUIControls && (uiControls?.scaleControl === undefined ? true : uiControls?.scaleControl)}
                    streetViewControl={
                        showUIControls && (uiControls?.streetViewControl === undefined ? true : uiControls?.streetViewControl)
                    }
                    zoomControl={showUIControls && (uiControls?.zoomControl === undefined ? true : uiControls?.zoomControl)}
                    mapTypeControl={showUIControls && (uiControls?.mapTypeControl === undefined ? true : uiControls?.mapTypeControl)}
                    fullscreenControl={
                        showUIControls && (uiControls?.fullscreenControl === undefined ? true : uiControls?.fullscreenControl)
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
            const options = JSON.parse(googleMap.dataset?.options || '{}');
            const root = createRoot(googleMap);
            root.render(<GoogleMapFrontend apiKey={apiKey} {...options} />);
        });
    }
});
