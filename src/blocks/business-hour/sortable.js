import { __ } from '@wordpress/i18n';
import { cloneDeep } from 'lodash';

/**
 * Internal depencencies
 */
const { SortableControl, SortableItem, ZoloButton, ZoloCorePanelBody, ZoloTextControl, ZoloToggleControl, ZoloCardDivider } =
    window.zoloModule;

const Sortable = ({ businessList, setAttributes }) => {
    const deepCloneProfiles = cloneDeep(businessList);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add Business Day', 'zoloblocks')}</div>
                <ZoloButton
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
                </ZoloButton>
            </div>
            <SortableControl defaultItems={businessList} attributeName="businessList" setAttributes={setAttributes}>
                {deepCloneProfiles &&
                    deepCloneProfiles.map((profile, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <ZoloButton
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            businessList: businessList.filter((profile, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={profile.id} id={profile.id}>
                                    <ZoloCorePanelBody title={profile.name || 'Day'} initialOpen={false}>
                                        <ZoloTextControl
                                            label={__('Day', 'zoloblocks')}
                                            value={profile.name}
                                            onChange={(v) => {
                                                const newItems = [...deepCloneProfiles];
                                                newItems[index].name = v;
                                                setAttributes({
                                                    businessList: newItems,
                                                });
                                            }}
                                        />
                                        <ZoloCardDivider />
                                        <ZoloToggleControl
                                            label={__('Working Day', 'zoloblocks')}
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
                                                <ZoloTextControl
                                                    label={__('Start Time', 'zoloblocks')}
                                                    value={profile.startDate}
                                                    onChange={(v) => {
                                                        const newItems = [...deepCloneProfiles];
                                                        newItems[index].startDate = v;
                                                        setAttributes({ businessList: newItems });
                                                    }}
                                                />

                                                <ZoloTextControl
                                                    label={__('End Time', 'zoloblocks')}
                                                    value={profile.endDate}
                                                    onChange={(v) => {
                                                        const newItems = [...deepCloneProfiles];
                                                        newItems[index].endDate = v;
                                                        setAttributes({ businessList: newItems });
                                                    }}
                                                />
                                            </>
                                        ) : (
                                            <ZoloTextControl
                                                label={__('Closed Day', 'zoloblocks')}
                                                value={profile.closedDay}
                                                onChange={(v) => {
                                                    const newItems = [...deepCloneProfiles];
                                                    newItems[index].closedDay = v;
                                                    setAttributes({ businessList: newItems });
                                                }}
                                            />
                                        )}
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
