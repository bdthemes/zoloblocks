import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, preset, label, link, iconType, iconPosition, icon, parentClasses, zoloId, iconAnimation } = attributes;

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <div
                className={classnames(
                    'zolo-block-wrapper',
                    'zolo-advanced-button',
                    uniqueId,
                    `${preset !== '' && preset !== undefined && preset !== null && preset !== 'undefined' ? preset : ''}`,
                    `${iconAnimation !== '' && iconAnimation !== undefined && iconAnimation !== 'undefined' && preset !== 'button-1' && preset !== 'button-3' ? iconAnimation : ''}`
                )}
            >
                <a
                    className={classnames(
                        'zolo-button',
                        `${
                            iconAnimation === '' ||
                            iconAnimation === null ||
                            iconAnimation === undefined ||
                            (iconAnimation !== '' && (preset === 'button-1' || preset === 'button-3'))
                                ? iconPosition
                                : ''
                        }`
                    )}
                    href={link && link.url}
                    rel={link && link.openInNewTab && 'noreferrer noopener'}
                    target={link && link.openInNewTab && '_blank'}
                    title={label}
                >
                    {iconType !== 'iconOnly' && <RichText.Content tagName="span" className={`zolo-button-content`} value={label} />}
                    {iconType !== 'none' && <DisplayZoloIcon icon={icon} />}
                </a>
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
