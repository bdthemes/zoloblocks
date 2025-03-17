import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import {
    CONTENT_ALIGN,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BG,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_SHADOW,
    CONTENT_TEXT_SHADOW,
    CONTENT_TEXT_STROKE,
    CONTENT_HOVER_BG,
    CONTENT_HOVER_BORDER,
    CONTENT_HOVER_BRADIUS,
    CONTENT_HOVER_SHADOW,
    //image
    THUMBNAIL_WIDTH,
    THUMBNAIL_HEIGHT,
    THUMBNAIL_BG,
    THUMBNAIL_PADDING,
    THUMBNAIL_MARGIN,
    THUMBNAIL_BORDER,
    THUMBNAIL_BRADIUS,
    THUMBNAIL_BOX_SHADOW,
    THUMBNAIL_HOVER_SHADOW,
    //heading
    HEADING_TEXT_SHADOW,
    HEADING_TEXT_STROKE,
    HEADING_MARGIN,
    // heading two
    HEADING_TWO_TEXT_SHADOW,
    HEADING_TWO_TEXT_STROKE,
    HEADING_TWO_MARGIN,

    // heading three
    HEADING_THREE_TEXT_SHADOW,
    HEADING_THREE_TEXT_STROKE,
    HEADING_THREE_MARGIN,

    // heading four
    HEADING_FOUR_TEXT_SHADOW,
    HEADING_FOUR_TEXT_STROKE,
    HEADING_FOUR_MARGIN,

    // heading FIVE
    HEADING_FIVE_TEXT_SHADOW,
    HEADING_FIVE_TEXT_STROKE,
    HEADING_FIVE_MARGIN,

    // heading SIX
    HEADING_SIX_TEXT_SHADOW,
    HEADING_SIX_TEXT_STROKE,
    HEADING_SIX_MARGIN,
    //link
    LINK_BG,
    LINK_PADDING,
    LINK_MARGIN,
    LINK_BORDER,
    LINK_SHADOW,
    LINK_BORDER_RADIUS,
    LINK_HOVER_BG,
    LINK_HOVER_SHADOW,
} from './constants';

