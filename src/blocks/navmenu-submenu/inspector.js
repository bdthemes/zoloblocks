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
    TAB_STATES,
    SUB_MENU_BG,
    SUB_MENU_BORDER,
    SUB_MENU_BORDER_RADIUS,
    SUB_MENU_PADDING,
    SUB_MENU_MARGIN,
    SUB_MENU_BOX_SHADOW,
    SUB_MENU_HOVER_BG,
    SUB_MENU_ACTIVE_BG,
} from './constants';

import { D_SUB_MENU_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { add } from '@dnd-kit/utilities';

const Inspector = (props) => {
    const { attributes, setAttributes, hasInnerBlocks, isNested } = props;
    const requiredProps = { attributes, setAttributes, resMode: attributes?.resMode, objAttributes };
    const { resMode, subMenuTextColor, subMenuTextHoverColor, subMenuTextActiveColor, subMenuBorderHoverColor, subMenuBorderActiveColor } =
        attributes;
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/navmenu-submenu"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Container', 'zoloblocks')}
                            </div>
                            <ResRangeControl
                                label={__('Width', 'zoloblocks')}
                                controlName={DROPDOWN_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={500}
                                step={1}
                            />
                            <CardDivider />
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
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={DROPDOWN_WRAP_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
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

                        <ZoloPanelBody title={__('Menu', 'zoloblocks')} panelProps={props}>
                            <TabPanelControl
                                options={TAB_STATES}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={subMenuTextColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    subMenuTextColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={D_SUB_MENU_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={SUB_MENU_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={SUB_MENU_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />

                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={SUB_MENU_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={SUB_MENU_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={SUB_MENU_BOX_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={SUB_MENU_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={subMenuTextHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    subMenuTextHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={SUB_MENU_HOVER_BG}
                                            noMainBGImg={false}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={subMenuBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    subMenuBorderHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={subMenuTextActiveColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    subMenuTextActiveColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={SUB_MENU_ACTIVE_BG}
                                            noMainBGImg={false}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={subMenuBorderActiveColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    subMenuBorderActiveColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
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
                            block="zolo/navmenu-submenu"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
