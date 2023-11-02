/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { BorderControl, ResDimensionsControl, HeaderTabs, AdvancedOptions } = window.zoloModule;

import objAttributes from './attributes';
import { SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody initialOpen={true}>{__('No settings available. Move to Style Tab', 'zolo-blocks')}</PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody initialOpen={true}>
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={SLIDE_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={SLIDE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={SLIDE_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
