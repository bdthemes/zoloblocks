import {InspectorControls} from '@wordpress/block-editor';
import {SelectControl, TextControl, ToggleControl, CardDivider, BaseControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import objAttributes from './attributes';
import Select2 from "react-select";

import {
  HEADING_TAGS,
  LIST_STYLE,
  TITLE_PADDING,
  TITLE_MARGIN,
  TITLE_BG,
  TITLE_BORDER,
  TITLE_BORDER_RADIUS,
  TITLE_SHADOW,
  TITLE_TEXT_SHADOW,
  TITLE_TEXT_STROKE,
  TITLE_HOVER_BG,
  TITLE_HOVER_BORDER,
  TITLE_HOVER_BRADIUS,
  TITLE_HOVER_SHADOW, STICKY_POSITION,
} from './constants';

import {TITLE_TYPOGRAPHY} from './constants/typoPrefixConstant';

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
    titleColor,
    titleHoverColor
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
            <ZoloPanelBody title={__('Title', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                    <TextShadowControl
                      controlName={TITLE_TEXT_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />
                    <TextStrokeControl
                      controlName={TITLE_TEXT_STROKE}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />
                    <CardDivider/>
                    <NormalBGControl requiredProps={requiredProps} controlName={TITLE_BG} noMainBGImg={true}/>
                    <ResDimensionsControl
                      label={__('Padding', 'zoloblocks')}
                      controlName={TITLE_PADDING}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__('Margin', 'zoloblocks')}
                      controlName={TITLE_MARGIN}
                      requiredProps={requiredProps}
                    />
                    <CardDivider/>
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={TITLE_BORDER}
                      requiredProps={requiredProps}
                    />
                    <BoxShadowControl controlName={TITLE_SHADOW} requiredProps={requiredProps}/>
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={TITLE_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
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
                    <NormalBGControl requiredProps={requiredProps} controlName={TITLE_HOVER_BG} noMainBGImg={true}/>
                    <CardDivider/>
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={TITLE_HOVER_BORDER}
                      requiredProps={requiredProps}
                    />
                    <BoxShadowControl controlName={TITLE_HOVER_SHADOW} requiredProps={requiredProps}/>
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={TITLE_HOVER_BRADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
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
              block="zolo/table-of-content"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
