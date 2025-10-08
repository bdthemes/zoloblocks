/**
 * Internal dependencies
 */
const { ZoloIconPicker, SortableControl, SortableItem, ZoloButton, ZoloCorePanelBody, ZoloTextControl, ZoloTextareaControl } =
    window.zoloModule;
import { cloneDeep } from 'lodash';
import { __ } from '@wordpress/i18n';

const Sortable = ({ circleItems, setAttributes }) => {
    // add a new circle item
    const addCircleItem = () => {
        const newItem = {
            id: circleItems.length + 1,
            title: `Circle Item ${circleItems.length + 1}`,
            desc: 'Description',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
        };
        setAttributes({ circleItems: [...circleItems, newItem] });
    };

    // update the circle item
    const updateCircleItem = (index, key, value) => {
        const updatedItems = cloneDeep(circleItems);
        updatedItems[index][key] = value;
        setAttributes({ circleItems: updatedItems });
    };

    // remove a circle item
    const removeCircleItem = (index) => {
        setAttributes({ circleItems: circleItems.filter((_, i) => i !== index) });
    };

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add Circle Item', 'zoloblocks')}</div>
                <ZoloButton onClick={addCircleItem}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </ZoloButton>
            </div>
            <SortableControl defaultItems={circleItems} attributeName="circleItems" setAttributes={setAttributes}>
                {circleItems.map((item, index) => (
                    <div className="dnd-container" key={item.id}>
                        <ZoloButton className="dnd-trash" icon="trash" onClick={() => removeCircleItem(index)} />
                        <SortableItem id={item.id}>
                            <ZoloCorePanelBody title={item.title || 'Circle Item'} initialOpen={false}>
                                <ZoloTextControl
                                    label={__('Title', 'zoloblocks')}
                                    value={item.title}
                                    onChange={(value) => updateCircleItem(index, 'title', value)}
                                />
                                <ZoloTextareaControl
                                    className="zolo-flex-col-control"
                                    label={__('Description', 'zoloblocks')}
                                    value={item.desc}
                                    onChange={(value) => updateCircleItem(index, 'desc', value)}
                                />
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zoloblocks')}
                                    value={item.icon}
                                    onChange={(value) => updateCircleItem(index, 'icon', value)}
                                />
                            </ZoloCorePanelBody>
                        </SortableItem>
                    </div>
                ))}
            </SortableControl>
        </div>
    );
};

export default Sortable;
