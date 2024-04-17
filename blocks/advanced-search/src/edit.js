/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";

/**
 * Internal depencencies
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
  } = attributes;

  const blockProps = useBlockProps({
    className: classnames(uniqueId, classArrayToStr(parentClasses)),
  });

  // preview image
  if (preview) {
    return (
      <img
        src={zoloParams.blocksPreview.cta}
        alt={__("Advanced Search", "zolo-blocks")}
      />
    );
  }

  const formPreventDefault = (e) => {
    e.preventDefault();
    this.bind(e);
  };

  return (
    <>
      {isSelected && (
        <Inspector attributes={attributes} setAttributes={setAttributes} />
      )}
      <Style props={props} />
      <div {...blockProps}>
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
                <RichText
                  tagName="span"
                  placeholder={__("Search", "zolo-advanced-search")}
                  value={buttonText}
                  onChange={(value) => setAttributes({ buttonText: value })}
                  className="zolo-advanced-search-button-text"
                  multiline={false}
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/strikethrough",
                  ]}
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
