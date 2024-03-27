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
                        <div className={`zolo-biz-hours-item zolo-single-business-item-${index}`} key={index}>
                            {profile.name && <span className="zolo-biz-day">{profile.name}</span>}
                            <div className="zolo-biz-time-wrap">
                                {profile.startDate && <span className="zolo-biz-time">{profile.startDate}</span>}
                                {profile.startDate && profile.endDate && <span className="zolo-biz-time-separator">-</span>}
                                {profile.endDate && <span className="zolo-biz-time">{profile.endDate}</span>}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Save;
