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

/**
 * Edit Function
 */

const Edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        tabTitles,
        tabChildCount,
        tabsLayout,
        tabActiveItemNo,
        showTitle,
        showDesc,
        showIcon,
        tabIndicatorStyle,
        tabContentStyle,
        addNewTabStatus,
        verticalLayoutDirection,
        contentDirection,
        tabItemWidth,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.tabs} alt={__('Tabs Preview', 'zolo-blocks')} />;
    }

    // handle tab click
    const tabWrapRef = useRef(null);

    const [activeTabId, setActiveTabId] = useState(false);
    const activeDefaultTabId = (tabTitles.find((item) => item.isDefault) || { id: tabActiveItemNo }).id;

    // update tabTitles
    useEffect(() => {
        // update all tabTitles hasMedia based on showIcon
        const newTabTitles = tabTitles.map((tab) => {
            return {
                ...tab,
                hasTitle: showTitle,
                hasMedia: showIcon,
                hasDescription: showDesc,
            };
        });
        setAttributes({ tabTitles: newTabTitles });
    }, [showIcon, showTitle, showDesc, addNewTabStatus]);

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
                   .wp-block-zolo-tabs .block-list-appender.wp-block button {
                    border: 1px solid #ccc !important;
                    padding: 35px 0 !important;
                    border-radius: 6px;
                }
                `}
            </style>
            <div {...blockProps}>
                <div
                    className={classnames(
                        'zolo-tabs',
                        `${tabsLayout === 'horizontal' ? `zolo-tab_${tabsLayout}` : `zolo-tab_${verticalLayoutDirection}`}`,
                        `${tabContentStyle === 'content-style-1' ? `zolo-tab_${tabContentStyle}` : `zolo-tab_${contentDirection}`}`,
                        `zolo-tab_${tabIndicatorStyle}`
                    )}
                    role="tablist"
                    tabIndex={0}
                    ref={tabWrapRef}
                >
                    <div className={`tab__list zolo-tab_header-wrap ${tabItemWidth}`}>
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
                                            {tab.hasMedia && showIcon && (
                                                <span className="zolo-tab_icon">
                                                    <DisplayZoloIcon icon={tab.icon} />
                                                </span>
                                            )}
                                        </div>
                                        <div className="zolo-tab_head-content">
                                            {showTitle && (
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
                                            )}
                                            {tab.hasDescription && showDesc && (
                                                <RichText
                                                    tagName="p"
                                                    className={'zolo-tab_desc'}
                                                    value={tab.description}
                                                    onChange={(v) => {
                                                        const newTabTitles = [...tabTitles];
                                                        newTabTitles[index].description = v;
                                                        setAttributes({ tabTitles: newTabTitles });
                                                    }}
                                                    placeholder={__('Tab Description', 'zolo-blocks')}
                                                />
                                            )}
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
