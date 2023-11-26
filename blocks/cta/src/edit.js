/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const {
        preview,
        uniqueId,
        preset,
        label,
        parentClasses,
        iconType,
        icon,
        iconPosition,
        showTitle,
        showDescription,
        showBtn,
        title,
        titleTag,
        description,
        reversePosition,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.cta} alt={__('Call to Action Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className={`zolo-call-out ${preset} ${reversePosition ? 'reserve-position' : ''}`}>
                    <div className="zolo-call-out__content">
                        {showTitle && (
                            <RichText
                                tagName={titleTag}
                                className={`zolo-call-out__title`}
                                value={title}
                                onChange={(text) => setAttributes({ title: text })}
                                placeholder={__('Call Out Title', 'zolo-blocks')}
                            />
                        )}
                        {showDescription && (
                            <RichText
                                tagName="p"
                                className={`zolo-call-out__text`}
                                value={description}
                                onChange={(text) => setAttributes({ description: text })}
                                placeholder={__('Call Out Description', 'zolo-blocks')}
                            />
                        )}
                    </div>
                    {showBtn && (
                        <div className={`zolo-call-out__button zolo-call-out__icon-${iconPosition}`}>
                            <div className={`zolo-button ${iconPosition}`}>
                                {iconType !== 'iconOnly' && (
                                    <RichText
                                        tagName="span"
                                        className={`zolo-text`}
                                        value={label}
                                        onChange={(text) => setAttributes({ label: text })}
                                        placeholder={__('button text', 'zolo-blocks')}
                                        allowedFormats={[]}
                                    />
                                )}
                                {iconType !== 'none' && (
                                    <span className="zolo-icon">
                                        <DisplayZoloIcon icon={icon} />
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
