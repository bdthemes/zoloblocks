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
    PopoverControl,
    SimpleRangeControl,
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
        listIcon,
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

                            {(preset == 'zolo-list-style-1' || preset == 'zolo-list-style-2') && (
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

                                            {/* <PopoverControl
                                                label={__('Transform', 'zolo-blocks')}
                                                icon={
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M18.5818 15.3211L22 11.9184L18.5818 8.58813"
                                                            stroke="#4D4D4D"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M5.41818 15.3211L2 11.9184L5.41818 8.58813"
                                                            stroke="#4D4D4D"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2.35461 11.9548H21.6455"
                                                            stroke="#4D4D4D"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M15.3818 5.4027L11.9636 2L8.61816 5.4027"
                                                            stroke="#4D4D4D"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M8.61816 18.5974L12.0363 22.0001L15.3818 18.5974"
                                                            stroke="#4D4D4D"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M12 2.35278V21.2396"
                                                            stroke="#4D4D4D"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                }
                                            >
                                                <SimpleRangeControl
                                                    label={__('Translate X', 'zolo-blocks')}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                translateX: {
                                                                    ...lisTranform.translateX,
                                                                    value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={lisTranform?.translateX?.value}
                                                    onUnitChange={(unit) => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                translateX: {
                                                                    ...lisTranform.translateX,
                                                                    unit,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    unit={lisTranform?.translateX?.unit}
                                                    onReset={() => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                translateX: {
                                                                    ...lisTranform.translateX,
                                                                    value: 0,
                                                                    unit: 'px',
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    min={-100}
                                                    max={100}
                                                    noUnits={false}
                                                />
                                                <SimpleRangeControl
                                                    label={__('Translate Y', 'zolo-blocks')}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                translateY: {
                                                                    ...lisTranform.translateY,
                                                                    value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={lisTranform?.translateY?.value}
                                                    onUnitChange={(unit) => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                translateY: {
                                                                    ...lisTranform.translateY,
                                                                    unit,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    unit={lisTranform?.translateY?.unit}
                                                    onReset={() => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                translateY: {
                                                                    ...lisTranform.translateY,
                                                                    value: 0,
                                                                    unit: 'px',
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    min={-100}
                                                    max={100}
                                                    noUnits={false}
                                                />
                                                <SimpleRangeControl
                                                    label={__('Scale', 'zolo-blocks')}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                scale: {
                                                                    ...lisTranform.scale,
                                                                    value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={lisTranform?.scale?.value}
                                                    onReset={() => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                scale: {
                                                                    ...lisTranform.scale,
                                                                    value: 0,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    max={5}
                                                    min={0}
                                                    noUnits={true}
                                                />
                                                <SimpleRangeControl
                                                    label={__('Rotate', 'zolo-blocks')}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                rotate: {
                                                                    ...lisTranform.rotate,
                                                                    value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={lisTranform?.rotate?.value}
                                                    onReset={() => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                rotate: {
                                                                    ...lisTranform.rotate,
                                                                    value: 0,
                                                                    unit: 'deg',
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    min={-100}
                                                    max={100}
                                                    noUnits={true}
                                                />
                                                <SimpleRangeControl
                                                    label={__('TransformOrgin X', 'zolo-blocks')}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                transfromOrginX: {
                                                                    ...lisTranform.transfromOrginX,
                                                                    value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={lisTranform?.transfromOrginX?.value}
                                                    onReset={() => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                transfromOrginX: {
                                                                    ...lisTranform.transfromOrginX,
                                                                    value: 0,
                                                                    unit: '%',
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    min={-100}
                                                    max={200}
                                                    noUnits={true}
                                                />
                                                <SimpleRangeControl
                                                    label={__('TransformOrgin Y', 'zolo-blocks')}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                transfromOrginY: {
                                                                    ...lisTranform.transfromOrginY,
                                                                    value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={lisTranform?.transfromOrginY?.value}
                                                    onReset={() => {
                                                        setAttributes({
                                                            lisTranform: {
                                                                ...lisTranform,
                                                                transfromOrginY: {
                                                                    ...lisTranform.transfromOrginY,
                                                                    value: 0,
                                                                    unit: '%',
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    min={-100}
                                                    max={200}
                                                    noUnits={true}
                                                />
                                            </PopoverControl> */}
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
                                                color={listIcon}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        listIcon: value,
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
