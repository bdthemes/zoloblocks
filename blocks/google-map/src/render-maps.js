import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { __ } from '@wordpress/i18n';
// marker
import ZoloMarker from './marker';

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

    const position = { lat: latitude, lng: longitude };

    return (
        <>
            {zoloSettings?.googleAPIKey ? (
                <APIProvider apiKey={zoloSettings?.googleAPIKey} language={language} libraries={['places']}>
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
                            {markers &&
                                markers.length > 0 &&
                                markers.map((marker, index) => <ZoloMarker key={index} position={marker.position} info={marker.info} />)}
                        </Map>
                    </div>
                </APIProvider>
            ) : (
                <div className="zolo-google-map">
                    <p className="zolo-notice-error">
                        {__('No Google API Key Found. Please add google api key in the ZoloBlocks settings', 'zolo-blocks')}
                    </p>
                </div>
            )}
        </>
    );
}

export default GoogleMap;
