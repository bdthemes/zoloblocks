// /**
//  * WordPress dependencies
//  */
import { __ } from '@wordpress/i18n';
import { Button, PanelBody, TextControl } from '@wordpress/components';

/**
 * Internal depencencies
 */
const { IconPicker, LinkControl, SortableItem, SortableControl } = window.zoloModule;

const Sortable = ({ socialProfiles, setAttributes }) => {
    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add a Profile', 'zolo-blocks')}</div>
                <Button
                    onClick={() =>
                        setAttributes({
                            socialProfiles: [
                                ...socialProfiles,
                                {
                                    id: socialProfiles.length + 1,
                                    title: 'Facebook',
                                    icon: 'fab fa-facebook-f',
                                    link: {
                                        url: '#',
                                        openInNewTab: false,
                                    },
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
            <SortableControl defaultItems={socialProfiles} attributeName="socialProfiles" setAttributes={setAttributes}>
                {socialProfiles &&
                    socialProfiles.map((profile, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        const newItems = [...socialProfiles];
                                        newItems.splice(index, 1);
                                        setAttributes({
                                            socialProfiles: newItems,
                                        });
                                    }}
                                />

                                <SortableItem key={profile.id} id={profile.id}>
                                    <PanelBody title={profile.title || 'Title'} initialOpen={false}>
                                        <TextControl
                                            label={__('Title', 'zolo-blocks')}
                                            value={profile.title}
                                            onChange={(value) => {
                                                const newItems = [...socialProfiles];
                                                newItems[index].title = value;
                                                setAttributes({
                                                    socialProfiles: newItems,
                                                });
                                            }}
                                        />
                                        <IconPicker
                                            value={profile.icon}
                                            onChange={(value) => {
                                                const newItems = [...socialProfiles];
                                                newItems[index].icon = value;
                                                setAttributes({
                                                    socialProfiles: newItems,
                                                });
                                            }}
                                            showHeading={true}
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
