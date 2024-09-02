import {InspectorControls} from '@wordpress/block-editor';
import { SelectControl, TextControl, ToggleControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import objAttributes from './attributes';

import {
  PRESETS,
  //timeline
  LINE_STYLE,
  LINE_WIDTH,
  NUMBER_BG,
  NUMBER_BORDER_RADIUS,
  NUMBER_HOVER_BG,
  START_END_BG,
  START_END_BORDER_RADIUS,
  //items
  ITEM_GAP,
  ITEM_OFFSET,
  ITEM_PADDING,
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_SHADOW,
  //thumbnail
  THUMBNAIL_BORDER,
  THUMBNAIL_BORDER_RADIUS,
  THUMBNAIL_SPACING,
//title
  TITLE_TEXT_SHADOW,
  TITLE_SPACING,
  //excerpt
  EXCERPT_MARGIN,
  //date
  DATE_SPACING,
  META_SPACE,
  //pagination
  PAG_BORDER,
  PAG_BORDER_RADIUS,
  PAG_MARGIN,
  PAG_PADDING,
  PAG_ALIGN,
} from './constants';

import {
  NUMBER_TYPOGRAPHY,
  START_END_TYPOGRAPHY,
  TITLE_TYPOGRAPHY,
  EXCERPT_TYPOGRAPHY,
  DATE_TYPOGRAPHY,
  META_TYPOGRAPHY,
  PAG_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import {DEFAULT_ALIGNS, HEADING, THUMBNAIL_SIZE} from '../../../src/global/constants';
import {applyFilters} from '@wordpress/hooks';

const {
  ResDimensionsControl,
  QueryControl,
  ResRangeControl,
  RangeResetControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  TabPanelControl,
  ColorControl,
  TypographyDropdown,
  AdvancedOptions,
  ZoloIconPicker,
  ResAlignmentControl,
  ZoloPanelBody,
  ResGapControl,
  TextShadowControl
} = window.zoloModule;

function Inspector(props) {
  const {attributes, setAttributes} = props;
  const {
    preset,
    resMode,
    postQuery,
    showThumbnail,
    showStartEnd,
    showTitle,
    showReadingTime,
    showComment,
    showExcerpt,
    showDate,
    showMeta,
    showCategory,
    titleTag,
    excerptindicator,
    //timeline
    lineStyle,
    lineColor,
    numberColor,
    numberHoverColor,
    numberHoverBColor,
    startEndColor,
    //title
    titleColor,
    titleHoverColor,
    excerptColor,
    dateColor,
    metaColor,
    metaSeparator,
    //pagination
    pagColor,
    pagBgColor,
    apagColor,
    apagBgColor,
    pagSeparatorColor,
  } = attributes;

  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };

  const changePremade = (selected) => {
    setAttributes({preset: selected});
  };

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/pos-timeline"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
              <SelectControl
                label={__('Styles', 'zoloblocks')}
                value={preset}
                options={applyFilters('zolo.postTimeline.presets', PRESETS)}
                onChange={(selected) => changePremade(selected)}
              />
              <ToggleControl
                label={__('Show Start/End', 'zoloblocks')}
                checked={showStartEnd}
                onChange={(showStartEnd) => setAttributes({showStartEnd})}
              />
              <ToggleControl
                label={__('Show Image', 'zoloblocks')}
                checked={showThumbnail}
                onChange={(showThumbnail) => setAttributes({showThumbnail})}
              />
              <ToggleControl
                label={__('Show Date', 'zoloblocks')}
                checked={showDate}
                onChange={(showDate) => setAttributes({showDate})}
              />
              <ToggleControl
                label={__('Show Title', 'zoloblocks')}
                checked={showTitle}
                onChange={(showTitle) => setAttributes({showTitle})}
              />
              <ToggleControl
                label={__('Show Excerpt', 'zoloblocks')}
                checked={showExcerpt}
                onChange={(showExcerpt) => setAttributes({showExcerpt})}
              />
              <ToggleControl
                label={__('Show Meta', 'zoloblocks')}
                checked={showMeta}
                onChange={() => setAttributes({showMeta: !showMeta})}
              />
              {showMeta && (
                <>
                  <ToggleControl
                    label={__('Show Category', 'zoloblocks')}
                    checked={showCategory}
                    onChange={(showCategory) => setAttributes({showCategory})}
                  />
                  <ToggleControl
                    label={__('Show Comments', 'zoloblocks')}
                    checked={showComment}
                    onChange={(showComment) => setAttributes({showComment})}
                  />
                  <ToggleControl
                    label={__('Show Reading Time', 'zoloblocks')}
                    checked={showReadingTime}
                    onChange={(showReadingTime) => setAttributes({showReadingTime})}
                  />
                </>
              )}
              <ToggleControl
                label={__('Show Pagination', 'zoloblocks')}
                checked={postQuery?.showPagination}
                onChange={(showPagination) =>
                  setAttributes({
                    postQuery: {...postQuery, showPagination},
                  })
                }
              />
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
              {showTitle && (
                <>
                  <SelectControl
                    label={__('Title Tag', 'zoloblocks')}
                    value={titleTag}
                    options={HEADING}
                    onChange={(titleTag) => setAttributes({titleTag})}
                  />
                  <RangeResetControl
                    label={__('Title Words', 'zoloblocks')}
                    controlName={'titleWords'}
                    requiredProps={requiredProps}
                    min={1}
                    max={100}
                    step={1}
                  />
                </>
              )}
              {showExcerpt && (
                <>
                  <RangeResetControl
                    label={__('Excerpt Words', 'zoloblocks')}
                    controlName={'excerptWords'}
                    requiredProps={requiredProps}
                    min={1}
                    max={100}
                    step={1}
                  />
                  <TextControl
                    label={__(' Expansion Indicator', 'zoloblocks')}
                    value={excerptindicator}
                    onChange={(excerptindicator) => setAttributes({excerptindicator})}
                  />
                </>
              )}

            </ZoloPanelBody>

            <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
              <QueryControl attributes={attributes} setAttributes={setAttributes}/>
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody title={__('Timeline', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
              <TabPanelControl
                options={[
                  {value: 'normal', label: 'Line'},
                  {value: 'hover', label: 'Number'},
                  {value: 'active', label: 'Start/End'}
                ]}
                normalComponents={
                  <>
                    <SelectControl
                      label={__('Line Style', 'zoloblocks')}
                      value={lineStyle}
                      options={LINE_STYLE}
                      onChange={(lineStyle) => setAttributes({lineStyle})}
                    />
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={lineColor}
                      onChange={(color) =>
                        setAttributes({
                          lineColor: color,
                        })
                      }
                    />
                    <ResRangeControl
                      label={__('Width', 'zoloblocks')}
                      controlName={LINE_WIDTH}
                      requiredProps={requiredProps}
                      min={0.1}
                      max={5}
                      step={0.1}
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <TypographyDropdown
                      label={__('Typography', 'zoloblocks')}
                      typoPrefixConstant={NUMBER_TYPOGRAPHY}
                      requiredProps={requiredProps}
                    />
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={numberColor}
                      onChange={(color) =>
                        setAttributes({
                          numberColor: color,
                        })
                      }
                    />
                    <NormalBGControl requiredProps={requiredProps} controlName={NUMBER_BG} noMainBGImg={true}/>
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={NUMBER_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                    <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={numberHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          numberHoverColor: color,
                        })
                      }
                    />
                    <NormalBGControl requiredProps={requiredProps} controlName={NUMBER_HOVER_BG} noMainBGImg={true}/>
                    <ColorControl
                      label={__('Border Color', 'zoloblocks')}
                      color={numberHoverBColor}
                      onChange={(color) =>
                        setAttributes({
                          numberHoverBColor: color,
                        })
                      }
                    />
                  </>
                }
                activeComponents={
                  <>
                    <TypographyDropdown
                      label={__('Typography', 'zoloblocks')}
                      typoPrefixConstant={START_END_TYPOGRAPHY}
                      requiredProps={requiredProps}
                    />
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={startEndColor}
                      onChange={(color) =>
                        setAttributes({
                          startEndColor: color,
                        })
                      }
                    />
                    <NormalBGControl requiredProps={requiredProps} controlName={START_END_BG} noMainBGImg={true}/>
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={START_END_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                  </>
                }
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Items', 'zoloblocks')} stylePanel={true}
                           panelProps={props}>
              {preset === 'style-3' && (
                <ResRangeControl
                  label={__('Offset', 'zoloblocks')}
                  controlName={ITEM_OFFSET}
                  requiredProps={requiredProps}
                  min={-250}
                  max={250}
                  step={5}
                />
              )}
              {preset !== 'style-3' && (
                <ResGapControl
                  label={__('Gap', 'zoloblocks')}
                  controlName={ITEM_GAP}
                  requiredProps={requiredProps}
                  max={200}
                />
              )}
              <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true}/>
              <BorderControl label={__('Border', 'zoloblocks')} controlName={ITEM_BORDER}
                             requiredProps={requiredProps}/>
              <ResDimensionsControl
                label={__('Border Radius', 'zoloblocks')}
                controlName={ITEM_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={ITEM_PADDING}
                requiredProps={requiredProps}
              />
              <BoxShadowControl controlName={ITEM_SHADOW} requiredProps={requiredProps}/>
            </ZoloPanelBody>

            {showThumbnail && (
              <ZoloPanelBody title={__('Thumbnail', 'zoloblocks')} stylePanel={true} panelProps={props}>
                {showThumbnail && (
                  <SelectControl
                    label={__('Thumbnail Resolution', 'zoloblocks')}
                    value={postQuery?.postThumbnail}
                    options={THUMBNAIL_SIZE}
                    onChange={(postThumbnail) =>
                      setAttributes({
                        postQuery: {...postQuery, postThumbnail},
                      })
                    }
                  />
                )}
                <BorderControl
                  label={__('Border', 'zoloblocks')}
                  controlName={THUMBNAIL_BORDER}
                  requiredProps={requiredProps}
                />
                <ResDimensionsControl
                  label={__('Border Radius', 'zoloblocks')}
                  controlName={THUMBNAIL_BORDER_RADIUS}
                  requiredProps={requiredProps}
                  forBorderRadius={true}
                />
                <ResRangeControl
                  label={__('Spacing', 'zoloblocks')}
                  controlName={THUMBNAIL_SPACING}
                  requiredProps={requiredProps}
                  min={0}
                  max={50}
                  step={1}
                />
              </ZoloPanelBody>
            )}

            {showTitle && (
              <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <TypographyDropdown
                  label={__('Typography', 'zoloblocks')}
                  typoPrefixConstant={TITLE_TYPOGRAPHY}
                  requiredProps={requiredProps}
                />
                <TabPanelControl
                  normalComponents={
                    <>
                      <ColorControl
                        label={__('Title Color', 'zoloblocks')}
                        color={titleColor}
                        onChange={(color) =>
                          setAttributes({
                            titleColor: color,
                          })
                        }
                      />
                    </>
                  }
                  hoverComponents={
                    <>
                      <ColorControl
                        label={__('Title Hover Color', 'zoloblocks')}
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
                <ResRangeControl
                  label={__('Spacing', 'zoloblocks')}
                  controlName={TITLE_SPACING}
                  requiredProps={requiredProps}
                  min={0}
                  max={50}
                  step={1}
                />
                <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps}
                                   enableTransition={false}/>
              </ZoloPanelBody>
            )}

            {showExcerpt && (
              <ZoloPanelBody title={__('Excerpt', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <TypographyDropdown
                  label={__('Typography', 'zoloblocks')}
                  typoPrefixConstant={EXCERPT_TYPOGRAPHY}
                  requiredProps={requiredProps}
                  max={36}
                />
                <ColorControl
                  label={__('Color', 'zoloblocks')}
                  color={excerptColor}
                  onChange={(color) =>
                    setAttributes({
                      excerptColor: color,
                    })
                  }
                />
                <ResDimensionsControl
                  label={__('Margin', 'zoloblocks')}
                  controlName={EXCERPT_MARGIN}
                  requiredProps={requiredProps}
                />
              </ZoloPanelBody>
            )}

            {showDate && (
              <ZoloPanelBody title={__('Date', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <TypographyDropdown
                  label={__('Typography', 'zoloblocks')}
                  typoPrefixConstant={DATE_TYPOGRAPHY}
                  requiredProps={requiredProps}
                  max={36}
                />
                <ColorControl
                  label={__('Color', 'zoloblocks')}
                  color={dateColor}
                  onChange={(dateColor) => setAttributes({dateColor})}
                />
                <ResRangeControl
                  label={__('Spacing', 'zoloblocks')}
                  controlName={DATE_SPACING}
                  requiredProps={requiredProps}
                  min={0}
                  max={100}
                  step={1}
                />
              </ZoloPanelBody>
            )}

            {showMeta && (
              <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <TextControl
                  label={__('Separator', 'zoloblocks')}
                  value={metaSeparator}
                  onChange={(metaSeparator) => setAttributes({metaSeparator})}
                />
                <TypographyDropdown
                  label={__('Typography', 'zoloblocks')}
                  typoPrefixConstant={META_TYPOGRAPHY}
                  requiredProps={requiredProps}
                  max={36}
                />

                <ColorControl
                  label={__('Color', 'zoloblocks')}
                  color={metaColor}
                  onChange={(metaColor) => setAttributes({metaColor})}
                />

                <ResRangeControl
                  label={__('Space Between', 'zoloblocks')}
                  controlName={META_SPACE}
                  requiredProps={requiredProps}
                  min={0}
                  max={100}
                  step={1}
                />

              </ZoloPanelBody>
            )}

            {postQuery?.showPagination && (
              <ZoloPanelBody title={__('Pagination', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <ResAlignmentControl
                  label={__('Alignment', 'zoloblocks')}
                  controlName={PAG_ALIGN}
                  requiredProps={requiredProps}
                  alignOptions={DEFAULT_ALIGNS}
                />
                <TypographyDropdown
                  label={__('Typography', 'zoloblocks')}
                  typoPrefixConstant={PAG_TYPOGRAPHY}
                  requiredProps={requiredProps}
                />
                <BorderControl label={__('Border', 'zoloblocks')} controlName={PAG_BORDER}
                               requiredProps={requiredProps}/>
                <ResDimensionsControl
                  label={__('Border Radius', 'zoloblocks')}
                  controlName={PAG_BORDER_RADIUS}
                  requiredProps={requiredProps}
                  forBorderRadius={true}
                />
                <ResDimensionsControl
                  label={__('Padding', 'zoloblocks')}
                  controlName={PAG_PADDING}
                  requiredProps={requiredProps}
                />
                <ResDimensionsControl
                  label={__('Margin', 'zoloblocks')}
                  controlName={PAG_MARGIN}
                  requiredProps={requiredProps}
                />
                <TabPanelControl
                  options={[
                    {
                      value: 'normal',
                      label: __('Normal', 'zoloblocks'),
                    },
                    {
                      value: 'hover',
                      label: __('Active', 'zoloblocks'),
                    },
                  ]}
                  normalComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={pagColor}
                        onChange={(color) =>
                          setAttributes({
                            pagColor: color,
                          })
                        }
                      />
                      <ColorControl
                        label={__('Background', 'zoloblocks')}
                        color={pagBgColor}
                        onChange={(color) =>
                          setAttributes({
                            pagBgColor: color,
                          })
                        }
                      />
                      <ColorControl
                        label={__('Separator', 'zoloblocks')}
                        color={pagSeparatorColor}
                        onChange={(color) =>
                          setAttributes({
                            pagSeparatorColor: color,
                          })
                        }
                      />
                    </>
                  }
                  hoverComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={apagColor}
                        onChange={(color) =>
                          setAttributes({
                            apagColor: color,
                          })
                        }
                      />
                      <ColorControl
                        label={__('Background', 'zoloblocks')}
                        color={apagBgColor}
                        onChange={(color) =>
                          setAttributes({
                            apagBgColor: color,
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
              block="zolo/post-timeline"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
