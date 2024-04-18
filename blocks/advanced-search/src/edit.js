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
    showLabel,
    labelText,
  } = attributes;

  const blockProps = useBlockProps({
    className: classnames(
      uniqueId,
      `zolo-advanced-search ${preset}`,
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
      {isSelected && (
        <Inspector attributes={attributes} setAttributes={setAttributes} />
      )}
      <Style props={props} />
      <div {...blockProps}>
          <form
            className="zolo-form-wrap zolo-search-button-style-1"
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
              {
                showLabel && (
                  <label
                    htmlFor={uniqueId}
                    className="zolo-form-label"
                  >
                    {labelText}
                  </label>
                )
              }
            </div>
            <div className="zolo-advanced-search-control zolo-form-submit-btn">
              <button type="submit" className="zolo-form-btn">
                {"text" === buttonType && (
                  <RichText
                    tagName="span"
                    placeholder={__("Search", "zolo-advanced-search")}
                    value={buttonText}
                    onChange={(value) => setAttributes({ buttonText: value })}
                    className="zolo-form-btn-text"
                    multiline={false}
                    allowedFormats={[
                      "core/bold",
                      "core/italic",
                      "core/strikethrough",
                    ]}
                  />
                )}
                {"icon" === buttonType && (
                  <span className="zolo-advanced-search-icon-wrap">
                    <DisplayZoloIcon icon={buttonIcon} />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
    </>
  );
}
