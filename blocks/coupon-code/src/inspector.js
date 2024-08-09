/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextControl, TextareaControl } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TextShadowControl,
    TextStrokeControl,
    TypographyDropdown,
    TabPanelControl,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    LinkControl,
    NormalBGControl,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
    RangeResetControl,
} = window.zoloModule;

import {
    PRESETS,
    COUPON_REV_PADDING,
    COUPON_REV_WIDTH,
    COUPON_SPACE,
    COUPON_ALIGN,
    COUPON_MESS_ALIGN,
    COUPON_MESS_BORDER,
    COUPON_BORDER_RADIUS,
    TOP_COUPON_BG,
    TOP_COUPON_SHADOW,
    BOTTOM_COUPON_BG,
    BOTTOM_BORDER_COLOR,
    BOTTOM_COUPON_SHADOW,
    COUPON_CODE_ALIGN,
    COUPON_CODE_BORDER,
    COUPON_CODE_BORDER_RADIUS,
    CODE_TOP_COUPON_BG,
    CODE_TOP_COUPON_SHADOW,
    CODE_BOTTOM_COUPON_BG,
} from './constants';

import { COUPON_MESS_TYPO, COUPON_CODE_TYPO } from '../src/constants/typoPrefixConstant';

// import { TEXT_ALIGN_OPTIONS, ICON_POSITIONS, ICON_STATUS } from '../../../src/global/constants';

