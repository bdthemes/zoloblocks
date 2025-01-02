/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import {
    PRESETS,
    GRID_COLUMNS,
    GRID_GAP,
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
    MC_PADDING,
    MC_SPACING,
} from './constants';

import { REVIEWER_NAME_TYPOGRAPHY, REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';
import { CardDivider } from '@wordpress/components';

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
    NormalBGControl,
    TabPanelControl,
    ZoloPanelBody,
    ResGapControl,
    IconicBtnGroup,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
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
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        layoutType,
        presetFourLayout,
        presetFiveArrowColor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);
    const cssFiltersHover = applyFilters('zolo.extensions.controls.cssFiltersHover', [], block, props);

    const onPresetChange = (selected) => {
        setAttributes({ preset: selected });
        switch (preset) {
            case 'style-1':
                setAttributes({
                    showPhoto: true,
                    showName: true,
                    showDesignation: true,
                    showTestimonialMessage: true,
                    showRating: true,
                });
                break;
            case 'style-2':
                setAttributes({
                    showPhoto: true,
                    showName: true,
                    showDesignation: true,
                    showTestimonialMessage: true,
                    showRating: true,
                });
                break;
            case 'style-3':
                setAttributes({
                    showPhoto: true,
                    showName: true,
                    showDesignation: false,
                    showTestimonialMessage: true,
                    showRating: true,
                });
                break;
            case 'style-4':
                setAttributes({
                    showPhoto: true,
                    showName: true,
                    showDesignation: true,
                    showTestimonialMessage: true,
                    showRating: true,
                });
                break;
            case 'style-5':
                setAttributes({
                    showPhoto: true,
                    showName: true,
                    showTestimonialMessage: true,
                    showRating: true,
                });
            default:
                setAttributes({
                    showPhoto: true,
                    showName: true,
                    showDesignation: true,
                    showTestimonialMessage: true,
                    showRating: true,
                });
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/review-grid"
                setAttributes={setAttributes}
                attributes={attributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.reviewGrid.presets', PRESETS)}
                                onChange={(selected) => onPresetChange(selected)}
                            />
                            <div className="zolo-custom-heading">{__('Show/Hide Elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Reviewer Website Link', 'zoloblocks')}
                                checked={addReviewerWebsiteLink}
                                onChange={() =>
                                    setAttributes({
                                        addReviewerWebsiteLink: !addReviewerWebsiteLink,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Photo', 'zoloblocks')}
                                checked={showPhoto}
                                onChange={() =>
                                    setAttributes({
                                        showPhoto: !showPhoto,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Name', 'zoloblocks')}
                                checked={showName}
                                onChange={() =>
                                    setAttributes({
                                        showName: !showName,
                                    })
                                }
                            />
                            {preset !== 'style-3' && preset !== 'style-5' && (
                                <ToggleControl
                                    label={__('Designation', 'zoloblocks')}
                                    checked={showDesignation}
                                    onChange={() =>
                                        setAttributes({
                                            showDesignation: !showDesignation,
                                        })
                                    }
                                />
                            )}

                            <ToggleControl
                                label={__('Message', 'zoloblocks')}
                                checked={showTestimonialMessage}
                                onChange={() =>
                                    setAttributes({
                                        showTestimonialMessage: !showTestimonialMessage,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Rating', 'zoloblocks')}
                                checked={showRating}
                                onChange={() =>
                                    setAttributes({
                                        showRating: !showRating,
                                    })
                                }
                            />
                            <CardDivider />
                            {preset === 'style-3' && (
                                <>
                                    <SelectControl
                                        label={__('Direction', 'zoloblocks')}
                                        value={presetFourLayout}
                                        options={[
                                            {
                                                label: __('Normal', 'zoloblocks'),
                                                value: 'zolo-fl-normal',
                                            },
                                            {
                                                label: __('Reverse', 'zoloblocks'),
                                                value: 'zolo-fl-reverse',
                                            },
                                        ]}
                                        onChange={(selected) => setAttributes({ presetFourLayout: selected })}
                                    />
                                </>
                            )}
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-row-control-tab">
                                <IconicBtnGroup
                                    label={__('Layout Type', 'zoloblocks')}
                                    value={layoutType}
                                    onChange={(selected) => setAttributes({ layoutType: selected })}
                                    options={[
                                        {
                                            value: 'grid',
                                            label: __('Grid', 'zoloblocks'),
                                        },
                                        {
                                            value: 'column',
                                            label: __('Column', 'zoloblocks'),
                                        },
                                    ]}
                                />
                            </div>
                            <ResCounterControl
                                label={__('Grid Columns', 'zoloblocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={5}
                                defaults={{
                                    deskRange: 3,
                                    tabRange: 2,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl label={__('Gap', 'zoloblocks')} controlName={GRID_GAP} requiredProps={requiredProps} max={200} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
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
                                <CardDivider />
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
                                <CardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl
                                    controlName={REVIEWER_PHOTO_BOX_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                {cssFilters && cssFilters.length > 0 && (
                                    <>
                                        <TabPanelControl
                                            options={[
                                                {
                                                    value: 'normal',
                                                    label: __('Normal', 'zoloblocks'),
                                                },
                                                {
                                                    value: 'hover',
                                                    label: __('Hover', 'zoloblocks'),
                                                },
                                            ]}
                                            normalComponents={<>{cssFilters}</>}
                                            hoverComponents={<>{cssFiltersHover}</>}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {showName && (
                            <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={nameColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            nameColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_NAME_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_NAME_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {addReviewerWebsiteLink && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
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
                                )}
                            </ZoloPanelBody>
                        )}
                        {showDesignation && preset !== 'style-3' && (
                            <ZoloPanelBody title={__('Designation', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={64}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {preset === 'style-4' && (
                            <ZoloPanelBody title={__('Message Container', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Arrow Color', 'zoloblocks')}
                                    color={presetFiveArrowColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            presetFiveArrowColor: color,
                                        })
                                    }
                                />
                                <CardDivider />
                                <NormalBGControl requiredProps={requiredProps} controlName={RC_BG} noMainBGImg={false} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={RC_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <CardDivider />
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={RC_BORDER} requiredProps={requiredProps} />
                                <BoxShadowControl controlName={RC_BSHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={RC_BRADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                            </ZoloPanelBody>
                        )}
                        {showTestimonialMessage && (
                            <ZoloPanelBody title={__('Message', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={testimonialMessageColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            testimonialMessageColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_MESSAGE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_TESTIMONIAL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showRating && (
                            <ZoloPanelBody title={__('Rating', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl label={__('Size', 'zoloblocks')} controlName={ICONS_SIZE} requiredProps={requiredProps} />
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
                                                label={__('Color', 'zoloblocks')}
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
                                                label={__('Color', 'zoloblocks')}
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
                            <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                            block="zolo/review-grid"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