import {
    CONTENT_TYPOGRAPHY,
    HEADING_TYPOGRAPHY,
    HEADING_TWO_TYPOGRAPHY,
    HEADING_THREE_TYPOGRAPHY,
    HEADING_FOUR_TYPOGRAPHY,
    HEADING_FIVE_TYPOGRAPHY,
    HEADING_SIX_TYPOGRAPHY,
    LINK_TYPOGRAPHY,
} from './constants/typoPrefixConstant';
import { TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';
// import Sortable from './sortable';
import { applyFilters } from '@wordpress/hooks';

const {
    TextShadowControl,
    TextStrokeControl,
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    TabPanelControl,
    ColorControl,
    TypographyDropdown,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ResRangeControl,
    IconicBtnGroup,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        resMode,
        inheritThemeLayout,
        contentColor,
        contentHoverColor,
        thumbnailBorderHColor,
        headingColor,
        headingTwoColor,
        headingThreeColor,
        headingFourColor,
        headingFiveColor,
        headingSixColor,
        headingHoverColor,
        linkColor,
        linkHoverColor,
        linkHoverBorderColor,
        titleTagName,
        heading,
        showImage,
        showLink,
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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-content"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('show/hide elements', 'zoloblocks')}
                            </div>
                            <ToggleControl
                                label={__('Inherit Theme Layout', 'zoloblocks')}
                                checked={inheritThemeLayout}
                                onChange={(inheritThemeLayout) => setAttributes({ inheritThemeLayout })}
                            />
                            <CardDivider />
                            <ToggleControl
                                label={__('Heading', 'zoloblocks')}
                                checked={heading}
                                onChange={(heading) => setAttributes({ heading })}
                            />
                            <ToggleControl
                                label={__('Image', 'zoloblocks')}
                                checked={showImage}
                                onChange={(showImage) => setAttributes({ showImage })}
                            />
                            <ToggleControl
                                label={__('Link', 'zoloblocks')}
                                checked={showLink}
                                onChange={(showLink) => setAttributes({ showLink })}
                            />
                            <CardDivider />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={contentColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    contentColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={CONTENT_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <TextShadowControl
                                            controlName={CONTENT_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <TextStrokeControl
                                            controlName={CONTENT_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CONTENT_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={CONTENT_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={CONTENT_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={CONTENT_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CONTENT_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={contentHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    contentHoverColor: color,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_HOVER_BG} noMainBGImg={true} />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={CONTENT_HOVER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={CONTENT_HOVER_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CONTENT_HOVER_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        {showImage && (
                            <ZoloPanelBody title={__('Image', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ResRangeControl
                                                label={__('Width', 'zoloblocks')}
                                                controlName={THUMBNAIL_WIDTH}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2000}
                                                step={1}
                                            />
                                            <ResRangeControl
                                                label={__('Height', 'zoloblocks')}
                                                controlName={THUMBNAIL_HEIGHT}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={1000}
                                                step={1}
                                            />
                                            <CardDivider />
                                            <NormalBGControl requiredProps={requiredProps} controlName={THUMBNAIL_BG} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={THUMBNAIL_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={THUMBNAIL_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={THUMBNAIL_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={THUMBNAIL_BRADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <BoxShadowControl
                                                controlName={THUMBNAIL_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <CardDivider />
                                            {cssFilters && cssFilters.length > 0 && cssFilters}
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={thumbnailBorderHColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        thumbnailBorderHColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={THUMBNAIL_HOVER_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <CardDivider />
                                            {cssFiltersHover && cssFiltersHover.length > 0 && cssFiltersHover}
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {heading && (
                            <ZoloPanelBody title={__('Heading', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <div className="zolo-flex-col-control-tab zolo-post-content">
                                    <IconicBtnGroup
                                        label={__('Type', 'zoloblocks')}
                                        value={titleTagName}
                                        options={[
                                            { label: 'H1', value: 'h1' },
                                            { label: 'H2', value: 'h2' },
                                            { label: 'H3', value: 'h3' },
                                            { label: 'H4', value: 'h4' },
                                            { label: 'H5', value: 'h5' },
                                            { label: 'H6', value: 'h6' },
                                        ]}
                                        onChange={(value) =>
                                            setAttributes({
                                                titleTagName: value,
                                            })
                                        }
                                    />
                                </div>

                                {titleTagName === 'h1' && (
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={headingColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    headingColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={HEADING_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                        <TextShadowControl
                                            controlName={HEADING_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <TextStrokeControl
                                            controlName={HEADING_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HEADING_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}

                                {titleTagName === 'h2' && (
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={headingTwoColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    headingTwoColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={HEADING_TWO_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                        <TextShadowControl
                                            controlName={HEADING_TWO_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <TextStrokeControl
                                            controlName={HEADING_TWO_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HEADING_TWO_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}

                                {titleTagName === 'h3' && (
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={headingThreeColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    headingThreeColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={HEADING_THREE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                        <TextShadowControl
                                            controlName={HEADING_THREE_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <TextStrokeControl
                                            controlName={HEADING_THREE_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HEADING_THREE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}

                                {titleTagName === 'h4' && (
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={headingFourColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    headingFourColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={HEADING_FOUR_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                        <TextShadowControl
                                            controlName={HEADING_FOUR_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <TextStrokeControl
                                            controlName={HEADING_FOUR_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HEADING_FOUR_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}

                                {titleTagName === 'h5' && (
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={headingFiveColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    headingFiveColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={HEADING_FIVE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                        <TextShadowControl
                                            controlName={HEADING_FIVE_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <TextStrokeControl
                                            controlName={HEADING_FIVE_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HEADING_FIVE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}

                                {titleTagName === 'h6' && (
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={headingSixColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    headingSixColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={HEADING_SIX_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                        <TextShadowControl
                                            controlName={HEADING_SIX_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <TextStrokeControl
                                            controlName={HEADING_SIX_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HEADING_SIX_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}

                        {showLink && (
                            <ZoloPanelBody title={__('Link', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={linkColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        linkColor: val,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={LINK_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={200}
                                            />
                                            <CardDivider />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LINK_BG} noMainBGImg={true} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={LINK_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={LINK_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LINK_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl controlName={LINK_SHADOW} requiredProps={requiredProps} />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={LINK_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={linkHoverColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        linkHoverColor: val,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LINK_HOVER_BG} noMainBGImg={true} />
                                            <CardDivider />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={linkHoverBorderColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        linkHoverBorderColor: val,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl controlName={LINK_HOVER_SHADOW} requiredProps={requiredProps} />
                                        </>
                                    }
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
                            block="zolo/post-content"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
