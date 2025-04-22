/**
 * Internal dependencies
 */
const { ZoloIconPicker, SortableControl, SortableItem, LinkControl } = window.zoloModule;
import { Button, PanelBody, TextareaControl } from '@wordpress/components';
import { cloneDeep } from 'lodash';
import { __ } from '@wordpress/i18n';
import { TextControl } from '../../components/Core';

const Sortable = ({ listProfiles, setAttributes, attributes }) => {
    const { DscToggle, preset, isLinkable } = attributes;

    // add a new profile
    const addProfile = () => {
        const newProfile = {
            id: listProfiles.length + 1,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
            link: { url: '#', openInNewTab: false },
            text: `List Item ${listProfiles.length + 1}`,
            desc: 'Customize widget dimension beyond normal scale',
        };
        setAttributes({ listProfiles: [...listProfiles, newProfile] });
    };

    // update the profile list
    const updateProfiles = (index, key, value) => {
        const updatedProfiles = cloneDeep(listProfiles);
        updatedProfiles[index][key] = value;
        setAttributes({ listProfiles: updatedProfiles });
    };

    // remove a profile
    const removeProfile = (index) => {
        setAttributes({ listProfiles: listProfiles.filter((_, i) => i !== index) });
    };

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a List', 'zoloblocks')}</div>
                <Button onClick={addProfile}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </Button>
            </div>
            <SortableControl defaultItems={listProfiles} attributeName="listProfiles" setAttributes={setAttributes}>
                {listProfiles.map((profile, index) => (
                    <div className="dnd-container" key={profile.id}>
                        <Button className="dnd-trash" icon="trash" onClick={() => removeProfile(index)} />
                        <SortableItem id={profile.id}>
                            <PanelBody title={profile.text.replace(/<[^>]*>/g, '') || 'Title'} initialOpen={false}>
                                <TextControl
                                    label={__('Title', 'zoloblocks')}
                                    value={profile.text}
                                    onChange={(value) => updateProfiles(index, 'text', value)}
                                    __nextHasNoMarginBottom={true}
                                    __next40pxDefaultSize={true}
                                />
                                {DscToggle && preset !== 'zolo-list-style-1' && (
                                    <TextareaControl
                                        className="zolo-flex-col-control"
                                        label={__('Description', 'zoloblocks')}
                                        value={profile.desc}
                                        onChange={(value) => updateProfiles(index, 'desc', value)}
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    />
                                )}
                                {preset !== 'zolo-list-style-1' && (
                                    <ZoloIconPicker
                                        label={__('Select Icon', 'zoloblocks')}
                                        value={profile.icon}
                                        onChange={(value) => updateProfiles(index, 'icon', value)}
                                    />
                                )}
                                {isLinkable && (
                                    <LinkControl
                                        label={__('Link', 'zoloblocks')}
                                        value={profile.link}
                                        onChange={(value) => updateProfiles(index, 'link', value)}
                                    />
                                )}
                            </PanelBody>
                        </SortableItem>
                    </div>
                ))}
            </SortableControl>
        </div>
    );
};

export default Sortable;
