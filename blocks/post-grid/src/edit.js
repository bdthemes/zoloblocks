import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';

const { Pagination, classArrayToStr } = window.zoloModule;

import Style from './styles';

export default function Edit(props) {
  const { attributes, setAttributes, className, isSelected } = props;
  const { uniqueId, parentClasses, postQuery, preset, page } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} zolo-post-grid-wrap zolo-post-${preset}`, classArrayToStr(parentClasses)),
  });

  useEffect(() => {
    if (typeof postQuery === 'undefined') {
      setAttributes({
        postQuery: {
          postType: 'post',
          postInclude: [],
          postExclude: [],
          postAuthors: [],
          postTaxonomies: {},
          postPerPage: 6,
          postOffset: 0,
          postOrderby: 'date',
          postOrder: 'desc',
          postThumbnail: '',
          showPagination: false,
        },
      });
    }
  }, []);

  const [postResults, setPostResults] = useState([]);
  const [dataSuccess, setDataSuccess] = useState(true);
  const [pageTotal, setPageTotal] = useState(0);

  useEffect(() => {
    let paginationLimit = 0;
    paginationLimit = postQuery?.postPerPage;

    const apiData = {
      zolo_nonce: zoloParams.zolo_nonce,
      attributes: attributes,
      postQuery: postQuery,
    };

    apiFetch({
      path: '/zolo/v1/posts',
      method: 'POST',
      data: apiData,
    })
      .then((response) => {
        if (response.success) {
          setPostResults([...response.data.posts]);
          setPageTotal(response.data.total_page);
          setDataSuccess(response.success);
        } else {
          setPostResults([]);
          setPageTotal(0);
          setDataSuccess(response.success);
        }
      })
      .catch((error) => console.log(error));
  }, [postQuery]);

  if (Array.isArray(postResults) && postResults.length === 0) {
    return [
      isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />,
      dataSuccess ? (
        <div className="zolo-spinner">
          <Spinner />
        </div>
      ) : (
        <p>{__('No posts found.', 'zolo-blocks')}</p>
      ),
    ];
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
      <Style props={props} />
      <div {...blockProps}>
        <RenderView attributes={attributes} setAttributes={setAttributes} postResults={postResults} />
      </div>
      {postQuery?.showPagination && pageTotal > 1 && (
        <Pagination total={pageTotal} current={page || 1} prevText="" nextText="" onClickPage={(page) => setAttributes({ page })} />
      )}
    </>
  );
}
