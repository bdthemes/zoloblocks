/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
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
    BoxShadowControl,
    AdvancedOptions,
    TypographyDropdown,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    AC_CONTAINER_BORDER,
    AC_CONTAINER_BORDER_RADIUS,
    AC_CONTAINER_BG,
    AC_CONTAINER_BOX_SHADOW,
    AC_CONTAINER_PADDING,
    AC_CONTAINER_MARGIN,
    ICONTAINER_BG,
    ICONTAINER_HBG,
    ICONTAINER_PADDING,
    ICONTAINER_BORDER,
    ICONTAINER_BRADIUS,
    ICON_SIZE,
    AC_HEADER_BORDER,
    AC_HEADER_BORDER_RADIUS,
    AC_HEADER_BG,
    AC_HEADER_HBG,
    AC_HEADER_PADDING,
    AC_HEADER_MARGIN,
    AC_BODY_BORDER,
    AC_BODY_BORDER_RADIUS,
    AC_BODY_BG,
    AC_BODY_PADDING,
    AC_BODY_MARGIN,
    ANIMATED_BORDER_SIZE,
} from './constants';

import { TITLE_TYPO } from './constants/typoPrefixConstant';
import { CardDivider } from '@wordpress/components';

import { TextControl } from '../../components/Core';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        title,
        iconColor,
        iconHoverColor,
        titleColor,
        titleHoverColor,
        animatedBorderColor,
        animatedBorderActiveColor,
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
                block="zolo/accordion-child"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <TextControl
                                label={__('Title', 'zoloblocks')}
                                onChange={(text) =>
                                    setAttributes({
                                        title: text,
                                    })
                                }
                                value={title}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
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
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={AC_BODY_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={AC_BODY_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
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
                            block="zolo/accordion-child"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
