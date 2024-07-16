/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    BaseControl,
    Button,
    RangeControl,
    CardDivider,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    BoxShadowControl,
    ImageAvatar,
    NormalBGControl,
    HeaderTabs,
    TabPanelControl,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
    ImageSizes,
    ObjectFitControl,
    OverflowControl,
    IconicBtnGroup,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    STYLE_PRESETS,
    PRESETS,
    CONTENT_ALIGNMENT,
    CONTENT_BACKGROUND,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    CONTENT_MARGIN,
    CONTENT_PADDING,
    REVIEWER_PHOTO_SIZE,
    REVIEWER_PHOTO_BG,
    REVIEWER_PHOTO_BORDER,
    REVIEWER_PHOTO_BORDER_RADIUS,
    REVIEWER_PHOTO_BOX_SHADOW,
    REVIEWER_PHOTO_MARGIN,
    REVIEWER_PHOTO_PADDING,
    REVIEWER_NAME_MARGIN,
    REVIEWER_DESIGNATION_MARGIN,
    REVIEWER_TESTIMONIAL_MARGIN,
    ICONS_SIZE,
    DPL_BG,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    CONTENT_GAP,

    RW_BACKGROUND,
    RW_BORDER,
    RW_BORDER_RADIUS,
    RW_BOX_SHADOW,
    RW_MARGIN,
    RW_PADDING,
} from './constants';

