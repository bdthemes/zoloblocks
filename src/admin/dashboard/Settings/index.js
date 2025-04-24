import apiFetch from '@wordpress/api-fetch';
import { Button, Modal, SelectControl, ToggleControl } from '@wordpress/components';
import { useCallback, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Notice from '../notice';
import SettingBox from './setting-box';

import { ZoloTextControl } from '../../../controls/core-controls';

const { zoloBlocks } = window;
const Settings = () => {
    const [notice, setNotice] = useState(false);
    const [supportSVG, setSupportSVG] = useState(false);
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [comingSoonMode, setComingSoonMode] = useState(false);
    const [comingSoonPrivateLink, setComingSoonPrivateLink] = useState(false);
    const [comingSoonPrivateLinkPassword, setSiteVisibilitySecretKey] = useState();
    const [maintenanceModeTemplate, setMaintenanceModeTemplate] = useState('');
    const [templates, setTemplates] = useState([]);
    const [blockLibrary, setBlockLibrary] = useState(true);
    const [disableCorePatterns, setDisableCorePatterns] = useState(true);
    const [autoRecovery, setAutoRecovery] = useState(true);
    const [activeTab, setActiveTab] = useState('editor-options');
    const [modalNewPage, setModalNewPage] = useState(false);
    const [editorVideoLink, setEditorVideoLink] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const privateLink = `${zoloBlocks?.site_url}/?private_link=${comingSoonPrivateLinkPassword}`;
    const [copyButtonText, setCopyButtonText] = useState('Copy');
    const handleFetchError = (error) => {
        console.error('API Fetch Error:', error);
        throw error;
    };

    const handleCopyClick = () => {
        if (!privateLink) return;

        if (navigator?.clipboard && navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(privateLink).then(
                () => {
                    // Update button text to 'Copied' and then back to 'Copy' after 2 seconds
                    setCopyButtonText(__('Copied', 'zoloblocks'));
                    setTimeout(() => setCopyButtonText(__('Copy', 'zoloblocks')), 2000);
                },
                (err) => {
                    console.error('Failed to copy text: ', err);
                }
            );
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = privateLink;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopyButtonText(__('Copied', 'zoloblocks'));
            setTimeout(() => setCopyButtonText(__('Copy', 'zoloblocks')), 2000);
        }
    };

    const fetchTemplates = useCallback(async (data) => {
        try {
            const response = await apiFetch(data);
            const formattedTemplates = response.map((template) => ({
                label: template.title.rendered,
                value: template.id,
            }));

            setTemplates(formattedTemplates);
        } catch (error) {
            console.error('Error fetching block templates:', error);
        }
    }, []);

    const fetchSettings = useCallback(async (data) => {
        try {
            const response = await apiFetch(data);
            setSupportSVG(response.zolo_support_svg);
            setMaintenanceMode(response.zolo_maintenance_mode);
            setMaintenanceModeTemplate(response.zolo_maintenance_mode_template);
            setComingSoonMode(response.zolo_coming_soon_mode);
            setBlockLibrary(response.zolo_enable_template_library);
            setDisableCorePatterns(response.zolo_disable_core_patterns);
            setEditorVideoLink(response.zolo_enable_video_link);
            setAutoRecovery(response.zolo_auto_recovery);
            setSidebarOpen(response.zolo_sidebar_opener);
            setComingSoonPrivateLink(response.zolo_site_visibility_private_link);
            setSiteVisibilitySecretKey(response.zolo_site_visibility_secret_key);
        } catch (error) {
            handleFetchError(error);
        }
    }, []);

    useEffect(() => {
        fetchSettings({ path: '/wp/v2/settings' });
    }, [fetchSettings]);

    useEffect(() => {
        fetchTemplates({ path: 'wp/v2/pages/?per_page=-1' });
    }, []);

    const updateSettings = useCallback(async (data) => {
        try {
            const response = await apiFetch(data);
            setSupportSVG(response.zolo_support_svg);
            setMaintenanceMode(response.zolo_maintenance_mode);
            setMaintenanceModeTemplate(response.zolo_maintenance_mode_template);
            setComingSoonMode(response.zolo_coming_soon_mode);
            setBlockLibrary(response.zolo_enable_template_library);
            setDisableCorePatterns(response.zolo_disable_core_patterns);
            setEditorVideoLink(response.zolo_enable_video_link);
            setAutoRecovery(response.zolo_auto_recovery);
            setSidebarOpen(response.zolo_sidebar_opener);
            setComingSoonPrivateLink(response.zolo_site_visibility_private_link);
            // setNotice(true);
        } catch (error) {
            handleFetchError(error);
        }
    }, []);

    const updateSVG = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_support_svg: value },
        });
    };

    const updateMaintenanceMode = (value) => {
        const comingSoonValue = value ? false : undefined;

        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_maintenance_mode: value,
                ...(comingSoonValue !== undefined && { zolo_coming_soon_mode: comingSoonValue }),
            },
        });
    };

    const updateComingSoonMode = (value) => {
        const maintenanceValue = value ? false : undefined;

        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_coming_soon_mode: value,
                ...(maintenanceValue !== undefined && { zolo_maintenance_mode: maintenanceValue }),
            },
        });
    };
    const updateComingSoonPrivateLink = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_site_visibility_private_link: value },
        });
    };
    const updateComingSoonPrivateLinkPassword = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_site_visibility_secret_key: value },
        });
    };

    const updateMaintenanceModeTemplate = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_maintenance_mode_template: value },
        });
    };
    const updateBlockLibrary = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_enable_template_library: value },
        });
    };
    const updateDisableCorePatterns = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_disable_core_patterns: value },
        });
    };
    const updateEditorVideoLink = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_enable_video_link: value },
        });
    };
    const updateAutoRecovery = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_auto_recovery: value },
        });
    };

    const updateSidebarOpener = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_sidebar_opener: value },
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
    const createNewPage = () => {
        setModalNewPage(true);
    };

    return (
        <>
            {notice && <Notice notice={notice} message={__('Data updated successfully.', 'zoloblocks')} />}
            <div className="zolo-settings">
                <div id="tabs" className="zolo-settings-tabs-wrap">
                    <div className="zolo-settings-tab-button">
                        <div
                            className={`zolo-tab-button-item ${activeTab === 'editor-options' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('editor-options')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.1992 3.40364C16.9971 2.59879 18.283 2.59879 19.0809 3.40364L20.5014 4.83416L20.5036 4.8364C21.3014 5.63415 21.305 6.94079 20.5153 7.752L13.1111 15.33H8.80959L8.7086 10.9328L16.1992 3.40364ZM14.9215 2.13569C16.4235 0.621387 18.8567 0.621437 20.3587 2.13584L21.7764 3.5636L21.7776 3.56475C23.2785 5.06692 23.2741 7.49956 21.8047 9.00801L14.1338 16.859C13.9644 17.0323 13.7323 17.13 13.49 17.13H7.93002C7.44102 17.13 7.04149 16.7395 7.03026 16.2507L6.90026 10.5907C6.89463 10.3457 6.98916 10.109 7.16199 9.93524L14.9215 2.13569ZM2.8 5.6401C2.8 4.12715 4.02706 2.9001 5.54 2.9001H10.02C10.5171 2.9001 10.92 2.49715 10.92 2.0001C10.92 1.50304 10.5171 1.1001 10.02 1.1001H5.54C3.03294 1.1001 1 3.13304 1 5.6401V18.3601C1 20.8672 3.03294 22.9001 5.54 22.9001H18.26C20.7671 22.9001 22.8 20.8672 22.8 18.3601V13.2401C22.8 12.743 22.3971 12.3401 21.9 12.3401C21.4029 12.3401 21 12.743 21 13.2401V18.3601C21 19.873 19.7729 21.1001 18.26 21.1001H5.54C4.02706 21.1001 2.8 19.873 2.8 18.3601V5.6401Z"
                                    fill="#4D4D4D"
                                />
                            </svg>
                            <span>{__('Editor Options', 'zoloblocks')}</span>
                        </div>
                        <div
                            className={`zolo-tab-button-item ${activeTab === 'assets-generation' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('assets-generation')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.59507 7.25C6.10296 4.56577 8.84201 2.8 11.95 2.8C15.5106 2.8 18.5992 5.12461 19.8794 8.47154C20.057 8.93579 20.5773 9.16818 21.0415 8.9906C21.5058 8.81302 21.7382 8.29271 21.5606 7.82846C20.0408 3.85539 16.3294 1 11.95 1C8.08984 1 4.75315 3.21786 2.9709 6.46719C2.83338 6.71791 2.82778 7.00546 2.9308 7.25H2.8V3.15C2.8 2.65294 2.39706 2.25 1.9 2.25C1.40294 2.25 1 2.65294 1 3.15V8.15C1 8.64706 1.40294 9.05 1.9 9.05H6.63C7.12706 9.05 7.53 8.64706 7.53 8.15C7.53 7.65294 7.12706 7.25 6.63 7.25H4.59507ZM2.75846 14.8094C3.22271 14.6318 3.74302 14.8642 3.9206 15.3285C5.20085 18.6754 8.28942 21 11.85 21C14.958 21 17.697 19.2342 19.2049 16.55H17.17C16.6729 16.55 16.27 16.1471 16.27 15.65C16.27 15.1529 16.6729 14.75 17.17 14.75H21.9C22.3971 14.75 22.8 15.1529 22.8 15.65V20.65C22.8 21.1471 22.3971 21.55 21.9 21.55C21.4029 21.55 21 21.1471 21 20.65V16.55H20.8692C20.9722 16.7945 20.9666 17.0821 20.8291 17.3328C19.0469 20.5821 15.7102 22.8 11.85 22.8C7.47057 22.8 3.75915 19.9446 2.2394 15.9715C2.06182 15.5073 2.29421 14.987 2.75846 14.8094Z"
                                    fill="#4D4D4D"
                                />
                            </svg>
                            <span>{__('Assets Generation', 'zoloblocks')}</span>
                        </div>

                        <div
                            className={`zolo-tab-button-item ${activeTab === 'site-visibility' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('site-visibility')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.9 3C7.91485 3 4.2928 5.34683 1.82727 9.22753C1.25643 10.1195 1 11.2593 1 12.3469C1 13.4346 1.25642 14.5743 1.82723 15.4663C4.29276 19.347 7.91484 21.6938 11.9 21.6938C15.8852 21.6938 19.5072 19.347 21.9728 15.4663C22.5436 14.5744 22.8 13.4346 22.8 12.3469C22.8 11.2593 22.5436 10.1194 21.9727 9.22745C19.5072 5.3468 15.8852 3 11.9 3ZM3.26091 10.1401C5.49714 6.61959 8.6347 4.69944 11.9 4.69944C15.1653 4.69944 18.3029 6.61959 20.5391 10.1401L20.5408 10.1428C20.8947 10.6952 21.1006 11.4949 21.1006 12.3469C21.1006 13.1989 20.8947 13.9987 20.5408 14.5511L20.5391 14.5538C18.3029 18.0743 15.1653 19.9944 11.9 19.9944C8.6347 19.9944 5.49714 18.0743 3.26092 14.5538L3.25918 14.5511C2.90537 13.9987 2.69944 13.1989 2.69944 12.3469C2.69944 11.4949 2.90537 10.6952 3.25918 10.1428L3.25919 10.1428L3.26091 10.1401ZM9.07695 12.3468C9.07695 10.7862 10.3393 9.52383 11.8999 9.52383C13.4605 9.52383 14.7229 10.7862 14.7229 12.3468C14.7229 13.9074 13.4605 15.1697 11.8999 15.1697C10.3393 15.1697 9.07695 13.9074 9.07695 12.3468ZM11.8999 7.82439C9.40074 7.82439 7.37751 9.8476 7.37751 12.3468C7.37751 14.8459 9.40073 16.8692 11.8999 16.8692C14.3991 16.8692 16.4223 14.8459 16.4223 12.3468C16.4223 9.8476 14.3991 7.82439 11.8999 7.82439Z"
                                    fill="#4D4D4D"
                                />
                            </svg>
                            <span>{__('Site Visibility', 'zoloblocks')}</span>
                        </div>
                    </div>
                    <div className="zolo-settings-tab-content">
                        {activeTab === 'editor-options' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <SettingBox
                                        title={__('SVG Upload', 'zoloblocks')}
                                        description={__(
                                            'Enable the SVG Upload option to upload SVG files in the Media Library and use them in your Blocks.',
                                            'zoloblocks'
                                        )}
                                    >
                                        <ToggleControl
                                            checked={!!supportSVG}
                                            onChange={() => {
                                                updateSVG(!supportSVG);
                                                setNotice(true);
                                            }}
                                        />
                                    </SettingBox>

                                    <SettingBox
                                        title={__('Templates Library', 'zoloblocks')}
                                        description={__(
                                            'ZoloBlocks includes a rich library of page templates and block patterns. Accessible via the Templates button during page or post editing, you can manage the visibility of this button using this option.',
                                            'zoloblocks'
                                        )}
                                    >
                                        <ToggleControl
                                            checked={!!blockLibrary}
                                            onChange={() => {
                                                updateBlockLibrary(!blockLibrary);
                                                setNotice(true);
                                            }}
                                        />
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Disable Core starter patterns', 'zoloblocks')}
                                        description={__(
                                            'Disable the core starter patterns in the block inserter when creating a new page.',
                                            'zoloblocks'
                                        )}
                                    >
                                        <ToggleControl
                                            checked={!!disableCorePatterns}
                                            onChange={() => {
                                                updateDisableCorePatterns(!disableCorePatterns);
                                                setNotice(true);
                                            }}
                                        />
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Automatic Block Recovery', 'zoloblocks')}
                                        description={__(
                                            "Automatically recover any erroneous blocks on your web pages, saving you the hassle of manually clicking 'Attempt Block Recovery' buttons.",
                                            'zoloblocks'
                                        )}
                                    >
                                        <ToggleControl
                                            checked={!!autoRecovery}
                                            onChange={() => {
                                                updateAutoRecovery(!autoRecovery);
                                                setNotice(true);
                                            }}
                                        />
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Block Selector', 'zoloblocks')}
                                        description={__(
                                            'Enable this option to allow users to easily access and select blocks within the Gutenberg editor.',
                                            'zoloblocks'
                                        )}
                                    >
                                        <ToggleControl
                                            checked={!!sidebarOpen}
                                            onChange={() => {
                                                updateSidebarOpener(!sidebarOpen);
                                            }}
                                        />
                                    </SettingBox>
                                    <SettingBox
                                        title={__('Enable Video Link', 'zoloblocks')}
                                        description={__('Enable video link to your gutenberg editor video link option.', 'zoloblocks')}
                                        isPro={true}
                                    >
                                        <ToggleControl
                                            checked={!!editorVideoLink}
                                            disabled={!zoloBlocks?.has_pro}
                                            onChange={() => {
                                                updateEditorVideoLink(!editorVideoLink);
                                                setNotice(true);
                                            }}
                                        />
                                    </SettingBox>
                                </div>
                            </div>
                        )}
                        {activeTab === 'assets-generation' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <SettingBox
                                        title={__('File Generation', 'zoloblocks')}
                                        released={false}
                                        description={__(
                                            'By default, ZoloBlocks loads CSS and JS inline on the page. If you prefer to generate separate CSS and JS files for ZoloBlocks components, enable this option. To understand the difference between generating CSS and JS inline versus in separate files, please read this  article.',
                                            'zoloblocks'
                                        )}
                                    ></SettingBox>
                                    <SettingBox
                                        title={__('Asset Regeneration', 'zoloblocks')}
                                        description={__(
                                            "If you're encountering issues with style, layout, color, or any other page element, use this option to regenerate the CSS and JavaScript assets. It can help resolve various asset-related problems.",
                                            'zoloblocks'
                                        )}
                                        released={false}
                                    ></SettingBox>
                                </div>
                            </div>
                        )}
                        {activeTab === 'site-visibility' && (
                            <div className="zolo-tab-content-item zolo-tab-content-active">
                                <div className="zolo-settings-option-wrap">
                                    <div className="zolo-settings-option-item">
                                        <div className="zolo-settins-content">
                                            <h2 className="zolo-settings-title">{__('Coming Soon Mode', 'zoloblocks')}</h2>
                                            <p className="zolo-settings-text">
                                                {__(
                                                    "If your website is still under construction and not ready for public viewing, the 'Coming Soon' page will return an HTTP 200 status code.",
                                                    'zoloblocks'
                                                )}
                                            </p>
                                            {!maintenanceMode && comingSoonMode && (
                                                <>
                                                    <SelectControl
                                                        label={__('Select Templates', 'zoloblocks')}
                                                        help={__(
                                                            '`To enable maintenance mode you have to set a template for the maintenance mode page.Select one or go ahead and create one now`',
                                                            'zoloblocks'
                                                        )}
                                                        value={maintenanceModeTemplate}
                                                        options={templates}
                                                        onChange={(newTemplate) => updateMaintenanceModeTemplate(newTemplate)}
                                                        __nextHasNoMarginBottom
                                                    />
                                                    <ToggleControl
                                                        label={__('Share your site with a private link', 'zoloblocks')}
                                                        help={__(
                                                            'Allow your site to be visible to only those with the private link. This is useful when you want to share your site with a select group of people or clients before it goes live.',
                                                            'zoloblocks'
                                                        )}
                                                        checked={!!comingSoonPrivateLink}
                                                        onChange={() => {
                                                            updateComingSoonPrivateLink(!comingSoonPrivateLink);
                                                            // setNotice(true);
                                                        }}
                                                    />
                                                    {comingSoonPrivateLink && (
                                                        <>
                                                            <div>
                                                                <ZoloTextControl value={privateLink} disabled={true} onChange={() => {}} />
                                                                <Button
                                                                    className="zolo-create-new-page-btn"
                                                                    variant="primary"
                                                                    onClick={handleCopyClick}
                                                                >
                                                                    {copyButtonText || 'Copy'}
                                                                </Button>
                                                            </div>
                                                        </>
                                                    )}

                                                    <Button className="zolo-create-new-page-btn" variant="primary" onClick={createNewPage}>
                                                        {__('Create New Page', 'zoloblocks')}
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                        <ToggleControl
                                            checked={!!comingSoonMode}
                                            onChange={() => {
                                                updateComingSoonMode(!comingSoonMode);
                                                setNotice(true);
                                            }}
                                        />
                                    </div>

                                    <div className="zolo-settings-option-item zolo-main-tenance-mode">
                                        <div className="zolo-settins-content">
                                            <h2 className="zolo-settings-title">{__('Maintenance Mode', 'zoloblocks')}</h2>
                                            <p className="zolo-settings-text">
                                                {__(
                                                    'Maintenance Mode in ZoloBlocks uses an HTTP 503 status code, signaling search engines to revisit the site shortly. Limit its use to a few days to avoid prolonged downtime.',
                                                    'zoloblocks'
                                                )}
                                            </p>
                                            {maintenanceMode && !comingSoonMode && (
                                                <>
                                                    <SelectControl
                                                        label={__('Select Templates', 'zoloblocks')}
                                                        help={__(
                                                            '`To enable maintenance mode you have to set a template for the maintenance mode page.Select one or go ahead and create one now`',
                                                            'zoloblocks'
                                                        )}
                                                        value={maintenanceModeTemplate}
                                                        options={templates}
                                                        onChange={(newTemplate) => updateMaintenanceModeTemplate(newTemplate)}
                                                        __nextHasNoMarginBottom
                                                    />
                                                    <ToggleControl
                                                        label={__('Share your site with a private link', 'zoloblocks')}
                                                        help={__(
                                                            'Allow your site to be visible to only those with the private link. This is useful when you want to share your site with a select group of people or clients before it goes live.',
                                                            'zoloblocks'
                                                        )}
                                                        checked={!!comingSoonPrivateLink}
                                                        onChange={() => {
                                                            updateComingSoonPrivateLink(!comingSoonPrivateLink);
                                                            // setNotice(true);
                                                        }}
                                                    />
                                                    {comingSoonPrivateLink && (
                                                        <>
                                                            <div className="zolo-private-link-wrap">
                                                                <ZoloTextControl value={privateLink} disabled={true} onChange={() => {}} />
                                                                <Button
                                                                    className="zolo-create-new-page-btn"
                                                                    variant="primary"
                                                                    onClick={handleCopyClick}
                                                                >
                                                                    {copyButtonText || 'Copy'}
                                                                </Button>
                                                            </div>
                                                        </>
                                                    )}
                                                    <Button className="zolo-create-new-page-btn" variant="primary" onClick={createNewPage}>
                                                        {__('Create New Page', 'zoloblocks')}
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                        <ToggleControl
                                            checked={!!maintenanceMode}
                                            onChange={() => {
                                                updateMaintenanceMode(!maintenanceMode);
                                                setNotice(true);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {modalNewPage && (
                <Modal
                    className="zolo-maintenance-modal zolo-sv-create-new-page-modal"
                    onRequestClose={() => setModalNewPage(false)}
                    shouldCloseOnClickOutside={true}
                    shouldCloseOnEsc={true}
                    isOpen={modalNewPage}
                    isDismissible={false}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <div className="zolo-modal-content">
                        <div className="zolo-modal-header">
                            <h2 className="zolo-modal-head-title">{__('Create New Page', 'zoloblocks')}</h2>
                            <span
                                className="zolo-modal-close"
                                onClick={() => {
                                    setModalNewPage(false);
                                }}
                            >
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
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </span>
                        </div>
                        <div className="zolo-modal-body">
                            <iframe
                                src={`${zoloBlocks?.site_url}/wp-admin/post-new.php?post_type=page`}
                                className="zolo-modal-iframe"
                            ></iframe>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Settings;
