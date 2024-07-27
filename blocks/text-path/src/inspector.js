/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    AdvancedOptions,
    ZoloPanelBody,
    LinkControl,
    ResAlignmentControl,
    SimpleRangeControl,
    TextStrokeControl,
    TabPanelControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { TEXTPATHTYPO } from './constants/typoPrefixConstant';
import { TEXTPATH_ALIGN, TEXTPATH_SIZE, TEXT_PATH_STROKE, TEXT_WORD_SPACING, PATH_TEXT_SPACING, PATH_OPTION } from './constants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        textpathContent,
        textPathType,
        pathlink,
        textpathLength,
        textPathSpoint,
        textPathShow,
        textpathRotate,
        textPathColor,
        textPathHoverColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/textarea"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <TextControl
                                label={__('Text', 'zoloblocks')}
                                value={textpathContent}
                                onChange={(v) => setAttributes({ textpathContent: v })}
                            />
                            <SelectControl
                                label={__('Path Type', 'zoloblocks')}
                                value={textPathType}
                                options={applyFilters('zolo.presets.TextPath', PATH_OPTION)}
                                onChange={(v) => setAttributes({ textPathType: v })}
                            />

                            <LinkControl
                                label={__('URL', 'zoloblocks')}
                                value={pathlink}
                                onChange={(value) => setAttributes({ pathlink: value })}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={TEXTPATH_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            <ToggleControl
                                label={__('Show Path', 'zoloblocks')}
                                checked={textPathShow}
                                onChange={() => setAttributes({ textPathShow: !textPathShow })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Text Path', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={TEXTPATH_SIZE}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                                step={1}
                            />

                            <SimpleRangeControl
                                label={__('Rotate', 'zoloblocks')}
                                onChange={(v) => setAttributes({ textpathRotate: v })}
                                value={textpathRotate}
                                onReset={() => setAttributes({ textpathRotate: '' })}
                                min={1}
                                max={360}
                                step={1}
                                noUnits={true}
                            />
                            <SimpleRangeControl
                                label={__('Text Length', 'zoloblocks')}
                                onChange={(v) => setAttributes({ textpathLength: v })}
                                value={textpathLength}
                                onReset={() => setAttributes({ textpathLength: '' })}
                                min={1}
                                max={1000}
                                step={1}
                                noUnits={true}
                            />
                            <SimpleRangeControl
                                label={__('Staring Points', 'zoloblocks')}
                                onChange={(v) => setAttributes({ textPathSpoint: v })}
                                value={textPathSpoint}
                                onReset={() => setAttributes({ textPathSpoint: '' })}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={true}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TEXTPATHTYPO}
                                requiredProps={requiredProps}
                                max={36}
                            />
                            <TextStrokeControl controlName={TEXT_PATH_STROKE} requiredProps={requiredProps} enableTransition={false} />
                            <ResRangeControl
                                label={__('Word Spacing', 'zoloblocks')}
                                controlName={TEXT_WORD_SPACING}
                                requiredProps={requiredProps}
                                min={0}
                                max={35}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Text Spacing', 'zoloblocks')}
                                controlName={PATH_TEXT_SPACING}
                                requiredProps={requiredProps}
                                min={0}
                                max={35}
                                step={1}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={textPathColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textPathColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={textPathHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textPathHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
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
                            block="zolo/textpath"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
