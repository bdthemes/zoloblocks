/**
 * Internal dependencies
 */
const {
    ZoloSelectControl,
    ZoloIconPicker,
    SortableControl,
    SortableItem,
    ZoloButton,
    ZoloCorePanelBody,
    ZoloTextControl,
    ZoloTextareaControl,
    LinkControl,
} = window.zoloModule;
import { cloneDeep } from 'lodash';
import { __ } from '@wordpress/i18n';

const Sortable = ({ circleItems = [], setAttributes, attributeName = 'circleItems' }) => {
    // Ensure circleItems is always an array
    const items = Array.isArray(circleItems) ? circleItems : [];

    // add a new circle item
    const addCircleItem = () => {
        const newItem = {
            id: items.length + 1,
            layer: 'layer1',
            url: '#',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
        };
        setAttributes({ [attributeName]: [...items, newItem] });
    };

    // update the circle item
    const updateCircleItem = (index, key, value) => {
        const updatedItems = cloneDeep(items);
        updatedItems[index][key] = value;
        setAttributes({ [attributeName]: updatedItems });
    };

    // remove a circle item
    const removeCircleItem = (index) => {
        setAttributes({ [attributeName]: items.filter((_, i) => i !== index) });
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
            <SortableControl defaultItems={items} attributeName={attributeName} setAttributes={setAttributes}>
                {items.map((item, index) => (
                    <div className="dnd-container" key={item.id || index}>
                        <ZoloButton className="dnd-trash" icon="trash" onClick={() => removeCircleItem(index)} />
                        <SortableItem id={item.id || index}>
                            <ZoloCorePanelBody title={`Circle Item ${index + 1} - ${item.layer || 'Layer 1'}`} initialOpen={false}>
                                <ZoloSelectControl
                                    label={__('Select Layer', 'zoloblocks')}
                                    value={item.layer || ''}
                                    onChange={(value) => updateCircleItem(index, 'layer', value)}
                                    options={[
                                        { label: __('Layer 1', 'zoloblocks'), value: 'layer1' },
                                        { label: __('Layer 2', 'zoloblocks'), value: 'layer2' },
                                        { label: __('Layer 3', 'zoloblocks'), value: 'layer3' },
                                    ]}
                                />
                                <LinkControl
                                    label={__('Link', 'zoloblocks')}
                                    value={item.url || ''}
                                    onChange={(value) => updateCircleItem(index, 'url', value)}
                                />
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zoloblocks')}
                                    value={item.icon || ''}
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
