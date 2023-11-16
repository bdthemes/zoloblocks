/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import {
    PRESETS,
    GRID_COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
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

const {
    ResRangeControl,
    HeaderTabs,
    ResCounterControl,
    AdvancedOptions,
    ResAlignmentControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    BoxShadowControl,
    ImageAvatar,
    LinkControl,
    NormalBGControl,
    TabPanelControl,
    IconPicker,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        showPhoto,
        addReviewerWebsiteLink,
        showName,
        showDesignation,
        showTestimonialMessage,
        showRating,
        nameColor,
        nameHoverColor,
        nameLinkColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        dplIconColor,
        dplIconHoverColor,
        blurBgOpacity,
        websiteLinkIcon,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };
    /**
     * Preset
     */
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case 'default':
                setAttributes({
                    showPhoto: true,
                    showName: true,
                    showDesignation: true,
                    showTestimonialMessage: true,
                    showRating: true,
                    addReviewerWebsiteLink: true,
                });
                break;
            case 'style-1':
                setAttributes({
                    showTestimonialMessage: false,
                });
                break;
            case 'style-2':
                setAttributes({
                    showTestimonialMessage: false,
                });
                break;
            default:
                setAttributes({
                    showPhoto: true,
                    showName: true,
                    showDesignation: true,
                    showTestimonialMessage: true,
                    showRating: true,
                    addReviewerWebsiteLink: true,
                });
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <ToggleControl
                                label={__('Add Reviewer Website Link', 'zolo-blocks')}
                                checked={addReviewerWebsiteLink}
                                onChange={() =>
                                    setAttributes({
                                        addReviewerWebsiteLink: !addReviewerWebsiteLink,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Photo', 'zolo-blocks')}
                                checked={showPhoto}
                                onChange={() =>
                                    setAttributes({
                                        showPhoto: !showPhoto,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Name', 'zolo-blocks')}
                                checked={showName}
                                onChange={() =>
                                    setAttributes({
                                        showName: !showName,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Designation', 'zolo-blocks')}
                                checked={showDesignation}
                                onChange={() =>
                                    setAttributes({
                                        showDesignation: !showDesignation,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Testimonial Message', 'zolo-blocks')}
                                checked={showTestimonialMessage}
                                onChange={() =>
                                    setAttributes({
                                        showTestimonialMessage: !showTestimonialMessage,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Rating', 'zolo-blocks')}
                                checked={showRating}
                                onChange={() =>
                                    setAttributes({
                                        showRating: !showRating,
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Grid', 'zolo-blocks')} initialOpen={false}>
                            <ResCounterControl
                                label={__('Grid Columns', 'zolo-blocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={5}
                            />
                            <ResRangeControl
                                label={__('Columns Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                            />
                            <ResRangeControl label={__('Rows Gap', 'zolo-blocks')} controlName={ROWS_GAP} requiredProps={requiredProps} />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        {preset === 'style-2' && (
                            <PanelBody title={__('Preset Style', 'zolo-blocks')} initialOpen={true}>
                                <RangeControl
                                    label={__('Blur Strength', 'zolo-blocks')}
                                    value={blurBgOpacity}
                                    onChange={(v) => setAttributes({ blurBgOpacity: v })}
                                    min={0}
                                    max={100}
                                />
                            </PanelBody>
                        )}
                        <PanelBody title={__('Item Container', 'zolo-blocks')} initialOpen={preset === 'style-2' ? false : true}>
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
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
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
                            <PanelBody title={__('Photo', 'zolo-blocks')} initialOpen={false}>
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
                            <PanelBody title={__('Name', 'zolo-blocks')} initialOpen={false}>
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
                            <PanelBody title={__('Designation', 'zolo-blocks')} initialOpen={false}>
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
                            <PanelBody title={__('Testimonial', 'zolo-blocks')} initialOpen={false}>
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
                            <PanelBody title={__('Rating', 'zolo-blocks')} initialOpen={false}>
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
                            <PanelBody title={__('Detail Page Icon', 'zolo-blocks')} initialOpen={false}>
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
