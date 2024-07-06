import SettingPanel from './setting-panel';

import { __ } from '@wordpress/i18n';
import { TextControl, ToggleControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
const { zoloBlocks } = window;

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
                <SettingPanel
                    title={__('Facebook Page Feed (coming soon)', 'zoloblocks')}
                    description={<>
                        <a href="https://developers.facebook.com/apps/" target="_blank">{__('Facebook Developer Account', 'zoloblocks')}</a> to get access Page ID and Access Token. This credential need for Social Feeds widget.
                    </>}
                    docLink="https://mailchimp.com/help/find-audience-id/"
                    icon="facebook"
                    disabled={true}
                    onSave={() => {
                        onChangeMailchimpKey(mailchimpKey);
                        onChangeMailchimpAudienceID(audienceID);
                    }}
                >
                    <TextControl label={__('FAcebook Page ID', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('FAcebook Access Token', 'zoloblocks')} disabled={true} />

                </SettingPanel>

                <SettingPanel
                    title={__('Instagram Feed (coming soon)', 'zoloblocks')}
                    description={
                        <>
                            <p class="description">Go to <a href="https://developers.facebook.com/docs/instagram-basic-display-api/getting-started" target="_blank">{__('Instagram Developer Account', 'zoloblocks')}</a> for create your Consumer key and Access Token.</p>
                        </>
                    }
                    docLink="https://developers.facebook.com/docs/instagram-basic-display-api/getting-started"
                    icon="instagram"
                    disabled={true}
                    onSave={() => {

                    }}
                >
                    <TextControl label={__('Instagram App ID', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('Instagram App Secret', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('Instagram Access Token', 'zoloblocks')} disabled={true} />

                </SettingPanel>
                <SettingPanel
                    title={__('Google Review (coming soon)', 'zoloblocks')}
                    description={<>
                        <p class="description">Go to <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">https://developers.google.com</a> and <a href="https://console.cloud.google.com/google/maps-apis/overview">generate the API key</a> and insert here. This API key needs for show Advanced Google Map widget correctly. API Key also works for Google Review widget so you must enabled Places API too.</p>
                    </>
                    }
                    docLink="https://developers.google.com/maps/documentation/javascript/get-api-key"
                    icon="google"
                    disabled={true}
                    onSave={() => {

                    }}
                >
                    <TextControl label={__('API Key', 'zoloblocks')} disabled={true} />

                </SettingPanel>
                <SettingPanel
                    title={__('Yelp Review (coming soon)', 'zoloblocks')}
                    description={<>
                        <p class="description">Go to your <a href="https://www.yelp.com/developers/v3/manage_app" target="_blank">Yelp Developer Account</a> to get access client ID and Key. This credential need for Social Proof widget.</p>
                    </>}
                    docLink="#"
                    icon="yelp"
                    disabled={true}
                    onSave={() => {

                    }}
                >
                    <TextControl label={__('Yelp Client ID', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('Yelp API Key', 'zoloblocks')} disabled={true} />

                </SettingPanel>
                <SettingPanel
                    title={__('Facebook Page Review (coming soon)', 'zoloblocks')}
                    description={<>
                        <a href="https://developers.facebook.com/apps/" target="_blank">{__('Facebook Developer Account', 'zoloblocks')}</a> to get access Page ID and Access Token. This credential need for Social Feeds widget.
                    </>}
                    docLink="#"
                    icon="facebook"
                    disabled={true}
                    onSave={() => {
                        onChangeMailchimpKey(mailchimpKey);
                        onChangeMailchimpAudienceID(audienceID);
                    }}
                >
                    <TextControl label={__('FAcebook Page ID', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('FAcebook Access Token', 'zoloblocks')} disabled={true} />

                </SettingPanel>
                <SettingPanel
                    title={__('Zoom (coming soon)', 'zoloblocks')}
                    description={<>
                        <a href="https://developers.zoom.us/docs/api/" target="_blank">{__('Zoom Developer Account', 'zoloblocks')}</a> to get access API Keyand Secret Key. This credential need for Zoom Features.
                    </>}
                    docLink="#"
                    icon="zoom"
                    disabled={true}
                    onSave={() => {
                        onChangeMailchimpKey(mailchimpKey);
                        onChangeMailchimpAudienceID(audienceID);
                    }}
                >
                    <TextControl label={__('Zoom API Key', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('Zoom  Secret Key', 'zoloblocks')} disabled={true} />

                </SettingPanel>
            </div>
        </div>
    );
};

export default ApiSettings;
