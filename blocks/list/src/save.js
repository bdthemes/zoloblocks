/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, preset, listProfiles, headingText, description, zoloId, titleToggle, DscToggle } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(preset, uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-list-wrap">
                {titleToggle && <div className="list-heading">{headingText}</div>}
                {DscToggle && <div className="descriptipn">{description}</div>}
                <div className="zolo-list">
                    {listProfiles &&
                        listProfiles.map((profile, index) => {
                            const iconName = profile && profile.text && profile.text.toLowerCase();
                            return (
                                <a
                                    href={profile.link && profile.link.url}
                                    key={index}
                                    target={profile.link && profile.link.openInNewTab && '_blank'}
                                    rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                                    className={`zolo-list-item zolo-`}
                                >
                                    <div className="zolo-list-icon">
                                        <DisplayZoloIcon icon={profile.icon} />
                                    </div>
                                    <div className="zolo-list-content">
                                        <span className="zolo-list-title">{profile.text}</span>
                                    </div>
                                </a>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Save;
