import SettingPanel from './setting-panel';

import { __ } from '@wordpress/i18n';
import { TextControl, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const ApiSettings = () => {
    const [googleAPIKey, setGoogleAPIKey] = useState('');
    const [siteKey, setSiteKey] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [mailchimpKey, setMailchimpKey] = useState('');
    const [audienceID, setAudienceID] = useState('');
    const [webhooks, setWebhooks] = useState([
        {
            label: '',
            url: '',
        },
    ]);

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
                zolo_webhooks,
            }) => {
                setGoogleAPIKey(zolo_google_api_key);
                setSiteKey(zolo_recaptcha_site_key);
                setSecretKey(zolo_recaptcha_secret_key);
                setMailchimpKey(zolo_mailchimp_api_key);
                setAudienceID(zolo_mailchimp_audience_id);
                setWebhooks(zolo_webhooks);
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

    // Webhook

    const updateWebhookField = (index, field, value) => {
        const newWebhooks = webhooks.map((webhook, i) => {
            if (i === index) {
                return {
                    ...webhook,
                    [field]: value,
                };
            }
            return webhook;
        });

        setWebhooks(newWebhooks);
    };

    const addNewWebhookField = () => {
        setWebhooks([...webhooks, { label: '', url: '' }]);
    };

    const removeWebhookField = (index) => {
        const newWebhooks = webhooks.filter((_, i) => i !== index);
        setWebhooks(newWebhooks);
    };

    const onchangeWebhook = (webhooks) => {
        // Map over the webhooks and create a new array with the necessary properties
        const newWebhooks = webhooks.map((webhook) => ({
            label: webhook?.label || '', // Ensure that label is always a string
            url: webhook?.url || '', // Ensure that url is always a string
        }));

        // Make the API request to save the settings
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_webhooks: newWebhooks,
            },
        })
            .then(({ zolo_webhooks }) => {
                setWebhooks(zolo_webhooks); // Update state with the response
            })
            .catch((error) => {
                console.error('Error saving webhooks:', error); // Handle any errors
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
                    title={__('Webhook', 'zoloblocks')}
                    description={__(
                        'Webhook block allows you to add a Webhook form to your page. You have to retrieve API key to use Webhook from ZoloBlocks.'
                    )}
                    docLink="#"
                    icon="webhook"
                    onSave={() => {
                        onchangeWebhook(webhooks);
                    }}
                >
                    {webhooks.map((webhook, index) => (
                        <div className="zolo-webhok-label-url-wrap" key={index}>
                            <TextControl
                                label={__('Label', 'zoloblocks')}
                                value={webhook.label}
                                onChange={(value) => updateWebhookField(index, 'label', value)}
                            />
                            <TextControl
                                label={__('Url', 'zoloblocks')}
                                value={webhook.url}
                                onChange={(value) => updateWebhookField(index, 'url', value)}
                            />
                            {webhooks.length > 1 && (
                                <Button className="zolo-webhook-remove-btn" isDestructive onClick={() => removeWebhookField(index)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 7l16 0" />
                                        <path d="M10 11l0 6" />
                                        <path d="M14 11l0 6" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                    {__('Remove', 'zoloblocks')}
                                </Button>
                            )}
                        </div>
                    ))}

                    <Button className="zolo-webhook-add-btn" isPrimary onClick={addNewWebhookField}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
                        {__('Add', 'zoloblocks')}
                    </Button>
                </SettingPanel>
                <SettingPanel
                    title={__('Facebook Page Feed', 'zoloblocks')}
                    description={__(
                        'The Facebook Page Feed block allows you to display the latest posts from your Facebook page directly on your WordPress site. You can also customize the layout and style to match your website’s design. Please connect your Facebook API key to seamlessly integrate your Facebook content.',
                        'zoloblocks'
                    )}
                    docLink="https://mailchimp.com/help/find-audience-id/"
                    icon="facebook"
                    released={false}
                    onSave={() => {
                        onChangeMailchimpKey(mailchimpKey);
                        onChangeMailchimpAudienceID(audienceID);
                    }}
                >
                    <TextControl label={__('FAcebook Page ID', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('FAcebook Access Token', 'zoloblocks')} disabled={true} />
                </SettingPanel>
                <SettingPanel
                    title={__('Instagram Feed', 'zoloblocks')}
                    description={__(
                        'The Instagram Feed block lets you showcase your Instagram photos and videos on your landing page. An API key from Instagram needs to be linked to ZoloBlocks to show and customize your content.',
                        'zoloblocks'
                    )}
                    docLink="https://developers.facebook.com/docs/instagram-basic-display-api/getting-started"
                    icon="instagram"
                    released={false}
                    onSave={() => {}}
                >
                    <TextControl label={__('Instagram App ID', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('Instagram App Secret', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('Instagram Access Token', 'zoloblocks')} disabled={true} />
                </SettingPanel>
                <SettingPanel
                    title={__('Google Review', 'zoloblocks')}
                    description={__(
                        'The Google Review block enables you to display Google reviews on WordPress site the secured Google API key. You can customize the review appearance from editor options.',
                        'zoloblocks'
                    )}
                    docLink="https://developers.google.com/maps/documentation/javascript/get-api-key"
                    icon="google"
                    released={false}
                    onSave={() => {}}
                >
                    <TextControl label={__('API Key', 'zoloblocks')} disabled={true} />
                </SettingPanel>
                <SettingPanel
                    title={__('Yelp Review', 'zoloblocks')}
                    description={__(
                        'The Yelp Review block lets you feature original Yelp reviews on your landing page by pulling data directly through Yelp API. Please insert the API key to start.',
                        'zoloblocks'
                    )}
                    docLink="#"
                    icon="yelp"
                    released={false}
                    onSave={() => {}}
                >
                    <TextControl label={__('Yelp Client ID', 'zoloblocks')} disabled={true} />
                    <TextControl label={__('Yelp API Key', 'zoloblocks')} disabled={true} />
                </SettingPanel>
                <SettingPanel
                    title={__('Zoom', 'zoloblocks')}
                    description={__(
                        'The Zoom Meeting block allows you to embed live Zoom meetings directly on your WordPress site. You’ll need an API key from Zoom to connect your Zoom account.',
                        'zoloblocks'
                    )}
                    docLink="#"
                    icon="zoom"
                    released={false}
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
