/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';
import { DynamicTag } from '../../../src/helpers/helper';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
    const {
        uniqueId,
        parentClasses,
        brandPhoto,
        brandTitle,
        brandNameTag,
        brandLabel,
        logoLink,
        brandNameVisible,
        brandLabelVisible,
        enableLogoLink,
        logoLinkType,
        brandText,
    } = attributes;

    // block props
    const blockProps = useBlockProps({
        className: classnames(className, `zb-brand-item ${uniqueId} ${brandPhoto ? 'has-photo' : ''}`, classArrayToStr(parentClasses)),
    });

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            preset: context['zolo/preset'],
            brandNameVisible: context['zolo/brandNameVisible'],
            brandLabelVisible: context['zolo/brandLabelVisible'],
            enableLogoLink: context['zolo/enableLogoLink'],
            logoLinkType: context['zolo/logoLinkType'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            {brandPhoto && (
                <BlockControls>
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        brandPhoto: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={brandPhoto && brandPhoto.id}
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
                </BlockControls>
            )}
            <Style props={props} />
            <div {...blockProps}>
                {enableLogoLink && logoLinkType === 'logo__global' ? (
                    <a
                        className="zb-brand-global-link"
                        href={logoLink && logoLink.url}
                        rel={logoLink && logoLink.openInNewTab && 'noreferer noopener'}
                        target={logoLink && logoLink.openInNewTab && '_blank'}
                    >
                        <div className="zb-brand-image">
                            {brandPhoto ? (
                                <img src={brandPhoto.url} alt={brandPhoto.alt || brandTitle} className="zolo-img" />
                            ) : (
                                <MediaPlaceholder
                                    onSelect={(media) => setAttributes({ brandPhoto: media })}
                                    allowedTypes={['image']}
                                    multiple={false}
                                    labels={{ title: __('Brand Photo', 'zolo-blocks') }}
                                />
                            )}
                        </div>
                        <div className="zb-brand-content">
                            <div className="zb-brand-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-plus"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </div>
                            <div className="zb-brand-inner-content">
                                {brandNameVisible && (
                                    <RichText.Content
                                        tagName={brandNameTag}
                                        className="zb-brand-title"
                                        value={brandTitle}
                                        // onChange={(name) =>
                                        //     setAttributes({
                                        //         brandTitle: name,
                                        //     })
                                        // }
                                        // placeholder={__('Brand title..', 'zolo-blocks')}
                                    />
                                )}
                                {brandLabelVisible && (
                                    <RichText.Content
                                        tagName="span"
                                        className="zb-brand-link"
                                        value={brandLabel}
                                        // onChange={(name) =>
                                        //     setAttributes({
                                        //         brandLabel: name,
                                        //     })
                                        // }
                                        // placeholder={__('Brand label..', 'zolo-blocks')}
                                    />
                                )}
                            </div>
                        </div>
                    </a>
                ) : (
                    <>
                        <div className="zb-brand-image">
                            {brandPhoto ? (
                                <img src={brandPhoto.url} alt={brandPhoto.alt || brandTitle} className="zolo-img" />
                            ) : (
                                <MediaPlaceholder
                                    onSelect={(media) => setAttributes({ brandPhoto: media })}
                                    allowedTypes={['image']}
                                    multiple={false}
                                    labels={{ title: __('Brand Photo', 'zolo-blocks') }}
                                />
                            )}
                        </div>
                        <div className="zb-brand-content">
                            <div className="zb-brand-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-plus"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </div>
                            <div className="zb-brand-inner-content">
                                {brandNameVisible && (
                                    <>
                                        {enableLogoLink && logoLinkType === 'logo__title' ? (
                                            <a
                                                href={logoLink && logoLink.url}
                                                rel={logoLink && logoLink.openInNewTab && 'noreferer noopener'}
                                                target={logoLink && logoLink.openInNewTab && '_blank'}
                                            >
                                                <RichText.Content
                                                    tagName={brandNameTag}
                                                    className="zb-brand-title has-link"
                                                    value={brandTitle}
                                                    // onChange={(name) =>
                                                    //     setAttributes({
                                                    //         brandTitle: name,
                                                    //     })
                                                    // }
                                                    // placeholder={__('Brand title..', 'zolo-blocks')}
                                                />
                                            </a>
                                        ) : (
                                            <RichText.Content
                                                tagName={brandNameTag}
                                                className="zb-brand-title"
                                                value={brandTitle}
                                                // onChange={(name) =>
                                                //     setAttributes({
                                                //         brandTitle: name,
                                                //     })
                                                // }
                                                // placeholder={__('Brand title..', 'zolo-blocks')}
                                            />
                                        )}
                                    </>
                                )}
                                {brandLabelVisible && (
                                    <>
                                        {enableLogoLink && logoLinkType === 'logo__label' ? (
                                            <a
                                                href={logoLink && logoLink.url}
                                                rel={logoLink && logoLink.openInNewTab && 'noreferer noopener'}
                                                target={logoLink && logoLink.openInNewTab && '_blank'}
                                                className="zb-brand-title-link has-link"
                                            >
                                                <RichText.Content
                                                    tagName="span"
                                                    value={brandLabel}
                                                    // onChange={(name) =>
                                                    //     setAttributes({
                                                    //         brandLabel: name,
                                                    //     })
                                                    // }
                                                    // placeholder={__('Brand label..', 'zolo-blocks')}
                                                />
                                            </a>
                                        ) : (
                                            <RichText.Content
                                                tagName="span"
                                                className="zb-brand-title-link"
                                                value={brandLabel}
                                                // onChange={(name) =>
                                                //     setAttributes({
                                                //         brandLabel: name,
                                                //     })
                                                // }
                                                // placeholder={__('Brand label..', 'zolo-blocks')}
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
