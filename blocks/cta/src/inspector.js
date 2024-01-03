/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    TabPanelControl,
    NormalBGControl,
    BoxShadowControl,
    ZoloIconPicker,
    LinkControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

import { HEADING, TEXT_ALIGN_OPTIONS, ICON_STATUS } from '../../../src/global/constants';

import objAttributes from './attributes';
import {
    ICON_POSITIONS,
    BUTTON_ALIGNMENT,
    PRESETS,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_PADDING,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    ICON_SIZE,
    TITLE_MARGIN,
    DESC_MARGIN,
    FLEX_GAP,
    ICON_TEXT_SPACING,
} from './constants';

import { TITLE_TYPO, DESC_TYPO, BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        showTitle,
        showDescription,
        showBtn,
        title,
        titleTag,
        titleColor,
        description,
        descriptionColor,
        label,
        link,
        iconType,
        icon,
        iconPosition,
        textColor,
        textHoverColor,
        borderHoverColor,
        preset,
        reversePosition,
        selectedPanel,
        selectedTab,
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
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show title', 'zolo-blocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />
                            <ToggleControl
                                label={__('Show description', 'zolo-blocks')}
                                checked={showDescription}
                                onChange={() => setAttributes({ showDescription: !showDescription })}
                            />
                            <ToggleControl
                                label={__('Show button', 'zolo-blocks')}
                                checked={showBtn}
                                onChange={() => setAttributes({ showBtn: !showBtn })}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={BUTTON_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        {preset === 'style-1' && (
                            <ZoloPanelBody title={__('Flex Direction', 'zolo-blocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Flex Reverse Direction', 'zolo-blocks')}
                                    checked={reversePosition}
                                    onChange={() =>
                                        setAttributes({
                                            reversePosition: !reversePosition,
                                        })
                                    }
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={FLEX_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                            {showTitle && (
                                <>
                                    <TextControl
                                        label={__('Title', 'zolo-blocks')}
                                        onChange={(value) => setAttributes({ title: value })}
                                        value={title}
                                        placeholder={__('title..', 'zolo-blocks')}
                                    />
                                    <SelectControl
                                        label={__('Title Tag', 'zolo-blocks')}
                                        value={titleTag}
                                        options={HEADING}
                                        onChange={(value) => {
                                            setAttributes({ titleTag: value });
                                        }}
                                    />
                                </>
                            )}
                            {showDescription && (
                                <TextareaControl
                                    label={__('Description', 'zolo-blocks')}
                                    value={description}
                                    onChange={(value) => setAttributes({ description: value })}
                                    placeholder={__('description..', 'zolo-blocks')}
                                />
                            )}

                            {iconType !== 'iconOnly' && (
                                <TextControl
                                    label={__('Button Label', 'zolo-blocks')}
                                    onChange={(value) => setAttributes({ label: value })}
                                    value={label}
                                    placeholder={__('label..', 'zolo-blocks')}
                                />
                            )}
                            <LinkControl
                                label={__('URL', 'zolo-blocks')}
                                value={link}
                                onChange={(value) => setAttributes({ link: value })}
                            />
                            <IconicBtnGroup
                                label={__('Icon Status', 'zolo-blocks')}
                                value={iconType}
                                onChange={(value) =>
                                    setAttributes({
                                        iconType: value,
                                    })
                                }
                                options={ICON_STATUS}
                            />
                            {iconType !== 'none' && (
                                <Fragment>
                                    <ZoloIconPicker
                                        label={__('Select Icon', 'zolo-blocks')}
                                        value={icon}
                                        onChange={(value) => {
                                            setAttributes({
                                                icon: value,
                                            });
                                        }}
                                    />

                                    {iconType !== 'iconOnly' && (
                                        <IconicBtnGroup
                                            label={__('Position', 'zolo-blocks')}
                                            value={iconPosition}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconPosition: value,
                                                })
                                            }
                                            options={ICON_POSITIONS}
                                        />
                                    )}
                                </Fragment>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {showTitle && (
                            <>
                                <ZoloPanelBody
                                    title={__('Title', 'zolo-blocks')}
                                    stylePanel={true}
                                    panelProps={props}
                                    firstOpen={preset === '' ? true : false}
                                >
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={titleColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                titleColor: value,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={TITLE_TYPO}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={TITLE_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        {showDescription && (
                            <>
                                <ZoloPanelBody title={__('Description', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={descriptionColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                descriptionColor: value,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={DESC_TYPO}
                                        requiredProps={requiredProps}
                                        max={36}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={DESC_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        <ZoloPanelBody title={__('Button', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            {iconType !== 'none' && (
                                <>
                                    <ResRangeControl
                                        label={__('Icon Size', 'zolo-blocks')}
                                        controlName={ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <ResRangeControl
                                        label={__('Spacing', 'zolo-blocks')}
                                        controlName={ICON_TEXT_SPACING}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                </>
                            )}
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={36}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={BUTTON_BORDER}
                                requiredProps={requiredProps}
                                hoverControl={
                                    <ColorControl
                                        label={__('Border Color', 'zolo-blocks')}
                                        color={borderHoverColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                borderHoverColor: value,
                                            })
                                        }
                                    />
                                }
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BUTTON_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BUTTON_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={textColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_BG} noMainBGImg={false} />
                                        <BoxShadowControl controlName={BUTTON_BOX_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={textHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={BUTTON_HOVER_BG_COLOR}
                                            noMainBGImg={false}
                                        />
                                        <BoxShadowControl
                                            controlName={BUTTON_HOVER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={true}
                                        />
                                    </>
                                }
                            />
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
