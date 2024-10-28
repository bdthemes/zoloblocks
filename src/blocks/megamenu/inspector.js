import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, CardDivider } from '@wordpress/components';
const {
    HeaderTabs,
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    TabPanelControl,
    NormalBGControl,
    BoxShadowControl,
    LinkControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
    ToggleGroup,
    ResSelectControl,
} = window.zoloModule;

import {
    DROPDOWN_WRAP_BG,
    DROPDOWN_WRAP_BORDER,
    DROPDOWN_WRAP_BORDER_RADIUS,
    DROPDOWN_WRAP_PADDING,
    DROPDOWN_WRAP_MARGIN,
    DROPDOWN_WRAP_BOX_SHADOW,
    DROPDOWN_WIDTH,
    DROPDOWN_WIDTH_OFFSET,
    TAB_STATES,
} from './constants';

import { MENU_TYPOGRAPHY, SUB_MENU_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { add } from '@dnd-kit/utilities';

const Inspector = (props) => {
    const { attributes, setAttributes, hasInnerBlocks, isNested } = props;
    const requiredProps = { attributes, setAttributes, resMode: attributes?.resMode, objAttributes };
    const { resMode } = attributes;
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/navmenu-item"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            {/* <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Container', 'zoloblocks')}
                            </div> */}
                            <div className="zolo-flex-col-control-tab">
                                <IconicBtnGroup
                                    label={__('Layout Type', 'zoloblocks')}
                                    value={attributes?.megamenuLayoutType}
                                    onChange={(value) => setAttributes({ megamenuLayoutType: value })}
                                    options={[
                                        { value: 'defualt', label: __('Defualt', 'zoloblocks') },
                                        { value: 'fullwidth', label: __('Fullwidth', 'zoloblocks') },
                                        { value: 'custom', label: __('Custom', 'zoloblocks') },
                                    ]}
                                    isDeselectable
                                />
                            </div>
                            {attributes?.megamenuLayoutType === 'custom' && (
                                <>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Directions', 'zoloblocks')}
                                            value={attributes?.megamenuCustomDirection}
                                            onChange={(value) => setAttributes({ megamenuCustomDirection: value })}
                                            options={[
                                                { value: 'left', label: __('Left', 'zoloblocks') },
                                                { value: 'right', label: __('Right', 'zoloblocks') },
                                            ]}
                                            isDeselectable
                                        />
                                    </div>

                                    <ResRangeControl
                                        label={__('Width', 'zoloblocks')}
                                        controlName={DROPDOWN_WIDTH}
                                        requiredProps={requiredProps}
                                        min={200}
                                        max={1200}
                                        step={1}
                                    />

                                    <ResRangeControl
                                        label={__('Offset', 'zoloblocks')}
                                        controlName={DROPDOWN_WIDTH_OFFSET}
                                        requiredProps={requiredProps}
                                        min={-500}
                                        max={500}
                                        step={1}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Wrapper', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <NormalBGControl requiredProps={requiredProps} controlName={DROPDOWN_WRAP_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={DROPDOWN_WRAP_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            {/* <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={DROPDOWN_WRAP_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            /> */}
                            <CardDivider />

                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={DROPDOWN_WRAP_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={DROPDOWN_WRAP_BOX_SHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={DROPDOWN_WRAP_BORDER_RADIUS}
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
                            block="zolo/advanced-heading"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
