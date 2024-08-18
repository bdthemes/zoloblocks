import {
  SelectControl,
  __experimentalInputControl as InputControl,
  TextControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {SORT_ORDER} from '../../../src/global/constants';
import {CAT_ORDER_BY} from "./constants";
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

  //get taxonomies
  const allTaxonomyList = zoloParams.get_taxonomies;
  let tpgAllTaxonomies = new Set();
  tpgAllTaxonomies.add({
    value: '',
    label: __('Select Type', 'zoloblocks'),
  });
  for (let tax in allTaxonomyList) {
    let value = allTaxonomyList[tax];
    if (value.public === true) {
      tpgAllTaxonomies.add({
        value: value.name,
        label: value.label,
      });
    }
  }

  let tpgAllTaxonomiesArray = [...tpgAllTaxonomies];

  const containsValue = (array, valueToCheck) => {

    return array.some(item => item.value === valueToCheck);
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
                label={__('In Authors', 'zoloblocks-pro')}
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
                label={__('Ex Authors', 'zoloblocks-pro')}
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
        value={commentQuery?.catItemLimit}
        onChange={(catItemLimit) => {
          setAttributes({commentQuery: {...commentQuery, catItemLimit}});
        }}
        type="number"
        min={1}
        max={99}
        labelPosition="edge"
        __unstableInputWidth="64px"
      />




      <TextControl
        label={__('Parent', 'zoloblocks')}
        value={commentQuery?.catParent}
        onChange={(catParent) => setAttributes({commentQuery: {...commentQuery, catParent}})}
        placeholder={__('Category ID: 12', 'zoloblocks')}
      />

      <SelectControl
        label={__('Order By', 'zoloblocks-pro')}
        value={commentQuery?.catOrderby}
        onChange={(catOrderby) => {
          setAttributes({commentQuery: {...commentQuery, catOrderby}});
        }}
        options={CAT_ORDER_BY}
      />

      <SelectControl
        label={__('Sort Order', 'zoloblocks-pro')}
        value={commentQuery?.catOrder}
        onChange={(catOrder) => {
          setAttributes({commentQuery: {...commentQuery, catOrder}});
        }}
        options={SORT_ORDER}
      />
    </>
  );
};

export default QuerySettings;
