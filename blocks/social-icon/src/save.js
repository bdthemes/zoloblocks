/**
 * Internal depencencies
 */
const { DisplayIcon } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, preset, socialProfiles, socialColor, socialText } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`${preset} ${uniqueId}`),
            })}
        >
            {socialProfiles &&
                socialProfiles.map((profile, index) => {
                    let socialName = Object.keys(profile.icon)[0];
                    const iconName = profile && profile.icon.slice(7, profile.icon.length);
                    return (
                        <a
                            href={profile.link && profile.link.url}
                            key={index}
                            target={profile.link && profile.link.openInNewTab && '_blank'}
                            rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                            className={`zolo-social-item zolo-${socialName} ${socialColor} ${iconName}`}
                        >
                            {socialText !== 'none' && (
                                <span className="zolo-social-icon">
                                    <DisplayIcon icon={profile.icon} />
                                </span>
                            )}
                            {socialText !== 'iconOnly' && <span className="zolo-social-text">{profile.text}</span>}
                        </a>
                    );
                })}
        </div>
    );
};

export default Save;
