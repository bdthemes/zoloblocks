import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import attributes from '../../attributes';

const v1 = {
    attributes: {
      ...attributes,
    },
  save({ attributes }){
    const { uniqueId, parentClasses, preset, zoloId, showLabel, label, placeholder, showIcon, icon, isRequired, showRequiredSymbol, requiredMsg } =
      attributes;

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

            <input
              type="text"
              name="name"
              placeholder={placeholder}
              required={isRequired}
              {...(isRequired && { 'data-pristine-required-message': requiredMsg })}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default v1;
