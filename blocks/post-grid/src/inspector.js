import {
  InspectorControls
} from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import {
  PRESETS,
  GRID_COLUMNS,
  COLUMNS_GAP,
  THUMBNAIL_HEIGHT,
  COLUMN_PADDING,
  COLUMN_BG,
  COLUMN_BORDER,
  COLUMN_BORDER_RADIUS,
  COLUMN_SHADOW,
  THUMBNAIL_BORDER,
  THUMBNAIL_BORDER_RADIUS,
  THUMBNAIL_BOX_SHADOW,
  THUMBNAIL_MARGIN,
  THUMBNAIL_PADDING,
  THUMBNAIL_BG,
  TITLE_MARGIN,
  EXCERPT_MARGIN,
  WRAPPER_MARGIN,
  WRAPPER_PADDING,
  WRAPPER_BG,
  WRAPPER_BORDER,
  WRAPPER_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY, EXCERPT_TYPOGRAPHY } from './constants/typoPrefixConstant';

import {
  HEADING,
  THUMBNAIL_SIZE
} from '../../../src/global/constants';

const {
  ResDimensionsControl,
  QueryControl,
  ResRangeControl,
  RangeResetControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  BackgroundControl,
  TabPanelControl,
  ColorControl,
  TypographyDropdown,
  ResCounterControl
} = window.zoloModule;

