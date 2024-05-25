import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;
import classNames from 'classnames';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        parentClasses,
        memberPhoto,
        memberName,
        addDetailPageLink,
        memberDetailPageLink,
        showDesignation,
        memberDesignation,
        showShortBio,
        memberShortBio,
        showSocialProfiles,
        socialProfiles,
        detailIcon,
        zoloId,
        imageRes,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classNames(uniqueId + ` ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-item">
                <div className="zolo-image-wrap">
                    {memberPhoto && (
                        <img
                            src={memberPhoto.sizes && memberPhoto.sizes[imageRes] ? memberPhoto.sizes[imageRes].url : memberPhoto.url}
                            alt={memberPhoto.alt || memberName}
                            className={`wp-image-${memberPhoto.id}`}
                        />
                    )}
                </div>
                <div className="zolo-info-wrap">
                    <div className="zolo-content">

                        {preset !== 'style-4' && (
                            <div className="zolo-name">
                                <RichText.Content value={memberName} />
                            </div>
                        )}
                        {showDesignation && preset !== 'style-4' &&(
                            <div className="zolo-designation">
                                <RichText.Content value={memberDesignation} />
                            </div>
                        )}

                        {preset === 'style-4' && (
                            <div className="zolo-name-desi-wrap">
                                <div className="zolo-name">
                                    <RichText.Content value={memberName} />
                                </div>
                                <span className='zolo-nameDg-separator'></span>
                                {showDesignation && (
                                    <div className="zolo-designation">
                                        <RichText.Content value={memberDesignation} />
                                    </div>
                                )}
                            </div>
                        )}

                        {showShortBio && (
                            <div className="zolo-desc">
                                <RichText.Content value={memberShortBio} />
                            </div>
                        )}
                    </div>

                    <div className="zolo-social-and-link-wrap">
                        {showSocialProfiles && (
                            <div className="zolo-social-share">
                                {socialProfiles &&
                                    socialProfiles.map((profile, index) => {
                                        return (
                                            <a className='zolo-social-link'
                                                href={profile.link && profile.link.url}
                                                key={index}
                                                rel={profile.link && profile.link.openInNewTab && 'noreferer noopener'}
                                                target={profile.link && profile.link.openInNewTab && '_blank'}
                                                title={profile.title}
                                            >
                                                <DisplayZoloIcon icon={profile.icon} />
                                            </a>
                                        );
                                    })}
                            </div>
                        )}

                        {addDetailPageLink && preset !== 'style-4' &&(
                            <div className="zolo-link-btn">
                                <a className='zolo-external-link'
                                    href={memberDetailPageLink && memberDetailPageLink.url}
                                    rel={memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer noopener'}
                                    target={memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank'}
                                >
                                    <DisplayZoloIcon icon={detailIcon} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
