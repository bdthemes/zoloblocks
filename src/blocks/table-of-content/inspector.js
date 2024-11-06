import {InspectorControls} from '@wordpress/block-editor';
import {SelectControl, TextControl, ToggleControl, CardDivider, BaseControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import objAttributes from './attributes';
import Select2 from "react-select";

import {
  HEADING_TAGS,
  LIST_STYLE,
  STICKY_POSITION,
  //box
  BOX_PADDING,
  BOX_SEPARATOR_WIDTH,
  BOX_MIN_HEIGHT,
  BOX_MAX_WIDTH,
  BOX_BORDER,
  BOX_BORDER_RADIUS,
  BOX_SHADOW,
  //header
  HEADER_BG,
  HEADER_ICON_SIZE,
  //list
  LIST_MARKER_SIZE
} from './constants';

import {HEADER_TYPOGRAPHY, LIST_TYPOGRAPHY} from './constants/typoPrefixConstant';

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
  RangeResetControl,
  ResRangeControl,
  AdvancedOptions,
  ZoloPanelBody,
} = window.zoloModule;

function Inspector(props) {
  const {attributes, setAttributes} = props;
  const {
    resMode,
    showHeading,
    showCollapsible,
    isCollapsed,
    showSticky,
    stickyPosition,
    headingText,
    headingTags,
    listStyle,
    //box
    boxBgColor,
    boxSeparatorColor,
    //header
    headerColor,
    headerIconColor,
    //list
    listColor,
    listHoverColor,
    listActiveColor,
    listMarkerColor

  } = attributes;

  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };
  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/table-of-content"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
              <div className="zolo-custom-heading" style={{border: 0, paddingTop: 0}}>
                {__('show/hide elements', 'zoloblocks')}
              </div>
              <ToggleControl
                label={__('Show Heading', 'zoloblocks')}
                checked={showHeading}
                onChange={(showHeading) => setAttributes({showHeading})}
              />
              <ToggleControl
                label={__('Show Collapsible', 'zoloblocks')}
                checked={showCollapsible}
                onChange={(showCollapsible) => setAttributes({showCollapsible})}
              />
              {showCollapsible && (
                <ToggleControl
                  label={__('Collapsed Initially', 'zoloblocks')}
                  checked={isCollapsed}
                  onChange={(isCollapsed) => setAttributes({isCollapsed})}
                />
              )}

              <ToggleControl
                label={__('Sticky Content', 'zoloblocks')}
                checked={showSticky}
                onChange={(showSticky) => setAttributes({showSticky})}
                help={__('Sitcky content visible only frontend', 'zoloblcoks')}
              />

              {showSticky && (
                <SelectControl
                  label={__('Sticky Position', 'zoloblocks')}
                  value={stickyPosition}
                  options={STICKY_POSITION}
                  onChange={(stickyPosition) => setAttributes({stickyPosition})}
                />
              )}

              {showHeading && (
                <TextControl
                  label={__('Heading Text', 'zoloblocks')}
                  value={headingText}
                  onChange={(headingText) => setAttributes({headingText})}
                />
              )}

              <CardDivider/>
              <SelectControl
                label={__('List Style', 'zoloblocks')}
                options={LIST_STYLE}
                value={listStyle}
                onChange={(listStyle) => setAttributes({listStyle})}
              />
              <BaseControl label={__('Support Heading Tag', 'zoloblocks')} className="zolo-flex-col-control">
                <Select2
                  classNamePrefix="zolo-select"
                  options={HEADING_TAGS}
                  value={headingTags || []}
                  onChange={(v) => {
                    const allowedHeading = v?.reduce((acc, item) => {
                      if (item?.value) {
                        acc[item.value] = true;
                      }
                      return acc;
                    }, {});
                    setAttributes({
                      headingTags: v,
                      allowedHeading
                    });
                  }}
                  isMulti={true}
                  closeMenuOnSelect={true}
                />
              </BaseControl>
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody title={__('Box', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
              <ColorControl
                label={__('Background', 'zoloblocks')}
                color={boxBgColor}
                onChange={(color) =>
                  setAttributes({
                    boxBgColor: color,
                  })
                }
              />
              <ColorControl
                label={__('Separator Color', 'zoloblocks')}
                color={boxSeparatorColor}
                onChange={(color) =>
                  setAttributes({
                    boxSeparatorColor: color,
                  })
                }
              />
              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={BOX_PADDING}
                requiredProps={requiredProps}
              />
              <ResRangeControl
                label={__('Separator Width', 'zoloblocks')}
                controlName={BOX_SEPARATOR_WIDTH}
                requiredProps={requiredProps}
                min={0}
                max={50}
                step={1}
              />
              <CardDivider/>

              <ResRangeControl
                label={__('Min Height', 'zoloblocks')}
                controlName={BOX_MIN_HEIGHT}
                requiredProps={requiredProps}
                min={0}
                max={1000}
                step={1}
              />
              <ResRangeControl
                label={__('Max Width', 'zoloblocks')}
                controlName={BOX_MAX_WIDTH}
                requiredProps={requiredProps}
                min={0}
                max={1000}
                step={1}
              />
              <CardDivider/>
              <BorderControl
                label={__('Border', 'zoloblocks')}
                controlName={BOX_BORDER}
                requiredProps={requiredProps}
              />
              <BoxShadowControl controlName={BOX_SHADOW} requiredProps={requiredProps}/>
              <ResDimensionsControl
                label={__('Border Radius', 'zoloblocks')}
                controlName={BOX_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Header', 'zoloblocks')} stylePanel={true} panelProps={props}>
              <NormalBGControl requiredProps={requiredProps} controlName={HEADER_BG} noMainBGImg={true}/>
              <ColorControl
                label={__('Color', 'zoloblocks')}
                color={headerColor}
                onChange={(color) =>
                  setAttributes({
                    headerColor: color,
                  })
                }
              />
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={HEADER_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <CardDivider/>
              <ColorControl
                label={__('Icon Color', 'zoloblocks')}
                color={headerIconColor}
                onChange={(color) =>
                  setAttributes({
                    headerIconColor: color,
                  })
                }
              />
              <ResRangeControl
                label={__('Icon Size', 'zoloblocks')}
                controlName={HEADER_ICON_SIZE}
                requiredProps={requiredProps}
                min={0}
                max={1000}
                step={1}
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('List', 'zoloblocks')} stylePanel={true} panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={LIST_TYPOGRAPHY}
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
                    label: __('Hover', 'zoloblocks'),
                  },
                  {
                    value: 'active',
                    label: __('Active', 'zoloblocks'),
                  },
                ]}
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={listColor}
                      onChange={(color) =>
                        setAttributes({
                          listColor: color,
                        })
                      }
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={listHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          listHoverColor: color,
                        })
                      }
                    />
                  </>
                }
                activeComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={listActiveColor}
                      onChange={(color) =>
                        setAttributes({
                          listActiveColor: color,
                        })
                      }
                    />
                  </>
                }
              />
              <div className="zolo-custom-heading">
                {__('Marker', 'zoloblocks')}
              </div>
              <ColorControl
                label={__('Color', 'zoloblocks')}
                color={listMarkerColor}
                onChange={(color) =>
                  setAttributes({
                    listMarkerColor: color,
                  })
                }
              />
              <ResRangeControl
                label={__('Size', 'zoloblocks')}
                controlName={LIST_MARKER_SIZE}
                requiredProps={requiredProps}
                min={0}
                max={100}
                step={1}
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
              block="zolo/table-of-content"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
