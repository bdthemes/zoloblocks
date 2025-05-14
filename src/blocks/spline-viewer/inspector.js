/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ZoloCardDivider,
    ResRangeControl,
    HeaderTabs,
    AdvancedOptions,
    ZoloPanelBody,
    ResAlignmentControl,
    ZoloToggleControl,
    ZoloSelectControl,
    ZoloTextControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { WIDTH, HEIGHT, ALIGNMENT } from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, source, options, hint } = attributes || {};

    const { loading, loadingAnimType = 'spinner-big-dark' } = options || {};

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
                            <div className="zolo-flex-col-control">
                                <ZoloTextControl
                                    label={__('Source URL', 'zoloblocks')}
                                    value={source}
                                    onChange={(v) => setAttributes({ source: v })}
                                    placeholder={__('Enter source URL', 'zoloblocks')}
                                />
                            </div>
                            {/* <ResRangeControl
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

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={[
                                    {
                                        label: 'Left',
                                        value: 'flex-start',
                                        icon: (
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4 2V22"
                                                    stroke="#4D4D4D"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        label: 'Center',
                                        value: 'center',
                                        icon: (
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 2L12 8"
                                                    stroke="#4D4D4D"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 16L12 22"
                                                    stroke="#4D4D4D"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        label: 'Right',
                                        value: 'flex-end',
                                        icon: (
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20 2V22"
                                                    stroke="#4D4D4D"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
                                            </svg>
                                        ),
                                    },
                                ]}
                            /> */}
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Hint', 'zoloblocks')}
                                checked={hint}
                                onChange={(v) =>
                                    setAttributes({
                                        hint: v,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Loading', 'zoloblocks')}
                                checked={loading || false}
                                onChange={(v) =>
                                    setAttributes({
                                        options: { ...options, loading: v },
                                    })
                                }
                            />
                            {loading && (
                                <>
                                    <ZoloCardDivider />
                                    <ZoloSelectControl
                                        label={__('Animation', 'zoloblocks')}
                                        value={loadingAnimType}
                                        options={[
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
                                </>
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
