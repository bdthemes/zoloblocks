/**
 * Internal depencencies
 */
const { ZoloIconPicker, SortableControl, SortableItem, ZoloButton, ZoloCorePanelBody, ZoloTextControl, ZoloTextareaControl } =
    window.zoloModule;

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { select, dispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { cloneDeep } from 'lodash';

const Sortable = ({
    tabTitles,
    setAttributes,
    clientId,
    uniqueId,
    tabChildCount,
    handleTabClick,
    activeTabId,
    setActiveTabId,
    addNewTabStatus,
    showTitle,
    showIcon,
    showDesc,
}) => {
    const deepCloneTitles = cloneDeep(tabTitles);

    // add new tab
    const addNewTab = () => {
        const innerBlocks = [...select('core/block-editor').getBlocks(clientId)];
        const maxId = tabTitles.reduce((acc, curr) => Math.max(parseInt(acc), parseInt(curr.id)), 0);
        const tabId = `${maxId + 1}`;

        const newBlock = createBlock('zolo/tab', {
            tabId,
            tabParentId: `${uniqueId}`,
        });

        innerBlocks.splice(innerBlocks.length, 0, newBlock);
        dispatch('core/block-editor')
            .replaceInnerBlocks(clientId, innerBlocks)
            .then(() => {
                setAttributes({
                    tabTitles: [
                        ...tabTitles,
                        {
                            id: tabId,
                            hasTitle: showTitle || false,
                            title: `Tab ${parseInt(innerBlocks.length)}`,
                            hasDescription: showDesc || false,
                            description: `Description ${parseInt(innerBlocks.length)}`,
                            hasMedia: showIcon || false,
                            hasNumber: false,
                            isDefault: false,
                            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>',
                        },
                    ],
                    tabChildCount: tabChildCount + 1,
                });
                handleTabClick(tabId);
                setAttributes({
                    addNewTabStatus: !addNewTabStatus,
                });
            });

        //
    };

    // Remove Tab Item
    const removeTabItem = (index) => {
        const innerBlocks = select('core/block-editor').getBlocks(clientId);

        if (innerBlocks.length > 1) {
            innerBlocks.splice(index, 1);
            const newTabTitles = [...tabTitles];
            newTabTitles.splice(index, 1);

            dispatch('core/block-editor')
                .replaceInnerBlocks(clientId, innerBlocks)
                .then(() => {
                    setAttributes({
                        tabTitles: newTabTitles,
                        tabChildCount: tabChildCount - 1,
                    });
                    setAttributes({
                        addNewTabStatus: !addNewTabStatus,
                    });
                });
        }

        if (activeTabId === tabTitles[index].id) {
            setActiveTabId(tabTitles[index - 1].id);
        }
    };

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Tab', 'zoloblocks')}</div>
                <ZoloButton onClick={addNewTab}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </ZoloButton>
            </div>
            <SortableControl defaultItems={tabTitles} attributeName="socialProfiles" setAttributes={setAttributes}>
                {deepCloneTitles &&
                    deepCloneTitles.map((tab, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <ZoloButton
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        removeTabItem(index);
                                    }}
                                />
                                <SortableItem key={tab.id} id={tab.id}>
                                    <ZoloCorePanelBody title={tab.title || 'Title'} initialOpen={false}>
                                        <ZoloTextControl
                                            label={__('Title', 'zoloblocks')}
                                            value={tab.title}
                                            onChange={(v) => {
                                                const newItems = [...deepCloneTitles];
                                                newItems[index].title = v;
                                                setAttributes({
                                                    tabTitles: newItems,
                                                });
                                            }}
                                            help={__(
                                                'title is also used as panel title, so use it but you can hide it from content.',
                                                'zoloblocks'
                                            )}
                                        />
                                        {tab.hasDescription && (
                                            <ZoloTextareaControl
                                                className="zolo-flex-col-control"
                                                label={__('Description', 'zoloblocks')}
                                                value={tab.description}
                                                onChange={(v) => {
                                                    const newItems = [...deepCloneTitles];
                                                    newItems[index].description = v;
                                                    setAttributes({ tabTitles: newItems });
                                                }}
                                            />
                                        )}
                                        {/* <ToggleControl
                                            label={__('Show Tab Icon', 'zoloblocks')}
                                            checked={tab.hasMedia}
                                            onChange={() => {
                                                const newItems = [...deepCloneTitles];
                                                newItems[index].hasMedia = !tab.hasMedia;
                                                setAttributes({ tabTitles: newItems });
                                            }}
                                        /> */}
                                        {tab.hasMedia && (
                                            <ZoloIconPicker
                                                label={__('Select Icon', 'zoloblocks')}
                                                value={tab.icon}
                                                onChange={(value) => {
                                                    const newItems = [...deepCloneTitles];
                                                    newItems[index].icon = value;
                                                    setAttributes({
                                                        tabTitles: newItems,
                                                    });
                                                }}
                                            />
                                        )}
                                    </ZoloCorePanelBody>
                                </SortableItem>
                            </div>
                        );
                    })}
            </SortableControl>
        </div>
    );
};

export default Sortable;
