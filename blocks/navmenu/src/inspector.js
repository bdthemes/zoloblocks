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
    DROPDOWN_WIDTH,
    TAB_STATES,
    TAB_MOBILE,
    MB_LOGO_PADDING,
    MB_LOGO_MARGIN,
    MB_LOGO_WIDTH,
    MB_LOGO_HEIGHT,
    HUMBURGER_MENU_ICON_SIZE,
    HUMBURGER_MENU_BG,
    HUMBURGER_MENU_BORDER,
    HUMBURGER_MENU_BORDER_RADIUS,
    HUMBURGER_MENU_PADDING,
    HUMBURGER_MENU_MARGIN,
    HUMBURGER_MENU_BOX_SHADOW,
    HUMBURGER_MENU_HOVER_BG,
    CLOSE_ICON_SIZE,
    CLOSE_ICON_BG,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BOX_SHADOW,
    CLOSE_ICON_HOVER_BG,
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
        humburgerMenuColor,
        humburgerMenuHoverColor,
        humburgerMenuBorderHoverColor,
        closeIconColor,
        closeIconHoverColor,
        closeIconBorderHoverColor,
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

                        <ZoloPanelBody title={__('Mobile Menu Settings', 'zoloblocks')} panelProps={props}></ZoloPanelBody>
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

                        <ZoloPanelBody title={__('Mobile Menu', 'zoloblocks')} panelProps={props}>
                            <TabPanelControl
                                options={TAB_MOBILE}
                                normalComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Width', 'zoloblocks')}
                                            controlName={MB_LOGO_WIDTH}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={500}
                                            step={1}
                                        />

                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={MB_LOGO_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={500}
                                            step={1}
                                        />

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={MB_LOGO_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={MB_LOGO_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={humburgerMenuColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    humburgerMenuColor: value,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Icon Size', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={HUMBURGER_MENU_BG}
                                            noMainBGImg={false}
                                        />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <BoxShadowControl controlName={HUMBURGER_MENU_BOX_SHADOW} requiredProps={requiredProps} />
                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={humburgerMenuHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    humburgerMenuHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={HUMBURGER_MENU_HOVER_BG}
                                            noMainBGImg={false}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={humburgerMenuBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    humburgerMenuBorderHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={closeIconColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    closeIconColor: value,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Icon Size', 'zoloblocks')}
                                            controlName={CLOSE_ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={CLOSE_ICON_BG} noMainBGImg={false} />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={CLOSE_ICON_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CLOSE_ICON_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CLOSE_ICON_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={CLOSE_ICON_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <BoxShadowControl controlName={CLOSE_ICON_BOX_SHADOW} requiredProps={requiredProps} />
                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={closeIconHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    closeIconHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={CLOSE_ICON_HOVER_BG}
                                            noMainBGImg={false}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={closeIconBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    closeIconBorderHoverColor: value,
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
