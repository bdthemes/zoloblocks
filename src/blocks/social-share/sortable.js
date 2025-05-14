/**
 * Internal depencencies
 */
const {
    SortableControl,
    SortableItem,
    LinkControl,
    ZoloSelectControl,
    ZoloButton,
    ZoloCorePanelBody,
    ZoloTextControl,
    ZoloFormTokenField,
} = window.zoloModule;

import { __ } from '@wordpress/i18n';
import { socialMediaInfo } from './constants';

// uppercase first letter of string
const Sortable = ({ attributes, socialMedia, setAttributes }) => {
    const SocialMediaOptions = socialMediaInfo.map((item) => {
        return {
            label: item.label,
            value: item.value,
        };
    });

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });
    }
    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Media', 'zoloblocks')}</div>
                <ZoloButton
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
                </ZoloButton>
            </div>
            <SortableControl defaultItems={socialMedia} attributeName="socialMedia" setAttributes={setAttributes}>
                {socialMedia &&
                    socialMedia.map((profile, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <ZoloButton
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            socialMedia: socialMedia.filter((profile, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={profile.id} id={profile.id}>
                                    <ZoloCorePanelBody title={capitalizeWords(profile.value) || 'Title'} initialOpen={false}>
                                        <ZoloSelectControl
                                            label={__('Select Media', 'zoloblocks')}
                                            value={profile.value}
                                            options={SocialMediaOptions}
                                            onChange={(value) => {
                                                const newItems = [...socialMedia];
                                                newItems[index].value = value;
                                                setAttributes({
                                                    socialMedia: newItems,
                                                });
                                            }}
                                        />
                                        <ZoloTextControl
                                            label={__('Custom', 'zoloblocks')}
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
                                        {!attributes?.dynamicLink && (
                                            <LinkControl
                                                label={__('Link', 'zoloblocks')}
                                                value={profile.link}
                                                onChange={(value) => {
                                                    const newItems = [...socialMedia];
                                                    newItems[index].link = value;
                                                    setAttributes({
                                                        socialMedia: newItems,
                                                    });
                                                }}
                                            />
                                        )}

                                        <ZoloFormTokenField
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
                                    </ZoloCorePanelBody>
                                </SortableItem>
                            </div>
                        );
                    })}
            </SortableControl>
        </div>
    );
};

export default Sortable;
