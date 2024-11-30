/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TextShadowControl,
    TextStrokeControl,
    TypographyDropdown,
    TabPanelControl,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    NormalBGControl,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
} = window.zoloModule;

import objAttributes from './attributes';

function Inspector(props) {
    const { attributes, setAttributes } = props;

    const { resMode } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-query"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <h4>{__('Inherit query from template', 'zoloblocks')}</h4>
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/post-query"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
