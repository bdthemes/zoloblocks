/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

import { FLEX_DIRECTIONS, FLEX_WRAPS } from '@/global/constants.js';
import { alignItemsOptions, innerWidthTypes, justifyContentOptions, overflowOptions, tagList, useInenerFlexboxWidthType, widthTypes } from './utils';
import classNames from 'classnames';

function Inspector(props) {
    const { attributes, setAttributes, isParent, hasParent } = props;
    useInenerFlexboxWidthType(hasParent, attributes?.flexWidthType, setAttributes);
    const {
        HeaderTabs,
        ZoloPanelBody,
        AdvancedOptions,
        ZoloSelectControl,
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
                block="zolo/flexbox"
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
                                options={isParent ? widthTypes : innerWidthTypes}
                            />

                            {
                                attributes?.flexWidthType === 'zolo-flexbox-custom-width' && (
                                    <ZoloResponsive left='90px'>
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

                            <ZoloResponsive left='103px'>
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
                            <ZoloResponsive left={'58px'}>
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
                            <ZoloResponsive left={'96px'}>
                                <ZoloChoose
                                    label={__('Justify Content', 'zoloblocks')}
                                    value={getResponsiveValue(attributes, 'flexJustifyContent')}
                                    className={classNames({
                                        [`zolo-flex-justify-content-${getResponsiveValue(attributes, 'flexDirection') || 'row'}`]: true
                                    })}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'flexJustifyContent', value));
                                    }}
                                    options={justifyContentOptions}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left={'70px'}>
                                <ZoloChoose
                                    label={__('Align Items', 'zoloblocks')}
                                    value={getResponsiveValue(attributes, 'flexAlignItems')}
                                    className={classNames({
                                        [`zolo-flex-align-items-${getResponsiveValue(attributes, 'flexDirection') || 'row'}`]: true
                                    })}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'flexAlignItems', value));
                                    }}
                                    options={alignItemsOptions}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left={'35px'}>
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
                                options={tagList}
                                onChange={(tagName) => setAttributes({ tagName })}
                            />
                            {attributes?.tagName === 'a' && (
                                <LinkControl
                                    label={__('URL', 'zoloblocks')}
                                    value={attributes?.link}
                                    onChange={(value) => setAttributes({ link: value })}
                                />
                            )}
                            <ZoloSelectControl
                                label={__('Overflow', 'zoloblocks')}
                                value={attributes?.overflow}
                                options={overflowOptions}
                                onChange={(overflow) => setAttributes({ overflow })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Flexbox Gap', 'zoloblocks')} stylePanel={true} firstOpen={true} panelProps={props}>
                            {/* <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={FLEXBOX_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            /> */}
                            <ZoloResponsive left='30px'>
                                <ZoloDualRangeUnit
                                    label={__('Gap', 'zoloblocks')}
                                    dualLabel={[__('Column Gap', 'zoloblocks'), __('Row Gap', 'zoloblocks')]}
                                    value={getResponsiveValue(attributes, 'flexGap')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'flexGap', value));
                                    }}
                                    units={{
                                        px: { max: 200, min: 0, step: 1 },
                                        rem: { max: 10, min: 0, step: 0.1 },
                                        em: { max: 10, min: 0, step: 0.1 },
                                    }}
                                />
                            </ZoloResponsive>
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
