/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    PanelBody,
    GradientPicker,
    ToggleControl,
    TextControl,
    TextareaControl,
    BaseControl,
    Button,
    RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    BoxShadowControl,
    ImageAvatar,
    LinkControl,
    NormalBGControl,
    HeaderTabs,
    TabPanelControl,
    IconicBtnGroup,
    GradientControl,
} = window.zoloModule;

import objAttributes from './attributes';
import { SLIDE_BG, SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { preset, resMode, enableOverlay, overlayType, overlayColor, overlayGradient } = attributes;

    const resRequiredProps = {
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
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={false}>
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={SLIDE_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={SLIDE_BORDER_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={SLIDE_PADDING}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Background', 'zolo-blocks')} initialOpen={false}>
                            <NormalBGControl
                                label={__('Background', 'zolo-blocks')}
                                resRequiredProps={resRequiredProps}
                                controlName={SLIDE_BG}
                                noMainBGImg={false}
                            />
                            <ToggleControl
                                label={__('Enable overlay color', 'zolo-blocks')}
                                checked={enableOverlay}
                                onChange={() => setAttributes({ enableOverlay: !enableOverlay })}
                            />
                            {enableOverlay && (
                                <>
                                    <IconicBtnGroup
                                        label={__('Overlay Type', 'zolo-blocks')}
                                        value={overlayType}
                                        onChange={(type) => setAttributes({ overlayType: type })}
                                        options={[
                                            { label: __('Color', 'zolo-blocks'), value: 'overlay_color' },
                                            { label: __('Gradient', 'zolo-blocks'), value: 'overlay_gradient' },
                                        ]}
                                    />
                                    {overlayType === 'overlay_color' && (
                                        <ColorControl
                                            label={__('Overlay Color', 'zolo-blocks')}
                                            color={overlayColor}
                                            onChange={(color) => setAttributes({ overlayColor: color })}
                                        />
                                    )}
                                    {overlayType === 'overlay_gradient' && (
                                        <GradientControl
                                            label={__('Overlay Gradient', 'zolo-blocks')}
                                            value={overlayGradient}
                                            onChange={(value) => setAttributes({ overlayGradient: value })}
                                        />
                                    )}
                                </>
                            )}
                        </PanelBody>
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
