/**
 * WordPress dependencies
 */
import {InspectorControls} from '@wordpress/block-editor';
import {
  ToggleControl,
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
  HeaderTabs,
  AdvancedOptions,
  ZoloPanelBody,
  TabPanelControl
} = window.zoloModule;

import usePostQuery from './usePostQuery';

import objAttributes from './attributes';
import BasicQuery from './query/basic';
import Filters from './query/filters';
import AdvancedQuery from './query/advanced';

function Inspector(props) {
  const {attributes, setAttributes} = props;
  const [query, setQuery] = usePostQuery(attributes, setAttributes);

  const {
    resMode,
  } = attributes;

  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes,
  };

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/post-query"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props} firstOpen={true}>
              <ToggleControl
                label={__('Inherit query from template', 'zoloblocks')}
                checked={query?.inherit}
                onChange={(value) => setQuery({inherit: value})}
              />
              {!query?.inherit && (
                <TabPanelControl
                  options={[
                    {
                      value: 'normal',
                      label: __('Basic', 'zoloblocks'),
                    },
                    {
                      value: 'hover',
                      label: __('Filter', 'zoloblocks'),
                    },
                    {
                      value: 'active',
                      label: __('Advanced', 'zoloblocks'),
                    },
                  ]}
                  normalComponents={
                    <BasicQuery
                      query={query}
                      setQuery={setQuery}
                      attributes={attributes}
                      setAttributes={setAttributes}
                    />
                  }
                  hoverComponents={
                    <Filters
                      query={query}
                      setQuery={setQuery}
                    />
                  }
                  activeComponents={
                    <AdvancedQuery
                      query={query}
                      setQuery={setQuery}
                    />
                  }
                />
              )}

            </ZoloPanelBody>
          </>
        }
        advancedTab={
          <>
            <AdvancedOptions
              attributes={attributes}
              setAttributes={setAttributes}
              requiredProps={requiredProps}
              block="zolo/post-query"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
