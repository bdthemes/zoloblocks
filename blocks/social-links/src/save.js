/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
import { useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, preset, socialProfiles, socialColor, socialText, layout, zoloId } = attributes;
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...useBlockProps.save({
                className: classnames(`${preset} ${uniqueId} ${layout}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
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

            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
