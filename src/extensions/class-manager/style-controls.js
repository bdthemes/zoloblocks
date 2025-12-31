import { TabPanel, Panel, PanelBody, __experimentalVStack as VStack, Flex, FlexItem, FlexBlock } from '@wordpress/components';
import FontPicker from '../../controls/typography-control/fontPicker';
import { fontWeightOptions } from './utils';
const StyleControls = ({ value, onChange }) => {
    const { ZoloRangeUnit, ZoloResponsive, ZoloSelectControl } = window.zoloModule;

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