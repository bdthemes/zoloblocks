/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloInputControl,
    ZoloCardDivider,
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
    INDICATOR_GAP,
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
        horizontalTabItemWidth,
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
                            <ZoloInputControl
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
                                placeholder={__('1', 'zoloblocks')}
                            />
                            <div className="zolo-flex-row-control-tab">
                                <IconicBtnGroup
                                    label={__('Layout', 'zoloblocks')}
                                    value={tabsLayout}
                                    onChange={(newTabsLayout) => {
                                        const newAttrs = {
                                            tabsLayout: newTabsLayout,
                                        };
                                        if (newTabsLayout === 'horizontal' && tabIndicatorStyle === 'animation-style-4') {
                                            newAttrs.tabIndicatorStyle = 'animation-style-1';
                                        }
                                        setAttributes(newAttrs);
                                    }}
                                    options={LAYOUTS}
                                />
                            </div>
                            {tabsLayout === 'vertical' && (
                                <ZoloSelectControl
                                    label={__('Verticle Style', 'zoloblocks')}
                                    value={verticalPreset}
                                    options={applyFilters('zoloblocks.tabs.verticalPreset', VERTICAL_PRESETS) || []}
                                    onChange={(v) => onChangeVerticalPreset(v)}
                                />
                            )}
                            {showIcon && (
                                <ZoloSelectControl
                                    label={__('Content Style', 'zoloblocks')}
                                    value={tabContentStyle}
                                    options={CONTENT_STYLES}
                                    onChange={(newTabContentStyle) =>
                                        setAttributes({
                                            tabContentStyle: newTabContentStyle,
                                        })
                                    }
                                />
                            )}

                            {tabContentStyle === 'content-style-two' && showIcon && (
                                <div className="zolo-flex-row-control-tab">
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
                                </div>
                            )}
                            <div className="zolo-custom-heading">{__('Show/hide elements')}</div>
                            <ZoloToggleControl
                                label={__('Icon', 'zoloblocks')}
                                checked={showIcon}
                                onChange={(newShowIcon) => setAttributes({ showIcon: newShowIcon })}
                            />
                            <ZoloToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={(newShowTitle) => setAttributes({ showTitle: newShowTitle })}
                            />
                            <ZoloToggleControl
                                label={__('Description', 'zoloblocks')}
                                checked={showDesc}
                                onChange={(newShowDesc) => setAttributes({ showDesc: newShowDesc })}
                            />
                            <ZoloToggleControl
                                label={__('Active Indicator', 'zoloblocks')}
                                checked={showIndicator}
                                onChange={(newIndicator) => setAttributes({ showIndicator: newIndicator })}
                            />

                            {showIndicator && (
                                <ZoloSelectControl
                                    label={__('Indicator Style', 'zoloblocks')}
                                    value={tabIndicatorStyle}
                                    options={
                                        tabsLayout === 'horizontal'
                                            ? INDICATOR_STYLES.filter((item) => item.value !== 'animation-style-4')
                                            : INDICATOR_STYLES
                                    }
                                    onChange={(newIndicatorStyle) =>
                                        setAttributes({
                                            tabIndicatorStyle: newIndicatorStyle,
                                        })
                                    }
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Alignment', 'zoloblocks')} panelProps={props}>
                            {tabsLayout === 'horizontal' && tabItemWidth !== 'tiw_justify' && (
                                <ResAlignmentControl
                                    label={__('Tab Alignment', 'zoloblocks')}
                                    controlName={NAV_ITEMS_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={FLEX_HORIZONTAL_OPTIONS}
                                />
                            )}
                            <ResAlignmentControl
                                label={__('Tab Content Alignment', 'zoloblocks')}
                                controlName={NAV_CONTENT_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                            {showIcon && (
                                <ResAlignmentControl
                                    label={__('Icon Alignment', 'zoloblocks')}
                                    controlName={NAV_ICON_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={FLEX_ALIGN_OPTIONS}
                                />
                            )}
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
                            {tabsLayout === 'horizontal' && (
                                <>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Width', 'zoloblocks')}
                                            value={horizontalTabItemWidth}
                                            onChange={(value) =>
                                                setAttributes({
                                                    horizontalTabItemWidth: value,
                                                })
                                            }
                                            options={[
                                                { label: 'Full', value: '' },
                                                { label: 'Auto', value: 'zolo-h-tab-auto' },
                                            ]}
                                        />
                                    </div>
                                    <ZoloCardDivider />
                                </>
                            )}

                            <NormalBGControl requiredProps={requiredProps} controlName={TAB_WRAP_BGCOLOR} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={TAB_WRAP_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={TAB_WRAP_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={TAB_WRAP_BSHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={TAB_WRAP_RADIUS}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Tab Item', 'zoloblocks')} firstOpen={false} stylePanel={true} panelProps={props}>
                            <>
                                <TabPanelControl
                                    options={TAB_STATES}
                                    normalComponents={
                                        <>
                                            {tabsLayout !== 'vertical' && (
                                                <>
                                                    <div className="zolo-flex-row-control-tab">
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
                                                    </div>
                                                </>
                                            )}
                                            <ZoloCardDivider />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={TAB_NORMAL_BGCOLOR}
                                                noMainBGImg={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={TAB_ITEM_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={TAB_ITEM_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl controlName={TAB_ITEM_BSHADOW} requiredProps={requiredProps} />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={TAB_ITEM_RADIUS}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={TAB_HOVER_BGCOLOR}
                                                noMainBGImg={false}
                                            />
                                            <ZoloCardDivider />
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
                                        </>
                                    }
                                    activeComponents={
                                        <>
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={TAB_ACTIVE_BGCOLOR}
                                                noMainBGImg={false}
                                            />
                                            <ZoloCardDivider />
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
                                        </>
                                    }
                                />
                            </>
                        </ZoloPanelBody>

                        {showIcon && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <>
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
                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                />
                                                <ZoloCardDivider />
                                                <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={true} />
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
                                                <ZoloCardDivider />
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
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={TITLE_TYPO}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={TITLE_MARGIN}
                                                requiredProps={requiredProps}
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
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={DESC_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={DESC_MARGIN}
                                                requiredProps={requiredProps}
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
                            <ZoloPanelBody title={__('Active Indicator', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={activeHintTabColor}
                                        onChange={(newHintTabColor) => {
                                            setAttributes({
                                                activeHintTabColor: newHintTabColor,
                                            });
                                        }}
                                    />
                                    {tabIndicatorStyle === 'animation-style-4' && (
                                        <ResRangeControl
                                            label={__('Gap', 'zoloblocks')}
                                            controlName={INDICATOR_GAP}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    )}
                                    <ResRangeControl
                                        label={
                                            tabIndicatorStyle === 'animation-style-4'
                                                ? __('Active Width', 'zoloblocks')
                                                : __('Active Height', 'zoloblocks')
                                        }
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
