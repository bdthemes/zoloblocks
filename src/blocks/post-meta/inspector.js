import { InspectorControls } from '@wordpress/block-editor';
import { CardDivider, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { META_GAP, META_ALIGN, SEPARATOR_SIZE, SEPARATOR_WIDTH, SEPARATOR_HEIGHT, ICON_SIZE, TEXT_INDENT } from './constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import Sortable from './sortable';
// import { ToggleControl } from '@wordpress/components/build-types/toggle-control';

const {
    HeaderTabs,
    ColorControl,
    TypographyDropdown,
    ResAlignmentControl,
    ResGapControl,
    ResRangeControl,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, metaData, separatorStyle, customSeparator, separatorColor, hoverColor, textColor, showIcon } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-list"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <div className="zolo-custom-heading" style={{ paddingTop: 0, border: 0 }}>
                                {__('Show/hide elements', 'zoloblocks')}
                            </div>
                            <ToggleControl
                                label={__('Meta Icon', 'zoloblocks')}
                                checked={showIcon}
                                onChange={(showIcon) => setAttributes({ showIcon })}
                            />
                            <CardDivider />
                            <Sortable metaData={metaData} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResGapControl
                                label={__('Space Between', 'zoloblocks')}
                                controlName={META_GAP}
                                requiredProps={requiredProps}
                                max={100}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={META_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Separator', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <SelectControl
                                label={__('Style', 'zoloblocks')}
                                value={separatorStyle}
                                options={[
                                    { label: 'Dot Style', value: 'separator-dot' },
                                    { label: 'Line Style', value: 'separator-line' },
                                    { label: 'Custom Style', value: 'separator-custom' },
                                ]}
                                onChange={(separatorStyle) => setAttributes({ separatorStyle })}
                            />
                            {separatorStyle === 'separator-custom' && (
                                <TextControl
                                    label={__('Separator', 'zoloblocks')}
                                    value={customSeparator}
                                    onChange={(customSeparator) => setAttributes({ customSeparator })}
                                />
                            )}
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={separatorColor}
                                onChange={(separatorColor) => setAttributes({ separatorColor })}
                            />
                            {separatorStyle === 'separator-dot' && (
                                <ResRangeControl
                                    label={__('Size', 'zoloblocks')}
                                    controlName={SEPARATOR_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={50}
                                    step={1}
                                />
                            )}
                            {separatorStyle === 'separator-line' && (
                                <>
                                    <ResRangeControl
                                        label={__('Width', 'zoloblocks')}
                                        controlName={SEPARATOR_WIDTH}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={50}
                                        step={1}
                                    />
                                    <ResRangeControl
                                        label={__('Height', 'zoloblocks')}
                                        controlName={SEPARATOR_HEIGHT}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={50}
                                        step={1}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={textColor}
                                onChange={(color) =>
                                    setAttributes({
                                        textColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TEXT_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <ResRangeControl
                                label={__('Indent', 'zoloblocks')}
                                controlName={TEXT_INDENT}
                                requiredProps={requiredProps}
                                min={0}
                                max={50}
                                step={1}
                            />
                            {metaData?.some((item) => item.link) && (
                                <>
                                    <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={hoverColor}
                                        onChange={(color) =>
                                            setAttributes({
                                                hoverColor: color,
                                            })
                                        }
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/post-meta"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
