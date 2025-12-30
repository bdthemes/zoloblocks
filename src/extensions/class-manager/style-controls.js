import { Panel, PanelBody, __experimentalVStack as VStack, Flex, FlexItem, FlexBlock } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { fontWeightOptions } from './utils';

const fontFamilyOptions = [
    { label: 'Default', value: '' },
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Helvetica', value: 'Helvetica, sans-serif' },
    { label: 'Times New Roman', value: '"Times New Roman", serif' },
    { label: 'Georgia', value: 'Georgia, serif' },
    { label: 'Verdana', value: 'Verdana, sans-serif' },
    { label: 'Courier New', value: '"Courier New", monospace' },
    { label: 'Trebuchet MS', value: '"Trebuchet MS", sans-serif' },
    { label: 'Palatino', value: 'Palatino, serif' },
    { label: 'Garamond', value: 'Garamond, serif' },
    { label: 'Impact', value: 'Impact, sans-serif' },
    { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive' },
];

const StyleControls = ({ value, onChange }) => {
    const { ZoloRangeUnit, ZoloResponsive, ZoloSelectControl, ColorControl, HeaderTabs, ZoloPanelBody } = window.zoloModule;
    
    const [selectedTab, setSelectedTab] = useState('style');
    const attributes = { selectedTab };
    const setAttributes = ({ selectedTab }) => setSelectedTab(selectedTab);

    return (
        <HeaderTabs
            attributes={attributes}
            setAttributes={setAttributes}
            hideBefore={true}
            styleTab={
                <>
                    <ZoloPanelBody title="Typography" firstOpen={true}>
                        <VStack spacing={3}>
                            <Flex>
                                <FlexBlock>
                                    <ZoloSelectControl
                                        label="Font Family"
                                        value={value?.typography?.fontFamily}
                                        onChange={(newValue) => {
                                            onChange({
                                                typography: {
                                                    ...value?.typography,
                                                    fontFamily: newValue
                                                }
                                            })
                                        }}
                                        options={fontFamilyOptions}
                                    />
                                </FlexBlock>
                                <FlexItem>
                                    <ZoloSelectControl
                                        label="Font Weight"
                                        value={value?.typography?.fontWeight}
                                        onChange={(newValue) => {
                                            onChange({
                                                typography: {
                                                    ...value?.typography,
                                                    fontWeight: newValue
                                                }
                                            })
                                        }}
                                        options={fontWeightOptions}
                                    />
                                </FlexItem>
                            </Flex>
                            <ZoloResponsive left="62px">
                                <ZoloRangeUnit
                                    label="Font Size"
                                    value={value?.typography?.fontSize}
                                    onChange={(newValue) => {
                                        onChange({
                                            typography: {
                                                ...value?.typography,
                                                fontSize: newValue
                                            }
                                        })
                                    }}
                                    units={{
                                        px: { max: 200, step: 1 },
                                        em: { max: 10, step: 0.1 },
                                        rem: { max: 10, step: 0.1 },
                                    }}
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left="80px">
                                <ZoloRangeUnit
                                    label="Line Height"
                                    value={value?.typography?.lineHeight}
                                    onChange={(newValue) => {
                                        onChange({
                                            typography: {
                                                ...value?.typography,
                                                lineHeight: newValue
                                            }
                                        })
                                    }}
                                    units={{
                                        px: { max: 200, step: 1 },
                                        em: { max: 10, step: 0.1 },
                                        rem: { max: 10, step: 0.1 },
                                    }}
                                />
                            </ZoloResponsive>
                        </VStack>
                    </ZoloPanelBody>
                </>
            }
            advancedTab={
                <>
                    <ZoloPanelBody title="Border" firstOpen={true}>
                        <VStack spacing={3}>
                            <ZoloResponsive left="90px">
                                <ZoloRangeUnit
                                    label="Border Width"
                                    value={value?.border?.borderWidth}
                                    onChange={(newValue) => {
                                        onChange({
                                            border: {
                                                ...value?.border,
                                                borderWidth: newValue
                                            }
                                        })
                                    }}
                                    units={{
                                        px: { max: 20, step: 1 },
                                    }}
                                />
                            </ZoloResponsive>
                            <ColorControl
                                label="Border Color"
                                value={value?.border?.borderColor}
                                onChange={(color) => {
                                    onChange({
                                        border: {
                                            ...value?.border,
                                            borderColor: color
                                        }
                                    })
                                }}
                            />
                            <ZoloResponsive left="90px">
                                <ZoloRangeUnit
                                    label="Border Radius"
                                    value={value?.border?.borderRadius}
                                    onChange={(newValue) => {
                                        onChange({
                                            border: {
                                                ...value?.border,
                                                borderRadius: newValue
                                            }
                                        })
                                    }}
                                    units={{
                                        px: { max: 200, step: 1 },
                                        em: { max: 10, step: 0.1 },
                                        rem: { max: 10, step: 0.1 },
                                    }}
                                />
                            </ZoloResponsive>
                        </VStack>
                    </ZoloPanelBody>

                    <ZoloPanelBody title="Box Shadow">
                        <VStack spacing={3}>
                            <ZoloRangeUnit
                                label="Horizontal Offset"
                                value={value?.boxShadow?.horizontal}
                                onChange={(newValue) => {
                                    onChange({
                                        boxShadow: {
                                            ...value?.boxShadow,
                                            horizontal: newValue
                                        }
                                    })
                                }}
                                units={{
                                    px: { max: 50, min: -50, step: 1 },
                                }}
                            />
                            <ZoloRangeUnit
                                label="Vertical Offset"
                                value={value?.boxShadow?.vertical}
                                onChange={(newValue) => {
                                    onChange({
                                        boxShadow: {
                                            ...value?.boxShadow,
                                            vertical: newValue
                                        }
                                    })
                                }}
                                units={{
                                    px: { max: 50, min: -50, step: 1 },
                                }}
                            />
                            <ZoloRangeUnit
                                label="Blur"
                                value={value?.boxShadow?.blur}
                                onChange={(newValue) => {
                                    onChange({
                                        boxShadow: {
                                            ...value?.boxShadow,
                                            blur: newValue
                                        }
                                    })
                                }}
                                units={{
                                    px: { max: 100, step: 1 },
                                }}
                            />
                            <ColorControl
                                label="Shadow Color"
                                value={value?.boxShadow?.color}
                                onChange={(color) => {
                                    onChange({
                                        boxShadow: {
                                            ...value?.boxShadow,
                                            color: color
                                        }
                                    })
                                }}
                            />
                        </VStack>
                    </ZoloPanelBody>
                </>
            }
        />
    )
}

export default StyleControls;