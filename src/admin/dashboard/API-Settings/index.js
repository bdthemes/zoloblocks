import SingleSetting from './single-setting';

import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const ApiSettings = () => {
    const [googleAPIKey, setGoogleAPIKey] = useState('');

    const handleFetchError = (error) => {
        console.error('API Fetch Error:', error);
        throw error;
    };

    const fetchSettings = async (options) => {
        try {
            const response = await apiFetch(options);
            return response;
        } catch (error) {
            handleFetchError(error);
        }
    };

    useEffect(() => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'GET',
        }).then(({ zolo_google_api_key }) => {
            setGoogleAPIKey(zolo_google_api_key);
        });
    }, []);

    const updateAPIKey = (value) => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_google_api_key: value,
            },
        }).then(({ zolo_google_api_key }) => {
            setGoogleAPIKey(zolo_google_api_key);
        });
    };

    return (
        <div className="zolo-settings-tab">
            <div className="settings-grid">
                <SingleSetting
                    label={__('API KEY', 'zolo-blocks')}
                    title={__('Google Map', 'zolo-blocks')}
                    modalTitle={__('Google Map API Key', 'zolo-blocks')}
                    description={__(
                        'Google Map block allows you to add a Google Map to your page. You can add a marker to the map and customize the map controls. You have to retrieve API key to use Google Maps from ZoloBlocks.',
                        'zolo-blocks'
                    )}
                    modalDescription={__(
                        'You have to retrieve API key to use Google Maps from ZoloBlocks. Please follow the documentation link to get the API key.',
                        'zolo-blocks'
                    )}
                    docLink="https://developers.google.com/maps/documentation/maps-static"
                    value={googleAPIKey}
                    onChange={(value) => {
                        updateAPIKey(value);
                    }}
                    icon="map"
                />
            </div>
        </div>
    );
};

export default ApiSettings;
