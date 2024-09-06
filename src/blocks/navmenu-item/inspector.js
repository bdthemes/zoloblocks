import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';
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
import { add } from '@dnd-kit/utilities';

const Inspector = (props) => {
    const { attributes, setAttributes, hasInnerBlocks, isNested } = props;
    const requiredProps = { attributes, setAttributes, resMode: attributes?.resMode, objAttributes };
    const {
        resMode,
        subMenuTextColor,
        subMenuTextHoverColor,
        subMenuTextActiveColor,
        subMenuBorderHoverColor,
        subMenuBorderActiveColor,
        addSubmenu,
    } = attributes;
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/navmenu-item"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ToggleControl
                                label={__('Add Submenu', 'zoloblocks')}
                                checked={attributes?.addSubmenu}
                                onChange={(value) => setAttributes({ addSubmenu: value })}
                            />

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
                    </>
                }
                styleTab={
                    <>
                        {addSubmenu && (
                            <>
                                <ZoloPanelBody title={__('Dropdown', 'zoloblocks')} panelProps={props} firstOpen={true}>
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
                            </>
                        )}
                        {addSubmenu && (
                            <>
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
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={SUB_MENU_BG}
                                                    noMainBGImg={false}
                                                />
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
