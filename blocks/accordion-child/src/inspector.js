/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
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
} = window.zoloModule;

import objAttributes from './attributes';
import {
    AC_CONTAINER_BORDER,
    AC_CONTAINER_BORDER_RADIUS,
    AC_CONTAINER_BG,
    AC_CONTAINER_BOX_SHADOW,
    AC_CONTAINER_PADDING,
    AC_CONTAINER_MARGIN,
    ICONCONTAINER_WIDTH,
    ICONCONTAINER_HEIGHT,
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
} from './constants';

import { TITLE_TYPO } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, title, iconColor, iconHoverColor, titleColor, titleHoverColor } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
                            <TextControl
                                label={__('Accordion Title', 'zolo-blocks')}
                                onChange={(text) =>
                                    setAttributes({
                                        title: text,
                                    })
                                }
                                value={title}
                            />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Accordion Container', 'zolo-blocks')} initialOpen={true}>
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={AC_CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={AC_CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={AC_CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={AC_CONTAINER_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={AC_CONTAINER_BG} noMainBGImg={true} />
                            <BoxShadowControl controlName={AC_CONTAINER_BOX_SHADOW} requiredProps={requiredProps} />
                        </PanelBody>
                        <PanelBody initialOpen={false} title={__('Accordion Title', 'zolo-blocks')}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={TITLE_TYPO}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={titleColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    titleColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={titleHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    titleHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </PanelBody>
                        <PanelBody initialOpen={false} title={__('Accordion Head', 'zolo-blocks')}>
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={AC_HEADER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={AC_HEADER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={AC_HEADER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={AC_HEADER_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={AC_HEADER_BG} noMainBGImg={true} />
                                    </>
                                }
                                hoverComponents={
                                    <NormalBGControl requiredProps={requiredProps} controlName={AC_HEADER_HBG} noMainBGImg={true} />
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Accordion Icon', 'zolo-blocks')} initialOpen={false}>
                            <ResRangeControl label={__('Size', 'zolo-blocks')} controlName={ICON_SIZE} requiredProps={requiredProps} />
                            <ResRangeControl
                                label={__('Width', 'zolo-blocks')}
                                controlName={ICONCONTAINER_WIDTH}
                                requiredProps={requiredProps}
                            />
                            <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                controlName={ICONCONTAINER_HEIGHT}
                                requiredProps={requiredProps}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={ICONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={ICONTAINER_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={ICONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <TabPanelControl
                                normalComponents={
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
                                        <NormalBGControl requiredProps={requiredProps} controlName={ICONTAINER_BG} noMainBGImg={true} />
                                    </>
                                }
                                hoverComponents={
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
                                        <NormalBGControl requiredProps={requiredProps} controlName={ICONTAINER_HBG} noMainBGImg={true} />
                                    </>
                                }
                            />
                        </PanelBody>
                        <PanelBody initialOpen={false} title={__('Accordion Body', 'zolo-blocks')}>
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={AC_BODY_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={AC_BODY_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={AC_BODY_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={AC_BODY_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={AC_BODY_BG} noMainBGImg={true} />
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
