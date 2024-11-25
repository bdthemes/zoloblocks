/**
 * Internal depencencies
 */
const { ZoloIconPicker, SortableControl, SortableItem, LinkControl } = window.zoloModule;

const { __ } = wp.i18n;
const { Button, PanelBody, TextControl } = wp.components;
import { cloneDeep } from 'lodash';

const Sortable = ({ builderShapes, setAttributes }) => {
    const deepCloneShapes = cloneDeep(builderShapes);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a shape', 'zoloblocks')}</div>
                <Button
                    onClick={() =>
                        setAttributes({
                            builderShapes: [
                                ...builderShapes,
                                {
                                    id: builderShapes.length + 1,
                                    text: 'Shape ' + (builderShapes.length + 1),
                                },
                            ],
                        })
                    }
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </Button>
            </div>
            <SortableControl defaultItems={builderShapes} attributeName="builderShapes" setAttributes={setAttributes}>
                {deepCloneShapes &&
                    deepCloneShapes.map((shape, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            builderShapes: builderShapes.filter((shape, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={shape.id} id={shape.id}>
                                    <PanelBody title={shape.text || 'Title'} initialOpen={false}>
                                        <TextControl
                                            label={__('Title', 'zoloblocks')}
                                            value={shape.text}
                                            onChange={(v) => {
                                                const newItems = [...deepCloneShapes];
                                                newItems[index].text = v;
                                                setAttributes({
                                                    builderShapes: newItems,
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
