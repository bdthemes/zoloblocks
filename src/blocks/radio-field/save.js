import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

const { classArrayToStr } = window.zoloModule;
import { transformToValueFormat, convertToOptionsArray } from '@/blocks/radio-field/helper';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        preset,
        zoloId,
        showLabel,
        label,
        isRequired,
        showRequiredSymbol,
        requiredMsg,
        optionData,
        defaultValue,
        customNameAttribute,
        radioDirection,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), radioDirection, 'form-group'),
    });
    const optionArray = convertToOptionsArray(optionData);
    const defaultCheck = transformToValueFormat(defaultValue);
    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-field-item">
                {showLabel && (
                    <div className="zolo-label-wrapper">
                        <RichText.Content tagName="label" className="zolo-label" value={label} />
                        {isRequired && showRequiredSymbol && <span className="zolo-required">{__('*', 'zoloblocks')}</span>}
                    </div>
                )}

                <div className="zolo-field-input-item">
                    {optionArray.length > 0 &&
                        optionArray.map((option) => (
                            <label htmlFor={option.value}>
                                <input
                                    type="radio"
                                    id={option.value}
                                    name={customNameAttribute || 'radio_field'}
                                    value={option.value}
                                    checked={defaultCheck === option.value}
                                    required={isRequired}
                                    {...(isRequired && { 'data-pristine-required-message': requiredMsg })}
                                />{' '}
                                {option.name}
                            </label>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Save;
