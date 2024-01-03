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
    ResGapControl,
    ZoloPanelBody,
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
    ICON_TEXT_SPACING,
    SOCIAL_ICON_COLOR,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    PT_ICON_HEIGHT,
    PT_ICON_WIDTH,
} from './constants';

import { ICON_STATUS } from '../../../src/global/constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        socialText,
        socialProfiles,
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
                            <IconicBtnGroup
                                label={__('Type', 'zolo-blocks')}
                                value={socialText}
                                onChange={(value) =>
                                    setAttributes({
                                        socialText: value,
                                    })
                                }
                                options={ICON_STATUS}
                            />
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
                                        label: __('Flex', 'zolo-blocks'),
                                        value: 'flex',
                                    },
                                    {
                                        label: __('Grid', 'zolo-blocks'),
                                        value: 'grid',
                                    },
                                ]}
                            />
                            {layout === 'grid' && (
                                <>
                                    <ResCounterControl
                                        label={__('Column Number', 'zolo-blocks')}
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
                                label={__('Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Social Profiles', 'zolo-blocks')} panelProps={props}>
                            <Sortable socialProfiles={socialProfiles} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Social Icons', 'zolo-blocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            {socialText !== 'iconOnly' && (
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
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
                                                label={__('Width', 'zolo-blocks')}
                                                controlName={PT_ICON_WIDTH}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={500}
                                                step={1}
                                            />
                                            <ResRangeControl
                                                label={__('Height', 'zolo-blocks')}
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
                            {socialText === 'iconText' && (
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={ICON_TEXT_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            )}
                            {socialColor === 'custom' && (
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={BUTTON_BORDER}
                                    requiredProps={requiredProps}
                                />
                            )}

                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BTN_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BUTTON_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <IconicBtnGroup
                                label={__('Color Type', 'zolo-blocks')}
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
                                                label={__('Color', 'zolo-blocks')}
                                                color={socialTextColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        socialTextColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
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
                                                        label={__('Icon Color', 'zolo-blocks')}
                                                        color={iconColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconColor: value,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__('Icon Background', 'zolo-blocks')}
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
                                                label={__('Color', 'zolo-blocks')}
                                                color={socialTextHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        socialTextHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
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
                                                        label={__('Icon Color', 'zolo-blocks')}
                                                        color={iconHoverColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconHoverColor: value,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__('Icon Background', 'zolo-blocks')}
                                                        color={iconBgHoverColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconBgHoverColor: value,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={borderHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        borderHoverColor: value,
                                                    })
                                                }
                                            />
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
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
