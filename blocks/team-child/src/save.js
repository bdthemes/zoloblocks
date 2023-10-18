import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayIcon, classArrayToStr } = window.zoloModule;
import classNames from 'classnames';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        parentClasses,
        memberPhoto,
        memberName,
        addDetailPageLink,
        showDetailPageIcon,
        memberDetailPageLink,
        showDesignation,
        memberDesignation,
        showShortBio,
        memberShortBio,
        showSocialProfiles,
        socialProfiles,
        detailIcon,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classNames(uniqueId + ` ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
            })}
        >
            <div className="zolo-item">
                <div className="zolo-image-wrap">
                    {memberPhoto && <img src={memberPhoto.url} alt={memberPhoto.alt || memberName} />}
                    <div className="zolo-hover-content">
                        {addDetailPageLink ? (
                            <a
                                href={memberDetailPageLink && memberDetailPageLink.url}
                                rel={memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferrer noopener'}
                                target={memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank'}
                                className="zolo-name"
                            >
                                <RichText.Content value={memberName} />
                            </a>
                        ) : (
                            <RichText.Content tagName="div" value={memberName} className="zolo-name" />
                        )}

                        {showDesignation && <RichText.Content tagName="div" value={memberDesignation} className="zolo-designation" />}
                        {showSocialProfiles && (
                            <div className="zolo-social-share">
                                {socialProfiles &&
                                    socialProfiles.map((profile, index) => {
                                        return (
                                            <a
                                                href={profile.link && profile.link.url}
                                                key={index}
                                                rel={profile.link && profile.link.openInNewTab && 'noreferer noopener'}
                                                target={profile.link && profile.link.openInNewTab && '_blank'}
                                            >
                                                <DisplayIcon icon={profile.icon} />
                                            </a>
                                        );
                                    })}
                            </div>
                        )}
                        {addDetailPageLink && showDetailPageIcon && (
                            <div className="zolo-link-btn">
                                <a
                                    href={memberDetailPageLink && memberDetailPageLink.url}
                                    rel={memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer noopener'}
                                    target={memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank'}
                                >
                                    <DisplayIcon icon={detailIcon} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="zolo-info-wrap">
                    <div className="zolo-content">
                        {addDetailPageLink ? (
                            <a
                                href={memberDetailPageLink && memberDetailPageLink.url}
                                rel={memberDetailPageLink && memberDetailPageLink.opensInNewTab && 'noreferrer noopener'}
                                target={memberDetailPageLink && memberDetailPageLink.opensInNewTab && '_blank'}
                                className="zolo-name"
                            >
                                <RichText.Content value={memberName} />
                            </a>
                        ) : (
                            <RichText.Content value={memberName} className="zolo-name" />
                        )}
                        {showDesignation && (
                            <div className="zolo-designation">
                                <RichText.Content value={memberDesignation} />
                            </div>
                        )}
                        {showShortBio && (
                            <div className="zolo-desc">
                                <RichText.Content value={memberShortBio} />
                            </div>
                        )}
                    </div>
                    {addDetailPageLink && showDetailPageIcon && (
                        <div className="zolo-link-btn">
                            <a
                                href={memberDetailPageLink && memberDetailPageLink.url}
                                rel={memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer noopener'}
                                target={memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank'}
                            >
                                <DisplayIcon icon={detailIcon} />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Save;
