import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import {convertToDefaultValueArray, convertToOptionsArray} from "@/blocks/checkbox-field/helper";
const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        preset,
        zoloId,
        showLabel,
        label,
        showIcon,
        icon,
        isRequired,
        showRequiredSymbol,
        requiredMsg,
        optionData,
        defaultValue,
        customNameAttribute
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `${showIcon ? 'zolo-field-icon' : ''}`, 'form-group'),
    });
  const optionArray = convertToOptionsArray(optionData);
  const defaultCheck = convertToDefaultValueArray(defaultValue)
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
                    {showIcon && preset !== 'style-3' && (
                        <div className="zolo-input-icon">
                            <DisplayZoloIcon icon={icon} />
                        </div>
                    )}

                  {optionArray.length > 0 &&
                    optionArray.map((option) => (
                        <label htmlFor={option.value}>
                          <input
                            id={option.value}
                            name={customNameAttribute||'checkbox_field'}
                            value={option.value}
                            checked={defaultCheck.includes(option.value)}
                            type="checkbox"
                          />{" "}
                          {option.name}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Save;
