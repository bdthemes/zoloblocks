/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    TabPanelControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO } from './constants/typoPrefixConstant';
import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';
import { FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, rating, showTitle, title, titleTag, titleColor, titlePosition, activeStarColor, inactiveStarColor } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={ITEMS_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_HORIZONTAL_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Rating', 'zoloblocks')} panelProps={props}>
                            <RangeControl
                                label={__('Rating', 'zoloblocks')}
                                value={rating}
                                onChange={(v) => setAttributes({ rating: v })}
                                min={1}
                                max={5}
                                step={0.1}
                            />
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={title}
                                    onChange={(v) => setAttributes({ title: v })}
                                    placeholder={__('Enter title', 'zoloblocks')}
                                />
                                <SelectControl
                                    label={__('Select Tag', 'zoloblocks')}
                                    value={titleTag}
                                    options={HEADING}
                                    onChange={(v) => {
                                        setAttributes({ titleTag: v });
                                    }}
                                />
                                <IconicBtnGroup
                                    label={__('Position', 'zoloblocks')}
                                    value={titlePosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            titlePosition: value,
                                        })
                                    }
                                    options={ICON_POSITIONS}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Star', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={STAR_SIZE}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />

                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Active', 'zoloblocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Inactive', 'zoloblocks'),
                                    },
                                ]}
                                normalComponents={
                                    <ColorControl
                                        label={__('Active Stars', 'zoloblocks')}
                                        color={activeStarColor}
                                        onChange={(color) => setAttributes({ activeStarColor: color })}
                                    />
                                }
                                hoverComponents={
                                    <ColorControl
                                        label={__('Inactive Stars', 'zoloblocks')}
                                        color={inactiveStarColor}
                                        onChange={(color) => setAttributes({ inactiveStarColor: color })}
                                    />
                                }
                            />
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={titleColor}
                                    onChange={(color) => setAttributes({ titleColor: color })}
                                />
                                <ResRangeControl
                                    label={__('Title Gap', 'zoloblocks')}
                                    controlName={TITLE_GAP}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}
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
