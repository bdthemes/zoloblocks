import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

import Sortable from './sortable';

const {
    HeaderTabs,
    ZoloSelectControl,
    ZoloTextControl,
    ZoloCardDivider,
    ColorControl,
    TypographyDropdown,
    ResAlignmentControl,
    ResGapControl,
    ResRangeControl,
    AdvancedOptions,
    ZoloPanelBody,
    ZoloTabPanel,
    ZoloBoxControl,
    ZoloBorderRadius,
    ZoloResponsive,
    useResponsiveValue
} = window.zoloModule;

import { META_GAP, META_ALIGN, SEPARATOR_SIZE, SEPARATOR_WIDTH, SEPARATOR_HEIGHT, ICON_SIZE, TEXT_INDENT } from './constants';
import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, NORMAL_HOVER } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, metaData, separatorStyle, customSeparator, separatorColor, hoverColor, textColor } = attributes;
    const [getResponsiveValue, createResponsiveValue] = useResponsiveValue(attributes);

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
                            <ZoloSelectControl
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
                                <ZoloTextControl
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
                            <ZoloTabPanel
                                className="zolo-tab-panel"
                                activeClass="active-tab"
                                tabs={NORMAL_HOVER.map(({ value, label }) => ({
                                    name: value,
                                    title: label,
                                    className: `zolo-tab ${value}`,
                                }))}
                            >
                                {({ name }) => {
                                    if (name === 'normal') {
                                        return (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={textColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            textColor: color,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'zoloblocks')}
                                                    color={attributes?.metaBackgroundColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            metaBackgroundColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        );
                                    }
                                    if (name === 'hover') {
                                        return (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={hoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            hoverColor: color,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'zoloblocks')}
                                                    color={attributes?.metaHoverBackgroundColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            metaHoverBackgroundColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        );
                                    }
                                }}
                            </ZoloTabPanel>
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TEXT_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            
                            <ResRangeControl
                                label={__('Indent', 'zoloblocks')}
                                controlName={TEXT_INDENT}
                                requiredProps={requiredProps}
                                min={0}
                                max={50}
                                step={1}
                            />
                            <ZoloCardDivider />
                            <ZoloResponsive left='7ch'>
                                <ZoloBoxControl
                                    label={__('Padding', 'zoloblocks')}
                                    value={getResponsiveValue('metaPadding')}
                                    onChange={(metaPadding) => setAttributes(createResponsiveValue('metaPadding', metaPadding))}
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left='6ch'>
                                <ZoloBorderRadius
                                    value={getResponsiveValue('metaBorderRadius') || {}}
                                    onChange={(metaBorderRadius) => setAttributes(createResponsiveValue('metaBorderRadius', metaBorderRadius))}
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
                            block="zolo/post-meta"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
