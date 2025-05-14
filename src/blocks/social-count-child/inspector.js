import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

const {
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    TabPanelControl,
    HeaderTabs,
    ResDimensionsControl,
    BorderControl,
    NormalBGControl,
    BoxShadowControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    ZoloIconPicker,
    LinkControl,
} = window.zoloModule;
import {
    //item
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    //icon
    ICON_BG,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_SIZE,
    ICON_SPACING,
    ICON_H_SPACING,
    ICON_HOVER_BG,
    //counter
    COUNTER_SPACING,
} from './constants';

import { COUNTER_TYPOGRAPHY, META_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        socialIcon,
        socialLink,
        socialCounter,
        socialMeta,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        counterColor,
        counterHoverColor,
        metaColor,
        metaHoverColor,
        itemHoverBorderColor,
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
                block="zolo/social-links"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloIconPicker
                                label={__('Social Icon', 'zoloblocks')}
                                value={socialIcon}
                                onChange={(value) => setAttributes({ socialIcon: value })}
                            />

                            <LinkControl
                                label={__('Link', 'zoloblocks')}
                                value={socialLink}
                                onChange={(value) => setAttributes({ socialLink: value })}
                            />
                            <ZoloTextControl
                                label={__('Social Counter', 'zoloblocks')}
                                value={socialCounter}
                                onChange={(socialCounter) => setAttributes({ socialCounter })}
                            />
                            <ZoloTextControl
                                label={__('Social Meta', 'zoloblocks')}
                                value={socialMeta}
                                onChange={(socialMeta) => setAttributes({ socialMeta })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ITEM_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <BoxShadowControl controlName={ITEM_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={true} />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={itemHoverBorderColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    itemHoverBorderColor: value,
                                                })
                                            }
                                        />
                                        <BoxShadowControl controlName={ITEM_HOVER_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                                        <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={true} />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ICON_BORDER}
                                            requiredProps={requiredProps}
                                        />

                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ICON_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ICON_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />

                                        {preset === 'style-1' && (
                                            <ResRangeControl
                                                label={__('Spacing', 'zoloblocks')}
                                                controlName={ICON_SPACING}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        )}

                                        {preset === 'style-2' && (
                                            <ResRangeControl
                                                label={__('Spacing', 'zoloblocks')}
                                                controlName={ICON_H_SPACING}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Hover Color', 'zoloblocks')}
                                            color={iconHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ICON_HOVER_BG} noMainBGImg={true} />
                                        <ColorControl
                                            label={__('Hover Border Color', 'zoloblocks')}
                                            color={iconHoverBorderColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconHoverBorderColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Counter', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={COUNTER_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={counterColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    counterColor: value,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Bottom Spacing', 'zoloblocks')}
                                            controlName={COUNTER_SPACING}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={counterHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    counterHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={META_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={metaColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    metaColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={metaHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    metaHoverColor: value,
                                                })
                                            }
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
                            block="zolo/social-links"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
