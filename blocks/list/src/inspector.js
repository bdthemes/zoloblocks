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
    TextStrokeControl,
    IconicBtnGroup,
    ZoloIconPicker,
} = window.zoloModule;

import Sortable from './sortable';

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextareaControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import {
    PRESETS,
    LIST_COLUMN_COUNT,
    LIST_COLUMNS_GAP,
    //ITEM
    ITEM_ALIGNMENT,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_MARGIN,
    LIST_BOX_SHADOW,
    LIST_BG,
    //desc
    DSC_MARGIN,
    //list Title
    TEXT_LIST_MARGIN,
    TEXT_LIST_STROKE,
    //icon
    LIST_ICON_SIZE,
    ICON_LIST_BORDER,
    ICON_RADIUS,
    ICON_LIST_BG,
    ICON_LIST_HOVER_BG,
    ICON_LIST_PADDING,
    ICON_LIST_MARGIN,
    //link Hover Icon
    LIST_HOVER_ICON_SIZE,
    ICON_HOVER_LIST_MARGIN,
} from './constants';

import { DEFAULT_ALIGNS } from '../../../src/global/constants';

import { DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        listProfiles,
        dscColor,
        textListColor,
        listIcon,
        listIconHover,
        iconToggle,
        DscToggle,
        titleToggle,
        layout,
        linkHoverIcon,
        HoverIconColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

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
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
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

                            <ResGapControl
                                label={__('Gap', 'zolo-blocks')}
                                controlName={LIST_COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={200}
                                min={-200}
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
                                <ResAlignmentControl
                                    label={__('Alignment', 'zolo-blocks')}
                                    controlName={ITEM_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />

                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={LIST_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Box Radius', 'zolo-blocks')}
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
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={LIST_BOX_MARGIN}
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={TEXT_LIST_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={36}
                            />
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={textListColor}
                                onChange={(value) =>
                                    setAttributes({
                                        textListColor: value,
                                    })
                                }
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TEXT_LIST_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <TextStrokeControl controlName={TEXT_LIST_STROKE} requiredProps={requiredProps} enableTransition={false} />
                        </ZoloPanelBody>
                        {DscToggle && (
                            <ZoloPanelBody title={__('Description', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={DSC_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={dscColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            dscColor: value,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={DSC_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </ZoloPanelBody>
                        )}
                        {preset !== 'zolo-list-style-1' && (
                            <ZoloPanelBody title={__('Icon', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
