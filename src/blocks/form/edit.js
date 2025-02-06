/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, ButtonBlockAppender } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const { preview, formId, uniqueId, parentClasses, preset, btnLabel, showBtnIcon, icon, iconPosition } = attributes;

    const { hasSelectedInnerBlock } = useSelect((select) => {
        const { hasSelectedInnerBlock } = select('core/block-editor');
        return {
            hasSelectedInnerBlock: hasSelectedInnerBlock(clientId, true),
        };
    });

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses), preset),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.form} alt={__('Form Preview', 'zoloblocks')} />;
    }

    // generate a unique form id for each block
    useEffect(() => {
        if (!formId) {
            const uniqueFormId = `zolo-form-` + Math.random().toString(36).substr(2, 9); // generate a unique form id
            setAttributes({ formId: uniqueFormId });
        }
    }, []);

    // get all child blocks
    const formInnerBlocks = wp.data.select('core/block-editor').getBlocks(props.clientId);

    useEffect(() => {
        let validationRules = {};
        // get all child blocks
        if (formInnerBlocks.length > 0) {
            formInnerBlocks.map((block) => {
                const { name, attributes } = block;
                const { isRequired, label } = attributes;

                let updatedLabel = label ? label.toLowerCase().replace(/\s/g, '-') : name.replace('zolo/', '').replace(/\s/g, '-');

                validationRules = {
                    ...validationRules,
                    [updatedLabel]: isRequired,
                };
            });
        }

        // set validation rules
        setAttributes({
            validationRules,
        });
    }, [formInnerBlocks]);

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <form className="zolo-contact-form zolo-contact-form-style-1 zolo-field-icon-style-1" id={formId}>
                    <InnerBlocks
                        template={[['zolo/text-field'], ['zolo/email'], ['zolo/textarea']]}
                        renderAppender={() => null}
                    />

                    {
                        (isSelected || hasSelectedInnerBlock) && (
                            <ButtonBlockAppender rootClientId={clientId} />
                        )
                    }

                    <div className="zolo-field-item zolo-field-icon zolo-field-icon-style-1">
                        <div className="zolo-submit-btn">
                            <button type="submit" className={iconPosition}>
                                <span className="zolo-submit-btn-content">
                                    {btnLabel || __('Submit Now', 'zoloblocks')}
                                    {showBtnIcon && <DisplayZoloIcon icon={icon} />}
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
