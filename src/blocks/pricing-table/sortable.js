/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { cloneDeep } from 'lodash';

/**
 * Internal depencencies
 */
const { ZoloIconPicker, SortableItem, SortableControl, ZoloButton, ZoloCorePanelBody, ZoloTextControl, ColorControl } = window.zoloModule;

const Sortable = ({ features, setAttributes }) => {
    const deepCloneFeatures = cloneDeep(features);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a List', 'zoloblocks')}</div>
                <ZoloButton
                    onClick={() => {
                        setAttributes({
                            features: [
                                ...features,
                                {
                                    id: features.length + 1,
                                    text: `List Item #${features.length + 1}`,
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>',
                                    color: '',
                                    iconColor: '',
                                    iconBgColor: '',
                                },
                            ],
                        });
                    }}
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </ZoloButton>
            </div>
            <SortableControl defaultItems={features} attributeName="features" setAttributes={setAttributes}>
                {deepCloneFeatures &&
                    deepCloneFeatures.map((feature, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <ZoloButton
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
                                    <ZoloCorePanelBody title={feature.text || 'Title'} initialOpen={false}>
                                        <ZoloTextControl
                                            label={__('Text', 'zoloblocks')}
                                            value={feature.text}
                                            onChange={(value) => {
                                                const newItems = [...deepCloneFeatures];
                                                newItems[index].text = value;
                                                setAttributes({
                                                    features: newItems,
                                                });
                                            }}
                                        />
                                        <ColorControl
                                            label={__('Text Color', 'zoloblocks')}
                                            color={feature.color}
                                            onChange={(value) => {
                                                const newItems = [...deepCloneFeatures];
                                                newItems[index].color = value;
                                                setAttributes({
                                                    features: newItems,
                                                });
                                            }}
                                        />
                                        <ZoloIconPicker
                                            label={__('Icon', 'zoloblocks')}
                                            value={feature.icon}
                                            onChange={(value) => {
                                                const newItems = [...deepCloneFeatures];
                                                newItems[index].icon = value;
                                                setAttributes({
                                                    features: newItems,
                                                });
                                            }}
                                        />
                                        {feature.icon && (
                                            <ColorControl
                                                label={__('Icon Color', 'zoloblocks')}
                                                color={feature.iconColor}
                                                onChange={(value) => {
                                                    const newItems = [...deepCloneFeatures];
                                                    newItems[index].iconColor = value;
                                                    setAttributes({
                                                        features: newItems,
                                                    });
                                                }}
                                            />
                                        )}
                                        {feature.icon && (
                                            <ColorControl
                                                label={__('Icon Background', 'zoloblocks')}
                                                color={feature.iconBgColor}
                                                onChange={(value) => {
                                                    const newItems = [...deepCloneFeatures];
                                                    newItems[index].iconBgColor = value;
                                                    setAttributes({
                                                        features: newItems,
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
