import { RichText, useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";

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
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
      })}
      {...(zoloId && {
        id: zoloId,
      })}
    >
      <div className={`zolo-advanced-search ${preset}`}>
        <form
          className="zolo-advanced-search-form"
          onSubmit={formPreventDefault}
          role="search"
          action={zoloParams.home_url}
          method="get"
        >
          <div className="zolo-advanced-search-form-container" role="tablist">
            <input
              className="zolo-advanced-search-form__input"
              type="search"
              name="s"
              title="Search"
              placeholder={placeholder}
            />
            <button className="zolo-advanced-search-submit" type="submit">
              {"button" === buttonType && (
                <span className="zolo-advanced-search-icon-wrap">
                  <DisplayZoloIcon icon={buttonIcon} />
                </span>
              )}
              {"text" === buttonType && (
                <RichText.Content
                  tagName="span"
                  className="zolo-advanced-search-button-text"
                  value={buttonText}
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Save;
