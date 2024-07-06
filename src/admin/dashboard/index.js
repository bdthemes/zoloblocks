import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { TABS } from '../constants';
import Logo from './Logo';
import ExtraInfo from './Extra';
import Welcome from './Welcome';
import Blocks from './Blocks';
import ApiSettings from './API-Settings';
import Settings from './Settings';
import Extensions from './Extensions';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(TABS[0].value);

    return (
        <div className="zolo-dashboard-wrapper">
            <div className="zolo-header">
                <div className="zolo-dashboard-container">
                    <div className="header-flex">
                        <Logo />
                        <div className="zolo-tabs zolo-desktop-menu">
                            {TABS.length > 0 &&
                                TABS.map((tab, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className={activeTab === tab.value ? 'zolo-tab zolo-tab-active' : 'zolo-tab'}
                                            onClick={() => {
                                                setActiveTab(tab.value);
                                            }}
                                        >
                                            {tab.label}
                                        </button>
                                    );
                                })}
                        </div>

                        <div className="zolo-header-right">
                            <div className="zolo-tabs-dropdown">
                                <button className="zolo-tabs-dropbtn">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M1 1h15M1 7h15M1 13h15"
                                        />
                                    </svg>
                                </button>
                                <div className="zolo-tabs-dropdown-content">
                                    <div className="zolo-tabs">
                                        {TABS.length > 0 &&
                                            TABS.map((tab, index) => {
                                                return (
                                                    <button
                                                        key={index}
                                                        className={activeTab === tab.value ? 'zolo-tab zolo-tab-active' : 'zolo-tab'}
                                                        onClick={() => {
                                                            setActiveTab(tab.value);
                                                        }}
                                                    >
                                                        {tab.label}
                                                    </button>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                            <ExtraInfo />
                        </div>
                    </div>
                </div>
            </div>
            <div className="zolo-dashboard-container">
                <div className="zolo-body">
                    {activeTab === 'welcome' && <Welcome />}
                    {activeTab === 'blocks' && <Blocks />}
                    {activeTab === 'extensions' && <Extensions />}
                    {activeTab === 'apiSettings' && <ApiSettings />}
                    {activeTab === 'settings' && <Settings />}
                </div>
            </div>
            <div className="zolo-footer">
                <span className="zolo-footer-text alignleft" id="footer-thankyou">
                   {__('© 2024 ZoloBlocks. All rights reserved.', 'zoloblocks')}
                </span>
                <span className="zolo-footer-version alignright" id="footer-version">
                    {__('Version. ', 'zoloblocks') + zoloBlocks.plugin_version}
                </span>
            </div>
        </div>
    );
};

export default Dashboard;
