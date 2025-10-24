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
    ZoloBaseControl,
    ImageAvatar,
    ZoloTextControl,
    ZoloTextareaControl,
    LinkControl,
    IconicBtnGroup,
} = window.zoloModule;

import { MediaUpload } from '@wordpress/block-editor';
import { ICON_BOX_OPTIONS } from '../../../src/global/constants';
import { cloneDeep } from 'lodash';
import { __ } from '@wordpress/i18n';

const Sortable = ({ circleItems = [], setAttributes, attributeName = 'circleItems' }) => {
    // Ensure circleItems is always an array
    const items = Array.isArray(circleItems) ? circleItems : [];

    // Convert layer value to display text
    const layerLabel = (layer) => {
        const layerMap = {
            layer1: 'Layer 1',
            layer2: 'Layer 2',
            layer3: 'Layer 3',
        };
        return layerMap[layer] || 'Layer 1';
    };

    // add a new circle item
    const addCircleItem = () => {
        const newItem = {
            id: Date.now() + Math.random(), // Generate unique ID
            layer: 'layer1',
            link: {
                url: '#',
                openInNewTab: false,
            },
            iconType: 'icon',
            photo: {
                id: null,
                url: null,
                sizes: null,
                alt: null,
                caption: null,
            },
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

    // remove a circle item by ID (not index) to handle sorting correctly
    const removeCircleItem = (itemId) => {
        setAttributes({ [attributeName]: items.filter((item) => item.id !== itemId) });
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
                        <ZoloButton className="dnd-trash" icon="trash" onClick={() => removeCircleItem(item.id)} />
                        <SortableItem id={item.id || index}>
                            <ZoloCorePanelBody title={`Item ${index + 1} - ${layerLabel(item.layer)}`} initialOpen={false}>
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
                                    value={item.link || { url: '', openInNewTab: false }}
                                    onChange={(value) => updateCircleItem(index, 'link', value)}
                                />

                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Type', 'zoloblocks')}
                                        value={item.iconType || 'icon'}
                                        onChange={(value) => updateCircleItem(index, 'iconType', value)}
                                        options={ICON_BOX_OPTIONS}
                                    />
                                </div>
                                {(item.iconType || 'icon') === 'icon' && (
                                    <ZoloIconPicker
                                        label={__('Select Icon', 'zoloblocks')}
                                        value={item.icon || ''}
                                        onChange={(value) => updateCircleItem(index, 'icon', value)}
                                    />
                                )}

                                {(item.iconType || 'icon') === 'image' && (
                                    <ZoloBaseControl label={__('Photo', 'zoloblocks')} className="zolo-flex-col-control">
                                        {item.photo && item.photo.url ? (
                                            <ImageAvatar
                                                imageUrl={item.photo.url}
                                                onDeleteImage={() =>
                                                    updateCircleItem(index, 'photo', {
                                                        id: null,
                                                        url: null,
                                                        sizes: null,
                                                        alt: null,
                                                        caption: null,
                                                    })
                                                }
                                                imageId={item.photo.id}
                                                onEditImage={(media) => {
                                                    updateCircleItem(index, 'photo', {
                                                        id: media.id,
                                                        url: media.url,
                                                        sizes: media.sizes,
                                                        alt: media.alt,
                                                        caption: media.caption,
                                                    });
                                                }}
                                            />
                                        ) : (
                                            <MediaUpload
                                                onSelect={(media) => {
                                                    updateCircleItem(index, 'photo', {
                                                        id: media.id,
                                                        url: media.url,
                                                        sizes: media.sizes,
                                                        alt: media.alt,
                                                        caption: media.caption,
                                                    });
                                                }}
                                                allowedTypes={['image']}
                                                value={item.photo && item.photo.id}
                                                render={({ open }) => (
                                                    <ZoloButton className="zolo-image-upload-btn" onClick={open}>
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                        >
                                                            <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                        </svg>
                                                        {__(' Upload Photo', 'zoloblocks')}
                                                    </ZoloButton>
                                                )}
                                            />
                                        )}
                                    </ZoloBaseControl>
                                )}
                            </ZoloCorePanelBody>
                        </SortableItem>
                    </div>
                ))}
            </SortableControl>
        </div>
    );
};

export default Sortable;
