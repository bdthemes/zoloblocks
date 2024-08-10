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
import QuerySettings from "./query-settings";
import {
  PRESETS,
  GRID_COLUMNS,
  COLUMNS_GAP,
  COUNT_PADDING,
  COUNT_BORDER,
  COUNT_BORDER_RADIUS,
  COUNT_SHADOW,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_PADDING,
  ITEM_SHADOW,
  ITEM_HOVER_BG,
  ITEM_HOVER_SHADOW,
  AVATAR_SIZE,
} from "./constants";


const {
  ResCounterControl,
  ResDimensionsControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  TabPanelControl,
  ColorControl,
  TypographyDropdown,
  AdvancedOptions,
  ZoloPanelBody,
  ResGapControl,
} = window.zoloModule;
export default function Inspector(props) {
  const {attributes, setAttributes} = props;
  const {
    authorQuery,
    resMode,
    preset,
    showAvatar,
    showName,
    showRole,
    showDescription,
    shoePostCount,
    showSocialLink,
    nameColor,
    nameHoverColor,
    countColor,
    countBgColor,
    countHoverColor,
    countBgHoverColor,
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
                options={applyFilters('zolo.author.presets', PRESETS)}
                onChange={(selected) => changePremade(selected)}
              />

              <ToggleControl
                label={__('Show Avatar', 'zoloblocks')}
                checked={showAvatar}
                onChange={(showAvatar) => setAttributes({showAvatar})}
              />
              {showAvatar && (
                <SelectControl
                  label={__('Avatar Size', 'zoloblocks')}
                  value={authorQuery?.avatarSize}
                  options={AVATAR_SIZE}
                  onChange={(avatarSize) => setAttributes({authorQuery: {...authorQuery, avatarSize}})}
                />)}
              <ToggleControl
                label={__('Show Name', 'zoloblocks')}
                checked={showName}
                onChange={(showName) => setAttributes({showName})}
              />
              <ToggleControl
                label={__('Show Role', 'zoloblocks')}
                checked={showRole}
                onChange={(showRole) => setAttributes({showRole})}
              />
              <ToggleControl
                label={__('Show Description', 'zoloblocks')}
                checked={showDescription}
                onChange={(showDescription) => setAttributes({showDescription})}
              />
              <ToggleControl
                label={__('Show Post Count', 'zoloblocks')}
                checked={shoePostCount}
                onChange={(shoePostCount) => setAttributes({shoePostCount})}
              />
              <ToggleControl
                label={__('Show Social Link', 'zoloblocks')}
                checked={showSocialLink}
                onChange={(showSocialLink) => setAttributes({showSocialLink})}
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

            <ZoloPanelBody title={__('Count', 'zoloblocks')} stylePanel={true} panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={COUNT_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
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
                    <ColorControl
                      label={__('Background', 'zoloblocks')}
                      color={countBgColor}
                      onChange={(color) =>
                        setAttributes({
                          countBgColor: color,
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
                    <ColorControl
                      label={__('Hover Background', 'zoloblocks')}
                      color={countBgHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          countBgHoverColor: color,
                        })
                      }
                    />
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
              block="zolo/post-category"
            />
          </>
        }
      />
    </InspectorControls>
  )
}
