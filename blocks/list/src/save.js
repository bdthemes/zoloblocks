/**
 * Internal depencencies
 */
const { DisplayZoloIcon } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, preset, socialProfiles, socialchild, socialColor, socialText, layout, zoloId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(` ${preset}  ${uniqueId} ${layout}`),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {/* {socialProfiles &&
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
                })} */}
            <div className={`zolo-list-wrap ${preset}`}>
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
                                className={`zolo-list-item zolo-${socialName} ${socialColor} ${iconName}`}
                            >
                                {socialText !== 'none' && (
                                    <div className="zolo-list-icon">
                                        <DisplayZoloIcon icon={profile.icon} />
                                    </div>
                                )}
                                {socialText !== 'iconOnly' && (
                                    <>
                                        <div className="zolo-list-content">
                                            <span className="zolo-list-title">{profile.text}</span>
                                            {socialchild &&
                                                socialchild.map((child) => {
                                                    return (
                                                        <>
                                                            <div className="zolo-list-content">
                                                                <p className="zolo-list-desc ">{child.content}</p>
                                                                <p className="zolo-list-desc ">{child.description}</p>
                                                            </div>
                                                        </>
                                                    );
                                                })}
                                        </div>
                                    </>
                                )}

                                <div className="zolo-list-hover-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                        />
                                    </svg>
                                </div>
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

export default Save;
