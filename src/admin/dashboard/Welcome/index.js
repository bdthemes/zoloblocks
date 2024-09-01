import { __ } from '@wordpress/i18n';
import BlocksWrapper from './blocks';
import FooterWrapper from './footer';
import VideoSection from './video';

import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';
import classNames from 'classnames';

const Welcome = () => {
    const [blocks, setBlocks] = useState([]);
    const [extensions, setExtensions] = useState([]);

    const [totalBlocks, setTotalBlocks] = useState(0);
    const [activeBlocks, setActiveBlocks] = useState(0);

    const [totalExtensions, setTotalExtensions] = useState(0);
    const [activeExtensions, setActiveExtensions] = useState(0);

    // blocks data
    useEffect(() => {
        apiFetch({
            path: '/wp/v2/settings',
            method: 'GET',
        })
            .then((response) => {
                const { zolo_blocks_settings, zolo_extensions_settings } = response;
                setBlocks(zolo_blocks_settings);
                setExtensions(zolo_extensions_settings);
                setTotalBlocks(parseInt(zolo_blocks_settings.length));
                setTotalExtensions(parseInt(zolo_extensions_settings.length));
            })
            .catch((error) => console.error('API Fetch Error:', error));
    }, []);

    useEffect(() => {
        // count active blocks based on status is true
        const activeBlocks = blocks.filter((block) => block.status === true);
        setActiveBlocks(parseInt(activeBlocks.length));

        // count active extensions based on status is true
        const activeExtensions = extensions.filter((extension) => extension.status === true);
        setActiveExtensions(parseInt(activeExtensions.length));
    }, [blocks, totalBlocks]);

    return (
        <div className="zolo-welcome-page-wrap">
            <div className="zolo-dash-analysis-wrap">
                <div className="zolo-dash-analysis">
                    <div className="zolo-dash-analysis-item zolo-dash-total-blocks">
                        <div className="zolo-dash-analysis-top-info">
                            <h3 className="zolo-dash-analysis-item-title">{__('Total', 'zoloblocks')}</h3>
                            <span className="zolo-dash-analysis-item-value">
                                {__('Total', 'zoloblocks')}: <strong>{totalBlocks + totalExtensions}</strong>
                            </span>
                        </div>

                        <div className="zolo-dash-analysis-bottom-info">
                            <div className="zolo-dash-analysis-bar">
                                <div
                                    className="zolo-dash-analysis-bar-fill"
                                    style={{ width: `${((activeBlocks + activeExtensions) / (totalBlocks + totalExtensions)) * 100}%` }}
                                ></div>
                            </div>

                            <div className="zolo-dash-analysis-bottom-content">
                                <span className="zolo-bottom-content-value used">
                                    <span className="zolo-dot"></span>
                                    {__('Used', 'zoloblocks')}: <strong>{activeBlocks + activeExtensions}</strong>
                                </span>
                                <span className="zolo-bottom-content-value unused">
                                    <span className="zolo-dot"></span>
                                    {__('Unused', 'zoloblocks')}:{' '}
                                    <strong>{totalBlocks + totalExtensions - (activeBlocks + activeExtensions)}</strong>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Core Blocks Item */}
                    <div className="zolo-dash-analysis-item zolo-dash-core-blocks">
                        <div className="zolo-dash-analysis-top-info">
                            <h3 className="zolo-dash-analysis-item-title">{__('Core Blocks', 'zoloblocks')}</h3>
                            <span className="zolo-dash-analysis-item-value">
                                {__('Total', 'zoloblocks')}: <strong>{totalBlocks}</strong>
                            </span>
                        </div>

                        <div className="zolo-dash-analysis-bottom-info">
                            <div className="zolo-dash-analysis-bar">
                                <div
                                    className="zolo-dash-analysis-bar-fill"
                                    style={{ width: `${(activeBlocks / totalBlocks) * 100}%` }}
                                ></div>
                            </div>

                            <div className="zolo-dash-analysis-bottom-content">
                                <span className="zolo-bottom-content-value used">
                                    <span className="zolo-dot"></span>
                                    {__('Used', 'zoloblocks')}: <strong>{activeBlocks}</strong>
                                </span>
                                <span className="zolo-bottom-content-value unused">
                                    <span className="zolo-dot"></span>
                                    {__('Unused', 'zoloblocks')}: <strong>{totalBlocks - activeBlocks}</strong>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Extensions */}
                    <div className="zolo-dash-analysis-item zolo-dash-extensions">
                        <div className="zolo-dash-analysis-top-info">
                            <h3 className="zolo-dash-analysis-item-title">{__('Extensions', 'zoloblocks')}</h3>
                            <span className="zolo-dash-analysis-item-value">
                                {__('Total', 'zoloblocks')}: <strong>{totalExtensions}</strong>
                            </span>
                        </div>

                        <div className="zolo-dash-analysis-bottom-info">
                            <div className="zolo-dash-analysis-bar">
                                <div
                                    className="zolo-dash-analysis-bar-fill"
                                    style={{ width: `${totalExtensions > 0 ? (activeExtensions / totalExtensions) * 100 : 0}%` }}
                                ></div>
                            </div>

                            <div className="zolo-dash-analysis-bottom-content">
                                <span className="zolo-bottom-content-value used">
                                    <span className="zolo-dot"></span>
                                    {__('Used', 'zoloblocks')}: <strong>{activeExtensions}</strong>
                                </span>
                                <span className="zolo-bottom-content-value unused">
                                    <span className="zolo-dot"></span>
                                    {__('Unused', 'zoloblocks')}: <strong>{totalExtensions - activeExtensions}</strong>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 3rd Party Blocks Item */}
                    <div className="zolo-dash-analysis-item zolo-dash-tparty-blocks">
                        <div className="zolo-dash-analysis-top-info">
                            <h3 className="zolo-dash-analysis-item-title">{__('3rd Party', 'zoloblocks')}</h3>
                            <span className="zolo-dash-analysis-item-value">
                                {__('Total', 'zoloblocks')}: <strong>250</strong>
                            </span>
                        </div>

                        <div className="zolo-dash-analysis-bottom-info">
                            <div className="zolo-dash-analysis-bar">
                                <div className="zolo-dash-analysis-bar-fill" style={{ width: '20%' }}></div>
                                {/* Ensure this width is calculated dynamically if needed */}
                            </div>

                            <div className="zolo-dash-analysis-bottom-content">
                                <span className="zolo-bottom-content-value used">
                                    <span className="zolo-dot"></span>
                                    {__('Used', 'zoloblocks')}: <strong>25</strong>
                                </span>
                                <span className="zolo-bottom-content-value unused">
                                    <span className="zolo-dot"></span>
                                    {__('Unused', 'zoloblocks')}: <strong>250</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="zolo-welcome-video-and-others-wrap">
                <VideoSection
                    title={__('Welcome to Zoloblocks', 'zoloblocks')}
                    description={
                        <>
                            You now have the power to dominate in Gutenberg and show-off your web design skills! No experience needed, no
                            codes included. Just drag, drop, customize, and hit Publish. Enjoy! Learn about Zoloblocks by
                            <a href="https://youtu.be/jX4sIXG-9fo?list=PLP0S85GEw7DPpFyon1kxBZ8H1Ei7GK1yX" target="_blank">
                                Exploring Block
                            </a>
                            Videos here and from the
                            <a href="https://zoloblocks.com/" target="_blank">
                                Homepage
                            </a>
                            .
                        </>
                    }
                    videoInfo={{
                        id: 'jX4sIXG-9fo',
                        title: 'Zoloblocks Features Walkthrough - Get a Glance at the Features | BdThemes',
                        thumbnail: 'https://img.youtube.com/vi/jX4sIXG-9fo/maxresdefault.jpg',
                    }}
                />

                <div className="zolo-welcome-s-k-wrap zolo-system-req-wrap">
                    <div className="zolo-welcome-s-k-item ">
                        <h2 className="zolo-welcome-s-k-title">{__('System Requirement', 'zoloblocks')}</h2>
                        <ul className="zolo-system-ul-wrap">
                            {zoloBlocks['system_info']['php_version'] && (
                                <li>
                                    <span className="zolo-system-list-left-content">
                                        <span className="zolo-system-list-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2.5 6.75C2.5 6.75 3.25 6.75 4.25 8.5C4.25 8.5 7.0294 3.91667 9.5 3"
                                                    stroke="#00B578"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {__('PHP Version', 'zoloblocks')}
                                    </span>
                                    <span className="zolo-system-list-right-content">
                                        {__('Currently: ', 'zoloblocks')}
                                        <strong>{zoloBlocks['system_info']['php_version']}</strong>
                                    </span>
                                </li>
                            )}
                            {zoloBlocks['system_info']['wp_version'] && (
                                <li>
                                    <span className="zolo-system-list-left-content">
                                        <span className="zolo-system-list-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2.5 6.75C2.5 6.75 3.25 6.75 4.25 8.5C4.25 8.5 7.0294 3.91667 9.5 3"
                                                    stroke="#00B578"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {__('WordPress Version', 'zoloblocks')}
                                    </span>
                                    <span className="zolo-system-list-right-content">
                                        {__('Currently: ', 'zoloblocks')}
                                        <strong>{zoloBlocks['system_info']['wp_version']}</strong>
                                    </span>
                                </li>
                            )}
                            {zoloBlocks['system_info']['memory_limit'] && (
                                <li>
                                    <span className="zolo-system-list-left-content">
                                        <span className="zolo-system-list-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2.5 6.75C2.5 6.75 3.25 6.75 4.25 8.5C4.25 8.5 7.0294 3.91667 9.5 3"
                                                    stroke="#00B578"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {__('Memory Limit', 'zoloblocks')}
                                    </span>
                                    <span className="zolo-system-list-right-content">
                                        {__('Currently: ', 'zoloblocks')}
                                        <strong>{zoloBlocks['system_info']['memory_limit']}</strong>
                                    </span>
                                </li>
                            )}

                            {zoloBlocks['system_info']['post_max_size'] && (
                                <li>
                                    <span className="zolo-system-list-left-content">
                                        <span className="zolo-system-list-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2.5 6.75C2.5 6.75 3.25 6.75 4.25 8.5C4.25 8.5 7.0294 3.91667 9.5 3"
                                                    stroke="#00B578"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {__('Memory post Limit', 'zoloblocks')}
                                    </span>
                                    <span className="zolo-system-list-right-content">
                                        {__('Currently: ', 'zoloblocks')}
                                        <strong>{zoloBlocks['system_info']['post_max_size']}</strong>
                                    </span>
                                </li>
                            )}
                            <li>
                                <span className="zolo-system-list-left-content">
                                    <span
                                        className={classNames('zolo-system-list-icon', {
                                            close: zoloBlocks['system_info']['gzip'] !== 'Enabled',
                                        })}
                                    >
                                        {zoloBlocks['system_info']['gzip'] === 'Enabled' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2.5 6.75C2.5 6.75 3.25 6.75 4.25 8.5C4.25 8.5 7.0294 3.91667 9.5 3"
                                                    stroke="#00B578"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M9 3.00024L3 9.00024M3 3.00024L9 9.00024"
                                                    stroke="#FF5061"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </span>
                                    {__('Gzip Status', 'zoloblocks')}
                                </span>
                                <span className="zolo-system-list-right-content">
                                    <strong>{zoloBlocks['system_info']['gzip']}</strong>
                                </span>
                            </li>

                            {zoloBlocks['system_info']['max_execution_time'] && (
                                <li>
                                    <span className="zolo-system-list-left-content">
                                        <span className="zolo-system-list-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2.5 6.75C2.5 6.75 3.25 6.75 4.25 8.5C4.25 8.5 7.0294 3.91667 9.5 3"
                                                    stroke="#00B578"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {__('Max Execution time', 'zoloblocks')}
                                    </span>
                                    <span className="zolo-system-list-right-content">
                                        <strong>{zoloBlocks['system_info']['max_execution_time']}</strong>
                                    </span>
                                </li>
                            )}

                            <li>
                                <span className="zolo-system-list-left-content">
                                    <span
                                        className={classNames('zolo-system-list-icon', {
                                            close: zoloBlocks['system_info']['debug_mode'] !== 'Enabled',
                                        })}
                                    >
                                        {zoloBlocks['system_info']['debug_mode'] === 'Enabled' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2.5 6.75C2.5 6.75 3.25 6.75 4.25 8.5C4.25 8.5 7.0294 3.91667 9.5 3"
                                                    stroke="#00B578"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M9 3.00024L3 9.00024M3 3.00024L9 9.00024"
                                                    stroke="#FF5061"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </span>
                                    {__('Debug Mode', 'zoloblocks')}
                                </span>
                                <span className="zolo-system-list-right-content">
                                    <strong>{zoloBlocks['system_info']['debug_mode']}</strong>
                                </span>
                            </li>

                            <li>
                                <span className="zolo-system-list-left-content">
                                    <span className="zolo-system-list-icon close">
                                        {zoloBlocks['system_info']['multisite'] === 'Enabled' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2.5 6.75C2.5 6.75 3.25 6.75 4.25 8.5C4.25 8.5 7.0294 3.91667 9.5 3"
                                                    stroke="#00B578"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M9 3.00024L3 9.00024M3 3.00024L9 9.00024"
                                                    stroke="#FF5061"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </span>
                                    {__('Multisite', 'zoloblocks')}
                                </span>
                                <span className="zolo-system-list-right-content">
                                    {zoloBlocks['system_info']['multisite'] === 'Enabled' ? (
                                        <span>{__('Has Multisite', 'zoloblocks')}</span>
                                    ) : (
                                        <span>{__('No Multisite', 'zoloblocks')}</span>
                                    )}
                                </span>
                            </li>
                        </ul>

                        <div className="zolo-system-note">
                            <p>
                                <strong>Note:</strong>
                                {__(
                                    ' If you have multiple addons like Zoloblocks so you need some more requirement some cases so make sure you added more memory for others addon too.',
                                    'zoloblocks'
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterWrapper />
            <BlocksWrapper />
        </div>
    );
};

export default Welcome;
