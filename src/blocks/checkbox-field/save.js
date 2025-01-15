import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

const { classArrayToStr, DisplayZoloIcon,generateUniqueName } = window.zoloModule;
import {convertToDefaultValueArray, convertToOptionsArray} from '@/blocks/checkbox-field/helper';

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
        checkboxDirection,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), checkboxDirection, 'form-group'),
    });
    const optionArray = convertToOptionsArray(optionData);
    const defaultCheck = convertToDefaultValueArray(defaultValue);
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
                        optionArray.map((option,index) => (
                            <label key={index} htmlFor={option.value}>
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    name={generateUniqueName(uniqueId,customNameAttribute,'checkbox_field')}
                                    value={option.value}
                                    checked={defaultCheck.includes(option.value)}
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
