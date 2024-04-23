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
        className: classnames(
          uniqueId,
          `zolo-advanced-search ${preset}`,
          classArrayToStr(parentClasses),
        ),
      })}
      {...(zoloId && {
        id: zoloId,
      })}
    >
      <form
        className={`zolo-form-wrap ${btnLayoutType}`}
        onSubmit={formPreventDefault}
        role="search"
        action={zoloParams.home_url}
        method="get"
      >
        <div
          className="zolo-advanced-search-control zolo-form-search-input"
          role="tablist"
        >
          <input
            type="search"
            name="s"
            placeholder={placeholder}
            className="zolo-form-input"
          />
          {preset == "zolo-search-2" && (
            <label htmlFor={uniqueId} className="zolo-form-label">
              {labelText}
            </label>
          )}
        </div>
        <div className="zolo-advanced-search-control zolo-form-submit-btn">
          {
            showButtonText || showIcon ? (
              <button className="zolo-form-btn" type="submit">
            {showButtonText && (
              <RichText.Content
                tagName="span"
                className="zolo-form-btn-text"
                value={buttonText}
              />
            )}
            {showIcon && (
              <span className="zolo-advanced-search-icon-wrap">
                <DisplayZoloIcon icon={buttonIcon} />
              </span>
            )}
          </button>
            ) : null
          }
        </div>
      </form>
    </div>
  );
};

export default Save;
