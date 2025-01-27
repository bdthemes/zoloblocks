/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import {SelectControl} from "@wordpress/components";
/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    HeaderTabs,
    IconicBtnGroup,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    LinkControl
} = window.zoloModule;

import objAttributes from './attributes';
import {
    CONTAINER_GAP,
    CONTAINER_WIDTH,
    CONTENT_WIDTH,
    FLEX_ALIGN,
    FLEX_DIRECTION,
    FLEX_JUSTIFY,
    FLEX_WRAP,
    MIN_HEIGHT,
    TAG_LIST
} from './constants';

import {
    CONTENT_WIDTH_TYPES,
    FLEX_ALIGNS,
    FLEX_ALIGNS_ROW,
    FLEX_DIRECTIONS,
    FLEX_JUSTIFIES,
    FLEX_JUSTIFIES_ROW,
    FLEX_WRAPS,
    WIDTH_TYPES,
} from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes, name } = props;
    const panelProps = { attributes, setAttributes };

    const {
        containerWidthType,
        contentWidthType,
        resMode,
        isBlockRootParent,
        FlexDirectionZRPAlign,
        TABFlexDirectionZRPAlign,
        MOBFlexDirectionZRPAlign,
        tagName,
        link
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };
    const shapeDividerControls = applyFilters('zolo.extensions.controls.shapeDivider', [], panelProps);

    const isRowDirection = FlexDirectionZRPAlign === 'row' || FlexDirectionZRPAlign === 'row-reverse';
    const isRowDirectionTab = TABFlexDirectionZRPAlign === 'row' || TABFlexDirectionZRPAlign === 'row-reverse';
    const isRowDirectionMob = MOBFlexDirectionZRPAlign === 'row' || MOBFlexDirectionZRPAlign === 'row-reverse';

    let alignItemsOptions;
    if (resMode === 'Desktop') alignItemsOptions = isRowDirection;
    else if (resMode === 'Tablet') alignItemsOptions = isRowDirectionTab;
    else if (resMode === 'Mobile') alignItemsOptions = isRowDirectionMob;
    alignItemsOptions ? (alignItemsOptions = FLEX_ALIGNS_ROW) : (alignItemsOptions = FLEX_ALIGNS);

    let justifyContentOptions;
    if (resMode === 'Desktop') justifyContentOptions = isRowDirection;
    else if (resMode === 'Tablet') justifyContentOptions = isRowDirectionTab;
    else if (resMode === 'Mobile') justifyContentOptions = isRowDirectionMob;
    justifyContentOptions ? (justifyContentOptions = FLEX_JUSTIFIES_ROW) : (justifyContentOptions = FLEX_JUSTIFIES);


    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/container"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            {isBlockRootParent && (
                                <>
                                    <IconicBtnGroup
                                        label={__('Container Width', 'zoloblocks')}
                                        value={containerWidthType}
                                        onChange={(value) =>
                                            setAttributes({
                                                containerWidthType: value,
                                            })
                                        }
                                        options={WIDTH_TYPES}
                                    />
                                    {containerWidthType === 'alignfull' && (
                                        <>
                                            <IconicBtnGroup
                                                label={__('Content Width', 'zoloblocks')}
                                                value={contentWidthType}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        contentWidthType: value,
                                                    })
                                                }
                                                options={CONTENT_WIDTH_TYPES}
                                            />
                                            {contentWidthType === 'alignwide' && (
                                                <ResRangeControl
                                                    label={__('Content Width', 'zoloblocks')}
                                                    controlName={CONTENT_WIDTH}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={2000}
                                                />
                                            )}
                                        </>
                                    )}
                                </>
                            )}

                            {((isBlockRootParent && containerWidthType === 'custom_width') || !isBlockRootParent) && (
                                <ResRangeControl
                                    label={__('Custom Width', 'zoloblocks')}
                                    controlName={CONTAINER_WIDTH}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={2000}
                                />
                            )}

                            <ResRangeControl
                                label={__('Minimum Height', 'zoloblocks')}
                                controlName={MIN_HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Flex Properties', 'zoloblocks')} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Direction', 'zoloblocks')}
                                controlName={FLEX_DIRECTION}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_DIRECTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Align Items', 'zoloblocks')}
                                controlName={FLEX_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={alignItemsOptions}
                            />

                            <ResAlignmentControl
                                label={__('Justify Content', 'zoloblocks')}
                                controlName={FLEX_JUSTIFY}
                                requiredProps={requiredProps}
                                alignOptions={justifyContentOptions}
                                customClass="zb-flex-justify-content"
                            />
                            <ResAlignmentControl
                                label={__('Wrap', 'zoloblocks')}
                                controlName={FLEX_WRAP}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_WRAPS}
                            />
                        </ZoloPanelBody>
                        {isBlockRootParent && (
                          <ZoloPanelBody title={__('Additional Options', 'zoloblocks')} panelProps={props}>
                             <SelectControl
                                label={__('HTML Tag', 'zoloblocks')}
                                value={tagName}
                                options={TAG_LIST}
                                onChange={(tagName) => setAttributes({tagName})}
                             />
                            {tagName==='a'&&(
                              <LinkControl
                                label={__('URL', 'zoloblocks')}
                                value={link}
                                onChange={(value) => setAttributes({ link: value })}
                              />
                            )}
                          </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Container Gap', 'zoloblocks')} stylePanel={true} firstOpen={true} panelProps={props}>
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={CONTAINER_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>
                        {shapeDividerControls && shapeDividerControls.length > 0 && shapeDividerControls}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/container"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
