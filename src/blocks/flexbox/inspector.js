/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import objAttributes from './attributes';
import {
    FLEXBOX_WIDTH,
    MIN_HEIGHT,
    FLEX_DIRECTION,
    FLEX_JUSTIFY_CONTENT,
    FLEX_ALIGN_ITEMS,
    FLEX_WRAP,
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
                                    <ResRangeControl
                                        label={__('Custom Width', 'zoloblocks')}
                                        controlName={FLEXBOX_WIDTH}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={2000}
                                    />
                                )
                            }

                            <ResRangeControl
                                label={__('Minimum Height', 'zoloblocks')}
                                controlName={MIN_HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
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
                                />
                            </ZoloResponsive>
                            <ResAlignmentControl
                                label={__('Justify Content', 'zoloblocks')}
                                customClass={classNames("zolo-flex-justify-content", {
                                    [`zolo-flex-justify-content-${attributes?.flexDirectionZRPAlign}`]: attributes?.resMode == 'Desktop',
                                    [`zolo-flex-justify-content-${attributes?.TABflexDirectionZRPAlign}`]: attributes?.resMode == 'Tablet',
                                    [`zolo-flex-justify-content-${attributes?.MOBflexDirectionZRPAlign}`]: attributes?.resMode == 'Mobile',
                                })}
                                controlName={FLEX_JUSTIFY_CONTENT}
                                requiredProps={requiredProps}
                                alignOptions={JUSTIFY_CONTENT_OPTIONS}
                                toggle={true}
                            />

                            <ResAlignmentControl
                                label={__('Align Items', 'zoloblocks')}
                                customClass={classNames("zolo-flex-align-items", {
                                    [`zolo-flex-align-items-${attributes?.flexDirectionZRPAlign}`]: attributes?.resMode == 'Desktop',
                                    [`zolo-flex-align-items-${attributes?.TABflexDirectionZRPAlign}`]: attributes?.resMode == 'Tablet',
                                    [`zolo-flex-align-items-${attributes?.MOBflexDirectionZRPAlign}`]: attributes?.resMode == 'Mobile',
                                })}
                                controlName={FLEX_ALIGN_ITEMS}
                                requiredProps={requiredProps}
                                alignOptions={ALIGN_ITEMS_OPTIONS}
                                toggle={true}
                            />

                            <ResAlignmentControl
                                label={__('Wrap', 'zoloblocks')}
                                controlName={FLEX_WRAP}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_WRAPS}
                                toggle={true}
                            />
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
