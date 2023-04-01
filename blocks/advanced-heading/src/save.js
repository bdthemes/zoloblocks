import { RichText, useBlockProps } from "@wordpress/block-editor";
const {
  DynamicTag
} = window.zoloModule;

const Save = ({ attributes }) => {
  const {
    uniqueId,
    //settings
    titleText,
    subTitleText,
    showSubTitle,
    titleTagName,
    showSeparator,
    subTitleTagName,
    showTransparentTitle,
    transparentTitleText,
    separatorPosition,
    subTitlePosition,
    //styles
    styles
  } = attributes;

  return (
    <div {...useBlockProps.save()}>

      <div className={`zolo-block-wrapper zolo-advanced-heading ${'zolo-ah-' + styles} ${uniqueId}`}>

        {showTransparentTitle && <h3 class="zolo-transparent-heading">{transparentTitleText}</h3>}

        {showSeparator && separatorPosition === "top" && (
          <div className="zolo-ah-separator"></div>
        )}

        {(showSubTitle && subTitlePosition == 'top') && (
          <RichText.Content
            tagName={subTitleTagName}
            className="zolo-ah-subtitle"
            value={subTitleText}
            formattingControl={["bold", "italic"]}
          />
        )}

        <DynamicTag tagName={titleTagName} className='zolo-ah-title'>
          <RichText.Content
            tagName={'span'}
            className="zolo-ah-main-title"
            value={titleText}
            formattingControl={["bold", "italic"]}
          />
        </DynamicTag>

        {(showSubTitle && subTitlePosition == 'bottom') && (
          <RichText.Content
            tagName={subTitleTagName}
            className="zolo-ah-subtitle"
            value={subTitleText}
            formattingControl={["bold", "italic"]}
          />
        )}

        {showSeparator && separatorPosition === "bottom" && (
          <div className="zolo-ah-separator"></div>
        )}

      </div>
    </div>
  )
}

export default Save;
