import { __ } from '@wordpress/i18n';
const { DisplayZoloIcon, sanitizeText } = window.zoloModule;

export default function RenderView({ attributes }) {
    const { showImage, showTitle, showBtn, previousPost, previousPostIcon, nextPost, nextPostIcon } = attributes;

    return (
        <>
            <a onClick={(event) => event.preventDefault()} href="#" className="zolo-item zolo-post-prev">
                {showImage && (
                    <div className="zolo-image-wrap">
                        <img src={zoloPlaceholders.placeholder} alt={__('Image Placeholder', 'zoloblocks')} />
                    </div>
                )}
                <div className="zolo-content-wrap">
                    {showBtn && (
                        <div className="zolo-nav-wrap">
                            <span className="zolo-nav-text">
                                <span>{sanitizeText(previousPost)}</span>
                                {previousPostIcon && <DisplayZoloIcon icon={previousPostIcon} />}
                            </span>
                        </div>
                    )}
                    {showTitle && <h2 className="zolo-pos-nav-title">Demo Post One</h2>}
                </div>
            </a>
            <a href="javascript:void(0)" className="zolo-item zolo-post-next">
                {showImage && (
                    <div className="zolo-image-wrap">
                        <img src={zoloPlaceholders.placeholder} alt={__('Image Placeholder', 'zoloblocks')} />
                    </div>
                )}
                <div className="zolo-content-wrap">
                    {showBtn && (
                        <div className="zolo-nav-wrap">
                            <span className="zolo-nav-text">
                                <span>{sanitizeText(nextPost)}</span>
                                {nextPostIcon && <DisplayZoloIcon icon={nextPostIcon} />}
                            </span>
                        </div>
                    )}
                    {showTitle && <h2 className="zolo-pos-nav-title">Demo Post Two</h2>}
                </div>
            </a>
        </>
    );
}
