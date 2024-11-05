
import { cloneElement } from '@wordpress/element';
import { Button, PanelBody } from '@wordpress/components';
import { Children } from '@wordpress/element';
import generateUniqueHash from './generate-uniqe-hash';
import getItemLabel from './get-item-label';
import { __ } from '@wordpress/i18n';
import { copy, plus, trash } from '@wordpress/icons';

const ZoloRepeater = ({ repeaterItems = [], children, onChange, itemLabelName = "", defaultLabel = "Item", addUniqueId = false }) => {
    const handleAdd = () => {
        const newItem = {};

        if (addUniqueId) {
            newItem.id = generateUniqueHash();
        }

        // Convert children to array to ensure consistency
        const childrenArray = Children.toArray(children);

        childrenArray.forEach(child => {
            if (child.props.name) {
                newItem[child.props.name] = child.props.default || '';
            }
        });

        onChange([...repeaterItems, newItem]);
    };

    const handleRemove = index => {
        const newItems = [...repeaterItems];
        newItems.splice(index, 1);
        onChange(newItems);
    };

    const handleClone = index => {
        const newItems = [...repeaterItems];
        const clonedItem = { ...newItems[index] }; // Clone the item
        if (addUniqueId) {
            clonedItem.id = generateUniqueHash(); // Assign a new unique ID to the cloned item
        }
        newItems.splice(index + 1, 0, clonedItem); // Insert the cloned item
        onChange(newItems);
    };

    const handleItemChange = (index, name, value) => {
        const newItems = JSON.parse(JSON.stringify(repeaterItems));
        newItems[index][name] = value;
        onChange(newItems);
    };

    return (
        <div className='zolo-repeater-container'>
            <Button 
                className='zolo-repeater-add' 
                icon={plus} 
                variant="primary" 
                onClick={handleAdd}
            >
                {__('Add Item', 'gutenkit-blocks-addon')}
            </Button>
            {
                repeaterItems && repeaterItems.map((item, index) => {
                    let itemLabel = getItemLabel(item, itemLabelName, index, defaultLabel);
                    return (
                        <div key={index} className="zolo-repeater-item">
                            <PanelBody title={itemLabel} initialOpen={false} className="zolo-repeater-item-body">
                                <div className='zolo-repeater-item-content'>
                                    {Children.toArray(children).map((child, i) => {
                                        const childName = child?.props?.name;
                                        return cloneElement(child, {
                                            key: i,
                                            ...(childName ? {
                                                value: item[childName],
                                                values: item[childName],
                                                checked: item[childName],
                                                onChange: value => handleItemChange(index, childName, value),
                                            } : {
                                                id: item.id
                                            })
                                        });
                                    })}
                                </div>
                            </PanelBody>
                            <div className="zolo-repeater-actions">
                                <Button
                                    className="zolo-repeater-action-button"
                                    icon={copy}
                                    label="Clone Item"
                                    tooltipPosition='top'
                                    onClick={() => handleClone(index)}
                                />
                                <Button
                                    className="zolo-repeater-action-button"
                                    icon={trash}
                                    label="Delete Item"
                                    tooltipPosition='top'
                                    onClick={() => handleRemove(index)}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ZoloRepeater;
