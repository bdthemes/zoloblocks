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
    const [blockLibrary, setBlockLibrary] = useState(false);
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
            setBlockLibrary(response.zolo_enable_template_library);
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
            setBlockLibrary(response.zolo_enable_template_library);
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

    const updateBlockLibrary = (value) => {
        updateSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: { zolo_enable_template_library: value },
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11434 3.40581C4.6137 3.40581 3.40581 4.61442 3.40581 6.08622V17.9138C3.40581 19.3856 4.6137 20.5942 6.11434 20.5942H18.0356C19.5363 20.5942 20.7441 19.3856 20.7441 17.9138V13.1528C20.7441 12.7646 21.0588 12.4499 21.447 12.4499C21.8353 12.4499 22.15 12.7646 22.15 13.1528V17.9138C22.15 20.1721 20.3025 22 18.0356 22H6.11434C3.84741 22 2 20.1721 2 17.9138V6.08622C2 3.82794 3.84741 2 6.11434 2H10.313C10.7012 2 11.0159 2.3147 11.0159 2.70291C11.0159 3.09111 10.7012 3.40581 10.313 3.40581H6.11434Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3915 4.12766C17.5882 3.32437 16.29 3.32437 15.4867 4.12766L8.43603 11.1784L8.53499 15.4488H12.7553L19.7367 8.35822C19.7368 8.35812 19.7366 8.35833 19.7367 8.35822C20.5272 7.55339 20.5243 6.25351 19.7245 5.46066L19.7223 5.4585L18.3915 4.12766ZM14.4927 3.1336C15.845 1.78131 18.0332 1.78131 19.3855 3.1336L20.7142 4.46227C20.7145 4.46263 20.7149 4.46299 20.7152 4.46334C22.0698 5.80731 22.0663 7.99312 20.7394 9.34353L13.5506 16.6449C13.4184 16.7791 13.238 16.8546 13.0497 16.8546H7.84818C7.46632 16.8546 7.15431 16.5498 7.14546 16.168L7.02363 10.9103C7.01918 10.7183 7.0935 10.5328 7.22931 10.397L14.4927 3.1336Z" fill="#4D4D4D" />
                            </svg>
                            <span>{__('Editor Options', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'assets-generation' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('assets-generation')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64394 7.74054H7.14595C7.59374 7.74054 7.95676 8.10355 7.95676 8.55135C7.95676 8.99915 7.59374 9.36216 7.14595 9.36216H2.81081C2.36301 9.36216 2 8.99915 2 8.55135V3.95676C2 3.50896 2.36301 3.14595 2.81081 3.14595C3.25861 3.14595 3.62162 3.50896 3.62162 3.95676V6.31827C5.43717 3.68119 8.84446 2 12.0432 2C16.0553 2 19.4602 4.61743 20.8546 8.26159C21.0146 8.67982 20.8053 9.14859 20.3871 9.30862C19.9688 9.46865 19.5001 9.25934 19.34 8.84111C18.1614 5.76094 15.3177 3.62162 12.0432 3.62162C9.11596 3.62162 6.00474 5.31238 4.64394 7.74054ZM3.61294 14.6914C4.03117 14.5314 4.49994 14.7407 4.65997 15.1589C5.83855 18.2391 8.68234 20.3784 11.9568 20.3784C14.8861 20.3784 18.0175 18.686 19.3777 16.2595H16.8541C16.4063 16.2595 16.0432 15.8964 16.0432 15.4486C16.0432 15.0008 16.4063 14.6378 16.8541 14.6378H21.2C21.6478 14.6378 22.0108 15.0008 22.0108 15.4486V20.0432C22.0108 20.491 21.6478 20.8541 21.2 20.8541C20.7522 20.8541 20.3892 20.491 20.3892 20.0432V17.6968C18.5673 20.3265 15.1476 22 11.9568 22C7.94469 22 4.53982 19.3826 3.14543 15.7384C2.98541 15.3202 3.19472 14.8514 3.61294 14.6914Z" fill="#4D4D4D" />
                            </svg>
                            <span>{__('Assets Generation', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'editor-enhancements' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('editor-enhancements')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4384 2.63332C13.9564 2.14599 14.686 2 15.486 2H19.2617C20.0617 2 20.7912 2.14599 21.3093 2.63332C21.8373 3.13009 22 3.84187 22 4.61682V10.972C22 11.7469 21.8373 12.4587 21.3093 12.9555C20.7912 13.4428 20.0617 13.5888 19.2617 13.5888H15.486C14.686 13.5888 13.9564 13.4428 13.4384 12.9555C12.9104 12.4587 12.7477 11.7469 12.7477 10.972V4.61682C12.7477 3.84187 12.9104 3.13009 13.4384 2.63332ZM14.335 3.5863C14.1925 3.72037 14.0561 3.98991 14.0561 4.61682V10.972C14.0561 11.5989 14.1925 11.8684 14.335 12.0025C14.4875 12.146 14.8 12.2804 15.486 12.2804H19.2617C19.9477 12.2804 20.2602 12.146 20.4127 12.0025C20.5552 11.8684 20.6916 11.5989 20.6916 10.972V4.61682C20.6916 3.98991 20.5552 3.72037 20.4127 3.5863C20.2602 3.44279 19.9477 3.30841 19.2617 3.30841H15.486C14.8 3.30841 14.4875 3.44279 14.335 3.5863Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4384 15.7176C13.9564 15.2302 14.686 15.0842 15.486 15.0842H19.2617C20.0617 15.0842 20.7912 15.2302 21.3093 15.7176C21.8373 16.2143 22 16.9261 22 17.7011V19.3833C22 20.1582 21.8373 20.87 21.3093 21.3668C20.7912 21.8541 20.0617 22.0001 19.2617 22.0001H15.486C14.686 22.0001 13.9564 21.8541 13.4384 21.3668C12.9104 20.87 12.7477 20.1582 12.7477 19.3833V17.7011C12.7477 16.9261 12.9104 16.2143 13.4384 15.7176ZM14.335 16.6705C14.1925 16.8046 14.0561 17.0741 14.0561 17.7011V19.3833C14.0561 20.0102 14.1925 20.2797 14.335 20.4138C14.4875 20.5573 14.8 20.6917 15.486 20.6917H19.2617C19.9477 20.6917 20.2602 20.5573 20.4127 20.4138C20.5552 20.2797 20.6916 20.0102 20.6916 19.3833V17.7011C20.6916 17.0741 20.5552 16.8046 20.4127 16.6705C20.2602 16.527 19.9477 16.3926 19.2617 16.3926H15.486C14.8 16.3926 14.4875 16.527 14.335 16.6705Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.58728 11.9974C3.44477 12.1315 3.30841 12.401 3.30841 13.028V19.3831C3.30841 20.01 3.44477 20.2795 3.58728 20.4136C3.73983 20.5571 4.0523 20.6915 4.73832 20.6915H8.51402C9.20004 20.6915 9.51251 20.5571 9.66505 20.4136C9.80756 20.2795 9.94392 20.01 9.94392 19.3831V13.028C9.94392 12.401 9.80756 12.1315 9.66505 11.9974C9.51251 11.8539 9.20004 11.7195 8.51402 11.7195H4.73832C4.0523 11.7195 3.73983 11.8539 3.58728 11.9974ZM2.69075 11.0445C3.20877 10.5571 3.93835 10.4111 4.73832 10.4111H8.51402C9.31398 10.4111 10.0436 10.5571 10.5616 11.0445C11.0896 11.5412 11.2523 12.253 11.2523 13.028V19.3831C11.2523 20.1581 11.0896 20.8698 10.5616 21.3666C10.0436 21.8539 9.31398 21.9999 8.51402 21.9999H4.73832C3.93835 21.9999 3.20877 21.8539 2.69075 21.3666C2.1627 20.8698 2 20.1581 2 19.3831V13.028C2 12.253 2.1627 11.5412 2.69075 11.0445Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.58728 3.5863C3.44477 3.72037 3.30841 3.98991 3.30841 4.61682V6.29907C3.30841 6.92598 3.44477 7.19551 3.58728 7.32958C3.73983 7.47309 4.0523 7.60748 4.73832 7.60748H8.51402C9.20004 7.60748 9.51251 7.47309 9.66505 7.32958C9.80756 7.19551 9.94392 6.92598 9.94392 6.29907V4.61682C9.94392 3.98991 9.80756 3.72037 9.66505 3.5863C9.51251 3.44279 9.20004 3.30841 8.51402 3.30841H4.73832C4.0523 3.30841 3.73983 3.44279 3.58728 3.5863ZM2.69075 2.63332C3.20877 2.14599 3.93835 2 4.73832 2H8.51402C9.31398 2 10.0436 2.14599 10.5616 2.63332C11.0896 3.13009 11.2523 3.84187 11.2523 4.61682V6.29907C11.2523 7.07402 11.0896 7.78579 10.5616 8.28256C10.0436 8.76989 9.31398 8.91589 8.51402 8.91589H4.73832C3.93835 8.91589 3.20877 8.76989 2.69075 8.28256C2.1627 7.78579 2 7.07402 2 6.29907V4.61682C2 3.84187 2.1627 3.13009 2.69075 2.63332Z" fill="#4D4D4D" />
                            </svg>
                            <span>{__('Editor Enhancements', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'version-control' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('version-control')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1041 7.7485C19.1041 6.19162 17.842 4.92953 16.2851 4.92953C14.7282 4.92953 13.4661 6.20083 13.4661 7.7485C13.4661 9.11193 14.4334 10.2543 15.7232 10.5122C15.585 10.9083 15.327 11.4334 14.9401 11.6453C14.848 11.7006 14.544 11.8572 13.9544 11.5993C11.7526 10.6412 9.86412 10.5675 8.62966 11.3782C8.61124 11.3966 8.5836 11.415 8.55597 11.4334C8.54675 10.3556 8.52833 9.07508 8.5099 7.54583C9.73515 7.24182 10.6564 6.13634 10.6564 4.81898C10.6564 3.26209 9.39429 2 7.8374 2C6.28052 2 5 3.25288 5 4.80055C5 6.10871 5.8936 7.19576 7.10041 7.51819C7.12805 9.69231 7.14648 12.5573 7.14648 14.5196C7.14648 14.5656 7.14648 14.6117 7.14648 14.667C7.14648 14.6762 7.14648 14.6946 7.14648 14.7038C7.14648 15.4869 7.14648 16.1133 7.12805 16.4542C5.91202 16.7674 5 17.8637 5 19.181C5 20.7379 6.2713 22 7.81898 22C9.36665 22 10.638 20.7379 10.638 19.181C10.638 17.8637 9.73515 16.7674 8.5099 16.4542C8.53754 15.9475 8.55597 15.1184 8.54675 13.7181C8.67573 13.1561 8.93367 12.7232 9.32059 12.4652C10.1589 11.9125 11.6513 12.0322 13.4109 12.7969C14.3782 13.2206 15.0967 13.0272 15.5297 12.7969C16.626 12.2165 16.9945 10.8254 17.0774 10.4293C18.2289 10.0792 19.0857 9.01059 19.0857 7.73929L19.1041 7.7485ZM6.30815 4.80055C6.30815 3.96223 6.98987 3.28973 7.81898 3.28973C8.64809 3.28973 9.3298 3.97144 9.3298 4.80055C9.3298 5.62966 8.64809 6.31138 7.81898 6.31138C6.98987 6.31138 6.30815 5.62966 6.30815 4.80055ZM9.3298 19.1718C9.3298 20.0101 8.64809 20.6826 7.81898 20.6826C6.98987 20.6826 6.30815 20.0009 6.30815 19.1718C6.30815 18.3427 6.98987 17.661 7.81898 17.661C8.64809 17.661 9.3298 18.3427 9.3298 19.1718ZM16.2759 9.25933C15.4376 9.25933 14.7651 8.57761 14.7651 7.7485C14.7651 6.91939 15.4468 6.23768 16.2759 6.23768C17.105 6.23768 17.7867 6.91939 17.7867 7.7485C17.7867 8.57761 17.105 9.25933 16.2759 9.25933Z" fill="#4D4D4D" />
                            </svg>
                            <span>{__('Version Control', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'performance' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('performance')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8216 2.68648C21.4464 2.17058 20.8179 1.94546 19.9924 2.01112C19.1389 2.05802 15.7996 3.08045 12.7792 5.05964C12.4509 4.78761 11.2502 4.01845 9.00841 5.3598C6.851 6.64486 2.40486 11.016 2.20788 11.1942C2.0109 11.3912 1.94524 11.6913 2.04842 11.9446C2.1516 12.1979 2.39548 12.3855 2.67688 12.3948L5.22826 12.498C4.37467 13.7737 3.15527 16.3345 3.05208 20.668C3.05208 20.865 3.12713 21.0526 3.25845 21.1839C3.38977 21.3153 3.56799 21.3903 3.75559 21.3903H3.77435C3.95257 21.3903 7.78901 21.2308 11.6536 18.9515L11.813 21.3528C11.8318 21.6248 12.0006 21.8593 12.2539 21.9531C12.3383 21.9906 12.4321 22 12.5166 22C12.6854 22 12.8542 21.9343 12.9856 21.8218C13.0887 21.728 15.6495 19.4205 17.8444 16.5502C20.2269 13.4454 19.5047 11.7851 19.4109 11.6069C19.3827 11.5506 19.3358 11.5131 19.2983 11.4662C19.8705 10.547 20.4146 9.48702 20.9117 8.26761C22.2061 5.20972 22.4688 3.59635 21.8122 2.68648H21.8216ZM9.73068 6.56982C10.5655 6.0633 11.1189 5.98826 11.4566 6.0164C9.71192 7.39527 8.22987 9.13058 7.65769 11.2129L4.38405 11.0722C5.8661 9.67462 8.36119 7.38589 9.73068 6.56982ZM4.49661 19.927C4.79677 15.0119 6.67278 12.8826 6.95418 12.5918L7.42319 12.6106C7.42319 13.905 8.24863 16.3626 11.466 16.8222C11.4847 16.8222 11.5035 16.8222 11.5223 16.8222L11.5598 17.3663C8.78329 19.186 5.84734 19.7582 4.49661 19.927ZM16.747 15.706C15.49 17.3475 14.0736 18.8295 13.1356 19.7675L12.9949 17.7227C12.9949 17.6664 12.9949 17.6195 12.9856 17.5632L12.9293 16.6721C14.4301 16.3251 16.3342 15.3214 18.1164 13.164C17.9757 13.7362 17.6193 14.571 16.747 15.706ZM19.636 7.74233C17.1034 14.027 13.3701 15.5184 11.6161 15.4246C8.98027 15.0494 8.84895 12.9389 8.83957 12.6012C9.36486 6.74804 18.8575 3.47441 20.0862 3.40875C20.3958 3.38061 20.6209 3.41813 20.6772 3.50255C20.7898 3.65263 21.0336 4.40303 19.6172 7.72357L19.636 7.74233Z" fill="#4D4D4D" />
                            </svg>
                            <span>{__('Performance', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'site-visibility' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('site-visibility')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C8.35546 3 5.02227 5.14707 2.75234 8.7165C2.23481 9.52691 2 10.5651 2 11.5601C2 12.5552 2.23481 13.5934 2.75234 14.4038C4.99721 17.9338 8.27322 20.0731 11.8802 20.1195C11.9191 20.1261 11.9591 20.1296 12 20.1296C15.655 20.1296 18.9782 17.972 21.2472 14.4137C21.765 13.6032 22 12.5648 22 11.5694C22 10.5745 21.7653 9.53658 21.2479 8.72624C18.978 5.14728 15.6447 3 12 3ZM2.75234 14.4038C2.75248 14.404 2.75261 14.4042 2.75275 14.4044L3.3516 14.0218L2.75193 14.4031C2.75207 14.4033 2.7522 14.4036 2.75234 14.4038ZM20.0492 13.6491C17.9958 16.8695 15.122 18.6647 12.1103 18.7075C12.0743 18.7019 12.0375 18.699 12 18.699C8.94745 18.699 6.02898 16.908 3.95127 13.6405L3.95045 13.6392C3.61365 13.112 3.42127 12.3576 3.42127 11.5601C3.42127 10.7626 3.61365 10.0082 3.95045 9.48106L3.95127 9.47977C6.02875 6.21263 8.9564 4.42127 12 4.42127C15.0433 4.42127 17.9708 6.2123 20.0482 9.48832L20.0495 9.49035C20.3863 10.0175 20.5787 10.7719 20.5787 11.5694C20.5787 12.3669 20.3863 13.1213 20.0495 13.6485L20.0492 13.6491ZM9.3108 11.5695C9.3108 10.0855 10.5161 8.8802 12.0001 8.8802C13.484 8.8802 14.6893 10.0855 14.6893 11.5695C14.6893 13.0534 13.484 14.2587 12.0001 14.2587C10.5161 14.2587 9.3108 13.0534 9.3108 11.5695ZM12.0001 7.45893C9.73115 7.45893 7.88953 9.30055 7.88953 11.5695C7.88953 13.8384 9.73115 15.68 12.0001 15.68C14.269 15.68 16.1106 13.8384 16.1106 11.5695C16.1106 9.30055 14.269 7.45893 12.0001 7.45893Z" fill="#4D4D4D" />
                            </svg>
                            <span>{__('Site Visibility', 'zoloblocks')}</span>
                        </div>
                        <div className={`zolo-tab-button-item ${activeTab === 'theme-fonts' ? 'zolo-tab-active' : ''}`}
                            onClick={() => handleTabClick('theme-fonts')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.2093 2H14.7907C19.8419 2 22 4.15814 22 9.2093V14.7907C22 19.8419 19.8419 22 14.7907 22H9.2093C4.15814 22 2 19.8419 2 14.7907V9.2093C2 4.15814 4.15814 2 9.2093 2ZM14.7907 20.6047C19.0791 20.6047 20.6047 19.0791 20.6047 14.7907V9.2093C20.6047 4.92093 19.0791 3.39535 14.7907 3.39535H9.2093C4.92093 3.39535 3.39535 4.92093 3.39535 9.2093V14.7907C3.39535 19.0791 4.92093 20.6047 9.2093 20.6047H14.7907ZM7.03249 8.48381C10.1395 6.93963 13.8511 6.93963 16.9581 8.48381V8.49311C17.3023 8.66056 17.4511 9.07916 17.2744 9.42335C17.1534 9.67451 16.9116 9.81404 16.6511 9.81404C16.5488 9.81404 16.4464 9.78614 16.3441 9.73963C15.1906 9.16288 13.9534 8.85591 12.6976 8.76288V16.0094C12.6976 16.3908 12.3813 16.7071 11.9999 16.7071C11.6185 16.7071 11.3023 16.3908 11.3023 16.0094V8.76288C10.0464 8.85591 8.79994 9.17218 7.65575 9.73963C7.30226 9.90707 6.88366 9.76753 6.71622 9.42335C6.54877 9.06986 6.68831 8.65125 7.03249 8.48381Z" fill="#4D4D4D" />
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
                                        <ToggleControl
                                            checked={blockLibrary}
                                            onChange={() => {
                                                updateBlockLibrary(!blockLibrary);
                                                setNotice(true);
                                            }}
                                        />
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
