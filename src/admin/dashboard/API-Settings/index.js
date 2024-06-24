import SettingPanel from './setting-panel';

import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const ApiSettings = () => {
    const [googleAPIKey, setGoogleAPIKey] = useState('');
    const [siteKey, setSiteKey] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [mailchimpKey, setMailchimpKey] = useState('');
    const [audienceID, setAudienceID] = useState('');

    // error handling
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
        }).then(
            ({
                zolo_google_api_key,
                zolo_recaptcha_site_key,
                zolo_recaptcha_secret_key,
                zolo_mailchimp_api_key,
                zolo_mailchimp_audience_id,
            }) => {
                setGoogleAPIKey(zolo_google_api_key);
                setSiteKey(zolo_recaptcha_site_key);
                setSecretKey(zolo_recaptcha_secret_key);
                setMailchimpKey(zolo_mailchimp_api_key);
                setAudienceID(zolo_mailchimp_audience_id);
            }
        );
    }, []);

    // update api key
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

    // update site key
    const onChangeSiteKey = (value) => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_recaptcha_site_key: value,
            },
        }).then(({ zolo_recaptcha_site_key }) => {
            setSiteKey(zolo_recaptcha_site_key);
        });
    };

    // update secret key
    const onChangeSecretKey = (value) => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_recaptcha_secret_key: value,
            },
        }).then(({ zolo_recaptcha_secret_key }) => {
            setSecretKey(zolo_recaptcha_secret_key);
        });
    };
    // update mailchimp key
    const onChangeMailchimpKey = (value) => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_mailchimp_api_key: value,
            },
        }).then(({ zolo_mailchimp_api_key }) => {
            setMailchimpKey(zolo_mailchimp_api_key);
        });
    };
    // update secret key
    const onChangeMailchimpAudienceID = (value) => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_mailchimp_audience_id: value,
            },
        }).then(({ zolo_mailchimp_audience_id }) => {
            setAudienceID(zolo_mailchimp_audience_id);
        });
    };

    return (
        <div className="zolo-settings-tab">
            <div className="settings-grid">
                <SettingPanel
                    title={__('Google Map', 'zoloblocks')}
                    description={__(
                        'Google Map block allows you to add a Google Map to your page. You can add a marker to the map and customize the map controls. You have to retrieve API key to use Google Maps from ZoloBlocks.',
                        'zoloblocks'
                    )}
                    docLink="https://developers.google.com/maps/documentation/maps-static"
                    onSave={() => {
                        updateAPIKey(googleAPIKey);
                    }}
                    icon="map"
                >
                    <TextControl label={__('API Key', 'zoloblocks')} onChange={(value) => setGoogleAPIKey(value)} value={googleAPIKey} />
                </SettingPanel>
                <SettingPanel
                    title={__('Google reCaptcha', 'zoloblocks')}
                    description={__(
                        'Google reCaptcha allows you to add a Google reCaptcha to your form. You have to retrieve API key to use Google reCaptcha from ZoloBlocks.',
                        'zoloblocks'
                    )}
                    docLink="https://developers.google.com/maps/documentation/maps-static"
                    icon="captcha"
                    onSave={() => {
                        onChangeSiteKey(siteKey);
                        onChangeSecretKey(secretKey);
                    }}
                >
                    <TextControl label={__('Site Key', 'zoloblocks')} onChange={(value) => setSiteKey(value)} value={siteKey} />
                    <TextControl label={__('Secret Key', 'zoloblocks')} onChange={(value) => setSecretKey(value)} value={secretKey} />
                </SettingPanel>
                <SettingPanel
                    title={__('Mailchimp', 'zoloblocks')}
                    description={__(
                        'Mailchimp block allows you to add a Mailchimp form to your page. You have to retrieve API key to use Mailchimp from ZoloBlocks.',
                        'zoloblocks'
                    )}
                    docLink="https://mailchimp.com/help/find-audience-id/"
                    icon="mailchimp"
                    onSave={() => {
                        onChangeMailchimpKey(mailchimpKey);
                        onChangeMailchimpAudienceID(audienceID);
                    }}
                >
                    <TextControl
                        label={__('Mailchimp Key', 'zoloblocks')}
                        onChange={(value) => setMailchimpKey(value)}
                        value={mailchimpKey}
                    />
                    <TextControl label={__('Audience ID', 'zoloblocks')} onChange={(value) => setAudienceID(value)} value={audienceID} />
                </SettingPanel>
            </div>
        </div>
    );
};

export default ApiSettings;
