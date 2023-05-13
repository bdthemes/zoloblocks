//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import {
  BaseControl,
  Button,
  ButtonGroup,
  __experimentalDivider as Divider,
  PanelBody,
  SelectControl,
  TabPanel,
  TextControl,
  ToggleControl,
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
  BTN_BORDER,
  BTN_HOVER_BG,
  BTN_HOVER_BORDER,
  BTN_MARGIN,
  BTN_NORMAL_BG,
  BTN_PADDING,
  BTN_SHADOW,
  DESC_MARGIN,
  FEATURE_ALIGN,
  FEATURE_DESC_MARGIN,
  FEATURE_ICON_GAP,
  FEATURE_ICON_SIZE,
  FEATURE_ITEM_GAP,
  FEATURE_MARGIN,
  FEATURE_PADDING,
  NORMAL_HOVER,
  STYLES,
  TITLE_BORDER,
  TITLE_BORDER_RADIUS,
  TITLE_MARGIN,
  TITLE_PADDING,
  TITLE_TAG,
  TITLE_TEXT_SHADOW,
  WRAPPER_BG,
  WRAPPER_BORDER,
  WRAPPER_MARGIN,
  WRAPPER_PADDING,
  WRAPPER_SHADOW
} from './constants';
import {
  BTN_TYPOGRAPHY,
  DESC_TYPOGRAPHY,
  FEATURE_DESC_TYPOGRAPHY,
  FEATURE_TITLE_TYPOGRAPHY,
  FEATURE_TYPOGRAPHY,
  RIBBON_TYPOGRAPHY,
  TITLE_TYPOGRAPHY
} from './constants/typoPrefixConstant';

