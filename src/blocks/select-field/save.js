import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
import {__} from '@wordpress/i18n';
import {parseInputToArray, transformToValueFormat} from "@/blocks/select-field/helper";

const {classArrayToStr, DisplayZoloIcon} = window.zoloModule;

const Save = ({attributes}) => {
  const {
    uniqueId,
    parentClasses,
    preset,
    optionData,
    zoloId,
    showLabel,
    label,
    showIcon,
    icon,
    isRequired,
    showRequiredSymbol,
    requiredMsg,
    customNameAttribute,
    defaultValue,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: classnames(uniqueId, classArrayToStr(parentClasses), `${showIcon ? 'zolo-field-icon' : ''}`, 'form-group'),
  });

  const optionArray = parseInputToArray(optionData);
  const defaultSelect = transformToValueFormat(defaultValue);

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
            <RichText.Content tagName="label" className="zolo-label" value={label}/>
            {isRequired && showRequiredSymbol && <span className="zolo-required">{__('*', 'zoloblocks')}</span>}
          </div>
        )}

        <div className="zolo-field-input-item">
          {showIcon && preset !== 'style-3' && (
            <div className="zolo-input-icon">
              <DisplayZoloIcon icon={icon}/>
            </div>
          )}

          <select
            name={customNameAttribute || 'select_field'}
            required={isRequired}
            value={defaultSelect}
            {...(isRequired && {'data-pristine-required-message': requiredMsg})}
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
                          {...(defaultSelect === option.value && {'selected': ''})}
                          {...(option?.disabled && {'disabled': option.disabled})}
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
                      {...(defaultSelect === item.value && {'selected': ''})}
                      {...(item?.disabled && {'disabled': item.disabled})}
                    >
                      {item.name}
                    </option>
                  );
                }
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Save;
