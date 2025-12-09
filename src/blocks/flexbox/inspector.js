/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ZoloPanelBody,
    AdvancedOptions,
    IconicBtnGroup,
    ResRangeControl,
    ZoloSelectControl,
    ResAlignmentControl,
    ResGapControl,
    LinkControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { WIDTH_TYPES, CONTENT_WIDTH_TYPES, FLEX_DIRECTIONS, FLEX_WRAPS } from '../../../src/global/constants';

import {
    CONTENT_WIDTH,
    FLEXBOX_WIDTH,
    MIN_HEIGHT,
    FLEX_DIRECTION,
    FLEX_ALIGN,
    FLEX_JUSTIFY,
    FLEX_WRAP,
    TAG_LIST,
    FLEXBOX_GAP,
} from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const panelProps = { attributes, setAttributes };

    const { resMode, isRootFlexbox, flexWidthType, contentWidthType, tagName, link } = attributes;

    const requiredProps = {
        resMode,
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
                            {isRootFlexbox && (
                                <>
                                    <IconicBtnGroup
                                        label={__('Flexbox Width', 'zoloblocks')}
                                        value={flexWidthType}
                                        onChange={(value) =>
                                            setAttributes({
                                                flexWidthType: value,
                                            })
                                        }
                                        toggle={true}
                                        options={WIDTH_TYPES}
                                    />
                                    {flexWidthType === 'alignfull' && (
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
                                                    min={0}
                                                    max={2000}
                                                />
                                            )}
                                        </>
                                    )}
                                </>
                            )}

                            {((isRootFlexbox && flexWidthType === 'custom_width') || !isRootFlexbox) && (
                                <ResRangeControl
                                    label={__('Custom Width', 'zoloblocks')}
                                    controlName={FLEXBOX_WIDTH}
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

                        <ZoloPanelBody title={__('Flex Properties', 'zolo-blocks')} panelProps={props}>
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
                                customClass="zb-flex-justify-content"
                                controlName={FLEX_JUSTIFY}
                                requiredProps={requiredProps}
                                alignOptions={justifyContentOptions}
                            />
                            <ResAlignmentControl
                                label={__('Wrap', 'zoloblocks')}
                                controlName={FLEX_WRAP}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_WRAPS}
                            />
                        </ZoloPanelBody>
                        {isRootFlexbox && (
                            <ZoloPanelBody title={__('Additional Options', 'zoloblocks')} panelProps={props}>
                                <ZoloSelectControl
                                    label={__('HTML Tag', 'zoloblocks')}
                                    value={tagName}
                                    options={TAG_LIST}
                                    onChange={(tagName) => setAttributes({ tagName })}
                                />
                                {tagName === 'a' && (
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
