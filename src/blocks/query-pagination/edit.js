import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useMemo } from '@wordpress/element';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';

const { classArrayToStr, SidebarOpener, DynamicTag } = window.zoloModule;

import Style from './styles';
import previewPaginationNumbers from './editor-preview';

export default function Edit(props) {
  const { attributes, setAttributes, className, isSelected, clientId, context: { postType, postId } } = props;
  const {
    preview,
    uniqueId,
    parentClasses,
  } = attributes;

  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} `, classArrayToStr(parentClasses)),
  });

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview?.postTitle} alt={__('Post Title', 'zoloblocks')} />;
  }

  const paginationNumbers = useMemo(() => {
    return previewPaginationNumbers(
      10,
      attributes?.truncatePaginationNumbers && attributes?.PaginationNumberAmountBothSides ? attributes?.PaginationNumberAmountBothSides : 3,
      5,
      attributes?.truncatePaginationNumbers || false,
      attributes?.paginationType || 'number',
      attributes?.paginationNextPrevType || 'text',
      attributes?.paginationPreviousText || __('Previous', 'zoloblocks'),
      attributes?.paginationNextText || __('Next', 'zoloblocks'),
      attributes?.nextIcon || '',
      attributes?.prevIcon || ''
    );
  }, [JSON.stringify(attributes)]);

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
      <Style props={props} />
      <div {...blockProps}>
        <SidebarOpener clientId={clientId} />
        <div className="zolo-query-pagination-wrapper">
          {paginationNumbers}
        </div>
      </div>
    </>
  );
}
