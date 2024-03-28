/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses, showTitle, title, titleTag, titlePosition, rating, showIcon, iconType, icon, iconTypeImage, imageRes
    } = attributes;

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
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Star Rating Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className={classnames('start-rating-wrapper', titlePosition)}>
                    <div className={classnames('star-rating-inner', titlePosition)}>
                        {showTitle && (
                            <RichText
                                tagName={titleTag}
                                className="start-rating-title"
                                value={title}
                                onChange={(v) => setAttributes({ title: v })}
                                placeholder={__('Enter title', 'zolo-blocks')}
                            />
                        )}
                        {showIcon && (
                                <span className={`star-rating_inner-icon ${iconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`}>
                                    {iconType == 'icon' ? (
                                        <>{icon && <DisplayZoloIcon icon={icon} />}</>
                                    ) : iconTypeImage ? (
                                        <>
                                            <img
                                                src={
                                                    iconTypeImage.sizes && iconTypeImage.sizes[imageRes]
                                                        ? iconTypeImage.sizes[imageRes].url
                                                        : iconTypeImage.url
                                                }
                                                alt={iconTypeImage.alt || 'Star Rating Icon'}
                                            />
                                        </>
                                    ) : (
                                        <MediaPlaceholder
                                            icon="format-image"
                                            labels={{
                                                title: __('Add Photo', 'zolo-blocks'),
                                                instructions: '',
                                            }}
                                            onSelect={(media) => {
                                                setAttributes({
                                                    iconTypeImage: {
                                                        id: media.id,
                                                        url: media.url,
                                                        alt: media.alt,
                                                        sizes: media.sizes,
                                                        caption: media.caption,
                                                    },
                                                });
                                            }}
                                            accept="image/*"
                                            allowedTypes={['image']}
                                        />
                                    )}
                                </span>
                        )}
                        <StarRating rating={rating} total={5} />
                    </div>
                </div>
            </div>
        </>
    );
}
