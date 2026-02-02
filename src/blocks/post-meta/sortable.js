import { __ } from '@wordpress/i18n';
import { cloneDeep } from 'lodash';
import { META_TYPE, GET_TAXONOMIEX, ICON_TYPE } from './constants';
import { MetaIcon } from './meta-icon';

const {
    ZoloIconPicker,
    SortableControl,
    SortableItem,
    IconicBtnGroup,
    LinkControl,
    ZoloToggleControl,
    ZoloSelectControl,
    ZoloButton,
    ZoloCorePanelBody,
    ZoloChoose
} = window.zoloModule;

const taxonomiesArray = GET_TAXONOMIEX(zoloParams.get_taxonomies);

const Sortable = ({ metaData, setAttributes }) => {
    const deepCloneMetaData = cloneDeep(metaData);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Meta Data', 'zoloblocks')}</div>
                <ZoloButton
                    onClick={() =>
                        setAttributes({
                            metaData: [
                                ...metaData,
                                {
                                    id: metaData.length + 1,
                                    type: 'author',
                                    link: true,
                                    showIcon: true,
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
                </ZoloButton>
            </div>
            {deepCloneMetaData &&
                deepCloneMetaData.map((meta, index) => {
                    return (
                        <SortableControl
                            key={meta.id || index}
                            defaultItems={metaData}
                            attributeName="metaData"
                            setAttributes={setAttributes}
                        >
                            <div className="dnd-container" key={meta.id || index}>
                                <ZoloButton
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            metaData: metaData.filter((meta, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={meta.id || index} id={meta.id}>
                                    <ZoloCorePanelBody
                                        title={meta?.type ? meta.type.charAt(0).toUpperCase() + meta.type.slice(1) : 'Title'}
                                        initialOpen={false}
                                    >
                                        <ZoloSelectControl
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
                                            <ZoloSelectControl
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
                                            <ZoloSelectControl
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
                                            <ZoloToggleControl
                                                label={__('Link', 'zoloblocks')}
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
                                        <ZoloToggleControl
                                            label={__('Show Icon', 'zoloblocks')}
                                            checked={meta?.showIcon === 'icon'}
                                            onChange={(v) => {
                                                const newItems = [...deepCloneMetaData];
                                                newItems[index].showIcon = v ? 'icon' : 'none';
                                                setAttributes({
                                                    metaData: newItems,
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
