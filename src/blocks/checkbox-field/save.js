import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, preset, zoloId, showLabel, label, showIcon, icon, isRequired, showRequiredSymbol, requiredMsg } =
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

                  {optionData.length > 0 &&
                    optionData.map((option) => (
                        <label htmlFor={option.value}>
                          <input
                            id={option.value}
                            name={fieldName}
                            value={option.value}
                            checked={defaultValue === option.value}
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
