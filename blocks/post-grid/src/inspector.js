import {
  InspectorControls
} from '@wordpress/block-editor';
import {
  BaseControl,
  PanelBody,
  SelectControl,
  TabPanel,
  TextControl,
  __experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Select2 from 'react-select';
import objAttributes from './attributes';
import {
  POSTS_TYPE,
  SORT_ORDER,
  ORDER_BY,
  AUTHOR_LISTS,
  CONTAINER_MARGIN,
  CONTAINER_PADDING,
  PRESETS,
  PRINT_TAXONOMY
} from './constants';

const {
  ResRangeControl,
  ResDimensionsControl,
  ColorControl
} = window.zoloModule;


function Inspector({ attributes, setAttributes }) {

  const {
    preset,
    resMode,
    postQuery
  } = attributes;

  const resRequiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };

  const changePremade = (selected) => {
    setAttributes({ preset: selected });
    // switch (selected) {
    // 	case 'default':
    // 		setAttributes({
    // 			showTestimonialMessage: false,
    // 		});
    // 		break;
    // 	case 'style-1':
    // 		setAttributes({
    // 			showTestimonialMessage: false,
    // 		});
    // 		break;
    // 	case 'style-2':
    // 		setAttributes({
    // 			showTestimonialMessage: false,
    // 		});
    // 		break;
    // 	default:
    // 		setAttributes({
    // 			showTestimonialMessage: false,
    // 		});
    // 		break;
    // }
  };

  const changeTaxonomy = (terms, name) => {
    let postTaxonomies = {
      ...postQuery.postTaxonomies,
      [name]: {
        'name': name,
        'options': terms,
      }
    }
    setAttributes({ postQuery: { ...postQuery, postTaxonomies } });
  }


  const allTermList = zoloParams.all_term_list;
  const allTaxonomyList = zoloParams.get_taxonomies;

  // const taxonomyListOptions = [
  //   { value: 'category', label: 'Categories' },
  //   { value: 'post_tag', label: 'Tags' }
  // ];

  let tpgAllTaxonomies = new Set();
  for (let tax in allTaxonomyList) {
    let value = allTaxonomyList[tax];
    if (value.object_type[0] === postQuery.postType) {
      tpgAllTaxonomies.add({
        value: value.name, name: value.label
      });
    }
  }
  tpgAllTaxonomies = [...tpgAllTaxonomies];

  return (
    <InspectorControls key="controls">
      <div className="zolo-panel-control">
        <TabPanel
          className="zolo-parent-tab-panel"
          activeClass="active-tab"
          tabs={[
            {
              name: 'settings',
              title: __('Settings', 'zolo-blocks'),
              className: 'zolo-tab settings',
            },
            {
              name: 'design',
              title: __('Design', 'zolo-blocks'),
              className: 'zolo-tab design',
            },
            {
              name: 'advanced',
              title: __('Advanced', 'zolo-blocks'),
              className: 'zolo-tab advanced',
            },
          ]}
        >
          {(tab) => (
            <div className={'zolo-tab-controls' + tab.name}>
              {tab.name === 'settings' && (
                <>
                  <PanelBody title={__('Query', 'zolo-blocks')} initialOpen={true} >
                    <SelectControl
                      label={__('Source', 'zolo-blocks')}
                      value={postQuery.postType}
                      options={POSTS_TYPE}
                      onChange={(postType) =>
                        setAttributes({ postQuery: { ...postQuery, postType } })
                      }
                    />

                    <BaseControl label={__('By Author', 'zolo-block')}>
                      <Select2
                        options={AUTHOR_LISTS}
                        value={postQuery.postAuthors}
                        onChange={(postAuthors) =>
                          setAttributes({ postQuery: { ...postQuery, postAuthors } })
                        }
                        isMulti={true}
                        closeMenuOnSelect={false}
                      />
                    </BaseControl>

                    <TextControl
                      label={__("Include Only", "zolo-blocks")}
                      value={postQuery.postInclude}
                      onChange={(postInclude) =>
                        setAttributes({ postQuery: { ...postQuery, postInclude } })
                      }
                      autocomplete="off"
                    />

                    <TextControl
                      label={__("Exclude", "zolo-blocks")}
                      autocomplete="off"
                      value={postQuery.postExclude}
                      onChange={(postExclude) => {
                        setAttributes({ postQuery: { ...postQuery, postExclude } })
                      }}
                    />

                    {tpgAllTaxonomies.map((tax, index) => (
                      <BaseControl label={__('By ', 'zolo-blocks') + tax.name} key={index}>
                        <Select2
                          options={PRINT_TAXONOMY(allTermList[tax.value])}
                          value={Object.keys(postQuery.postTaxonomies).length > 0 ? postQuery.postTaxonomies[tax.value] !== undefined ? postQuery.postTaxonomies[tax.value].options : [] : []}
                          onChange={(value) =>
                            changeTaxonomy(value, tax.value)
                          }
                          isMulti={true}
                          closeMenuOnSelect={false}
                        />
                      </BaseControl>
                    ))}

                    <NumberControl
                      isShiftStepEnabled
                      label={__("Post Per Page", "zolo-blocks")}
                      max={100}
                      min={-1}
                      value={postQuery.postPerPage}
                      onChange={(postPerPage) => {
                        setAttributes({ postQuery: { ...postQuery, postPerPage } })
                      }}
                      shiftStep={10}
                      step={1}
                    />

                    <NumberControl
                      isShiftStepEnabled
                      label={__("Offset", "zolo-blocks")}
                      max={100}
                      min={0}
                      value={postQuery.postOffset}
                      onChange={(postOffset) => {
                        setAttributes({ postQuery: { ...postQuery, postOffset } })
                      }}
                      shiftStep={10}
                      step={1}
                    />


                    <SelectControl
                      label={__('Order By', 'zolo-blocks')}
                      value={postQuery.postOrderby}
                      onChange={(postOrderby) => {
                        setAttributes({ postQuery: { ...postQuery, postOrderby } })
                      }}
                      options={ORDER_BY}
                    />

                    <SelectControl
                      label={__('Sort Order', 'zolo-blocks')}
                      value={postQuery.postOrder}
                      onChange={(postOrder) => {
                        setAttributes({ postQuery: { ...postQuery, postOrder } })
                      }}
                      options={SORT_ORDER}
                    />

                  </PanelBody>

                  <PanelBody
                    title={__('Layout Style', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <SelectControl
                      label={__(
                        'Preset Designs',
                        'zolo-blocks'
                      )}
                      value={preset}
                      options={PRESETS}
                      onChange={(selected) =>
                        changePremade(selected)
                      }
                    />

                  </PanelBody>
                </>
              )}

              {tab.name === 'design' && (
                <>
                  <PanelBody
                    title={__('Container', 'zolo-blocks')}
                    initialOpen={false}
                  >

                  </PanelBody>
                </>
              )}

              {tab.name === 'advanced' && (
                <>
                  <PanelBody
                    title={__('Spacing', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <ResDimensionsControl
                      label={__('Margin', 'zolo-blocks')}
                      controlName={CONTAINER_MARGIN}
                      resRequiredProps={resRequiredProps}
                    />
                    <ResDimensionsControl
                      label={__('Padding', 'zolo-blocks')}
                      controlName={CONTAINER_PADDING}
                      resRequiredProps={resRequiredProps}
                    />
                  </PanelBody>
                </>
              )}
            </div>
          )}
        </TabPanel>
      </div>
    </InspectorControls>
  );
}

export default Inspector;
