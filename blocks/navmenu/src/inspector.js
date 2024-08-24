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
    TAB_STATES,

} from './constants';

const Inspector = (props) => {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        navItemTextColor,
        navItemTextHoverColor,
        navItemTextActiveColor,
        navItemBorderHoverColor,
        navItemBorderActiveColor,
        label,
        link,
        iconType,
        icon,
        iconPosition,
        iconColor,
        iconHoverColor,
        iconBg,
        iconHoverBg,
        iconBorderHoverColor,
        textColor,
        textHoverColor,
        borderHoverColor,
        preset,
        presetFourStyles,
        presetSixStyle,
        presetSevenStyles,
        iconAnimation,
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

                            <ResSelectControl
                                label={__('Justify Content', 'zoloblocks')}
                                controlName="justifyContent"
                                requiredProps={requiredProps}
                                alignOptions={[
                                    { value: 'left', label: 'Left' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'right', label: 'Right' },
                                    { value: 'space-between', label: 'Space Between' },
                                    { value: 'space-around', label: 'Space Around' },
                                    { value: 'space-evenly', label: 'Space Evenly' },
                                ]}
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

                        <ZoloPanelBody title={__('Menu Item', 'zoloblocks')} panelProps={props}>

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

                                        <NormalBGControl requiredProps={requiredProps} controlName={NAV_MENU_ITEM_HOVER_BG} noMainBGImg={false} />

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
                                        <NormalBGControl requiredProps={requiredProps} controlName={NAV_MENU_ITEM_ACTIVE_BG} noMainBGImg={false} />
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

                            <TabPanelControl
                                options={TAB_STATES}
                                normalComponents={
                                    <>

                                    </>
                                }

                                hoverComponents={
                                    <>

                                    </>
                                }

                                activeComponents={
                                    <>

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
                                objAttributes
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
