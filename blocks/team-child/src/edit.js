/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { DisplayIcon, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style.js';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
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

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            preset: context['zolo/preset'],
            addDetailPageLink: context['zolo/addDetailPageLink'],
            showDetailPageIcon: context['zolo/showDetailPageIcon'],
            showDesignation: context['zolo/showDesignation'],
            showShortBio: context['zolo/showShortBio'],
            showSocialProfiles: context['zolo/showSocialProfiles'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {memberPhoto && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        memberPhoto: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={memberPhoto && memberPhoto.id}
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
                                        memberPhoto: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>

            <div {...blockProps}>
                <div className="zolo-item">
                    <div className="zolo-image-wrap">
                        {memberPhoto ? (
                            <img src={memberPhoto.url} alt={memberPhoto.alt || memberName} />
                        ) : (
                            <MediaPlaceholder
                                icon="format-image"
                                labels={{
                                    title: __('Add Photo', 'zolo-blocks'),
                                    instructions: '',
                                }}
                                onSelect={(media) => {
                                    setAttributes({
                                        memberPhoto: media,
                                    });
                                }}
                                accept="image/*"
                                allowedTypes={['image']}
                            />
                        )}
                        <div className="zolo-hover-content">
                            <RichText
                                className="zolo-name"
                                value={memberName}
                                onChange={(name) => setAttributes({ memberName: name })}
                                placeholder={__('Name...', 'zolo-blocks')}
                                allowedFormats={['core/bold', 'core/italic']}
                            />
                            {showDesignation && (
                                <RichText
                                    className="zolo-designation"
                                    value={memberDesignation}
                                    onChange={(designation) =>
                                        setAttributes({
                                            memberDesignation: designation,
                                        })
                                    }
                                    placeholder={__('Designation...', 'zolo-blocks')}
                                    allowedFormats={['core/bold', 'core/italic']}
                                />
                            )}
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
                                        rel={memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer'}
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
                            <RichText
                                className="zolo-name"
                                value={memberName}
                                onChange={(name) => setAttributes({ memberName: name })}
                                placeholder={__('Name...', 'zolo-blocks')}
                                allowedFormats={['core/bold', 'core/italic']}
                            />
                            {showDesignation && (
                                <RichText
                                    className="zolo-designation"
                                    value={memberDesignation}
                                    onChange={(designation) =>
                                        setAttributes({
                                            memberDesignation: designation,
                                        })
                                    }
                                    placeholder={__('Designation...', 'zolo-blocks')}
                                    allowedFormats={['core/bold', 'core/italic']}
                                />
                            )}
                            {showShortBio && (
                                <RichText
                                    className="zolo-desc"
                                    value={memberShortBio}
                                    onChange={(bio) =>
                                        setAttributes({
                                            memberShortBio: bio,
                                        })
                                    }
                                    placeholder={__('short bio...', 'zolo-blocks')}
                                    allowedFormats={['core/bold', 'core/italic']}
                                />
                            )}
                        </div>
                        {addDetailPageLink && showDetailPageIcon && (
                            <div className="zolo-link-btn">
                                <a
                                    href={memberDetailPageLink && memberDetailPageLink.url}
                                    rel={memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer'}
                                    target={memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank'}
                                >
                                    <DisplayIcon icon={detailIcon} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
