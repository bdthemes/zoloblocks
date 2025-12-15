/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import {
    TAG_LIST,
    FLEXBOX_GAP,
    WIDTH_TYPES,
    INNER_WIDTH_TYPES,
    JUSTIFY_CONTENT_OPTIONS,
    ALIGN_ITEMS_OPTIONS
} from './constants';

import {
    FLEX_DIRECTIONS,
    FLEX_WRAPS,
} from '../../../src/global/constants';
import { useInenerFlexboxWidthType } from './utils';

function Inspector(props) {
    const { attributes, setAttributes, isParent, hasParent } = props;
    useInenerFlexboxWidthType(hasParent, attributes?.flexWidthType, setAttributes);
    const {
        HeaderTabs,
        ZoloPanelBody,
        AdvancedOptions,
        ResRangeControl,
        ZoloSelectControl,
        ResAlignmentControl,
        ResGapControl,
        LinkControl,
        ZoloChoose,
        ZoloResponsive,
        getResponsiveValue,
        createResponsiveValue,
        ZoloRangeUnit,
        ZoloDualRangeUnit
    } = window.zoloModule;

    const requiredProps = {
        resMode: attributes?.resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/container"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props}>
                            <ZoloChoose
                                label={__('Flexbox Width', 'zoloblocks')}
                                value={attributes?.flexWidthType}
                                onChange={(value) =>
                                    setAttributes({
                                        flexWidthType: value,
                                    })
                                }
                                options={isParent ? WIDTH_TYPES : INNER_WIDTH_TYPES}
                            />

                            {
                                attributes?.flexWidthType === 'zolo-flexbox-custom-width' && (
                                    <ZoloResponsive left='36px'>
                                        <ZoloRangeUnit
                                            label={__('Custom Width', 'zoloblocks')}
                                            value={getResponsiveValue(attributes, 'flexboxCustomWidth')}
                                            onChange={(value) => {
                                                setAttributes(createResponsiveValue(attributes, 'flexboxCustomWidth', value));
                                            }}
                                            units={{
                                                px: { max: 1000, min: 100, step: 1 },
                                                '%': { max: 100, min: 10, step: 1 },
                                                vh: { max: 100, min: 10, step: 1 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                )
                            }

                            <ZoloResponsive left={'36px'}>
                                <ZoloRangeUnit
                                    label={__('Minimum Height', 'zoloblocks')}
                                    value={getResponsiveValue(attributes, 'minHeight')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'minHeight', value));
                                    }}
                                    units={{
                                        px: { max: 1000, min: 0, step: 1 },
                                        '%': { max: 100, min: 0, step: 1 },
                                        vh: { max: 100, min: 0, step: 1 },
                                    }}
                                />
                            </ZoloResponsive>
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Flex Properties', 'zolo-blocks')} panelProps={props}>
                            <ZoloResponsive left={'36px'}>
                                <ZoloChoose
                                    label={__('Direction', 'zoloblocks')}
                                    value={getResponsiveValue(attributes, 'flexDirection')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'flexDirection', value));
                                    }}
                                    options={FLEX_DIRECTIONS}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left={'36px'}>
                                <ZoloChoose
                                    label={__('Justify Content', 'zoloblocks')}
                                    value={getResponsiveValue(attributes, 'flexJustifyContent')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'flexJustifyContent', value));
                                    }}
                                    options={JUSTIFY_CONTENT_OPTIONS}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left={'36px'}>
                                <ZoloChoose
                                    label={__('Align Items', 'zoloblocks')}
                                    value={getResponsiveValue(attributes, 'flexAlignItems')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'flexAlignItems', value));
                                    }}
                                    options={ALIGN_ITEMS_OPTIONS}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left={'36px'}>
                                <ZoloChoose
                                    label={__('Wrap', 'zoloblocks')}
                                    value={getResponsiveValue(attributes, 'flexWrap')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'flexWrap', value));
                                    }}
                                    options={FLEX_WRAPS}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Additional Options', 'zoloblocks')} panelProps={props}>
                            <ZoloSelectControl
                                label={__('HTML Tag', 'zoloblocks')}
                                value={attributes?.tagName}
                                options={TAG_LIST}
                                onChange={(tagName) => setAttributes({ tagName })}
                            />
                            {attributes?.tagName === 'a' && (
                                <LinkControl
                                    label={__('URL', 'zoloblocks')}
                                    value={attributes?.link}
                                    onChange={(value) => setAttributes({ link: value })}
                                />
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Flexbox Gap', 'zoloblocks')} stylePanel={true} firstOpen={true} panelProps={props}>
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={FLEXBOX_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                            <ZoloDualRangeUnit 
                                label={__('Gap', 'zoloblocks')}
                                dualLabel={[__('Column Gap', 'zoloblocks'), __('Row Gap', 'zoloblocks')]}
                                value={{
                                    linked: false,
                                    first: '20px',
                                    second: '20px',
                                }}
                                onChange={(value) => {
                                    console.log(value);
                                }}
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/flexbox"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
