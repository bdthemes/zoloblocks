/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayIcon } = window.zoloModule;

// import style
import Style from './style';
import Inspector from './inspector';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const { uniqueId, parentClasses, showCaption, showLightbox, advancedGallery, lightboxIcon } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {advancedGallery && (
                    <Fragment>
                        <ToolbarGroup>
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
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zolo-blocks')}
                                        icon="update"
                                        onClick={open}
                                    />
                                )}
                            />
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        advancedGallery: advancedGallery.null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>
            <div {...blockProps}>
                <div className={`${advancedGallery ? 'zolo-image-gallery' : 'zolo-single-image'} ${uniqueId}`}>
                    {advancedGallery ? (
                        advancedGallery &&
                        advancedGallery.map((image, index) => {
                            return (
                                <div className="zolo-item" key={index}>
                                    <div className="zolo-image-wrap">
                                        <img src={image.url} alt={image.alt || image.caption} />
                                    </div>
                                    {showLightbox && (
                                        <a href="#" className="zolo-icon-wrap">
                                            <span className="zolo-icon">
                                                <DisplayIcon icon={lightboxIcon} />
                                            </span>
                                        </a>
                                    )}
                                    {showCaption && image.caption && <div className="zolo-title">{image.caption}</div>}
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
                                    title: __('Upload Gallery Photos', 'zolo-blocks'),
                                    instructions: __('Drag images, upload new ones or select files from your library.', 'zolo-blocks'),
                                }}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
