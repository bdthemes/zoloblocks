import { __ } from '@wordpress/i18n';
import { SelectControl, ToggleControl, Button, PanelBody } from '@wordpress/components';

const { ZoloIconPicker, SortableControl, SortableItem, IconicBtnGroup, LinkControl } = window.zoloModule;
import { cloneDeep } from 'lodash';
import { META_TYPE, GET_TAXONOMIEX, ICON_TYPE } from './constants';
import { MetaIcon } from './meta-icon';

const taxonomiesArray = GET_TAXONOMIEX(zoloParams.get_taxonomies);

const Sortable = ({ metaData, setAttributes }) => {
    const deepCloneMetaData = cloneDeep(metaData);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Meta Data', 'zoloblocks')}</div>
                <Button
                    onClick={() =>
                        setAttributes({
                            metaData: [
                                ...metaData,
                                {
                                    id: metaData.length + 1,
                                    type: 'author',
                                    link: true,
                                    showIcon: 'icon',
                                    icon: MetaIcon.author,
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
            {deepCloneMetaData &&
                deepCloneMetaData.map((meta, index) => {
                    return (
                        <SortableControl defaultItems={metaData} attributeName="metaData" setAttributes={setAttributes}>
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            metaData: metaData.filter((meta, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={meta.id} id={meta.id}>
                                    <PanelBody
                                        title={meta?.type ? meta.type.charAt(0).toUpperCase() + meta.type.slice(1) : 'Title'}
                                        initialOpen={false}
                                    >
                                        <SelectControl
                                            label={__('Type', 'zoloblocks')}
                                            value={meta?.type}
                                            options={META_TYPE}
                                            onChange={(v) => {
                                                const newItems = [...deepCloneMetaData];
                                                newItems[index].type = v;
                                                newItems[index].icon = MetaIcon[meta?.type];
                                                setAttributes({
                                                    metaData: newItems,
                                                });
                                            }}
                                        />
                                        {meta?.type === 'date' && (
                                            <SelectControl
                                                label={__('Date Type', 'zoloblocks')}
                                                value={meta?.dateType || 'post_published'}
                                                onChange={(v) => {
                                                    const newItems = [...deepCloneMetaData];
                                                    newItems[index].dateType = v;
                                                    setAttributes({
                                                        metaData: newItems,
                                                    });
                                                }}
                                                options={[
                                                    { label: __('Post Published', 'zoloblocks'), value: 'post_published' },
                                                    { label: __('Post Modified', 'zoloblocks'), value: 'post_modified' },
                                                ]}
                                            />
                                        )}
                                        {meta?.type === 'terms' && (
                                            <SelectControl
                                                label={__('Taxonomy', 'zoloblocks')}
                                                value={meta?.taxonomy || 'category'}
                                                onChange={(v) => {
                                                    const newItems = [...deepCloneMetaData];
                                                    newItems[index].taxonomy = v;
                                                    setAttributes({
                                                        metaData: newItems,
                                                    });
                                                }}
                                                options={taxonomiesArray}
                                            />
                                        )}

                                        {meta?.type !== 'time' && meta?.type !== 'readingTime' && (
                                            <ToggleControl
                                                label={__('link', 'zoloblocks')}
                                                checked={meta?.link || false}
                                                onChange={(v) => {
                                                    const newItems = [...deepCloneMetaData];
                                                    newItems[index].link = v;
                                                    setAttributes({
                                                        metaData: newItems,
                                                    });
                                                }}
                                            />
                                        )}
                                    </PanelBody>
                                </SortableItem>
                            </div>
                        </SortableControl>
                    );
                })}
        </div>
    );
};

export default Sortable;
