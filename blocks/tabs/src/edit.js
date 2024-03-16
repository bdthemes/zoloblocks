/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { useEffect, useState, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelect, dispatch } from '@wordpress/data';
import { times } from 'lodash';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';
import { style } from 'motion';

/**
 * Edit Function
 */

const Edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses, tabTitles, tabChildCount, tabsLayout, tabActiveItemNo } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Tabs Preview', 'zolo-blocks')} />;
    }

    // handle tab click
    const tabWrapRef = useRef(null);

    const [activeTabId, setActiveTabId] = useState(false);
    const activeDefaultTabId = (tabTitles.find((item) => item.isDefault) || { id: tabActiveItemNo }).id;



    useEffect(() => {
        // add default tab
        if (tabTitles.length === 0) {
            setAttributes({
                tabTitles: [
                    {
                        id: '1',
                        title: 'Tab 1',
                        hasDescription: false,
                        description: 'Description 1',
                        hasMedia: false,
                        hasNumber: false,
                        isDefault: true,
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>',
                    },
                    {
                        id: '2',
                        title: 'Tab 2',
                        hasDescription: false,
                        description: 'Description 2',
                        hasMedia: false,
                        hasNumber: false,
                        isDefault: true,
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>',
                    },
                    {
                        id: '3',
                        title: 'Tab 3',
                        hasDescription: false,
                        description: 'Description 3',
                        hasMedia: false,
                        hasNumber: false,
                        isDefault: true,
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>',
                    },
                ],
            });
        }
    }, []);

    const { innerBlocks } = useSelect((select) => select('core/block-editor').getBlocksByClientId(clientId)[0]);
    useEffect(() => {
        const { updateBlockAttributes } = dispatch('core/block-editor');
        times(innerBlocks.length, (n) => {
            updateBlockAttributes(innerBlocks[n].clientId, {
                tabParentId: `${uniqueId}`,
            });
        });
    }, [uniqueId, innerBlocks]);

    // Handle Tab Click
    const handleTabClick = (id) => {
        const tabsParentEl = (tabWrapRef || { current: false }).current;

        if (!tabsParentEl) return false;

        const allTabChildWraps = tabsParentEl.querySelectorAll(`.tab__content-item`);

        if (allTabChildWraps.length === 0) return false;

        for (const tabWrapDiv of allTabChildWraps) {
            const tabId = tabWrapDiv.dataset.tabId;
            if (tabId === id) {
                tabWrapDiv.style.display = 'block';
                tabWrapDiv.style.animation = 'fadeIn 0.3s';
            } else {
                tabWrapDiv.style.display = 'none';
            }
        }
        setActiveTabId(`${id}`);
    };

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    handleTabClick={handleTabClick}
                    clientId={clientId}
                    activeTabId={activeTabId}
                    setActiveTabId={setActiveTabId}
                />
            )}
            <Style props={props} />
            <style>
                {`
                   .block-editor-block-list__block.wp-block-zolo-container .block-editor-block-list__layout .block-list-appender.wp-block button {
                    border: 1px solid #ccc;
                }
                `}
            </style>
            <div {...blockProps}>
                <div
                    className={classnames('zolo-tabs', `zolo-tab_${tabsLayout}`, 'zolo-tab_content-style-1', 'zolo-tab_animation-style-1')}
                    role="tablist"
                    tabIndex={0}
                    ref={tabWrapRef}
                >
                    <div className="tab__list zolo-tab_header-wrap">
                        {tabTitles &&
                            tabTitles.map((tab, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`tab__item zolo-tab_head-item ${
                                            // tabActiveItemNo === tab.id ? 'active' : ''
                                            (activeTabId || activeDefaultTabId) === tab.id ? 'active' : ''
                                        }`}
                                        tabIndex={tab.id}
                                        role="tab"
                                        aria-controls={`tab-content-${tab.id}`}
                                        aria-selected={(activeTabId || activeDefaultTabId) === tab.id ? 'true' : 'false'}
                                        onClick={() => handleTabClick(tab.id)}
                                    >
                                        <div className="zolo-tab_icon-number-wrap">
                                            {tab.hasMedia && (
                                                <span className="zolo-tab_icon">
                                                    <DisplayZoloIcon icon={tab.icon} />
                                                </span>
                                            )}
                                            {tab.hasNumber && (
                                                <span className="zolo-tab_number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                            )}
                                        </div>
                                        <div className="zolo-tab_head-content">
                                            <RichText
                                                tagName="h2"
                                                className={'zolo-tab_title'}
                                                value={tab.title}
                                                onChange={(v) => {
                                                    const newTabTitles = [...tabTitles];
                                                    newTabTitles[index].title = v;
                                                    setAttributes({ tabTitles: newTabTitles });
                                                }}
                                                placeholder={__('Tab Title', 'zolo-blocks')}
                                            />
                                            {tab.hasDescription && <p className="zolo-tab_desc">{tab.description}</p>}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="tab__content">
                        <InnerBlocks
                            templateLock="all"
                            template={times(tabChildCount, (n) => [
                                'zolo/tab',
                                {
                                    tabId: `${n + 1}`,
                                    tabParentId: uniqueId,
                                },
                            ])}
                            allowedBlocks={['zolo/tab']}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
