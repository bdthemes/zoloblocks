import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {Spinner} from '@wordpress/components';
import {useEffect, useState} from '@wordpress/element';
import Inspector from './inspector';
import RenderView from './render-view';
import Style from './styles';
import './editor.scss';

export default function Edit(props) {
  const {attributes, setAttributes, isSelected} = props;

  const {
    postQuery,
    preview,
  } = attributes;

  useEffect(() => {
    if (typeof postQuery === 'undefined') {
      setAttributes({
        postQuery: {
          postType: 'post',
          postExclude: [],
          postPerPage: 6,
          postOffset: 0,
          postOrderby: 'date',
          postOrder: 'desc',
          postThumbnail: '',
        },
      });
    }
  }, []);

  const [postResults, setPostResults] = useState([]);
  const [dataSuccess, setDataSuccess] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const apiData = {
        zolo_nonce: zoloParams.zolo_nonce,
        attributes: attributes,
        postQuery: postQuery,
      };
      try {
        const response = await apiFetch({
          path: '/zolo/v1/posts',
          method: 'POST',
          data: apiData,
        });
        if (response.success) {
          setPostResults([...response.data.posts]);
          setDataSuccess(true);
        } else {
          setPostResults([]);
          setDataSuccess(false);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setDataSuccess(false);
      }
    };

    fetchData();
  }, [postQuery]);


  if (Array.isArray(postResults) && postResults.length === 0) {
    return [
      isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>,
      dataSuccess ? (
        <div className="zolo-spinner">
          <Spinner/>
        </div>
      ) : (
        <p>{__('No posts found.', 'zoloblocks')}</p>
      ),
    ];
  }

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview?.postVideoSlider} alt={__('Post video slider Preview', 'zoloblocks')}/>;
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
      <Style props={props}/>
      <RenderView props={props} postResults={postResults}/>
    </>
  );
}
