/**
 * Internal depencencies
 */
const { ZoloIconPicker, SortableControl, SortableItem, LinkControl, ColorControl, NormalBGControl } = window.zoloModule;

const { __ } = wp.i18n;
const { Button, PanelBody, TextControl, SelectControl } = wp.components;
import { cloneDeep } from 'lodash';

import { SHAPE_BUILDER_PS } from './constants';

const Sortable = ({ panelProps, requiredProps }) => {
    const { attributes, setAttributes } = panelProps;
    console.log('attributes', attributes);
    const { builderShapes } = attributes;
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
                                    position: 'bottom-right',
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
                                        <SelectControl
                                            label={__('Position', 'zoloblocks')}
                                            value={shape?.position || 'bottom-right'}
                                            options={SHAPE_BUILDER_PS}
                                            onChange={(value) => {
                                                const newShapes = [...builderShapes];
                                                newShapes[index].position = value;
                                                setAttributes({ builderShapes: newShapes });
                                            }}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={`shapeBG${shape.id}`}
                                            noMainBGImg={false}
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
