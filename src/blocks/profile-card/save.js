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
                                        statusItems.length > 0 &&
                                        statusItems.map((item, index) => {
                                            return (
                                                <div className="zb-profile-status-item" key={index}>
                                                    <RichText.Content
                                                        tagName="span"
                                                        className="zb-profile-status-count"
                                                        value={item && item.number}
                                                    />
                                                    <RichText.Content
                                                        tagName="span"
                                                        className="zb-profile-status-text"
                                                        value={item && item.label}
                                                    />
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
                                        target={followButtonLink && followButtonLink.openInNewTab && '_blank'}
                                        rel={followButtonLink && followButtonLink.openInNewTab && 'noopener noreferrer'}
                                        title={followButtonText}
                                    >
                                        {followButtonText}
                                    </a>
                                )}
                                {showSocialProfiles && (
                                    <div className="zb-profile-socail-share">
                                        {socialProfiles &&
                                            socialProfiles.map((profile, index) => {
                                                return (
                                                    <a
                                                        href={profile.link && profile.link.url}
                                                        key={index}
                                                        rel={profile.link.openInNewTab && 'noopener noreferer'}
                                                        target={profile.link.openInNewTab && '_blank'}
                                                        title={profile.title}
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
                                            statusItems.length > 0 &&
                                            statusItems.map((item, index) => {
                                                return (
                                                    <div className="zb-profile-status-item" key={index}>
                                                        <RichText.Content
                                                            tagName="span"
                                                            className="zb-profile-status-count"
                                                            value={item && item.number}
                                                        />
                                                        <RichText.Content
                                                            tagName="span"
                                                            className="zb-profile-status-text"
                                                            value={item && item.label}
                                                        />
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
                                            target={followButtonLink && followButtonLink.openInNewTab && '_blank'}
                                            rel={followButtonLink && followButtonLink.openInNewTab && 'noopener noreferrer'}
                                            title={followButtonText}
                                        >
                                            {followButtonText}
                                        </a>
                                    )}
                                    {showSocialProfiles && (
                                        <div className="zb-profile-socail-share">
                                            {socialProfiles &&
                                                socialProfiles.map((profile, index) => {
                                                    return (
                                                        <a
                                                            href={profile.link && profile.link.url}
                                                            key={index}
                                                            rel={profile.link.openInNewTab && 'noopener noreferer'}
                                                            target={profile.link.openInNewTab && '_blank'}
                                                            title={profile.title}
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
