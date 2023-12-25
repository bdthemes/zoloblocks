/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { cloneDeep } from 'lodash';

/**
 * Internal depencencies
 */
const { ZoloIconPicker, SortableItem, SortableControl } = window.zoloModule;

const Sortable = ({ features, setAttributes }) => {
    const deepCloneFeatures = cloneDeep(features);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Feature', 'zolo-blocks')}</div>
                <Button
                    onClick={() => {
                        setAttributes({
                            features: [
                                ...features,
                                {
                                    id: features.length + 1,
                                    text: `List Item #${features.length + 1}`,
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>',
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
            <SortableControl defaultItems={features} attributeName="features" setAttributes={setAttributes}>
                {deepCloneFeatures &&
                    deepCloneFeatures.map((feature, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        const newItems = [...deepCloneFeatures];
                                        newItems.splice(index, 1);
                                        setAttributes({
                                            features: newItems,
                                        });
                                    }}
                                />
                                <SortableItem key={feature.id} id={feature.id}>
                                    <PanelBody title={feature.text || 'Title'} initialOpen={false}>
                                        <TextControl
                                            label={__('Text', 'zolo-blocks')}
                                            value={feature.text}
                                            onChange={(value) => {
                                                const newItems = [...deepCloneFeatures];
                                                newItems[index].text = value;
                                                setAttributes({
                                                    features: newItems,
                                                });
                                            }}
                                        />
                                        <ZoloIconPicker
                                            label={__('Icon', 'zolo-blocks')}
                                            value={feature.icon}
                                            onChange={(value) => {
                                                const newItems = [...deepCloneFeatures];
                                                newItems[index].icon = value;
                                                setAttributes({
                                                    features: newItems,
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
