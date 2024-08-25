//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, SelectControl, __experimentalInputControl as InputControl, CardDivider } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';

import { __ } from '@wordpress/i18n';

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

import { TEXT_ALIGN_OPTIONS, ICON_POSITIONS, ICON_STATUS } from '../../../src/global/constants';

import { desktop, tablet, mobile } from '@wordpress/icons';
import objAttributes from './attributes';

import {
    NAV_MENU_ALIGNMENT,
    NAV_MENU_WRAP_BG,
    NAV_MENU_WRAP_BORDER,
    NAV_MENU_WRAP_BORDER_RADIUS,
    NAV_MENU_WRAP_PADDING,
    NAV_MENU_WRAP_BOX_SHADOW,
    NAV_MENU_ITEM_BG,
    NAV_MENU_ITEM_BORDER,
    NAV_MENU_ITEM_BORDER_RADIUS,
    NAV_MENU_ITEM_PADDING,
    NAV_MENU_ITEM_HOVER_BG,
    NAV_MENU_ITEM_ACTIVE_BG,
    DROPDOWN_WRAP_BG,
    DROPDOWN_WRAP_BORDER,
    DROPDOWN_WRAP_BORDER_RADIUS,
    DROPDOWN_WRAP_PADDING,
    DROPDOWN_WRAP_MARGIN,
    DROPDOWN_WRAP_BOX_SHADOW,
    SUB_MENU_BG,
    SUB_MENU_BORDER,
    SUB_MENU_BORDER_RADIUS,
    SUB_MENU_PADDING,
    SUB_MENU_MARGIN,
    SUB_MENU_BOX_SHADOW,
    SUB_MENU_HOVER_BG,
    SUB_MENU_ACTIVE_BG,
    TAB_STATES,
    DROPDOWN_WIDTH,
} from './constants';

import { MENU_TYPOGRAPHY, SUB_MENU_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Inspector = (props) => {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        navItemTextColor,
        navItemTextHoverColor,
        navItemTextActiveColor,
        navItemBorderHoverColor,
        navItemBorderActiveColor,
        subMenuTextColor,
        subMenuTextHoverColor,
        subMenuTextActiveColor,
        subMenuBorderHoverColor,
        subMenuBorderActiveColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

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

                            <ResAlignmentControl
                                label={__('Nav Alignment', 'zoloblocks')}
                                controlName={NAV_MENU_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Menu Wrapper', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <NormalBGControl requiredProps={requiredProps} controlName={NAV_MENU_WRAP_BG} noMainBGImg={false} />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={NAV_MENU_WRAP_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={NAV_MENU_WRAP_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={NAV_MENU_WRAP_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <BoxShadowControl controlName={NAV_MENU_WRAP_BOX_SHADOW} requiredProps={requiredProps} />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Menu Items', 'zoloblocks')} panelProps={props}>
                            <TabPanelControl
                                options={TAB_STATES}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={navItemTextColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemTextColor: value,
                                                })
                                            }
                                        />

                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={MENU_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={NAV_MENU_ITEM_BG} noMainBGImg={false} />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={NAV_MENU_ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={NAV_MENU_ITEM_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={NAV_MENU_ITEM_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <BoxShadowControl controlName={NAV_MENU_ITEM_PADDING} requiredProps={requiredProps} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={navItemTextHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemTextHoverColor: value,
                                                })
                                            }
                                        />

                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={NAV_MENU_ITEM_HOVER_BG}
                                            noMainBGImg={false}
                                        />

                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={navItemBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemBorderHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={navItemTextActiveColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemTextActiveColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={NAV_MENU_ITEM_ACTIVE_BG}
                                            noMainBGImg={false}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={navItemBorderActiveColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemBorderActiveColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Dropdown', 'zoloblocks')} panelProps={props}>
                            <ResRangeControl
                                label={__('Dropdown Width', 'zoloblocks')}
                                controlName={DROPDOWN_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={500}
                                step={1}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={DROPDOWN_WRAP_BG} noMainBGImg={false} />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={DROPDOWN_WRAP_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={DROPDOWN_WRAP_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
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

                            <BoxShadowControl controlName={DROPDOWN_WRAP_BOX_SHADOW} requiredProps={requiredProps} />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Dropdown Menu', 'zoloblocks')} panelProps={props}>
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
                                            typoPrefixConstant={SUB_MENU_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={SUB_MENU_BG} noMainBGImg={false} />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={SUB_MENU_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={SUB_MENU_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
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

                                        <BoxShadowControl controlName={SUB_MENU_BOX_SHADOW} requiredProps={requiredProps} />
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
                            requiredProps={{
                                attributes,
                                setAttributes,
                                resMode: attributes?.resMode,
                                objAttributes,
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
