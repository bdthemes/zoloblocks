'use client';

import { useState } from 'react';
import { APIProvider, Map, Pin, InfoWindow, Marker, Autocomplete } from '@vis.gl/react-google-maps';

function GoogleMap({ attributes, setAttributes }) {
    const {
        preview,
        uniqueId,
        parentClasses,
        location,
        disableDefaultUI,
        fullscreenControl,
        draggable,
        mapTypeControl,
        zoomControl,
        scrollwheel,
        scaleControl,
        rotateControl,
        streetViewControl,
        height,
        language,
        zoom,
        latitude,
        longitude,
        mapType,
        apiKey,
        mapId,
    } = attributes;
    const position = { lat: latitude, lng: longitude };
    const [open, setOpen] = useState(false);
    const styles = [
        {
            elementType: 'geometry',
            stylers: [
                {
                    color: '#242f3e',
                },
            ],
        },
        {
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#746855',
                },
            ],
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    color: '#242f3e',
                },
            ],
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#d59563',
                },
            ],
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#d59563',
                },
            ],
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#263c3f',
                },
            ],
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#6b9a76',
                },
            ],
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#38414e',
                },
            ],
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#212a37',
                },
            ],
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#9ca5b3',
                },
            ],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#746855',
                },
            ],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#1f2835',
                },
            ],
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#f3d19c',
                },
            ],
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#2f3948',
                },
            ],
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#d59563',
                },
            ],
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#17263c',
                },
            ],
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#515c6d',
                },
            ],
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    color: '#17263c',
                },
            ],
        },
    ];

    return (
        <APIProvider apiKey={apiKey} language={language}>
            <div style={{ height, width: '100%' }}>
                <Map
                    styles={styles}
                    zoom={zoom}
                    center={position}
                    // mapId={mapId}
                    mapTypeId={mapType}
                    scaleControl={scaleControl}
                    streetViewControl={streetViewControl}
                    rotateControl={rotateControl}
                    language={language}
                    draggable={draggable}
                    scrollwheel={scrollwheel}
                    disableDefaultUI={disableDefaultUI}
                    fullscreenControl={fullscreenControl}
                    mapTypeControl={mapTypeControl}
                    zoomControl={zoomControl}
                    disableDoubleClickZoom={true}
                >
                    <Marker position={position} onClick={() => setOpen(true)}>
                        <Pin background={'grey'} borderColor={'green'} glyphColor={'purple'} />
                    </Marker>

                    {open && (
                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>Popup text will goes here!</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
}

export default GoogleMap;
