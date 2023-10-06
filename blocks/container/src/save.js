import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';


const Save = ({ attributes }) => {
  const {
    uniqueId,
    isBlockRootParent,
    containerWidthType,
    contentWidthType,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: uniqueId,
      })}
    >

      {isBlockRootParent && 'full_width' === containerWidthType && 'boxed' === contentWidthType ? (
        <div className="zolo-container-inner-blocks-wrap">
          <InnerBlocks.Content />
        </div>
      ) : (
        <InnerBlocks.Content />
      )}
    </div>
  );
};

export default Save;
