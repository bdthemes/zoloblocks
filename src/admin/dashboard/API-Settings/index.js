import SettingPanel from './setting-panel';

import { __ } from '@wordpress/i18n';
import { TextControl, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const ApiSettings = () => {
    const [isAIExtensionActive, setisAIExtensionActive] = useState(true);
    const [googleAPIKey, setGoogleAPIKey] = useState('');
    const [zoloaiAPIKey, setZoloaiAPIKey] = useState('');
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
                zolo_sigmative_api_key,
                zolo_recaptcha_site_key,
                zolo_recaptcha_secret_key,
                zolo_mailchimp_api_key,
                zolo_mailchimp_audience_id,
                zolo_webhooks,
            }) => {
                setGoogleAPIKey(zolo_google_api_key);
                setZoloaiAPIKey(zolo_sigmative_api_key);
                setSiteKey(zolo_recaptcha_site_key);
                setSecretKey(zolo_recaptcha_secret_key);
                setMailchimpKey(zolo_mailchimp_api_key);
                setAudienceID(zolo_mailchimp_audience_id);
                setWebhooks(zolo_webhooks);
            }
        );
    }, []);

useEffect(() => {
    fetchSettings({
        path: '/zolo/v1/extensions',
        method: 'GET',
    }).then((response) => {
        const zoloAI = response.find((ext) => ext.name === 'AI');

        if (zoloAI) {
            setisAIExtensionActive(zoloAI.status);
        }
    });
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
    // onchange zoloai key
    const onChangeZoloAiKey = (value) => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_sigmative_api_key: value,
            },
        }).then(({ zolo_sigmative_api_key }) => {
            setZoloaiAPIKey(zolo_sigmative_api_key);
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
                    title={__('Zolo AI', 'zoloblocks')}
                    description={__(
                        'Zolo AI enables you to seamlessly integrate text generation features into your pages. To get started, simply retrieve your API key to unlock the full potential of Zolo AI.'
                    )}
                    docLink="https://account.bdthemes.com"
                    icon="zoloai"
                    onSave={() => {
                        onChangeZoloAiKey(zoloaiAPIKey);
                    }}
                    released={isAIExtensionActive}
                    note={`please activate the AI extension to use this feature`}
                >
                    <TextControl
                        label={__('API Key', 'zoloblocks')}
                        onChange={(value) => setZoloaiAPIKey(value)}
                        value={zoloaiAPIKey}
                        placeholder="AbcdeF1GhIJkLMNOpQrSTUvWXyZU2VjdXJlL0FjY2Vzcy9Ub2tlbi9Gb3IvU2FmZVBsYXRmbJtL1Byb2plY3RX"
                    />
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
            </div>
        </div>
    );
};

export default ApiSettings;
