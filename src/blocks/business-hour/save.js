/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
import { useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, zoloId, preset, businessList } = attributes;
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, preset, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            {businessList &&
                businessList.map((profile) => {
                    const uniqueKey = profile.id || profile.day || `business-${Math.random().toString(36).slice(2)}`;
                    return (
                        <div
                            className={
                                profile.toggleworkday
                                    ? 'zolo-biz-hours-item zolo-current-date'
                                    : 'zolo-biz-hours-item-closed  zolo-hour-closed'
                            }
                            key={uniqueKey}
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
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
