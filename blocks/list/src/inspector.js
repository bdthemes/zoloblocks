/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    TabPanelControl,
    HeaderTabs,
    ResCounterControl,
    ResDimensionsControl,
    ResAlignmentControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    TypographyDropdown,
    AdvancedOptions,
    ResGapControl,
    ZoloPanelBody,
    IconicBtnGroup,
    ZoloIconPicker,
    generateResCounterStyle,
} = window.zoloModule;

import Sortable from './sortable';

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import {
    PRESETS,
    LIST_COLUMN_COUNT,
    LIST_COLUMNS_GAP,
    SINGLE_ITEM_ALIGNMENT,
    //ITEM
    ITEM_ALIGNMENT,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_SHADOW,
    LIST_BG,
    LIST_HOVER_BG,
    LIST_HOVER_BOX_SHADOW,
    //desc
    DSC_MARGIN,
    //icon
    LIST_ICON_SIZE,
    ICON_LIST_BORDER,
    ICON_RADIUS,
    ICON_LIST_BG,
    ICON_LIST_HOVER_BG,
    ICON_LIST_PADDING,
    ICON_LIST_MARGIN,
    ICON_VERTICAL_ALIGN,
    //link Hover Icon
    LIST_HOVER_ICON_SIZE,
    ICON_HOVER_LIST_MARGIN,
    ICON_LINKVERTICAL_ALIGN,
} from './constants';

import { DEFAULT_ALIGNS, FLEX_ALIGN_OPTIONS } from '../../../src/global/constants';

import { DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        listProfiles,
        dscColor,
        dscHcolor,
        textListColor,
        txtHListColor,
        listIconColor,
        listIconHover,
        iconToggle,
        DscToggle,
        titleToggle,
        layout,
        linkHoverIcon,
        HoverIconColor,
        BorderHovColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };
    const {
        desktopRangeStyle: listGridDeskstyle,
        tabRangeStyle: listGridTabStyle,
        mobRangeStyle: listGridMobStyle,
    } = generateResCounterStyle({
        controlName: LIST_COLUMN_COUNT,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 1,
            tabRange: 1,
            mobRange: 1,
        },
    });

    /**
     * Preset
     */
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case 'zolo-list-style-1':
                setAttributes({ DscToggle: false });
                break;
            case 'zolo-list-style-2':
                setAttributes({ DscToggle: true });
                setAttributes({ iconToggle: true });
                setAttributes({ titleToggle: true });
                break;
            case 'zolo-list-style-3':
                setAttributes({ DscToggle: true });
                setAttributes({ iconToggle: true });
                setAttributes({ titleToggle: true });
                break;
            case 'zolo-list-style-4':
                setAttributes({ DscToggle: true });
                setAttributes({ iconToggle: true });
                setAttributes({ titleToggle: true });
                break;
            default:
                setAttributes({ DscToggle: false });
                setAttributes({ iconToggle: false });
                setAttributes({ titleToggle: false });
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/list"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={applyFilters('zolo.list.presets', PRESETS)}
                                onChange={(value) => changePremade(value)}
                            />
                            {preset !== 'zolo-list-style-1' && (
                                <ToggleControl
                                    label={__('Show Icon', 'zolo-blocks')}
                                    checked={iconToggle}
                                    onChange={() => setAttributes({ iconToggle: !iconToggle })}
                                />
                            )}
                            {preset !== 'zolo-list-style-1' && (
                                <ToggleControl
                                    label={__('Show Title', 'zolo-blocks')}
                                    checked={titleToggle}
                                    onChange={() => setAttributes({ titleToggle: !titleToggle })}
                                />
                            )}
                            {preset !== 'zolo-list-style-1' && (
                                <ToggleControl
                                    label={__('Show Description', 'zolo-blocks')}
                                    checked={DscToggle}
                                    onChange={() => setAttributes({ DscToggle: !DscToggle })}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Layout', 'zolo-blocks')} panelProps={props}>
                            <IconicBtnGroup
                                label={__('Layout Type', 'zolo-blocks')}
                                value={layout}
                                onChange={(value) =>
                                    setAttributes({
                                        layout: value,
                                    })
                                }
                                options={[
                                    {
                                        label: __('Grid', 'zolo-blocks'),
                                        value: 'grid',
                                    },
                                    {
                                        label: __('Flex', 'zolo-blocks'),
                                        value: 'flex',
                                    },
                                ]}
                            />
                            {layout === 'grid' && (
                                <>
                                    <ResCounterControl
                                        label={__('Column Number', 'zolo-blocks')}
                                        controlName={LIST_COLUMN_COUNT}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={10}
                                        defaults={{
                                            deskRange: 1,
                                            tabRange: 1,
                                            mobRange: 1,
                                        }}
                                    />
                                </>
                            )}

                            { (preset == 'zolo-list-style-1' && layout == 'grid'  || preset == 'zolo-list-style-2') && (
                                <ResAlignmentControl
                                    label={__('Horizantal Alignment', 'zolo-blocks')}
                                    controlName={ITEM_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                            )}
                            {!iconToggle && (preset == 'zolo-list-style-3' || preset == 'zolo-list-style-4') && (
                                <ResAlignmentControl
                                    label={__('Horizantal Alignment', 'zolo-blocks')}
                                    controlName={ITEM_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                            )}

                            {(layout == 'flex' || listGridDeskstyle > 1 || listGridTabStyle > 1 || listGridMobStyle > 1) && (
                                <ResAlignmentControl
                                    label={__('Vertical Alignment', 'zolo-blocks')}
                                    controlName={SINGLE_ITEM_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={FLEX_ALIGN_OPTIONS}
                                />
                            )}
                            <ResGapControl
                                label={__('Gap', 'zolo-blocks')}
                                controlName={LIST_COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={100}
                                min={1}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Add List', 'zolo-blocks')} panelProps={props}>
                            <Sortable listProfiles={listProfiles} setAttributes={setAttributes} attributes={attributes} />
                        </ZoloPanelBody>
                        {preset == 'zolo-list-style-4' && (
                            <ZoloPanelBody title={__('Link Hover Icon', 'zolo-blocks')} panelProps={props}>
                                <ZoloIconPicker
                                    label={__('Select Hover Icon', 'zolo-blocks')}
                                    value={linkHoverIcon}
                                    onChange={(value) => {
                                        setAttributes({
                                            linkHoverIcon: value,
                                        });
                                    }}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
                                                controlName={LIST_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Radius', 'zolo-blocks')}
                                                controlName={LIST_BOX_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                                max={100}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zolo-blocks')}
                                                controlName={LIST_ALLBOX_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                                max={100}
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LIST_BG} noOverlay={true} />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zolo-blocks')}
                                                controlName={LIST_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={BorderHovColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        BorderHovColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zolo-blocks')}
                                                controlName={LIST_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LIST_HOVER_BG} noOverlay={true} />
                                        </>
                                    }
                                />
                            </>
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={textListColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textListColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={TEXT_LIST_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={txtHListColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                txtHListColor: value,
                                            })
                                        }
                                    />
                                }
                            />
                        </ZoloPanelBody>
                        {DscToggle && (
                            <ZoloPanelBody title={__('Description', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={DSC_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={DSC_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={dscColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    dscColor: value,
                                                })
                                            }
                                        />
                                    }
                                    hoverComponents={
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={dscHcolor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    dscHcolor: value,
                                                })
                                            }
                                        />
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {preset !== 'zolo-list-style-1' && (
                            <ZoloPanelBody title={__('Icon', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                {(preset == 'zolo-list-style-3' || preset == 'zolo-list-style-4') && (
                                    <ResAlignmentControl
                                        label={__('Vertical Alignment', 'zolo-blocks')}
                                        controlName={ICON_VERTICAL_ALIGN}
                                        requiredProps={requiredProps}
                                        alignOptions={FLEX_ALIGN_OPTIONS}
                                    />
                                )}

                                <ResRangeControl
                                    label={__('Size', 'zolo-blocks')}
                                    controlName={LIST_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={ICON_LIST_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Radius', 'zolo-blocks')}
                                    controlName={ICON_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={ICON_LIST_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={ICON_LIST_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={listIconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        listIconColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ICON_LIST_BG}
                                                noOverlay={true}
                                                noMainBGImg={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={listIconHover}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        listIconHover: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ICON_LIST_HOVER_BG}
                                                noOverlay={true}
                                                noMainBGImg={true}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {preset == 'zolo-list-style-4' && (
                            <ZoloPanelBody title={__('Link Hover Icon', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                {preset == 'zolo-list-style-4' && (
                                    <ResAlignmentControl
                                        label={__('Vertical Alignment', 'zolo-blocks')}
                                        controlName={ICON_LINKVERTICAL_ALIGN}
                                        requiredProps={requiredProps}
                                        alignOptions={FLEX_ALIGN_OPTIONS}
                                    />
                                )}
                                <ResRangeControl
                                    label={__('Size', 'zolo-blocks')}
                                    controlName={LIST_HOVER_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={ICON_HOVER_LIST_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />

                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={HoverIconColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            HoverIconColor: value,
                                        })
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
                            block="zolo/list"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
