/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
    ZoloToggleControl,
    ZoloCardDivider,
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    NormalBGControl,
    AdvancedOptions,
    ResAlignmentControl,
    ZoloPanelBody,
    TabPanelControl,
    LinkControl,
    IconicBtnGroup,
} = window.zoloModule;

import objAttributes from './attributes';

import {} from './constants';

import { ICON_HPOSITIONS } from '../../../src/global/constants';
import { BUTTON_ONE_TYPO, BUTTON_TWO_TYPO, MIDDLE_TEXT_TYPO } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, primaryText, secondaryText } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/switcher"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Switcher Settings', 'zoloblocks')} initialOpen={true}>
                            <ZoloTextControl
                                label={__('Primary Text', 'zoloblocks')}
                                value={primaryText}
                                onChange={(value) => setAttributes({ primaryText: value })}
                            />
                            <ZoloTextControl
                                label={__('Secondary Text', 'zoloblocks')}
                                value={secondaryText}
                                onChange={(value) => setAttributes({ secondaryText: value })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={<></>}
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/switcher"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
