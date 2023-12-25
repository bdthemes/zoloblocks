/**
 * Internal depencencies
 */
const { DisplayZoloIcon } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, preset, socialProfiles, socialColor, socialText, layout } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`${preset} ${uniqueId} ${layout}`),
            })}
        >
            {socialProfiles &&
                socialProfiles.map((profile, index) => {
                    let socialName = Object.keys(profile.icon)[0];
                    const iconName = profile && profile.text && profile.text.toLowerCase();
                    const tags = profile.tags && profile.tags.join(',');
                    return (
                        <div
                            key={index}
                            data-hashtags={tags}
                            type='button'
                            data-sharer={profile.text.toLowerCase()}
                            data-url={profile.link && profile.link.url}
                            data-title={profile.text}
                            data-blank={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                            className={`zolo-social-item zolo-${socialName} ${socialColor} ${iconName}`}
                        >
                            {socialText !== 'none' && (
                                <span className="zolo-social-icon">
                                    <DisplayZoloIcon icon={profile.icon} />
                                </span>
                            )}
                            {socialText !== 'iconOnly' && <span className="zolo-social-text">{profile.text}</span>}
                        </div>
                    );
                })}
        </div>
    );
};

export default Save;
