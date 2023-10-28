/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, CardDivider, TextControl, TextareaControl, ToggleControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ColorControl,
    IconPicker,
    TabPanelControl,
    ImageAvatar,
    TypographyDropdown,
    BorderControl,
    ResRangeControl,
    ResDimensionsControl,
} = window.zoloModule;

import Sortable from './sortable';

import objAttributes from './attributes';
import {
    PRESETS,
    TAGS,
    UNITS,
    ICON_WIDTH,
    ICON_BORDER,
    ICON_PADDING,
    ICON_RADIUS,
    IMAGE_SIZE,
    IMAGE_BORDER,
    IMAGE_BORDERRADIUS,
    IMAGE_PADDING,
} from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY } from './constants/typoPrefixConstants';

import { TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';
import { add } from 'lodash';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        headingTag,
        dscTag,
        titleColor,
        titleHColor,
        dscColor,
        desHcolor,
        fancyIcon,
        fancyTitle,
        fancyListText,
        image,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        iconbgColor,
        iconColor,
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
                generalTab={
                    <Fragment>
                        <PanelBody initialOpen={false} title={__('General', 'zolo-block')}>
                            <SelectControl
                                label={__('Preset', 'zolo-block')}
                                options={PRESETS}
                                onChange={(v) =>
                                    setAttributes({
                                        preset: Number(v),
                                    })
                                }
                                value={preset}
                            />
                            <ToggleControl
                                label={__('Enable Title', 'zolo-block')}
                                help={titleToggle ? 'Show' : 'Hide'}
                                checked={titleToggle}
                                onChange={() => {
                                    setAttributes({ titleToggle: !titleToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Enable Text', 'zolo-block')}
                                help={textToggle ? 'Show' : 'Hide'}
                                checked={textToggle}
                                onChange={() => {
                                    setAttributes({ textToggle: !textToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Enable Image', 'zolo-block')}
                                help={imageToggle ? 'Show' : 'Hide'}
                                checked={imageToggle}
                                onChange={() => {
                                    setAttributes({ imageToggle: !imageToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Enable Icon', 'zolo-block')}
                                help={iconToggle ? 'Show' : 'Hide'}
                                checked={iconToggle}
                                onChange={() => {
                                    setAttributes({ iconToggle: !iconToggle });
                                }}
                            />
                        </PanelBody>
                        {(!titleToggle && !textToggle) || (
                            <PanelBody initialOpen={false} title={__('Content', 'zolo-block')}>
                                {titleToggle && (
                                    <TextControl
                                        label={__('Title', 'zolo-block')}
                                        value={fancyTitle}
                                        onChange={(v) => setAttributes({ fancyTitle: v })}
                                    />
                                )}
                                {textToggle && (
                                    <TextareaControl
                                        label={__('Description', 'zolo-block')}
                                        value={fancyListText}
                                        onChange={(v) => setAttributes({ fancyListText: v })}
                                    />
                                )}
                            </PanelBody>
                        )}

                        {iconToggle && (
                            <PanelBody initialOpen={false} title={__('Icon', 'zolo-block')}>
                                {iconToggle && (
                                    <IconPicker
                                        title={__('Icon picker', 'zolo-block')}
                                        value={fancyIcon}
                                        onChange={(v) => setAttributes({ fancyIcon: v })}
                                        showHeading={false}
                                    />
                                )}
                            </PanelBody>
                        )}
                        {imageToggle && (
                            <PanelBody initialOpen={false} title={__('Image', 'zolo-block')}>
                                {imageToggle && (
                                    <ImageAvatar
                                        imageUrl={image && image}
                                        imageId={image && image.length}
                                        onDeleteImage={() => setAttributes({ image: '' })}
                                        onEditImage={(v) => setAttributes({ image: v })}
                                    />
                                )}
                            </PanelBody>
                        )}
                    </Fragment>
                }
                styleTab={
                    <>
                        <PanelBody initialOpen={false} title={__('Title', 'zolo-block')}>
                            <SelectControl
                                label={__('Heading Tag', 'zolo-block')}
                                options={TAGS}
                                onChange={(v) =>
                                    setAttributes({
                                        headingTag: v,
                                    })
                                }
                                value={headingTag}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-block')}
                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                defaultFontSize={14}
                            />
                            <CardDivider />
                            <TabPanelControl
                                normalComponents={
                                    <ColorControl
                                        label={__('Title Color', 'zolo-block')}
                                        color={titleColor}
                                        onChange={(v) =>
                                            setAttributes({
                                                titleColor: v,
                                            })
                                        }
                                    />
                                }
                                hoverComponents={
                                    <ColorControl
                                        label={__('Hover Color', 'zolo-block')}
                                        color={titleHColor}
                                        onChange={(v) =>
                                            setAttributes({
                                                titleHColor: v,
                                            })
                                        }
                                    />
                                }
                            />
                        </PanelBody>
                        <PanelBody initialOpen={false} title={__('Description', 'zolo-block')}>
                            <SelectControl
                                label={__('Description Tag', 'zolo-block')}
                                options={TAGS}
                                onChange={(v) =>
                                    setAttributes({
                                        dscTag: v,
                                    })
                                }
                                value={dscTag}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-block')}
                                typoPrefixConstant={TEXT_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                defaultFontSize={14}
                            />
                            <CardDivider />
                            <TabPanelControl
                                normalComponents={
                                    <ColorControl
                                        label={__('Description Color', 'zolo-block')}
                                        color={dscColor}
                                        onChange={(v) =>
                                            setAttributes({
                                                dscColor: v,
                                            })
                                        }
                                    />
                                }
                                hoverComponents={
                                    <ColorControl
                                        label={__('Hover Color', 'zolo-block')}
                                        color={desHcolor}
                                        onChange={(v) =>
                                            setAttributes({
                                                desHcolor: v,
                                            })
                                        }
                                    />
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Icon', 'zolo-block')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Size', 'zolo-block')}
                                controlName={ICON_WIDTH}
                                units={UNITS}
                                requiredProps={requiredProps}
                                min={1}
                                max={50}
                                step={1}
                                noUnits={false}
                            />
                            <BorderControl label={__('Border')} controlName={ICON_BORDER} requiredProps={requiredProps} units={UNITS} />

                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-block')}
                                controlName={ICON_RADIUS}
                                units={UNITS}
                                requiredProps={requiredProps}
                                forBorderRadius="border-radius"
                            />
                            <ResRangeControl
                                label={__('Padding', 'zolo-block')}
                                controlName={ICON_PADDING}
                                units={UNITS}
                                requiredProps={requiredProps}
                                min={1}
                                max={50}
                                step={1}
                                noUnits={false}
                            />
                            <ColorControl
                                label={__('Color', 'zolo-block')}
                                color={iconColor}
                                onChange={(v) => setAttributes({ iconColor: v })}
                            />
                            <ColorControl
                                label={__('Background Color', 'zolo-block')}
                                color={iconbgColor}
                                onChange={(v) => setAttributes({ iconbgColor: v })}
                            />
                        </PanelBody>
                        <PanelBody initialOpen={false} title={__('Image', 'zolo-block')}>
                            <ResRangeControl
                                label={__('Size', 'zolo-block')}
                                controlName={IMAGE_SIZE}
                                units={UNITS}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={false}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-block')}
                                controlName={IMAGE_BORDER}
                                requiredProps={requiredProps}
                                units={UNITS}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-block')}
                                controlName={IMAGE_BORDERRADIUS}
                                units={UNITS}
                                requiredProps={requiredProps}
                                forBorderRadius="border-radius"
                            />
                            <ResRangeControl
                                label={__('Padding', 'zolo-block')}
                                controlName={IMAGE_PADDING}
                                units={UNITS}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={false}
                            />
                        </PanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <PanelBody initialOpen={true} title={__('Advanced', 'zolo-block')}>
                            Advanced
                        </PanelBody>
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
