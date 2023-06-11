/**
 * WordPress dependencies
 */
import {
  InspectorControls
} from '@wordpress/block-editor';
import {
  BaseControl,
  __experimentalNumberControl as NumberControl,
  PanelBody,
  SelectControl,
  TabPanel,
  TextControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Select2 from "react-select";

import objAttributes from './attributes';

import {
  AUTHOR_LISTS,
  CONTAINER_MARGIN,
  CONTAINER_PADDING,
  ORDER_BY,
  POST_TYPE,
  PRESETS,
  PRINT_TAXONOMY,
  SORT_ORDER
} from './constants';

const {
  ResRangeControl,
  ResDimensionsControl,
  ColorControl
} = window.zoloModule;


function Inspector({ attributes, setAttributes, changeQuery }) {

  const {
    preset,
    resMode,

    postType,
    postInclude,
    postExclude,
    postPerPage,
    postOffset,
    postKeyword,
    postTaxnomyRelation,
    postOrderBy,
    postSortOrder,
    postStatus,
    postAuthors,
    postTaxonomies,
  } = attributes;

  const resRequiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };

  /**
   * Preset
   */
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

  const taxonomyListOptions = [
    { value: 'category', label: 'Categories' },
    { value: 'post_tag', label: 'Tags' }
  ];

  const changeTaxonomy = (terms, name) => {
    let postTaxonomiesObj = {
      ...postTaxonomies,
      [name]: {
        'name': name,
        'options': terms,
      }
    }
    setAttributes({ postTaxonomies: postTaxonomiesObj });
  }
  const allTermList = zoloParams.all_term_list;

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
                      value={postType}
                      options={POST_TYPE}
                      onChange={(value) => {
                        setAttributes({ postType: value }),
                          changeQuery()
                      }}
                    />

                    <BaseControl label={__('By Author', 'zolo-block')}>
                      <Select2
                        options={AUTHOR_LISTS}
                        value={postAuthors}
                        onChange={(value) => {
                          setAttributes({ postAuthors: value }),
                            changeQuery()
                        }}
                        isMulti={true}
                        closeMenuOnSelect={false}
                      />
                    </BaseControl>

                    <TextControl
                      label={__("Include Only", "zolo-blocks")}
                      value={postInclude}
                      onChange={(postInclude) => {
                        setAttributes({ postInclude }),
                          changeQuery()
                      }}
                      autocomplete="off"
                    />

                    <TextControl
                      label={__("Exclude", "zolo-blocks")}
                      autocomplete="off"
                      value={postExclude}
                      onChange={(postExclude) => {
                        setAttributes({ postExclude }),
                          changeQuery()
                      }}
                    />

                    {/* Advanced Filter */}
                    {taxonomyListOptions.map((tax, index) => (
                      <BaseControl label={__('By ', 'zolo-blocks') + tax.label} key={index}>
                        <Select2
                          options={PRINT_TAXONOMY(allTermList[tax.value])}
                          value={Object.keys(postTaxonomies).length > 0 ? postTaxonomies[tax.value] !== undefined ? postTaxonomies[tax.value].options : [] : []}
                          onChange={(value) => {
                            changeTaxonomy(value, tax.value),
                              changeQuery()
                          }}
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
                      value={postPerPage}
                      onChange={(postPerPage) => {
                        setAttributes({ postPerPage })
                        changeQuery()
                      }}
                      //placeholder={__("Eg. 10", "zolo-blocks")}
                      shiftStep={10}
                      step={1}
                    />


                    <NumberControl
                      isShiftStepEnabled
                      label={__("Offset", "zolo-blocks")}
                      max={100}
                      min={0}
                      value={postOffset}
                      onChange={(postOffset) => {
                        setAttributes({ postOffset })
                        changeQuery()
                      }}
                      shiftStep={10}
                      step={1}
                    />

                    <SelectControl
                      label={__('Order By', 'zolo-blocks')}
                      value={postOrderBy}
                      onChange={(value) => {
                        setAttributes({ postOrderBy: value }),
                          changeQuery()
                      }}
                      options={ORDER_BY}
                    />

                    <SelectControl
                      label={__('Sort Order', 'zolo-blocks')}
                      value={postSortOrder}
                      onChange={(value) => {
                        setAttributes({ postSortOrder: value }),
                          changeQuery()
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
