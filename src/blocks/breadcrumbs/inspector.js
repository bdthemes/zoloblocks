import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import objAttributes from './attributes';
import { ITEM_TYPOGRAPHY, HOME_TYPOGRAPHY, CURRENT_TYPOGRAPHY } from './constants/typoPrefixConstant';

import {
    PRESETS,
    ROW_ALIGNMENT,
    COLUMNS_GAP,
    //item
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_BORDER_RADIUS,
    ITEM_HOVER_PADDING,
    ITEM_HOVER_SHADOW,
    //home
    HOME_BG,
    HOME_BORDER,
    HOME_BORDER_RADIUS,
    HOME_PADDING,
    HOME_SHADOW,
    HOME_HOVER_BG,
    HOME_HOVER_BORDER_RADIUS,
    HOME_HOVER_PADDING,
    HOME_HOVER_SHADOW,
    HOME_ICON_SPACE,
    HOME_ICON_SIZE,
    //current
    CURRENT_BG,
    CURRENT_BORDER,
    CURRENT_BORDER_RADIUS,
    CURRENT_PADDING,
    CURRENT_SHADOW,
    CURRENT_HOVER_BG,
    CURRENT_HOVER_BORDER_RADIUS,
    CURRENT_HOVER_PADDING,
    CURRENT_HOVER_SHADOW,
    //separator
    SEP_SIZE,
    SEP_BG,
    SEP_BORDER,
    SEP_BORDER_RADIUS,
    SEP_PADDING,
    SEP_MARGIN,
    SEP_SHADOW,
    SEP_HOVER_BG,
    SEP_HOVER_BORDER_RADIUS,
    SEP_HOVER_PADDING,
    SEP_HOVER_SHADOW,
    HOME_BTN_OPTIONS,
} from './constants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';

const {
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    ColorControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    ResAlignmentControl,
    TabDynamicControl,
    TabPanelControl,
    ZoloIconPicker,
    ResRangeControl,
    IconicBtnGroup,
} = window.zoloModule;
export default function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        showSeparator,
        separatorIcon,
        showHome,
        homeIcon,
        homeText,
        showCurrent,

        //item
        itemColor,
        itemHoverColor,
        itemHoverBColor,
        //home
        homeColor,
        homeHoverColor,
        homeHoverBColor,
        homeIconColor,
        homeIconHoverColor,
        //current
        currentColor,
        currentHoverColor,
        currentHoverBColor,
        //separator
        sepColor,
        sepHoverColor,
        sepHoverBColor,
        homeBtnType,
    } = attributes;
    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            {/* <SelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.breadcrumbs.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            /> */}

                            <ToggleControl
                                label={__('Show Home', 'zoloblocks')}
                                checked={showHome}
                                onChange={(showHome) => setAttributes({ showHome })}
                            />
                            {showHome && (
                                <>
                                    <IconicBtnGroup
                                        value={homeBtnType}
                                        onChange={(value) =>
                                            setAttributes({
                                                homeBtnType: value,
                                            })
                                        }
                                        options={HOME_BTN_OPTIONS}
                                    />
                                    {homeBtnType === 'text' && (
                                        <TextControl
                                            label={__('Home Text', 'zoloblocks')}
                                            value={homeText}
                                            onChange={(homeText) => setAttributes({ homeText })}
                                        />
                                    )}
                                    {homeBtnType === 'icon' && (
                                        <>
                                            <ZoloIconPicker
                                                label={__('Home Icon', 'zoloblocks')}
                                                value={homeIcon}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        homeIcon: value,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    <CardDivider />
                                </>
                            )}

                            <ToggleControl
                                label={__('Show Current', 'zoloblocks')}
                                checked={showCurrent}
                                onChange={(showCurrent) => setAttributes({ showCurrent })}
                            />

                            <ToggleControl
                                label={__('Show Separator', 'zoloblocks')}
                                checked={showSeparator}
                                onChange={(showSeparator) => setAttributes({ showSeparator })}
                            />

                            {showSeparator && (
                                <ZoloIconPicker
                                    label={__('Separator Icon', 'zoloblocks')}
                                    value={separatorIcon}
                                    onChange={(value) =>
                                        setAttributes({
                                            separatorIcon: value,
                                        })
                                    }
                                />
                            )}
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={ROW_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResGapControl
                                label={__('Space Between', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={ITEM_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={itemColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    itemColor: color,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ITEM_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={ITEM_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={itemHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    itemHoverColor: color,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={true} />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={itemHoverBColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    itemHoverBColor: color,
                                                })
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={ITEM_HOVER_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        {showHome && (
                            <ZoloPanelBody title={__('Home', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={HOME_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={homeColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        homeColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={HOME_BG} noMainBGImg={true} />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={HOME_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={HOME_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={HOME_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={HOME_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            {homeIcon && (
                                                <>
                                                    <div className="zolo-custom-heading">{__('Icon', 'zoloblocks')}</div>
                                                    <ColorControl
                                                        label={__('Icon Color', 'zoloblocks')}
                                                        color={homeIconColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                homeIconColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ResRangeControl
                                                        label={__('Icon Size', 'zoloblocks')}
                                                        controlName={HOME_ICON_SIZE}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={50}
                                                    />
                                                    <ResGapControl
                                                        label={__('Space Between', 'zoloblocks')}
                                                        controlName={HOME_ICON_SPACE}
                                                        requiredProps={requiredProps}
                                                        max={200}
                                                    />
                                                </>
                                            )}
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={homeHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        homeHoverColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={HOME_HOVER_BG} noMainBGImg={true} />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={homeHoverBColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        homeHoverBColor: color,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={HOME_HOVER_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            {showHome && (
                                                <>
                                                    <div className="zolo-custom-heading">{__('Icon', 'zoloblocks')}</div>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={homeIconHoverColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                homeIconHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showCurrent && (
                            <ZoloPanelBody title={__('Current Item', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={CURRENT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={currentColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        currentColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={CURRENT_BG} noMainBGImg={true} />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={CURRENT_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={CURRENT_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={CURRENT_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={CURRENT_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={currentHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        currentHoverColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={CURRENT_HOVER_BG}
                                                noMainBGImg={true}
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={currentHoverBColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        currentHoverBColor: color,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={CURRENT_HOVER_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showSeparator && (
                            <ZoloPanelBody title={__('Separator', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ResRangeControl
                                                label={__('Icon Size', 'zoloblocks')}
                                                controlName={SEP_SIZE}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={50}
                                            />
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={sepColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        sepColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={SEP_BG} noMainBGImg={true} />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={SEP_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={SEP_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={SEP_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={SEP_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={SEP_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={sepHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        sepHoverColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={SEP_HOVER_BG} noMainBGImg={true} />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={sepHoverBColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        sepHoverBColor: color,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={SEP_HOVER_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/breadcrumbs"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
