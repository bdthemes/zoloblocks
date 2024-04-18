/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId, preset, businessList } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, preset, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
             {businessList &&
                    businessList.map((profile, index) => {
                        return (
                            <div
                                className={
                                    profile.toggleworkday
                                        ? 'zolo-biz-hours-item zolo-current-date'
                                        : 'zolo-biz-hours-item-closed  zolo-hour-closed'
                                }
                                key={index}
                            >
                                {profile.toggleworkday
                                    ? profile.name && <span className="zolo-biz-day">{profile.name}</span>
                                    : profile.name && <span className="zolo-biz-day-closed">{profile.name}</span>}
                                <div className="zolo-biz-time-wrap">
                                    {profile.toggleworkday ? (
                                        <>
                                            {profile.startDate && <span className="zolo-biz-time">{profile.startDate}</span>}
                                            {profile.startDate && profile.endDate && <span className="zolo-biz-time-separator">-</span>}
                                            {profile.endDate && <span className="zolo-biz-time">{profile.endDate}</span>}
                                        </>
                                    ) : (
                                        <span className="zolo-business-closed-time">{profile.closedDay}</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
        </div>
    );
};

export default Save;
