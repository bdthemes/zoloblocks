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
    generateResCounterStyle,
} = window.zoloModule;

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import {
    MENU_COLUMNS_GAP,
    MENU_HEIGHT,
    ITEMS_GAP,
    LIST_COLUMN_COUNT,
    //ITEM
    ITEM_ALIGNMENT,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_SHADOW,
    LIST_BG,
    LIST_HOVER_BG,
    LIST_HOVER_BOX_SHADOW,
    ITEM_ALIGNS_OPTION,
} from './constants';

import { DEFAULT_ALIGNS, FLEX_ALIGN_OPTIONS } from '../../../src/global/constants';

import { DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, textListColor, txtHListColor, layout, BorderHovColor } = attributes;

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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/menu"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ResAlignmentControl
                                label={__('Item Alignment', 'zoloblocks')}
                                controlName={ITEM_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={layout === 'flex' ? ITEM_ALIGNS_OPTION : DEFAULT_ALIGNS}
                            />

                            <ResGapControl
                                label={__('Items Gap', 'zoloblocks')}
                                controlName={ITEMS_GAP}
                                requiredProps={requiredProps}
                                max={100}
                                min={1}
                            />
                            <ResRangeControl
                                label={__('Height', 'zoloblocks')}
                                controlName={MENU_HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <IconicBtnGroup
                                label={__('Layout Type', 'zoloblocks')}
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
                            {layout === 'grid' && (
                                <>
                                    <ResCounterControl
                                        label={__('Column Number', 'zoloblocks')}
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
                                label={__('Gap', 'zoloblocks')}
                                controlName={MENU_COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={100}
                                min={1}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LIST_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Radius', 'zoloblocks')}
                                                controlName={LIST_BOX_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                                max={100}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={LIST_ALLBOX_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                                max={100}
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LIST_BG} noOverlay={true} />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={LIST_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
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
                                            <NormalBGControl requiredProps={requiredProps} controlName={LIST_HOVER_BG} noOverlay={true} />
                                        </>
                                    }
                                />
                            </>
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TEXT_LIST_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
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
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/menu"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
