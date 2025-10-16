/**
 * Internal dependencies
 */
const { DisplayZoloIcon, classArrayToStr, sanitizeText, sanitizeUrl } = window.zoloModule;

import classnames from 'classnames';
import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        preset,
        contentLayout,
        listProfiles,
        zoloId,
        iconToggle,
        DscToggle,
        titleToggle,
        linkHoverIcon,
        globalIcon,
        isLinkable = false,
        showBadge,
    } = attributes;

    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    const ContainerTag = isLinkable ? 'a' : 'div';

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    preset,
                    preset !== 'zolo-list-style-1' ? contentLayout : '',
                    uniqueId,
                    classArrayToStr(parentClasses)
                ),
            })}
            {...(zoloId && { id: zoloId })}
        >
            {renderHookBefore && renderHookBefore}
            {listProfiles &&
                listProfiles.map((profile, index) => {
                    const commonProps = {
                        className: classnames('zolo-list-item', preset === 'zolo-list-style-1' ? 'zolo-list-title' : ''),
                    };

                    if (isLinkable) {
                        commonProps.href = sanitizeUrl(profile.link?.url);
                        commonProps.target = profile.link?.openInNewTab ? '_blank' : undefined;
                        commonProps.rel = profile.link?.openInNewTab ? 'noopener noreferrer' : undefined;
                    }

                    return (
                        <ContainerTag key={index} {...commonProps}>
                            {preset === 'zolo-list-style-1' ? (
                                <>
                                    <RawHTML>{profile.text}</RawHTML>
                                    {showBadge && profile.badge && (
                                        <span className="zolo-list-badge" style={{ color: profile.badgeColor, background: profile.badgeBgColor }}>{profile.badge}</span>
                                    )}
                                </>
                            ) : (
                                <>
                                    {preset === 'zolo-list-style-4' ? (
                                        <div className="zolo-list-icon-and-content-wrap">
                                            {iconToggle && (
                                                <div className="zolo-list-icon">
                                                    {profile.icon ? (
                                                        <DisplayZoloIcon icon={profile.icon} />
                                                    ) : (
                                                        <DisplayZoloIcon icon={globalIcon} />
                                                    )}
                                                </div>
                                            )}
                                            <div className="zolo-list-content">
                                                {titleToggle && (
                                                    <div className="zolo-list-title">
                                                        <RawHTML>{sanitizeText(profile.text)}</RawHTML>
                                                    </div>
                                                )}
                                                {DscToggle && contentLayout !== 'horizontal' && (
                                                    <span className="zolo-list-desc">
                                                        <RawHTML>{sanitizeText(profile.desc)}</RawHTML>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {iconToggle && contentLayout !== 'horizontal' && (
                                                <div className="zolo-list-icon">
                                                    {profile.icon ? (
                                                        <DisplayZoloIcon icon={profile.icon} />
                                                    ) : (
                                                        <DisplayZoloIcon icon={globalIcon} />
                                                    )}
                                                </div>
                                            )}

                                            {contentLayout === 'horizontal' && (
                                                <div className="zolo-list-icon-title-wrap">
                                                    {iconToggle && (
                                                        <div className="zolo-list-icon">
                                                            {profile.icon ? (
                                                                <DisplayZoloIcon icon={profile.icon} />
                                                            ) : (
                                                                <DisplayZoloIcon icon={globalIcon} />
                                                            )}
                                                        </div>
                                                    )}
                                                    {titleToggle && (
                                                        <div className="zolo-list-title">
                                                            <RawHTML>{sanitizeText(profile.text)}</RawHTML>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <div className="zolo-list-content">
                                                {titleToggle && contentLayout !== 'horizontal' && (
                                                    <div className="zolo-list-title">
                                                        <RawHTML>{sanitizeText(profile.text)}</RawHTML>
                                                    </div>
                                                )}
                                                {DscToggle && (
                                                    <p className="zolo-list-desc">
                                                        <RawHTML>{sanitizeText(profile.desc)}</RawHTML>
                                                    </p>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}

                            {preset === 'zolo-list-style-4' && (
                                <>
                                    {contentLayout !== 'horizontal' ? (
                                        <div className="zolo-list-hover-icon">
                                            <DisplayZoloIcon icon={linkHoverIcon} />
                                        </div>
                                    ) : (
                                        <div className="zolo-list-desc-hover-icon">
                                            {DscToggle && (
                                                <span className="zolo-list-desc">
                                                    <RawHTML>{sanitizeText(profile.desc)}</RawHTML>
                                                </span>
                                            )}
                                            <div className="zolo-list-hover-icon">
                                                <DisplayZoloIcon icon={linkHoverIcon} />
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </ContainerTag>
                    );
                })}
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
