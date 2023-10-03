/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    PanelBody,
    GradientPicker,
    ToggleControl,
    TextControl,
    TextareaControl,
    BaseControl,
    Button,
    RangeControl,
    SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    BoxShadowControl,
    ImageAvatar,
    LinkControl,
    NormalBGControl,
    HeaderTabs,
    TabPanelControl,
    IconicBtnGroup,
    GradientControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO } from './constants/typoPrefixConstant';
import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';

import { FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { preset, resMode, rating, showTitle, title, titleTag, titleColor, titlePosition, activeStarColor, inactiveStarColor } =
        attributes;

    const resRequiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
                            <ToggleControl
                                label={__('Show Star Title', 'zolo-blocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />
                            <RangeControl
                                label={__('Rating', 'zolo-blocks')}
                                value={rating}
                                onChange={(v) => setAttributes({ rating: v })}
                                min={1}
                                max={5}
                                step={0.1}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={ITEMS_ALIGN}
                                resRequiredProps={resRequiredProps}
                                alignOptions={FLEX_HORIZONTAL_OPTIONS}
                            />
                        </PanelBody>
                        {showTitle && (
                            <PanelBody title={__('Title', 'zolo-blocks')} initialOpen={false}>
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
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Star', 'zolo-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Size', 'zolo-blocks')}
                                controlName={STAR_SIZE}
                                resRequiredProps={resRequiredProps}
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
                        </PanelBody>
                        {showTitle && (
                            <PanelBody title={__('Title', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={titleColor}
                                    onChange={(color) => setAttributes({ titleColor: color })}
                                />
                                <ResRangeControl
                                    label={__('Title Gap', 'zolo-blocks')}
                                    controlName={TITLE_GAP}
                                    resRequiredProps={resRequiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </PanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <PanelBody title={__('Block', 'zolo-blocks')} initialOpen={false}>
                            advanced settings here
                        </PanelBody>
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
