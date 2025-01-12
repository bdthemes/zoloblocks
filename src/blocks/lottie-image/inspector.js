/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { SimpleRangeControl, HeaderTabs, AdvancedOptions, ZoloPanelBody } = window.zoloModule;

import objAttributes from './attributes';

import { SelectControl, ToggleControl } from '@wordpress/components';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { fileURL, trigger, loop, direction, speed, resMode } = attributes;
    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/textarea"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            {fileURL && (
                                <>
                                    <SelectControl
                                        label={__('Play Animation On', 'zoloblocks')}
                                        value={trigger}
                                        options={[
                                            {
                                                label: __('Page Load', 'zoloblocks'),
                                                value: '',
                                            },
                                            {
                                                label: __('Viewport', 'zoloblocks'),
                                                value: 'viewport',
                                            },
                                            {
                                                label: __('Hover', 'zoloblocks'),
                                                value: 'hover',
                                            },
                                            {
                                                label: __('Click', 'zoloblocks'),
                                                value: 'click',
                                            },
                                            {
                                                label: __('Scroll', 'zoloblocks'),
                                                value: 'scroll',
                                            },
                                        ]}
                                        onChange={(value) => setAttributes({ trigger: value })}
                                    />
                                    {trigger !== 'scroll' && (
                                        <>
                                            <SimpleRangeControl
                                                label={__('Speed', 'zoloblocks')}
                                                value={speed}
                                                onChange={(speed) =>
                                                    setAttributes({
                                                        speed,
                                                    })
                                                }
                                                onReset={() =>
                                                    setAttributes({
                                                        speed: undefined,
                                                    })
                                                }
                                                step={0.1}
                                                min={0}
                                                max={10}
                                            />
                                            <ToggleControl
                                                label={__('Loop', 'zoloblocks')}
                                                checked={!!loop}
                                                onChange={() => setAttributes({ loop: !loop })}
                                            />
                                        </>
                                    )}
                                    <ToggleControl
                                        label={__('Reverse', 'zoloblocks')}
                                        checked={direction === -1}
                                        onChange={() => {
                                            setAttributes({
                                                direction: direction === 1 ? -1 : 1,
                                            });
                                        }}
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
                            block="zolo/lottie-image"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
