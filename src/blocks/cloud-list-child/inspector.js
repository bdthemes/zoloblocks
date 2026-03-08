import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const {
    ZoloTextControl,
    ZoloRangeUnit,
    ZoloRangeControl,
    ZoloPanelBody,
    ZoloCardDivider,
    ColorControl,
    HeaderTabs,
    AdvancedOptions,
    LinkControl,
} = window.zoloModule;

import objAttributes from './attributes';

function Inspector(props) {
    const { attributes, setAttributes, weightEnabled, weightMode } = props;
    const { resMode, label, link, textColor, fontSize, bgColor, bgOutlineColor, bgOutlineThickness, tooltip, weight } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/cloud-list-child"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloTextControl
                                label={__('Label', 'zoloblocks')}
                                value={label}
                                onChange={(label) => setAttributes({ label })}
                                placeholder={__('Tag Label', 'zoloblocks')}
                            />
                            <LinkControl
                                label={__('Link', 'zoloblocks')}
                                value={link}
                                onChange={(link) => setAttributes({ link })}
                            />
                            <ZoloCardDivider />
                            <ZoloTextControl
                                label={__('Tooltip', 'zoloblocks')}
                                value={tooltip}
                                onChange={(tooltip) => setAttributes({ tooltip })}
                                placeholder={__('Hover tooltip text', 'zoloblocks')}
                            />
                            {weightEnabled && (weightMode === 'size' || weightMode === 'both') && (
                                <ZoloRangeControl
                                    label={__('Weight', 'zoloblocks')}
                                    value={weight}
                                    onChange={(weight) => setAttributes({ weight })}
                                    min={0}
                                    max={100}
                                    step={1}
                                    help={__('0 = use global size. Higher = more prominent.', 'zoloblocks')}
                                />
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Text', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Text Color', 'zoloblocks')}
                                color={textColor}
                                onChange={(textColor) => setAttributes({ textColor })}
                            />
                            {!weightEnabled && (
                                <ZoloRangeUnit
                                    label={__('Font Size', 'zoloblocks')}
                                    value={fontSize ? `${fontSize}px` : ''}
                                    onChange={(value) => setAttributes({ fontSize: parseInt(value) || 0 })}
                                    units={{
                                        px: { min: 0, max: 80, step: 1 },
                                        '%': { min: 50, max: 400, step: 1 },
                                        em: { min: 0.5, max: 5, step: 0.1 },
                                        rem: { min: 0.5, max: 5, step: 0.1 },
                                        vw: { min: 0, max: 10, step: 0.1 },
                                        vh: { min: 0, max: 10, step: 0.1 },
                                    }}
                                    help={__('0 = use cloud global size', 'zoloblocks')}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Background', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            {!(weightEnabled && weightMode === 'bgcolour') && (
                                <>
                                    <ColorControl
                                        label={__('Background Color', 'zoloblocks')}
                                        color={bgColor}
                                        onChange={(bgColor) => setAttributes({ bgColor })}
                                    />
                                    <ZoloCardDivider />
                                </>
                            )}
                            {weightEnabled && weightMode === 'bgcolour' && (
                                <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#757575' }}>
                                    {__('Background color is controlled by the Weight Mode gradient.', 'zoloblocks')}
                                </p>
                            )}
                            <ColorControl
                                label={__('Outline Color', 'zoloblocks')}
                                color={bgOutlineColor}
                                onChange={(bgOutlineColor) => setAttributes({ bgOutlineColor })}
                            />
                            <ZoloRangeUnit
                                label={__('Outline Thickness', 'zoloblocks')}
                                value={bgOutlineThickness ? `${bgOutlineThickness}px` : ''}
                                onChange={(value) => setAttributes({ bgOutlineThickness: parseInt(value) || 0 })}
                                units={{
                                    px: { min: 0, max: 10, step: 1 },
                                    '%': { min: 0, max: 100, step: 1 },
                                    em: { min: 0, max: 5, step: 0.1 },
                                    rem: { min: 0, max: 5, step: 0.1 },
                                    vw: { min: 0, max: 10, step: 0.1 },
                                    vh: { min: 0, max: 10, step: 0.1 },
                                }}
                                help={__('0 = use cloud global thickness', 'zoloblocks')}
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
                            block="zolo/cloud-list-child"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
