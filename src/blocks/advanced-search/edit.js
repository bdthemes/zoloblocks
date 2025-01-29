/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
const { classArrayToStr, DisplayZoloIcon, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        preset,
        placeholder,
        buttonType,
        buttonIcon,
        buttonText,
        labelText,
        btnLayoutType,
        showButtonText,
        showIcon,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, `zolo-advanced-search ${preset}`, classArrayToStr(parentClasses)),
    });
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.advancedSearch} alt={__('Advanced Search', 'zoloblocks')} />;
    }

    const formPreventDefault = (e) => {
        e.preventDefault();
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <form
                    className={`zolo-form-wrap ${btnLayoutType}`}
                    onSubmit={formPreventDefault}
                    role="search"
                    action={zoloParams.home_url}
                    method="get"
                >
                    <div className="zolo-advanced-search-control zolo-form-search-input" role="tablist">
                        <input type="search" name="s" placeholder={placeholder} className="zolo-form-input" />
                        {preset == 'zolo-search-2' && (
                            <label htmlFor={uniqueId} className="zolo-form-label">
                                {labelText}
                            </label>
                        )}
                    </div>
                    <div className="zolo-advanced-search-control zolo-form-submit-btn">
                        {showIcon || showButtonText ? (
                            <button type="submit" className="zolo-form-btn">
                                {showButtonText && (
                                    <RichText
                                        tagName="span"
                                        placeholder={__('Search', 'zolo-advanced-search')}
                                        value={buttonText}
                                        onChange={(value) => setAttributes({ buttonText: value })}
                                        className="zolo-form-btn-text"
                                        multiline={false}
                                        allowedFormats={['core/bold', 'core/italic', 'core/strikethrough', 'zolo/dynamic-content']}
                                    />
                                )}
                                {showIcon && (
                                    <span className="zolo-advanced-search-icon-wrap">
                                        <DisplayZoloIcon icon={buttonIcon} />
                                    </span>
                                )}
                            </button>
                        ) : null}
                    </div>
                </form>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
