/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, DynamicTag } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, preset, listProfiles, zoloId, DscToggle, linkHoverIcon } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(preset, uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {/* <div className="zolo-list-wrap"> */}
            {listProfiles &&
                listProfiles.map((profile, index) => {
                    return (
                        <a
                            href={profile.link && profile.link.url}
                            key={index}
                            target={profile.link && profile.link.openInNewTab && '_blank'}
                            rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                            className={`zolo-list-item ${preset == 'zolo-list-style-1' ? 'zolo-list-title' : ''}`}
                        >
                            {preset == 'zolo-list-style-1' && profile.text}
                            {preset !== 'zolo-list-style-1' && (
                                <div className="zolo-list-icon">
                                    <DisplayZoloIcon icon={profile.icon} />
                                </div>
                            )}
                            {preset !== 'zolo-list-style-1' && (
                                <div className="zolo-list-content">
                                    <div className="zolo-list-title">{profile.text}</div>
                                    {DscToggle && <span className="zolo-list-desc">{profile.desc}</span>}
                                </div>
                            )}
                            {preset == 'zolo-list-style-4' && (
                                <div class="zolo-list-hover-icon">
                                    <DisplayZoloIcon icon={linkHoverIcon} />
                                </div>
                            )}
                        </a>
                    );
                })}
            {/* </div> */}
        </div>
    );
};

export default Save;
