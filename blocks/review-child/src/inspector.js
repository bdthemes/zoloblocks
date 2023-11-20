/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, BaseControl, Button, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

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
    IconPicker,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    CONTENT_ALIGNMENT,
    CONTENT_BACKGROUND,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    CONTENT_MARGIN,
    CONTENT_PADDING,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
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
    DPL_HOVER_BG,
    DPL_HEIGHT,
    DPL_WIDTH,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
} from './constants';

import { REVIEWER_NAME_TYPOGRAPHY, REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';

import { DEFAULT_ALIGNS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        blurBgOpacity,
        resMode,
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
        dplIconColor,
        dplIconHoverColor,
        websiteLinkIcon,
        selectedPanel,
        selectedTab,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    useEffect(() => {
        // set initial panle to panel11
        if (!selectedPanel) {
            setAttributes({
                selectedPanel: 'general',
            });
        }
    }, [selectedPanel, selectedTab]);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <PanelBody
                            title={__('General', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'general' })}
                            opened={selectedPanel === 'general'}
                        >
                            {showPhoto && (
                                <BaseControl label={__('Photo', 'zolo-blocks')}>
                                    {memberPhoto ? (
                                        <ImageAvatar
                                            imageUrl={memberPhoto && memberPhoto.url}
                                            onDeleteImage={() =>
                                                setAttributes({
                                                    memberPhoto: null,
                                                })
                                            }
                                            imageId={memberPhoto && memberPhoto.id}
                                            onEditImage={(url, id) => {
                                                setAttributes({
                                                    memberPhoto: {
                                                        url,
                                                        id,
                                                    },
                                                });
                                            }}
                                        />
                                    ) : (
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    memberPhoto: media,
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
                                                    {__(' Upload Photo', 'zolo-blocks')}
                                                </Button>
                                            )}
                                        />
                                    )}
                                </BaseControl>
                            )}
                            {showName && (
                                <TextControl
                                    label={__('Name', 'zolo-blocks')}
                                    onChange={(name) =>
                                        setAttributes({
                                            memberName: name,
                                        })
                                    }
                                    value={memberName}
                                    placeholder={__('Name..', 'zolo-blocks')}
                                />
                            )}
                            {showDesignation && (
                                <TextControl
                                    label={__('Designation', 'zolo-blocks')}
                                    onChange={(d) =>
                                        setAttributes({
                                            memberDesignation: d,
                                        })
                                    }
                                    value={memberDesignation}
                                    placeholder={__('Designation..', 'zolo-blocks')}
                                />
                            )}
                            {showTestimonialMessage && (
                                <TextareaControl
                                    label={__('Testimonial Message', 'zolo-blocks')}
                                    value={testimonialMessage}
                                    onChange={(bio) =>
                                        setAttributes({
                                            testimonialMessage: bio,
                                        })
                                    }
                                    placeholder={__('Testimonial Message..', 'zolo-blocks')}
                                />
                            )}
                            {showRating && (
                                <RangeControl
                                    label={__('Rating', 'zolo-blocks')}
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
                        </PanelBody>
                        {addReviewerWebsiteLink && (
                            <PanelBody
                                title={__('Reviewer Website', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'website' })}
                                opened={selectedPanel === 'website'}
                            >
                                <LinkControl
                                    label={__('Website Link', 'zolo-blocks')}
                                    value={reviewerWebsiteLink}
                                    onChange={(link) =>
                                        setAttributes({
                                            reviewerWebsiteLink: link,
                                        })
                                    }
                                />
                                <IconPicker
                                    value={websiteLinkIcon}
                                    onChange={(value) => {
                                        setAttributes({
                                            websiteLinkIcon: value,
                                        });
                                    }}
                                    showHeading={true}
                                    disableDashicon={true}
                                />
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        {preset === 'style-2' && (
                            <PanelBody
                                title={__('Preset', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'presetStyle' })}
                                opened={selectedPanel === 'presetStyle'}
                            >
                                <RangeControl
                                    label={__('Blur Strength', 'zolo-blocks')}
                                    value={blurBgOpacity}
                                    onChange={(v) => setAttributes({ blurBgOpacity: v })}
                                    min={0}
                                    max={100}
                                />
                            </PanelBody>
                        )}
                        <PanelBody
                            title={__('Container', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'containerStyle' })}
                            opened={selectedPanel === 'containerStyle'}
                        >
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />
                        </PanelBody>
                        <PanelBody
                            title={__('Content', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'contentStyle' })}
                            opened={selectedPanel === 'contentStyle'}
                        >
                            <ResAlignmentControl
                                label={__('Content Alignmet', 'zolo-blocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={CONTENT_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTENT_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={CONTENT_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <BoxShadowControl controlName={CONTENT_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BACKGROUND} noMainBGImg={true} />
                        </PanelBody>
                        {showPhoto && (
                            <PanelBody
                                title={__('Photo', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'photoStyle' })}
                                opened={selectedPanel === 'photoStyle'}
                            >
                                <ResRangeControl
                                    label={__('Size', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_SIZE}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={2000}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
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
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </PanelBody>
                        )}
                        {showName && (
                            <PanelBody
                                title={__('Name', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'nameStyle' })}
                                opened={selectedPanel === 'nameStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={REVIEWER_NAME_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                {!addReviewerWebsiteLink && (
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={nameColor}
                                        onChange={(color) =>
                                            setAttributes({
                                                nameColor: color,
                                            })
                                        }
                                    />
                                )}
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={REVIEWER_NAME_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {addReviewerWebsiteLink && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
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
                                                    label={__('Color', 'zolo-blocks')}
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
                            </PanelBody>
                        )}
                        {showDesignation && (
                            <PanelBody
                                title={__('Designation', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'designationStyle' })}
                                opened={selectedPanel === 'designationStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={REVIEWER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={REVIEWER_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </PanelBody>
                        )}
                        {showTestimonialMessage && (
                            <PanelBody
                                title={__('Testimonial', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'testimonialStyle' })}
                                opened={selectedPanel === 'testimonialStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={REVIEWER_MESSAGE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={testimonialMessageColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            testimonialMessageColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={REVIEWER_TESTIMONIAL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </PanelBody>
                        )}
                        {showRating && (
                            <PanelBody
                                title={__('Rating', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'ratingStyle' })}
                                opened={selectedPanel === 'ratingStyle'}
                            >
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={ICONS_SIZE}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Active', 'zolo-blocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Inactive', 'zolo-blocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Active Star Color', 'zolo-blocks')}
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
                                                label={__('Inactive Star Color', 'zolo-blocks')}
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
                            </PanelBody>
                        )}
                        {preset === 'style-1' && addReviewerWebsiteLink && (
                            <PanelBody
                                title={__('Detail Page Icon', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'dpIconStyle' })}
                                opened={selectedPanel === 'dpIconStyle'}
                            >
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={DPL_ICON_SIZE}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-blocks')}
                                    controlName={DPL_HEIGHT}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl label={__('Width', 'zolo-blocks')} controlName={DPL_WIDTH} requiredProps={requiredProps} />
                                <BorderControl label={__('Border', 'zolo-blocks')} controlName={DPL_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={DPL_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={DPL_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={DPL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Icon Color', 'zolo-blocks')}
                                                color={dplIconColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        dplIconColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={DPL_BG} noMainBGImg={true} />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Icon Color', 'zolo-blocks')}
                                                color={dplIconHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        dplIconHoverColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={DPL_HOVER_BG} noMainBGImg={true} />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}
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
