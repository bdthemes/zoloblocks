import {InspectorControls} from '@wordpress/block-editor';
import {
  SelectControl,
  ToggleControl,
  RangeControl,
  TextareaControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {applyFilters} from '@wordpress/hooks';
import objAttributes from './attributes';
import {NAME_TYPOGRAPHY, COUNT_TYPOGRAPHY} from './constants/typoPrefixConstant';
import {DEFAULT_ALIGNS} from '../../../src/global/constants';
import QuerySettings from "./query-settings";
import {
  PRESETS,
  GRID_COLUMNS,
  COLUMNS_GAP,
  ITEM_HEIGHT,
  ITEM_TEXT_ALIGN,
  COUNT_PADDING,
  COUNT_BG,
  COUNT_BORDER,
  COUNT_BORDER_RADIUS,
  COUNT_SHADOW,
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_PADDING,
  ITEM_SHADOW,
  ITEM_HOVER_BG,
  ITEM_HOVER_SHADOW,
} from "./constants";

const {
  ResDimensionsControl,
  ResRangeControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  TabPanelControl,
  ColorControl,
  TypographyDropdown,
  ResCounterControl,
  AdvancedOptions,
  ResAlignmentControl,
  ZoloPanelBody,
  ResGapControl,
} = window.zoloModule;
export default function Inspector(props) {
  const {attributes, setAttributes} = props;
  const {
    catQuery,
    resMode,
    preset,
    showCount,
    nameColor,
    nameHoverColor,
    countColor,
    countHoverColor,
    singleBG,
    multipleBG,
    itemHoverOpacity,

  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };
  const changePremade = (selected) => {
    setAttributes({preset: selected});
    switch (selected) {
      case 'style-1':
        setAttributes({
          viewAllBtn: false,
          showText: false,
          showImage: false
        });
        break;
      case 'style-2':
        setAttributes({
          viewAllBtn: true,
          showText: true,
          showImage: true
        });
        break;
    }
  }

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/post-grid"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
              <SelectControl
                label={__('Styles', 'zoloblocks')}
                value={preset}
                options={applyFilters('zolo.postCategory.presets', PRESETS)}
                onChange={(selected) => changePremade(selected)}
              />
              <ResAlignmentControl
                label={__('Alignment', 'zoloblocks')}
                controlName={ITEM_TEXT_ALIGN}
                requiredProps={requiredProps}
                alignOptions={DEFAULT_ALIGNS}
              />
              <ResRangeControl
                label={__('Item Height', 'zoloblocks')}
                controlName={ITEM_HEIGHT}
                requiredProps={requiredProps}
                min={0}
                max={500}
                step={1}
              />

              <ToggleControl
                label={__('Show Count', 'zoloblocks')}
                checked={showCount}
                onChange={(showCount) => setAttributes({showCount})}
              />

            </ZoloPanelBody>
            <ZoloPanelBody title={__('Grid', 'zoloblocks')} panelProps={props}>
              <ResCounterControl
                label={__('Column', 'zoloblocks')}
                controlName={GRID_COLUMNS}
                requiredProps={requiredProps}
                min={1}
                max={6}
                defaults={{
                  deskRange: 3,
                  tabRange: 2,
                  mobRange: 1,
                }}
              />
              <ResGapControl
                label={__('Gap', 'zoloblocks')}
                controlName={COLUMNS_GAP}
                requiredProps={requiredProps}
                max={200}
              />
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
              <QuerySettings attributes={attributes} setAttributes={setAttributes}/>
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody title={__('Items', 'zoloblocks')} firstOpen={true} stylePanel={true}
                           panelProps={props}>
              <TabPanelControl
                normalComponents={
                  <>
                    <ToggleControl
                      label={__('Single Background', 'zoloblocks')}
                      checked={singleBG}
                      onChange={(singleBG) => setAttributes({singleBG})}
                    />
                    {singleBG && (
                      <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true}/>
                    )}
                    {!singleBG && (
                      <TextareaControl
                        __nextHasNoMarginBottom
                        label={__('Multiple Background', 'zoloblocks')}
                        placeholder={'#000000, #f5f5f5, #999999'}
                        value={multipleBG}
                        onChange={(multipleBG) => setAttributes({multipleBG})}
                      />
                    )}

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
                    <BoxShadowControl
                      controlName={ITEM_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />

                  </>
                }
                hoverComponents={
                  <>
                    <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={true}/>
                    <BoxShadowControl
                      controlName={ITEM_HOVER_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />
                    <RangeControl
                      label={__('Opacity', 'zoloblocks')}
                      value={itemHoverOpacity}
                      onChange={(v) => setAttributes({itemHoverOpacity: v})}
                      min={0}
                      max={1}
                      step={0.1}
                    />
                  </>
                }
              />
            </ZoloPanelBody>


            <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={NAME_TYPOGRAPHY}
                requiredProps={requiredProps}
              />

              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={nameColor}
                      onChange={(color) =>
                        setAttributes({
                          nameColor: color,
                        })
                      }
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Hover Color', 'zoloblocks')}
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
            </ZoloPanelBody>
            {showCount && (
              <ZoloPanelBody title={__('Count', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <TypographyDropdown
                  label={__('Typography', 'zoloblocks')}
                  typoPrefixConstant={COUNT_TYPOGRAPHY}
                  requiredProps={requiredProps}
                />

                <NormalBGControl requiredProps={requiredProps} controlName={COUNT_BG} noMainBGImg={true}/>
                <BorderControl label={__('Border', 'zoloblocks')} controlName={COUNT_BORDER}
                               requiredProps={requiredProps}/>
                <ResDimensionsControl
                  label={__('Border Radius', 'zoloblocks')}
                  controlName={COUNT_BORDER_RADIUS}
                  requiredProps={requiredProps}
                  forBorderRadius={true}
                />
                <ResDimensionsControl
                  label={__('Padding', 'zoloblocks')}
                  controlName={COUNT_PADDING}
                  requiredProps={requiredProps}
                />
                <BoxShadowControl
                  controlName={COUNT_SHADOW}
                  requiredProps={requiredProps}
                  enableTransition={false}
                />
                <TabPanelControl
                  normalComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={countColor}
                        onChange={(color) =>
                          setAttributes({
                            countColor: color,
                          })
                        }
                      />
                    </>
                  }
                  hoverComponents={
                    <>
                      <ColorControl
                        label={__('Hover Color', 'zoloblocks')}
                        color={countHoverColor}
                        onChange={(color) =>
                          setAttributes({
                            countHoverColor: color,
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
              block="zolo/post-category"
            />
          </>
        }
      />
    </InspectorControls>
  )
}
