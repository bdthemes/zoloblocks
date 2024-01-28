import { useState } from '@wordpress/element';

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
            <div className="zolo-dashboard-container">
                <div className="zolo-body">
                    {activeTab === 'welcome' && <Welcome />}
                    {activeTab === 'blocks' && <Blocks />}
                    {activeTab === 'apiSettings' && <ApiSettings />}
                    {activeTab === 'settings' && <Settings />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
