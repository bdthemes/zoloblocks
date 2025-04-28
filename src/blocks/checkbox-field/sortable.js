import { __ } from '@wordpress/i18n';
import { cloneDeep } from 'lodash';

const { SortableControl, SortableItem, ZoloButton, ZoloCorePanelBody, ZoloTextControl } = window.zoloModule;

const Sortable = ({ optionData, setAttributes }) => {
    const deepCloneMetaData = cloneDeep(optionData);
    const transformToValueFormat = (input) => {
        return input.toLowerCase().replace(/\s+/g, '_');
    };
    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add New Option', 'zoloblocks')}</div>
                <ZoloButton
                    onClick={() =>
                        setAttributes({
                            optionData: [
                                ...optionData,
                                {
                                    id: optionData.length + 1,
                                    name: 'Option ' + optionData.length,
                                    value: transformToValueFormat('Option ' + optionData.length),
                                },
                            ],
                        })
                    }
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </ZoloButton>
            </div>
            {deepCloneMetaData &&
                deepCloneMetaData.map((meta, index) => {
                    return (
                        <SortableControl defaultItems={optionData} attributeName="optionData" setAttributes={setAttributes}>
                            <div className="dnd-container" key={index}>
                                <ZoloButton
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            optionData: optionData.filter((meta, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={meta.id} id={meta.id}>
                                    <ZoloCorePanelBody
                                        title={meta?.name ? meta.name.charAt(0).toUpperCase() + meta.name.slice(1) : 'Title'}
                                        initialOpen={false}
                                    >
                                        <ZoloTextControl
                                            label={__('Option', 'zoloblocks')}
                                            value={meta?.name}
                                            onChange={(v) => {
                                                const newItems = [...deepCloneMetaData];
                                                newItems[index].name = v;
                                                newItems[index].value = transformToValueFormat(v);
                                                setAttributes({
                                                    optionData: newItems,
                                                });
                                            }}
                                        />
                                    </ZoloCorePanelBody>
                                </SortableItem>
                            </div>
                        </SortableControl>
                    );
                })}
        </div>
    );
};

export default Sortable;
