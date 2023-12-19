/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, BaseControl, SelectControl, CardDivider } from '@wordpress/components';
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
    AAC_HEADER_BG,
    AAC_BODY_BG,
    AICONTAINER_BG,
} from './constants';

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
        keepFirstOpen,
        allowMultiple,
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
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <ToggleControl
                                label={__('Keep first item open initially', 'zolo-blocks')}
                                checked={keepFirstOpen}
                                onChange={() => setAttributes({ keepFirstOpen: !keepFirstOpen })}
                                help={__('This feature works on the frontend only.', 'zolo-blocks')}
                            />
                            <ToggleControl
                                label={__('Allow multiple open at a time', 'zolo-blocks')}
                                checked={allowMultiple}
                                onChange={() => setAttributes({ allowMultiple: !allowMultiple })}
                                help={__('This feature works on the frontend only.', 'zolo-blocks')}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Accordion Title', 'zolo-blocks')} panelProps={props}>
                            <SelectControl
                                label={__('Title Tag', 'zolo-blocks')}
                                value={titleTag}
                                options={HEADING}
                                onChange={(value) => {
                                    setAttributes({
                                        titleTag: value,
                                    });
                                }}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Accordion Icons', 'zolo-blocks')} panelProps={props}>
                            <ZoloIconPicker
                                label={__('Collapsed Icon', 'zolo-blocks')}
                                value={collapseIcon}
                                onChange={(value) => {
                                    setAttributes({
                                        collapseIcon: value,
                                    });
                                }}
                            />

                            <ZoloIconPicker
                                label={__('Expanded Icon', 'zolo-blocks')}
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
                        <ZoloPanelBody
                            title={__('Accordion Container', 'zolo-blocks')}
                            firstOpen={true}
                            stylePanel={true}
                            panelProps={props}
                        >
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Accordion Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Accordion Head', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Accordion Icon', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Accordion Body', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Active Accordion', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Title Color', 'zolo-blocks')}
                                color={atitleColor}
                                onChange={(value) =>
                                    setAttributes({
                                        atitleColor: value,
                                    })
                                }
                            />
                            <CardDivider />
                            <BaseControl label={__('Accordion Icon', 'zolo-blocks')}>
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={aiconColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            aiconColor: value,
                                        })
                                    }
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={AICONTAINER_BG} noMainBGImg={true} />
                            </BaseControl>

                            <CardDivider />
                            <BaseControl label={__('Accordion Head', 'zolo-blocks')}>
                                <NormalBGControl requiredProps={requiredProps} controlName={AAC_HEADER_BG} noMainBGImg={true} />
                            </BaseControl>
                            <CardDivider />
                            <BaseControl label={__('Accordion Body', 'zolo-blocks')}>
                                <NormalBGControl requiredProps={requiredProps} controlName={AAC_BODY_BG} noMainBGImg={true} />
                            </BaseControl>
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
