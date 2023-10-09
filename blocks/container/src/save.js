import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';


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
        className: classnames(
          uniqueId,
          isBlockRootParent ? `${containerWidthType} zolo-root-container` : '',
          'frontend'
        ),
      })}
    >

      {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
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
