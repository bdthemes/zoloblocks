/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, SelectControl, __experimentalInputControl as InputControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    NormalBGControl,
    TypographyDropdown,
    HeaderTabs,
    TabPanelControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
    ResDimensionsControl,
    BorderControl,
    BoxShadowControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO, DESC_TYPOGRAPHY } from './constants/typoPrefixConstant';
import {
    NAV_ITEMS_ALIGN,
    NAV_CONTENT_ALIGN,
    NAV_ICON_ALIGN,
    NAV_SPACING,
    CONTENT_SPACING,
    TAB_NORMAL_BGCOLOR,
    TAB_HOVER_BGCOLOR,
    TAB_ACTIVE_BGCOLOR,
    TAB_ITEM_PADDING,
    TAB_ITEM_RADIUS,
    TITLE_MARGIN,
    DESC_MARGIN,
    ACTIVE_HINT_HEIGHT,
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    ICON_BG,
    ICON_HBG,
    ICON_ABG,
    LAYOUTS,
    CONTENT_STYLES,
    INDICATOR_STYLES,
    VERTICAL_DIRECTIONS,
    CONTENT_DIRECTIONS,
    TAB_ITEM_WIDTHS,
    TAB_STATES,
    TAB_ITEM_BORDER,
    TABS_CWIDTH,
    TAB_ITEM_BSHADOW,
    TAB_ITEM_HBSHADOW,
    TAB_ITEM_ABSHADOW,
    TAB_WRAP_BGCOLOR,
    TAB_WRAP_BORDER,
    TAB_WRAP_RADIUS,
    TAB_WRAP_PADDING,
    TAB_WRAP_BSHADOW,
    VERTICAL_PRESETS,
} from './constants';
import { FLEX_HORIZONTAL_OPTIONS, TEXT_ALIGN_OPTIONS, FLEX_ALIGN_OPTIONS } from '../../../src/global/constants';
import Sortable from './sortable';

