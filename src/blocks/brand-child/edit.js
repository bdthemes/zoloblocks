/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

import { SwiperSlide } from 'swiper/react';

/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Filter Slide Item block on Register
 * and pass the block as a child of swiper-slide
 */
const zoloBrandCarousel = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        if ('zolo/brand-child' === props.name) {
            return (
                <SwiperSlide>
                    <BlockListBlock {...props} />
                </SwiperSlide>
            );
        }

        return <BlockListBlock {...props} />;
    };
}, 'zoloBrandCarousel');

addFilter('editor.BlockListBlock', 'zolo/brand-child', zoloBrandCarousel);

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
    const {
        preset,
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
        imageRes,
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
        });
    }, [context]);

    //for preset basic
    let linkType = useRef('');
    useEffect(() => {
        if (enableLogoLink && context['zolo/preset'] === 'zb-brand-basic-style') {
            linkType.current = logoLinkType;
            setAttributes({ logoLinkType: 'logo__global' });
        } else {
            if (linkType.current) {
                setAttributes({ logoLinkType: linkType.current });
                linkType.current = '';
            }
        }
    }, [context['zolo/preset']]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            {brandPhoto && (
                <BlockControls>
                    <>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        brandPhoto: {
                                            id: media.id,
                                            url: media.url,
                                            alt: media.alt,
                                            sizes: media.sizes,
                                            caption: media.caption,
                                        },
                                    });
                                }}
                                allowedTypes={['image']}
                                value={brandPhoto && brandPhoto.id}
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
                    </>
                </BlockControls>
            )}
            <Style props={props} />
            <div {...blockProps}>
                {enableLogoLink && logoLinkType === 'logo__global' ? (
                    <a
                        className="zb-brand-global-link"
                        href={logoLink && logoLink.url}
                        rel={logoLink?.openInNewTab ? 'noreferrer noopener' : undefined}
                        target={logoLink?.openInNewTab ? '_blank' : undefined}
                        title={brandLabel}
                    >
                        <div className="zb-brand-image">
                            {brandPhoto ? (
                                <>
                                    <img
                                        src={
                                            brandPhoto.sizes && brandPhoto.sizes[imageRes] ? brandPhoto.sizes[imageRes].url : brandPhoto.url
                                        }
                                        alt={brandPhoto.alt || brandTitle}
                                        className="zolo-img"
                                    />
                                </>
                            ) : (
                                <MediaPlaceholder
                                    onSelect={(media) =>
                                        setAttributes({
                                            brandPhoto: {
                                                id: media.id,
                                                url: media.url,
                                                alt: media.alt,
                                                sizes: media.sizes,
                                                caption: media.caption,
                                            },
                                        })
                                    }
                                    allowedTypes={['image']}
                                    multiple={false}
                                    labels={{ title: __('Brand Photo', 'zoloblocks') }}
                                />
                            )}
                        </div>
                        {preset !== 'zb-brand-basic-style' && (
                            <>
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
                                            <RichText.Content tagName={brandNameTag} className="zb-brand-title" value={brandTitle} />
                                        )}
                                        {brandLabelVisible && (
                                            <RichText.Content tagName="span" className="zb-brand-link" value={brandLabel} />
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </a>
                ) : (
                    <>
                        <div className="zb-brand-image">
                            {brandPhoto ? (
                                <img
                                    src={brandPhoto.sizes && brandPhoto.sizes[imageRes] ? brandPhoto.sizes[imageRes].url : brandPhoto.url}
                                    alt={brandPhoto.alt || brandTitle}
                                    className="zolo-img"
                                />
                            ) : (
                                <MediaPlaceholder
                                    onSelect={(media) =>
                                        setAttributes({
                                            brandPhoto: {
                                                id: media.id,
                                                url: media.url,
                                                alt: media.alt,
                                                sizes: media.sizes,
                                                caption: media.caption,
                                            },
                                        })
                                    }
                                    allowedTypes={['image']}
                                    multiple={false}
                                    labels={{ title: __('Brand Photo', 'zoloblocks') }}
                                />
                            )}
                        </div>
                        {preset !== 'zb-brand-basic-style' && (
                            <>
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
                                                        rel={logoLink?.openInNewTab ? 'noreferrer noopener' : undefined}
                                                        target={logoLink?.openInNewTab ? '_blank' : undefined}
                                                        title={brandTitle}
                                                    >
                                                        <RichText.Content
                                                            tagName={brandNameTag}
                                                            className="zb-brand-title has-link"
                                                            value={brandTitle}
                                                        />
                                                    </a>
                                                ) : (
                                                    <RichText.Content
                                                        tagName={brandNameTag}
                                                        className="zb-brand-title"
                                                        value={brandTitle}
                                                    />
                                                )}
                                            </>
                                        )}
                                        {brandLabelVisible && (
                                            <>
                                                {enableLogoLink && logoLinkType === 'logo__label' ? (
                                                    <a
                                                        href={logoLink && logoLink.url}
                                                        rel={logoLink?.openInNewTab ? 'noreferrer noopener' : undefined}
                                                        target={logoLink?.openInNewTab ? '_blank' : undefined}
                                                        className="zb-brand-title-link has-link"
                                                        title={brandLabel}
                                                    >
                                                        <RichText.Content tagName="span" value={brandLabel} />
                                                    </a>
                                                ) : (
                                                    <RichText.Content tagName="span" className="zb-brand-title-link" value={brandLabel} />
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
