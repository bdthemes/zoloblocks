import { RichText, useBlockProps } from '@wordpress/block-editor';
import { CountUp } from 'use-count-up';
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
        counterIcon,
        iconType,
        iconTypeImage,
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div class="zolo-counter-wrap zolo-counter-style-1">
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
                                    <RichText.Content tagName="span" className="counter" value={counterNumber} />
                                    <span className="counter" data-count={counterNumber}>
                                        {counterNumber}
                                    </span>
                                    <RichText.Content tagName="span" className="zolo-counter-sub-text" value={counterSuffix} />
                                </>
                            )}
                        </div>
                        {hideTitle && <RichText.Content tagName="div" className="zolo-counter-title" value={titleText} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
