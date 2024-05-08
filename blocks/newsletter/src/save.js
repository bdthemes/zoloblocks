import { RichText, useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";

import { __ } from "@wordpress/i18n";
/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const formPreventDefault = (e) => {
  e.preventDefault();
};
const Save = ({ attributes }) => {
  const {
      uniqueId,
      parentClasses,
      preset,
      zoloId,
      placeholder,
      buttonType,
      buttonText,
      buttonIcon,
      showLabel,
      labelText,
      btnLayoutType,
      showIcon,
      showButtonText,
  } = attributes;
  return (
      <div
          {...useBlockProps.save({
              className: classnames(uniqueId, `zolo-newsletter ${preset}`, classArrayToStr(parentClasses)),
          })}
          {...(zoloId && {
              id: zoloId,
          })}
      >
          <form
              className={`zolo-newslatter-form ${preset} ${preset === 'zolo-newslatter-4' ? btnLayoutType : ''}`}
              onSubmit={formPreventDefault}
              role="search"
              action={zoloParams.home_url}
              method="get"
          >
              <div className="zolo-form-control" role="tablist">
                  <input type="name" name="name" id="zolo-newsletter-name-field" placeholder={placeholder} className="zolo-form-input" />
                  <label htmlFor={uniqueId} className="zolo-form-label">
                      {__('Full Name', 'zolo-newsletter')}
                  </label>
              </div>

              <div className="zolo-form-control" role="tablist">
                  <input
                      type="email"
                      name="email"
                      id="zolo-newsletter-email-field"
                      placeholder={placeholder}
                      className="zolo-form-input"
                      required
                  />
                  <label htmlFor={uniqueId} className="zolo-form-label">
                      {labelText}
                  </label>
              </div>
              <div className="zolo-form-control zolo-form-submit-btn">
                  {showButtonText || showIcon ? (
                      <button className="zolo-form-btn" type="submit">
                          {showButtonText && <RichText.Content tagName="span" className="zolo-form-btn-text" value={buttonText} />}
                          {showIcon && (
                              <span className="zolo-newsletter-icon-wrap">
                                  <DisplayZoloIcon icon={buttonIcon} />
                              </span>
                          )}
                      </button>
                  ) : null}
              </div>
          </form>
      </div>
  );
};

export default Save;
