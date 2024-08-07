/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    TabPanelControl,
    HeaderTabs,
    IconicBtnGroup,
    ResCounterControl,
    ResDimensionsControl,
    BorderControl,
    BoxShadowControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    ResAlignmentControl,
} = window.zoloModule;

import Sortable from './sortable';

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import {
    PRESETS,
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    BUTTON_PADDING,
    COLUMN_COUNT,
    COLUMNS_GAP,
    BUTTON_SIZE,
    ICON_TEXT_SPACING,
    SOCIAL_ICON_COLOR,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    PT_ICON_HEIGHT,
    PT_ICON_WIDTH,
    BLOCK_ALIGNMENT,
} from './constants';

import { ICON_STATUS, FLEX_HORIZONTAL_OPTIONS } from '../../../src/global/constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        socialText,
        socialMedia,
        socialColor,
        socialTextColor,
        socialTextHoverColor,
        socialBgColor,
        socialBgHoverColor,
        borderHoverColor,
        layout,
        iconColor,
        iconHoverColor,
        iconBgColor,
        iconBgHoverColor,
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
            case 'preset-1':
                setAttributes({
                    socialText: 'iconText',
                });
                break;
            case 'preset-2':
                setAttributes({
                    socialText: 'iconOnly',
                });
                break;
            case 'preset-3':
                setAttributes({
                    socialText: 'iconText',
                });
                break;
            default:
                setAttributes({
                    socialText: 'iconText',
                });
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/social-share"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.socialShare.presets', PRESETS)}
                                onChange={(value) => changePremade(value)}
                            />
                            <IconicBtnGroup
                                label={__('Type', 'zoloblocks')}
                                value={socialText}
                                onChange={(value) =>
                                    setAttributes({
                                        socialText: value,
                                    })
                                }
                                options={ICON_STATUS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} panelProps={props}>
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
                                        label: __('Flex', 'zoloblocks'),
                                        value: 'flex',
                                    },
                                    {
                                        label: __('Grid', 'zoloblocks'),
                                        value: 'grid',
                                    },
                                ]}
                            />
                            {layout === 'grid' && (
                                <>
                                    <ResCounterControl
                                        label={__('Column Number', 'zoloblocks')}
                                        controlName={COLUMN_COUNT}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={10}
                                        defaults={{
                                            deskRange: 5,
                                            tabRange: 3,
                                            mobRange: 2,
                                        }}
                                    />
                                </>
                            )}
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                            {layout === 'flex' && (
                                <>
                                    <ResAlignmentControl
                                        label={__('Alignment', 'zoloblocks')}
                                        controlName={BLOCK_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={FLEX_HORIZONTAL_OPTIONS}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Social Media', 'zoloblocks')} panelProps={props}>
                            <Sortable socialMedia={socialMedia} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Social Icons', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            {socialText !== 'iconOnly' && (
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TEXT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                            )}
                            {socialText !== 'none' && (
                                <>
                                    {preset === 'preset-3' && (
                                        <>
                                            <ResRangeControl
                                                label={__('Width', 'zoloblocks')}
                                                controlName={PT_ICON_WIDTH}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={500}
                                                step={1}
                                            />
                                            <ResRangeControl
                                                label={__('Height', 'zoloblocks')}
                                                controlName={PT_ICON_HEIGHT}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={500}
                                                step={1}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                            {preset !== 'preset-1' && (
                                <ResRangeControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName={BUTTON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            )}
                            {preset === 'preset-1' && socialText === 'iconOnly' && (
                                <ResRangeControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName={BUTTON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            )}
                            {socialText === 'iconText' && (
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={ICON_TEXT_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            )}
                            {socialColor === 'custom' && (
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={BUTTON_BORDER}
                                    requiredProps={requiredProps}
                                    hoverControl={
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={borderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    borderHoverColor: value,
                                                })
                                            }
                                        />
                                    }
                                />
                            )}

                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={BTN_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={BUTTON_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <IconicBtnGroup
                                label={__('Color Type', 'zoloblocks')}
                                value={socialColor}
                                onChange={(value) =>
                                    setAttributes({
                                        socialColor: value,
                                    })
                                }
                                options={SOCIAL_ICON_COLOR}
                            />
                            {socialColor === 'custom' && (
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={socialTextColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        socialTextColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={socialBgColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        socialBgColor: value,
                                                    })
                                                }
                                            />
                                            {socialText !== 'none' && preset === 'preset-3' && (
                                                <>
                                                    <ColorControl
                                                        label={__('Icon Color', 'zoloblocks')}
                                                        color={iconColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconColor: value,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__('Icon Background', 'zoloblocks')}
                                                        color={iconBgColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconBgColor: value,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            <BoxShadowControl controlName={BTN_SHADOW} requiredProps={requiredProps} />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={socialTextHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        socialTextHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={socialBgHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        socialBgHoverColor: value,
                                                    })
                                                }
                                            />
                                            {socialText !== 'none' && preset === 'preset-3' && (
                                                <>
                                                    <ColorControl
                                                        label={__('Icon Color', 'zoloblocks')}
                                                        color={iconHoverColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconHoverColor: value,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__('Icon Background', 'zoloblocks')}
                                                        color={iconBgHoverColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconBgHoverColor: value,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            <BoxShadowControl controlName={BTN_HOVER_SHADOW} requiredProps={requiredProps} />
                                        </>
                                    }
                                />
                            )}
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/social-share"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
