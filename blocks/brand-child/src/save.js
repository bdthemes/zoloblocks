import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, preset, heading, brandPhoto, brandName, brandDetailPageLink, brandLabel, link, showBrandName, showBrandLink } =
        attributes;

    return (
        <div
            {...useBlockProps.save({
                className: `zb-brand-item ${brandPhoto ? 'has-photo' : ''} ${uniqueId}`,
            })}
        >
            <div className="zb-brand-image">
                {brandPhoto && <img src={brandPhoto.url} alt={brandPhoto.alt || brandLabel} className="zolo-img" />}
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
                    <RichText.Content tagName="h1" className="zb-brand-title" value={brandName} />
                    <a
                        className="zb-brand-link"
                        href={brandDetailPageLink && brandDetailPageLink.url}
                        rel={brandDetailPageLink && brandDetailPageLink.opensInNewTab && 'noreferer'}
                        target={brandDetailPageLink && brandDetailPageLink.opensInNewTab && '_blank'}
                    >
                        <RichText.Content value={brandLabel} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Save;
