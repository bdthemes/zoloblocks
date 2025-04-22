/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, SelectControl, Button, BaseControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

import { TextControl } from '../../components/Core';

const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    TabPanelControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
    ZoloIconPicker,
    ImageAvatar,
    ImageSizes,
    ObjectFitControl,
    ResDimensionsControl,
    BorderControl,
    NormalBGControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO } from './constants/typoPrefixConstant';
import {
    STAR_SIZE,
    TITLE_GAP,
    ITEMS_ALIGN,
    ICON_OPTIONS,
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_BG,
} from './constants';
import { FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        rating,
        showTitle,
        title,
        titleTag,
        titleColor,
        titlePosition,
        activeStarColor,
        inactiveStarColor,
        showIcon,
        iconType,
        icon,
        iconTypeImage,
        imageRes,
        objectFit,
        iconColor,
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
                block="zolo/star-rating"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Star Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />
                            <ToggleControl
                                label={__('Icon', 'zoloblocks')}
                                checked={showIcon}
                                onChange={() => setAttributes({ showIcon: !showIcon })}
                            />
                            <CardDivider />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={ITEMS_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_HORIZONTAL_OPTIONS}
                            />
                            <IconicBtnGroup
                                label={__('Position', 'zoloblocks')}
                                value={titlePosition}
                                onChange={(value) =>
                                    setAttributes({
                                        titlePosition: value,
                                    })
                                }
                                options={ICON_POSITIONS}
                            />
                            <CardDivider />
                            <ResRangeControl
                                label={__('Content Spacing', 'zoloblocks')}
                                controlName={TITLE_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Rating', 'zoloblocks')} panelProps={props}>
                            <RangeControl
                                className="zolo-flex-col-control"
                                label={__('Rating', 'zoloblocks')}
                                value={rating}
                                onChange={(v) => setAttributes({ rating: v })}
                                min={1}
                                max={5}
                                step={0.1}
                                help={__('Default rating value: 5', 'zoloblocks')}
                            />
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={title}
                                    onChange={(v) => setAttributes({ title: v })}
                                    placeholder={__('Enter title', 'zoloblocks')}
                                />
                                <SelectControl
                                    label={__('Tag', 'zoloblocks')}
                                    value={titleTag}
                                    options={HEADING}
                                    onChange={(v) => {
                                        setAttributes({ titleTag: v });
                                    }}
                                />
                            </ZoloPanelBody>
                        )}
                        {showIcon && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} panelProps={props}>
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Type', 'zoloblocks')}
                                        value={iconType}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconType: value,
                                            })
                                        }
                                        options={ICON_OPTIONS}
                                    />
                                </div>
                                {iconType === 'icon' && (
                                    <ZoloIconPicker
                                        label={__('Icon', 'zoloblocks')}
                                        value={icon}
                                        onChange={(v) => setAttributes({ icon: v })}
                                    />
                                )}
                                {iconType === 'image' && (
                                    <>
                                        <BaseControl label={__('Image', 'zoloblocks')} className="zolo-flex-col-control">
                                            {iconTypeImage ? (
                                                <ImageAvatar
                                                    imageUrl={iconTypeImage && iconTypeImage.url}
                                                    onDeleteImage={() =>
                                                        setAttributes({
                                                            iconTypeImage: null,
                                                        })
                                                    }
                                                    imageId={iconTypeImage && iconTypeImage.id}
                                                    onEditImage={(media) => {
                                                        setAttributes({
                                                            iconTypeImage: {
                                                                id: media.id,
                                                                url: media.url,
                                                                alt: media.alt,
                                                                sizes: media.sizes,
                                                                caption: media.caption,
                                                            },
                                                        });
                                                    }}
                                                />
                                            ) : (
                                                <MediaUpload
                                                    onSelect={(media) => {
                                                        setAttributes({
                                                            iconTypeImage: {
                                                                id: media.id,
                                                                url: media.url,
                                                                alt: media.alt,
                                                                sizes: media.sizes,
                                                                caption: media.caption,
                                                            },
                                                        });
                                                    }}
                                                    allowedTypes={['image']}
                                                    value={iconTypeImage && iconTypeImage.id}
                                                    render={({ open }) => (
                                                        <Button className="zolo-image-upload-btn" onClick={open}>
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                            >
                                                                <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                            </svg>
                                                            {__(' Upload Photo', 'zoloblocks')}
                                                        </Button>
                                                    )}
                                                />
                                            )}
                                        </BaseControl>
                                        <ImageSizes
                                            label={__('Resolution', 'zoloblocks')}
                                            value={imageRes}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imageRes: value,
                                                })
                                            }
                                        />
                                        <ObjectFitControl
                                            value={objectFit}
                                            onChange={(objectFit) =>
                                                setAttributes({
                                                    objectFit: objectFit,
                                                })
                                            }
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Star', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={STAR_SIZE}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />

                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Active', 'zoloblocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Inactive', 'zoloblocks'),
                                    },
                                ]}
                                normalComponents={
                                    <ColorControl
                                        label={__('Stars', 'zoloblocks')}
                                        color={activeStarColor}
                                        onChange={(color) => setAttributes({ activeStarColor: color })}
                                    />
                                }
                                hoverComponents={
                                    <ColorControl
                                        label={__('Stars', 'zoloblocks')}
                                        color={inactiveStarColor}
                                        onChange={(color) => setAttributes({ inactiveStarColor: color })}
                                    />
                                }
                            />
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={false}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={titleColor}
                                    onChange={(color) => setAttributes({ titleColor: color })}
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showIcon && (
                            <ZoloPanelBody
                                title={iconType === 'image' ? __('Image', 'zoloblocks') : __('Icon', 'zoloblocks')}
                                panelProps={props}
                                stylePanel={true}
                                firstOpen={false}
                            >
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={iconColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            iconColor: color,
                                        })
                                    }
                                />
                                <ResRangeControl label={__('Size', 'zoloblocks')} controlName={ICON_SIZE} requiredProps={requiredProps} />
                                <CardDivider />
                                <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={false} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={ICON_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={ICON_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={ICON_BORDER_RADIUS}
                                    requiredProps={requiredProps}
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
                            block="zolo/star-rating"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
