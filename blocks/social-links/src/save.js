/**
 * Internal depencencies
 */
const { DisplayZoloIcon } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, preset, socialProfiles, socialColor, socialText, layout, zoloId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`${preset} ${uniqueId} ${layout}`),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {socialProfiles &&
                socialProfiles.map((profile, index) => {
                    let socialName = Object.keys(profile.icon)[0];
                    const iconName = profile && profile.text && profile.text.toLowerCase();
                    return (
                        <a
                            href={profile.link && profile.link.url}
                            key={index}
                            target={profile.link && profile.link.openInNewTab && '_blank'}
                            rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                            className={`zolo-social-item zolo-${socialName} ${socialColor} ${iconName}`}
                            title={profile.text}
                        >
                            {socialText !== 'none' && (
                                <span className="zolo-social-icon">
                                    <DisplayZoloIcon icon={profile.icon} />
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
