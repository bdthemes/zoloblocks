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
                block="zolo/megamenu"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <h5>Add Controls Here</h5>
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
                            block="zolo/megamenu"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
