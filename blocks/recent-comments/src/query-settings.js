import {
  SelectControl,
  __experimentalInputControl as InputControl,
  ToggleControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {SORT_ORDER} from '../../../src/global/constants';
import {COMMENT_ORDER_BY,STATUS} from "./constants";
import Select2 from 'react-select';

const {
  TabDynamicControl,
  Select2AjaxControl
} = window.zoloModule;

const QuerySettings = ({attributes, setAttributes}) => {
  const {commentQuery} = attributes;
  //get post types
  const PostType = [];
  let getPostType = zoloParams.post_types;
  for (let p in getPostType) {
    PostType.push({value: p, label: __(getPostType[p], 'zoloblocks')});
  }


  return (
    <>
      <SelectControl
        label={__('Post Type', 'zoloblocks')}
        value={commentQuery?.sourceType}
        options={PostType}
        onChange={(sourceType) => setAttributes({commentQuery: {...commentQuery, sourceType}})}
      />

      <TabDynamicControl
        names={['include', 'exclude']}
        include={
          <>
            <Select2
              classNamePrefix="zolo-select"
              options={[{label: 'Author', value: 'author'}]}
              value={commentQuery?.includeBy || []}
              onChange={(includeBy) => setAttributes({commentQuery: {...commentQuery, includeBy}})}
              isMulti={true}
              closeMenuOnSelect={false}
            />

            {(commentQuery?.includeBy?.some(item => item.value === 'author')) && (
              <Select2AjaxControl
                label={__('Authors', 'zoloblocks-pro')}
                placeholder={__('Search...', 'zoloblocks-pro')}
                sourceName='user'
                sourceType={''}
                isMulti={true}
                value={commentQuery?.includeAuthors || []}
                onChange={(includeAuthors) => setAttributes({commentQuery: {...commentQuery, includeAuthors}})}
              />
            )}
          </>

        }
        exclude={
          <>
            <Select2
              classNamePrefix="zolo-select"
              options={[{label: 'Author', value: 'author'}]}
              value={commentQuery?.excludeBy || []}
              onChange={(excludeBy) => setAttributes({commentQuery: {...commentQuery, excludeBy}})}
              isMulti={true}
              closeMenuOnSelect={false}
            />

            {(commentQuery?.excludeBy?.some(item => item.value === 'author')) && (
              <Select2AjaxControl
                label={__('Authors', 'zoloblocks-pro')}
                placeholder={__('Search...', 'zoloblocks-pro')}
                sourceName='user'
                sourceType={''}
                isMulti={true}
                value={commentQuery?.excludeAuthors || []}
                onChange={(excludeAuthors) => setAttributes({commentQuery: {...commentQuery, excludeAuthors}})}
              />
            )}


          </>
        }
      />


      <InputControl
        label={__('Item Limit', 'zoloblocks-pro')}
        value={commentQuery?.itemLimit}
        onChange={(itemLimit) => {
          setAttributes({commentQuery: {...commentQuery, itemLimit}});
        }}
        type="number"
        min={1}
        max={99}
        labelPosition="edge"
        __unstableInputWidth="64px"
      />

      <InputControl
        label={__('Offset', 'zoloblocks-pro')}
        value={commentQuery?.offset}
        onChange={(offset) => {
          setAttributes({commentQuery: {...commentQuery, offset}});
        }}
        type="number"
        min={1}
        max={99}
        labelPosition="edge"
        __unstableInputWidth="64px"
      />
      <ToggleControl
        label={__('Only Parent', 'zoloblocks-pro')}
        checked={commentQuery?.onlyParent}
        onChange={(onlyParent) => setAttributes({commentQuery: {...commentQuery, onlyParent}})}
      />

      <SelectControl
        label={__('Status', 'zoloblocks-pro')}
        value={commentQuery?.statusComment}
        onChange={(statusComment) => {
          setAttributes({commentQuery: {...commentQuery, statusComment}});
        }}
        options={STATUS}
      />

      <SelectControl
        label={__('Order By', 'zoloblocks-pro')}
        value={commentQuery?.orderBy}
        onChange={(orderBy) => {
          setAttributes({commentQuery: {...commentQuery, orderBy}});
        }}
        options={COMMENT_ORDER_BY}
      />

      <SelectControl
        label={__('Sort Order', 'zoloblocks-pro')}
        value={commentQuery?.order}
        onChange={(order) => {
          setAttributes({commentQuery: {...commentQuery, order}});
        }}
        options={SORT_ORDER}
      />
    </>
  );
};

export default QuerySettings;
