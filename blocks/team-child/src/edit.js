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
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

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
        memberDetailPageLink,
        showDesignation,
        memberDesignation,
        showShortBio,
        memberShortBio,
        showSocialProfiles,
        socialProfiles,
        detailIcon,
        imageRes,
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
                                        memberPhoto: {
                                            id: media.id,
                                            url: media.url,
                                            alt: media.alt,
                                            sizes: media.sizes,
                                            caption: media.caption,
                                        },
                                    });
                                }}
                                allowedTypes={['image']}
                                value={memberPhoto && memberPhoto.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zoloblocks')}
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
                <div className="zolo-item">
                    <div className="zolo-image-wrap">
                        {memberPhoto ? (
                            <img
                                src={memberPhoto.sizes && memberPhoto.sizes[imageRes] ? memberPhoto.sizes[imageRes].url : memberPhoto.url}
                                alt={memberPhoto.alt || memberName}
                            />
                        ) : (
                            <MediaPlaceholder
                                icon="format-image"
                                labels={{
                                    title: __('Add Photo', 'zoloblocks'),
                                    instructions: '',
                                }}
                                onSelect={(media) => {
                                    setAttributes({
                                        memberPhoto: {
                                            id: media.id,
                                            url: media.url,
                                            alt: media.alt,
                                            sizes: media.sizes,
                                            caption: media.caption,
                                        },
                                    });
                                }}
                                accept="image/*"
                                allowedTypes={['image']}
                            />
                        )}
                    </div>
                    <div className="zolo-info-wrap">
                        <div className="zolo-content">
                            <RichText
                                className={`zolo-name`}
                                value={memberName}
                                onChange={(name) => setAttributes({ memberName: name })}
                                placeholder={__('Name...', 'zoloblocks')}
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
                                    placeholder={__('Designation...', 'zoloblocks')}
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
                                    placeholder={__('short bio...', 'zoloblocks')}
                                    allowedFormats={['core/bold', 'core/italic']}
                                />
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
                            {addDetailPageLink && (
                                <div className="zolo-link-btn">
                                    <a className='zolo-external-link'
                                        href={memberDetailPageLink && memberDetailPageLink.url}
                                        rel={memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer'}
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
        </>
    );
}
