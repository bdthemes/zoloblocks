/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, TextareaControl, BaseControl, Button, RangeControl } from '@wordpress/components';
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
    LinkControl,
    NormalBGControl,
    HeaderTabs,
    TabPanelControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
    ObjectFitControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    CONTENT_ALIGNMENT,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_PADDING,
    REVIEWER_PHOTO_WIDTH,
    REVIEWER_PHOTO_HEIGHT,
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
    RC_BORDER,
    RC_BRADIUS,
    RC_PADDING,
    RC_BSHADOW,
    RC_BG,
    MC_SPACING,
    MC_PADDING,
} from './constants';

import { REVIEWER_NAME_TYPOGRAPHY, REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';

import { DEFAULT_ALIGNS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        showPhoto,
        memberPhoto,
        showName,
        memberName,
        showDesignation,
        showTestimonialMessage,
        testimonialMessage,
        memberDesignation,
        addReviewerWebsiteLink,
        reviewerWebsiteLink,
        showRating,
        rating,
        nameColor,
        nameHoverColor,
        nameLinkColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        imageRes,
        objectFit,
        presetFiveArrowColor,
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
                block="zolo/review-child"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
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
                                        onChange={(imageRes) =>
                                            setAttributes({
                                                imageRes: imageRes,
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
                            {showDesignation && preset !== 'style-3' && (
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
                                    label={__('Testimonial Message', 'zoloblocks')}
                                    value={testimonialMessage}
                                    onChange={(bio) =>
                                        setAttributes({
                                            testimonialMessage: bio,
                                        })
                                    }
                                    placeholder={__('Testimonial Message..', 'zoloblocks')}
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
                        {addReviewerWebsiteLink && (
                            <ZoloPanelBody title={__('Reviewer Website', 'zoloblocks')} panelProps={props}>
                                <LinkControl
                                    label={__('Website Link', 'zoloblocks')}
                                    value={reviewerWebsiteLink}
                                    onChange={(link) =>
                                        setAttributes({
                                            reviewerWebsiteLink: link,
                                        })
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <ResAlignmentControl
                                label={__('Content Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />
                        </ZoloPanelBody>

                        {showPhoto && (
                            <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_WIDTH}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={1000}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_HEIGHT}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={1000}
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
                                <BoxShadowControl
                                    controlName={REVIEWER_PHOTO_BOX_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={REVIEWER_PHOTO_BG} noMainBGImg={true} />
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
                            </ZoloPanelBody>
                        )}
                        {showName && (
                            <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_NAME_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                {!addReviewerWebsiteLink && (
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={nameColor}
                                        onChange={(color) =>
                                            setAttributes({
                                                nameColor: color,
                                            })
                                        }
                                    />
                                )}
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_NAME_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {addReviewerWebsiteLink && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={nameLinkColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            nameLinkColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={nameHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            nameHoverColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                        {showDesignation && preset !== 'style-3' && (
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
                        {preset === 'style-4' && (
                            <ZoloPanelBody title={__('Review Container', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Arrow Color', 'zoloblocks')}
                                    color={presetFiveArrowColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            presetFiveArrowColor: color,
                                        })
                                    }
                                />
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={RC_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={RC_BRADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <BoxShadowControl controlName={RC_BSHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <NormalBGControl requiredProps={requiredProps} controlName={RC_BG} noMainBGImg={false} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={RC_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
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
                                                label={__('Active Star Color', 'zoloblocks')}
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
                                                label={__('Inactive Star Color', 'zoloblocks')}
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
                        {preset === 'style-4' && (
                            <ZoloPanelBody title={__('Meta Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Spacing', 'zoloblocks')}
                                    controlName={MC_SPACING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={MC_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
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
                            block="zolo/review-child"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
