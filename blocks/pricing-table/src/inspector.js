//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  SelectControl,
  TabPanel,
  TextControl,
  ToggleControl
} from '@wordpress/components';
import { applyFilters } from "@wordpress/hooks";
import { __ } from '@wordpress/i18n';
import SortableFeatures from './sortable-features';


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
  IconPicker,
  RangeResetControl,
  NormalBGControl
} = window.zoloModule;


//block attributes
import objAttributes from './attributes';

//block constants
import {
  CURRENCY_FORMAT,
  CURRENCY_SYMBOL,
  FEATURE_ALIGN,
  STYLES,
  TITLE_TAG,
  WRAPPER_BG,
  WRAPPER_BORDER,
  WRAPPER_MARGIN,
  WRAPPER_PADDING,
  WRAPPER_SHADOW
} from './constants';



const Inspector = ({ attributes, setAttributes }) => {

  const {
    resMode,

    //layout
    styles,

    //header
    titleText,
    titleTagName,
    subTitleText,

    //price
    currencySymbol,
    customSymbol,
    price,
    currencyFormat,
    sale,
    orginalPrice,
    period,
    //features
    showFeatureHeading,
    featureTitle,
    featureDesc,
    features,

    //footer
    buttonText,
    buttonLink,

    //ribbon
    showRibbon,
    ribbonTitle,
    //design

    //advanced
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
          showFeatureHeading: true,
          showRibbon: true,
        });
        break;
      case 'style-2':
        setAttributes({
          showFeatureHeading: false,
          showRibbon: false,
        });
        break;
      case 'style-3':
        setAttributes({
          showFeatureHeading: false,
          showRibbon: false,
        });
        break;

      default:
        return false;
    }
  };

  const featureItemAdd = () => {
    const count = features.length + 1;
    const featuresList = [
      ...features,
      {
        text: `List Item #${count}`,
        icon: {
          "fa-check": {
            "name": "check",
            "source": "fontawesome",
            "type": "fas"
          }
        },
        color: "#03bb89",
      },
    ];
    setAttributes({ features: featuresList });
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
                  <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={true}>
                    <SelectControl
                      label={__("Premade Styles", "zolo-blocks")}
                      value={styles}
                      options={applyFilters('zolo_pricing_table_style_filter', STYLES) || STYLES}
                      onChange={(selected) => changePremade(selected)}
                    />
                  </PanelBody>

                  <PanelBody title={__('Header', 'zolo-blocks')} initialOpen={false}>
                    <TextControl
                      label={__('Title', 'zolo-blocks')}
                      value={titleText}
                      onChange={(titleText) => setAttributes({ titleText })}
                    />
                    <SelectControl
                      label={__("HTML Tag", "zolo-blocks")}
                      value={titleTagName}
                      options={TITLE_TAG}
                      onChange={(selected) => setAttributes({ titleTagName: selected })}
                    />
                    <TextControl
                      label={__('Sub Title', 'zolo-blocks')}
                      value={subTitleText}
                      onChange={(subTitleText) => setAttributes({ subTitleText })}
                    />
                  </PanelBody>

                  <PanelBody title={__('Price', 'zolo-blocks')} initialOpen={false}>
                    <SelectControl
                      label={__("Currency Symbol", "zolo-blocks")}
                      value={currencySymbol}
                      options={CURRENCY_SYMBOL}
                      onChange={(val) => setAttributes({ currencySymbol: val })}
                    />
                    {currencySymbol == 'custom' && (
                      <TextControl
                        label={__('Custom Symbol', 'zolo-blocks')}
                        value={customSymbol}
                        onChange={(customSymbol) => setAttributes({ customSymbol })}
                      />
                    )}

                    <TextControl
                      label={__('Price', 'zolo-blocks')}
                      value={price}
                      onChange={(price) => setAttributes({ price })}
                    />

                    <SelectControl
                      label={__("Currency Format", "zolo-blocks")}
                      value={currencyFormat}
                      options={CURRENCY_FORMAT}
                      onChange={(val) => setAttributes({ currencyFormat: val })}
                    />

                    <ToggleControl
                      label={__('Sale', 'zolo-blocks')}
                      checked={sale}
                      onChange={(sale) => setAttributes({ sale })}
                    />

                    {sale && (
                      <TextControl
                        label={__('Orginal Price', 'zolo-blocks')}
                        value={orginalPrice}
                        onChange={(orginalPrice) => setAttributes({ orginalPrice })}
                      />
                    )}

                    <TextControl
                      label={__('Period', 'zolo-blocks')}
                      value={period}
                      onChange={(period) => setAttributes({ period })}
                    />

                  </PanelBody>

                  <PanelBody title={__('Features', 'zolo-blocks')} initialOpen={false}>

                    <ToggleControl
                      label={__('Show Heading', 'zolo-blocks')}
                      checked={showFeatureHeading}
                      onChange={(showFeatureHeading) => setAttributes({ showFeatureHeading })}
                    />

                    {showFeatureHeading && (
                      <>
                        <TextControl
                          label={__('Title', 'zolo-blocks')}
                          value={featureTitle}
                          onChange={(featureTitle) => setAttributes({ featureTitle })}
                        />
                        <TextControl
                          label={__('Description', 'zolo-blocks')}
                          value={featureDesc}
                          onChange={(featureDesc) => setAttributes({ featureDesc })}
                        />
                      </>
                    )}

                    <SortableFeatures
                      features={features}
                      setAttributes={setAttributes}
                    />

                    <Button
                      className="zolo-sortable-add-button"
                      label={__("Add Item", "zolo-blocks")}
                      icon="plus-alt"
                      onClick={featureItemAdd}
                    >
                      <span className="zolo-btn-label">
                        {__("Add Item", "zolo-blocks")}
                      </span>
                    </Button>

                    <ResAlignmentControl
                      label={__("Alignment", "zolo-blocks")}
                      controlName={FEATURE_ALIGN}
                      resRequiredProps={resRequiredProps}
                      alignOptions={[
                        { label: "Left", value: "left" },
                        { label: "Center", value: "center" },
                        { label: "Right", value: "right" },
                      ]}
                    />

                  </PanelBody>

                  <PanelBody title={__('Footer', 'zolo-blocks')} initialOpen={false}>
                    <TextControl
                      label={__('Button Text', 'zolo-blocks')}
                      value={buttonText}
                      onChange={(buttonText) => setAttributes({ buttonText })}
                    />
                    <TextControl
                      label={__('Link', 'zolo-blocks')}
                      value={buttonLink}
                      onChange={(buttonLink) => setAttributes({ buttonLink })}
                      help={__('http://your-link.com', 'zolo-blocks')}
                    />
                  </PanelBody>

                  <PanelBody title={__('Ribbon', 'zolo-blocks')} initialOpen={false}>
                    <ToggleControl
                      label={__('Show', 'zolo-blocks')}
                      checked={showRibbon}
                      onChange={(showRibbon) => setAttributes({ showRibbon })}
                    />

                    {showRibbon && (
                      <>
                        <TextControl
                          label={__('Title', 'zolo-blocks')}
                          value={ribbonTitle}
                          onChange={(ribbonTitle) => setAttributes({ ribbonTitle })}
                        />

                        {/* <ResAlignmentControl
                          label={__("Align", "zolo-blocks")}
                          controlName={RIBBON_ALIGN}
                          resRequiredProps={resRequiredProps}
                          alignOptions={[
                            { label: "Left", value: "left" },
                            { label: "Center", value: "center" },
                            { label: "Right", value: "right" },
                            { label: "Justify", value: "justify" },
                          ]}
                        /> */}

                        <RangeResetControl
                          label={__('Horizontal Position', 'zolo-blocks')}
                          controlName={'ribbonXPosition'}
                          resRequiredProps={resRequiredProps}
                          min={-150}
                          max={150}
                          step={1}
                        />

                        <RangeResetControl
                          label={__('Vertical Position', 'zolo-blocks')}
                          controlName={'ribbonYPosition'}
                          resRequiredProps={resRequiredProps}
                          min={-150}
                          max={150}
                          step={1}
                        />

                        <RangeResetControl
                          label={__('Rotate', 'zolo-blocks')}
                          controlName={'ribbonRotate'}
                          resRequiredProps={resRequiredProps}
                          min={-180}
                          max={180}
                          step={1}
                        />
                      </>
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
