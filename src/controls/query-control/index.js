import {
  BaseControl,
  SelectControl,
  TextControl,
  __experimentalInputControl as InputControl,
} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import Select2 from 'react-select';
import {SORT_ORDER, ORDER_BY, PRINT_TAXONOMY} from '../../global/constants';
import Select2AjaxControl from "../select2-ajax-control";
import TabDynamicControl from "../tabdynamic-control";

const QueryControl = ({attributes, setAttributes}) => {
  const {postQuery} = attributes;

  const allTermList = zoloParams.all_term_list;
  const allTaxonomyList = zoloParams.get_taxonomies;

  let tpgAllTaxonomies = new Set();

  for (let tax in allTaxonomyList) {
    let value = allTaxonomyList[tax];
    if (postQuery && postQuery.postType && postQuery.postType === value.object_type[0]) {
      tpgAllTaxonomies.add({
        value: value.name,
        name: value.label,
      });
    }
  }

  tpgAllTaxonomies = [...tpgAllTaxonomies];

  const changeTaxonomy = (terms, name) => {
    let postTaxonomies = {
      ...postQuery.postTaxonomies,
      [name]: {
        name: name,
        options: terms,
      },
    };

    setAttributes({postQuery: {...postQuery, postTaxonomies}});
  };

  //get post types
  const PostType = [];
  let getPostType = zoloParams.post_types;
  for (let p in getPostType) {
    PostType.push({value: p, label: __(getPostType[p], 'zoloblocks')});
  }
  const POSTS_TYPE = PostType;
  //get authors
  const AUTHOR_LISTS = zoloParams.get_users;

  return (
    <>
      <SelectControl
        label={__('Source', 'zoloblocks')}
        value={postQuery.postType}
        options={POSTS_TYPE}
        onChange={(postType) => setAttributes({postQuery: {...postQuery, postType}})}
      />

      <TabDynamicControl
        names={['include', 'exclude']}
        include={
          <>
            <Select2AjaxControl
              label={__('Include By', 'zoloblocks')}
              placeholder={__('Search...', 'zoloblocks')}
              sourceName='post_type'
              sourceType={postQuery.postType || 'post'}
              isMulti={true}
              value={postQuery?.postInclude || []}
              onChange={(postInclude) => setAttributes({postQuery: {...postQuery, postInclude}})}
            />
          </>
        }
        exclude={
          <>
            <Select2AjaxControl
              label={__('Exclude By', 'zoloblocks')}
              placeholder={__('Search...', 'zoloblocks')}
              sourceName='post_type'
              sourceType={postQuery.postType || 'post'}
              isMulti={true}
              value={postQuery?.postExclude || []}
              onChange={(postExclude) => setAttributes({postQuery: {...postQuery, postExclude}})}
            />
          </>
        }
      />

      {tpgAllTaxonomies.map((tax, index) => (
        <BaseControl label={__('By ', 'zoloblocks') + tax.name} key={index}>
          <Select2
            classNamePrefix="zolo-select"
            options={PRINT_TAXONOMY(allTermList[tax.value])}
            value={
              Object.keys(postQuery.postTaxonomies).length > 0
                ? postQuery.postTaxonomies[tax.value] !== undefined
                  ? postQuery.postTaxonomies[tax.value].options
                  : []
                : []
            }
            onChange={(value) => changeTaxonomy(value, tax.value)}
            isMulti={true}
            closeMenuOnSelect={false}
          />
        </BaseControl>
      ))}

      <BaseControl label={__('Author By', 'zoloblocks')}>
        <Select2
          classNamePrefix="zolo-select"
          options={AUTHOR_LISTS}
          value={postQuery.postAuthors}
          onChange={(postAuthors) => setAttributes({postQuery: {...postQuery, postAuthors}})}
          isMulti={true}
          closeMenuOnSelect={false}
        />
      </BaseControl>

      <InputControl
        label={__('Item Limit', 'zoloblocks')}
        value={postQuery.postPerPage}
        onChange={(postPerPage) => {
          setAttributes({postQuery: {...postQuery, postPerPage}});
        }}
        type="number"
        min={1}
        max={99}
        labelPosition="edge"
        __unstableInputWidth="64px"
      />

      <InputControl
        label={__('Offset', 'zoloblocks')}
        value={postQuery.postOffset}
        onChange={(postOffset) => {
          setAttributes({postQuery: {...postQuery, postOffset}});
        }}
        type="number"
        min={1}
        max={99}
        labelPosition="edge"
        __unstableInputWidth="64px"
      />

      <SelectControl
        label={__('Order By', 'zoloblocks')}
        value={postQuery.postOrderby}
        onChange={(postOrderby) => {
          setAttributes({postQuery: {...postQuery, postOrderby}});
        }}
        options={ORDER_BY}
      />

      <SelectControl
        label={__('Sort Order', 'zoloblocks')}
        value={postQuery.postOrder}
        onChange={(postOrder) => {
          setAttributes({postQuery: {...postQuery, postOrder}});
        }}
        options={SORT_ORDER}
      />
    </>
  );
};

export default QueryControl;
