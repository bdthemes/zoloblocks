/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { CardDivider, PanelBody, TextControl, TextareaControl, ToggleControl, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

/**
 * Internal depencencies
 */
const { ResRangeControl, HeaderTabs, IconicBtnGroup, ResAlignmentControl, AdvancedOptions } = window.zoloModule;

import objAttributes from './attributes';
import {
    CONTAINER_WIDTH,
    ROW_GAP,
    COLUMN_GAP,
    CONTENT_WIDTH,
    MIN_HEIGHT,
    FLEX_DIRECTION,
    FLEX_WRAP,
    FLEX_JUSTIFY,
    FLEX_ALIGN,
} from './constants';

import {
    FLEX_DIRECTIONS,
    FLEX_ALIGNS,
    FLEX_JUSTIFIES,
    FLEX_WRAPS,
    WIDTH_TYPES,
    CONTENT_WIDTH_TYPES,
    FLEX_ALIGNS_ROW,
    FLEX_JUSTIFIES_ROW,
} from '../../../src/global/constants';

import { Fragment } from 'react';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        containerWidthType,
        contentWidthType,
        resMode,
        isBlockRootParent,
        FlexDirectionZRPAlign,
        TABFlexDirectionZRPAlign,
        MOBFlexDirectionZRPAlign,
        selectedPanel,
        selectedTab,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

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

    useEffect(() => {
        // set initial panle to panel11
        if (!selectedPanel) {
            setAttributes({
                selectedPanel: 'general',
            });
        }
    }, [selectedPanel, selectedTab]);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <PanelBody
                            title={__('General', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'general' })}
                            opened={selectedPanel === 'general'}
                        >
                            {isBlockRootParent && (
                                <>
                                    <IconicBtnGroup
                                        label={__('Container Width', 'zolo-blocks')}
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
                                                label={__('Content Width', 'zolo-blocks')}
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
                                                    label={__('Content Width', 'zolo-blocks')}
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
                                    label={__('Custom Width', 'zolo-blocks')}
                                    controlName={CONTAINER_WIDTH}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={2000}
                                />
                            )}

                            <ResRangeControl
                                label={__('Minimum Height', 'zolo-blocks')}
                                controlName={MIN_HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Flex Properties', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'flex_property' })}
                            opened={selectedPanel === 'flex_property'}
                        >
                            <ResAlignmentControl
                                label={__('Direction', 'zolo-blocks')}
                                controlName={FLEX_DIRECTION}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_DIRECTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Align Items', 'zolo-blocks')}
                                controlName={FLEX_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={alignItemsOptions}
                            />

                            <ResAlignmentControl
                                label={__('Justify Content', 'zolo-blocks')}
                                controlName={FLEX_JUSTIFY}
                                requiredProps={requiredProps}
                                alignOptions={justifyContentOptions}
                                customClass="zb-flex-justify-content"
                            />
                            <ResAlignmentControl
                                label={__('Wrap', 'zolo-blocks')}
                                controlName={FLEX_WRAP}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_WRAPS}
                            />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody>
                            <ResRangeControl
                                label={__('Row Gap', 'zolo-blocks')}
                                controlName={ROW_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={500}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Column Gap', 'zolo-blocks')}
                                controlName={COLUMN_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={500}
                                step={1}
                            />
                        </PanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
