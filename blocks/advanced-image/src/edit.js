/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, MediaPlaceholder, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses, photo, showCaption, caption, showTitle, title, titleTag, titlePosition, rating } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.image} alt={__('Advanced Image Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {photo ? (
                    <figure>
                        <img src={photo.url} alt={photo.alt} />
                        {showCaption && (
                            <figcaption>
                                <RichText
                                    value={caption || photo?.caption}
                                    onChange={(value) => setAttributes({ caption: value })}
                                    placeholder={__('Add a caption', 'zolo-blocks')}
                                    className="zolo-image-caption"
                                />
                            </figcaption>
                        )}
                    </figure>
                ) : (
                    <div className="zolo-media-placeholder">
                        <MediaPlaceholder
                            onSelect={(media) => {
                                setAttributes({
                                    photo: media,
                                });
                            }}
                            accept="image/*"
                            onSelectURL={(url) => console.log(url)}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{ title: __('Image', 'zolo-blocks') }}
                            icon={
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    class="zolo-image-icon"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <path
                                        d="M3 17L7.41995 12.58C8.26284 11.7372 9.65125 11.8141 10.3959 12.7449L11.789 14.4863C12.4639 15.3298 13.6866 15.4851 14.5508 14.8369L15.6123 14.0408C16.4086 13.4436 17.5228 13.5228 18.2265 14.2265L21 17M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                                        fill="none"
                                        stroke="#001feb"
                                        stroke-width="1.4"
                                    ></path>
                                </svg>
                            }
                        />
                    </div>
                )}
            </div>
        </>
    );
}
