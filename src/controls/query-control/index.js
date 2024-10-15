import {BaseControl, SelectControl, __experimentalInputControl as InputControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import Select2 from 'react-select';
import {SORT_ORDER, ORDER_BY, PRINT_TAXONOMY, INCLUDE_BY, EXCLUDE_BY} from '../../global/constants';
import Select2AjaxControl from '../select2-ajax-control';
import TabDynamicControl from '../tabdynamic-control';
import {applyFilters} from '@wordpress/hooks';
import {useSelect, select} from '@wordpress/data';
import {getTaxonomies} from '../../helpers/helper';

const QueryControl = ({attributes, setAttributes}) => {
  const {postQuery} = attributes;

  const allTermList = zoloParams.all_term_list;
  const zoloAllTaxonomies = getTaxonomies(postQuery?.postType || 'post', zoloParams.get_taxonomies);

  const changeIncludeTaxonomy = (terms, name) => {
    let postIncludeTaxonomies = {
      ...postQuery?.postIncludeTaxonomies,
      [name]: {
        name: name,
        options: terms,
      },
    };
    setAttributes({postQuery: {...postQuery, postIncludeTaxonomies}});
  };

  const changeExcludeTaxonomy = (terms, name) => {
    let postExcludeTaxonomies = {
      ...postQuery?.postExcludeTaxonomies,
      [name]: {
        name: name,
        options: terms,
      },
    };
    setAttributes({postQuery: {...postQuery, postExcludeTaxonomies}});
  };

  //get post types
  const PostType = [];
  let getPostType = zoloParams.post_types;
  for (let p in getPostType) {
    PostType.push({value: p, label: __(getPostType[p], 'zoloblocks')});
  }
  PostType.push({value: 'current_post', label: __('Current Post', 'zoloblocks')});
  PostType.push({value: 'related_posts', label: __('Related Posts', 'zoloblocks')});

  //get authors
  const AUTHOR_LISTS = zoloParams.get_users;

  //get block name
  const blockName = useSelect((select) => {
    const {getSelectedBlock} = select('core/block-editor');
    const block = getSelectedBlock();
    return block?.name || '';
  }, []);

  const afterSourceControl = applyFilters('zolo.blocks.queryControl.afterSource', [], {
    attributes,
    setAttributes
  }, blockName);

  // Get the current post type
  const currentPostType = select('core/editor').getCurrentPostType();
  const currentPostId = select('core/editor').getCurrentPostId();
  return (
    <>
      <SelectControl
        label={__('Source', 'zoloblocks')}
        value={postQuery?.postType}
        options={PostType}
        onChange={(postType) => setAttributes({postQuery: {...postQuery, postType,currentPostId,currentPostType}})}
      />

      {'current_post' !== postQuery?.postType && (
        <>
          {afterSourceControl && afterSourceControl.length > 0 && afterSourceControl}
          <TabDynamicControl
            names={['include', 'exclude']}
            include={
              <>
                <BaseControl label={__('Include By', 'zoloblocks')} className="zolo-flex-col-control">
                  <Select2
                    classNamePrefix="zolo-select"
                    options={INCLUDE_BY}
                    value={postQuery?.postIncludeBy || []}
                    onChange={(postIncludeBy) => {
                      let updatedPostQuery = {...postQuery, postIncludeBy};

                      if (postIncludeBy.length === 0 && postQuery?.postIncludeBy?.length > 0) {
                        updatedPostQuery = {
                          ...updatedPostQuery,
                          postIncludeTaxonomies: {},
                          postIncludeAuthors: [],
                        };
                      } else {
                        const removedItem = postQuery?.postIncludeBy?.find(
                          (item) => !postIncludeBy.some((selectedItem) => selectedItem.value === item.value)
                        );

                        if (removedItem) {
                          switch (removedItem.value) {
                            case 'authors':
                              updatedPostQuery = {
                                ...updatedPostQuery,
                                postIncludeAuthors: [],
                              };
                              break;
                            case 'terms':
                              updatedPostQuery = {
                                ...updatedPostQuery,
                                postIncludeTaxonomies: {},
                              };
                              break;
                            default:
                              break;
                          }
                        }
                      }

                      setAttributes({postQuery: updatedPostQuery});
                    }}
                    isMulti={true}
                    closeMenuOnSelect={false}
                  />
                </BaseControl>

                {postQuery?.postIncludeBy?.some((item) => item.value === 'authors') && (
                  <BaseControl label={__('Authors', 'zoloblocks')}>
                    <Select2
                      classNamePrefix="zolo-select"
                      options={AUTHOR_LISTS}
                      value={postQuery?.postIncludeAuthors}
                      onChange={(postIncludeAuthors) => setAttributes({postQuery: {...postQuery, postIncludeAuthors}})}
                      isMulti={true}
                      closeMenuOnSelect={false}
                    />
                  </BaseControl>
                )}

                {postQuery?.postIncludeBy?.some((item) => item.value === 'terms') &&
                  zoloAllTaxonomies.map((tax, index) => (
                    <BaseControl label={tax.label} key={index}>
                      <Select2
                        classNamePrefix="zolo-select"
                        options={PRINT_TAXONOMY(allTermList[tax.value])}
                        value={postQuery?.postIncludeTaxonomies?.[tax.value]?.options || []}
                        onChange={(value) => changeIncludeTaxonomy(value, tax.value)}
                        isMulti={true}
                        closeMenuOnSelect={false}
                      />
                    </BaseControl>
                  ))}
              </>
            }
            exclude={
              <>
                <BaseControl label={__('Exclude By', 'zoloblocks')} className="zolo-flex-col-control">
                  <Select2
                    classNamePrefix="zolo-select"
                    options={EXCLUDE_BY}
                    value={postQuery?.postExcludeBy || []}
                    onChange={(postExcludeBy) => {
                      let updatedPostQuery = {...postQuery, postExcludeBy};

                      if (postExcludeBy.length === 0 && postQuery?.postExcludeBy?.length > 0) {
                        updatedPostQuery = {
                          ...updatedPostQuery,
                          postExcludeTaxonomies: {},
                          postExcludeAuthors: [],
                          postExclude: [],
                        };
                      } else {
                        const removedItem = postQuery?.postExcludeBy?.find(
                          (item) => !postExcludeBy.some((selectedItem) => selectedItem.value === item.value)
                        );

                        if (removedItem) {
                          switch (removedItem.value) {
                            case 'authors':
                              updatedPostQuery = {
                                ...updatedPostQuery,
                                postExcludeAuthors: [],
                              };
                              break;
                            case 'terms':
                              updatedPostQuery = {
                                ...updatedPostQuery,
                                postExcludeTaxonomies: {},
                              };
                              break;
                            case 'manual_selection':
                              updatedPostQuery = {
                                ...updatedPostQuery,
                                postExclude: [],
                              };
                              break;
                            default:
                              break;
                          }
                        }
                      }

                      setAttributes({postQuery: updatedPostQuery});
                    }}
                    isMulti={true}
                    closeMenuOnSelect={false}
                  />
                </BaseControl>

                {postQuery?.postExcludeBy?.some((item) => item.value === 'manual_selection') && (
                  <Select2AjaxControl
                    label={__('Search & Select', 'zoloblocks')}
                    placeholder={__('Type & search', 'zoloblocks')}
                    sourceName="post_type"
                    sourceType={postQuery?.postType || 'post'}
                    isMulti={true}
                    value={postQuery?.postExclude || []}
                    onChange={(postExclude) => setAttributes({postQuery: {...postQuery, postExclude}})}
                  />
                )}

                {postQuery?.postExcludeBy?.some((item) => item.value === 'authors') && (
                  <BaseControl label={__('Authors', 'zoloblocks')}>
                    <Select2
                      classNamePrefix="zolo-select"
                      options={AUTHOR_LISTS}
                      value={postQuery?.postExcludeAuthors}
                      onChange={(postExcludeAuthors) => setAttributes({postQuery: {...postQuery, postExcludeAuthors}})}
                      isMulti={true}
                      closeMenuOnSelect={false}
                    />
                  </BaseControl>
                )}

                {postQuery?.postExcludeBy?.some((item) => item.value === 'terms') &&
                  zoloAllTaxonomies.map((tax, index) => (
                    <BaseControl label={tax.label} key={index}>
                      <Select2
                        classNamePrefix="zolo-select"
                        options={PRINT_TAXONOMY(allTermList[tax.value])}
                        value={postQuery?.postExcludeTaxonomies?.[tax.value]?.options || []}
                        onChange={(value) => changeExcludeTaxonomy(value, tax.value)}
                        isMulti={true}
                        closeMenuOnSelect={false}
                      />
                    </BaseControl>
                  ))}
              </>
            }
          />

          <InputControl
            label={__('Item Limit', 'zoloblocks')}
            value={postQuery?.postPerPage}
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
            value={postQuery?.postOffset}
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
            value={postQuery?.postOrderby}
            onChange={(postOrderby) => {
              setAttributes({postQuery: {...postQuery, postOrderby}});
            }}
            options={ORDER_BY}
          />

          <SelectControl
            label={__('Sort Order', 'zoloblocks')}
            value={postQuery?.postOrder}
            onChange={(postOrder) => {
              setAttributes({postQuery: {...postQuery, postOrder}});
            }}
            options={SORT_ORDER}
          />

        </>
      )}
    </>
  );
};

export default QueryControl;
