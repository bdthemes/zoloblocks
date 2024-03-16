/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
    ToggleControl,
    TextControl,
    RangeControl,
    SelectControl,
    __experimentalNumberControl as NumberControl,
} from '@wordpress/components';
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
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO } from './constants/typoPrefixConstant';
import { NAV_ITEMS_ALIGN, NAV_SPACING, CONTENT_SPACING, TAB_NORMAL_BGCOLOR, TAB_HOVER_BGCOLOR, TAB_ACTIVE_BGCOLOR } from './constants';
import { FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS } from '../../../src/global/constants';
import Sortable from './sortable';

function Inspector(props) {
    const { attributes, setAttributes, handleTabClick, clientId, activeTabId, setActiveTabId } = props;
    const {
        resMode,
        normalTabColor,
        hoverTabColor,
        activeTabColor,
        tabTitles,
        tabChildCount,
        uniqueId,
        tabsLayout,
        tabActiveItemNo,
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
                            <SelectControl
                                label={__('Layout', 'zolo-blocks')}
                                value={tabsLayout}
                                options={[
                                    {
                                        value: 'horizontal',
                                        label: __('Horizontal', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'vertical-left',
                                        label: __('Vertical Left', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'vertical-right',
                                        label: __('Vertical Right', 'zolo-blocks'),
                                    },
                                ]}
                                onChange={(newTabsLayout) =>
                                    setAttributes({
                                        tabsLayout: newTabsLayout,
                                        activeTabId: 0,
                                    })
                                }
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={NAV_ITEMS_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_HORIZONTAL_OPTIONS}
                            />
                            <ResRangeControl
                                label={__('Nav Spacing', 'zolo-blocks')}
                                controlName={NAV_SPACING}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Content Spacing', 'zolo-blocks')}
                                controlName={CONTENT_SPACING}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <NumberControl
                                label={__('Active Item No', 'zolo-blocks')}
                                value={tabActiveItemNo}
                                onChange={(newTabActiveItem) =>
                                    setAttributes({
                                        tabActiveItemNo: newTabActiveItem,
                                        activeTabId: newTabActiveItem - 1,
                                    })
                                }
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
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Tabs', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                                                console.log('newNormalTabColor', newNormalTabColor)
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
                        </ZoloPanelBody>
                        {/* {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={titleColor}
                                    onChange={(color) => setAttributes({ titleColor: color })}
                                />
                                <ResRangeControl
                                    label={__('Title Gap', 'zolo-blocks')}
                                    controlName={TITLE_GAP}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )} */}
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
