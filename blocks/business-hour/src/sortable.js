/**
 * Internal depencencies
 */
const { SortableControl, SortableItem, ColorControl } = window.zoloModule;

const { __ } = wp.i18n;
const { Button, PanelBody, TextControl, ToggleControl, TextareaControl } = wp.components;
import { cloneDeep } from 'lodash';

const Sortable = ({ businessList, setAttributes }) => {
    const deepCloneProfiles = cloneDeep(businessList);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add Business Day', 'zolo-blocks')}</div>
                <Button
                    onClick={() =>
                        setAttributes({
                            businessList: [
                                ...businessList,
                                {
                                    id: businessList.length + 1,
                                    name: 'Saturday',
                                    startDate: '10:00 AM',
                                    endDate: ' 7:00 PM',
                                    toggleworkday: true,
                                    closedDay: 'Closed',
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
            <SortableControl defaultItems={businessList} attributeName="businessList" setAttributes={setAttributes}>
                {deepCloneProfiles &&
                    deepCloneProfiles.map((profile, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            businessList: businessList.filter((profile, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={profile.id} id={profile.id}>
                                    <PanelBody title={profile.name || 'Day'} initialOpen={false}>
                                        <TextControl
                                            label={__('Day', 'zolo-blocks')}
                                            value={profile.name}
                                            onChange={(v) => {
                                                const newItems = [...deepCloneProfiles];
                                                newItems[index].name = v;
                                                setAttributes({
                                                    businessList: newItems,
                                                });
                                            }}
                                        />

                                        <ToggleControl
                                            label={__('Show working Day', 'zolo-block')}
                                            checked={profile.toggleworkday}
                                            onChange={() => {
                                                const newProfile = { ...profile };
                                                newProfile.toggleworkday = !newProfile.toggleworkday;
                                                const newItems = [...deepCloneProfiles];
                                                newItems[index] = newProfile;
                                                setAttributes({
                                                    businessList: newItems,
                                                });
                                            }}
                                        />
                                        {profile.toggleworkday ? (
                                            <>
                                                <TextControl
                                                    label={__('Start Time', 'zolo-blocks')}
                                                    value={profile.startDate}
                                                    onChange={(v) => {
                                                        const newItems = [...deepCloneProfiles];
                                                        newItems[index].startDate = v;
                                                        setAttributes({ businessList: newItems });
                                                    }}
                                                />

                                                <TextControl
                                                    label={__('End Time', 'zolo-blocks')}
                                                    value={profile.endDate}
                                                    onChange={(v) => {
                                                        const newItems = [...deepCloneProfiles];
                                                        newItems[index].endDate = v;
                                                        setAttributes({ businessList: newItems });
                                                    }}
                                                />
                                            </>
                                        ) : (
                                            <TextControl
                                                label={__('Closed Day', 'zolo-blocks')}
                                                value={profile.closedDay}
                                                onChange={(v) => {
                                                    const newItems = [...deepCloneProfiles];
                                                    newItems[index].closedDay = v;
                                                    setAttributes({ businessList: newItems });
                                                }}
                                            />
                                        )}
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
