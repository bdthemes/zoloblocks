import SettingBox from './setting-box';
import Notice from '../notice';

import { __ } from '@wordpress/i18n';
import { useState, useEffect, useCallback } from '@wordpress/element';
import { ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
const { zoloBlocks } = window;
const Settings = () => {
    const [notice, setNotice] = useState(false);
    const [editorWidth, setEditorWidth] = useState(1200);
    const [supportSVG, setSupportSVG] = useState(false);
    const [smoothScroller, setSmoothScroller] = useState(false);
    const [blockExport, setBlockExport] = useState(false);
    const [blockImport, setBlockImport] = useState(false);

    const handleFetchError = (error) => {
        console.error('API Fetch Error:', error);
        throw error;
    };

    const fetchSettings = useCallback(async (data) => {
        try {
            const response = await apiFetch(data);
            setEditorWidth(response.zolo_editor_width);
            setSupportSVG(response.zolo_support_svg);
            setSmoothScroller(response.zolo_smooth_scroller);
            setBlockExport(response.zolo_enable_block_export);
            setBlockImport(response.zolo_enable_block_import);
        } catch (error) {
            handleFetchError(error);
        }
    }, []);

    useEffect(() => {
        fetchSettings({ path: '/wp/v2/settings' });
    }, [fetchSettings]);

    const updateSettings = useCallback(async (data) => {
        try {
            const response = await apiFetch(data);
            setEditorWidth(response.zolo_editor_width);
            setSupportSVG(response.zolo_support_svg);
            setSmoothScroller(response.zolo_smooth_scroller);
            setBlockExport(response.zolo_enable_block_export);
            setBlockImport(response.zolo_enable_block_import);
            setNotice(true);
        } catch (error) {
            handleFetchError(error);
        }
    }, []);

    const updateEditorWidth = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_editor_width: value },
        });
    };

    const updateSVG = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_support_svg: value },
        });
    };
    const updateSmoothScroller = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_smooth_scroller: value },
        });
    };

    const updateBlockExport = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_enable_block_export: value },
        });
    };

    const updateBlockImport = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_enable_block_import: value },
        });
    };

    useEffect(() => {
        if (notice) {
            const timer = setTimeout(() => {
                setNotice(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [notice]);

    return (
        <>
            {notice && <Notice notice={notice} message={__('Data updated successfully.', 'zoloblocks')} />}
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
                            <span>{__('Editor Options', 'zoloblocks')}</span>
                        </div>
                    </div>

                    <div className="zolo-settings-tab-content">
                        <div className="zolo-tab-content-item zolo-tab-content-active">
                            <div className="zolo-settings-option-wrap">
                                <SettingBox
                                    title={__('Default Container Width', 'zoloblocks')}
                                    description={__(
                                        "This setting will apply to Container Block's default Width in the Editor.",
                                        'zoloblocks'
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
                                        <span>{__('px', 'zoloblocks')}</span>
                                    </div>
                                </SettingBox>

                                <SettingBox
                                    title={__('Enable SVG Upload', 'zoloblocks')}
                                    description={__(
                                        'Enable the SVG Upload option to upload SVG files in the Media Library and use them in your Blocks.',
                                        'zoloblocks'
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
                                <SettingBox
                                    title={__('Enable Smooth Scroller', 'zoloblocks')}
                                    description={__(
                                        'The Smooth Scroller feature enhances user experience by providing seamless, visually pleasing content navigation through animated transitions, ensuring a polished and user-friendly interface.',
                                        'zoloblocks'
                                    )}
                                >
                                    {zoloBlocks.has_pro ? (
                                        <ToggleControl
                                            checked={smoothScroller}
                                            onChange={() => {
                                                updateSmoothScroller(!smoothScroller);
                                                setNotice(true);
                                            }}
                                        />
                                    ) : (
                                        <>
                                            <div className="zolo-pro-feature-wrapper">
                                                <span className="zolo-pro-badge"> {__('Pro', 'zoloblocks')}</span>
                                            </div>
                                        </>
                                    )}
                                </SettingBox>
                                <SettingBox
                                    title={__('Enable Pattern Export', 'zoloblocks')}
                                    description={__(
                                        'Enable the Pattern Export option to export your block(s) pattern in JSON format.',
                                        'zoloblocks'
                                    )}
                                >
                                    <ToggleControl
                                        checked={blockExport}
                                        onChange={() => {
                                            updateBlockExport(!blockExport);
                                            setNotice(true);
                                        }}
                                    />
                                </SettingBox>
                                <SettingBox
                                    title={__('Enable Pattern Import', 'zoloblocks')}
                                    description={__('Enable the Pattern Import option to import your block(s) pattern.', 'zoloblocks')}
                                >
                                    <ToggleControl
                                        checked={blockImport}
                                        onChange={() => {
                                            updateBlockImport(!blockImport);
                                            setNotice(true);
                                        }}
                                    />
                                </SettingBox>
                                <SettingBox
                                    title={__('Popup Builder (Coming Soon)', 'zoloblocks')}
                                    description={__('Enable the Pattern Import option to import your block(s) pattern.', 'zoloblocks')}
                                >
                                    <span>Coming Soon</span>
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
