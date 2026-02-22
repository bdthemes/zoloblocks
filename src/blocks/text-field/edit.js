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
const { handleUniqueId, DisplayZoloIcon, classArrayToStr, generateUniqueName, sanitizeText } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const {
        preview,
        preset,
        uniqueId,
        parentClasses,
        showLabel,
        label,
        placeholder,
        showIcon,
        icon,
        isRequired,
        showRequiredSymbol,
        defaultValue,
        customNameAttribute,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `${uniqueId}`,
            classArrayToStr(parentClasses),
            `${showIcon ? 'zolo-field-icon' : ''}`,
            'form-group-editor'
        ),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.text} alt={__('Text Preview', 'zoloblocks')} />;
    }

    const childContextData = {
        preset: context['zolo/preset'],
        showFieldIcon: context['zolo/showFieldIcon'],
    }

    const childContextAttributes = {
        preset: attributes.preset,
        showFieldIcon: attributes.showIcon,
    }

    useEffect(() => {
        if (!context) return;

        if (JSON.stringify(childContextData) !== JSON.stringify(childContextAttributes)) {
            setAttributes(childContextData);
        }
    }, [childContextData]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zolo-field-item">
                    {showLabel && (
                        <div className="zolo-label-wrapper">
                            <RichText
                                tagName="label"
                                className="zolo-label"
                                value={label}
                                onChange={(v) =>
                                    setAttributes({
                                        label: v,
                                    })
                                }
                                placeholder={__('Label', 'zoloblocks')}
                            />
                            {isRequired && showRequiredSymbol && <span className="zolo-required">{__('*', 'zoloblocks')}</span>}
                        </div>
                    )}

                    <div className="zolo-field-input-item">
                        {showIcon && preset !== 'style-3' && (
                            <div className="zolo-input-icon">
                                <DisplayZoloIcon icon={icon} />
                            </div>
                        )}

                        <input
                            type="text"
                            value={defaultValue || ''}
                            name={generateUniqueName(uniqueId, customNameAttribute, 'name')}
                            required={isRequired}
                            placeholder={__(placeholder, 'zoloblocks')}
                            onChange={(e) => setAttributes({ defaultValue: sanitizeText(e.target.value) })}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
