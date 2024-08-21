//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

const {
    HeaderTabs,
    AdvancedOptions,
    ZoloPanelBody,
    ToggleGroup,
    ResSelectControl
} = window.zoloModule;

import { desktop, tablet, mobile } from '@wordpress/icons';
import objAttributes from './attributes';

const Inspector = (props) => {
    const { attributes, setAttributes } = props;
    const requiredProps = { attributes, setAttributes, resMode: attributes?.resMode, objAttributes };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/navmenu"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ToggleGroup
                                label={__('Menu Breakpoint', 'zoloblocks')}
                                value={attributes?.menuBreakpoint}
                                onChange={(value) => setAttributes({ menuBreakpoint: value })}
                                options={[
                                    { value: 'desktop', label: 'Desktop', icon: desktop },
                                    { value: 'tablet', label: 'Tablet', icon: tablet },
                                    { value: 'mobile', label: 'Mobile', icon: mobile },
                                ]}
                                isDeselectable
                            />
                            <ResSelectControl 
                                label={__('Justify Content', 'zoloblocks')}
                                controlName="justifyContent"
                                requiredProps={requiredProps}
                                alignOptions={[
                                    { value: 'left', label: 'Left' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'right', label: 'Right' },
                                    { value: 'space-between', label: 'Space Between' },
                                    { value: 'space-around', label: 'Space Around' },
                                    { value: 'space-evenly', label: 'Space Evenly' },
                                ]}
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={{
                                attributes,
                                setAttributes,
                                resMode: attributes?.resMode,
                                objAttributes
                            }}
                            block="zolo/navmenu"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
