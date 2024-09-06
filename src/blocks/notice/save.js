import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon, DynamicTag } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        preset,
        parentClasses,
        titleTag,
        mainIcon,
        iconType,
        iconTypeImage,
        iconBoxTitle,
        iconBoxDescription,
        zoloId,
        imageRes,
        iconBoxDirection,
        dismissible,
        showAfterDismiss,
        enableIcon,
        showTitle,
        showText,
        noticeType,
        infoDefaultIcon,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            'zolo-block-notice',
            preset,
            noticeType,
            `${preset === 'style-1' ? iconBoxDirection : ''}`
        ),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            data-id={uniqueId}
        >
            {renderHookBefore && renderHookBefore}
            <div
                className={classnames(
                    'zolo-block-item',
                    `${(preset === 'style-1' || preset === 'style-2') && ''}`,
                    `${(preset === 'style-1' || preset === 'style-2') && ''}`
                )}
            >
                {enableIcon && (
                    <div className="zolo-block-icon-wrap">
                        {iconType == 'icon' ? (
                            <DisplayZoloIcon
                                icon={
                                    mainIcon ||
                                    (noticeType == 'info' && infoDefaultIcon.info) ||
                                    (noticeType == 'success' && infoDefaultIcon.success) ||
                                    (noticeType == 'warning' && infoDefaultIcon.warning) ||
                                    (noticeType == 'danger' && infoDefaultIcon.danger)
                                }
                            />
                        ) : (
                            iconTypeImage && (
                                <img
                                    src={
                                        iconTypeImage.sizes && iconTypeImage.sizes[imageRes]
                                            ? iconTypeImage.sizes[imageRes].url
                                            : iconTypeImage.url
                                    }
                                    alt={iconTypeImage.alt || iconBoxTitle}
                                    className={`wp-image-${iconTypeImage.id}`}
                                    loading="lazy"
                                />
                            )
                        )}
                    </div>
                )}

                <div className="zolo-block-body-content">
                    {showTitle && <RichText.Content value={iconBoxTitle} tagName={titleTag} className={`zolo-block-title`} />}
                    {showText && <RichText.Content value={iconBoxDescription} tagName="div" className={`zolo-block-desc`} />}
                </div>

                {dismissible && (
                    <button className="zolo-notice-dismiss">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
