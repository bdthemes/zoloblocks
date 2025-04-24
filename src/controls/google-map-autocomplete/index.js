import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef } from '@wordpress/element';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { ZoloTextControl } from '../core-controls';

const GoogleMapAutocomplete = ({ label, value, onChange, onClick }) => {
    const [predictionPanel, setPredictionPanel] = useState(false);

    useEffect(() => {
        setPredictionPanel(true);
    }, []);

    if (zoloSettings?.googleAPIKey === undefined || zoloSettings?.googleAPIKey === '') {
        return;
    }

    const { placesService, placePredictions, getPlacePredictions, isPlacePredictionsLoading } = usePlacesService({
        apiKey: zoloSettings?.googleAPIKey,
    });

    return (
        <div className="zolo-google-map-autocomplete">
            <ZoloTextControl
                label={label || __('Location', 'zoloblocks')}
                placeholder={__('Enter location', 'zoloblocks')}
                value={value}
                onChange={(v) => {
                    onChange(v);
                    getPlacePredictions({ input: v });
                }}
                onFocus={() => setPredictionPanel(true)}
            />
            {predictionPanel && (
                <>
                    {placePredictions && placePredictions.length > 0 && (
                        <div className="zolo-suggested-places">
                            {isPlacePredictionsLoading && <Spinner />}
                            {placePredictions?.map((item) => (
                                <li
                                    className="zolo-suggested-place"
                                    key={item.id}
                                    onClick={() => {
                                        // get place longitude and latitude from placeId
                                        placesService?.getDetails({ placeId: item.place_id }, (place) => {
                                            onClick(place);
                                        });

                                        // close prediction panel
                                        setPredictionPanel(false);
                                    }}
                                >
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                    </svg>
                                    {item.description}
                                </li>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default GoogleMapAutocomplete;
