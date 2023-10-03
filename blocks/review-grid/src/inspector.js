/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import { PRESETS, GRID_COLUMNS, COLUMNS_GAP, ROWS_GAP, REVIEW_GRID_BG, REVIEW_GRID_MARGIN, REVIEW_GRID_PADDING } from './constants';

const { ResRangeControl, ResDimensionsControl, NormalBGControl, HeaderTabs, ResCounterControl } = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { preset, resMode, showPhoto, addReviewerWebsiteLink, showName, showDesignation, showTestimonialMessage, showRating } =
        attributes;

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
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={false}>
                            <SelectControl
                                label={__('Preset Designs', 'zolo-blocks')}
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
                            <ResRangeControl
                                label={__('Rows Gap', 'zolo-blocks')}
                                controlName={ROWS_GAP}
                                requiredProps={requiredProps}
                            />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={false}>
                            <NormalBGControl requiredProps={requiredProps} controlName={REVIEW_GRID_BG} noMainBGImg={false} />
                        </PanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <PanelBody title={__('Spacing', 'zolo-blocks')} initialOpen={false}>
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={REVIEW_GRID_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={REVIEW_GRID_MARGIN}
                                requiredProps={requiredProps}
                            />
                        </PanelBody>
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
