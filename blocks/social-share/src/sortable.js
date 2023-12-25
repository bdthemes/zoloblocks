import { SelectControl } from "@wordpress/components";

/**
 * Internal depencencies
 */
const { ZoloIconPicker, SortableControl, SortableItem, LinkControl } = window.zoloModule;


const { __ } = wp.i18n;
const { Button, PanelBody, TextControl, FormTokenField } = wp.components;
import { socialMediaInfo } from "./constants";

const Sortable = ({ socialMedia, setAttributes }) => {

    const SocialMediaOptions = socialMediaInfo.map((item) => {
        return {
            label: item.label,
            value: item.value,
        };
    }
    );
    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Profile', 'zolo-blocks')}</div>
                <Button
                    onClick={() => {
                        setAttributes({
                            socialMedia: [
                                ...socialMedia,
                                {
                                    id: socialMedia.length + 1,
                                    value: 'facebook',
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
            <SortableControl defaultItems={socialMedia} attributeName="socialMedia" setAttributes={setAttributes}>
                {socialMedia &&
                    socialMedia.map((profile, index) => {
                        // console.log(profile);
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            socialMedia: socialMedia.filter((profile, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={profile.id} id={profile.id}>
                                    <PanelBody title={profile.value || 'Title'} initialOpen={false}>
                                        <SelectControl
                                            label={__('Social Media', 'zolo-blocks')}
                                            value={profile.value}
                                            options={SocialMediaOptions}
                                            onChange={(value) => {
                                                const newItems = [...socialMedia];
                                                newItems[index].value = value;
                                                setAttributes({
                                                    socialMedia: newItems,
                                                });

                                                // console.log(newItems);
                                            }}
                                        />

                                        {/* <TextControl
                                            label={__('Title', 'zolo-blocks')}
                                            value={profile.text}
                                            onChange={(v) =>
                                                setAttributes({
                                                    socialMedia: socialMedia.map((profile, i) => {
                                                        if (index === i) {
                                                            profile.text = v;
                                                        }
                                                        return profile;
                                                    }),
                                                })
                                            }
                                        /> */}
                                        <LinkControl
                                            label={__('Link', 'zolo-blocks')}
                                            value={profile.link}
                                            onChange={(value) => {
                                                const newItems = [...socialMedia];
                                                newItems[index].link = value;
                                                setAttributes({
                                                    socialMedia: newItems,
                                                });
                                            }}
                                        />

                                        <FormTokenField
                                            label="Has Tags"
                                            value={profile.tags}
                                           onChange={(value) => {
                                                const newItems = [...socialMedia];
                                                newItems[index].tags = value;
                                                setAttributes({
                                                    socialMedia: newItems,
                                                });
                                            }
                                        }
                                        />
                                    </PanelBody>
                                </SortableItem>
                            </div>
                        );
                    })}
            </SortableControl>
            {/* <SortableControl defaultItems={socialProfiles} attributeName="socialProfiles" setAttributes={setAttributes}>
                {socialProfiles &&
                    socialProfiles.map((profile, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            socialProfiles: socialProfiles.filter((profile, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={profile.id} id={profile.id}>
                                    <PanelBody title={profile.text || 'Title'} initialOpen={false}>
                                        <TextControl
                                            label={__('Title', 'zolo-blocks')}
                                            value={profile.text}
                                            onChange={(v) =>
                                                setAttributes({
                                                    socialProfiles: socialProfiles.map((profile, i) => {
                                                        if (index === i) {
                                                            profile.text = v;
                                                        }
                                                        return profile;
                                                    }),
                                                })
                                            }
                                        />
                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zolo-blocks')}
                                            value={profile.icon}
                                            onChange={(value) => {
                                                const newItems = [...socialProfiles];
                                                newItems[index].icon = value;
                                                setAttributes({
                                                    socialProfiles: newItems,
                                                });
                                            }}
                                        />

                                        <LinkControl
                                            label={__('Link', 'zolo-blocks')}
                                            value={profile.link}
                                            onChange={(value) => {
                                                const newItems = [...socialProfiles];
                                                newItems[index].link = value;
                                                setAttributes({
                                                    socialProfiles: newItems,
                                                });
                                            }}
                                        />

                                        <FormTokenField
                                            label="Has Tags"
                                            value={profile.tags}
                                           onChange={(value) => {
                                                const newItems = [...socialProfiles];
                                                newItems[index].tags = value;
                                                setAttributes({
                                                    socialProfiles: newItems,
                                                });
                                            }
                                        }
                                        />
                                    </PanelBody>
                                </SortableItem>
                            </div>
                        );
                    })}
            </SortableControl> */}
        </div>
    );
};

export default Sortable;
