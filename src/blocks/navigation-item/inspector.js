import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { InspectorControls } from '@wordpress/block-editor';

const {
    HeaderTabs,
    ZoloToggleControl,
    ZoloCardDivider,
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
    SUB_MENU_INDICATOR_SIZE,
    SUB_MENU_INDICATOR_BG,
    SUB_MENU_INDICATOR_PADDING,
    SUB_MENU_INDICATOR_MARGIN,
    SUB_MENU_INDICATOR_BORDER,
    SUB_MENU_INDICATOR_BORDER_RADIUS,
    SUB_MENU_INDICATOR_BOX_SHADOW,
    SUB_MENU_INDICATOR_HOVER_BG,
    SUB_MENU_INDICATOR_ACTIVE_BG,
} from './constants';

import { MENU_TYPOGRAPHY, SUB_MENU_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { add } from '@dnd-kit/utilities';

const Inspector = (props) => {
    const { attributes, setAttributes, hasInnerBlocks, isNested } = props;
    const requiredProps = { attributes, setAttributes, resMode: attributes?.resMode, objAttributes };
    const {
        addSubmenuEffect,
        resMode,
        subMenuTextColor,
        subMenuTextHoverColor,
        subMenuTextActiveColor,
        subMenuBorderHoverColor,
        subMenuBorderActiveColor,
        addSubmenu,
        subMenuIndicator,
        submenuType,
        subMenuIconColor,
        subMenuIconHoverColor,
        subMenuIconHoverBorderColor,
        subMenuIconActiveColor,
        subMenuIconActiveBorderColor,
    } = attributes;
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/navigation-item"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloToggleControl
                                label={__('Add Submenu', 'zoloblocks')}
                                checked={attributes?.addSubmenu}
                                onChange={(value) => setAttributes({ addSubmenu: value })}
                            />
                            <div className="zolo-flex-row-control-tab">
                                <IconicBtnGroup
                                    label={__('Event Type', 'zoloblocks')}
                                    value={addSubmenuEffect}
                                    onChange={(value) =>
                                        setAttributes({
                                            addSubmenuEffect: value,
                                        })
                                    }
                                    options={[
                                        { label: 'Hover', value: 'hover' },
                                        { label: 'Click', value: 'click' },
                                    ]}
                                />
                            </div>
                            {attributes?.addSubmenu && !hasInnerBlocks && !isNested && (
                                <IconicBtnGroup
                                    label={__('Submenu Type', 'zoloblocks')}
                                    value={attributes?.submenuType}
                                    onChange={(value) => setAttributes({ submenuType: value })}
                                    options={[
                                        { value: 'dropdown', label: __('Dropdown', 'zoloblocks') },
                                        { value: 'megamenu', label: __('Megamenu', 'zoloblocks') },
                                    ]}
                                    isDeselectable
                                />
                            )}
                        </ZoloPanelBody>
                        {addSubmenu && (
                            <ZoloPanelBody title={__('Indicator', 'zoloblocks')} panelProps={props}>
                                <ZoloIconPicker
                                    label={__('Select', 'zoloblocks')}
                                    value={subMenuIndicator}
                                    onChange={(value) => {
                                        setAttributes({
                                            subMenuIndicator: value,
                                        });
                                    }}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        {addSubmenu && (
                            <>
                                {/* <ZoloPanelBody title={__('Indicator', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                    <TabPanelControl
                                        options={TAB_STATES}
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={subMenuIconColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            subMenuIconColor: value,
                                                        })
                                                    }
                                                />

                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={SUB_MENU_INDICATOR_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                />
                                                <ZoloCardDivider />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={SUB_MENU_INDICATOR_BG}
                                                    noMainBGImg={false}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={SUB_MENU_INDICATOR_PADDING}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={false}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={SUB_MENU_INDICATOR_MARGIN}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={false}
                                                />
                                                <ZoloCardDivider />
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={SUB_MENU_INDICATOR_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <BoxShadowControl
                                                    controlName={SUB_MENU_INDICATOR_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={SUB_MENU_INDICATOR_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={true}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={subMenuIconHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            subMenuIconHoverColor: value,
                                                        })
                                                    }
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={SUB_MENU_INDICATOR_HOVER_BG}
                                                    noMainBGImg={false}
                                                />

                                                <ColorControl
                                                    label={__('Border Color', 'zoloblocks')}
                                                    color={subMenuIconHoverBorderColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            subMenuIconHoverBorderColor: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                        activeComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={subMenuIconActiveColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            subMenuIconActiveColor: value,
                                                        })
                                                    }
                                                />

                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={SUB_MENU_INDICATOR_ACTIVE_BG}
                                                    noMainBGImg={false}
                                                />

                                                <ColorControl
                                                    label={__('Border Color', 'zoloblocks')}
                                                    color={subMenuIconActiveBorderColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            subMenuIconActiveBorderColor: value,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody> */}
                            </>
                        )}
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