const Inspector = ({ attributes, setAttributes }) => {

  const {
    resMode,

    //layout
    styles,

    //header
    titleText,
    titleTagName,
    showDesc,
    descText,

    //price
    pricePrefix,
    price,
    priceSuffix,
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
    buttonOpenNewTab,
    showChatBtn,
    chatBtnText,
    chatBtnLink,
    chatBtnOpenNewTab,

    //ribbon
    showRibbon,
    ribbonTitle,

    //header style
    titleColor,
    titleBgColor,
    descColor,

    //feature style
    featureTitleColor,
    featureDescColor,
    featureColor,
    featureIconColor,

    //button style
    btnTextColor,
    btnHoverTextColor,
    btnBgHoverType,
    btnBorderHoverType,

    //ribbon style
    ribbonColor,
    ribbonBgColor,

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
          showDesc: true,
        });
        break;
      case 'style-2':
        setAttributes({
          showFeatureHeading: false,
          showRibbon: false,
          showDesc: false,
        });
        break;
      case 'style-3':
        setAttributes({
          showFeatureHeading: false,
          showRibbon: false,
          showDesc: false
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
                    <ToggleControl
                      label={__('Show Description', 'zolo-blocks')}
                      checked={showDesc}
                      onChange={(showDesc) => setAttributes({ showDesc })}
                    />

                    {showDesc && (
                      <TextControl
                        label={__('Description', 'zolo-blocks')}
                        value={descText}
                        onChange={(descText) => setAttributes({ descText })}
                      />
                    )}
                  </PanelBody>

                  <PanelBody title={__('Price', 'zolo-blocks')} initialOpen={false}>

                    <TextControl
                      label={__('Prefix', 'zolo-blocks')}
                      value={pricePrefix}
                      onChange={(pricePrefix) => setAttributes({ pricePrefix })}
                      placeholder={__('$', 'zolo-blocks')}
                    />


                    <TextControl
                      label={__('Price', 'zolo-blocks')}
                      value={price}
                      onChange={(price) => setAttributes({ price })}
                    />

                    <TextControl
                      label={__('Suffix', 'zolo-blocks')}
                      value={priceSuffix}
                      onChange={(priceSuffix) => setAttributes({ priceSuffix })}
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
                      help={__('Using comma indicator for multiple lines', 'zolo-blocks')}
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

                  <PanelBody title={__('Buttons', 'zolo-blocks')} initialOpen={false}>
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
                    <ToggleControl
                      label={__('Open in new tab', 'zolo-blocks')}
                      checked={buttonOpenNewTab}
                      onChange={(buttonOpenNewTab) => setAttributes({ buttonOpenNewTab })}
                    />

                    <ToggleControl
                      label={__('Show Chat Button', 'zolo-blocks')}
                      checked={showChatBtn}
                      onChange={(showChatBtn) => setAttributes({ showChatBtn })}
                    />
                    {showChatBtn && (
                      <>
                        <TextControl
                          label={__('Button Text', 'zolo-blocks')}
                          value={chatBtnText}
                          onChange={(chatBtnText) => setAttributes({ chatBtnText })}
                        />
                        <TextControl
                          label={__('Link', 'zolo-blocks')}
                          value={chatBtnLink}
                          onChange={(chatBtnLink) => setAttributes({ chatBtnLink })}
                          help={__('http://your-link.com', 'zolo-blocks')}
                        />
                        <ToggleControl
                          label={__('Open in new tab', 'zolo-blocks')}
                          checked={chatBtnOpenNewTab}
                          onChange={(chatBtnOpenNewTab) => setAttributes({ chatBtnOpenNewTab })}
                        />
                      </>
                    )}

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
                  <PanelBody title={__('Header', 'zolo-blocks')} initialOpen={true} >
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

                    <TextShadowControl
                      controlName={TITLE_TEXT_SHADOW}
                      resRequiredProps={resRequiredProps}
                      enableTransition={false}
                    />

                    {showDesc && (
                      <>
                        <Divider />
                        <BaseControl>
                          <h3 className="zolo-devider-title"> {__("Description ", "zolo-blocks")} </h3>
                        </BaseControl>

                        <TypographyDropdown
                          label="Typography"
                          typoPrefixConstant={DESC_TYPOGRAPHY}
                          resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                          label={__('Color', 'zolo-blocks')}
                          color={descColor}
                          onChange={(val) => setAttributes({
                            descColor: val,
                          })}
                        />
                        <ResDimensionsControl
                          label={__('Margin', 'zolo-blocks')}
                          controlName={DESC_MARGIN}
                          resRequiredProps={resRequiredProps}
                        />
                      </>
                    )}
                  </PanelBody>

                  <PanelBody title={__('Pricing', 'zolo-blocks')} initialOpen={false}>
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

                    <TextShadowControl
                      controlName={TITLE_TEXT_SHADOW}
                      resRequiredProps={resRequiredProps}
                      enableTransition={false}
                    />

                    {pricePrefix && (
                      <>
                        <Divider />
                        <BaseControl>
                          <h3 className="zolo-devider-title"> {__("PreFix ", "zolo-blocks")} </h3>
                        </BaseControl>
                        <RangeResetControl
                          label={__('Size', 'zolo-blocks')}
                          controlName={'ribbonXPosition'}
                          resRequiredProps={resRequiredProps}
                          min={0}
                          max={100}
                          step={1}
                        />
                      </>
                    )}

                    {pricePrefix && (
                      <>
                        <Divider />
                        <BaseControl>
                          <h3 className="zolo-devider-title"> {__("Suffix ", "zolo-blocks")} </h3>
                        </BaseControl>
                        <RangeResetControl
                          label={__('Size', 'zolo-blocks')}
                          controlName={'ribbonXPosition'}
                          resRequiredProps={resRequiredProps}
                          min={0}
                          max={100}
                          step={1}
                        />
                      </>
                    )}

                    {(sale && orginalPrice) && (
                      <>
                        <Divider />
                        <BaseControl>
                          <h3 className="zolo-devider-title"> {__("Orginal Price ", "zolo-blocks")} </h3>
                        </BaseControl>
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
                      </>
                    )}

                  </PanelBody>

                  <PanelBody title={__('Features', 'zolo-blocks')} initialOpen={false}>

                    {showFeatureHeading && (
                      <>
                        <TypographyDropdown
                          label="Title Typography"
                          typoPrefixConstant={FEATURE_TITLE_TYPOGRAPHY}
                          resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                          label={__('Title Color', 'zolo-blocks')}
                          color={featureTitleColor}
                          onChange={(val) => setAttributes({
                            featureColor: val,
                          })}
                        />

                        <Divider />
                        <BaseControl>
                          <h3 className="zolo-devider-title"> {__("Description ", "zolo-blocks")} </h3>
                        </BaseControl>

                        <TypographyDropdown
                          label="Typography"
                          typoPrefixConstant={FEATURE_DESC_TYPOGRAPHY}
                          resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                          label={__('Color', 'zolo-blocks')}
                          color={featureDescColor}
                          onChange={(val) => setAttributes({
                            featureColor: val,
                          })}
                        />
                        <ResDimensionsControl
                          label={__('Margin', 'zolo-blocks')}
                          controlName={FEATURE_DESC_MARGIN}
                          resRequiredProps={resRequiredProps}
                          forBorderRadius={true}
                        />

                      </>
                    )}

                    {showFeatureHeading && (
                      <>
                        <Divider />
                        <BaseControl>
                          <h3 className="zolo-devider-title"> {__("Feature Lists ", "zolo-blocks")} </h3>
                        </BaseControl>
                      </>
                    )}
                    <TypographyDropdown
                      label="Typography"
                      typoPrefixConstant={FEATURE_TYPOGRAPHY}
                      resRequiredProps={resRequiredProps}
                    />

                    <ColorControl
                      label={__('Color', 'zolo-blocks')}
                      color={featureColor}
                      onChange={(val) => setAttributes({
                        featureColor: val,
                      })}
                    />

                    <ResRangeControl
                      label={__('Item Gap', 'zolo-blocks')}
                      resRequiredProps={resRequiredProps}
                      controlName={FEATURE_ITEM_GAP}
                      min={0}
                      max={100}
                      step={1}
                    />

                    <ResDimensionsControl
                      label={__('Margin', 'zolo-blocks')}
                      controlName={FEATURE_MARGIN}
                      resRequiredProps={resRequiredProps}
                      forBorderRadius={true}
                    />
                    <ResDimensionsControl
                      label={__('Padding', 'zolo-blocks')}
                      controlName={FEATURE_PADDING}
                      resRequiredProps={resRequiredProps}
                      forBorderRadius={true}
                    />
                    <ColorControl
                      label={__('Icon Color', 'zolo-blocks')}
                      color={featureIconColor}
                      onChange={(val) => setAttributes({
                        titleColor: val,
                      })}
                    />
                    <ResRangeControl
                      label={__('Icon Size', 'zolo-blocks')}
                      resRequiredProps={resRequiredProps}
                      controlName={FEATURE_ICON_SIZE}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <ResRangeControl
                      label={__('Icon Gap', 'zolo-blocks')}
                      resRequiredProps={resRequiredProps}
                      controlName={FEATURE_ICON_GAP}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </PanelBody>

                  <PanelBody title={__('Buttons', 'zolo-blocks')} initialOpen={false}>
                    <ResDimensionsControl
                      label={__('Margin', 'zolo-blocks')}
                      controlName={BTN_MARGIN}
                      resRequiredProps={resRequiredProps}
                      forBorderRadius={true}
                    />
                    <ResDimensionsControl
                      label={__('Padding', 'zolo-blocks')}
                      controlName={BTN_PADDING}
                      resRequiredProps={resRequiredProps}
                      forBorderRadius={true}
                    />
                    <TypographyDropdown
                      label="Typography"
                      typoPrefixConstant={BTN_TYPOGRAPHY}
                      resRequiredProps={resRequiredProps}
                    />
                    <ColorControl
                      label={__('Text Color', 'zolo-blocks')}
                      color={btnTextColor}
                      onChange={(val) => setAttributes({
                        btnTextColor: val,
                      })}
                    />
                    <ColorControl
                      label={__('Hover Text Color', 'zolo-blocks')}
                      color={btnHoverTextColor}
                      onChange={(val) => setAttributes({
                        btnHoverTextColor: val,
                      })}
                    />

                    <PanelBody title={__('Background', 'zolo-blocks')} initialOpen={false}>
                      <ButtonGroup>
                        {NORMAL_HOVER.map(({ value, label }) => (
                          <Button
                            variant={btnBgHoverType === value ? 'primary' : 'secondary'}
                            onClick={() => setAttributes({ btnBgHoverType: value })}
                          >
                            {label}
                          </Button>
                        ))}
                      </ButtonGroup>

                      {btnBgHoverType == 'normal' && (
                        <NormalBGControl
                          noMainBGImg={true}
                          controlName={BTN_NORMAL_BG}
                          resRequiredProps={resRequiredProps}
                        />
                      )}
                      {btnBgHoverType == 'hover' && (
                        <NormalBGControl
                          noMainBGImg={true}
                          controlName={BTN_HOVER_BG}
                          resRequiredProps={resRequiredProps}
                        />
                      )}
                    </PanelBody>
                    <PanelBody title={__('Border', 'zolo-blocks')} initialOpen={false}>
                      <ButtonGroup>
                        {NORMAL_HOVER.map(({ value, label }) => (
                          <Button
                            variant={btnBorderHoverType === value ? 'primary' : 'secondary'}
                            onClick={() => setAttributes({ btnBorderHoverType: value })}
                          >
                            {label}
                          </Button>
                        ))}
                      </ButtonGroup>

                      {btnBorderHoverType == 'normal' && (
                        <BorderControl
                          label={__('Border', 'zolo-blocks')}
                          controlName={BTN_BORDER}
                          resRequiredProps={resRequiredProps}
                        />
                      )}

                      {btnBorderHoverType == 'hover' && (
                        <BorderControl
                          label={__('Hover Border', 'zolo-blocks')}
                          controlName={BTN_HOVER_BORDER}
                          resRequiredProps={resRequiredProps}
                        />
                      )}

                    </PanelBody>

                    <PanelBody title={__('Box Shadow', 'zolo-blocks')} initialOpen={false}>
                      <BoxShadowControl
                        controlName={BTN_SHADOW}
                        resRequiredProps={resRequiredProps}
                      />
                    </PanelBody>


                  </PanelBody>

                  <PanelBody title={__('Ribbon', 'zolo-blocks')} initialOpen={false}>
                    <TypographyDropdown
                      label="Typography"
                      typoPrefixConstant={RIBBON_TYPOGRAPHY}
                      resRequiredProps={resRequiredProps}
                    />
                    <ColorControl
                      label={__('Color', 'zolo-blocks')}
                      color={ribbonColor}
                      onChange={(val) => setAttributes({
                        titleColor: val,
                      })}
                    />
                    <ColorControl
                      label={__('Background Color', 'zolo-blocks')}
                      color={ribbonBgColor}
                      onChange={(val) => setAttributes({
                        ribbonBgColor: val,
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
