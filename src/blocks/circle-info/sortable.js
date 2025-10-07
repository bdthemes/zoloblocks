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
            icon: '',
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
