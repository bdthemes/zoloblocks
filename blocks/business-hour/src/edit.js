/**
 * WordPress dependencies
 */

import { useBlockProps, BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { preview, uniqueId, parentClasses, preset, businessList } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, preset, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return (
          <img
            src={zoloParams.blocksPreview.businessHour}
            alt={__("List Links Preview", "zolo-blocks")}
          />
        );
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls></BlockControls>
            <div {...blockProps}>
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
        </>
    );
}
