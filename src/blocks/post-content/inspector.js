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

import { CONTENT_TYPOGRAPHY, HEADING_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';
import Sortable from './sortable';
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
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        resMode,
        inheritThemeLayout,
        styleTags,
        headingTags,
        contentColor,
        contentHoverColor,
        thumbnailBorderHColor,
        headingColor,
        headingHoverColor,
        linkColor,
        linkHoverColor,
        linkHoverBorderColor,
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
                                {__('Show/hide elements', 'zoloblocks')}
                            </div>
                            <ToggleControl
                                label={__('Inherit Theme Layout', 'zoloblocks')}
                                checked={inheritThemeLayout}
                                onChange={(inheritThemeLayout) => setAttributes({ inheritThemeLayout })}
                            />
                            <CardDivider />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Style Tag', 'zoloblocks')} panelProps={props}>
                            <Sortable styleTags={styleTags} setAttributes={setAttributes} />
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
                        {styleTags?.some((item) => item.type === 'image') && (
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

                        {styleTags?.some((item) => item.type === 'heading') && headingTags.length > 0 && (
                            <ZoloPanelBody title={__('Heading', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
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
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={headingHoverColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        headingHoverColor: val,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {styleTags?.some((item) => item.type === 'link') && headingTags.length > 0 && (
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