function Inspector({ attributes, setAttributes }) {
  const {
    preset,
    resMode,
    postQuery,
    showThumbnail,
    showTitle,
    titleTag,
    showExcerpt,
    excerptindicator,
    showReadMore,
    readMoreBtnText,
    showCategory,
    showAuthor,
    showMeta,
    showPagination,
    titleColor,
    titleHoverColor,
    excerptColor
  } = attributes;

  const resRequiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };

  const changePremade = (selected) => {
    setAttributes({ preset: selected });
    switch (selected) {
      case 'style-1':
        setAttributes({
          showExcerpt: false,
          showReadMore: false
        });
        break;
      case 'style-2':
        setAttributes({
          showExcerpt: false,
          showReadMore: false
        });
        break;
      case 'style-3':
        setAttributes({
          showExcerpt: false,
          showReadMore: false
        });
        break;
      case 'style-4':
        setAttributes({
          showExcerpt: false,
          showReadMore: false
        });
        break;
      case 'style-5':
        setAttributes({
          showExcerpt: true,
          showReadMore: true
        });
        break;
      default:
        break;
    }
  };

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        generalTab={
          <>
            <PanelBody title={__('Query', 'zolo-blocks')} initialOpen={true} >
              <QueryControl
                attributes={attributes}
                setAttributes={setAttributes}
              />
            </PanelBody>

            <PanelBody title={__('Layout Style', 'zolo-blocks')} initialOpen={false}>
              <SelectControl
                label={__('Preset Designs', 'zolo-blocks')}
                value={preset}
                options={PRESETS}
                onChange={(selected) =>
                  changePremade(selected)
                }
              />
              <ResCounterControl
                label={__('Column', 'zolo-blocks')}
                controlName={GRID_COLUMNS}
                resRequiredProps={resRequiredProps}
                min={1}
                max={6}
              />
              <ResRangeControl
                label={__('Gap', 'zolo-blocks')}
                controlName={COLUMNS_GAP}
                resRequiredProps={resRequiredProps}
                min={0}
                max={100}
                step={1}
              />
              <ToggleControl
                label={__('Show Thumbnail', 'zolo-blocks')}
                checked={showThumbnail}
                onChange={(showThumbnail) => setAttributes({ showThumbnail })}
              />
              <ResRangeControl
                label={__('Thumbnail Height', 'zolo-blocks')}
                controlName={THUMBNAIL_HEIGHT}
                resRequiredProps={resRequiredProps}
                min={0}
                max={600}
                step={1}
              />
              <SelectControl
                label={__('Thumbnail Image Size', 'zolo-blocks')}
                value={postQuery?.postThumbnail}
                options={THUMBNAIL_SIZE}
                onChange={(postThumbnail) => setAttributes({
                  postQuery: { ...postQuery, postThumbnail }
                })}
              />
              <ToggleControl
                label={__('Show Title', 'zolo-blocks')}
                checked={showTitle}
                onChange={(showTitle) => setAttributes({ showTitle })}
              />
              <SelectControl
                label={__('Title Tag', 'zolo-blocks')}
                value={titleTag}
                options={HEADING}
                onChange={(titleTag) => setAttributes({ titleTag })}
              />
              <RangeResetControl
                label={__('Title Words', 'zolo-blocks')}
                controlName={'titleWords'}
                resRequiredProps={resRequiredProps}
                min={1}
                max={100}
                step={1}
              />

              <ToggleControl
                label={__('Show Excerpt', 'zolo-blocks')}
                checked={showExcerpt}
                onChange={(showExcerpt) => setAttributes({ showExcerpt })}
              />
              <RangeResetControl
                label={__('Excerpt Words', 'zolo-blocks')}
                controlName={'excerptWords'}
                resRequiredProps={resRequiredProps}
                min={1}
                max={100}
                step={1}
              />
              <TextControl
                label={__(' Expansion Indicator', 'zolo-blocks')}
                value={excerptindicator}
                onChange={(excerptindicator) => setAttributes({ excerptindicator })}
              />

              <ToggleControl
                label={__('Show Read More Button', 'zolo-blocks')}
                checked={showReadMore}
                onChange={(showReadMore) => setAttributes({ showReadMore })}
              />
              {showReadMore && (
                <TextControl
                  label={__('Button Text', 'zolo-blocks')}
                  value={readMoreBtnText}
                  onChange={(readMoreBtnText) => setAttributes({ readMoreBtnText })}
                />
              )}

              <ToggleControl
                label={__('Show Category', 'zolo-blocks')}
                checked={showCategory}
                onChange={(showCategory) => setAttributes({ showCategory })}
              />
              <ToggleControl
                label={__('Show Author', 'zolo-blocks')}
                checked={showAuthor}
                onChange={(showAuthor) => setAttributes({ showAuthor })}
              />
              <ToggleControl
                label={__('Show Meta', 'zolo-blocks')}
                checked={showMeta}
                onChange={(showMeta) => setAttributes({ showMeta })}
              />
              <ToggleControl
                label={__('Show Pagination', 'zolo-blocks')}
                checked={showPagination}
                onChange={(showPagination) => setAttributes({ showPagination })}
              />


            </PanelBody>
          </>
        }
        styleTab={
          <>
            <PanelBody title={__('Grid Columns', 'zolo-blocks')} initialOpen={true}>
              <ResDimensionsControl
                label={__('Padding', 'zolo-blocks')}
                controlName={COLUMN_PADDING}
                resRequiredProps={resRequiredProps}
              />
              <NormalBGControl
                resRequiredProps={resRequiredProps}
                controlName={COLUMN_BG}
                noMainBGImg={true}
              />
              <BorderControl
                label={__('Border', 'zolo-blocks')}
                controlName={COLUMN_BORDER}
                resRequiredProps={resRequiredProps}
              />
              <ResDimensionsControl
                label={__(
                  'Border Radius',
                  'zolo-blocks'
                )}
                controlName={COLUMN_BORDER_RADIUS}
                resRequiredProps={resRequiredProps}
                forBorderRadius={true}
              />
              <BoxShadowControl
                controlName={COLUMN_SHADOW}
                resRequiredProps={resRequiredProps}
              />
            </PanelBody>

            {showThumbnail && (
              <PanelBody title={__('Thumbnail', 'zolo-blocks')} initialOpen={false}>
                <ResDimensionsControl
                  label={__('Padding', 'zolo-blocks')}
                  controlName={THUMBNAIL_PADDING}
                  resRequiredProps={resRequiredProps}
                  forBorderRadius={false}
                />
                <ResDimensionsControl
                  label={__('Margin', 'zolo-blocks')}
                  controlName={THUMBNAIL_MARGIN}
                  resRequiredProps={resRequiredProps}
                  forBorderRadius={false}
                />
                <NormalBGControl resRequiredProps={resRequiredProps} controlName={THUMBNAIL_BG} noMainBGImg={true} />
                <BorderControl
                  label={__('Border', 'zolo-blocks')}
                  controlName={THUMBNAIL_BORDER}
                  resRequiredProps={resRequiredProps}
                />
                <ResDimensionsControl
                  label={__('Border Radius', 'zolo-blocks')}
                  controlName={THUMBNAIL_BORDER_RADIUS}
                  resRequiredProps={resRequiredProps}
                  forBorderRadius={true}
                />
                <BoxShadowControl
                  controlName={THUMBNAIL_BOX_SHADOW}
                  resRequiredProps={resRequiredProps}
                  enableTransition={false}
                />
              </PanelBody>
            )}

            {showTitle && (
              <PanelBody title={__('Title', 'zolo-blocks')} initialOpen={false}>
                <TypographyDropdown
                  label={__('Typography', 'zolo-blocks')}
                  typoPrefixConstant={TITLE_TYPOGRAPHY}
                  resRequiredProps={resRequiredProps}
                />

                <ResDimensionsControl
                  label={__('Margin', 'zolo-blocks')}
                  controlName={TITLE_MARGIN}
                  resRequiredProps={resRequiredProps}
                />

                <TabPanelControl
                  normalComponents={
                    <>
                      <ColorControl
                        label={__('Title Color', 'zolo-blocks')}
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
                        label={__('Title Hover Color', 'zolo-blocks')}
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
              </PanelBody>
            )}

            {showExcerpt && (
              <PanelBody title={__('Excerpt', 'zolo-blocks')} initialOpen={false}>
                <TypographyDropdown
                  label={__('Typography', 'zolo-blocks')}
                  typoPrefixConstant={EXCERPT_TYPOGRAPHY}
                  resRequiredProps={resRequiredProps}
                />
                <ColorControl
                  label={__('Color', 'zolo-blocks')}
                  color={excerptColor}
                  onChange={(color) =>
                    setAttributes({
                      excerptColor: color,
                    })
                  }
                />
                <ResDimensionsControl
                  label={__('Margin', 'zolo-blocks')}
                  controlName={EXCERPT_MARGIN}
                  resRequiredProps={resRequiredProps}
                />
              </PanelBody>
            )}

            <PanelBody title={__('Meta', 'zolo-blocks')} initialOpen={false}>
            </PanelBody>
          </>
        }
        advancedTab={
          <>
            <>
              <PanelBody title={__('Wrapper Margin & Padding', 'zolo-blocks')} initialOpen={true}>
                <ResDimensionsControl label="Margin" controlName={WRAPPER_MARGIN} resRequiredProps={resRequiredProps} />
                <ResDimensionsControl label="Padding" controlName={WRAPPER_PADDING} resRequiredProps={resRequiredProps} />
              </PanelBody>

              <PanelBody title={__('Background', 'zolo-blocks')} initialOpen={false}>
                <BackgroundControl controlName={WRAPPER_BG} resRequiredProps={resRequiredProps} />
              </PanelBody>

              <PanelBody title={__('Border & BoxShadow', 'zolo-blocks')} initialOpen={false}>
                <BorderControl
                  label={__('Border', 'zolo-blocks')}
                  controlName={WRAPPER_BORDER}
                  resRequiredProps={resRequiredProps}
                />
                <BoxShadowControl controlName={WRAPPER_SHADOW} resRequiredProps={resRequiredProps} />
              </PanelBody>
            </>
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
