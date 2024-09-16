/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, preset, listProfiles, zoloId, iconToggle, DscToggle, titleToggle, linkHoverIcon, globalIcon } =
        attributes;
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...useBlockProps.save({
                className: classnames(preset, uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
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
                            {preset == 'zolo-list-style-1' && <RawHTML>{profile.text}</RawHTML>}
                            {preset == 'zolo-list-style-4' ? (
                                <div className="zolo-list-icon-and-content-wrap">
                                    {iconToggle && preset !== 'zolo-list-style-1' && (
                                        <div className="zolo-list-icon">
                                            {profile.icon ? <DisplayZoloIcon icon={profile.icon} /> : <DisplayZoloIcon icon={globalIcon} />}
                                        </div>
                                    )}
                                    {preset !== 'zolo-list-style-1' && (
                                        <div className="zolo-list-content">
                                            {titleToggle && (
                                                <div className="zolo-list-title">
                                                    <RawHTML>{profile.text}</RawHTML>
                                                </div>
                                            )}
                                            {DscToggle && (
                                                <span className="zolo-list-desc">
                                                    <RawHTML>{profile.desc}</RawHTML>
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    {iconToggle && preset !== 'zolo-list-style-1' && (
                                        <div className="zolo-list-icon">
                                            {profile.icon ? <DisplayZoloIcon icon={profile.icon} /> : <DisplayZoloIcon icon={globalIcon} />}
                                        </div>
                                    )}
                                    {preset !== 'zolo-list-style-1' && (
                                        <div className="zolo-list-content">
                                            {titleToggle && (
                                                <div className="zolo-list-title">
                                                    <RawHTML>{profile.text}</RawHTML>
                                                </div>
                                            )}
                                            {DscToggle && (
                                                <p className="zolo-list-desc">
                                                    <RawHTML>{profile.desc}</RawHTML>
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                            {preset == 'zolo-list-style-4' && (
                                <div class="zolo-list-hover-icon">
                                    <DisplayZoloIcon icon={linkHoverIcon} />
                                </div>
                            )}
                        </a>
                    );
                })}
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
