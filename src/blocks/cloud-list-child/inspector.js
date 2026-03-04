import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const {
    ZoloTextControl,
    ZoloRangeUnit,
    ZoloPanelBody,
    ZoloCardDivider,
    ColorControl,
    HeaderTabs,
    AdvancedOptions,
    LinkControl,
} = window.zoloModule;

import objAttributes from './attributes';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, label, link, textColor, fontSize, bgColor, bgOutlineColor, bgOutlineThickness, tooltip } = attributes;

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
                            <ZoloRangeUnit
                                label={__('Font Size', 'zoloblocks')}
                                value={fontSize ? `${fontSize}px` : ''}
                                onChange={(value) => setAttributes({ fontSize: parseInt(value) || 0 })}
                                units={{ px: { min: 0, max: 80, step: 1 } }}
                                help={__('0 = use cloud global size', 'zoloblocks')}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Background', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Background Color', 'zoloblocks')}
                                color={bgColor}
                                onChange={(bgColor) => setAttributes({ bgColor })}
                            />
                            <ZoloCardDivider />
                            <ColorControl
                                label={__('Outline Color', 'zoloblocks')}
                                color={bgOutlineColor}
                                onChange={(bgOutlineColor) => setAttributes({ bgOutlineColor })}
                            />
                            <ZoloRangeUnit
                                label={__('Outline Thickness', 'zoloblocks')}
                                value={bgOutlineThickness ? `${bgOutlineThickness}px` : ''}
                                onChange={(value) => setAttributes({ bgOutlineThickness: parseInt(value) || 0 })}
                                units={{ px: { min: 0, max: 10, step: 1 } }}
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
