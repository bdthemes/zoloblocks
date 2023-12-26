/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl, RangeControl, SelectControl } from '@wordpress/components';
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
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <ToggleControl
                                label={__('Show Star Title', 'zolo-blocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={ITEMS_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_HORIZONTAL_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Rating', 'zolo-blocks')} panelProps={props}>
                            <RangeControl
                                label={__('Rating', 'zolo-blocks')}
                                value={rating}
                                onChange={(v) => setAttributes({ rating: v })}
                                min={1}
                                max={5}
                                step={0.1}
                            />
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zolo-blocks')}
                                    value={title}
                                    onChange={(v) => setAttributes({ title: v })}
                                    placeholder={__('Enter title', 'zolo-blocks')}
                                />
                                <SelectControl
                                    label={__('Select Tag', 'zolo-blocks')}
                                    value={titleTag}
                                    options={HEADING}
                                    onChange={(v) => {
                                        setAttributes({ titleTag: v });
                                    }}
                                />
                                <IconicBtnGroup
                                    label={__('Position', 'zolo-blocks')}
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
                        <ZoloPanelBody title={__('Star', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zolo-blocks')}
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
                                        label: __('Active', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Inactive', 'zolo-blocks'),
                                    },
                                ]}
                                normalComponents={
                                    <ColorControl
                                        label={__('Active Stars', 'zolo-blocks')}
                                        color={activeStarColor}
                                        onChange={(color) => setAttributes({ activeStarColor: color })}
                                    />
                                }
                                hoverComponents={
                                    <ColorControl
                                        label={__('Inactive Stars', 'zolo-blocks')}
                                        color={inactiveStarColor}
                                        onChange={(color) => setAttributes({ inactiveStarColor: color })}
                                    />
                                }
                            />
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={titleColor}
                                    onChange={(color) => setAttributes({ titleColor: color })}
                                />
                                <ResRangeControl
                                    label={__('Title Gap', 'zolo-blocks')}
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
