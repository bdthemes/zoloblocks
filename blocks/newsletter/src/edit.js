/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";

/**
 * Internal dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import Inspector from "./inspector";
import Style from "./style";

export default function Edit(props) {
  const { attributes, setAttributes, isSelected } = props;
  const {
    preview,
    uniqueId,
    parentClasses,
    preset,
    placeholder,
    buttonType,
    buttonIcon,
    buttonText,
    labelText,
    btnLayoutType,
    showButtonText,
    showIcon,
  } = attributes;

  const blockProps = useBlockProps({
    className: classnames(
      uniqueId,
      `zolo-newsletter ${preset}`,
      classArrayToStr(parentClasses),
    ),
  });

  // preview image
  if (preview) {
    return (
      <img
        src={zoloParams.blocksPreview.advancedSearch}
        alt={__("Advanced Search", "zoloblocks")}
      />
    );
  }

  const formPreventDefault = (e) => {
    e.preventDefault();
  };

  return (
      <>
          {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
          <Style props={props} />
          <div {...blockProps}>
              <form
                  className={`zolo-newslatter-form ${preset} ${preset === 'zolo-newslatter-4' ? btnLayoutType : ''}`}
                  onSubmit={formPreventDefault}
                  role="search"
                  action={zoloParams.home_url}
                  method="get"
              >
                  <div className="zolo-form-control" role="tablist">
                      <input type="name" name="name" placeholder={placeholder} className="zolo-form-input" />
                      <label htmlFor={uniqueId} className="zolo-form-label">
                          {__('Full Name', 'zolo-newsletter')}
                      </label>
                  </div>

                  <div className="zolo-form-control" role="tablist">
                      <input type="email" name="email" placeholder={placeholder} className="zolo-form-input" />
                      {/* {preset == "zolo-search-2" && ( */}
                      <label htmlFor={uniqueId} className="zolo-form-label">
                          {labelText}
                      </label>
                      {/* )} */}
                  </div>

                  <div className="zolo-form-control zolo-form-submit-btn">
                      {showIcon || showButtonText ? (
                          <button type="submit" className="zolo-form-btn">
                              {showButtonText && (
                                  <RichText
                                      tagName="span"
                                      placeholder={__('Search', 'zolo-newsletter')}
                                      value={buttonText}
                                      onChange={(value) => setAttributes({ buttonText: value })}
                                      className="zolo-form-btn-text"
                                      multiline={false}
                                      allowedFormats={['core/bold', 'core/italic', 'core/strikethrough']}
                                  />
                              )}
                              {showIcon && (
                                  <span className="zolo-newsletter-icon-wrap">
                                      <DisplayZoloIcon icon={buttonIcon} />
                                  </span>
                              )}
                          </button>
                      ) : null}
                  </div>
              </form>
              <span class="zolo-newsletter-info-text">Thank you for subscribing!</span>
          </div>
      </>
  );
}
