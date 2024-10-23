import {__} from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import {ToggleControl, CardDivider, SelectControl, TextControl} from '@wordpress/components';
import objAttributes from './attributes';
import {applyFilters} from "@wordpress/hooks";

import {
  //thumbnail
  THUMBNAIL_ALIGN,
  THUMBNAIL_WIDTH,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_BORDER,
  THUMBNAIL_BRADIUS,
  THUMBNAIL_BOX_SHADOW,
  THUMBNAIL_HOVER_SHADOW
} from './constants';

import {FLEX_HORIZONTAL_OPTIONS, THUMBNAIL_SIZE} from "@/global/constants";

const {
  ResDimensionsControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  AdvancedOptions,
  ZoloPanelBody,
  TabPanelControl,
  ResRangeControl,
  ResAlignmentControl
} = window.zoloModule;
export default function Inspector(props) {
  const {attributes, setAttributes, block} = props;
  const {
    resMode,
    isLink,
    linkTarget,
    linkRel,
    useFirstImageFromPost,
    //thumbnail
    thumbnailSize,
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
        block="zolo/post-navigation"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
              <div className="zolo-custom-heading" style={{border: 0, paddingTop: 0}}>
                {__('Show/hide elements', 'zoloblocks')}
              </div>
              <ToggleControl
                label={__('Link to Post', 'zoloblocks')}
                checked={isLink}
                onChange={(isLink) => setAttributes({isLink})}
              />
              {isLink && (
                <>
                  <ToggleControl
                    label={__('Open in new tab', 'zoloblocks')}
                    onChange={(value) => setAttributes({linkTarget: value ? '_blank' : '_self'})}
                    checked={linkTarget === '_blank'}
                  />
                  <TextControl
                    label={__('Link rel', 'zoloblocks')}
                    value={linkRel}
                    onChange={(linkRel) => setAttributes({linkRel})}
                  />
                </>
              )}
              <CardDivider/>
              <ToggleControl
                label={__('Image From Post Content', 'zoloblocks')}
                checked={useFirstImageFromPost}
                onChange={(useFirstImageFromPost) => setAttributes({useFirstImageFromPost})}
                help={__("Enable 'Use first image from post content' if no featured image is set.", 'zoloblocks')}
              />
              <CardDivider/>
              <SelectControl
                label={__('Resolution', 'zoloblocks')}
                value={thumbnailSize}
                options={THUMBNAIL_SIZE}
                onChange={(thumbnailSize) => setAttributes({thumbnailSize})}
              />
              <ResAlignmentControl
                label={__('Alignment', 'zoloblocks')}
                controlName={THUMBNAIL_ALIGN}
                requiredProps={requiredProps}
                alignOptions={FLEX_HORIZONTAL_OPTIONS}
              />
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody title={__('Image', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>

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
                    <CardDivider/>
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
                    <CardDivider/>
                    {cssFilters && cssFilters.length > 0 && cssFilters}
                  </>
                }
                hoverComponents={
                  <>
                    <BoxShadowControl
                      controlName={THUMBNAIL_HOVER_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />
                    <CardDivider/>
                    {cssFiltersHover && cssFiltersHover.length > 0 && cssFiltersHover}
                  </>
                }
              />

            </ZoloPanelBody>
          </>
        }
        advancedTab={
          <>
            <AdvancedOptions
              attributes={attributes}
              setAttributes={setAttributes}
              requiredProps={requiredProps}
              block="zolo/post-featured-image"
            />
          </>
        }
      />
    </InspectorControls>
  );
}
