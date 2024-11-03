import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        preset,
        uniqueId,
        parentClasses,
        brandPhoto,
        brandTitle,
        brandNameTag,
        logoLink,
        brandNameVisible,
        brandLabelVisible,
        enableLogoLink,
        logoLinkType,
        brandLabel,
        zoloId,
        imageRes,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`zb-brand-item ${brandPhoto ? 'has-photo' : ''} ${uniqueId}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {enableLogoLink && logoLinkType === 'logo__global' ? (
                <a
                    className="zb-brand-global-link"
                    href={logoLink && logoLink.url}
                    rel={logoLink && logoLink.openInNewTab && 'noreferer noopener'}
                    target={logoLink && logoLink.openInNewTab && '_blank'}
                    title={brandLabel}
                >
                    <div className="zb-brand-image">
                        {brandPhoto && (
                            <img
                                src={brandPhoto.sizes && brandPhoto.sizes[imageRes] ? brandPhoto.sizes[imageRes].url : brandPhoto.url}
                                alt={brandPhoto.alt || brandTitle}
                                className="zolo-img"
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
                                <RichText.Content tagName={brandNameTag} className="zb-brand-title" value={brandTitle} />
                            )}
                            {brandLabelVisible && <RichText.Content tagName="span" className="zb-brand-label" value={brandLabel} />}
                        </div>
                    </div>
                </a>
            ) : (
                <>
                    <div className="zb-brand-image">
                        {brandPhoto && (
                            <img
                                src={brandPhoto.sizes && brandPhoto.sizes[imageRes] ? brandPhoto.sizes[imageRes].url : brandPhoto.url}
                                alt={brandPhoto.alt || brandTitle}
                                className={`zolo-img wp-image-${brandPhoto.id}`}
                                loading="lazy"
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
                                            className="zb-brand-link"
                                            href={logoLink && logoLink.url}
                                            rel={logoLink && logoLink.openInNewTab && 'noreferer noopener'}
                                            target={logoLink && logoLink.openInNewTab && '_blank'}
                                            title={brandTitle}
                                        >
                                            <RichText.Content
                                                tagName={brandNameTag}
                                                className="zb-brand-title has-link"
                                                value={brandTitle}
                                            />
                                        </a>
                                    ) : (
                                        <RichText.Content tagName={brandNameTag} className="zb-brand-title" value={brandTitle} />
                                    )}
                                </>
                            )}
                            {brandLabelVisible && (
                                <>
                                    {enableLogoLink && logoLinkType === 'logo__label' ? (
                                        <a
                                            className="zb-brand-title-link has-link"
                                            href={logoLink && logoLink.url}
                                            rel={logoLink && logoLink.openInNewTab && 'noreferer noopener'}
                                            target={logoLink && logoLink.openInNewTab && '_blank'}
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
        </div>
    );
};

export default Save;
