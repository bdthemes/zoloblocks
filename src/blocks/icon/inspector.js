/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import { SelectControl, ToggleControl, TextControl, TextareaControl, BaseControl, Button, } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { applyFilters } from "@wordpress/hooks";
import objAttributes from './attributes';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';

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
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_ALIGNMENT,
    ICON_HOVER_BG_COLOR,
    ICON_BG_COLOR,
} from './constants';

export default function Inspector(props) {

    const { attributes, setAttributes } = props;

    const {
        resMode,

        // settings
        mainIcon,
        iconColor,
        iconHover,
        isLinkable,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        iconLink,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    }

    return (
        <>
            <InspectorControls>
                <HeaderTabs
                    block="zolo/icon"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    generalTab={
                        <>
                            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <ZoloIconPicker
                                    label={__('Selected Icon', 'zoloblocks')}
                                    value={mainIcon}
                                    onChange={(value) =>
                                        setAttributes({
                                            mainIcon: value,
                                        })
                                    }
                                />
                                <ToggleControl
                                    label={__('Linkable', 'zoloblocks')}
                                    checked={isLinkable}
                                    onChange={(value) =>
                                        setAttributes({
                                            isLinkable: value,
                                        })
                                    }
                                />
                                {isLinkable && (
                                    <LinkControl
                                        label={__('Link', 'zoloblocks')}
                                        value={iconLink}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconLink: value,
                                            })
                                        }
                                    />
                                )}
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={ICON_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                            </ZoloPanelBody>
                        </>
                    }
                    styleTab={
                        <>
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName={ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                />

                                <BorderControl label={__('Border', 'zoloblocks')} controlName={ICON_BORDER} requiredProps={requiredProps} />
                                <ResRangeControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={ICON_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={ICON_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={ICON_PADDING}
                                    requiredProps={requiredProps}
                                />

                                <TabPanelControl
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

                                            <NormalBGControl controlName={ICON_BG_COLOR} requiredProps={requiredProps} />
                                            <BoxShadowControl
                                                controlName={ICON_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Hover Color', 'zoloblocks')}
                                                color={iconHover}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconHover: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl controlName={ICON_HOVER_BG_COLOR} requiredProps={requiredProps} />

                                            <BoxShadowControl
                                                controlName={ICON_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
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
                                attributes={attributes}
                                setAttributes={setAttributes}
                                requiredProps={requiredProps}
                                block="zolo/icon"
                            />
                        </>
                    }
                />
            </InspectorControls>
        </>
    );
}