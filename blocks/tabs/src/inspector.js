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
    TITLE_BOTTOM_SPACING,
    ACTIVE_HINT_HEIGHT,
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_BG,
    LAYOUTS,
    CONTENT_STYLES,
    INDICATOR_STYLES,
    VERTICAL_DIRECTIONS,
    CONTENT_DIRECTIONS,
} from './constants';
import { FLEX_HORIZONTAL_OPTIONS, TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';
import Sortable from './sortable';

function Inspector(props) {
    const { attributes, setAttributes, handleTabClick, clientId, activeTabId, setActiveTabId } = props;
    const {
        resMode,
        normalTabColor,
        hoverTabColor,
        activeTabColor,
        activeHintTabColor,
        descColor,
        descHoverColor,
        descActiveColor,
        iconColor,
        tabTitles,
        tabChildCount,
        uniqueId,
        tabsLayout,
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
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={NAV_ITEMS_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_HORIZONTAL_OPTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Content Alignment', 'zolo-blocks')}
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
                                label={__('Content Spacing', 'zolo-blocks')}
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
                        <ZoloPanelBody title={__('Tabs', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <>
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={TAB_ITEM_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={TAB_ITEM_RADIUS}
                                    requiredProps={requiredProps}
                                />
                            </>
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zolo-blocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Hover', 'zolo-blocks'),
                                        },
                                        {
                                            value: 'active',
                                            label: __('Active', 'zolo-blocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={normalTabColor}
                                                onChange={(newNormalTabColor) => {
                                                    setAttributes({
                                                        normalTabColor: newNormalTabColor,
                                                    });
                                                }}
                                            />
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
                                                label={__('Color', 'zolo-blocks')}
                                                color={hoverTabColor}
                                                onChange={(color) => setAttributes({ hoverTabColor: color })}
                                            />

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
                                                label={__('Color', 'zolo-blocks')}
                                                color={activeTabColor}
                                                onChange={(color) => setAttributes({ activeTabColor: color })}
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={TAB_ACTIVE_BGCOLOR}
                                                noMainBGImg={false}
                                            />
                                        </>
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Title Gap', 'zolo-blocks')}
                                    controlName={TITLE_BOTTOM_SPACING}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Description', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={DESC_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Normal', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Hover', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'active',
                                        label: __('Active', 'zolo-blocks'),
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={descColor}
                                            onChange={(color) => setAttributes({ descColor: color })}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={descHoverColor}
                                            onChange={(color) => setAttributes({ descHoverColor: color })}
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={descActiveColor}
                                            onChange={(color) => setAttributes({ descActiveColor: color })}
                                        />
                                    </>
                                }
                            />
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
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={iconColor}
                                        onChange={(color) =>
                                            setAttributes({
                                                iconColor: color,
                                            })
                                        }
                                    />
                                    <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={false} />
                                </>
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
