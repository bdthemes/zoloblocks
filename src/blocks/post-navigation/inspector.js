import {__} from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import {ToggleControl, TextControl, CardDivider, SelectControl} from '@wordpress/components';
import objAttributes from './attributes';
import {applyFilters} from "@wordpress/hooks";

import {
  TITLE_TYPOGRAPHY,
  BTN_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import {
  GET_TAXONOMIEX,
  //title
  TITLE_MARGIN,
  //thumbnail
  THUMBNAIL_HEIGHT,
  THUMBNAIL_BG,
  THUMBNAIL_PADDING,
  THUMBNAIL_MARGIN,
  THUMBNAIL_BORDER,
  THUMBNAIL_BRADIUS,
  THUMBNAIL_BOX_SHADOW,
  //submit btn
  BTN_PADDING,
  BTN_BORDER_RADIUS,
  BTN_MARGIN,
  BTN_BORDER,
} from './constants';

import {THUMBNAIL_SIZE} from "@/global/constants";

const {
  ResDimensionsControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  ColorControl,
  TypographyDropdown,
  AdvancedOptions,
  ZoloPanelBody,
  TabPanelControl,
  ResRangeControl,
  NormalBGControl,
  ZoloIconPicker
} = window.zoloModule;
export default function Inspector(props) {
  const {attributes, setAttributes, block} = props;
  const {
    resMode,
    showImage,
    showTitle,
    showBtn,
    showCategoryBased,
    selectedTaxonomy,
    previousPost,
    nextPost,
    //thumbnail
    thumbnailSize,
    //title
    titleColor,
    titleHoverColor,
    //prev/next button
    previousPostIcon,
    nextPostIcon,
    btnColor,
    btnBgColor,
    btnHoverColor,
    btnBgHoverColor
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };

  const taxonomiesArray = GET_TAXONOMIEX(zoloParams.get_taxonomies);
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
                label={__('Show Post Image', 'zoloblocks')}
                checked={showImage}
                onChange={(showImage) => setAttributes({showImage})}
              />
              <ToggleControl
                label={__('Show Post Title', 'zoloblocks')}
                checked={showTitle}
                onChange={(showTitle) => setAttributes({showTitle})}
              />
              <ToggleControl
                label={__('Show Prev/Next Button', 'zoloblocks')}
                checked={showBtn}
                onChange={(showBtn) => setAttributes({showBtn})}
              />
              <ToggleControl
                label={__('Category Based', 'zoloblocks')}
                checked={showCategoryBased}
                onChange={(showCategoryBased) => setAttributes({showCategoryBased})}
              />

              {showCategoryBased && (
                <>
                  <CardDivider/>
                  <SelectControl
                    label={__('Taxonomies', 'zoloblocks')}
                    value={selectedTaxonomy}
                    options={taxonomiesArray}
                    onChange={(selectedTaxonomy) => setAttributes({selectedTaxonomy})}
                  />
                </>
              )}
            </ZoloPanelBody>

            {showBtn && (
              <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                <div className="zolo-custom-heading" style={{border: 0, paddingTop: 0}}>
                  {__('Prev/Next Button', 'zoloblocks')}
                </div>
                <TextControl
                  label={__('Previous Post', 'zoloblocks')}
                  value={previousPost}
                  onChange={(previousPost) => setAttributes({previousPost})}
                />
                <ZoloIconPicker
                  label={__('Previous Post Icon', 'zoloblocks')}
                  value={previousPostIcon}
                  onChange={(previousPostIcon) => setAttributes({previousPostIcon})}
                />
                <TextControl
                  label={__('Next Post', 'zoloblocks')}
                  value={nextPost}
                  onChange={(nextPost) => setAttributes({nextPost})}
                />
                <ZoloIconPicker
                  label={__('Next Post Icon', 'zoloblocks')}
                  value={nextPostIcon}
                  onChange={(nextPostIcon) => setAttributes({nextPostIcon})}
                />
              </ZoloPanelBody>
            )}
          </>
        }
        styleTab={
          <>
            {showImage && (
              <ZoloPanelBody title={__('Image', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                <ResRangeControl
                  label={__('Height', 'zoloblocks')}
                  controlName={THUMBNAIL_HEIGHT}
                  requiredProps={requiredProps}
                  min={0}
                  max={150}
                  step={1}
                />

                <SelectControl
                  label={__('Resolution', 'zoloblocks')}
                  value={thumbnailSize}
                  options={THUMBNAIL_SIZE}
                  onChange={(thumbnailSize) => setAttributes({thumbnailSize})}
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

            {showTitle && (
              <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <TabPanelControl
                  normalComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={titleColor}
                        onChange={(color) =>
                          setAttributes({
                            titleColor: color,
                          })
                        }
                      />
                      <TypographyDropdown
                        label={__('Typography', 'zoloblocks')}
                        typoPrefixConstant={TITLE_TYPOGRAPHY}
                        requiredProps={requiredProps}
                      />
                      <CardDivider/>
                      <ResDimensionsControl
                        label={__('Margin', 'zoloblocks')}
                        controlName={TITLE_MARGIN}
                        requiredProps={requiredProps}
                      />
                    </>
                  }
                  hoverComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={titleHoverColor}
                        onChange={(color) =>
                          setAttributes({
                            titleHoverColor: color,
                          })
                        }
                      />
                    </>
                  }
                />
              </ZoloPanelBody>
            )}

            {showBtn && (
              <ZoloPanelBody title={__('Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <TabPanelControl
                  normalComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={btnColor}
                        onChange={(value) =>
                          setAttributes({
                            btnColor: value,
                          })
                        }
                      />
                      <TypographyDropdown
                        label={__('Typography', 'zoloblocks')}
                        typoPrefixConstant={BTN_TYPOGRAPHY}
                        requiredProps={requiredProps}
                        max={36}
                      />
                      <CardDivider/>
                      <ColorControl
                        label={__('Background', 'zoloblocks')}
                        color={btnBgColor}
                        onChange={(value) =>
                          setAttributes({
                            btnBgColor: value,
                          })
                        }
                      />
                      <ResDimensionsControl
                        label={__('Padding', 'zoloblocks')}
                        controlName={BTN_PADDING}
                        requiredProps={requiredProps}
                      />
                      <ResDimensionsControl
                        label={__('Margin', 'zoloblocks')}
                        controlName={BTN_MARGIN}
                        requiredProps={requiredProps}
                      />
                      <CardDivider/>
                      <BorderControl
                        label={__('Border', 'zoloblocks')}
                        controlName={BTN_BORDER}
                        requiredProps={requiredProps}
                      />
                      <ResDimensionsControl
                        label={__('Border Radius', 'zoloblocks')}
                        controlName={BTN_BORDER_RADIUS}
                        requiredProps={requiredProps}
                        forBorderRadius={true}
                      />

                    </>
                  }
                  hoverComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={btnHoverColor}
                        onChange={(value) =>
                          setAttributes({
                            btnHoverColor: value,
                          })
                        }
                      />
                      <ColorControl
                        label={__('Background', 'zoloblocks')}
                        color={btnBgHoverColor}
                        onChange={(value) =>
                          setAttributes({
                            btnBgHoverColor: value,
                          })
                        }
                      />
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
              block="zolo/post-navigation"
            />
          </>
        }
      />
    </InspectorControls>
  );
}