import { REVIEWER_NAME_TYPOGRAPHY, REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';

import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        stylePreset,
        preset,
        showPhoto,
        memberPhoto,
        showName,
        memberName,
        showDesignation,
        showTestimonialMessage,
        testimonialMessage,
        memberDesignation,
        showQuoteIcon,
        quoteIcon,
        showRating,
        rating,
        nameColor,
        separatorColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        dplIconColor,
        imageRes,
        objectFit,
        photoOverflow,
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
                block="zolo/review"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                          <SelectControl
                                label={__('Style', 'zoloblocks')}
                                value={stylePreset}
                                options={applyFilters('zolo.pricingTable.presets', STYLE_PRESETS)}
                                onChange={(stylePreset) => {
                                    setAttributes({ stylePreset });

                                    if (stylePreset === 'style-preset-2') {
                                        setAttributes({
                                            sale: true,
                                        });
                                    }
                                }}
                            />
                            {stylePreset !== 'style-preset-2' && (
                                <IconicBtnGroup
                                    label={__('Layout Direction', 'zoloblocks')}
                                    value={preset}
                                    onChange={(selected) => setAttributes({ preset: selected })}
                                    options={applyFilters('zolo.review.presets', PRESETS)}
                                />
                            )}

                            <ToggleControl
                                label={__('Show Photo', 'zoloblocks')}
                                checked={showPhoto}
                                onChange={() =>
                                    setAttributes({
                                        showPhoto: !showPhoto,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Quote Icon', 'zoloblocks')}
                                checked={showQuoteIcon}
                                onChange={() =>
                                    setAttributes({
                                        showQuoteIcon: !showQuoteIcon,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Name', 'zoloblocks')}
                                checked={showName}
                                onChange={() =>
                                    setAttributes({
                                        showName: !showName,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Designation', 'zoloblocks')}
                                checked={showDesignation}
                                onChange={() =>
                                    setAttributes({
                                        showDesignation: !showDesignation,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Review Text', 'zoloblocks')}
                                checked={showTestimonialMessage}
                                onChange={() =>
                                    setAttributes({
                                        showTestimonialMessage: !showTestimonialMessage,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Rating', 'zoloblocks')}
                                checked={showRating}
                                onChange={() =>
                                    setAttributes({
                                        showRating: !showRating,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {showPhoto && (
                                <>
                                    <BaseControl label={__('Photo', 'zoloblocks')}>
                                        {memberPhoto ? (
                                            <ImageAvatar
                                                imageUrl={memberPhoto && memberPhoto.url}
                                                onDeleteImage={() =>
                                                    setAttributes({
                                                        memberPhoto: null,
                                                    })
                                                }
                                                imageId={memberPhoto && memberPhoto.id}
                                                onEditImage={(media) => {
                                                    setAttributes({
                                                        memberPhoto: {
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
                                                        memberPhoto: {
                                                            id: media.id,
                                                            url: media.url,
                                                            alt: media.alt,
                                                            sizes: media.sizes,
                                                            caption: media.caption,
                                                        },
                                                    });
                                                }}
                                                allowedTypes={['image']}
                                                value={memberPhoto && memberPhoto.id}
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
                                        label={__('Photo Resolution', 'zoloblocks')}
                                        value={imageRes}
                                        onChange={(value) => setAttributes({ imageRes: value })}
                                    />
                                </>
                            )}
                            {showName && (
                                <TextControl
                                    label={__('Name', 'zoloblocks')}
                                    onChange={(name) =>
                                        setAttributes({
                                            memberName: name,
                                        })
                                    }
                                    value={memberName}
                                    placeholder={__('Name..', 'zoloblocks')}
                                />
                            )}
                            {showDesignation && (
                                <TextControl
                                    label={__('Designation', 'zoloblocks')}
                                    onChange={(d) =>
                                        setAttributes({
                                            memberDesignation: d,
                                        })
                                    }
                                    value={memberDesignation}
                                    placeholder={__('Designation..', 'zoloblocks')}
                                />
                            )}
                            {showTestimonialMessage && (
                                <TextareaControl
                                    label={__('Review Text', 'zoloblocks')}
                                    value={testimonialMessage}
                                    onChange={(bio) =>
                                        setAttributes({
                                            testimonialMessage: bio,
                                        })
                                    }
                                    placeholder={__('Review Text..', 'zoloblocks')}
                                />
                            )}
                            {showRating && (
                                <RangeControl
                                    label={__('Rating', 'zoloblocks')}
                                    value={rating}
                                    onChange={(rating) =>
                                        setAttributes({
                                            rating: rating,
                                        })
                                    }
                                    min={1}
                                    max={5}
                                    step={0.1}
                                />
                            )}
                        </ZoloPanelBody>
                        {showQuoteIcon && (
                            <ZoloPanelBody title={__('Quote', 'zoloblocks')} panelProps={props}>
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zoloblocks')}
                                    value={quoteIcon}
                                    onChange={(value) => {
                                        setAttributes({
                                            quoteIcon: value,
                                        });
                                    }}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                       {stylePreset === 'style-preset-2' && (
                            <ZoloPanelBody title={__('Review Warpper', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={RW_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={RW_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={RW_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={RW_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <BoxShadowControl controlName={RW_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <NormalBGControl requiredProps={requiredProps} controlName={RW_BACKGROUND} noMainBGImg={true} />
                            </ZoloPanelBody>
                        )}
                        {stylePreset !== 'style-preset-2' && (
                            <ZoloPanelBody title={__('Content', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <ResAlignmentControl
                                    label={__('Content Alignment', 'zoloblocks')}
                                    controlName={CONTENT_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={CONTENT_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={CONTENT_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={CONTENT_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={CONTENT_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <BoxShadowControl controlName={CONTENT_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BACKGROUND} noMainBGImg={true} />
                            </ZoloPanelBody>
                        )}
                        {showPhoto && (
                            <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Size', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_SIZE}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={1000}
                                />
                                <ObjectFitControl value={objectFit} onChange={(value) => setAttributes({ objectFit: value })} />
                                <OverflowControl
                                    label={__('Overflow', 'zoloblocks')}
                                    value={photoOverflow}
                                    onChange={(value) => setAttributes({ photoOverflow: value })}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={CONTENT_GAP}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={200}
                                />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <BoxShadowControl
                                    controlName={REVIEWER_PHOTO_BOX_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={REVIEWER_PHOTO_BG} noMainBGImg={true} />
                            </ZoloPanelBody>
                        )}
                        {showName && (
                            <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_NAME_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={nameColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            nameColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_NAME_MARGIN}
                                    requiredProps={requiredProps}
                                />

                             <div className="zolo-custom-heading">{__('Separator Color', 'zoloblocks')}</div>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={separatorColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            separatorColor: color,
                                        })
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showDesignation && (
                            <ZoloPanelBody title={__('Designation', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={64}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showTestimonialMessage && (
                            <ZoloPanelBody title={__('Review Text', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_MESSAGE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={testimonialMessageColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            testimonialMessageColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_TESTIMONIAL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showRating && (
                            <ZoloPanelBody title={__('Rating', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName={ICONS_SIZE}
                                    requiredProps={requiredProps}
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
                                        <>
                                            <ColorControl
                                                label={__('Star Color', 'zoloblocks')}
                                                color={activeRatingColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        activeRatingColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Star Color', 'zoloblocks')}
                                                color={inactiveRatingColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        inactiveRatingColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Quote Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Icon Color', 'zoloblocks')}
                                color={dplIconColor}
                                onChange={(color) =>
                                    setAttributes({
                                        dplIconColor: color,
                                    })
                                }
                            />
                            <ResRangeControl
                                label={__('Icon Size', 'zoloblocks')}
                                controlName={DPL_ICON_SIZE}
                                requiredProps={requiredProps}
                                min={0}
                                max={200}
                            />
                            <CardDivider />
                            
                            {stylePreset !== 'style-preset-2' && (
                                <>
                                    <BorderControl label={__('Border', 'zoloblocks')} controlName={DPL_BORDER} requiredProps={requiredProps} />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={DPL_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={DPL_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={DPL_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                    <NormalBGControl requiredProps={requiredProps} controlName={DPL_BG} noMainBGImg={true} />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/review"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
