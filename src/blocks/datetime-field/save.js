import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
import {__} from '@wordpress/i18n';
import React from "react";

const {classArrayToStr} = window.zoloModule;

const Save = ({attributes}) => {
  const {
    uniqueId,
    parentClasses,
    zoloId,
    showLabel,
    label,
    placeholder,
    showIcon,
    icon,
    isRequired,
    showRequiredSymbol,
    requiredMsg,
    dateFormat,
    customNameAttribute,
    defaultValue,
    timeFormat,
    fieldType
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

        <div className="zolo-field-input-item"
             data-showicon={JSON.stringify(showIcon)}
             data-icon={JSON.stringify(icon)}
             data-required={JSON.stringify(isRequired)}
             data-placeholder={placeholder}
             data-requiredmsg={requiredMsg}
             data-dateformat={dateFormat}
             data-timeformat={timeFormat}
             data-fieldtype={fieldType}
             data-nameattribute={customNameAttribute || 'date_field'}
             data-defaultvalue={defaultValue}
        >
        </div>

      </div>
    </div>
  );
};

export default Save;
