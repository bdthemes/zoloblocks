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
const { classArrayToStr } = window.zoloModule;

// import style
import Style from './style';

import Inspector from './inspector';
export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const { uniqueId, preset, parentClasses, showCaption, showLightbox, advancedGallery } = attributes;

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
                <div className={`${advancedGallery ? 'zolo-image-gallery' : 'zolo-single-image'} ${uniqueId} zolo-img-gallery-${preset}`}>
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
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-plus-lg"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span className="zolo-icon-text">{__('zoom', 'zolo-blocks')}</span>
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
