/**
 * WordPress dependencies
 */
import {useBlockProps, RichText} from '@wordpress/block-editor';
import {useEffect, useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';
import DatePicker from 'react-datepicker';

/**
 * Internal dependencies
 */
const {handleUniqueId, DisplayZoloIcon, classArrayToStr} = window.zoloModule;

import {BLOCK_PREFIX} from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
  const {attributes, setAttributes, className, clientId, isSelected, context} = props;
  const {
    preview,
    uniqueId,
    parentClasses,
    showLabel,
    label,
    placeholder,
    showIcon,
    icon,
    isRequired,
    showRequiredSymbol,
    dateFormat,
    customNameAttribute,
    defaultValue
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
    return <img src={zoloParams.blocksPreview.text} alt={__('Text Preview', 'zoloblocks')}/>;
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
  const [selectedDate, setSelectedDate] = useState(defaultValue);
  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
      <Style props={props}/>
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
            <DatePicker
              showIcon={showIcon}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat={dateFormat}
              placeholderText={placeholder}
              name={customNameAttribute || 'date_field'}
              showMonthDropdown
              showYearDropdown
              icon={
                <div className="zolo-input-icon">
                  <DisplayZoloIcon icon={icon}/>
                </div>
              }
            />

            {/*<input type="date" name="date" required={isRequired} placeholder={placeholder}/>*/}
          </div>
        </div>
      </div>
    </>
  );
}
