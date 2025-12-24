import { TabPanel, Panel, PanelBody } from '@wordpress/components';
import FontPicker from '../../controls/typography-control/fontPicker';
const StyleControls = () => {
    return (
        <TabPanel
            className="zb-class-manager-tab-panel"
            tabs={[
                {
                    name: 'layout',
                    title: 'Layout'
                },
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
                if ('layout' === tab.name) {
                    return (
                        <Panel>
                            <PanelBody title="Typography" initialOpen={true}>
                                <FontPicker 
                                    label="Font Family"
                                    value="Arial"
                                    onChange={() => {}}
                                />
                            </PanelBody>
                        </Panel>
                    )
                } else if ('style' === tab.name) {
                    return <div>Style</div>
                } else if ('advanced' === tab.name) {
                    return <div>Advanced</div>
                }
            }}
        </TabPanel>
    )
}

export default StyleControls;