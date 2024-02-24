import { SelectControl } from '@wordpress/components';

/**
 * Internal depencencies
 */
const { ZoloIconPicker, SortableControl, SortableItem, LinkControl } = window.zoloModule;

const { __ } = wp.i18n;
const { Button, PanelBody, TextControl, TextareaControl } = wp.components;
import { cloneDeep } from 'lodash';


// uppercase first letter of string
const Sortable = ({ tabs, setAttributes }) => {
    const deepCloneTabs = cloneDeep(tabs);


    function capitalizeWords(str) {
        return str.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });
    }
    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Media', 'zolo-blocks')}</div>
                <Button
                    onClick={() => {
                        setAttributes({
                            tabs: [
                                ...tabs,
                                {
                                    id: tabs.length + 1,
                                    title: 'item',
                                    content: '',
                                    icon: '',
                                },
                            ],
                        });
                    }}
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </Button>
            </div>
            <SortableControl defaultItems={tabs} attributeName="tabs" setAttributes={setAttributes}>


                {tabs &&
                    tabs.map((tab, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            tabs: tabs.filter((tab, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={tab.id} id={tab.id}>
                                    <PanelBody title={capitalizeWords(tab.title) || 'Title'} initialOpen={false}>
                                        <TextControl
                                            label={__('Title', 'zolo-blocks')}
                                            value={tab.title}
                                            onChange={(v) =>
                                                setAttributes({
                                                    tabs: tabs.map((tab, i) => {
                                                        if (index === i) {
                                                            tab.title = v;
                                                        }
                                                        return tab;
                                                    }),
                                                })
                                            }
                                        />
                                        <TextareaControl
                                            label={__('Description', 'zolo-blocks')}
                                            value={tab.content}
                                            onChange={(v) =>
                                                setAttributes({
                                                    tabs: tabs.map((tab, i) => {
                                                        if (index === i) {
                                                            tab.content = v;
                                                        }
                                                        return tab;
                                                    }),
                                                })
                                            }
                                        />

                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zolo-blocks')}
                                            value={tab.icon}
                                            onChange={(value) => {
                                                const newItems = [...deepCloneTabs];
                                                newItems[index].icon = value;
                                                setAttributes({
                                                    icon: newItems,
                                                });
                                            }}
                                        />
                                    </PanelBody>
                                </SortableItem>
                            </div>
                        );
                    })}
            </SortableControl>
        </div>
    );
};

export default Sortable;
