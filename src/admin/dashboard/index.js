import { useEffect, useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { TABS } from '../constants';
import ApiSettings from './API-Settings';
import Blocks from './Blocks';
import Extensions from './Extensions';
import ExtraInfo from './Extra';
import Logo from './Logo';
import Settings from './Settings';
import Upgrade from './Upgrade';
import Welcome from './Welcome';

const Dashboard = () => {
    const getInitialStateFromURLQuery = () => {
        const hash = window.location.hash.slice(1); // Remove the '#' at the start
        return hash || 'welcome';
    };
    const [activeTab, setActiveTab] = useState(getInitialStateFromURLQuery);

    // Update URL hash when activeTab changes
    useEffect(() => {
        if (activeTab && window.location.hash.slice(1) !== activeTab) {
            window.history.pushState({}, '', `#${activeTab}`);
        }
    }, [activeTab]);

    // Handle browser back/forward buttons
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1) || 'welcome';
            setActiveTab(hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    const renderContent = () => {
        switch (activeTab) {
            case 'blocks':
                return <Blocks />;
            case 'extensions':
                return <Extensions />;
            case 'apiSettings':
                return <ApiSettings />;
            case 'settings':
                return <Settings />;
            case 'upgrade':
                return <Upgrade />;
            default:
                return <Welcome />;
        }
    };

    const pageTitle = useMemo(() => {
        const match = TABS.find((tab) => tab.value === activeTab);
        if (match) {
            return match.label;
        }
        if (activeTab === 'upgrade') {
            return __('Get Pro', 'zoloblocks');
        }
        return TABS[0]?.label ?? '';
    }, [activeTab]);

    return (
        <div className="zolo-dashboard-wrapper">
            <div className="zolo-dashboard-sidebar">
                <Logo />
                <div className="zolo-dash-sidebar-info">
                    <div className="zolo-dash-sidebar-top-info">
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
                                            {tab.icon && (
                                                <span className="zolo-side-tab-icon" dangerouslySetInnerHTML={{ __html: tab.icon }}></span>
                                            )}
                                            {tab.label}
                                        </button>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="zolo-dash-sidebar-bottom-info">
                        {false && zoloBlocks?.has_pro === '' && (
                            <div className="zolo-dash-side-primum">
                                <span className="zolo-dash-sidebar-bottom-info-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M0 0.0455322H9.87428L0.0457142 9.89286L0 0.0455322Z" fill="#FFA826" />
                                        <path
                                            d="M24.0011 14.4133C24.0011 19.4313 20.1694 23.5525 15.2775 24H0.046875V14.6107L14.584 0H22.3554L12.787 9.67832L10.1744 12.2959L5.30401 17.1756H13.8091C13.8201 17.176 13.8311 17.176 13.8421 17.176C13.853 17.176 13.864 17.176 13.875 17.1756C14.7454 17.1687 15.5458 16.8696 16.184 16.3713C17.0809 15.6719 17.6578 14.58 17.6578 13.353C17.6578 12.3875 17.3008 11.5058 16.7111 10.833L20.5301 7.00672C22.6507 8.77191 24.0011 11.4348 24.0011 14.4133Z"
                                            fill="#FFA826"
                                        />
                                    </svg>

                                    <span className="zolo-sidebar-icon-badge">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={11} height={12} viewBox="0 0 11 12" fill="none">
                                            <path
                                                d="M1.25909 5.1529C1.06506 4.61588 0.968049 4.34738 1.00942 4.17532C1.05466 3.98713 1.1885 3.84042 1.35956 3.79148C1.51596 3.74673 1.75926 3.85486 2.24586 4.07113C2.67626 4.26243 2.89146 4.35807 3.09366 4.35275C3.31628 4.34689 3.53044 4.25762 3.7008 4.09965C3.85552 3.95618 3.9593 3.72756 4.16686 3.27032L4.62429 2.26262C5.00639 1.42087 5.19744 1 5.49999 1C5.80254 1 5.99359 1.42087 6.37569 2.26262L6.83314 3.27032C7.04069 3.72756 7.14449 3.95618 7.29919 4.09965C7.46954 4.25762 7.68369 4.34689 7.90634 4.35275C8.10854 4.35807 8.32374 4.26243 8.75414 4.07113C9.24074 3.85486 9.48404 3.74673 9.64044 3.79148C9.81149 3.84042 9.94534 3.98713 9.99059 4.17532C10.0319 4.34738 9.93494 4.61588 9.74089 5.15285L8.90689 7.46109C8.55009 8.44849 8.37174 8.94219 7.99839 9.22109C7.62509 9.49999 7.14269 9.49999 6.17789 9.49999H4.82209C3.85729 9.49999 3.37488 9.49999 3.00157 9.22109C2.62827 8.94219 2.44988 8.44849 2.09311 7.46109L1.25909 5.1529Z"
                                                stroke="white"
                                            />
                                            <path
                                                d="M5.5 7H5.505"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M3 11H7.99999" stroke="white" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="zolo-dash-sidebar-bottom-info-text">
                                    {__('Upgrade to Premium to get all the features', 'zoloblocks')}
                                </span>
                                <a
                                    className="zolo-dash-sidebar-bottom-info-link"
                                    href="https://zoloblocks.com/pricing/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {__('Upgrade Now', 'zoloblocks')}
                                </a>
                            </div>
                        )}
                        <span className="zolo-footer-text alignleft" id="footer-thankyou">
                            {__('© ' + new Date().getFullYear() + ' BdThemes. All rights reserved.', 'zoloblocks')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="zolo-header-main-wrap">
                <div className="zolo-header">
                    <div className="header-flex">
                        <div className="zolo-header-left">
                            <h2 className="zolo-page-header-title">{pageTitle}</h2>
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
                <div className="zolo-body">{renderContent()}</div>
            </div>
        </div>
    );
};

export default Dashboard;
