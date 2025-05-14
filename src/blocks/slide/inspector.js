/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { BorderControl, ResDimensionsControl, HeaderTabs, AdvancedOptions, ZoloPanelBody, ZoloCardDivider, ZoloCorePanelBody } =
    window.zoloModule;

import objAttributes from './attributes';
import { SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, selectedPanel, selectedTab } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/slide"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloCorePanelBody>{__('No settings available. Move to Style Tab', 'zoloblocks')}</ZoloCorePanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} panelProps={props} stylePanel={true}>
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={SLIDE_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ZoloCardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={SLIDE_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={SLIDE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
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
                            block="zolo/slide"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
