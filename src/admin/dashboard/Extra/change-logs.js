import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import SingleLog from './log';
const {zoloBlocks} = window;
const ChangeLogs = () => {
    const [logsPanel, setLogsPanel] = useState(false);
    return (
        <div className="zolo-changes-logs single-info">
            <button
                className="logos-panel-btn"
                onClick={() => {
                    setLogsPanel(true);
                }}
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.16667 3.90182V15.0335C8.16667 15.8434 7.51008 16.5 6.70015 16.5C6.08038 16.5 5.52752 16.1104 5.31907 15.5267L3.53039 10.4024M14 9.83333C15.3807 9.83333 16.5 8.71404 16.5 7.33333C16.5 5.95262 15.3807 4.83333 14 4.83333M3.53039 10.4024C2.33691 9.89508 1.5 8.71194 1.5 7.33333C1.5 5.49238 2.99238 4 4.83333 4H6.36007C9.77727 4 12.7141 2.97159 14 1.5L14 13.1667C12.7141 11.6951 9.77727 10.6667 6.36007 10.6667L4.83331 10.6667C4.37098 10.6667 3.93064 10.5725 3.53039 10.4024Z"
                        stroke="#adadad"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </button>

            {logsPanel && (
                <div className="logos-panel">
                    <div className="logos-panel-header">
                        <h3>{__("What's New", 'zoloblocks')}</h3>
                        <button onClick={() => setLogsPanel(false)} className="logos-panel-close-btn">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 1L11 11M11 1L1 11L11 1Z"
                                    stroke="#475569"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="logos-panel-body">
                        {zoloBlocks.has_pro && (
                            <>
                                <div className="zolo-changelog-plugin-name">
                                    <h3>{__('ZoloBlocks Pro', 'zoloblocks')}</h3>
                                </div>
                                <SingleLog
                                    version="1.0.0"
                                    date={'May 06, 2024'}
                                    changes={[
                                        {
                                            title: __('Added', 'zoloblocks'),
                                            list: [
                                                __('Entrance Animation feature added', 'zoloblocks'),
                                                __('Floating Animaiton feature added', 'zoloblocks'),
                                                __('Parallax Animaiton feature added', 'zoloblocks'),
                                                __('Sticky feature added', 'zoloblocks'),
                                                __('Hotspot block added', 'zoloblocks'),
                                                __('datatable block added', 'zoloblocks'),
                                                __('tooltip feature added to rich text', 'zoloblocks'),
                                                __('highlight feature added to rich text', 'zoloblocks'),
                                            ],
                                        },
                                    ]}
                                />
                                <div className="zolo-changelog-plugin-name">
                                    <h3>{__('ZoloBlocks Free', 'zoloblocks')}</h3>
                                </div>
                            </>
                        )}
                        <SingleLog
                            version="1.0.4"
                            date={'May 16, 2024'}
                            changes={[
                                {
                                    title: __('Added', 'zoloblocks'),
                                    list: [__('Hover background control added to Brand Grid block', 'zoloblocks')],
                                },
                                {
                                    title: __('Fixed', 'zoloblocks'),
                                    list: [
                                        __('Box Shadow hover issue fixed to Advanced Image block', 'zoloblocks'),
                                        __('Border hover color issue fixed to Advanced Image block', 'zoloblocks'),
                                        __('Alignment issue fixed to Advanced Search block', 'zoloblocks'),
                                        __('Overflow issue fixed to Brand Grid block', 'zoloblocks'),
                                        __('Vertical Alignment issue fixed to Business hours block', 'zoloblocks'),
                                        __('Content Vertical Alignment issue fixed to Counter block', 'zoloblocks'),
                                    ],
                                },
                                {
                                    title: __('Tweak', 'zoloblocks'),
                                    list: [
                                        __('Max Width control has been removed from image panel within Advanced Image block', 'zoloblocks'),
                                        __(
                                            'Margin control has been removed from container panel within Advanced Image block',
                                            'zoloblocks'
                                        ),
                                        __('Margin control has been removed from container panel within Brand Grid block', 'zoloblocks'),
                                    ],
                                },
                                {
                                    title: __('Improved', 'zoloblocks'),
                                    list: [
                                        __(
                                            'Active item controls shifted from Active Accordion panel to self panel tab in Accordion block',
                                            'zoloblocks'
                                        ),
                                        __(
                                            'Renamed panel name Accordion Head to Accordion Title in Accordion & Accordion child block',
                                            'zoloblocks'
                                        ),
                                        __(
                                            'Renamed panel name Accordion Body to Accordion Content in Accordion & Accordion child block',
                                            'zoloblocks'
                                        ),
                                        __('Title tag control shifted from style tab to basic tab in Advanced Icon Box', 'zoloblocks'),
                                        __('Default design improved in Counter block', 'zoloblocks'),
                                    ],
                                },
                            ]}
                        />
                        <SingleLog
                            version="1.0.3"
                            date={'May 08, 2024'}
                            changes={[
                                {
                                    title: __('Added', 'zoloblocks'),
                                    list: [__('Newsletter block added', 'zoloblocks')],
                                },
                            ]}
                        />
                        <SingleLog
                            version="1.0.2"
                            date={'May 06, 2024'}
                            changes={[
                                {
                                    title: __('Added', 'zoloblocks'),
                                    list: [
                                        __('Preset 4 layout added to Review Grid', 'zoloblocks'),
                                        __('Custom gradients colors feature added to the background control', 'zoloblocks'),
                                    ],
                                },
                                {
                                    title: __('Improved', 'zoloblocks'),
                                    list: [
                                        __('Controls UI improved', 'zoloblocks'),
                                        __('Deprecated codes are removed', 'zoloblocks'),
                                        __('Style 2 layout design improved to Team Grid block', 'zoloblocks'),
                                    ],
                                },
                            ]}
                        />
                        <SingleLog
                            version="1.0.1"
                            date={'April 27, 2024'}
                            changes={[
                                {
                                    title: __('Added', 'zoloblocks'),
                                    list: [
                                        __('Style copy & paste feature added', 'zoloblocks'),
                                        __('Focus Color control added to Advanced Search block', 'zoloblocks'),
                                        __('Button typography, shadow, spacing control added to Advanced Search block', 'zoloblocks'),
                                    ],
                                },
                                {
                                    title: __('Fixed', 'zoloblocks'),
                                    list: [
                                        __('Row and column issue fixed to Countdown block', 'zoloblocks'),
                                        __('Focus color issue fixed to Advanced Search block', 'zoloblocks'),
                                        __('Arrow position issue fixed to Slider and Carousel Block', 'zoloblocks'),
                                    ],
                                },
                                {
                                    title: __('Improved', 'zoloblocks'),
                                    list: [
                                        __('Controls UI improved', 'zoloblocks'),
                                        __('Deprecated codes are removed', 'zoloblocks'),
                                        __('Theme colors and gradients palettes are improved', 'zoloblocks'),
                                    ],
                                },
                            ]}
                        />
                        <SingleLog
                            version="1.0.0"
                            date={'April 22, 2024'}
                            changes={[
                                {
                                    title: __('Initial Release', 'zoloblocks'),
                                },
                            ]}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChangeLogs;
