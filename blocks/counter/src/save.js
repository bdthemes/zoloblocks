import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        hideIcon,
        hideTitle,
        hideCounter,
        counterNumber,
        counterSuffix,
        titleText,
        titleTag,
        counterIcon,
        iconType,
        iconTypeImage,
    } = attributes;
    return (
        <div {...useBlockProps.save()}>
            <div class={`zolo-counter-wrap zolo-counter-${preset} ${uniqueId}`}>
                <div class="zolo-counter-item">
                    {hideIcon && (
                        <div class="zolo-counter-icon">
                            {iconType == 'icon' ? (
                                <DisplayIcon icon={counterIcon} />
                            ) : (
                                iconTypeImage && <img src={iconTypeImage.url} alt={iconTypeImage.alt || titleText} />
                            )}
                        </div>
                    )}

                    <div class="zolo-counter-inner-content">
                        <div class="zolo-counter-count">
                            {hideCounter && (
                                <>
                                    <div className="animated-counter" data-count={counterNumber}></div>
                                    <span className="zolo-counter-sub-text">{counterSuffix}</span>
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
