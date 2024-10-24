/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, SelectControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { ResRangeControl, HeaderTabs, AdvancedOptions, ZoloPanelBody } = window.zoloModule;

import objAttributes from './attributes';

import { WIDTH, HEIGHT } from './constants';
import { TextareaControl } from '@wordpress/components';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, source, options, hint } = attributes || {};

    const { loading, loadingAnimType } = options || {};

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/spline-viewer"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <TextareaControl
                                label={__('Source URL', 'zoloblocks')}
                                value={source}
                                onChange={(v) => setAttributes({ source: v })}
                                placeholder={__('Enter source URL', 'zoloblocks')}
                            />
                            <ResRangeControl
                                label={__('Width', 'zoloblocks')}
                                controlName={WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={600}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Height', 'zoloblocks')}
                                controlName={HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={600}
                                step={1}
                            />
                            <ToggleControl
                                label={__('Hint', 'zoloblocks')}
                                checked={hint}
                                onChange={(v) =>
                                    setAttributes({
                                        hint: v,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Loading', 'zoloblocks')}
                                checked={loading || false}
                                onChange={(v) =>
                                    setAttributes({
                                        options: { ...options, loading: v },
                                    })
                                }
                            />
                            {loading && (
                                <SelectControl
                                    label={__('Loading Animation', 'zoloblocks')}
                                    value={loadingAnimType}
                                    options={[
                                        { label: 'None', value: 'none' },
                                        { label: 'Spinner Small Dark', value: 'spinner-small-dark' },
                                        { label: 'Spinner Small Light', value: 'spinner-small-light' },
                                        { label: 'Spinner Big Dark', value: 'spinner-big-dark' },
                                        { label: 'Spinner Big Light', value: 'spinner-big-light' },
                                    ]}
                                    onChange={(v) =>
                                        setAttributes({
                                            options: { ...options, loadingAnimType: v },
                                        })
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
                            block="zolo/spline-viewer"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
