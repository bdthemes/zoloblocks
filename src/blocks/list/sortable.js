/**
 * Internal dependencies
 */
const {
    ZoloIconPicker,
    ColorControl,
    SortableControl,
    SortableItem,
    LinkControl,
    ZoloButton,
    ZoloCorePanelBody,
    ZoloTextControl,
    ZoloTextareaControl,
} = window.zoloModule;
import { cloneDeep } from 'lodash';
import { __ } from '@wordpress/i18n';

const Sortable = ({ listProfiles, setAttributes, attributes }) => {
    const { DscToggle, preset, isLinkable, showBadge } = attributes;

    // add a new profile
    const addProfile = () => {
        const newProfile = {
            id: listProfiles.length + 1,
            icon: '',
            link: { url: '#', openInNewTab: false },
            text: `List Item ${listProfiles.length + 1}`,
            badge: 'New',
            badgeColor: '',
            badgeBgColor: '',
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
                <ZoloButton onClick={addProfile}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </ZoloButton>
            </div>
            <SortableControl defaultItems={listProfiles} attributeName="listProfiles" setAttributes={setAttributes}>
                {listProfiles.map((profile, index) => (
                    <div className="dnd-container" key={profile.id}>
                        <ZoloButton className="dnd-trash" icon="trash" onClick={() => removeProfile(index)} />
                        <SortableItem id={profile.id}>
                            <ZoloCorePanelBody title={profile.text.replace(/<[^>]*>/g, '') || 'Title'} initialOpen={false}>
                                <ZoloTextControl
                                    label={__('Title', 'zoloblocks')}
                                    value={profile.text}
                                    onChange={(value) => updateProfiles(index, 'text', value)}
                                    __nextHasNoMarginBottom={true}
                                    __next40pxDefaultSize={true}
                                />
                                {DscToggle && preset !== 'zolo-list-style-1' && (
                                    <ZoloTextareaControl
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
                                {showBadge && (
                                    <>
                                        <ZoloTextControl
                                            label={__('Badge', 'zoloblocks')}
                                            value={profile.badge}
                                            onChange={(value) => updateProfiles(index, 'badge', value)}
                                        />

                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={profile.badgeColor}
                                            onChange={(value) => updateProfiles(index, 'badgeColor', value)}
                                        />

                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={profile.badgeBgColor}
                                            onChange={(value) => updateProfiles(index, 'badgeBgColor', value)}
                                        />
                                    </>
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
