import {
  useBlockProps
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import classnames from 'classnames';
import {
  BLOCK_PREFIX
} from './constants';
import Inspector from './inspector';
import styles from './styles';
const {
  handleUniqueId,
  softMinifyCssStrings,
} = window.zoloModule;

export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const { uniqueId, postQuery } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  useEffect(() => {
    handleUniqueId({
      BLOCK_PREFIX,
      uniqueId,
      setAttributes,
      clientId,
    });
  }, []);

  //generate all style
  const allStyle = styles({
    attributes,
    setAttributes
  })

  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} ${'zolo-post-grid-' + styles}`),
  });

  //query change effect
  // const [queryEffect, setQueryEffect] = useState(false);
  // const changeQuery = () => {
  //   setQueryEffect(!queryEffect);
  // }

  useEffect(() => {
    if (typeof (postQuery) === 'undefined') {
      setAttributes({
        postQuery: {
          postType: 'post',
          postInclude: '',
          postExclude: '',
          postAuthors: [],
          postTaxonomies: {},
          postPerPage: 6,
          postOffset: 0,
          postOrderby: 'date',
          postOrder: 'desc',
        }
      })
    }
  }, []);



  return (
    <>
      {isSelected && (
        <Inspector
          attributes={attributes}
          setAttributes={setAttributes}
        />
      )}
      <style>{`${softMinifyCssStrings(allStyle)}`}</style>

      <div {...blockProps}>

        <h1>Post Grid</h1>

      </div>
    </>
  );
}
