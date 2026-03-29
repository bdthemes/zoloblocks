/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * Internal depencencies
 */
const {
    ZoloCardDivider,
    ZoloSelectControl,
    ZoloToggleControl,
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
    TextShadowControl,
    TextStrokeControl,
    ZoloTextControl,
} = window.zoloModule;

import Sortable from './sortable';

import objAttributes from './attributes';

import {
    PRESETS,
    CONTENT_LAYOUT,
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
    LIST_ICON_GAP,
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
    H_TTITLE_WIDTH,
    //option
    ITEM_ALIGNS_OPTION,
    ICON_LIST_SHADOW,
    ICON_LIST_HOVER_SHADOW,

    //badge
    BADGE_BG,
    BADGE_GAP,
    BADGE_BORDER,
    BADGE_PADDING,
    BADGE_BORDER_RADIUS,

    //heading
    HEADING_MARGIN,
    HEADING_PADDING,
    HEADING_ALIGNMENT,
    HEADING_TEXT_SHADOW,
    HEADING_TEXT_STROKE,
    HEADING_BG,
    HEADING_BORDER,
    HEADING_BOX_SHADOW,
    HEADING_BORDER_RADIUS,
} from './constants';

import { DEFAULT_ALIGNS, FLEX_ALIGN_OPTIONS } from '../../../src/global/constants';
import { DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY, BADGE_TYPOGRAPHY, HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        contentLayout,
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
        globalIcon,
        isLinkable,
        showBadge,
        badgeColor,
        listIconBorderHover,
        highlightText,
        highlightTextColor,
        headingToggle,
        headingTag,
        headingColor,
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
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloSelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.list.presets', PRESETS)}
                                onChange={(value) => changePremade(value)}
                            />

                            <ZoloToggleControl
                                label={__('Enable Link', 'zoloblocks')}
                                checked={isLinkable}
                                onChange={() => setAttributes({ isLinkable: !isLinkable })}
                            />

                            <ZoloToggleControl
                                label={__('Show Badge', 'zoloblocks')}
                                checked={showBadge}
                                onChange={() => setAttributes({ showBadge: !showBadge })}
                            />

                            <ZoloToggleControl
                                label={__('Show Heading', 'zoloblocks')}
                                checked={headingToggle}
                                onChange={() => setAttributes({ headingToggle: !headingToggle })}
                            />

                            {preset !== 'zolo-list-style-1' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Show/hide Elements', 'zoloblocks')}</div>
                                    <ZoloToggleControl
                                        label={__('Icon', 'zoloblocks')}
                                        checked={iconToggle}
                                        onChange={() => setAttributes({ iconToggle: !iconToggle })}
                                    />
                                    <ZoloToggleControl
                                        label={__('Title', 'zoloblocks')}
                                        checked={titleToggle}
                                        onChange={() => setAttributes({ titleToggle: !titleToggle })}
                                    />
                                    <ZoloToggleControl
                                        label={__('Description', 'zoloblocks')}
                                        checked={DscToggle}
                                        onChange={() => setAttributes({ DscToggle: !DscToggle })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} panelProps={props}>
                            {preset !== 'zolo-list-style-1' && (
                                <>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Direction', 'zoloblocks')}
                                            value={contentLayout}
                                            onChange={(newTabsLayout) =>
                                                setAttributes({
                                                    contentLayout: newTabsLayout,
                                                })
                                            }
                                            options={CONTENT_LAYOUT}
                                        />
                                    </div>
                                    <ZoloCardDivider />
                                </>
                            )}

                            {contentLayout === 'horizontal' && (
                                <>
                                    <ResRangeControl
                                        label={__('Width', 'zoloblocks')}
                                        controlName={H_TTITLE_WIDTH}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        unit="%"
                                    />
                                    <ZoloCardDivider />
                                </>
                            )}

                            {contentLayout !== 'horizontal' && preset !== 'zolo-list-style-1' && (
                                <>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Type', 'zoloblocks')}
                                            value={layout}
                                            onChange={(value) =>
                                                setAttributes({
                                                    layout: value,
                                                })
                                            }
                                            options={[
                                                {
                                                    label: __('Grid', 'zoloblocks'),
                                                    value: 'grid',
                                                },
                                                {
                                                    label: __('Flex', 'zoloblocks'),
                                                    value: 'flex',
                                                },
                                            ]}
                                        />
                                    </div>
                                    {layout === 'grid' && (
                                        <>
                                            <ResCounterControl
                                                label={__('Column', 'zoloblocks')}
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
                                </>
                            )}

                            {preset === 'zolo-list-style-1' && (
                                <>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Type', 'zoloblocks')}
                                            value={layout}
                                            onChange={(value) =>
                                                setAttributes({
                                                    layout: value,
                                                })
                                            }
                                            options={[
                                                {
                                                    label: __('Grid', 'zoloblocks'),
                                                    value: 'grid',
                                                },
                                                {
                                                    label: __('Flex', 'zoloblocks'),
                                                    value: 'flex',
                                                },
                                            ]}
                                        />
                                    </div>
                                    {layout === 'grid' && (
                                        <>
                                            <ResCounterControl
                                                label={__('Column', 'zoloblocks')}
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
                                </>
                            )}

                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={LIST_COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={100}
                                min={1}
                            />
                            {contentLayout !== 'horizontal' && preset !== 'zolo-list-style-1' && (
                                <>
                                    <ZoloCardDivider />
                                    {(preset == 'zolo-list-style-1' || (preset == 'zolo-list-style-2' && layout == 'grid')) && (
                                        <ResAlignmentControl
                                            label={__('Item Alignment', 'zoloblocks')}
                                            controlName={ITEM_ALIGNMENT}
                                            requiredProps={requiredProps}
                                            alignOptions={layout === 'flex' ? ITEM_ALIGNS_OPTION : DEFAULT_ALIGNS}
                                        />
                                    )}

                                    {!iconToggle && (preset == 'zolo-list-style-3' || preset == 'zolo-list-style-4') && (
                                        <ResAlignmentControl
                                            label={__('Item Alignment', 'zoloblocks')}
                                            controlName={ITEM_ALIGNMENT}
                                            requiredProps={requiredProps}
                                            alignOptions={DEFAULT_ALIGNS}
                                        />
                                    )}

                                    {(layout == 'flex' || listGridDeskstyle > 1 || listGridTabStyle > 1 || listGridMobStyle > 1) && (
                                        <ResAlignmentControl
                                            label={__('Item Vertical Alignment', 'zoloblocks')}
                                            controlName={SINGLE_ITEM_ALIGNMENT}
                                            requiredProps={requiredProps}
                                            alignOptions={FLEX_ALIGN_OPTIONS}
                                        />
                                    )}
                                </>
                            )}

                            {preset === 'zolo-list-style-1' && (
                                <>
                                    {(preset == 'zolo-list-style-1' || (preset == 'zolo-list-style-2' && layout == 'grid')) && (
                                        <ResAlignmentControl
                                            label={__('Item Alignment', 'zoloblocks')}
                                            controlName={ITEM_ALIGNMENT}
                                            requiredProps={requiredProps}
                                            alignOptions={layout === 'flex' ? ITEM_ALIGNS_OPTION : DEFAULT_ALIGNS}
                                        />
                                    )}

                                    {!iconToggle && (preset == 'zolo-list-style-3' || preset == 'zolo-list-style-4') && (
                                        <ResAlignmentControl
                                            label={__('Item Alignment', 'zoloblocks')}
                                            controlName={ITEM_ALIGNMENT}
                                            requiredProps={requiredProps}
                                            alignOptions={DEFAULT_ALIGNS}
                                        />
                                    )}

                                    {(layout == 'flex' || listGridDeskstyle > 1 || listGridTabStyle > 1 || listGridMobStyle > 1) && (
                                        <ResAlignmentControl
                                            label={__('Item Vertical Alignment', 'zoloblocks')}
                                            controlName={SINGLE_ITEM_ALIGNMENT}
                                            requiredProps={requiredProps}
                                            alignOptions={FLEX_ALIGN_OPTIONS}
                                        />
                                    )}
                                </>
                            )}

                            {preset !== 'zolo-list-style-1' && (
                                <>
                                    <ZoloCardDivider />
                                    <ZoloIconPicker
                                        label={__('Global Icon', 'zoloblocks')}
                                        value={globalIcon}
                                        onChange={(v) =>
                                            setAttributes({
                                                ...globalIcon,
                                                globalIcon: v,
                                            })
                                        }
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        {headingToggle && (
                            <ZoloPanelBody title={__('Heading', 'zoloblocks')} panelProps={props}>
                                <ZoloSelectControl
                                    label={__('HTML Tag', 'zoloblocks')}
                                    options={[
                                        { label: 'H1', value: 'h1' },
                                        { label: 'H2', value: 'h2' },
                                        { label: 'H3', value: 'h3' },
                                        { label: 'H4', value: 'h4' },
                                        { label: 'H5', value: 'h5' },
                                        { label: 'H6', value: 'h6' },
                                        { label: 'div', value: 'div' },
                                        { label: 'span', value: 'span' },
                                        { label: 'p', value: 'p' },
                                    ]}
                                    value={headingTag}
                                    onChange={(value) => setAttributes({ headingTag: value })}
                                />
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={HEADING_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Add List', 'zoloblocks')} panelProps={props}>
                            <Sortable listProfiles={listProfiles} setAttributes={setAttributes} attributes={attributes} />
                        </ZoloPanelBody>

                        {preset == 'zolo-list-style-4' && (
                            <ZoloPanelBody title={__('Hover Icon', 'zoloblocks')} panelProps={props}>
                                <ZoloIconPicker
                                    label={__('Icon', 'zoloblocks')}
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
                        {headingToggle && (
                            <ZoloPanelBody title={__('Heading', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={headingColor}
                                    onChange={(value) => setAttributes({ headingColor: value })}
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={HEADING_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <TextShadowControl
                                    controlName={HEADING_TEXT_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                                <TextStrokeControl
                                    controlName={HEADING_TEXT_STROKE}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                                <ZoloCardDivider />
                                <NormalBGControl requiredProps={requiredProps} controlName={HEADING_BG} noOverlay={true} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={HEADING_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={HEADING_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ZoloCardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={HEADING_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl
                                    label={__('Box Shadow', 'zoloblocks')}
                                    controlName={HEADING_BOX_SHADOW}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={HEADING_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                    max={100}
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={!headingToggle} stylePanel={true} panelProps={props}>
                            <>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={textListColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        textListColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LIST_BG} noOverlay={true} />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={TEXT_LIST_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={LIST_ALLBOX_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                                max={100}
                                            />

                                            <ZoloCardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LIST_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={LIST_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={LIST_BOX_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                                max={100}
                                            />
                                            <ZoloTextControl
                                                label={__('Highlight Item', 'zoloblocks')}
                                                value={highlightText}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        highlightText: value,
                                                    })
                                                }
                                                help={__('Enter item numbers separated by punctuation (e.g., 1,2,3,4)', 'zoloblocks')}
                                            />
                                            {highlightText && (
                                                <ColorControl
                                                    label={__('Highlight Color', 'zoloblocks')}
                                                    color={highlightTextColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            highlightTextColor: value,
                                                        })
                                                    }
                                                />
                                            )}
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={txtHListColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        txtHListColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LIST_HOVER_BG} noOverlay={true} />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={BorderHovColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        BorderHovColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={LIST_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                />
                            </>
                        </ZoloPanelBody>
                        {DscToggle && (
                            <ZoloPanelBody title={__('Description', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={dscColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        dscColor: value,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={DSC_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <ZoloCardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={DSC_MARGIN}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
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
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={listIconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        listIconColor: value,
                                                    })
                                                }
                                            />
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={LIST_ICON_SIZE}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                            <ResGapControl
                                                label={__('Gap', 'zoloblocks')}
                                                controlName={LIST_ICON_GAP}
                                                requiredProps={requiredProps}
                                                max={100}
                                                min={0}
                                            />
                                            <ZoloCardDivider />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ICON_LIST_BG}
                                                noOverlay={true}
                                                noMainBGImg={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={ICON_LIST_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={ICON_LIST_MARGIN}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <ZoloCardDivider />

                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={ICON_LIST_BORDER}
                                                requiredProps={requiredProps}
                                            />

                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={ICON_LIST_SHADOW}
                                                requiredProps={requiredProps}
                                            />

                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={ICON_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />

                                            {(preset == 'zolo-list-style-3' || preset == 'zolo-list-style-4') && (
                                                <>
                                                    <ZoloCardDivider />
                                                    <ResAlignmentControl
                                                        label={__('Vertical Alignment', 'zoloblocks')}
                                                        controlName={ICON_VERTICAL_ALIGN}
                                                        requiredProps={requiredProps}
                                                        alignOptions={FLEX_ALIGN_OPTIONS}
                                                    />
                                                </>
                                            )}
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
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
                                            <ZoloCardDivider />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={listIconBorderHover}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        listIconBorderHover: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={ICON_LIST_HOVER_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {preset == 'zolo-list-style-4' && (
                            <ZoloPanelBody title={__('Hover Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={HoverIconColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            HoverIconColor: value,
                                        })
                                    }
                                />
                                <ResRangeControl
                                    label={__('Size', 'zoloblocks')}
                                    controlName={LIST_HOVER_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ZoloCardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={ICON_HOVER_LIST_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ZoloCardDivider />
                                <ResAlignmentControl
                                    label={__('Vertical Alignment', 'zoloblocks')}
                                    controlName={ICON_LINKVERTICAL_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={FLEX_ALIGN_OPTIONS}
                                />
                            </ZoloPanelBody>
                        )}

                        {showBadge && (
                            <ZoloPanelBody title={__('Badge', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={badgeColor}
                                    onChange={(badgeColor) => setAttributes({ badgeColor })}
                                />

                                <NormalBGControl controlName={BADGE_BG} requiredProps={requiredProps} noMainBGImg={true} />

                                <ResGapControl label={__('Gap', 'zoloblocks')} controlName={BADGE_GAP} requiredProps={requiredProps} />

                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={BADGE_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={BADGE_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={BADGE_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />

                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={BADGE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
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
