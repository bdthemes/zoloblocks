/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const {
        preview,
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
        showSocialProfiles,
        socialProfiles,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.profileCard} alt={__('Profile Card Preview', 'zolo-blocks')} />;
    }

    const deepCloneStatusItems = cloneDeep(statusItems);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {photo && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        photo: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={photo && photo.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zolo-blocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>

            <div {...blockProps}>
                <div className="zb-profile-item">
                    <div className="zb-profile-header-content">
                        {showBadge && (
                            <div className="zb-profile-badge">
                                <span>{badgeText}</span>
                            </div>
                        )}
                    </div>
                    <div className="zb-profile-bottom-content">
                        <div className="zb-profile-meta-wrap">
                            {showPhoto && (
                                <div className="zb-profile-image">
                                    {photo ? (
                                        <img src={photo.url} alt={photo.alt || 'profile card'} />
                                    ) : (
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    photo: media,
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            value={photo && photo.id}
                                            render={({ open }) => (
                                                <Button className="components-button button button-large" onClick={open}>
                                                    {__('Upload Photo', 'zolo-blocks')}
                                                </Button>
                                            )}
                                        />
                                    )}
                                </div>
                            )}
                            <div className="zb-profile-info">
                                {showName && (
                                    <div className="zb-profile-name">
                                        <RichText
                                            tagName="span"
                                            value={name}
                                            onChange={(content) => setAttributes({ name: content })}
                                            placeholder={__('Name', 'zolo-blocks')}
                                        />
                                    </div>
                                )}
                                {showUsername && (
                                    <div className="zb-profile-username">
                                        <RichText
                                            tagName="span"
                                            value={username}
                                            onChange={(content) =>
                                                setAttributes({
                                                    username: content,
                                                })
                                            }
                                            placeholder={__('Username', 'zolo-blocks')}
                                        />
                                    </div>
                                )}
                                {showEmail && (
                                    <div className="zb-profile-email">
                                        <RichText
                                            tagName="span"
                                            value={email}
                                            onChange={(content) =>
                                                setAttributes({
                                                    email: content,
                                                })
                                            }
                                            placeholder={__('Email', 'zolo-blocks')}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {showBio && (
                            <div className="zb-profile-card-bio">
                                <RichText
                                    value={bio}
                                    onChange={(content) => setAttributes({ bio: content })}
                                    placeholder={__('Bio', 'zolo-blocks')}
                                />
                            </div>
                        )}
                        {deepCloneStatusItems && (
                            <div className="zb-profile-status">
                                {deepCloneStatusItems &&
                                    deepCloneStatusItems.length > 0 &&
                                    deepCloneStatusItems.map((item, index) => {
                                        return (
                                            <div className="zb-profile-status-item" key={index}>
                                                <RichText
                                                    tagName="span"
                                                    className="zb-profile-status-count"
                                                    value={item && item.number}
                                                    onChange={(content) => {
                                                        let newStatusItems = [...deepCloneStatusItems];
                                                        newStatusItems[index].number = content;
                                                        setAttributes({
                                                            statusItems: newStatusItems,
                                                        });
                                                    }}
                                                    placeholder={__('Number', 'zolo-blocks')}
                                                    allowedFormats={['core/bold', 'core/italic']}
                                                />
                                                <RichText
                                                    tagName="span"
                                                    className="zb-profile-status-text"
                                                    value={item && item.label}
                                                    onChange={(content) => {
                                                        let newStatusItems = [...deepCloneStatusItems];
                                                        newStatusItems[index].label = content;
                                                        setAttributes({
                                                            statusItems: newStatusItems,
                                                        });
                                                    }}
                                                    placeholder={__('Label', 'zolo-blocks')}
                                                    allowedFormats={['core/bold', 'core/italic']}
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                        )}

                        <div className="zb-profile-socail-and-fllow">
                            {showFollowButton && (
                                <RichText
                                    tagName="span"
                                    className="zb-profile-fllow-btn"
                                    value={followButtonText}
                                    onChange={(content) =>
                                        setAttributes({
                                            followButtonText: content,
                                        })
                                    }
                                    placeholder={__('Follow', 'zolo-blocks')}
                                />
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
                                                >
                                                    <DisplayZoloIcon icon={profile.icon} />
                                                </a>
                                            );
                                        })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