export default function Inspector(props) {
    const { attributes, setAttributes } = props;

    const {
        resMode,

        // settings
        presets,
        couponText,
        couponIcon,
        couponCode,
        enableTriggerLink,
        link,
        enableTriggerAction,
        couponPlaceHolder,
        fromSelector,
        enableTriggerAttention,
        couponNormalColor,
        couponHoverColor,
        codeTopNormalColor,
        codeBottomHoverColor,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    const onPresetChange = (selected) => {
        setAttributes({ preset: selected });
    };

    return (
        <>
            <InspectorControls>
                <HeaderTabs
                    block="zolo/coupon-code"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    generalTab={
                        <>
                            <ZoloPanelBody title={__('Coupon Code', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <SelectControl
                                    label={__('Presets', 'zoloblocks')}
                                    value={presets}
                                    options={applyFilters('zolo.coupon-code', PRESETS)}
                                    onChange={(value) => onPresetChange(value)}
                                />

                                <TextControl
                                    label={__('Coupon Code', 'zoloblocks')}
                                    value={couponCode}
                                    onChange={(value) =>
                                        setAttributes({
                                            couponCode: value,
                                        })
                                    }
                                />

                                <TextControl
                                    label={__('Button Text', 'zoloblocks')}
                                    value={couponText}
                                    onChange={(value) =>
                                        setAttributes({
                                            couponText: value,
                                        })
                                    }
                                />

                                {enableTriggerAction && (
                                    <>
                                        <TextControl
                                            label={__('Coupon PlaceHolder')}
                                            value={couponPlaceHolder}
                                            onChange={(value) =>
                                                setAttributes({
                                                    couponPlaceHolder: value,
                                                })
                                            }
                                        />
                                    </>
                                )}

                                <ZoloIconPicker
                                    label={__('Button Icon', 'zoloblocks')}
                                    value={couponIcon}
                                    onChange={(value) =>
                                        setAttributes({
                                            couponIcon: value,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Tigger Link', 'zoloblocks')}
                                    checked={enableTriggerLink}
                                    onChange={() =>
                                        setAttributes({
                                            enableTriggerLink: !enableTriggerLink,
                                        })
                                    }
                                />

                                {enableTriggerLink && (
                                    <>
                                        <LinkControl
                                            label={__('Link', 'zoloblocks')}
                                            value={link}
                                            onChange={(value) => setAttributes({ link: value })}
                                        />
                                    </>
                                )}

                                <ToggleControl
                                    label={__('Trigger By Action', 'zoloblocks')}
                                    checked={enableTriggerAction}
                                    onChange={() =>
                                        setAttributes({
                                            enableTriggerAction: !enableTriggerAction,
                                        })
                                    }
                                />

                                {enableTriggerAction && (
                                    <>
                                        <TextControl
                                            label={__('From Selector', 'zoloblocks')}
                                            value={fromSelector}
                                            onChange={(value) =>
                                                setAttributes({
                                                    fromSelector: value,
                                                })
                                            }
                                        />
                                    </>
                                )}

                                <ToggleControl
                                    label={__('Trigger Attention', 'zoloblocks')}
                                    checked={enableTriggerAttention}
                                    onChange={() =>
                                        setAttributes({
                                            enableTriggerAttention: !enableTriggerAttention,
                                        })
                                    }
                                />
                            </ZoloPanelBody>
                        </>
                    }
                    styleTab={
                        <>
                            <ZoloPanelBody title={__('Coupon Wrapper', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={COUPON_REV_PADDING}
                                    requiredProps={requiredProps}
                                />

                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={COUPON_REV_WIDTH}
                                    requiredProps={requiredProps}
                                />

                                <ResRangeControl
                                    label={__('Space Between', 'zoloblocks')}
                                    controlName={COUPON_SPACE}
                                    requiredProps={requiredProps}
                                />

                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={COUPON_ALIGN}
                                    requiredProps={requiredProps}
                                    // alignOptions={TEXT_ALIGN_OPTIONS}
                                />
                            </ZoloPanelBody>

                            <ZoloPanelBody title={__('Button Text', 'zoloblocks')} panelProps={props}>
                                <ResAlignmentControl
                                    label={__('Text Alignment', 'zoloblocks')}
                                    controlName={COUPON_MESS_ALIGN}
                                    requiredProps={requiredProps}
                                />

                                <BorderControl
                                    label={__('Border Type', 'zoloblocks')}
                                    controlName={COUPON_MESS_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={COUPON_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={COUPON_MESS_TYPO}
                                    requiredProps={requiredProps}
                                    max={200}
                                />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={couponNormalColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        couponNormalColor: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl
                                                label={__('Background Type', 'zoloblocks')}
                                                controlName={TOP_COUPON_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={false}
                                            />

                                            <TextShadowControl
                                                label={__('Text Shadow', 'zoloblocks')}
                                                controlName={TOP_COUPON_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Hover Color', 'zoloblocks')}
                                                color={couponHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        couponHoverColor: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl
                                                label={__('Background Type', 'zoloblocks')}
                                                controlName={BOTTOM_COUPON_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={false}
                                            />

                                            <BorderControl
                                                label={__('Hover Border Type', 'zoloblocks')}
                                                controlName={BOTTOM_BORDER_COLOR}
                                                requiredProps={requiredProps}
                                            />

                                            <TextShadowControl
                                                label={__('Text Shadow', 'zoloblocks')}
                                                controlName={BOTTOM_COUPON_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>

                            <ZoloPanelBody title={__('Coupon Code', 'zoloblocks')} panelProps={props}>
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={COUPON_CODE_ALIGN}
                                    requiredProps={requiredProps}
                                />

                                <BorderControl
                                    label={__('Border Type', 'zoloblocks')}
                                    controlName={COUPON_CODE_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={COUPON_CODE_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={COUPON_CODE_TYPO}
                                    requiredProps={requiredProps}
                                />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={codeTopNormalColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        codeTopNormalColor: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl
                                                label={__('Background Type', 'zoloblocks')}
                                                controlName={CODE_TOP_COUPON_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={false}
                                            />

                                            <TextShadowControl
                                                label={__('Text Shadow', 'zoloblocks')}
                                                controlName={CODE_TOP_COUPON_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Hover Color', 'zoloblocks')}
                                                color={codeBottomHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        codeBottomHoverColor: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl
                                                label={__('Background Type', 'zoloblocks')}
                                                controlName={CODE_BOTTOM_COUPON_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={false}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        </>
                    }
                    advancedTab={
                        <>
                            <AdvancedOptions
                                block="zolo/coupon-block"
                                attributes={attributes}
                                setAttributes={setAttributes}
                                requiredProps={requiredProps}
                            />
                        </>
                    }
                />
            </InspectorControls>
        </>
    );
}