function Inspector(props) {
    const { attributes, setAttributes, handleTabClick, clientId, activeTabId, setActiveTabId } = props;
    const {
        resMode,
        tabTitleColors,
        activeHintTabColor,
        descColors,
        iconColors,
        tabTitles,
        tabChildCount,
        uniqueId,
        tabsLayout,
        verticalPreset,
        tabItemWidth,
        tabIndicatorStyle,
        tabActiveItemNo,
        showTitle,
        showDesc,
        showIcon,
        showIndicator,
        tabContentStyle,
        addNewTabStatus,
        verticalLayoutDirection,
        contentDirection,
        itemBorderColors,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    const onChangeVerticalPreset = (v) => {
        setAttributes({ verticalPreset: v });

        switch (v) {
            case 'vpreset-2':
                setAttributes({
                    showDesc: true,
                });
                break;
            default:
                setAttributes({
                    showDesc: false,
                });
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <InputControl
                                label={__('Initial open item', 'zoloblocks')}
                                value={tabActiveItemNo}
                                onChange={(nextValue) =>
                                    setAttributes({
                                        tabActiveItemNo: nextValue,
                                    })
                                }
                                type="number"
                                min={1}
                                max={tabChildCount || 99}
                                labelPosition="edge"
                                __unstableInputWidth="64px"
                                placeholder="1"
                            />
                            <IconicBtnGroup
                                label={__('Layout Type', 'zoloblocks')}
                                value={tabsLayout}
                                onChange={(newTabsLayout) =>
                                    setAttributes({
                                        tabsLayout: newTabsLayout,
                                    })
                                }
                                options={LAYOUTS}
                            />
                            {tabsLayout === 'vertical' && (
                                <SelectControl
                                    label={__('Verticle Style', 'zoloblocks')}
                                    value={verticalPreset}
                                    options={applyFilters('zoloblocks.tabs.verticalPreset', VERTICAL_PRESETS) || []}
                                    onChange={(v) => onChangeVerticalPreset(v)}
                                />
                            )}
                            <SelectControl
                                label={__('Content Style', 'zoloblocks')}
                                value={tabContentStyle}
                                options={CONTENT_STYLES}
                                onChange={(newTabContentStyle) =>
                                    setAttributes({
                                        tabContentStyle: newTabContentStyle,
                                    })
                                }
                            />
                            {tabContentStyle === 'content-style-two' && (
                                <IconicBtnGroup
                                    label={__('Direction', 'zoloblocks')}
                                    value={contentDirection}
                                    options={CONTENT_DIRECTIONS}
                                    onChange={(v) =>
                                        setAttributes({
                                            contentDirection: v,
                                        })
                                    }
                                />
                            )}
                            <ToggleControl
                                label={__('Show Icon', 'zoloblocks')}
                                checked={showIcon}
                                onChange={(newShowIcon) => setAttributes({ showIcon: newShowIcon })}
                            />
                            <ToggleControl
                                label={__('Show Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={(newShowTitle) => setAttributes({ showTitle: newShowTitle })}
                            />
                            <ToggleControl
                                label={__('Show Description', 'zoloblocks')}
                                checked={showDesc}
                                onChange={(newShowDesc) => setAttributes({ showDesc: newShowDesc })}
                            />
                            <ToggleControl
                                label={__('Show Active Indicator', 'zoloblocks')}
                                checked={showIndicator}
                                onChange={(newIndicator) => setAttributes({ showIndicator: newIndicator })}
                            />

                            {showIndicator && (
                                <SelectControl
                                    label={__('Indicator Style', 'zoloblocks')}
                                    value={tabIndicatorStyle}
                                    options={INDICATOR_STYLES}
                                    onChange={(newIndicatorStyle) =>
                                        setAttributes({
                                            tabIndicatorStyle: newIndicatorStyle,
                                        })
                                    }
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Alignment', 'zoloblocks')} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Tab Alignment', 'zoloblocks')}
                                controlName={NAV_ITEMS_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_HORIZONTAL_OPTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Tab Content Alignment', 'zoloblocks')}
                                controlName={NAV_CONTENT_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Icon Alignment', 'zoloblocks')}
                                controlName={NAV_ICON_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Spacing', 'zoloblocks')} panelProps={props}>
                            <ResRangeControl
                                label={__('Nav Spacing', 'zoloblocks')}
                                controlName={NAV_SPACING}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Tab-Content Spacing', 'zoloblocks')}
                                controlName={CONTENT_SPACING}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Tabs', 'zoloblocks')} panelProps={props}>
                            <Sortable
                                tabTitles={tabTitles}
                                setAttributes={setAttributes}
                                clientId={clientId}
                                uniqueId={uniqueId}
                                tabChildCount={tabChildCount}
                                handleTabClick={handleTabClick}
                                activeTabId={activeTabId}
                                setActiveTabId={setActiveTabId}
                                addNewTabStatus={addNewTabStatus}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {tabsLayout === 'vertical' && (
                            <ZoloPanelBody title={__('Tabs Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={TABS_CWIDTH}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={500}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody
                            title={__('Tabs Wrap', 'zoloblocks')}
                            firstOpen={tabsLayout === 'vertical' ? false : true}
                            stylePanel={true}
                            panelProps={props}
                        >
                            <NormalBGControl requiredProps={requiredProps} controlName={TAB_WRAP_BGCOLOR} noMainBGImg={false} />
                            <CardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={TAB_WRAP_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={TAB_WRAP_RADIUS}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={TAB_WRAP_PADDING}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={TAB_WRAP_BSHADOW} requiredProps={requiredProps} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Tab Item', 'zoloblocks')} firstOpen={false} stylePanel={true} panelProps={props}>
                            <>
                                {tabsLayout !== 'vertical' && (
                                    <IconicBtnGroup
                                        label={__('Width', 'zoloblocks')}
                                        value={tabItemWidth}
                                        options={TAB_ITEM_WIDTHS}
                                        onChange={(newTabItemWidth) =>
                                            setAttributes({
                                                tabItemWidth: newTabItemWidth,
                                            })
                                        }
                                    />
                                )}

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={TAB_ITEM_RADIUS}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={TAB_ITEM_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    options={TAB_STATES}
                                    normalComponents={
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={TAB_ITEM_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl controlName={TAB_ITEM_BSHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={TAB_NORMAL_BGCOLOR}
                                                noMainBGImg={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={itemBorderColors?.hover}
                                                onChange={(color) => {
                                                    setAttributes({
                                                        itemBorderColors: {
                                                            ...itemBorderColors,
                                                            hover: color,
                                                        },
                                                    });
                                                }}
                                            />
                                            <BoxShadowControl controlName={TAB_ITEM_HBSHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={TAB_HOVER_BGCOLOR}
                                                noMainBGImg={false}
                                            />
                                        </>
                                    }
                                    activeComponents={
                                        <>
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={itemBorderColors?.active}
                                                onChange={(color) => {
                                                    setAttributes({
                                                        itemBorderColors: {
                                                            ...itemBorderColors,
                                                            active: color,
                                                        },
                                                    });
                                                }}
                                            />
                                            <BoxShadowControl controlName={TAB_ITEM_ABSHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={TAB_ACTIVE_BGCOLOR}
                                                noMainBGImg={false}
                                            />
                                        </>
                                    }
                                />
                            </>
                        </ZoloPanelBody>

                        {showIcon && (
                            <ZoloPanelBody title={__('Icon', 'zolo-block')} stylePanel={true} panelProps={props}>
                                <>
                                    <ResRangeControl
                                        label={__('Size', 'zoloblocks')}
                                        controlName={ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        step={1}
                                    />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={ICON_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={ICON_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={ICON_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={ICON_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                    <TabPanelControl
                                        options={TAB_STATES}
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconColors?.normal}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            iconColors: {
                                                                ...iconColors,
                                                                normal: color,
                                                            },
                                                        })
                                                    }
                                                />
                                                <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={true} />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconColors?.hover}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            iconColors: {
                                                                ...iconColors,
                                                                hover: color,
                                                            },
                                                        })
                                                    }
                                                />
                                                <NormalBGControl requiredProps={requiredProps} controlName={ICON_HBG} noMainBGImg={true} />
                                            </>
                                        }
                                        activeComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconColors?.active}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            iconColors: {
                                                                ...iconColors,
                                                                active: color,
                                                            },
                                                        })
                                                    }
                                                />
                                                <NormalBGControl requiredProps={requiredProps} controlName={ICON_ABG} noMainBGImg={true} />
                                            </>
                                        }
                                    />
                                </>
                            </ZoloPanelBody>
                        )}

                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    options={TAB_STATES}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={tabTitleColors?.normal}
                                                onChange={(v) => {
                                                    setAttributes({
                                                        tabTitleColors: {
                                                            ...tabTitleColors,
                                                            normal: v,
                                                        },
                                                    });
                                                }}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={tabTitleColors?.hover}
                                                onChange={(v) =>
                                                    setAttributes({
                                                        tabTitleColors: {
                                                            ...tabTitleColors,
                                                            hover: v,
                                                        },
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    activeComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={tabTitleColors?.active}
                                                onChange={(v) =>
                                                    setAttributes({
                                                        tabTitleColors: {
                                                            ...tabTitleColors,
                                                            active: v,
                                                        },
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showDesc && (
                            <ZoloPanelBody title={__('Description', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={DESC_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={DESC_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    options={TAB_STATES}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={descColors?.normal}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        descColors: {
                                                            ...descColors,
                                                            normal: color,
                                                        },
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={descColors?.hover}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        descColors: {
                                                            ...descColors,
                                                            hover: color,
                                                        },
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    activeComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={descColors?.active}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        descColors: {
                                                            ...descColors,
                                                            active: color,
                                                        },
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showIndicator && (
                            <ZoloPanelBody title={__('Active Indicator', 'zolo-block')} stylePanel={true} panelProps={props}>
                                <>
                                    <ColorControl
                                        label={__('Indicator Color', 'zoloblocks')}
                                        color={activeHintTabColor}
                                        onChange={(newHintTabColor) => {
                                            setAttributes({
                                                activeHintTabColor: newHintTabColor,
                                            });
                                        }}
                                    />
                                    <ResRangeControl
                                        label={__('Active Indicator height', 'zoloblocks')}
                                        controlName={ACTIVE_HINT_HEIGHT}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        step={1}
                                    />
                                </>
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
