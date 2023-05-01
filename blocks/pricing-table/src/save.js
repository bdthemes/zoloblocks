import { useBlockProps } from "@wordpress/block-editor";
const {
  DynamicTag,
  DisplayIcon
} = window.zoloModule;

const Save = ({ attributes }) => {
  const {
    uniqueId,
    //settings
    styles

  } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div className={`zolo-block-wrapper zolo-pricing-table ${'zolo-ah-' + styles} ${uniqueId}`}>
        <h1>save pricing table</h1>
      </div>
    </div>
  )
}

export default Save;
