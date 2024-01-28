import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        parentClasses,
        hideIcon,
        hideTitle,
        hideCounter,
        hideSuffix,
        counterNumber,
        counterSuffix,
        titleText,
        titleTag,
        counterIcon,
        iconType,
        iconTypeImage,
        zoloId,
        imageRes,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div class={`zolo-counter-wrap ${preset}`}>
                <div class="zolo-counter-item">
                    {hideIcon && (
                        <div class="zolo-counter-icon">
                            {iconType == 'icon' ? (
                                <DisplayZoloIcon icon={counterIcon} />
                            ) : (
                                iconTypeImage && (
                                    <img
                                        src={
                                            iconTypeImage.sizes && iconTypeImage.sizes[imageRes]
                                                ? iconTypeImage.sizes[imageRes].url
                                                : iconTypeImage.url
                                        }
                                        alt={iconTypeImage.alt || titleText}
                                        className={`wp-image-${iconTypeImage.id}`}
                                        loading="lazy"
                                    />
                                )
                            )}
                        </div>
                    )}

                    <div class="zolo-counter-inner-content">
                        <div class="zolo-counter-count">
                            {hideCounter && (
                                <>
                                    <span className="animated-counter" data-count={counterNumber}></span>
                                    {hideSuffix && <span className="zolo-counter-sub-text">{counterSuffix}</span>}
                                </>
                            )}
                        </div>
                        {hideTitle && <RichText.Content tagName={titleTag} className="zolo-counter-title" value={titleText} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
