import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;
import classNames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        preset,
        showBadge,
        badgeText,
        showPhoto,
        photo,
        showName,
        name,
        showUsername,
        username,
        showEmail,
        email,
        showBio,
        bio,
        showStatus,
        statusItems,
        showFollowButton,
        followButtonText,
        followButtonLink,
        showSocialProfiles,
        socialProfiles,
        zoloId,
        imageRes,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classNames(uniqueId, `${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <div className="zb-profile-item">
                {preset !== 'style-1' && (
                    <div className="zb-profile-header-content">
                        {showBadge && (
                            <div className="zb-profile-badge">
                                <span>{badgeText}</span>
                            </div>
                        )}
                    </div>
                )}

                {showBadge && preset === 'style-1' && (
                    <div className="zb-profile-badge">
                        <span>{badgeText}</span>
                    </div>
                )}

                <div className="zb-profile-bottom-content">
                    <div className="zb-profile-meta-wrap">
                        {showPhoto && (
                            <div className="zb-profile-image">
                                {photo && (
                                    <img
                                        src={photo.sizes && photo.sizes[imageRes] ? photo.sizes[imageRes].url : photo.url}
                                        alt={photo.alt || 'profile card'}
                                        className={`wp-image-${photo.id}`}
                                        loading="lazy"
                                    />
                                )}
                            </div>
                        )}
                        <div className="zb-profile-info">
                            {showName && (
                                <div className="zb-profile-name">
                                    <RichText.Content value={name} />
                                </div>
                            )}
                            {showUsername && (
                                <div className="zb-profile-username">
                                    <RichText.Content value={username} />
                                </div>
                            )}
                            {showEmail && (
                                <div className="zb-profile-email">
                                    <RichText.Content value={email} />
                                </div>
                            )}
                        </div>
                    </div>

                    {preset !== 'style-1' && (
                        <>
                            {showBio && (
                                <div className="zb-profile-card-bio">
                                    <RichText.Content value={bio} />
                                </div>
                            )}
                            {showStatus && (
                                <div className="zb-profile-status">
                                    {statusItems &&
                                        statusItems.map((item) => {
                                            const uniqueKey = item.id || item.title || `status-${Math.random().toString(36).slice(2)}`;
                                            return (
                                                <div className="zolo-status-item" key={uniqueKey}>
                                                    {item.title && <span className="zolo-status-title">{item.title}</span>}
                                                    {item.value && <span className="zolo-status-value">{item.value}</span>}
                                                </div>
                                            );
                                        })}
                                </div>
                            )}

                            <div className="zb-profile-socail-and-fllow">
                                {showFollowButton && (
                                    <a
                                        className="zb-profile-fllow-btn"
                                        href={followButtonLink && followButtonLink.url && followButtonLink.url}
                                        target={followButtonLink && followButtonLink.openInNewTab ? '_blank' : undefined}
                                        rel={followButtonLink && followButtonLink.openInNewTab ? 'noopener noreferrer' : undefined}
                                        title={followButtonText}
                                    >
                                        {followButtonText}
                                    </a>
                                )}
                                {showSocialProfiles && (
                                    <div className="zb-profile-socail-share">
                                        {socialProfiles &&
                                            socialProfiles.map((profile) => {
                                                const uniqueKey =
                                                    profile.id ||
                                                    profile.platform ||
                                                    `profile-social-${Math.random().toString(36).slice(2)}`;
                                                return (
                                                    <a
                                                        href={profile.link && profile.link.url}
                                                        key={uniqueKey}
                                                        target={profile.link && profile.link.openInNewTab ? '_blank' : undefined}
                                                        rel={profile.link && profile.link.openInNewTab ? 'noopener noreferrer' : undefined}
                                                        className={`zolo-social-item zolo-${profile.platform}`}
                                                    >
                                                        <DisplayZoloIcon icon={profile.icon} />
                                                    </a>
                                                );
                                            })}
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {preset === 'style-1' && (
                        <>
                            <div className="zb-profile-inner-content">
                                {showStatus && (
                                    <div className="zb-profile-status">
                                        {statusItems &&
                                            statusItems.map((item) => {
                                                const uniqueKey = item.id || item.title || `status-${Math.random().toString(36).slice(2)}`;
                                                return (
                                                    <div className="zolo-status-item" key={uniqueKey}>
                                                        {item.title && <span className="zolo-status-title">{item.title}</span>}
                                                        {item.value && <span className="zolo-status-value">{item.value}</span>}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                )}
                                {showBio && (
                                    <div className="zb-profile-card-bio">
                                        <RichText.Content value={bio} />
                                    </div>
                                )}
                                <div className="zb-profile-socail-and-fllow">
                                    {showFollowButton && (
                                        <a
                                            className="zb-profile-fllow-btn"
                                            href={followButtonLink && followButtonLink.url && followButtonLink.url}
                                            target={followButtonLink && followButtonLink.openInNewTab ? '_blank' : undefined}
                                            rel={followButtonLink && followButtonLink.openInNewTab ? 'noopener noreferrer' : undefined}
                                            title={followButtonText}
                                        >
                                            {followButtonText}
                                        </a>
                                    )}
                                    {showSocialProfiles && (
                                        <div className="zb-profile-socail-share">
                                            {socialProfiles &&
                                                socialProfiles.map((profile) => {
                                                    const uniqueKey =
                                                        profile.id ||
                                                        profile.platform ||
                                                        `profile-social-${Math.random().toString(36).slice(2)}`;
                                                    return (
                                                        <a
                                                            href={profile.link && profile.link.url}
                                                            key={uniqueKey}
                                                            target={profile.link && profile.link.openInNewTab ? '_blank' : undefined}
                                                            rel={
                                                                profile.link && profile.link.openInNewTab
                                                                    ? 'noopener noreferrer'
                                                                    : undefined
                                                            }
                                                            className={`zolo-social-item zolo-${profile.platform}`}
                                                        >
                                                            <DisplayZoloIcon icon={profile.icon} />
                                                        </a>
                                                    );
                                                })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
