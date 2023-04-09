//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import {
  BaseControl,
  Button,
  ButtonGroup,
  PanelBody,
  RangeControl,
  SelectControl, TabPanel,
  TextControl,
  ToggleControl
} from '@wordpress/components';
import { applyFilters, doAction } from "@wordpress/hooks";
import { __ } from '@wordpress/i18n';


const {
  BackgroundControl,
  BorderControl,
  BoxShadowControl,
  ColorControl,
  ResDimensionsControl,
  TypographyDropdown,
  ResRangeControl,
  ResAlignmentControl,
  TextShadowControl,
  TextStrokeControl,
  ResetControl
} = window.zoloModule;

//block attributes
import objAttributes from './attributes';

//block constants
import {
  HEADING_TAG, SEPARATOR_HEIGHT,
  SEPARATOR_SPACING,
  SEPARATOR_WIDTH,
  STYLES,
  ST_POSITION,
  SUBTITLE_MARGIN,
  SUBTITLE_TEXT_SHADOW,
  SUBTITLE_TEXT_STROKE,
  TEXT_ALIGN,
  TITLE_BORDER,
  TITLE_BORDER_RADIUS,
  TITLE_MARGIN,
  TITLE_PADDING,
  TITLE_SHADOW,
  TITLE_TEXT_SHADOW,
  TITLE_TEXT_STROKE,
  TPT_ALIGNMENT,
  TPT_BORDER,
  TPT_BORDER_RADIUS,
  TPT_HIDE,
  TPT_MARGIN,
  TPT_PADDING,
  TPT_ROTATE_ORIGIN,
  TPT_SHADOW,
  TPT_TEXT_SHADOW,
  TPT_TEXT_STROKE,
  WRAPPER_BG,
  WRAPPER_BORDER,
  WRAPPER_MARGIN,
  WRAPPER_PADDING,
  WRAPPER_SHADOW
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY, TRANSPARENT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Inspector = ({ attributes, setAttributes }) => {

  const {
    resMode,
    //settings
    styles,
    titleText,
    titleLink,
    titleTagName,
    showSubTitle,
    subTitleText,
    subTitlePosition,
    showSeparator,
    separatorPosition,
    align,

    showTransparentTitle,
    transparentTitleText,
    transparentTitleXOffset,
    transparentTitleYOffset,
    transparentTitleRotate,
    transparentTitleHide,
    transparentTitleRotateOrigin,

    //design
    titleColor,
    titleBgColor,

    subTitleColor,
    tptColor,
    tptBgColor,
    tptOpacity,
    separatorColor,

  } = attributes;

  const resRequiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes,
  };

  const changePremade = (selected) => {
    setAttributes({ styles: selected });
    switch (selected) {

      case 'style-0':
        setAttributes({
          showSubTitle: false,
          showTransparentTitle: false,
          showSeparator: false,
          align: 'left'
        });
        break;

      case 'style-1':
        setAttributes({
          showSubTitle: true,
          subTitlePosition: 'top',
          showTransparentTitle: true,
          showSeparator: false,
          align: 'center'
        });
        break;

      case 'style-2':
        setAttributes({
          showSubTitle: true,
          subTitlePosition: 'top',
          showTransparentTitle: true,
          showSeparator: false,
          align: 'center'
        });
        break;

      case 'style-3':
        setAttributes({
          showSubTitle: true,
          subTitlePosition: 'top',
          showTransparentTitle: true,
          showSeparator: false,
          align: 'center'
        });
        break;

      case 'style-4':
        setAttributes({
          showSubTitle: true,
          subTitlePosition: 'top',
          showTransparentTitle: true,
          showSeparator: true,
          align: 'center'
        });
        break;

      case 'style-5':
        setAttributes({
          showSubTitle: false,
          showTransparentTitle: false,
          showSeparator: true,
          align: 'center'
        });
        break;

      case 'style-6':
        setAttributes({
          showSubTitle: true,
          subTitlePosition: 'top',
          showTransparentTitle: false,
          showSeparator: false,
          align: 'center'
        });
        break;

      case 'style-7':
        setAttributes({
          showSubTitle: false,
          showTransparentTitle: true,
          showSeparator: false,
          align: 'center'
        });
        break;

      case 'style-8':
        setAttributes({
          showSubTitle: true,
          showTransparentTitle: true,
          showSeparator: false,
          align: 'left'
        });
        break;

      default:
        return false;
    }
  };

  return (
    <InspectorControls key="controls">
      <div className="zolo-panel-control">
        <TabPanel
          className="zb-parent-tab-panel"
          activeClass="active-tab"
          // onSelect={onSelect}
          tabs={[
            {
              name: 'settings',
              title: 'Settings',
              className: 'zb-tab settings',
            },
            {
              name: 'design',
              title: 'Design',
              className: 'zb-tab design',
            },
            {
              name: 'advanced',
              title: 'Advanced',
              className: 'zb-tab advanced',
            },
          ]}
        >
          {(tab) => (
            <div className={'zb-tab-controls' + tab.name}>
              {tab.name === 'settings' && (
                <>
                  <PanelBody
                    title={__('General', 'zolo-blocks')}
                    initialOpen={true}
                  >
                    {/* Hook Test */}
                    {doAction('zolo_ah_general_start_action', attributes)}
                    {applyFilters('zolo_ah_general_start_filter', '', attributes, setAttributes)}

                    <SelectControl
                      label={__("Premade Styles", "zolo-blocks")}
                      value={styles}
                      options={applyFilters('zolo_ah_style_filter', STYLES) || STYLES}
                      onChange={(selected) => changePremade(selected)}
                    />

                    <TextControl
                      label={__('Main Heading', 'zolo-blocks')}
                      value={titleText}
                      onChange={(titleText) => setAttributes({ titleText })}
                    />

                    <TextControl
                      label={__('Link', 'zolo-blocks')}
                      value={titleLink}
                      onChange={(titleLink) => setAttributes({ titleLink })}
                      help={__('http://your-link.com', 'zolo-blocks')}
                    />

                    <BaseControl label={__("HTML Tag", "zolo-blocks")} >
                      <ButtonGroup>
                        {HEADING_TAG.map((item, key) => (
                          <Button
                            key={key}
                            variant={titleTagName === item.value ? 'primary' : 'secondary'}
                            onClick={() => setAttributes({ titleTagName: item.value })}
                          >
                            {item.label}
                          </Button>
                        ))}
                      </ButtonGroup>
                    </BaseControl>

                    <ToggleControl
                      label={__('Show Sub Heading', 'zolo-blocks')}
                      checked={showSubTitle}
                      onChange={(showSubTitle) => setAttributes({ showSubTitle })}
                    />

                    {showSubTitle && (
                      <>
                        <TextControl
                          label={__('Sub Heading', 'zolo-blocks')}
                          value={subTitleText}
                          onChange={(subTitleText) => setAttributes({ subTitleText })}
                        />

                        <BaseControl label={__("Sub Heading Position", "zolo-blocks")} >
                          <ButtonGroup>
                            {ST_POSITION.map((item, key) => (
                              <Button
                                key={key}
                                variant={subTitlePosition === item.value ? 'primary' : 'secondary'}
                                onClick={() => setAttributes({ subTitlePosition: item.value })}
                              >
                                {item.label}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </BaseControl>
                      </>
                    )}

                    <ToggleControl
                      label={__('Show Separator', 'zolo-blocks')}
                      checked={showSeparator}
                      onChange={(showSeparator) => setAttributes({ showSeparator })}
                    />

                    {showSeparator && (
                      <>
                        <BaseControl label={__("Separator Position", "zolo-blocks")} >
                          <ButtonGroup>
                            {ST_POSITION.map((item, key) => (
                              <Button
                                key={key}
                                variant={separatorPosition === item.value ? 'primary' : 'secondary'}
                                onClick={() => setAttributes({ separatorPosition: item.value })}
                              >
                                {item.label}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </BaseControl>
                      </>
                    )}

                    <BaseControl label={__("Alignment", "zolo-blocks")} >
                      <ButtonGroup className="zolo-alignment-button">
                        {TEXT_ALIGN.map((item, key) => (
                          <Button
                            key={key}
                            variant={align === item.value ? 'primary' : 'secondary'}
                            onClick={() => setAttributes({ align: item.value, })}
                          >
                            {item.label}
                          </Button>
                        ))}
                      </ButtonGroup>
                    </BaseControl>

                    <ToggleControl
                      label={__('Show Advanced Heading', 'zolo-blocks')}
                      checked={showTransparentTitle}
                      onChange={(showTransparentTitle) => setAttributes({ showTransparentTitle })}
                    />

                    {showTransparentTitle && (
                      <PanelBody title={__('Advanced Heading', 'zolo-blocks')} initialOpen={showTransparentTitle ? true : false}>
                        <TextControl
                          label={__('Advanced Heading Text', 'zolo-blocks')}
                          value={transparentTitleText}
                          onChange={(transparentTitleText) => setAttributes({ transparentTitleText })}
                          help={__('This heading will show as style as background and you can move and style many way.', 'zolo-blocks')}
                        />

                        <ResAlignmentControl
                          label={__("Alignmet", "zolo-blocks")}
                          controlName={TPT_ALIGNMENT}
                          resRequiredProps={resRequiredProps}
                          alignOptions={[
                            { label: "Left", value: "left" },
                            { label: "Center", value: "center" },
                            { label: "Right", value: "right" },
                          ]}
                        />
                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              transparentTitleXOffset: 0,
                            })
                          }
                        >
                          <RangeControl
                            label={__('X Offset', 'zolo-blocks')}
                            value={transparentTitleXOffset}
                            onChange={(transparentTitleXOffset) => setAttributes({ transparentTitleXOffset })}
                            min={-800}
                            max={800}
                          />
                        </ResetControl>
                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              transparentTitleYOffset: 0,
                            })
                          }
                        >
                          <RangeControl
                            label={__('Y Offset', 'zolo-blocks')}
                            value={transparentTitleYOffset}
                            onChange={(transparentTitleYOffset) => setAttributes({ transparentTitleYOffset })}
                            min={-800}
                            max={800}
                          />
                        </ResetControl>
                        <SelectControl
                          label={__("Rotate Origin", "zolo-blocks")}
                          value={transparentTitleRotateOrigin}
                          options={TPT_ROTATE_ORIGIN}
                          onChange={(transparentTitleRotateOrigin) => setAttributes({ transparentTitleRotateOrigin })}
                        />
                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              transparentTitleRotate: 0,
                            })
                          }
                        >
                          <RangeControl
                            label={__('Rotate', 'zolo-blocks')}
                            value={transparentTitleRotate}
                            onChange={(transparentTitleRotate) => setAttributes({ transparentTitleRotate })}
                            min={-180}
                            max={180}
                          />
                        </ResetControl>
                        <SelectControl
                          label={__("Hide At", "zolo-blocks")}
                          value={transparentTitleHide}
                          options={TPT_HIDE}
                          onChange={(transparentTitleHide) => setAttributes({ transparentTitleHide })}
                        />

                      </PanelBody>
                    )}
                  </PanelBody>
                </>
              )}

              {tab.name === 'design' && (
                <>
                  <PanelBody
                    title={__('Main Heading', 'zolo-blocks')}
                    initialOpen={true}
                  >
                    <TypographyDropdown
                      label="Typography"
                      typoPrefixConstant={TITLE_TYPOGRAPHY}
                      resRequiredProps={resRequiredProps}
                    />

                    <ColorControl
                      label={__('Color', 'zolo-blocks')}
                      color={titleColor}
                      onChange={(val) => setAttributes({
                        titleColor: val,
                      })}
                    />

                    <ColorControl
                      label={__('Background', 'zolo-blocks')}
                      color={titleBgColor}
                      onChange={(val) => setAttributes({
                        titleBgColor: val,
                      })}
                    />

                    <ResDimensionsControl
                      label={__('Padding', 'zolo-blocks')}
                      controlName={TITLE_PADDING}
                      resRequiredProps={resRequiredProps}
                    />

                    <ResDimensionsControl
                      label={__('Margin', 'zolo-blocks')}
                      controlName={TITLE_MARGIN}
                      resRequiredProps={resRequiredProps}
                    />

                    <BorderControl
                      label={__('Border', 'zolo-blocks')}
                      controlName={TITLE_BORDER}
                      resRequiredProps={resRequiredProps}
                    />

                    <ResDimensionsControl
                      label={__(
                        'Border Radius',
                        'zolo-blocks'
                      )}
                      controlName={TITLE_BORDER_RADIUS}
                      resRequiredProps={resRequiredProps}
                      forBorderRadius={true}
                    />

                    <BoxShadowControl
                      controlName={TITLE_SHADOW}
                      resRequiredProps={resRequiredProps}
                    />

                    <TextShadowControl
                      controlName={TITLE_TEXT_SHADOW}
                      resRequiredProps={resRequiredProps}
                      enableTransition={false}
                    />

                    <TextStrokeControl
                      controlName={TITLE_TEXT_STROKE}
                      resRequiredProps={resRequiredProps}
                      enableTransition={false}
                    />

                  </PanelBody>

                  <PanelBody
                    title={__('Sub Heading', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <TypographyDropdown
                      label="Typography"
                      typoPrefixConstant={SUBTITLE_TYPOGRAPHY}
                      resRequiredProps={resRequiredProps}
                    />

                    <ColorControl
                      label={__('Color', 'zolo-blocks')}
                      color={subTitleColor}
                      onChange={(val) => setAttributes({
                        subTitleColor: val,
                      })}
                    />

                    <ResDimensionsControl
                      label={__('Margin', 'zolo-blocks')}
                      controlName={SUBTITLE_MARGIN}
                      resRequiredProps={resRequiredProps}
                    />

                    <TextShadowControl
                      controlName={SUBTITLE_TEXT_SHADOW}
                      resRequiredProps={resRequiredProps}
                      enableTransition={false}
                    />

                    <TextStrokeControl
                      controlName={SUBTITLE_TEXT_STROKE}
                      resRequiredProps={resRequiredProps}
                      enableTransition={false}
                    />

                  </PanelBody>

                  <PanelBody
                    title={__('Separator', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <ColorControl
                      label={__('Color', 'zolo-blocks')}
                      color={separatorColor}
                      onChange={(val) => setAttributes({
                        separatorColor: val,
                      })}
                    />
                    <ResRangeControl
                      label={__(
                        'Width',
                        'zolo-blocks'
                      )}
                      resRequiredProps={resRequiredProps}
                      controlName={SEPARATOR_WIDTH}
                      min={0}
                      max={300}
                      step={1}
                    />
                    <ResRangeControl
                      label={__(
                        'Height',
                        'zolo-blocks'
                      )}
                      resRequiredProps={resRequiredProps}
                      controlName={SEPARATOR_HEIGHT}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <ResRangeControl
                      label={__(
                        'Spacing',
                        'zolo-blocks'
                      )}
                      resRequiredProps={resRequiredProps}
                      controlName={SEPARATOR_SPACING}
                      min={0}
                      max={50}
                      step={1}
                    />

                  </PanelBody>

                  <PanelBody
                    title={__('Advanced Heading', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <TypographyDropdown
                      label="Typography"
                      typoPrefixConstant={TRANSPARENT_TYPOGRAPHY}
                      resRequiredProps={resRequiredProps}
                    />

                    <ColorControl
                      label={__('Color', 'zolo-blocks')}
                      color={tptColor}
                      onChange={(val) => setAttributes({
                        tptColor: val,
                      })}
                    />
                    <ColorControl
                      label={__('Background', 'zolo-blocks')}
                      color={tptBgColor}
                      onChange={(val) => setAttributes({
                        tptBgColor: val,
                      })}
                    />

                    <ResDimensionsControl
                      label={__('Padding', 'zolo-blocks')}
                      controlName={TPT_PADDING}
                      resRequiredProps={resRequiredProps}
                    />
                    <ResDimensionsControl
                      label={__('Margin', 'zolo-blocks')}
                      controlName={TPT_MARGIN}
                      resRequiredProps={resRequiredProps}
                    />

                    <BorderControl
                      label={__('Border', 'zolo-blocks')}
                      controlName={TPT_BORDER}
                      resRequiredProps={resRequiredProps}
                    />

                    <ResDimensionsControl
                      label={__(
                        'Border Radius',
                        'zolo-blocks'
                      )}
                      controlName={TPT_BORDER_RADIUS}
                      resRequiredProps={resRequiredProps}
                      forBorderRadius={true}
                    />

                    <BoxShadowControl
                      controlName={TPT_SHADOW}
                      resRequiredProps={resRequiredProps}
                    />
                    <TextShadowControl
                      controlName={TPT_TEXT_SHADOW}
                      resRequiredProps={resRequiredProps}
                      enableTransition={false}
                    />

                    <TextStrokeControl
                      controlName={TPT_TEXT_STROKE}
                      resRequiredProps={resRequiredProps}
                      enableTransition={false}
                    />

                    <RangeControl
                      label={__('Opacity', 'zolo-blocks')}
                      value={tptOpacity}
                      onChange={(tptOpacity) => setAttributes({ tptOpacity })}
                      min={0.05}
                      max={1}
                      step={0.01}
                    />
                  </PanelBody>
                </>
              )}
              {tab.name === 'advanced' && (
                <>
                  <PanelBody
                    title={__('Wrapper Margin & Padding', 'zolo-blocks')}
                    initialOpen={true}
                  >
                    <ResDimensionsControl
                      label="Margin"
                      controlName={WRAPPER_MARGIN}
                      resRequiredProps={resRequiredProps}
                    />

                    <ResDimensionsControl
                      label="Padding"
                      controlName={WRAPPER_PADDING}
                      resRequiredProps={resRequiredProps}
                    />
                  </PanelBody>

                  <PanelBody
                    title={__('Background', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <BackgroundControl
                      controlName={WRAPPER_BG}
                      resRequiredProps={resRequiredProps}
                    />
                  </PanelBody>

                  <PanelBody
                    title={__('Border & BoxShadow', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <BorderControl
                      label={__('Border', 'zolo-blocks')}
                      controlName={WRAPPER_BORDER}
                      resRequiredProps={resRequiredProps}
                    />
                    <BoxShadowControl
                      controlName={WRAPPER_SHADOW}
                      resRequiredProps={resRequiredProps}
                    />

                  </PanelBody>
                </>
              )}
            </div>
          )}

        </TabPanel>
      </div>
    </InspectorControls>
  )
}

export default Inspector;
