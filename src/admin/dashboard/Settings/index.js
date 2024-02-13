import SettingBox from './setting-box';
import Notice from '../notice';

import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

const Settings = () => {
    const [zolo_editor_settings, setZoloEditorSettings] = useState([]); // [state, setState
    const [notice, setNotice] = useState(false);
    const [editorWidth, setEditorWidth] = useState(1200);
    const [supportSVG, setSupportSVG] = useState(false);

    // Fetch Settings
    const handleFetchError = (error) => {
        console.error('API Fetch Error:', error);
        throw error;
    };

    // Fetch Settings
    const fetchSettings = async (options) => {
        try {
            const response = await apiFetch(options);
            return response;
        } catch (error) {
            handleFetchError(error);
        }
    };

    // Fetch Settings on Component Mount
    useEffect(() => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'GET',
        }).then(({ zolo_editor_settings }) => {
            const { editorWidth, supportSVG } = zolo_editor_settings;
            setEditorWidth(editorWidth);
            setSupportSVG(supportSVG);
            setZoloEditorSettings(zolo_editor_settings);
        });
    }, []);

    // Update Editor Width
    const updateEditorWidth = (value) => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_editor_settings: {
                    ...zolo_editor_settings,
                    editorWidth: value,
                },
            },
        }).then(() => {
            setEditorWidth(value);
            setNotice(true);
        });
    };

    // Update SVG Support
    const updateSVG = (value) => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_editor_settings: {
                    ...zolo_editor_settings,
                    supportSVG: value,
                },
            },
        }).then(() => {
            setSupportSVG(value);
            setNotice(true);
        });
    };

    // set notice to false after 3 seconds
    useEffect(() => {
        if (notice) {
            setTimeout(() => {
                setNotice(false);
            }, 1000);
        }
    }, [notice]);

    return (
        <>
            {notice && <Notice notice={notice} message={__('Data updated successfully.', 'zolo-blocks')} />}
            <div className="zolo-settings">
                <div id="tabs" className="zolo-settings-tabs-wrap">
                    <div className="zolo-settings-tab-button">
                        <div className="zolo-tab-button-item zolo-tab-active">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"
                                />
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                />
                            </svg>
                            <span>{__('Editor Options', 'zolo-blocks')}</span>
                        </div>
                    </div>

                    <div className="zolo-settings-tab-content">
                        <div className="zolo-tab-content-item zolo-tab-content-active">
                            <div className="zolo-settings-option-wrap">
                                <SettingBox
                                    title={__('Default Container Width', 'zolo-blocks')}
                                    description={__(
                                        "This setting will apply to Container Block's default Width in the Editor.",
                                        'zolo-blocks'
                                    )}
                                >
                                    <div className="zolo-width-number">
                                        <input
                                            type="number"
                                            placeholder="1200"
                                            onChange={(e) => {
                                                updateEditorWidth(parseInt(e.target.value));
                                                setNotice(true);
                                            }}
                                            value={editorWidth}
                                            min={1}
                                        />
                                        <span>{__('px', 'zolo-blocks')}</span>
                                    </div>
                                </SettingBox>

                                <SettingBox
                                    title={__('Enable SVG Upload', 'zolo-blocks')}
                                    description={__(
                                        'Enable the SVG Upload option to upload SVG files in the Media Library and use them in your Blocks.',
                                        'zolo-blocks'
                                    )}
                                >
                                    <ToggleControl
                                        checked={supportSVG}
                                        onChange={() => {
                                            updateSVG(!supportSVG);
                                            setNotice(true);
                                        }}
                                    />
                                </SettingBox>
                            </div>
                        </div>
                        <div className="zolo-tab-content-item"></div>
                        <div className="zolo-tab-content-item"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
