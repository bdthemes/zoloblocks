/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
    const { uniqueId, parentClasses, isBrandName, isBrandLink, brandPhoto, brandName, brandNameTag, brandLabel, brandDetailPageLink } =
        attributes;

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
            heading: context['zolo/heading'],
            showBrandName: context['zolo/showBrandName'],
            showBrandLink: context['zolo/showBrandLink'],
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
                        <ToolbarGroup>
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        brandPhoto: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                </BlockControls>
            )}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zb-brand-image">
                    {brandPhoto ? (
                        <img src={brandPhoto.url} alt={brandPhoto.alt || brandName} className="zolo-img" />
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
                        {isBrandName && (
                            <RichText
                                tagName={brandNameTag}
                                className="zb-brand-title"
                                value={brandName}
                                onChange={(name) =>
                                    setAttributes({
                                        brandName: name,
                                    })
                                }
                                placeholder={__('Brand name..', 'zolo-blocks')}
                            />
                        )}
                        {isBrandLink && (
                            <a
                                className="zb-brand-link"
                                href={brandDetailPageLink && brandDetailPageLink.url}
                                rel={brandDetailPageLink && brandDetailPageLink.opensInNewTab && 'noreferer'}
                                target={brandDetailPageLink && brandDetailPageLink.opensInNewTab && '_blank'}
                            >
                                <RichText
                                    tagName="span"
                                    value={brandLabel}
                                    onChange={(name) =>
                                        setAttributes({
                                            brandLabel: name,
                                        })
                                    }
                                    placeholder={__('www.zalando.com', 'zolo-blocks')}
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
