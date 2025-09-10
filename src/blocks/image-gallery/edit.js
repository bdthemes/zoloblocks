/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon, SidebarOpener, ZoloToolbarGroup, ZoloToolbarButton, sanitizeUrl, sanitizeHtml } =
    window.zoloModule;

// import style
import Style from './style';
import Inspector from './inspector';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const { preview, preset, uniqueId, parentClasses, showCaption, showTitle, showLightbox, advancedGallery, lightboxIcon, imageSize } =
        attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `${preset && preset !== '' ? preset : ''}`),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    const lightboxButtonProps = {
        href: sanitizeUrl('#'),
        className: 'zolo-icon-wrap',
        onClick: (e) => e.preventDefault(),
    };
    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.imageGallery} alt={__('Gallery Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {advancedGallery && (
                    <>
                        <ZoloToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        advancedGallery: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                multiple={true}
                                gallery={true}
                                value={advancedGallery && advancedGallery.map((image) => image.id)}
                                render={({ open }) => (
                                    <ZoloToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zoloblocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ZoloToolbarGroup>
                    </>
                )}
            </BlockControls>
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div className={`${advancedGallery ? 'zolo-image-gallery' : 'zolo-single-image'} ${uniqueId}`}>
                    {advancedGallery ? (
                        advancedGallery &&
                        advancedGallery.map((image, index) => {
                            return (
                                <div className="zolo-item" key={index}>
                                    <div className="zolo-image-wrap">
                                        <img
                                            src={image.sizes && image.sizes[imageSize] ? image.sizes[imageSize].url : image.url}
                                            alt={image.alt}
                                        />
                                    </div>
                                    {showLightbox && preset !== 'style-2' && (
                                        <a {...lightboxButtonProps}>
                                            <span className="zolo-icon">
                                                <DisplayZoloIcon icon={lightboxIcon} />
                                            </span>
                                        </a>
                                    )}
                                    {showCaption && preset !== 'style-2' && image.caption && (
                                        <div className="zolo-title" dangerouslySetInnerHTML={{ __html: sanitizeHtml(image.caption) }}></div>
                                    )}

                                    {preset === 'style-2' && (
                                        <div className="zolo-inner-item">
                                            <div className="zolo-content-wrap">
                                                {showTitle && (
                                                    <h4 className="zolo-subTitle">{image?.alt || __('No Alt Text', 'zoloblocks')}</h4>
                                                )}
                                                {showCaption && image.caption && (
                                                    <div
                                                        className="zolo-title"
                                                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(image.caption) }}
                                                    ></div>
                                                )}
                                            </div>
                                            {showLightbox && (
                                                <a {...lightboxButtonProps}>
                                                    <span className="zolo-icon">
                                                        <DisplayZoloIcon icon={lightboxIcon} />
                                                    </span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <>
                            <MediaPlaceholder
                                onSelect={(media) => {
                                    setAttributes({
                                        advancedGallery: media,
                                    });
                                }}
                                gallery={true}
                                multiple={true}
                                allowedTypes={['image']}
                                value={advancedGallery && advancedGallery.map((image) => image.id)}
                                labels={{
                                    title: __('Upload Gallery Photos', 'zoloblocks'),
                                    instructions: __('Drag images, upload new ones or select files from your library.', 'zoloblocks'),
                                }}
                            />
                        </>
                    )}
                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
