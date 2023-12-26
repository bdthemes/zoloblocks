import { SelectControl } from "@wordpress/components";

/**
 * Internal depencencies
 */
const { ZoloIconPicker, SortableControl, SortableItem, LinkControl } = window.zoloModule;


const { __ } = wp.i18n;
const { Button, PanelBody, TextControl, FormTokenField } = wp.components;
import { socialMediaInfo } from "./constants";

// uppercase first letter of string
const Sortable = ({ socialMedia, setAttributes }) => {
    const SocialMediaOptions = socialMediaInfo.map((item) => {
        return {
            label: item.label,
            value: item.value,
        };
    }
    );

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });
    }
    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Media', 'zolo-blocks')}</div>
                <Button
                    onClick={() => {
                        setAttributes({
                            socialMedia: [
                                ...socialMedia,
                                {
                                    id: socialMedia.length + 1,
                                    value: 'facebook',
                                    customLabel: '',
                                    link: {
                                        url: 'https://bdthemes.com',
                                        openInNewTab: false,
                                    },
                                    tags: [],

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
                                    <PanelBody title={capitalizeWords(profile.value) || 'Title'} initialOpen={false}>
                                        <SelectControl
                                            label={__('Select Media', 'zolo-blocks')}
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
                                        <TextControl
                                            label={__('Custom Label', 'zolo-blocks')}
                                            value={profile.customLabel}
                                            onChange={(v) =>
                                                setAttributes({
                                                    socialMedia: socialMedia.map((profile, i) => {
                                                        if (index === i) {
                                                            profile.customLabel = v;
                                                        }
                                                        return profile;
                                                    }),
                                                })
                                            }
                                        />
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
