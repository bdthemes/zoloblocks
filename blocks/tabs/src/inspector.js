/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, SelectControl, __experimentalInputControl as InputControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

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
    NAV_SPACING,
    CONTENT_SPACING,
    TAB_NORMAL_BGCOLOR,
    TAB_HOVER_BGCOLOR,
    TAB_ACTIVE_BGCOLOR,
    TAB_ITEM_PADDING,
    TAB_ITEM_RADIUS,
    TITLE_MARGIN,
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
} from './constants';
import { FLEX_HORIZONTAL_OPTIONS, TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';
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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <InputControl
                                label={__('Initial open item', 'zolo-blocks')}
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
                            />
                            <SelectControl
                                label={__('Tabs Layout', 'zolo-blocks')}
                                value={tabsLayout}
                                options={LAYOUTS}
                                onChange={(newTabsLayout) =>
                                    setAttributes({
                                        tabsLayout: newTabsLayout,
                                    })
                                }
                            />
                            {tabsLayout === 'vertical' && (
                                <IconicBtnGroup
                                    label={__('Direction', 'zolo-blocks')}
                                    value={verticalLayoutDirection}
                                    options={VERTICAL_DIRECTIONS}
                                    onChange={(v) =>
                                        setAttributes({
                                            verticalLayoutDirection: v,
                                        })
                                    }
                                />
                            )}
                            <SelectControl
                                label={__('Content Style', 'zolo-blocks')}
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
                                    label={__('Direction', 'zolo-blocks')}
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
                                label={__('Show Icon', 'zolo-blocks')}
                                checked={showIcon}
                                onChange={(newShowIcon) => setAttributes({ showIcon: newShowIcon })}
                            />
                            <ToggleControl
                                label={__('Show Title', 'zolo-blocks')}
                                checked={showTitle}
                                onChange={(newShowTitle) => setAttributes({ showTitle: newShowTitle })}
                            />
                            <ToggleControl
                                label={__('Show Description', 'zolo-blocks')}
                                checked={showDesc}
                                onChange={(newShowDesc) => setAttributes({ showDesc: newShowDesc })}
                            />
                            <ToggleControl
                                label={__('Show Active Indicator', 'zolo-blocks')}
                                checked={showIndicator}
                                onChange={(newIndicator) => setAttributes({ showIndicator: newIndicator })}
                            />

                            {showIndicator && (
                                <SelectControl
                                    label={__('Indicator Style', 'zolo-blocks')}
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
                        <ZoloPanelBody title={__('Alignment', 'zolo-blocks')} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Tab Alignment', 'zolo-blocks')}
                                controlName={NAV_ITEMS_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_HORIZONTAL_OPTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Tab Content Alignment', 'zolo-blocks')}
                                controlName={NAV_CONTENT_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Spacing', 'zolo-blocks')} panelProps={props}>
                            <ResRangeControl
                                label={__('Nav Spacing', 'zolo-blocks')}
                                controlName={NAV_SPACING}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Tab-Content Spacing', 'zolo-blocks')}
                                controlName={CONTENT_SPACING}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Tabs', 'zolo-blocks')} panelProps={props}>
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
                            <ZoloPanelBody
                                title={__('Tabs Container', 'zolo-blocks')}
                                firstOpen={true}
                                stylePanel={true}
                                panelProps={props}
                            >
                                <ResRangeControl
                                    label={__('Width', 'zolo-blocks')}
                                    controlName={TABS_CWIDTH}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={500}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody
                            title={__('Tab Item', 'zolo-blocks')}
                            firstOpen={tabsLayout === 'vertical' ? false : true}
                            stylePanel={true}
                            panelProps={props}
                        >
                            <>
                                {tabsLayout !== 'vertical' && (
                                    <IconicBtnGroup
                                        label={__('Width', 'zolo-blocks')}
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
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={TAB_ITEM_RADIUS}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={TAB_ITEM_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    options={TAB_STATES}
                                    normalComponents={
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
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
                                                label={__('Border Color', 'zolo-blocks')}
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
                                                label={__('Border Color', 'zolo-blocks')}
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
                                        label={__('Size', 'zolo-blocks')}
                                        controlName={ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        step={1}
                                    />
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={ICON_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={ICON_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zolo-blocks')}
                                        controlName={ICON_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={ICON_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                    <TabPanelControl
                                        options={TAB_STATES}
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
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
                                                    label={__('Color', 'zolo-blocks')}
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
                                                    label={__('Color', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    options={TAB_STATES}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
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
                                                label={__('Color', 'zolo-blocks')}
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
                                                label={__('Color', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Description', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={DESC_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    options={TAB_STATES}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
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
                                                label={__('Color', 'zolo-blocks')}
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
                                                label={__('Color', 'zolo-blocks')}
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
                                        label={__('Indicator Color', 'zolo-blocks')}
                                        color={activeHintTabColor}
                                        onChange={(newHintTabColor) => {
                                            setAttributes({
                                                activeHintTabColor: newHintTabColor,
                                            });
                                        }}
                                    />
                                    <ResRangeControl
                                        label={__('Active Indicator height', 'zolo-blocks')}
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
