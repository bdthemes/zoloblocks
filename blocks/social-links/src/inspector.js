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
} = window.zoloModule;

import Sortable from './sortable';

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import {
    PRESETS,
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    BUTTON_PADDING,
    COLUMN_COUNT,
    COLUMNS_GAP,
    ROW_GAP,
    BUTTON_SIZE,
    ICON_TEXT_SPACING,
    SOCIAL_ICON_COLOR,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
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
        selectedPanel,
        selectedTab,
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
                        <PanelBody
                            title={__('General', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'general' })}
                            opened={selectedPanel === 'general'}
                        >
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
                        </PanelBody>
                        <PanelBody
                            title={__('Grid', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'grid' })}
                            opened={selectedPanel === 'grid'}
                        >
                            <ResCounterControl
                                label={__('Column Number', 'zolo-blocks')}
                                controlName={COLUMN_COUNT}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                            />
                            <ResRangeControl
                                label={__('Columns Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Row Gap', 'zolo-blocks')}
                                controlName={ROW_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Social Profiles', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'socialProfiles' })}
                            opened={selectedPanel === 'socialProfiles'}
                        >
                            <Sortable socialProfiles={socialProfiles} setAttributes={setAttributes} />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody
                            title={__('Social Icons', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'socialIconsStyle' })}
                            opened={selectedPanel === 'socialIconsStyle'}
                        >
                            {socialText !== 'iconOnly' && (
                                <TypographyDropdown
                                    label={__('Text Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TEXT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                            )}
                            {socialText !== 'none' && (
                                <ResRangeControl
                                    label={__('Size', 'zolo-blocks')}
                                    controlName={BUTTON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            )}
                            {socialText === 'iconText' && (
                                <ResRangeControl
                                    label={__('Icon-Text Gap', 'zolo-blocks')}
                                    controlName={ICON_TEXT_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            )}
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={BUTTON_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BTN_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={BTN_SHADOW} requiredProps={requiredProps} />
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
                        </PanelBody>
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
