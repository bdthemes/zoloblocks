import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
import {__} from '@wordpress/i18n';

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
    defaultValue
  } = attributes;

  const blockProps = useBlockProps.save({
    className: classnames(uniqueId, classArrayToStr(parentClasses), `${showIcon ? 'zolo-field-icon' : ''}`, 'form-group'),
  });

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
            name={customNameAttribute || 'select_feild'}
            value={defaultValue || ''}
            required={isRequired}
            {...(isRequired && {'data-pristine-required-message': requiredMsg})}
          >
            {optionData.map((item) => (
              <option
                key={item.id}
                value={item.value}
                {...(defaultValue === item.value && {'selected': ''})}
              >
                {item.name}
              </option>
            ))}
          </select>

        </div>
      </div>
    </div>
  );
};

export default Save;
