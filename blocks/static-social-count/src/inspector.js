
/**
 * Internal depencencies
 */
const {
  ResRangeControl,
  ColorControl,
  TabPanelControl,
  HeaderTabs,
  IconicBtnGroup,
  ResCounterControl,
  ResDimensionsControl,
  BorderControl,
  NormalBGControl,
  BoxShadowControl,
  TypographyDropdown,
  AdvancedOptions,
  ResGapControl,
  ZoloPanelBody,
  ResAlignmentControl,
} = window.zoloModule;

import Sortable from './sortable';

/**
 * WordPress depencencies
 */
import {InspectorControls} from '@wordpress/block-editor';
import {SelectControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import objAttributes from './attributes';

import {
  PRESETS,
  GRID_COLUMNS,
  COLUMNS_GAP,
  //item
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_PADDING,
  ITEM_SHADOW,
  ITEM_HOVER_BG,
  //icon
  ICON_BG,
  ICON_BORDER,
  ICON_BORDER_RADIUS,
  ICON_PADDING,
  ICON_SIZE,
  ICON_SPACING,
  ICON_HOVER_BG,
  //counter
  COUNTER_SPACING
} from './constants';

import {COUNTER_TYPOGRAPHY,META_TYPOGRAPHY} from './constants/typoPrefixConstant';
import {applyFilters} from '@wordpress/hooks';

function Inspector(props) {
  const {attributes, setAttributes} = props;
  const {
    preset,
    resMode,
    socialProfiles,
    iconColor,
    iconHoverColor,
    counterColor,
    metaColor,
  } = attributes;

  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes,
  };

  /**
   * Preset
   */
  const changePremade = (selected) => {
    setAttributes({preset: selected});
    // switch (selected) {
    //     case 'style-1':
    //         setAttributes({
    //             socialText: 'iconText',
    //         });
    //         break;
    //     case 'style-2':
    //         setAttributes({
    //             socialText: 'iconOnly',
    //         });
    //         break;
    //     default:
    //         setAttributes({
    //             socialText: 'iconText',
    //         });
    //         break;
    // }
  };

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/social-links"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
              <SelectControl
                label={__('Presets', 'zoloblocks')}
                value={preset}
                options={applyFilters('zolo.socialLinks.presets', PRESETS)}
                onChange={(value) => changePremade(value)}
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
                  deskRange: 4,
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
            <ZoloPanelBody title={__('Social Profiles', 'zoloblocks')} panelProps={props}>
              <Sortable socialProfiles={socialProfiles} setAttributes={setAttributes}/>
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>

            <ZoloPanelBody title={__('Items', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>

              <TabPanelControl

                normalComponents={
                  <>
                    <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true}/>
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={ITEM_BORDER}
                      requiredProps={requiredProps}
                    />

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
                      forBorderRadius={false}
                    />
                    <BoxShadowControl controlName={ITEM_SHADOW} requiredProps={requiredProps}/>
                  </>
                }
                hoverComponents={
                  <>
                    <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={true}/>
                  </>
                }
              />


            </ZoloPanelBody>


            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={iconColor}
                      onChange={(value) =>
                        setAttributes({
                          iconColor: value,
                        })
                      }
                    />
                    <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={true}/>
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={ICON_BORDER}
                      requiredProps={requiredProps}
                    />

                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={ICON_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />

                    <ResDimensionsControl
                      label={__('Padding', 'zoloblocks')}
                      controlName={ICON_PADDING}
                      requiredProps={requiredProps}
                      forBorderRadius={false}
                    />
                    <ResRangeControl
                      label={__('Size', 'zoloblocks')}
                      controlName={ICON_SIZE}
                      requiredProps={requiredProps}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <ResRangeControl
                      label={__('Spacing', 'zoloblocks')}
                      controlName={ICON_SPACING}
                      requiredProps={requiredProps}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Hover Color', 'zoloblocks')}
                      color={iconHoverColor}
                      onChange={(value) =>
                        setAttributes({
                          iconHoverColor: value,
                        })
                      }
                    />
                    <NormalBGControl requiredProps={requiredProps} controlName={ICON_HOVER_BG} noMainBGImg={true}/>
                  </>
                }
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Counter', 'zoloblocks')} stylePanel={true} panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={COUNTER_TYPOGRAPHY}
                requiredProps={requiredProps}
                max={36}
              />
              <ColorControl
                label={__('Color', 'zoloblocks')}
                color={counterColor}
                onChange={(value) =>
                  setAttributes({
                    counterColor: value,
                  })
                }
              />
              <ResRangeControl
                label={__('Bottom Spacing', 'zoloblocks')}
                controlName={COUNTER_SPACING}
                requiredProps={requiredProps}
                min={0}
                max={100}
                step={1}
              />

            </ZoloPanelBody>

            <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={META_TYPOGRAPHY}
                requiredProps={requiredProps}
                max={36}
              />
              <ColorControl
                label={__('Color', 'zoloblocks')}
                color={metaColor}
                onChange={(value) =>
                  setAttributes({
                    metaColor: value,
                  })
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
              block="zolo/social-links"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
