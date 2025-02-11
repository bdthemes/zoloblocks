/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { CardDivider, __experimentalInputControl as InputControl, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    NormalBGControl,
    HeaderTabs,
    TabPanelControl,
    AdvancedOptions,
    ZoloIconPicker,
    BoxShadowControl,
    TypographyDropdown,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO } from './constants/typoPrefixConstant';

import {
    AAC_BODY_BG,
    AAC_HEADER_BG,
    AC_BODY_BG,
    AC_BODY_BORDER,
    AC_BODY_BORDER_RADIUS,
    AC_BODY_MARGIN,
    AC_BODY_PADDING,
    AC_CONTAINER_BG,
    AC_CONTAINER_BORDER,
    AC_CONTAINER_BORDER_RADIUS,
    AC_CONTAINER_BOX_SHADOW,
    AC_CONTAINER_MARGIN,
    AC_CONTAINER_PADDING,
    AC_HEADER_BG,
    AC_HEADER_BORDER,
    AC_HEADER_BORDER_RADIUS,
    AC_HEADER_HBG,
    AC_HEADER_MARGIN,
    AC_HEADER_PADDING,
    AICONTAINER_BG,
    ANIMATED_BORDER_SIZE,
    ICONTAINER_BG,
    ICONTAINER_BORDER,
    ICONTAINER_BRADIUS,
    ICONTAINER_HBG,
    ICONTAINER_PADDING,
    ICON_SIZE,
    PRESETS,
} from './constants';

import { applyFilters } from '@wordpress/hooks';
import { HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        collapseIcon,
        expandIcon,
        iconColor,
        iconHoverColor,
        aiconColor,
        titleTag,
        titleColor,
        titleHoverColor,
        atitleColor,
        initialOpen,
        allowInitialOpen,
        allowMultiple,
        animatedBorderColor,
        animatedBorderActiveColor,
        preset,
        iconBorderHoverColor,
        iconBorderActiveColor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/accordion"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Preset', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.accordion.presets', PRESETS)}
                                onChange={(value) => {
                                    setAttributes({
                                        preset: value,
                                    });
                                }}
                            />

                            <ToggleControl
                                label={__('Initial Open', 'zoloblocks')}
                                checked={allowInitialOpen}
                                onChange={() => setAttributes({ allowInitialOpen: !allowInitialOpen })}
                                help={__('This feature works on the frontend only.', 'zoloblocks')}
                            />
                            {allowInitialOpen && (
                                <InputControl
                                    label={__('Initial open item', 'zoloblocks')}
                                    value={initialOpen}
                                    onChange={(nextValue) =>
                                        setAttributes({
                                            initialOpen: nextValue,
                                        })
                                    }
                                    type="number"
                                    min={1}
                                    max={99}
                                    labelPosition="edge"
                                    __unstableInputWidth="64px"
                                    placeholder="1"
                                />
                            )}

                            <ToggleControl
                                label={__('Allow multiple open at a time', 'zoloblocks')}
                                checked={allowMultiple}
                                onChange={() => setAttributes({ allowMultiple: !allowMultiple })}
                                help={__('This feature works on the frontend only.', 'zoloblocks')}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zoloblocks')} panelProps={props}>
                            <SelectControl
                                label={__('Tag', 'zoloblocks')}
                                value={titleTag}
                                options={HEADING}
                                onChange={(value) => {
                                    setAttributes({
                                        titleTag: value,
                                    });
                                }}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Icons', 'zoloblocks')} panelProps={props}>
                            <ZoloIconPicker
                                label={__('Collapsed', 'zoloblocks')}
                                value={collapseIcon}
                                onChange={(value) => {
                                    setAttributes({
                                        collapseIcon: value,
                                    });
                                }}
                            />

                            <ZoloIconPicker
                                label={__('Expanded', 'zoloblocks')}
                                value={expandIcon}
                                onChange={(value) => {
                                    setAttributes({
                                        expandIcon: value,
                                    });
                                }}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    { label: __('Normal', 'zoloblocks'), value: 'normal' },
                                    { label: __('Active', 'zoloblocks'), value: 'active' },
                                ]}
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={AC_CONTAINER_BG} noMainBGImg={true} />

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={AC_CONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={AC_CONTAINER_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />

                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={AC_CONTAINER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={AC_CONTAINER_BOX_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={AC_CONTAINER_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={AAC_HEADER_BG} noMainBGImg={true} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    { label: __('Normal', 'zoloblocks'), value: 'normal' },
                                    { label: __('Hover', 'zoloblocks'), value: 'hover' },
                                    { label: __('Active', 'zoloblocks'), value: 'active' },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={titleColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    titleColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TITLE_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={AC_HEADER_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={AC_HEADER_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={AC_HEADER_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={AC_HEADER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={AC_HEADER_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />

                                        {preset === 'style-3' && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Animated Border', 'zoloblocks')}</div>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={animatedBorderColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            animatedBorderColor: value,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Active Color', 'zoloblocks')}
                                                    color={animatedBorderActiveColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            animatedBorderActiveColor: value,
                                                        })
                                                    }
                                                />
                                                <ResRangeControl
                                                    label={__('Thickness', 'zoloblocks')}
                                                    controlName={ANIMATED_BORDER_SIZE}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={titleHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    titleHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={AC_HEADER_HBG} noMainBGImg={true} />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={atitleColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    atitleColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    { label: __('Normal', 'zoloblocks'), value: 'normal' },
                                    { label: __('Hover', 'zoloblocks'), value: 'hover' },
                                    { label: __('Active', 'zoloblocks'), value: 'active' },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={iconColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconColor: value,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={ICON_SIZE}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ICONTAINER_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ICONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ICONTAINER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ICONTAINER_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={iconHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ICONTAINER_HBG} noMainBGImg={true} />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={iconBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconBorderHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={aiconColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    aiconColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={AICONTAINER_BG} noMainBGImg={true} />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={iconBorderActiveColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconBorderActiveColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    { label: __('Normal', 'zoloblocks'), value: 'normal' },
                                    { label: __('Active', 'zoloblocks'), value: 'active' },
                                ]}
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={AC_BODY_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={AC_BODY_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={AC_BODY_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={AC_BODY_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={AC_BODY_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={AAC_BODY_BG} noMainBGImg={true} />
                                    </>
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
                            block="zolo/accordion"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
