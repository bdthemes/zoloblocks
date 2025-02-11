import { memo } from '@wordpress/element';
import {InspectorControls} from '@wordpress/block-editor';
import {SelectControl, TextControl, ToggleControl, CardDivider, BaseControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import objAttributes from './attributes';
import Select2 from 'react-select';

import {
  HEADING_TAGS,
  LIST_STYLE,
  STICKY_POSITION,
  //box
  BOX_PADDING,
  BOX_MIN_HEIGHT,
  BOX_MAX_WIDTH,
  BOX_BORDER,
  BOX_BORDER_RADIUS,
  BOX_SHADOW,
  // content
  CONTENT_PADDING,
  //header
  HEADER_BG,
  HEADER_PADDING,
  HEADER_MARGIN,
  HEADER_BORDER,
  HEADER_BORDER_RADIUS,
  HEADER_SHADOW,
  HEADER_ICON_SIZE,
  // Toogle
  TOGGLE_ICON_BG,
  TOGGLE_ICON_PADDING,
  TOGGLE_ICON_MARGIN,
  TOGGLE_ICON_BORDER,
  TOGGLE_ICON_SHADOW,
  TOGGLE_ICON_BORDER_RADIUS,
  TOGGLE_ICON_H_BG,
  TOGGLE_ICON_H_SHADOW,
  //list
  LIST_MARKER_SIZE,
  // close
  CLOSE_ICON_SIZE,
  CLOSE_ICON_BG,
  CLOSE_ICON_PADDING,
  CLOSE_ICON_MARGIN,
  CLOSE_ICON_BORDER,
  CLOSE_ICON_SHADOW,
  CLOSE_ICON_BORDER_RADIUS,
  CLOSE_ICON_H_BG,
  CLOSE_ICON_H_SHADOW,
  // open
  OPEN_BTN_BG,
  OPEN_BTN_PADDING,
  OPEN_BTN_MARGIN,
  OPEN_BTN_BORDER,
  OPEN_BTN_SHADOW,
  OPEN_BTN_BORDER_RADIUS,
  OPEN_BTN_H_BG,
  OPEN_BTN_H_SHADOW,
} from './constants';

import {HEADER_TYPOGRAPHY, LIST_TYPOGRAPHY, STICKY_OPEN_BUTTON_TYPOGRAPHY} from './constants/typoPrefixConstant';
import {applyFilters} from "@wordpress/hooks";

const {
  ResDimensionsControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  TabPanelControl,
  ColorControl,
  TypographyDropdown,
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
    // toggle
    toggleHoverIconColor,
    toggleHoverIconBorderColor,
    //list
    listColor,
    listHoverColor,
    listActiveColor,
    listMarkerColor,
    // close
    closeIconColor,
    closeIconHoverColor,
    closeIconHoverBorderColor,

    // open
    openBtnIconColor,
    openBtnIconHoverColor,
    openBtnIconHoverBorderColor,
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
                      allowedHeading,
                    });
                  }}
                  isMulti={true}
                  closeMenuOnSelect={true}
                />
              </BaseControl>
            </ZoloPanelBody>

            {applyFilters(
              'zolo.tableOfContent.stickyContent',
              <ZoloPanelBody title={__('Sticky Content', 'zoloblocks')} isPro={true} stylePanel={true}
                             panelProps={props}
                             isDisabled={true}>
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
              </ZoloPanelBody>
            )}

          </>
        }
        styleTab={
          <>
            <ZoloPanelBody title={__('Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
              <ColorControl
                label={__('Background', 'zoloblocks')}
                color={boxBgColor}
                onChange={(color) =>
                  setAttributes({
                    boxBgColor: color,
                  })
                }
              />
              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={BOX_PADDING}
                requiredProps={requiredProps}
              />
              <CardDivider/>
              <BorderControl label={__('Border', 'zoloblocks')} controlName={BOX_BORDER} requiredProps={requiredProps}/>
              <BoxShadowControl controlName={BOX_SHADOW} requiredProps={requiredProps}/>
              <ResDimensionsControl
                label={__('Border Radius', 'zoloblocks')}
                controlName={BOX_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />

              <div className="zolo-custom-heading">{__('Content', 'zoloblocks')}</div>
              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={CONTENT_PADDING}
                requiredProps={requiredProps}
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Header', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
              <NormalBGControl requiredProps={requiredProps} controlName={HEADER_BG} noMainBGImg={true}/>
              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={HEADER_PADDING}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__('Margin', 'zoloblocks')}
                controlName={HEADER_MARGIN}
                requiredProps={requiredProps}
              />
              <CardDivider/>
              <BorderControl label={__('Border', 'zoloblocks')} controlName={HEADER_BORDER}
                             requiredProps={requiredProps}/>
              <BoxShadowControl controlName={HEADER_SHADOW} requiredProps={requiredProps}/>
              <ResDimensionsControl
                label={__('Border Radius', 'zoloblocks')}
                controlName={HEADER_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
            </ZoloPanelBody>
            {showCollapsible && (
              <ZoloPanelBody title={__('Collapsed Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                        color={headerIconColor}
                        onChange={(color) =>
                          setAttributes({
                            headerIconColor: color,
                          })
                        }
                      />
                      <ResRangeControl
                        label={__('Size', 'zoloblocks')}
                        controlName={HEADER_ICON_SIZE}
                        requiredProps={requiredProps}
                        min={0}
                        max={100}
                        step={1}
                      />
                      <CardDivider/>
                      <NormalBGControl
                        requiredProps={requiredProps}
                        controlName={TOGGLE_ICON_BG}
                        noMainBGImg={true}
                      />
                      <ResDimensionsControl
                        label={__('Padding', 'zoloblocks')}
                        controlName={TOGGLE_ICON_PADDING}
                        requiredProps={requiredProps}
                      />
                      <ResDimensionsControl
                        label={__('Margin', 'zoloblocks')}
                        controlName={TOGGLE_ICON_MARGIN}
                        requiredProps={requiredProps}
                      />

                      <CardDivider/>
                      <BorderControl
                        label={__('Border', 'zoloblocks')}
                        controlName={TOGGLE_ICON_BORDER}
                        requiredProps={requiredProps}
                      />
                      <BoxShadowControl controlName={TOGGLE_ICON_SHADOW} requiredProps={requiredProps}/>
                      <ResDimensionsControl
                        label={__('Border Radius', 'zoloblocks')}
                        controlName={TOGGLE_ICON_BORDER_RADIUS}
                        requiredProps={requiredProps}
                        forBorderRadius={true}
                      />
                    </>
                  }
                  hoverComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={toggleHoverIconColor}
                        onChange={(color) =>
                          setAttributes({
                            toggleHoverIconColor: color,
                          })
                        }
                      />
                      <NormalBGControl
                        requiredProps={requiredProps}
                        controlName={TOGGLE_ICON_H_BG}
                        noMainBGImg={true}
                      />
                      <CardDivider/>
                      <ColorControl
                        label={__('Border Color', 'zoloblocks')}
                        color={toggleHoverIconBorderColor}
                        onChange={(color) =>
                          setAttributes({
                            toggleHoverIconBorderColor: color,
                          })
                        }
                      />
                      <BoxShadowControl controlName={TOGGLE_ICON_H_SHADOW} requiredProps={requiredProps}/>
                    </>
                  }
                />
              </ZoloPanelBody>
            )}

            <ZoloPanelBody title={__('List', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                    <TypographyDropdown
                      label={__('Typography', 'zoloblocks')}
                      typoPrefixConstant={LIST_TYPOGRAPHY}
                      requiredProps={requiredProps}
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
              <div className="zolo-custom-heading">{__('Marker', 'zoloblocks')}</div>
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
            {showSticky && (
              <ZoloPanelBody title={__('Sticky Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                <TabPanelControl
                  options={[
                    {
                      value: 'normal',
                      label: __('Open', 'zoloblocks'),
                    },
                    {
                      value: 'hover',
                      label: __('Close', 'zoloblocks'),
                    },
                  ]}
                  normalComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={openBtnIconColor}
                        onChange={(color) =>
                          setAttributes({
                            openBtnIconColor: color,
                          })
                        }
                      />
                      <TypographyDropdown
                        label={__('Typography', 'zoloblocks')}
                        typoPrefixConstant={STICKY_OPEN_BUTTON_TYPOGRAPHY}
                        requiredProps={requiredProps}
                      />
                      <CardDivider/>
                      <NormalBGControl requiredProps={requiredProps} controlName={OPEN_BTN_BG} noMainBGImg={true}/>

                      <ResDimensionsControl
                        label={__('Padding', 'zoloblocks')}
                        controlName={OPEN_BTN_PADDING}
                        requiredProps={requiredProps}
                      />

                      <ResDimensionsControl
                        label={__('Margin', 'zoloblocks')}
                        controlName={OPEN_BTN_MARGIN}
                        requiredProps={requiredProps}
                      />
                      <CardDivider/>
                      <BorderControl
                        label={__('Border', 'zoloblocks')}
                        controlName={OPEN_BTN_BORDER}
                        requiredProps={requiredProps}
                      />
                      <BoxShadowControl controlName={OPEN_BTN_SHADOW} requiredProps={requiredProps}/>
                      <ResDimensionsControl
                        label={__('Border Radius', 'zoloblocks')}
                        controlName={OPEN_BTN_BORDER_RADIUS}
                        requiredProps={requiredProps}
                        forBorderRadius={true}
                      />

                      <BoxShadowControl controlName={OPEN_BTN_SHADOW} requiredProps={requiredProps}/>
                      <ResDimensionsControl
                        label={__('Border Radius', 'zoloblocks')}
                        controlName={OPEN_BTN_BORDER_RADIUS}
                        requiredProps={requiredProps}
                        forBorderRadius={true}
                      />

                      <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={openBtnIconHoverColor}
                        onChange={(color) =>
                          setAttributes({
                            openBtnIconHoverColor: color,
                          })
                        }
                      />
                      <NormalBGControl requiredProps={requiredProps} controlName={OPEN_BTN_H_BG} noMainBGImg={true}/>
                      <CardDivider/>
                      <ColorControl
                        label={__('Border Color', 'zoloblocks')}
                        color={openBtnIconHoverBorderColor}
                        onChange={(color) =>
                          setAttributes({
                            openBtnIconHoverBorderColor: color,
                          })
                        }
                      />
                      <BoxShadowControl controlName={OPEN_BTN_H_SHADOW} requiredProps={requiredProps}/>
                    </>
                  }
                  hoverComponents={
                    <>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={closeIconColor}
                        onChange={(color) =>
                          setAttributes({
                            closeIconColor: color,
                          })
                        }
                      />
                      <ResRangeControl
                        label={__('Size', 'zoloblocks')}
                        controlName={CLOSE_ICON_SIZE}
                        requiredProps={requiredProps}
                        min={0}
                        max={100}
                        step={1}
                      />
                      <CardDivider/>
                      <NormalBGControl requiredProps={requiredProps} controlName={CLOSE_ICON_BG} noMainBGImg={true}/>
                      <ResDimensionsControl
                        label={__('Padding', 'zoloblocks')}
                        controlName={CLOSE_ICON_PADDING}
                        requiredProps={requiredProps}
                      />
                      <ResDimensionsControl
                        label={__('Margin', 'zoloblocks')}
                        controlName={CLOSE_ICON_MARGIN}
                        requiredProps={requiredProps}
                      />
                      <CardDivider/>
                      <BorderControl
                        label={__('Border', 'zoloblocks')}
                        controlName={CLOSE_ICON_BORDER}
                        requiredProps={requiredProps}
                      />
                      <BoxShadowControl controlName={CLOSE_ICON_SHADOW} requiredProps={requiredProps}/>
                      <ResDimensionsControl
                        label={__('Border Radius', 'zoloblocks')}
                        controlName={CLOSE_ICON_BORDER_RADIUS}
                        requiredProps={requiredProps}
                        forBorderRadius={true}
                      />
                      <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                      <ColorControl
                        label={__('Color', 'zoloblocks')}
                        color={closeIconHoverColor}
                        onChange={(color) =>
                          setAttributes({
                            closeIconHoverColor: color,
                          })
                        }
                      />
                      <NormalBGControl
                        requiredProps={requiredProps}
                        controlName={CLOSE_ICON_H_BG}
                        noMainBGImg={true}
                      />
                      <CardDivider/>
                      <ColorControl
                        label={__('Border Color', 'zoloblocks')}
                        color={closeIconHoverBorderColor}
                        onChange={(color) =>
                          setAttributes({
                            closeIconHoverBorderColor: color,
                          })
                        }
                      />
                      <BoxShadowControl controlName={CLOSE_ICON_H_SHADOW} requiredProps={requiredProps}/>
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
              block="zolo/table-of-content"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default memo(Inspector);
