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
const { handleUniqueId, DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';
import { transformToValueFormat, parseInputToArray } from '@/blocks/select-field/helper';

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
        showIcon,
        icon,
        isRequired,
        showRequiredSymbol,
        optionData,
        customNameAttribute,
        defaultValue,
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

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            showIcon: context['zolo/showFieldIcon'],
            preset: context['zolo/preset'],
        });
    }, [context]);

    const optionArray = parseInputToArray(optionData);
    const defaultSelect = transformToValueFormat(defaultValue);

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

                        <select
                            name={customNameAttribute || 'select_field'}
                            required={isRequired}
                            {...(defaultSelect ? { value: defaultSelect } : {})}
                        >
                            {optionArray.length > 0 &&
                                optionArray.map((item, index) => {
                                    if (item?.label) {
                                        // Render optgroup
                                        return (
                                            <optgroup key={index} label={item.label}>
                                                {item.options.map((option, optIndex) => (
                                                    <option
                                                        key={optIndex}
                                                        value={option.value}
                                                        selected={option.value === defaultSelect}
                                                        disabled={option?.disabled}
                                                    >
                                                        {option.name}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        );
                                    } else {
                                        // Render standalone option
                                        return (
                                            <option
                                                key={index}
                                                value={item.value}
                                                selected={item.value === defaultSelect}
                                                disabled={item?.disabled}
                                            >
                                                {item.name}
                                            </option>
                                        );
                                    }
                                })}
                        </select>

                        <div className="zolo-select-arrow">
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
                                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 9l6 6l6 -6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
