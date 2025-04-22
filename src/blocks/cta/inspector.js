/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextareaControl, ToggleControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */

import { TextControl } from '../../components/Core';

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
    // secondary button
    ICON_S_SIZE,
    ICON_TEXT_S_SPACING,
    BUTTON_S_BORDER,
    BUTTON_S_BORDER_RADIUS,
    BUTTON_S_PADDING,
    BUTTON_S_BG,
    BUTTON_S_BOX_SHADOW,
    BUTTON_HOVER_S_BG_COLOR,
    BUTTON_HOVER_S_BOX_SHADOW,
} from './constants';

import { TITLE_TYPO, DESC_TYPO, BUTTON_TYPOGRAPHY, BUTTON_S_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        showTitle,
        showDescription,
        showBtn,
        showSecondaryBtn,
        title,
        titleTag,
        titleColor,
        description,
        descriptionColor,
        label,
        Slabel,
        link,
        Slink,
        iconType,
        SiconType,
        icon,
        Sicon,
        iconPosition,
        SiconPosition,
        textColor,
        textHoverColor,
        StextColor,
        SHoverColor,
        borderHoverColor,
        SborderHoverColor,
        preset,
        reversePosition,
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
                block="zolo/cta"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.cta.presets', PRESETS)}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <div className="zolo-custom-heading">{__('Show/hide Elements', 'zoloblocks')}</div>

                            <ToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />
                            <ToggleControl
                                label={__('Description', 'zoloblocks')}
                                checked={showDescription}
                                onChange={() => setAttributes({ showDescription: !showDescription })}
                            />
                            <ToggleControl
                                label={__('Primary button', 'zoloblocks')}
                                checked={showBtn}
                                onChange={() => setAttributes({ showBtn: !showBtn })}
                            />
                            <ToggleControl
                                label={__('Secondary button', 'zoloblocks')}
                                checked={showSecondaryBtn}
                                onChange={() => setAttributes({ showSecondaryBtn: !showSecondaryBtn })}
                            />
                            <CardDivider />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={BUTTON_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        {preset === 'style-1' && (
                            <ZoloPanelBody title={__('Flex Direction', 'zoloblocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Flex Reverse Direction', 'zoloblocks')}
                                    checked={reversePosition}
                                    onChange={() =>
                                        setAttributes({
                                            reversePosition: !reversePosition,
                                        })
                                    }
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={FLEX_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {showTitle && (
                                <>
                                    <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                        {__('Title', 'zoloblocks')}
                                    </div>
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        onChange={(value) => setAttributes({ title: value })}
                                        value={title}
                                        placeholder={__('Title..', 'zoloblocks')}
                                    />
                                    <SelectControl
                                        label={__('Tag', 'zoloblocks')}
                                        value={titleTag}
                                        options={HEADING}
                                        onChange={(value) => {
                                            setAttributes({ titleTag: value });
                                        }}
                                    />
                                </>
                            )}
                            {showDescription && (
                                <>
                                    <div className="zolo-custom-heading">{__('Description', 'zoloblocks')}</div>
                                    <div className="zolo-flex-col-control">
                                        <TextareaControl
                                            label={__('Text', 'zoloblocks')}
                                            value={description}
                                            onChange={(value) => setAttributes({ description: value })}
                                            placeholder={__('Description..', 'zoloblocks')}
                                        />
                                    </div>
                                </>
                            )}
                        </ZoloPanelBody>
                        {showBtn && (
                            <ZoloPanelBody title={__('Primary Button', 'zoloblocks')} panelProps={props}>
                                {iconType !== 'iconOnly' && (
                                    <TextControl
                                        label={__('Label', 'zoloblocks')}
                                        onChange={(value) => setAttributes({ label: value })}
                                        value={label}
                                        placeholder={__('Label..', 'zoloblocks')}
                                    />
                                )}
                                <LinkControl
                                    label={__('URL', 'zoloblocks')}
                                    value={link}
                                    onChange={(value) => setAttributes({ link: value })}
                                />
                                <div className="zolo-custom-heading">{__('Icon', 'zoloblocks')}</div>
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Type', 'zoloblocks')}
                                        value={iconType}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconType: value,
                                            })
                                        }
                                        options={ICON_STATUS}
                                    />
                                </div>
                                {iconType !== 'none' && (
                                    <>
                                        <ZoloIconPicker
                                            label={__('Select', 'zoloblocks')}
                                            value={icon}
                                            onChange={(value) => {
                                                setAttributes({
                                                    icon: value,
                                                });
                                            }}
                                        />

                                        {iconType !== 'iconOnly' && (
                                            <div className="zolo-flex-row-control-tab">
                                                <IconicBtnGroup
                                                    label={__('Position', 'zoloblocks')}
                                                    value={iconPosition}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconPosition: value,
                                                        })
                                                    }
                                                    options={ICON_POSITIONS}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {showSecondaryBtn && (
                            <ZoloPanelBody title={__('Secondary Button', 'zoloblocks')} panelProps={props}>
                                {iconType !== 'iconOnly' && (
                                    <TextControl
                                        label={__('Label', 'zoloblocks')}
                                        onChange={(value) => setAttributes({ Slabel: value })}
                                        value={Slabel}
                                        placeholder={__('Label..', 'zoloblocks')}
                                    />
                                )}
                                <LinkControl
                                    label={__('URL', 'zoloblocks')}
                                    value={Slink}
                                    onChange={(value) => setAttributes({ Slink: value })}
                                />

                                <div className="zolo-custom-heading">{__('Icon', 'zoloblocks')}</div>
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Icon', 'zoloblocks')}
                                        value={SiconType}
                                        onChange={(value) =>
                                            setAttributes({
                                                SiconType: value,
                                            })
                                        }
                                        options={ICON_STATUS}
                                    />
                                </div>
                                {SiconType !== 'none' && (
                                    <>
                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zoloblocks')}
                                            value={Sicon}
                                            onChange={(value) => {
                                                setAttributes({
                                                    Sicon: value,
                                                });
                                            }}
                                        />

                                        {SiconType !== 'iconOnly' && (
                                            <div className="zolo-flex-row-control-tab">
                                                <IconicBtnGroup
                                                    label={__('Position', 'zoloblocks')}
                                                    value={SiconPosition}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            SiconPosition: value,
                                                        })
                                                    }
                                                    options={ICON_POSITIONS}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        {showTitle && (
                            <>
                                <ZoloPanelBody
                                    title={__('Title', 'zoloblocks')}
                                    stylePanel={true}
                                    panelProps={props}
                                    firstOpen={preset === '' ? true : false}
                                >
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
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={TITLE_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        {showDescription && (
                            <>
                                <ZoloPanelBody title={__('Description', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={descriptionColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                descriptionColor: value,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={DESC_TYPO}
                                        requiredProps={requiredProps}
                                        max={36}
                                    />
                                    <CardDivider />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={DESC_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        {showBtn && (
                            <ZoloPanelBody title={__('Primary Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={textColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        textColor: value,
                                                    })
                                                }
                                            />
                                            {iconType !== 'iconOnly' && (
                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                    max={36}
                                                />
                                            )}

                                            {iconType !== 'none' && (
                                                <>
                                                    <CardDivider />
                                                    <ResRangeControl
                                                        label={__('Icon Size', 'zoloblocks')}
                                                        controlName={ICON_SIZE}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                    <ResRangeControl
                                                        label={__('Spacing', 'zoloblocks')}
                                                        controlName={ICON_TEXT_SPACING}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                </>
                                            )}
                                            <CardDivider />
                                            <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_BG} noMainBGImg={false} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={BUTTON_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <CardDivider />
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
                                            <BoxShadowControl controlName={BUTTON_BOX_SHADOW} requiredProps={requiredProps} />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={BUTTON_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
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
                        )}
                        {showSecondaryBtn && (
                            <ZoloPanelBody title={__('Secondary Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={StextColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        StextColor: value,
                                                    })
                                                }
                                            />
                                            {SiconType !== 'iconOnly' && (
                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={BUTTON_S_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                    max={36}
                                                />
                                            )}
                                            {SiconType !== 'none' && (
                                                <>
                                                    <CardDivider />
                                                    <ResRangeControl
                                                        label={__('Icon Size', 'zoloblocks')}
                                                        controlName={ICON_S_SIZE}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                    <ResRangeControl
                                                        label={__('Spacing', 'zoloblocks')}
                                                        controlName={ICON_TEXT_S_SPACING}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                </>
                                            )}
                                            <CardDivider />
                                            <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_S_BG} noMainBGImg={false} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={BUTTON_S_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={BUTTON_S_BORDER}
                                                requiredProps={requiredProps}
                                                hoverControl={
                                                    <ColorControl
                                                        label={__('Border Color', 'zoloblocks')}
                                                        color={SborderHoverColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                SborderHoverColor: value,
                                                            })
                                                        }
                                                    />
                                                }
                                            />
                                            <BoxShadowControl controlName={BUTTON_S_BOX_SHADOW} requiredProps={requiredProps} />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={BUTTON_S_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={SHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        SHoverColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={BUTTON_HOVER_S_BG_COLOR}
                                                noMainBGImg={false}
                                            />
                                            <BoxShadowControl
                                                controlName={BUTTON_HOVER_S_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={true}
                                            />
                                        </>
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
                            block="zolo/cta"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
