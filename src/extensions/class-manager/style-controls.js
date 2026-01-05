import { TabPanel, Panel, PanelBody, __experimentalVStack as VStack, Flex, FlexItem, FlexBlock } from '@wordpress/components';
import FontPicker from '../../controls/typography-control/fontPicker';
import { fontWeightOptions } from './utils';
import { __ } from '@wordpress/i18n';
import { reset, formatUppercase, formatLowercase, formatCapitalize, formatItalic, formatBold, formatUnderline, formatStrikethrough } from '@wordpress/icons';
const StyleControls = ({ value, onChange }) => {
    const { ZoloRangeUnit, ZoloResponsive, ZoloSelectControl, useDeviceType, ZoloChoose, ColorControl } = window.zoloModule;
    const device = useDeviceType();

    return (
        <TabPanel
            className="zb-class-manager-tab-panel"
            tabs={[
                {
                    name: 'style',
                    title: 'Style'
                },
                {
                    name: 'advanced',
                    title: 'Advanced'
                },
            ]}
        >
            {(tab) => {
                if ('style' === tab.name) {
                    return (
                        <Panel>
                            <PanelBody title="Typography">
                                <VStack>
                                    <Flex>
                                        <FlexBlock>
                                            <FontPicker
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
                                            value={value?.typography?.fontSize?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    typography: {
                                                        ...value?.typography,
                                                        fontSize: {
                                                            ...value?.typography?.fontSize,
                                                            [device]: newValue
                                                        }
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
                                    <ZoloResponsive left="98px">
                                        <ZoloRangeUnit
                                            label="Letter Spacing"
                                            value={value?.typography?.letterSpacing?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    typography: {
                                                        ...value?.typography,
                                                        letterSpacing: {
                                                            ...value?.typography?.letterSpacing,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { max: 100, step: 1 },
                                                em: { max: 5, step: 0.01 },
                                                rem: { max: 5, step: 0.01 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive left="74px">
                                        <ZoloRangeUnit
                                            label="Line Height"
                                            value={value?.typography?.lineHeight?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    typography: {
                                                        ...value?.typography,
                                                        lineHeight: {
                                                            ...value?.typography?.lineHeight,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { max: 100, step: 1 },
                                                em: { max: 5, step: 0.01 },
                                                rem: { max: 5, step: 0.01 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloChoose
                                        label={__('Text Transform', 'zoloblocks')}
                                        value={value?.typography?.textTransform}
                                        onChange={(newValue) => {
                                            onChange({
                                                typography: {
                                                    ...value?.typography,
                                                    textTransform: newValue
                                                }
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={[
                                            { label: 'None', value: 'none', icon: reset },
                                            { label: 'Uppercase', value: 'uppercase', icon: formatUppercase },
                                            { label: 'Lowercase', value: 'lowercase', icon: formatLowercase },
                                            { label: 'Capitalize', value: 'capitalize', icon: formatCapitalize },
                                        ]}
                                    />
                                    <Flex>
                                        <FlexItem>
                                            <ZoloChoose
                                                label={__('Font Style', 'zoloblocks')}
                                                value={value?.typography?.fontStyle}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        typography: {
                                                            ...value?.typography,
                                                            fontStyle: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={[
                                                    { label: 'Normal', value: 'normal', icon: reset },
                                                    { label: 'Italic', value: 'italic', icon: formatItalic },
                                                    { label: 'Bold', value: 'bold', icon: formatBold },
                                                ]}
                                            />
                                        </FlexItem>
                                        <FlexItem>
                                            <ZoloChoose
                                                label={__('Text Decoration', 'zoloblocks')}
                                                value={value?.typography?.textDecoration}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        typography: {
                                                            ...value?.typography,
                                                            textDecoration: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={[
                                                    { label: 'None', value: 'none', icon: reset },
                                                    { label: 'Underline', value: 'underline', icon: formatUnderline },
                                                    { label: 'Strikethrough', value: 'strikethrough', icon: formatStrikethrough },
                                                ]}
                                            />
                                        </FlexItem>
                                    </Flex>
                                </VStack>
                            </PanelBody>
                            <PanelBody title={__('Color', 'zoloblocks')}>
                                <VStack>
                                    <ColorControl 
                                        label={__('Text Color', 'zoloblocks')}
                                        color={value?.colors?.textColor}
                                        onChange={(newValue) => {
                                            onChange({
                                                colors: {
                                                    ...value?.colors,
                                                    textColor: newValue
                                                }
                                            })
                                        }}
                                    />
                                </VStack>
                            </PanelBody>
                        </Panel>
                    )
                } else if ('advanced' === tab.name) {
                    return <div>Advanced</div>
                }
            }}
        </TabPanel>
    )
}

export default StyleControls;