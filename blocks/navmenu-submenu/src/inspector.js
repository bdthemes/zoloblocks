import { __ } from '@wordpress/i18n';
const {
    HeaderTabs,
    AdvancedOptions,
    ZoloPanelBody,
    ToggleGroup,
} = window.zoloModule;
import objAttributes from './attributes';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';

const Inspector = (props) => {
    const { attributes, setAttributes, hasInnerBlocks, isNested } = props;
    const requiredProps = { attributes, setAttributes, resMode: attributes?.resMode, objAttributes };
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/navmenu-item"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ToggleControl 
                                label={__('Add Submenu', 'zoloblocks')}
                                checked={attributes?.addSubmenu}
                                onChange={(value) => setAttributes({ addSubmenu: value })}
                            />
                            {
                                attributes?.addSubmenu && !hasInnerBlocks && !isNested && (
                                    <ToggleGroup
                                        label={__('Submenu Type', 'zoloblocks')}
                                        value={attributes?.submenuType}
                                        onChange={(value) => setAttributes({ submenuType: value })}
                                        options={[
                                            { value: 'dropdown', label: __('Dropdown', 'zoloblocks') },
                                            { value: 'megamenu', label: __('Megamenu', 'zoloblocks') },
                                        ]}
                                        isDeselectable
                                    />
                                )
                            }
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <h3>{__('Style', 'zoloblocks')}</h3>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/advanced-heading"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
