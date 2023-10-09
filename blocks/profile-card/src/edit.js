/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
    softMinifyCssStrings,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBoxShadowStyles,
    DisplayIcon,
    generateNormalBGControlStyles,
    classArrayToStr,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    HEADER_AREA_BORDER_RADIUS,
    HEADER_AREA_PADDING,
    HEADER_BADGE_BORDER,
    HEADER_AREA_BG,
    BADGE_PADDING,
    BADGE_BG,
    BADGE_BORDER_RADIUS,
    CONTENT_BORDER,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BG,
    CONTENT_BORDER_RADIUS,
    PHOTO_VOFFSET,
    PHOTO_SIZE,
    PHOTO_BORDER,
    PHOTO_BORDER_RADIUS,
    NAME_MARGIN,
    USERNAME_MARGIN,
    EMAIL_MARGIN,
    BIO_MARGIN,
    STATUS_GAP,
    STATUS_MARGIN,
    FBTN_BG,
    FBTN_BOX_SHADOW,
    FBTN_HOVER_BOX_SHADOW,
    FBTN_BORDER,
    FBTN_HOVER_BG,
    FBTN_BORDER_RADIUS,
    FBTN_MARGIN,
    FBTN_PADDING,
    ICONS_BG,
    ICONS_HOVER_BG,
    ICONS_BORDER,
    ICONS_BORDER_RADIUS,
    ICONS_PADDING,
    ICONS_MARGIN,
    ICONS_SIZE,
    ICONS_SPACING,
} from './constants';

import {
    BADGE_TYPO,
    BIO_TYPO,
    BTN_TYPO,
    EMAIL_TYPO,
    LABEL_TYPO,
    NUMBER_TYPO,
    PROFILE_NAME,
    PROFILE_USERNAME,
} from './constants/typoPrefixConstants';

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        parentClasses,
        preset,
        zoloStyles,
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
        badgeColor,
        nameColor,
        usernameColor,
        emailColor,
        bioColor,
        numberColor,
        labelColor,
        btnColor,
        btnHoverColor,
        btnHoverBorderColor,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });

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
                        <ToolbarGroup>
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        photo: null,
                                    });
                                }}
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
                                    tagName="p"
                                    value={bio}
                                    onChange={(content) => setAttributes({ bio: content })}
                                    placeholder={__('Bio', 'zolo-blocks')}
                                />
                            </div>
                        )}
                        {showStatus && (
                            <div className="zb-profile-status">
                                {statusItems &&
                                    statusItems.length > 0 &&
                                    statusItems.map((item, index) => {
                                        return (
                                            <div className="zb-profile-status-item" key={index}>
                                                <RichText
                                                    tagName="span"
                                                    className="zb-profile-status-count"
                                                    value={item && item.number}
                                                    onChange={(content) => {
                                                        let newStatusItems = [...statusItems];
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
                                                        let newStatusItems = [...statusItems];
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
                                                    <DisplayIcon icon={profile.icon} />
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
