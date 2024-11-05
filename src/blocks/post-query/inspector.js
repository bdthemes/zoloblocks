/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
    ToggleControl,
    TabPanel
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

import usePostQuery from './usePostQuery';

import objAttributes from './attributes';
import BasicQuery from './query/basic';
import Filters from './query/filters';
import AdvancedQuery from './query/advanced';

function Inspector(props) {
    const { attributes, setAttributes } = props;
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
                                onChange={(value) => setQuery({ inherit: value })}
                            />
                            {
                                !query?.inherit && (
                                    <>
                                        <TabPanel
                                            tabs={[
                                                {
                                                    name: 'basic',
                                                    title: __('Basic', 'zoloblocks'),
                                                },
                                                {
                                                    name: 'filters',
                                                    title: __('Filters', 'zoloblocks'),
                                                },
                                                {
                                                    name: 'advanced',
                                                    title: __('Advanced', 'zoloblocks'),
                                                },
                                            ]}
                                        >
                                            {(tab) => {
                                                if ('basic' === tab.name) {
                                                    return (
                                                        <BasicQuery
                                                            query={query}
                                                            setQuery={setQuery}
                                                            attributes={attributes}
                                                            setAttributes={setAttributes}
                                                        />
                                                    )
                                                }

                                                if ('filters' === tab.name) {
                                                    return (
                                                        <Filters 
                                                            query={query}
                                                            setQuery={setQuery}
                                                        />
                                                    )
                                                }

                                                if ('advanced' === tab.name) {
                                                    return (
                                                        <AdvancedQuery 
                                                            query={query}
                                                            setQuery={setQuery}
                                                        />
                                                    )
                                                }
                                            }}
                                        </TabPanel>
                                    </>
                                )
                            }
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
