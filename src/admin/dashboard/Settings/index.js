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
    const [activeTab, setActiveTab] = useState('editor-options');

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

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            {notice && <Notice notice={notice} message={__('Data updated successfully.', 'zoloblocks')} />}
            <div className="zolo-settings">
                <div id="tabs" className="zolo-settings-tabs-wrap">
                    <div className="zolo-settings-tab-button">
                        <div className={`zolo-tab-button-item ${activeTab === 'editor-options' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('editor-options')}
                        >
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
                        <div className={`zolo-tab-button-item ${activeTab === 'assets-generation' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('assets-generation')}
                        >
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
                            <span>{__('Assets Generation', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'editor-enhancements' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('editor-enhancements')}
                        >
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
                            <span>{__('Editor Enhancements', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'version-control' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('version-control')}
                        >
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
                            <span>{__('Version Control', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'performance' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('performance')}
                        >
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
                            <span>{__('Performance', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'site-visibility' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('site-visibility')}
                        >
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
                            <span>{__('Site Visibility', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'theme-fonts' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('theme-fonts')}
                        >
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
                            <span>{__('Theme Fonts', 'zoloblocks')}</span>
                        </div>
                    </div>
                    <div className="zolo-settings-tab-content">
                        {activeTab === 'editor-options' && (
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
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                </div>
                            </div>
                        )}
                        {activeTab === 'assets-generation' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <SettingBox
                                        title={__('File Generation (Coming Soon)', 'zoloblocks')}
                                        description={
                                            <>
                                                By default, ZoloBlocks loads CSS and JS inline on the page. If you prefer to generate separate CSS and JS files for ZoloBlocks components, enable this option. To understand the difference between generating CSS and JS inline versus in separate files, please read this article.
                                            </>}
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Asset Regeneration (Coming Soon)', 'zoloblocks')}
                                        description={
                                            <>
                                                If you're encountering issues with style, layout, color, or any other page element, use this option to regenerate the CSS and JavaScript assets. It can help resolve various asset-related problems.
                                            </>}
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                </div>
                            </div>
                        )}
                        {activeTab === 'editor-enhancements' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <SettingBox
                                        title={__('Move Title Top (Coming Soon)', 'zoloblocks')}
                                        description={
                                            <>
                                                Move the page title to the top to create a cleaner, more organized editor.
                                            </>}
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Collapse Panels (Coming Soon)', 'zoloblocks')}
                                        description={
                                            <>
                                                Enable "Collapse Panels" to focus on one panel at a time by collapsing all others in your Blocks Settings except the one clicked. This simplifies your editing experience.                                            </>}
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Enable Templates Button', 'zoloblocks')}
                                        description={
                                            <>
                                                ZoloBlocks includes a rich library of page templates and block patterns. Accessible via the Templates button during page or post editing, you can manage the visibility of this button using this option.                                            </>}
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                </div>
                            </div>
                        )}
                        {activeTab === 'version-control' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <SettingBox
                                        title={__('Rollback to Previous Version', 'zoloblocks')}
                                        description={
                                            <>
                                                If you encounter issues with ZoloBlocks with latest version, consider rolling back to a previous version to troubleshoot and resolve the issue.
                                            </>
                                        }
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Enable Beta', 'zoloblocks')}
                                        description={
                                            <>
                                                Enable this option to receive notifications for beta updates of ZoloBlocks. Beta versions will not install automatically; you will need to manually install them when notified. It's advisable to test beta versions in a separate environment.                                            </>
                                        }
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Enable Legacy Blocks', 'zoloblocks')}
                                        description={
                                            <>
                                                Enable this option to activate support for our Legacy Blocks on your site.                                            </>
                                        }
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                </div>
                            </div>
                        )}
                        {activeTab === 'performance' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <SettingBox
                                        title={__('Load Google Fonts Locally', 'zoloblocks')}
                                        description={
                                            <>
                                                Enable this option to download Google Fonts and store them on your server. This can enhance your website's speed and ensure compliance with GDPR laws.                                            </>
                                        }
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Preload Local Fonts', 'zoloblocks')}
                                        description={
                                            <>
                                                This option loads font files immediately on page load. Preloading local fonts can further speed up your website. </>}
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Allow Only Selected Fonts', 'zoloblocks')}
                                        description={
                                            <>
                                                ZoloBlocks offers over 1500 Google font options. Use this option to limit the number of fonts shown in the block settings if the variety is overwhelming for your clients.</>}
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                </div>
                            </div>
                        )}
                        {activeTab === 'site-visibility' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <SettingBox
                                        title={__('Enable Coming Soon Mode', 'zoloblocks')}
                                        description={
                                            <>
                                                If your website is still under construction and not ready for public viewing, the 'Coming Soon' page will return an HTTP 200 status code.
                                            </>
                                        }
                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Enable Maintenance Mode', 'zoloblocks')}
                                        description={
                                            <>
                                                Maintenance Mode in ZoloBlocks uses an HTTP 503 status code, signaling search engines to revisit the site shortly. Limit its use to a few days to avoid prolonged downtime.
                                            </>}                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>
                                </div>
                            </div>
                        )}
                        {activeTab === 'theme-fonts' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <SettingBox
                                        title={__('Font Families', 'zoloblocks')}
                                        description={
                                            <>
                                                ZoloBlocks offers over 1500 Google font options. Choose the fonts you want to use in your FSE Typography settings.
                                            </>}                                    >
                                        <span className="zolo-badge-upcoming">Coming Soon</span>
                                    </SettingBox>                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
