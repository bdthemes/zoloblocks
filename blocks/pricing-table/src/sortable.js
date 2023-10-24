/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, PanelBody, TextControl } from '@wordpress/components';

/**
 * Internal depencencies
 */
const { IconPicker, SortableItem, SortableControl } = window.zoloModule;

const Sortable = ({ features, setAttributes }) => {
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
                                    icon: 'fas fa-check',
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
                {features &&
                    features.map((feature, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        const newItems = [...features];
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
                                                const newItems = [...features];
                                                newItems[index].text = value;
                                                setAttributes({
                                                    features: newItems,
                                                });
                                            }}
                                        />
                                        <IconPicker
                                            value={feature.icon}
                                            onChange={(value) => {
                                                const newItems = [...features];
                                                newItems[index].icon = value;
                                                setAttributes({
                                                    features: newItems,
                                                });
                                            }}
                                            showHeading={false}
                                            disableDashicon={true}
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
