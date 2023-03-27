//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import {
  BaseControl,
  Button,
  ButtonGroup,
  PanelBody, SelectControl, TabPanel,
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
  ResAlignmentControl,
  TypographyDropdown,
  ResRangeControl,
} = window.zoloModule;

//block attributes
import objAttributes from './attributes';

//block constants
import {
  HEADING_TAG, SEPARATOR_ALIGN, SEPARATOR_HEIGHT, SEPARATOR_WIDTH, STYLES,
  ST_POSITION,
  SUBTITLE_MARGIN, TEXT_ALIGN, TITLE_MARGIN, WRAPPER_BG,
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
    subTitleText,
    titleTagName,
    subTitleTagName,
    showSubTitle,
    showSeparator,
    showTransparentTitle,
    transparentTitleText,
    subTitlePosition,
    separaTorPosition,
    separaTorAlign,
    align,

    //design
    titleColor,
    subTitleColor,
    tpColor,
    separatorColor
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
      case 'style-1':
        setAttributes({
          showSubTitle: true,
          showTransparentTitle: true,
          showSeparator: false,
          headingAlignmentZRPAlign: 'center'
        });
        break;
      case 'style-2':
        setAttributes({
          showSubTitle: true,
          showTransparentTitle: true,
          showSeparator: false,
          headingAlignmentZRPAlign: 'center'
        });
        break;
      case 'style-3':
        setAttributes({
          showSubTitle: true,
          showTransparentTitle: true,
          showSeparator: false,
          headingAlignmentZRPAlign: 'center'
        });
        break;

      case 'style-4':
        setAttributes({
          showSubTitle: true,
          showTransparentTitle: true,
          showSeparator: true,
          separaTorAlign: 'center',
          headingAlignmentZRPAlign: 'center'
        });
        break;
      case 'style-5':
        setAttributes({
          showSubTitle: false,
          showTransparentTitle: false,
          showSeparator: true
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
                      label={__('Title Text', 'zolo-blocks')}
                      value={titleText}
                      onChange={(titleText) => setAttributes({ titleText })}
                    />

                    <BaseControl label={__("Title Tag", "zolo-blocks")} >
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
                      label={__('Show Sub TItle', 'zolo-blocks')}
                      checked={showSubTitle}
                      onChange={(showSubTitle) => setAttributes({ showSubTitle })}
                    />

                    {showSubTitle && (
                      <>
                        <TextControl
                          label={__('Sub Title Text', 'zolo-blocks')}
                          value={subTitleText}
                          onChange={(subTitleText) => setAttributes({ subTitleText })}
                        />

                        <BaseControl label={__("Sub Title Tag", "zolo-blocks")} >
                          <ButtonGroup>
                            {HEADING_TAG.map((item, key) => (
                              <Button
                                key={key}
                                variant={subTitleTagName === item.value ? 'primary' : 'secondary'}
                                onClick={() => setAttributes({ subTitleTagName: item.value })}
                              >
                                {item.label}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </BaseControl>

                        <BaseControl label={__("Sub Title Position", "zolo-blocks")} >
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
                      label={__('Show Transparent Title', 'zolo-blocks')}
                      checked={showTransparentTitle}
                      onChange={(showTransparentTitle) => setAttributes({ showTransparentTitle })}
                    />

                    {showTransparentTitle && (
                      <TextControl
                        label={__('Transparent Title Text', 'zolo-blocks')}
                        value={transparentTitleText}
                        onChange={(transparentTitleText) => setAttributes({ transparentTitleText })}
                      />
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
                                variant={separaTorPosition === item.value ? 'primary' : 'secondary'}
                                onClick={() => setAttributes({ separaTorPosition: item.value })}
                              >
                                {item.label}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </BaseControl>

                        <BaseControl label={__("Separator Alignment", "zolo-blocks")} >
                          <ButtonGroup>
                            {SEPARATOR_ALIGN.map((item, key) => (
                              <Button
                                key={key}
                                variant={separaTorAlign === item.value ? 'primary' : 'secondary'}
                                onClick={() => setAttributes({ separaTorAlign: item.value })}
                              >
                                {item.label}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </BaseControl>
                      </>
                    )}

                    {/* <ResAlignmentControl
                      label={__('Alignmet', 'zolo-blocks')}
                      controlName={HEADING_ALIGNMENT}
                      resRequiredProps={resRequiredProps}
                      alignOptions={[
                        {
                          label: 'Left',
                          value: 'left',
                        },
                        {
                          label: 'Center',
                          value: 'center',
                        },
                        {
                          label: 'Right',
                          value: 'right',
                        },
                        {
                          label: 'Justify',
                          value: 'justify',
                        },
                      ]}
                    /> */}

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

                  </PanelBody>
                </>
              )}

              {tab.name === 'design' && (
                <>
                  <PanelBody
                    title={__('Title', 'zolo-blocks')}
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

                    <ResDimensionsControl
                      label={__('Margin', 'zolo-blocks')}
                      controlName={TITLE_MARGIN}
                      resRequiredProps={resRequiredProps}
                    />

                  </PanelBody>

                  <PanelBody
                    title={__('Sub Title', 'zolo-blocks')}
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

                  </PanelBody>

                  <PanelBody
                    title={__('Transparent Title', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <TypographyDropdown
                      label="Typography"
                      typoPrefixConstant={TRANSPARENT_TYPOGRAPHY}
                      resRequiredProps={resRequiredProps}
                    />

                    <ColorControl
                      label={__('Color', 'zolo-blocks')}
                      color={tpColor}
                      onChange={(val) => setAttributes({
                        tpColor: val,
                      })}
                    />
                  </PanelBody>

                  <PanelBody
                    title={__('Separator', 'zolo-blocks')}
                    initialOpen={false}
                  >
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

                    <ColorControl
                      label={__('Color', 'zolo-blocks')}
                      color={separatorColor}
                      onChange={(val) => setAttributes({
                        separatorColor: val,
                      })}
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
