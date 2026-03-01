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
    const { attributes, setAttributes, isParent, hasParent, getResponsiveValue, createResponsiveValue } = props;
    useInenerFlexboxWidthType(hasParent, attributes?.flexWidthType, setAttributes);
    const {
        HeaderTabs,
        ZoloPanelBody,
        AdvancedOptions,
        ZoloSelectControl,
        LinkControl,
        ZoloChoose,
        ZoloResponsive,
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
                                            value={getResponsiveValue('flexboxCustomWidth')}
                                            onChange={(value) => {
                                                setAttributes(createResponsiveValue('flexboxCustomWidth', value));
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
                                    value={getResponsiveValue('minHeight')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('minHeight', value));
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
                                    value={getResponsiveValue('flexDirection')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('flexDirection', value));
                                    }}
                                    options={FLEX_DIRECTIONS}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left={'96px'}>
                                <ZoloChoose
                                    label={__('Justify Content', 'zoloblocks')}
                                    value={getResponsiveValue('flexJustifyContent')}
                                    className={classNames({
                                        [`zolo-flex-justify-content-${getResponsiveValue('flexDirection') || 'row'}`]: true
                                    })}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('flexJustifyContent', value));
                                    }}
                                    options={justifyContentOptions}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left={'70px'}>
                                <ZoloChoose
                                    label={__('Align Items', 'zoloblocks')}
                                    value={getResponsiveValue('flexAlignItems')}
                                    className={classNames({
                                        [`zolo-flex-align-items-${getResponsiveValue('flexDirection') || 'row'}`]: true
                                    })}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('flexAlignItems', value));
                                    }}
                                    options={alignItemsOptions}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left={'35px'}>
                                <ZoloChoose
                                    label={__('Wrap', 'zoloblocks')}
                                    value={getResponsiveValue('flexWrap')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('flexWrap', value));
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
                            <ZoloResponsive left='30px'>
                                <ZoloDualRangeUnit
                                    label={__('Gap', 'zoloblocks')}
                                    dualLabel={[__('Column Gap', 'zoloblocks'), __('Row Gap', 'zoloblocks')]}
                                    value={getResponsiveValue('flexGap')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('flexGap', value));
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
